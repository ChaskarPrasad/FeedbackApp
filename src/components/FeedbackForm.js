import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {

    const { addFeedback, feedbackEdit, updateData } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMesaage] = useState('');
    const [rating, setRating] = useState(10);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);

        }
    }, [feedbackEdit])
    function handleTextInput(e) {
        if (text === '') {
            setBtnDisabled(true);
            setMesaage(null);
        } else if (text !== '' && text.trim().length < 10) {
            setBtnDisabled(true);
            setMesaage('Text must be atleast 10 chars..');
        } else {
            setBtnDisabled(false);
            setMesaage(null);
        }
        setText(e.target.value)
        e.preventDefault();
    }

    // function handleSubmitForm(e){
    //     e.preventDefault();
    //     if(text.trim().length>=10){
    //         const newFeedback = {
    //             text :  text,
    //             rating : rating,
    //         }
    //         props.handleAdd(newFeedback);
    //         setText('');

    //     }
    // }
    function handleSubmitForm(e) {
        e.preventDefault();
        if (text.trim().length >= 10) {
            const newFeedback = {
                text: text,
                rating: rating,
            }
            if (feedbackEdit.edit === true) {
                updateData(feedbackEdit.item.id, newFeedback);
            }
            else {
                addFeedback(newFeedback);
            }
            setText('');

        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmitForm}>
                <h2>How would you rate your service with us!!</h2>
                <RatingSelect select={setRating} selected={rating} />
                <div className="input-group">
                    <input onChange={handleTextInput}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    ></input>
                    <Button type='submit' isDisable={btnDisabled}>Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
};

export default FeedbackForm;
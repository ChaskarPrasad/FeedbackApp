import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats(props) {
    const { feedback } = useContext(FeedbackContext);

    //Calculate total rating avg
    // let average = props.feedback.reduce((acc,cur)=>{
    //     return acc + cur.rating
    // },0) / props.feedback.length

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1);
    return (
        // <div className="feedback-stats">
        //     <h4>{props.feedback.length} Reviews</h4>
        //     <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        // </div>

        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;
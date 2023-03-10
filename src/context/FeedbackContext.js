import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit,setFeedbackEdit] = useState({item:{},edit:false})

    function deleteFeedback(id) {
        if (window.confirm("Are you sure you want to delete...")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    function addFeedback(newFeedback) {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }
    function updateFeedback(item) {
        setFeedbackEdit({
            item,
            edit:true
        });
    }

    //Update feedback data
    function updateData(id,updItem){
        setFeedback(feedback.map((item) => item.id === id ? { ...
            item, ...updItem } : item))
    }

    return <FeedbackContext.Provider value={{ feedback, 
                                              deleteFeedback, 
                                              addFeedback,
                                              updateFeedback,
                                              feedbackEdit,
                                              updateData
                                            }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
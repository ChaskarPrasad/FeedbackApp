import { motion, AnimatePresence } from 'framer-motion';
import React,{useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList() {
    const {feedback,isLoading} = useContext(FeedbackContext);

    // if (!props.feedback || props.feedback.length === 0) {
    //     return <p>No feedback yet</p>
    // }
    if (!isLoading===true && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }
    // return <div className="feedback-list">
    //     {props.feedback.map((item)=>(
    //         <FeedbackItem key={item.id} item={item} handleDelete={props.handleDelete}/>
    //     ))}
    // </div>

    return isLoading ? (<Spinner/>) : (
        <div className="feedback-list">
            {/* <AnimatePresence>
                {props.feedback.map((item) => (
                    <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                        <FeedbackItem key={item.id} item={item} handleDelete={props.handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence> */}

            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                        <FeedbackItem key={item.id} item={item}/>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div> 
    )
}

export default FeedbackList;
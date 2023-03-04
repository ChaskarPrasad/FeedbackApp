import React,{useContext} from "react";
import Card from "./shared/Card";
import {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem(props) {
    const {deleteFeedback,updateFeedback}  = useContext(FeedbackContext);
    // function handleClick(id){
    //     props.handleDelete(id);
    // }
    return (
        // <Card reverse={false}>
        //     <div className="num-display">{props.item.rating}</div>
        //     <button onClick={()=>handleClick(props.item.id)} className="close"><FaTimes color="red"/></button>
        //     <div className="text-display">{props.item.text}</div>
        //     {/* <button onClick={handleClick}>Click</button> */}
        // </Card>
         <Card reverse={false}>
         <div className="num-display">{props.item.rating}</div>
         <button onClick={()=>deleteFeedback(props.item.id)} className="close"><FaTimes color="red"/></button>
         <button onClick={()=>updateFeedback(props.item)} className="edit"><FaEdit color="black"/></button>
         <div className="text-display">{props.item.text}</div>
         {/* <button onClick={handleClick}>Click</button> */}
     </Card>
    )
}

export default FeedbackItem;

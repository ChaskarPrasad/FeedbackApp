import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFeedback();
    }, [])

    //fetch feedback data from json
    const fetchFeedback = async () => {
        const response = await fetch("/feedback")
        const data = await response.json()
        setFeedback(data);
        setIsLoading(false);
    }
    // function deleteFeedback(id) {
    //     if (window.confirm("Are you sure you want to delete...")) {
    //         setFeedback(feedback.filter((item) => item.id !== id))
    //     }
    // }

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete...")) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    // async function addFeedback(newFeedback) {
    //     const response = await fetch('/feedback', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify(newFeedback)
    //     })
    //     const data = await response.json()
    //     // newFeedback.id = uuidv4();
    //     // setFeedback([newFeedback, ...feedback])
    //     setFeedback([data, ...feedback])
    // }
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
    }
    function updateFeedback(item) {
        setFeedbackEdit({
            item,
            edit: true
        });
    }
    //Update feedback data
    // function updateData(id, updItem) {
    //     setFeedback(feedback.map((item) => item.id === id ? {
    //         ...item, ...updItem
    //     } : item))
    // }
    const updateData = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })
        const data = await response.json()
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...data
        } : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        feedbackEdit,
        updateData,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
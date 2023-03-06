import Header from './components/Header';
import './App.css';
import FeedbackList from './components/FeedbackList';
// import FeedbackData from "./data/FeedbackData";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
// import { v4 as uuidv4 } from 'uuid'
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // function addFeedback(newFeedback) {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback])
  // }
  // function deleteFeedback(id) {
  //   if (window.confirm("Are you sure you want to delete...")) {
  //     setFeedback(feedback.filter((item) => item.id !== id))
  //   }
  // }
  return (
    // <Router>
    //   <Header />
    //   <div className='container'>
    //     <Routes>
    //       <Route
    //         path='/'
    //         element={
    //           <>
    //             <FeedbackForm handleAdd={addFeedback} />
    //             <FeedbackStats feedback={feedback} />
    //             <FeedbackList
    //               feedback={feedback}
    //               handleDelete={deleteFeedback}
    //             />
    //           </>
    //         }
    //       />
    //       <Route path='/about' element={<AboutPage />} />
    //     </Routes>
    //     <AboutIcon/>
    //   </div>
    // </Router>

    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList/>
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;

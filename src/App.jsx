import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursesPage";
import './styles/Pages.css';
import AdmissionPage from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import Footer from "./components/Footer/Footer";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sakshi sanjay patil"
          studentPhotoUrl="/images/sakshi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>


      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/course" element={<CoursePage/>}/>
          <Route path="/admission" element={<AdmissionPage/>}/>
        </Routes>
        <ChatbotComponent/>
        <Footer/>
      </Router>
    </div>
  )
}
export default App;
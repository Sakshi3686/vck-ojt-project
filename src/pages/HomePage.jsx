import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../styles/Pages.css"

const HomePage = () => {
    return(
        <div>
            <Header/>
            <div className="page-container" style={{overflow:"auto"}}>
                <div className="hero-section">
                    <img 
                    src="/images/collegeLogo.png" 
                    alt="college banner" 
                    className="hero-banner-image"
                    />
                    <div className="hero-overlay-text">
                    <h1>welcome to vivekanand college!</h1>
                    <p>your journey to excellence starts here.</p>
                    <Link to="/admission"><button><u>Apply now!</u></button></Link>
                    </div>
                </div>
            <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2>
            <ul>
                <li>
                    <b>Legacy of Excellence:</b> Decades of commitment to quality education.
                </li>
                <li>
                    <b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.
                </li>
                <li>
                    <b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.
                </li>
                <li>
                    <b>Holistic Development:</b>Focus on co-curricular activities, sports, and community service.
                </li>
                <li>
                    <b>Strong Placements:</b> Excellent career opportunities with leading companies.
                </li>
            </ul>
            <h2>Campus Life & Facilities</h2>
            <div className="image-gallary">
            <img src="/images/im1.jpeg" />
            <img src="/images/im2.jpg" />
            </div>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <div className="call-to-action">
            <p>Ready to explore our courses?</p>
            <Link to="/course"><button id="id4">Explore Courses</button></Link>
            </div>
        </div>
        </div>
    )
}
export default HomePage;
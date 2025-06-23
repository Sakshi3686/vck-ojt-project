import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../styles/pages.css"

const HomePage = () => {
    return(
        <div>
            <Header/>
            <div className="main">
                <div className="main1">
            <img src="https://vivekanandcollege.ac.in/images/header-new.png" className="image"/>
                <section className="content">
        
                    <h1 style={{fontSize:'60px'}}>welcome to vivekanand college!</h1>
                    <p>your journey to excellence starts here.</p>
                    <Link to="/admission"><button>Apply now!</button></Link>
                </section>
            <p id="para1"><strong>Vivekanand College</strong>is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p id="para2">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2 id="id1">Why Choose Vivekanand College?</h2>
            <ul id="id2">
                <li>Legacy of Excellence: Decades of commitment to quality education.</li>
                <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                <li>Strong Placements: Excellent career opportunities with leading companies.</li>
            </ul>
            <h2>Campus Life & Facilities</h2>
            <div className="image1">
            <img src="/images/im1.jpeg" />
            <img src="/images/im2.jpg" />
            </div>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <p id="id3">Ready to explore our courses?</p>
            <Link to="/course"><button id="id4">Explore Courses</button></Link>
                </div>
            </div>
        </div>
    )
}
export default HomePage;
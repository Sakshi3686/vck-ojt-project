import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
const CoursePage = () => {
    return(
        <div>
            <Header/>
            <div className="main">
                <div className="main1">
            <h1 id="myid2">Our Academic Programs</h1>
            <p id="myid3">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2 id="h2">Discover Campus Life</h2>
            <div className="video-container">
            <video width="100%" height="50%" controls>
                <source src="/videos/myvideo"></source>
            </video>
            <p className="videp-caption"><i>get a glimpse of the vibrant academic and social life at vivekanand college</i></p>
            </div>
            <h2 id="h2">Undergraduate Programs (UG)</h2>
            <ul id="mylist">
                <li><b>Bachelor of Science (B.Sc.)</b>
                    <ul>
                        <li>Computer Science (3 years)</li>
                        <li>Information Technology (3 years)</li>
                        <li>Biotechnology (3 years)</li>
                    </ul>
                </li>
                <li><b>Bachelor of Commerce (B.Com)</b>
                    <ul>
                        <li>Accounting & Finance (3 years)</li>
                        <li>Banking & Insurance (3 years)</li>
                    </ul>
                </li>
                <li><b>Bachelor of Arts (B.A.)</b>
                    <ul>
                        <li>English Literature (3 years)</li>
                        <li>Psychology (3 years)</li>
                    </ul>
                </li>
            </ul>
            <h2 id="h2">Postgraduate Programs (PG)</h2>
            <ul id="mylist">
                <li>Master of Science (M.Sc.)</li>
            <ul>
                <li>Computer Science (2 years)</li>
                <li>Information Technology (2 years)</li>
            </ul>
                <li>Master of Commerce (M.Com) (2 years)</li>
                <li>Master of Arts (M.A.) (2 years)</li>
            </ul>
            <h2 id="h2">Program Details & Fee Structure (Annual)</h2>
            <table border="2px" id="table"> 
                    <tr>
                        <th>program type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>
                        <th>Eligibility</th>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>
            </table>
            <h2 id="h2">Specialized & Vocational Courses</h2>
            <p id="myid3">In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement</p>
            <p id="myid4">Have questions about a specific course?</p>
            <Link to="/contact"><button id="button3">Inquire About Courses</button></Link>
            
                </div>
            </div>
        </div>
    )
}
export default CoursePage;
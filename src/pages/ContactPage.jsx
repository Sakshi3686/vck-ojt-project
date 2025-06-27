import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div>
            <Header/>
            <div className="page-container" style={{overflow:"auto"}}>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General enqires</h2>
            <p>
                <b>Vivekanand College Main Campus</b><br/>
                [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br/>
                India
            </p>
            <p>
                Phone: +91 12345 67890<br/>
                Email: info@vivekanandcollege.edu<br/>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
            </p>
            <h2>Admissions Office</h2>
            <p>
                For all admission-related queries regarding undergraduate or postgraduate programs<br/>
                Phone: +91 98765 43210<br/>
                Email: admissions@vivekanandcollege.edu
            </p>
            <h2>Student Support Services</h2>
            <p>
                For current student support, academic advising, or general assistance<br/>
                Phone: +91 87654 32109<br/>
                Email: studentsupport@vivekanandcollege.ed
            </p>
            <h2>Find Us on the Map</h2>
            <p>
                <br/>
                <a href="https://www.google.com/maps/search/Vivekanand+College/@16.695294,74.235904,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"><u>View on Google Map</u></a>
            </p>
            <h2>Send Us a Message</h2>
            <p>
                [A contact form with fields for Name, Email, Subject, Message can be added here.]
            </p>
                
            </div>
        
        </div>
    )
}
export default ContactPage;
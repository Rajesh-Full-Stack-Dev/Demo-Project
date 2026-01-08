
// import $ from "jquery";
import '../assets/css/custom.css';
import vector from '../assets/Images/vector.png';


function Home() {

    return (
        <div>
            <section>
                <div className="container-fluid bg-blue" style={{background: `url(${vector}) center/cover no-repeat`, height:"80vh"}}>
                    <div className="container hero-section h-100">
                        <div className="row h-100">
                            <div className="col-md-6 py-5 d-flex align-items-center" data-aos="fade-right">
                                <div>
                                    <h1 className="text-white hero-heading">
                                        Welcome To Demo Website
                                    </h1>
                                    <p className="text-white hero-subtitle">
                                        I'm Rajesh Patil Contact me
                                    </p>
                                    <a href="tel:919307682919" className="btn btn-warning px-4 py-2 fw-semibold">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
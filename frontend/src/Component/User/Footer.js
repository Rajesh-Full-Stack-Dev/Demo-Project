
import { Link } from "react-router-dom";
import '../assets/css/custom.css';

function Footer() {
  return (
    <div>
        <div className="bg-dark m-0 w-100 py-4">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <ul className="d-flex gap-3 p-0">
                        <li className="nav-item mb-2 mb-lg-0">
                            <Link className="text-decoration-none text-light" to="/"><u>Home</u></Link>
                        </li>
                        <li className="nav-item mb-2 mb-lg-0">
                            <Link className="text-decoration-none text-light" to="/about"><u>About</u></Link>
                        </li>
                        <li className="nav-item mb-2 mb-lg-0">
                            <Link className="text-decoration-none text-light" to="/login"><u>Login</u></Link>
                        </li>
                        <li className="nav-item mb-2 mb-lg-0">
                            <Link className="text-decoration-none text-light" to="/registration"><u>Registration</u></Link>
                        </li>
                    </ul>
                </div>
                
                <div className="w-100 p-0 m-0 bg-white" style={{height:"2px"}}></div>
                <div className="mt-4">
                    <p className="text-center text-white">
                        Copyright © 2026 All rights reserved | Designed By 
                        <a className="ps-2 text-decoration-none fw-semibold text-warning" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                            Rajesh Patil
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
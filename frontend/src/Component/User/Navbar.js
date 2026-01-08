import { Link } from "react-router-dom";
import logo from '../assets/Images/logo.png';
import '../assets/css/custom.css';

function Navbar() {

    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const logout = () => {
        localStorage.removeItem("loggedUser");
        window.location.href = "/login";
    };

  return (
    
    <div className="container-fluid p-0 m-0">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid ">
                <Link to="/" className="logo-link d-flex flex-column align-items-center">
                    <img src={logo} className="logo-img" />
                    <h6 className="logo-text">Demo Web</h6>
                </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse justify-cotent-between align-items-center navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-center gap-4 align-items-center w-100 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active fw-semibold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link fw-semibold" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link fw-semibold" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {!user ? (
                        <>
                            <form class="d-flex gap-2" role="search">
                                <Link class="btn btn-primary fw-semibold" to="/login">Login</Link>
                                <Link class="btn btn-warning fw-semibold" to="/registration">Registration</Link>
                            </form>
                        </>
                    ) : (
                        <div className="dropdown">
                        <Link className="text-decoration-none text-dark fw-semibold dropdown-toggle"
                            data-bs-toggle="dropdown">
                            {user.name}
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/all-users">All Users</Link></li>
                            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                        </ul>
                        </div>
                    )}
                    {/* <form class="d-flex gap-2" role="search">
                        <Link class="btn btn-primary fw-semibold" to="/login">Login</Link>
                        <Link class="btn btn-warning fw-semibold" to="/registration">Registration</Link>
                    </form> */}
                </div>
            </div>
        </nav>
    </div>

  );
}

export default Navbar;

import $ from "jquery";
import { useState } from "react";
import API_BASE_URL from "../../helper";

function Login() {

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    $.ajax({
      url: `${API_BASE_URL}/api/login`,
      type: "POST",
      data: {
        email: $("#email").val(),
        password: $("#password").val()
      },
      success: function (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));

        setSuccessMessage("Registration Successful");
        setShowSuccessModal(true);
        setTimeout(() => {
            window.location.href = "/all-users";
        }, 1500);
      },
      error: function () {
        setError("Invalid Email or Password");
      }
    });
  };
  
  return (
    <div>
        <section>
          <div className="container-fluid bg-dark">
            <div className="container">
              <div className="row py-5 justify-content-center">
                <div className="col-md-4">
                  <div className="card shadow-lg border-1 border-white bg-dark">

                    <div className="card-header text-dark text-center">
                      <h3 className="mb-0 pt-2 text-white">User Login</h3>
                    </div>

                    <div className="card-body">

                      {/* ERROR MESSAGE HERE */}
                      {error && (
                        <div className="alert alert-danger text-center">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleLogin}>
                        <div className="mb-3">
                          <label className="form-label text-white fw-semibold">Email</label>
                          <input type="email" id="email" className="form-control" required />
                        </div>

                        <div className="mb-3">
                          <label className="form-label text-white fw-semibold">Password</label>
                          <div className="input-group">
                            <input type={showPassword ? "text" : "password"} id="password" 
                              className="form-control" required />
                            <span className="input-group-text" style={{ cursor: "pointer" }}
                              onClick={() => setShowPassword(!showPassword)} >
                              <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                            </span>
                          </div>
                        </div>

                        <div className="text-center">
                          <button className="btn btn-warning fw-semibold">
                            Login
                          </button>
                        </div>

                        <p className="text-center text-white pt-3">
                          Don't have an account? <a href="/registration">Register Now</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {showSuccessModal && (
        <div className="modal show d-block" style={{ background: "#00000088" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-success text-white">
                        <h5>Success</h5>
                        <button className="btn-close text-white" onClick={() => setShowSuccessModal(false)}></button>
                    </div>
                    <div className="modal-body text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-success mb-3" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 11.001 8a8 8 0 0115.999 0zM6.97 11.03a.75.75 0 001.06 0l4.992-4.992a.75.75 0 10-1.06-1.06L7.5 9.939 4.53 6.97a.75.75 0 10-1.06 1.06l3.5 3.5z"/>
                        </svg>
                        <h5>{successMessage}</h5>
                        <p>Your account will be activated soon.</p>
                        <button className="btn btn-success mt-3" onClick={() => setShowSuccessModal(false)} >OK </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Login;
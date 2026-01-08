import $ from "jquery";
import { useState } from "react";
import API_BASE_URL from "../../helper.js";

function Registraion() {

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", $("#name").val());
        formData.append("city", $("#city").val());
        formData.append("email", $("#email").val());
        formData.append("phone", $("#phoneNo").val());
        formData.append("password", $("#password").val());
        formData.append("profile", $("#profile")[0].files[0]);

        $.ajax({
        url: `${API_BASE_URL}/api/register`,
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            setSuccessMessage("Registration Successful");
            setShowSuccessModal(true);
            $("#registrationForm")[0].reset();
            setTimeout(() => {
                window.location.href = "/login";
            }, 1500);
        },
        error: function () {
            alert("Error while registering");
        }
        });
    };
  
  return (
    <div>
        <section>
            <div className="container-fluid bg-dark p-0 m-0">
                <div className="container">
                    <div className="row py-5 h-100 justify-content-center">
                        <div className="col-md-7">
                            <div className="card shadow-lg border border-white border-2 bg-dark">
                                <div class="card-header text-dark text-center">
                                    <h3 className="mb-0 text-white pt-2">User Registration</h3>
                                </div>
                                <div className="card-body">
                                    <form id="registrationForm" onSubmit={handleSubmit}>
                                        <div className="modal-body row g-3">
                                            <div className="col-md-6 mb-3 mb-lg-0">
                                                <label className="fw-semibold text-white">Name</label>
                                                <input className="form-control" id="name" placeholder="enter name" required />
                                            </div>
                                            <div className="col-md-6 mb-3 mb-lg-0">
                                                <label className="fw-semibold text-white">City</label>
                                                <select className="form-control" id="city" required>
                                                    <option value="">-- Select City --</option>
                                                    <option value="Mumbai">Mumbai</option>
                                                    <option value="Pune">Pune</option>
                                                    <option value="Nashik">Nashik</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3 mb-lg-0">
                                                <label className="fw-semibold text-white">Email</label>
                                                <input className="form-control" id="email" placeholder="enter email" required />
                                            </div>
                                            <div className="col-md-6 mb-3 mb-lg-0">
                                            <label className="fw-semibold text-white">Phone No.</label>
                                            <input
                                                className="form-control"
                                                id="phoneNo"
                                                placeholder="enter phone number"
                                                type="text"
                                                maxLength={10} // maximum 10 characters
                                                onChange={(e) => {
                                                if (/^\d*$/.test(e.target.value)) {
                                                    e.target.value = e.target.value;
                                                } else {
                                                    e.target.value = e.target.value.replace(/\D/g, "");
                                                }
                                                }}
                                                required
                                            />
                                            </div>

                                            <div className="col-md-6 mb-3 mb-lg-0">
                                                <label className="fw-semibold text-white">Password</label>
                                                <input className="form-control" id="password" type="password" placeholder="enter password" />
                                            </div>
                                            <div className="col-md-6 mb-3 mb-lg-0">
                                                <label className="fw-semibold text-white">Confirm Password</label>
                                                <input className="form-control" id="confirmPassword" type="password" placeholder="enter confirm cassword" />
                                            </div>                                            
                                            <div className="col-md-12 mb-3 mb-lg-0">
                                                <label className="fw-semibold text-white">Profile</label>
                                                <input type="file" id="profile" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="modal-footer mt-3 d-flex justify-content-center">
                                            <button className="btn btn-warning fw-semibold">
                                                Register
                                            </button>                                    
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SUCCESS MODAL */}
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

export default Registraion;
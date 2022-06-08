import React from 'react';

function SignUpModal() {
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px",  }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">Email Adress</label>
                      <input 
                      name="email"
                      type="email" className="form-control" id="signUpEmail" placeholder="Email"
                      required />

                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">Password</label>
                      <input 
                      name="pwd"
                      type="password" className="form-control" id="signUpPwd" 
                      required />

                    </div>

                    <div className="mb-3">
                      <label htmlFor="repeatPwd" className="form-label">Repeat Password</label>
                      <input 
                      name="pwd"
                      type="password" className="form-control" id="repeatPwd" 
                      required />
                      <p className="text-danger mt-1"></p>
                    </div>
                    <div className="btn btn-primary">Submit</div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpModal;
import React from 'react';

function Contact(){
    return(
        <div className="container">
        <div className="section-4">
          <div className="about">
            <h2>Contact us</h2>
            <hr className="hr" />
          </div>
          <div className="regi-form">
            <div className="row">
              <div className="col-lg-4 Rg-Form">
                <h3>Registration <p /> Form</h3>
              </div>
              <div className="col-lg-8 main-form">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">First Name : </label>
                    <input type="email" placeholder="Enter Your First Name " className="form-control input1" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Last Name : </label>
                    <input type="email" placeholder="Enter Your Last Name" className="form-control input1" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control input1" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control input1" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <input className="btn btn-light" type="submit" defaultValue="Submit" />
                </form>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
}


export default Contact;
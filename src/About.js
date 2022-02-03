import React from 'react';

function About(){
    return(
        <div className="container">
        <div className="section-2">
          <div className="about">
            <h2>About us</h2>
            <hr className="hr" />
          </div>
          <div className="section2-card">
            <div className="row">
              <div className="col-lg-4">
                <div className="card" style={{width: '25rem'}}>
                  <img className="card-img-top img1" src="img/b.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h3 className="card-title">I am Badhon</h3>
                    <h5>I'm Web Developer</h5>
                    <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quos asperiores beatae, neque debitis nemo, fuga molestias, et exercitationem voluptatibus velit. Optio quam voluptatum suscipit repellendus nesciunt numquam dicta incidunt! Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card" style={{width: '25rem'}}>
                  <img className="card-img-top img1" src="img/rasu.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h3 className="card-title">I am Rashu</h3>
                    <h5>I'm Laravel Developer</h5>
                    <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quos asperiores beatae, neque debitis nemo, fuga molestias, et exercitationem voluptatibus velit. Optio quam voluptatum suscipit repellendus nesciunt numquam dicta incidunt! Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card3" style={{width: 'rem'}}>
                  <img className="card-img-top img1" src="img/2ndslide.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h3 className="card-title text-bold">I am Nishad</h3>
                    <h5>I'm Graphics Designer</h5>
                    <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quos asperiores beatae, neque debitis nemo, fuga molestias, et exercitationem voluptatibus velit. Optio quam voluptatum suscipit repellendus nesciunt numquam dicta incidunt! Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
}


export default About;
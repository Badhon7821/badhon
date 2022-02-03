import React from 'react';

function Project(){
    return(
        <div className="container">
        <div className="section-3">
          <div className="about">
            <h2>Our Project</h2>
            <hr className="hr" />
            <p className="aboutp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quidem ipsam odio saepe id dolore reiciendis voluptatem voluptatibus impedit aliquid error quis, quam expedita cupiditate minus non iure corporis nostrum.</p>
          </div>
          <div className="section3-img">
            <div className="row">
              <div className="col-lg-3">
                <img src="img/101b.jpg" alt="" />
              </div>
              <div className="col-lg-3">
                <img src="img/102b.jpg" alt="" />
              </div>
              <div className="col-lg-3">
                <img src="img/103b.jpg" alt="" />
              </div>
              <div className="col-lg-3">
                <img src="img/104.jpg" alt="" />
              </div>
            </div>
            
          </div>
          <div className="section3-button">
            <button className="btn btn-outline-light" type="submit">Load more</button>
            <button className="btn btn-outline-light" type="submit">See all &gt;&gt;</button>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
}


export default Project;
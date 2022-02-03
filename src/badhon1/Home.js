import React from 'react';

function Home(){
    return(
       
      
        <div className="container">
        <div className="section-1">
          <div className="section-content">
            <h1>Hi, I'm Badhon</h1>
            <h3>I'm a professional Web Developer</h3>
          </div>
          <div className="clear" />
        </div>
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
        <div className="section-5">
          <div className="about">
            <h2>Our Review</h2>
            <hr className="hr" />
          </div>
          <div className="section5-review">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner review-img">
                <div className="carousel-item active">
                  <img src="img/b.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Hi, I'm Bappy</h3>
                    <p>He is a good seller.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="img/1stslide.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Hi, I'm Rafi</h3>
                    <p>He is a good seller.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="img/2ndslide.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Hi, I'm Mahabur</h3>
                    <p>He is a good seller.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    
    );
}


export default Home;
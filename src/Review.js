import React from 'react';

function Riview(){
    return(
        
      <div className="container">
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


export default Riview;
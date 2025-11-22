import React from "react";
import "../home_page/homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Homepage() {
  return (
    <>
      <div className="allfields ">
        <header>
          <div className="logo">
            <img src="https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_640.jpg"></img>
            <nav> home</nav>
            <nav>about</nav>
            <nav>services</nav>
            <input type="search" placeholder="search"></input>
            <a href="/" className="cta-btn">
              <button className="btn btn-primary">sign up</button>
            </a>
          </div>
        </header>

        <section className="sec">
          <h1>Welcome to Our Website </h1>
        </section>

        <main>
          <section className="features">
            {/* /first card */}
            <div
              className="card"
              style={{
                display: "flex",
                width: "22rem",
                backgroundColor: "pink",
                borderRadius: "25px  23px",
                marginLeft: "50px",
              }}
            >
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  E-commerce content refers to all materials a business creates
                  and distributes to attract, engage, and retain customers
                  online, ultimately driving sales and building brand loyalty.
                </p>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>

            {/* second card */}

            <div
              className="card"
              style={{
                display: "flex",
                width: "22rem",
                backgroundColor: "pink",
                borderRadius: "0px  0px 23px 23px",
                marginLeft: "90px",
              }}
            >
              <img
                src="data:image/png;base64,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"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Key Types of E-commerce Content E-commerce content is diverse
                  and used across various platforms: Product Descriptions:
                  Detailed,
                </p>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>

            {/* /Third card */}

            <div className="cards">
              <div
                className="card "
                style={{
                  display: "flex",
                  backgroundColor: "pink",
                  borderRadius: "25px  23px",
                  marginLeft: "50px",
                  height: "600px",
                }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    User-Generated Content (UGC): Customer reviews, ratings,
                    testimonials, photos, and videos, which build trust and
                    provide social proof. Social Media Posts: Engaging content
                    tailored for platforms like Instagram, Facebook, and TikTok
                    to build community, Generated Content (UGC): Customer
                    reviews, ratings, testimonials, photos, and videos, which
                    build trust and provide social proof. Social Media Posts:
                    Engaging content
                  </p>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>

        <h2>rating</h2>
        <hr></hr>

        <section className="testinomal">
          {/* first card */}
          <div class="card" style={{ width: "48rem;" }}>
          
            <div class="card-body">
              <h5 class="card-title">jamesh</h5>
              <p class="card-text">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          {/* second card */}

          <div class="card" style={{ width: "18rem;" }}>
          
            <div class="card-body">
              <h5 class="card-title">robin hood</h5>
              <p class="card-text">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          {/* third card */}

          <div class="card" style={{ width: "18rem;" }}>
           
            <div class="card-body">
              <h5 class="card-title">elice</h5>
              <p class="card-text">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          {/* fourth card */}
          <div class="card" style={{ width: "18rem;" }}>
           
            <div class="card-body">
              <h5 class="card-title">anderson</h5>
              <p class="card-text">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          {/* fifth card */}

          <div class="card" style={{ width: "18rem;" }}>
          
            <div class="card-body">
              <h5 class="card-title">stuwerd</h5>
              <p class="card-text">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          {/* sixth card */}

          <div class="card" style={{ width: "18rem;" }}>
            
            <div class="card-body">
              <h5 class="card-title">jack sparrow</h5>
              <p class="card-text">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;

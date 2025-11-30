import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DealCards() {
  return (
    <>


    {/* first card */}
      <div className="container mt-4">
        {/* Title Row */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Best Deals on Designer Furniture</h5>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>➤</span>
        </div>

        {/* Cards Grid */}
        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/xif0q/shoe-rack/5/g/s/12-12-0-4-4-tier-shoe-rack-organiser-black-plastic-storage-shelf-original-imahhgjg2waymywh.jpeg?q=80"
                className="card-img-top"
                alt="Home Temple"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Shoe Rack</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/xif0q/inflatable-sofa/q/p/o/34-4-seater-99-pvc-3-ibe-223-fitric-190-original-imahh7v2yvy7pgzs.jpeg?q=80"
                className="card-img-top"
                alt="Shoe Rack"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Inflatable Sofas</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/xif0q/jacket/9/3/p/xl-1-no-mt2-jkt-arrow-print-ice-blue-white-motrex-original-imahgnjm9qmkzfwz.jpeg?q=80"
                className="card-img-top"
                alt="Inflatable Sofas"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Jerkin</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/xif0q/headphone/3/c/f/new-edition-tws-m19-gaming-earbuds-bluetooth-5-0-wireless-led-original-imah96zwnpzh4gu7.jpeg?q=80"
                className="card-img-top"
                alt="Collapsible Wardrobes"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Ear Buds</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>






{/* second card */}

      <div className="container mt-4">
        {/* Title Row */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Best Deals </h5>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>➤</span>
        </div>

        {/* Cards Grid */}
        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/xif0q/lipstick/r/k/s/10-lipstick-set-6-piece-shade-a-miss-rose-original-imahfpu9jfcfqvy8.jpeg?q=80"
                className="card-img-top"
                alt="Home Temple"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Make up Kit</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/xif0q/blanket/r/v/j/baby-blanket-newborn-combo-pack-of-wearable-swaddle-wrapper-pack-original-imagvpaprzsqfjza.jpeg?q=80"
                className="card-img-top"
                alt="Shoe Rack"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Baby Cloth</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/kod858w0/snack-savourie/x/1/p/500-500g-fresh-kolkata-bengali-style-yammi-tasty-khatta-mittha-original-imag2twfa8js2yk4.jpeg?q=80"
                className="card-img-top"
                alt="Inflatable Sofas"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Namekeen Sweets</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card p-2">
              <img
                src="https://rukminim1.flixcart.com/image/210/210/xif0q/sport-glove/y/w/b/winter-free-size-3-pics-winter-woolen-men-women-cap-gloves-neck-original-imah6kjtfeztzc3x.jpeg?q=80"
                className="card-img-top"
                alt="Collapsible Wardrobes"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Riding cloves</h6>
                <p className="text-success mb-0">Min. 50% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealCards;

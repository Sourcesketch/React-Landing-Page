import React from "react";
import support from "../../../assets/images/support.svg";
import reviews from "../../../assets/images/reviews.svg";
import awards from "../../../assets/images/awards.svg";
const Features = () => {
  return (
    <section className="pb-100 ia-features h-full" id="features">
      <div className="ia-features-inner p-24 rounded-10 bg-feature-box">
        <div className="feature">
          <div className="feature-inner">
            <div className="feature-image">
              <img src={support} alt="support" />
            </div>
            <div className="feature-content">
              <p className="feature-title text-orange mb-6">24/7 Support</p>
              <span className="feature-description text-dark-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="feature-inner">
            <div className="feature-image">
              <img src={reviews} alt="reviews" />
            </div>
            <div className="feature-content">
              <p className="feature-title text-orange mb-6">
                1000+ of reviews
              </p>
              <span className="feature-description text-dark-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="feature-inner">
            <div className="feature-image">
              <img src={awards} alt="awards" />
            </div>
            <div className="feature-content">
              <p className="feature-title text-orange mb-6">
              And more!
              </p>
              <span className="feature-description text-dark-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

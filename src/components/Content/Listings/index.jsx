import React, { useEffect, useState } from "react";
import investment from "../../../assets/images/investment.png";
import data from "../../../data";

const Listings = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlider(prevIndex => (prevIndex + 1) % slideCount);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [slideCount]);

  useEffect(() => {
    setSlideCount(3); 
  }, [slideCount]);
  return (
    <section className="py-100 ia-hero-section h-full" id="hero">
      <div className="ia-hero-section__inner">
        <div className="hero-content">
          <h1 className="hero-content__title pb-64">
            Lorem ipsum <span className="text-blue">dolor</span> sit amet yo 👋
          </h1>
          <div className="hero-content__cardsView">
            <div className="cardsView__cardlists p-16">
              {data.cards.map((c, id) => (
                <div
                  className="cardlists__items p-24"
                  key={c._id}
                  style={{
                    transform: `translate3d(0, ${-currentSlider * 100}%, 0)`,
                  }}
                >
                  <div className="cards-image">
                    <img src={c.image} alt={c.title} className="w-full" />
                  </div>
                  <div className="cards-content">
                    <p className="cards-content__title text-black mb-10 ">
                      {c.title}
                    </p>
                    <span className="cards-content__des text-dark-gray">
                      {c.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={investment} alt="investment" />
        </div>
      </div>
    </section>
  );
};

export default Listings;

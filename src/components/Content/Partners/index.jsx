import React, { useEffect, useState } from "react";
import data from "../../../data";
import prev from "../../../assets/images/prev.svg";
import next from "../../../assets/images/next.svg";
const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment currentIndex to move to the next image
      setCurrentIndex((prevIndex) =>
        prevIndex === data.partners.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex, data.partners.length]);
  const prevImg = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? data.partners.length - 3 : prevIndex - 1
    );
  };

  const nextImg = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === data.partners.length - 3 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="pb-100 ia-partners h-full" id="partners">
      <div className="ia-partners-inner">
        <div className="ia-partner__header">
          <h2 className="header-title text-black"> Trusted by </h2>
          <p className="text-dark-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </p>
        </div>
        <div className="ia-partner__slider pt-24">
          {data.partners.slice(currentIndex, currentIndex + 3).map((p, index) => (
            <div className="partners p-24" key={currentIndex + index}>
                <img src={p.img} alt="partners" className="w-full" />
            </div>
          ))}
     
            <button className="indicators-prev" onClick={prevImg}>
                <img src={prev} alt="prev"/>
            </button> 
             <button href="" className="indicators-next" onClick={nextImg}>
                <img src={next} alt="next"/>
            </button> 
        </div>
      </div>
    </section>
  );
};

export default Partners;

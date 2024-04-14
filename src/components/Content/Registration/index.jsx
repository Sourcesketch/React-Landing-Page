import React, { useState } from "react";
import registration from "../../../assets/images/registration.png";

const Registration = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    country: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [stored, setStored] = useState(false);
  const [empty, setEmpty] = useState({ name: "", country: "", email: "" });
  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormValue((val) => ({
      ...val,
      [name]: value,
    }));
  };

  const checkFormValidation = () => {
    let flag = true;
    let data = {};
    if (!formValue.name.trim()) {
      data.name = "Required";
      flag = false;
    }
    if (!formValue.country.trim()) {
      data.country = "Required";
      flag = false;
    }
    if(!formValue.email.trim()) {
      data.email = "Required";
    } if(!/^\S+@\S+\.\S+$/.test(formValue.email)) {
      data.email = "Invalid Format";
      flag = false;
    }
    setEmpty(data);
    return flag;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkFormValidation()) {
      let getData = localStorage.getItem('formValue');
     if(getData) {
       setSubmitted(false);
       setStored(true);
     }
     if(!getData) {
    //  alert('store data');
      let savedData = localStorage.setItem('formValue', JSON.stringify(formValue));
      setSubmitted(true);
     }
    }
  };
  return (
    <section className="pb-100 ia-registration h-full" id="registration">
      <div className="ia-registration__inner">
        <div className="registration-image">
          <img src={registration} alt="registration" />
        </div>
        <div className="registration-content bg-white p-48 rounded-10">
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <h3 className="text-black">Registration</h3>
              <p className="text-dark-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
                in tristique senectus dui pharetra sit.
              </p>
            </div>
            <div className="form-group">
              <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  value={formValue.name}
                  onChange={handleValueChange}
                  placeholder="Enter your name"
                />
                {empty.name && (
                  <span className="text-danger fs-14 pt-4">{empty.name}</span>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="company">Company:</label>
                <input
                  className="form-input"
                  type="text"
                  id="country"
                  name="country"
                  value={formValue.country}
                  onChange={handleValueChange}
                  placeholder="Enter your company name"
                />
                {empty.country && (
                  <span className="text-danger fs-14 pt-4">
                    {empty.country}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="email">Email Address:</label>
                <input
                  className="form-input"
                  type="text"
                  id="email"
                  name="email"
                  value={formValue.email}
                  onChange={handleValueChange}
                  placeholder="Enter your email address"
                />
                {empty.email && (
                  <span className="text-danger fs-14 pt-4">{empty.email}</span>
                )}
              </div>

              <div className="form-control pt-16">
                <button className="btn bg-orange rounded-40 text-white">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </form>
          {submitted && (
            <p className="text-success text-center fs-16 pt-16 m-0">
              Form submitted successfully!
            </p>
          )}
          {stored && (
            <p className="text-danger text-center fs-16 pt-16 m-0">
              Form is already submitted!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;

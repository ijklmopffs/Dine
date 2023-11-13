import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import patternRight from "../../assets/patterns/pattern-curve-bottom-right.svg";

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    time: "",
    people: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    time: "",
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
    }
    if (formData.day.trim() === "") {
      errors.day = "This field is incomplete";
    }
    if (formData.month.trim() === "") {
      errors.month = "Month is required";
    }
    if (formData.year.trim() === "") {
      errors.year = "Year is required";
    }
    if (formData.hour.trim() === "") {
      errors.hour = "Hour is required";
    }
    if (formData.minute.trim() === "") {
      errors.minute = "Minute is required";
    }
    if (formData.time.trim() === "") {
      errors.time = "Time is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("done");
    }
  };

  return (
    <>
      <header className="bg-bg-mobile-booking md:bg-bg-tablet-booking lg:bg-bg-desktop-booking bg-cover bg-no-repeat">
        <div className="max-w-[1110px] mx-auto p-4">
          <Link to="/">
            <nav>
              <img src={logo} alt="" />
            </nav>
          </Link>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative top-40">
            <div className="lg:text-start text-white my-10">
              <h1 className="font-light text-7xl">Reservations</h1>
              <p className="text-xl md:w-[30rem]">
                We can’t wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </p>
            </div>
            <div className="bg-white flex flex-col p-8 w-[298px] md:w-[350px] shadow-2xl">
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b-[1px] border-[#8e8e8e]/50 my-5 w-[250px] md:w-[300px] pl-4 focus:outline-none"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <input
                  type="email"
                  placeholder="Email"
                  className={
                    formErrors.email
                      ? "border-b-[1px] border-[#b54949] placeholder:text-[#b54949] my-5 w-[250px] md:w-[300px] pl-4 focus:outline-none"
                      : "border-b-[1px] border-[#979797]/50 my-5 w-[250px] md:w-[300px] pl-4 focus:outline-none"
                  }
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="text-start pl-3 text-[#b54949]">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div>
                  <p
                    className={
                      formErrors.month ? "text-xl text-[#b54949]" : "text-xl"
                    }
                  >
                    Pick a date
                  </p>
                  {formErrors.day && (
                    <p className="text-[6px] text-[#b54949]">
                      {formErrors.day}
                    </p>
                  )}
                </div>
                <div className="flex gap-10 justify-between flex-grow">
                  <div>
                    <input
                      type="text"
                      placeholder="MM"
                      className={
                        formErrors.month
                          ? "border-b-[1px] pl-2 border-[#b54949] my-5 w-[50px] focus:outline-none"
                          : "border-b-[1px] pl-2 border-[#8e8e8e]/50 my-5 w-[50px] focus:outline-none"
                      }
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="DD"
                      className={
                        formErrors.day
                          ? "border-b-[1px] pl-2 border-[#b54949] my-5 w-[50px] focus:outline-none"
                          : "border-b-[1px] pl-2 border-[#8e8e8e]/50 my-5 w-[50px] focus:outline-none"
                      }
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="YYYY"
                      className={
                        formErrors.year
                          ? "border-b-[1px] pl-2 border-[#b54949] my-5 w-[50px] focus:outline-none"
                          : "border-b-[1px] pl-2 border-[#8e8e8e]/50 my-5 w-[50px] focus:outline-none"
                      }
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div>
                  <p
                    className={
                      formErrors.hour ? "text-xl text-[#b54949]" : "text-xl"
                    }
                  >
                    Pick a time
                  </p>
                  {formErrors.day && (
                    <p className="text-[6px] text-[#b54949]">
                      {formErrors.day}
                    </p>
                  )}
                </div>
                <div className="flex gap-10 justify-between items-center flex-grow">
                  <div>
                    <input
                      type="text"
                      placeholder="09"
                      className={
                        formErrors.hour
                          ? "border-b-[1px] pl-2 border-[#b54949] my-5 w-[50px] focus:outline-none"
                          : "border-b-[1px] pl-2 border-[#8e8e8e]/50 my-5 w-[50px] focus:outline-none"
                      }
                      name="hour"
                      value={formData.hour}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="00"
                      className={
                        formErrors.minute
                          ? "border-b-[1px] pl-2 border-[#b54949] my-5 w-[50px] focus:outline-none"
                          : "border-b-[1px] pl-2 border-[#8e8e8e]/50 my-5 w-[50px] focus:outline-none"
                      }
                      name="minute"
                      value={formData.minute}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="AM/PM"
                      className={
                        formErrors.time
                          ? "w-[50px] border-b-[1px] border-[#b54949] focus:outline-none"
                          : "w-[50px] border-b-[1px] border-[#8e8e8e]/50 focus:outline-none"
                      }
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center cursor-pointer">
                <input
                  type="text"
                  className="w-[300px] border-b-[1px] border-[#8e8e8e]/50 my-5 placeholder:text-center focus:outline-none"
                  placeholder="Number of people"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                />
              </div>

              <button
                className="uppercase border-[1px] border-white px-14 py-4 bg-black 
            hover:text-black transition-colors duration-700 ease-in-out text-white hover:bg-white hover:border-black"
                onClick={handleSubmit}
              >
                make reservation
              </button>
            </div>
          </div>
        </div>
      </header>

      <img src={patternRight} alt="" className="hidden lg:block" />
      <footer className="bg-[#111111] p-16 md:text-start text-white uppercase text-sm mt-80 lg:mt-0">
        <div
          className="max-w-[1110px] mx-auto flex flex-col md:flex-row items-center 
        md:items-start gap-8 md:gap-0 justify-between"
        >
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between w-3/5">
            <div>
              <p>
                Marthwaite, Sedbergh <br /> Cumbria <br /> +00 44 123 4567
              </p>
            </div>
            <div>
              <p>
                OPEN TIMES <br /> MON - FRI: 09:00 AM - 10:00 PM <br /> SAT -
                SUN: 09:00 AM - 11:30 PM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

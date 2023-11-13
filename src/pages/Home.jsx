import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import patternRight from "../../assets/patterns/pattern-curve-top-right.svg";
import patternLeft from "../../assets/patterns/pattern-curve-top-left.svg";
import enjoyable from "../../assets/homepage/enjoyable-place-desktop.jpg";
import enjoyableTablet from "../../assets/homepage/enjoyable-place-tablet.jpg";
import enjoyableMobile from "../../assets/homepage/enjoyable-place-mobile.jpg";
import locally from "../../assets/homepage/locally-sourced-desktop.jpg";
import locallyTablet from "../../assets/homepage/locally-sourced-tablet.jpg";
import locallyMobile from "../../assets/homepage/locally-sourced-mobile.jpg";
import divide from "../../assets/patterns/pattern-divide.svg";
import lines from "../../assets/patterns/pattern-lines.svg";
import salmon from "../../assets/homepage/salmon-desktop-tablet.jpg";
import salmonMobile from "../../assets/homepage/salmon-mobile.jpg";
import rosemary from "../../assets/homepage/beef-desktop-tablet.jpg";
import rosemaryMobile from "../../assets/homepage/beef-mobile.jpg";
import chocolate from "../../assets/homepage/chocolate-desktop-tablet.jpg";
import chocolateMobile from "../../assets/homepage/chocolate-mobile.jpg";
import family from "../../assets/homepage/family-gathering-desktop.jpg";
import familyTablet from "../../assets/homepage/family-gathering-tablet.jpg";
import familyMobile from "../../assets/homepage/family-gathering-mobile.jpg";
import special from "../../assets/homepage/special-events-desktop.jpg";
import specialTablet from "../../assets/homepage/special-events-tablet.jpg";
import specialMobile from "../../assets/homepage/special-events-mobile.jpg";
import social from "../../assets/homepage/social-events-desktop.jpg";
import socialTablet from "../../assets/homepage/social-events-tablet.jpg";
import socialMobile from "../../assets/homepage/social-events-mobile.jpg";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState("family");

  const handleEventClick = (eventName) => {
    setSelectedEvent(eventName);
  };
  return (
    <>
      <header className="p-4 bg-bg-mobile md:bg-bg-tablet lg:bg-bg-desktop bg-cover h-[50rem]">
        <div className="max-w-[1110px] mx-auto relative lg:static top-60 bg-[#111111] lg:bg-transparent p-8 lg:p-0">
          <nav className="mx-auto lg:mx-0 w-fit">
            <img src={logo} alt="" />
          </nav>
          <div className="text-white lg:text-start mt-16 lg:mt-36 items-center">
            <div>
              <h1 className="text-4xl md:text-7xl lg:w-[30rem] font-extralight">
                Exquisite dining since 1989
              </h1>
              <p className="text-xl md:w-[30rem] lg:w-96 my-10 mx-auto lg:mx-0">
                Experience our seasonal menu in beautiful country surroundings.
                Eat the freshest produce from the comfort of our farmhouse.
              </p>
              <Link to="/book">
                <button
                  className="uppercase border-[1px] border-white px-14 py-4 hover:bg-white 
                  hover:text-black transition-colors duration-700 ease-in-out"
                >
                  book a table
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        className="bg-left bg-no-repeat bg-auto"
        style={{ backgroundImage: `url('${patternRight}')` }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-16 max-w-[1110px] mx-auto">
          <div className="relative bottom-20 lg:bottom-28">
            <img src={enjoyable} alt="" className="hidden lg:block" />
            <img
              src={enjoyableMobile}
              alt=""
              className="md:hidden shadow-2xl"
            />
            <img
              src={enjoyableTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
          </div>
          <div className="lg:text-start">
            <h2 className="font-bold text-5xl text-[#242b37] w-[23rem]">
              Enjoyable place for all the family
            </h2>
            <p className="text-xl w-96">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-right bg-no-repeat bg-auto mt-40"
        style={{ backgroundImage: `url('${patternLeft}')` }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-40 lg:gap-80 max-w-[1110px] mx-auto">
          <div className="lg:text-start">
            <h2 className="font-bold text-5xl text-[#242b37] w-[23rem]">
              The most locally sourced food
            </h2>
            <p className="text-xl w-96 my-10">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
          <div className="shadow-lg relative">
            <img src={locally} alt="" className="hidden lg:block" />
            <img src={locallyMobile} alt="" className="md:hidden" />
            <img
              src={locallyTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img
              src={lines}
              alt=""
              className="absolute top-[22rem] right-[-6rem] lg:right-[-10rem] hidden md:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-white text-start p-40 lg:relative bottom-20 -z-10">
        <div className="max-w-[1110px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="text-center lg:text-start">
            <img src={divide} alt="" className="mx-auto lg:mx-0" />
            <h2 className="font-bold text-3xl md:text-5xl my-10 w-[30rem]">
              A few highlights from our menu
            </h2>
            <p className="text-xl my-10 md:w-96 w-80 mx-auto md:mx-0">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
              <div className="flex relative">
                <img src={salmon} alt="" className="hidden md:block" />
                <img src={salmonMobile} alt="" className="md:hidden" />
                <img
                  src={divide}
                  alt=""
                  className="absolute top-8 left-36 -z-10"
                />
              </div>
              <div className="text-center md:text-start">
                <h2 className="font-bold text-xl">Seared Salmon Fillet</h2>
                <p className="w-80 md:w-96 mt-5 md:mt-0">
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#979797] my-5"></div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
              <div className="flex relative">
                <img src={rosemary} alt="" className="hidden md:block" />
                <img src={rosemaryMobile} alt="" className="md:hidden" />
                <img
                  src={divide}
                  alt=""
                  className="absolute top-8 left-36 -z-10"
                />
              </div>
              <div className="text-center md:text-start">
                <h2 className="font-bold text-xl">Rosemary Filet Mignon</h2>
                <p className="w-80 md:w-96 mt-5 md:mt-0">
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#979797] my-5"></div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
              <div className="flex relative">
                <img src={chocolate} alt="" className="hidden md:block" />
                <img src={chocolateMobile} alt="" className="md:hidden" />
                <img
                  src={divide}
                  alt=""
                  className="absolute top-8 left-36 -z-10"
                />
              </div>
              <div className="text-center md:text-start">
                <h2 className="font-bold text-xl">
                  Summer Fruit Chocolate Mousse
                </h2>
                <p className="w-80 md:w-96 mt-5 md:mt-0">
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {selectedEvent === "family" && (
          <div className="max-w-[1110px] mx-auto my-20 lg:my-0 flex flex-col items-center lg:items-start lg:flex-row gap-20">
            <div className="relative">
              <img src={family} alt="" className="hidden lg:block" />
              <img src={familyMobile} alt="" className="md:hidden shadow-2xl" />
              <img
                src={familyTablet}
                alt=""
                className="hidden md:block lg:hidden shadow-2xl"
              />
              <img
                src={lines}
                alt=""
                className="absolute top-[-2rem] left-[-4rem] hidden md:block"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 lg:hidden justify-between w-96">
              <p onClick={() => handleEventClick("family")}>Family Gathering</p>
              <p
                onClick={() => handleEventClick("special")}
                className="text-[#4c4c4c]/50"
              >
                Special Events
              </p>
              <p
                onClick={() => handleEventClick("social")}
                className="text-[#4c4c4c]/50"
              >
                Social Events
              </p>
            </div>
            <div className="mt-2 lg:mt-20 lg:text-start">
              <div>
                <h2 className="text-[#242b37] font-bold text-5xl">
                  Family Gathering
                </h2>
                <p className="text-[#242b37] text-xl w-96 my-10">
                  We love catering for entire families. So please bring everyone
                  along for a special meal with your loved ones. We’ll provide a
                  memorable experience for all.
                </p>
                <Link to="/book">
                  <button
                    className="uppercase border-[1px] hover:border-black px-14 py-4 hover:bg-white 
                    hover:text-black transition-colors duration-700 ease-in-out bg-black text-white"
                  >
                    book a table
                  </button>
                </Link>
              </div>
              <div className="hidden lg:block uppercase my-10 relative cursor-pointer font-semibold">
                <img
                  src={divide}
                  alt=""
                  className="absolute left-[-7rem] top-1 -z-10"
                />
                <p onClick={() => handleEventClick("family")}>
                  Family Gathering
                </p>
                <p
                  onClick={() => handleEventClick("special")}
                  className="text-[#4c4c4c]/50"
                >
                  Special Events
                </p>
                <p
                  onClick={() => handleEventClick("social")}
                  className="text-[#4c4c4c]/50"
                >
                  Social Events
                </p>
              </div>
            </div>
          </div>
        )}
        {selectedEvent === "special" && (
          <div className="max-w-[1110px] mx-auto my-20 lg:my-0 flex flex-col lg:flex-row items-center lg:items-start gap-20">
            <div className="relative">
              <img src={special} alt="" className="hidden lg:block" />
              <img
                src={specialTablet}
                alt=""
                className="hidden md:block lg:hidden shadow-2xl"
              />
              <img
                src={specialMobile}
                alt=""
                className="md:hidden shadow-2xl"
              />
              <img
                src={lines}
                alt=""
                className="absolute top-[-2rem] left-[-4rem] hidden md:block"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 lg:hidden justify-between w-96">
              <p
                onClick={() => handleEventClick("family")}
                className="text-[#4c4c4c]/50"
              >
                Family Gathering
              </p>
              <p onClick={() => handleEventClick("special")}>Special Events</p>
              <p
                onClick={() => handleEventClick("social")}
                className="text-[#4c4c4c]/50"
              >
                Social Events
              </p>
            </div>
            <div className="mt-2 lg:mt-20 lg:text-start">
              <div>
                <h2 className="text-[#242b37] font-bold text-5xl">
                  Special Events
                </h2>
                <p className="text-[#242b37] text-xl w-96 my-10">
                  Whether it’s a romantic dinner or special date you’re
                  celebrating with others we’ll look after you. We’ll be sure to
                  mark your special date with an unforgettable meal.
                </p>
                <Link to="/book">
                  <button
                    className="uppercase border-[1px] hover:border-black px-14 py-4 hover:bg-white 
                    hover:text-black transition-colors duration-700 ease-in-out bg-black text-white"
                  >
                    book a table
                  </button>
                </Link>
              </div>
              <div className="hidden lg:block uppercase my-10 relative cursor-pointer font-semibold">
                <img
                  src={divide}
                  alt=""
                  className="absolute left-[-7rem] top-7 -z-10"
                />
                <p
                  onClick={() => handleEventClick("family")}
                  className="text-[#4c4c4c]/50"
                >
                  Family Gathering
                </p>
                <p onClick={() => handleEventClick("special")}>
                  Special Events
                </p>
                <p
                  onClick={() => handleEventClick("social")}
                  className="text-[#4c4c4c]/50"
                >
                  Social Events
                </p>
              </div>
            </div>
          </div>
        )}
        {selectedEvent === "social" && (
          <div className="max-w-[1110px] mx-auto my-20 lg:my-0 flex flex-col lg:flex-row items-center lg:items-start gap-20">
            <div className="relative">
              <img src={social} alt="" className="hidden lg:block" />
              <img
                src={socialTablet}
                alt=""
                className="hidden md:block lg:hidden shadow-2xl"
              />
              <img src={socialMobile} alt="" className="md:hidden shadow-2xl" />
              <img
                src={lines}
                alt=""
                className="absolute top-[-2rem] left-[-4rem] hidden md:block"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 lg:hidden justify-between w-96">
              <p
                onClick={() => handleEventClick("family")}
                className="text-[#4c4c4c]/50"
              >
                Family Gathering
              </p>
              <p
                onClick={() => handleEventClick("special")}
                className="text-[#4c4c4c]/50"
              >
                Special Events
              </p>
              <p onClick={() => handleEventClick("social")}>Social Events</p>
            </div>
            <div className="mt-2 lg:mt-20 lg:text-start">
              <div>
                <h2 className="text-[#242b37] font-bold text-5xl">
                  Social Events
                </h2>
                <p className="text-[#242b37] text-xl w-96 my-10">
                  Are you looking to have a larger social event? No problem!
                  We’re more than happy to cater for big parties. We’ll work
                  with you to make your event a hit with everyone.
                </p>
                <Link to="/book">
                  <button
                    className="uppercase border-[1px] hover:border-black px-14 py-4 hover:bg-white 
                    hover:text-black transition-colors duration-700 ease-in-out bg-black text-white"
                  >
                    book a table
                  </button>
                </Link>
              </div>
              <div className="hidden lg:block uppercase my-10 relative cursor-pointer font-semibold">
                <img
                  src={divide}
                  alt=""
                  className="absolute left-[-7rem] top-14 -z-10"
                />
                <p
                  onClick={() => handleEventClick("family")}
                  className="text-[#4c4c4c]/50"
                >
                  Family Gathering
                </p>
                <p
                  onClick={() => handleEventClick("special")}
                  className="text-[#4c4c4c]/50"
                >
                  Special Events
                </p>
                <p onClick={() => handleEventClick("social")}>Social Events</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="bg-bg-mobile-ready md:bg-bg-tablet-ready lg:bg-bg-desktop-ready bg-cover mt-20 text-white">
        <div className="max-w-[1110px] mx-auto p-16 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between">
          <div>
            <h2 className="font-bold text-5xl">Ready to make a reservation?</h2>
          </div>
          <div>
            <Link to="/book">
              <button
                className="uppercase border-[1px] border-white px-14 py-4 hover:bg-white 
                hover:text-black transition-colors duration-700 ease-in-out"
              >
                book a table
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] p-16 md:text-start text-white uppercase text-sm">
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

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <img src="./about1.png" alt="img" className="w-full"/>
        <div className="bg-[#FFF7ED]">
          <div className="px-5 py-10">
            <h1 className="text-primary font-bold text-3xl">
              Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="text-primary mt-10">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch.
            </p>
            <p className="text-primary">(Hitch costs extra 😉)</p>
            <p className="text-primary mt-5">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="bg-[#FFCC8D] p-6 pb-8">
            <h1 className="text-2xl font-bold mb-10">
              Your destination is waiting. Your van is ready.
            </h1>
            <Link to="" className="bg-primary rounded-lg text-white p-3 font-bold text-xs">
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

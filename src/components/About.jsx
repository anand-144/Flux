import Navbar from "./Navbar";
import Footer from "./Footer";
import { bg } from "../assets";

const About = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-[#f9f9f9] py-[50px] mt-5">
        <div className="max-w-[1240px] mx-auto px-4 mt-5 md:mt-0">
          <div className="gap-4 md:gap-6 md:mt-5 sm:mt-5 ss:mt-0">
            <div className="relative bg-white rounded-xl overflow-hidden md:mt-5 ss:mt-0">
              <img
                className="w-full object-cover"
                src={bg}
                alt="Background"
              />
              <div className="absolute inset-0 flex justify-center items-center text-indigo-950 text-opacity-[100%]  text-[3.5rem] p-4 md:p-6 z-10">
                <div className="max-w-lg">
                  <h2 className="font-bold text-xl md:text-xl my-1 text-white ">
                    About Flux
                  </h2>
                  <p className="text-white text-opacity-100 text-base md:text-lg">
                    Flux is a vibrant community-driven platform for coding
                    enthusiasts, developers, and tech aficionados. Our mission
                    is to provide a space where individuals passionate about
                    technology can come together to share knowledge, insights,
                    and experiences. At Flux, we believe in the power of
                    collaboration and the exchange of ideas. Whether you're a
                    seasoned developer, a budding programmer, or simply curious
                    about the world of coding, you'll find something valuable
                    within our diverse range of blogs, tutorials, and
                    discussions. Our dedicated team of writers and contributors
                    is committed to delivering high-quality content that
                    educates, inspires, and entertains. From in-depth technical
                    guides to thought-provoking opinion pieces, there's always
                    something new to explore on Flux. Join us on our journey to
                    explore the ever-evolving landscape of technology.
                    Together, let's dive deep into the world of coding, stay
                    up-to-date with the latest trends, and unleash our creative
                    potential.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-green-950 opacity-70 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

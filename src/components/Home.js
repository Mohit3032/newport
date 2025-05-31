import SectionContainer from "./SectionContainer";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"; // Import icons

const socialIcon = [
  {
    id: 1,
    icon: <FaFacebook className="w-[30px] h-[30px]" />, // Facebook icon
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <FaGithub className="w-[30px] h-[30px]" />, // GitHub icon (replaces Twitter)
    link: "https://github.com/",
  },
  {
    id: 3,
    icon: <FaInstagram className="w-[30px] h-[30px]" />, // Instagram icon
    link: "https://www.instagram.com/",
  },
  {
    id: 4,
    icon: <FaLinkedin className="w-[30px] h-[30px]" />, // LinkedIn icon
    link: "https://www.linkedin.com/",
  },
];

const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] flex items-center justify-center relative">
          <div className="home_content flex items-center">
            
            {/* Avatar Section */}
            <div className="avatar min-w-[300px] min-h-[300px] relative rounded-full" data-type="wave">
              <div
                className="image absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/img/slider/image.jpg')",
                  backgroundPosition: "center 30%",
                }}
              ></div>
            </div>

            {/* Details Section */}
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Mohit <span>Hundlani</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                I am an IT Solutions Architect at heart and create features that
                are best suited for the job at hand.
              </p>

              {/* Social Icons Section */}
              <div className="social w-full">
                <ul className="m-0 list-none flex space-x-6"> {/* Even spacing */}
                  {socialIcon.map((item) => (
                    <li key={item.id}>
                      <a
                        className="text-black transition-all duration-300 hover:text-gray-700 flex items-center justify-center"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Home;

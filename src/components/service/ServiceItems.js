import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Full Stack Development",
    text: [
      "I specialize in full stack development, delivering high-performance web applications using React.js and Next.js. My solutions are tailored for scalability, performance, and user experience.",
      "From frontend UI to backend architecture, I provide complete development services that help your business thrive in the digital space. My approach ensures responsiveness, speed, and maintainability.",
      "Whether you need an e-commerce platform, admin dashboard, or dynamic web app, I develop with precision and deploy seamlessly to modern platforms like Vercel and Netlify."
    ],
    image: "assets/img/news/1.jpg"
  },
  {
    id: 2,
    name: "App Development",
    text: [
      "I build cross-platform mobile applications using React Native that deliver a smooth and native experience on both iOS and Android.",
      "Whether it's a business utility app, e-commerce platform, or custom social app, I design and code to meet your user needs and business goals.",
      "From prototyping to production, my app development process focuses on performance, security, and elegant user interface design."
    ],
    image: "assets/img/news/2.jpg"
  },
  {
    id: 3,
    name: "WordPress Development",
    text: [
      "I offer professional WordPress website development services, from custom themes to fully functional business websites and blogs.",
      "With a focus on SEO, responsiveness, and ease of management, I ensure your WordPress site represents your brand and drives engagement.",
      "Whether you're launching a portfolio, blog, or company website, I deliver polished, fast-loading, and mobile-optimized solutions using the WordPress ecosystem."
    ],
    image: "assets/img/news/3.jpg"
  },
  {
    id: 4,
    name: "UI/UX & Branding",
    text: [
      "Design is key to making a lasting impression. I provide logo design, business card creation, and full branding packages that align with your vision.",
      "Every element is crafted with attention to detail and consistency, helping you stand out and build trust with your customers.",
      "I combine creativity with strategy to create cohesive branding systems that make your business look professional and memorable."
    ],
    image: "assets/img/news/4.jpg"
  },
  {
    id: 5,
    name: "Software Development",
    text: [
      "I develop robust, custom software solutions tailored to your unique business processes and goals.",
      "From ERP systems to internal tools and workflow automation, I bring your ideas to life using modern technologies and industry best practices.",
      "My software development services focus on scalability, reliability, and long-term maintainability to support your business growth."
    ],
    image: "assets/img/news/1.jpg"
  },
  {
    id: 6,
    name: "All-in-One Solutions",
    text: [
      "From full stack websites and mobile apps to WordPress development and branding, I offer end-to-end digital solutions under one roof.",
      "I help startups, agencies, and businesses build an impactful online presence with clean code, stunning visuals, and seamless performance.",
      "If you're looking for a developer who can handle web, app, design, and deployment — you've found your one-stop tech partner."
    ],
    image: "assets/img/news/2.jpg"
  }
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;

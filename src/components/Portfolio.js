import { useContext, useEffect } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/1.jpg",
    title: "Smile Cafe Point",
    text: [
      "Smile Cafe Point is a web application that allows users to view the latest food items, order food, and add the items to their cart.",
    ],
    client: "Created for V-ex Tech Solutions",
    date: "January 10, 2024",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Mohit3032/dp_1",
      },
      {
        id: 2,
        iconName: "icon-share",
        link: "https://cafeteria-hkg1dqqcq-monuhundlani-gmailcoms-projects.vercel.app",
      },
    ],
    bigImage: "assets/img/portfolio/cafe.png",
    images: ["assets/img/portfolio/cafe1.png", "assets/img/portfolio/cafe2.png"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/2.jpg",
    title: "Smart Cab Point",
    text: [
      "Smart Cab Point application for taxi-booking.Users can fill out the booking form, book a cab, and add the trip to their cart on this online platform for booking taxis.",
    ],
    client: "Created for V-ex Tech Solutions",
    date: "November 10, 2023",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Mohit3032/smart_cab",
      },
      {
        id: 2,
        iconName: "icon-share",
        link: "https://smart-cab-monuhundlani-gmailcoms-projects.vercel.app",
      },
    ],
    bigImage: "assets/img/portfolio/smart.png",
    images: ["assets/img/portfolio/smart1.png", "assets/img/portfolio/smart2.png"],
  },
   {
    id: 3,
    thumbnail: "assets/img/portfolio/3.jpg",
    title: "Vhx View",
    text: [
      "VHX View is an online clothing store offering trendy, high-quality apparel designed to elevate your everyday style",
    ],
    client: "Owner Of VHX View",
    date: "March 20, 2024",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Mohit3032/sircommerce",
      },
      // {
      //   id: 2,
      //   iconName: "icon-share",
      //   link: "https://twitter.com/",
      // },
    ],
    bigImage: "assets/img/portfolio/vhx.png",
    images: ["assets/img/portfolio/vhx1.png", "assets/img/portfolio/vhx2.png"],
  },
   {
    id: 4,
    thumbnail: "assets/img/portfolio/4.jpg",
    title: "Find House",
    text: [
      "Find House is a web application that allows users to search for houses, view house details, and add houses to their favorites.",
    ],
    client: "Dubai Client",
    date: "May 08, 2024",
    category: "Detail",
    share: [
      // {
      //   id: 1,
      //   iconName: "icon-github-squared",
      //   link: "https://www.facebook.com/",
      // },
      // {
      //   id: 2,
      //   iconName: "icon-share",
      //   link: "https://twitter.com/",
      // },
    ],
    bigImage: "assets/img/portfolio/real1.png",
    images: ["assets/img/portfolio/real2.png", "assets/img/portfolio/real3.png"],
  },
   {
    id: 5,
    thumbnail: "assets/img/portfolio/5.jpg",
    title: "Divya Chemical Industries",
    text: [
      "Divya Chemical Industries is a web application that allows users to view the latest chemical products, order chemicals, and add the products to their cart.",
    ],
    client: "Divya Chemical Industries",
    date: " May 13, 2025",
    category: "Detail",
    share: [
      // {
      //   id: 1,
      //   iconName: "icon-github-squared",
      //   link: "https://www.facebook.com/",
      // },
      // {
      //   id: 2,
      //   iconName: "icon-share",
      //   link: "https://twitter.com/",
      // },
    ],
    bigImage: "assets/img/portfolio/chem1.png",
    images: ["assets/img/portfolio/chem2.png", "assets/img/portfolio/chem3.png"],
  },
   {
    id: 6,
    thumbnail: "assets/img/portfolio/6.jpg",
    title: "Soccer-master",
    text: [
      "Soccer-master is a web application that allows users to view the latest football news, fixtures, and results. Users can also view the latest football news, fixtures, and results.",
    ],
    client: "Spider Academy",
    date: "October 23, 2023",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Mohit3032/soccer-master",
      },
      {
        id: 2,
        iconName: "icon-share",
        link: "https://soccer-master-1n289oapc-monuhundlani-gmailcoms-projects.vercel.app",
      },
    ],
    bigImage: "assets/img/portfolio/soccer.png",
    images: ["assets/img/portfolio/soc1.png", "assets/img/portfolio/soc2.png"],
  },
   {
    id: 7,
    thumbnail: "assets/img/portfolio/7.jpg",
    title: "Ai Wave",
    text: [
      "Ai Wave is a web application that allows users to generate images using AI. Users can enter a prompt, and the AI will generate an image based on the prompt.",
    ],
    client: "My Own Project",
    date: "April 1, 2024",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Mohit3032/aiwave",
      },
      // {
      //   id: 2,
      //   iconName: "icon-share",
      //   link: "https://twitter.com/",
      // },
    ],
    bigImage: "assets/img/portfolio/ai1.png",
    images: ["assets/img/portfolio/ai2.png", "assets/img/portfolio/ai3.png"],
  },
   {
    id: 8,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "Portfolio",
    text: [
      "Portfolio is my own project that showcases my work and skills as a web developer. It includes various projects I have worked on, demonstrating my expertise in web development.",
  
    ],
    client: "My Own Project",
    date: "June 03, 2023",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Mohit3032/port",
      },
      {
        id: 2,
        iconName: "icon-share",
        link: "https://portfolio-xi-ruddy-52.vercel.app/",
      },
    ],
    bigImage: "assets/img/portfolio/p1.png",
    images: ["assets/img/portfolio/p2.png", "assets/img/portfolio/p3.png"],
  },
   {
    id: 9,
    thumbnail: "assets/img/portfolio/9.jpg",
    title: "Artful Corner Interior Design Studio",
    text: [
      "Artful Corner Interior Design Studio is a web application that allows users to view the latest interior design projects, order design services, and add the projects to their favorites.",
    ],
    client: "Artful Corner Interior Design Studio",
    date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Mohit3032/web",
      },
      {
        id: 2,
        iconName: "icon-share",
        link: "https://artful-corner-interiar-design-studio.netlify.app",
      },
    ],
    bigImage: "assets/img/portfolio/a1.png",
    images: ["assets/img/portfolio/a2.png", "assets/img/portfolio/a3.png",],
  },
   {
    id: 10,
    thumbnail: "assets/img/portfolio/10.jpg",
    title: "Trydo",
    text: [
    "Trydo is a digital agency that specializes in creating stunning websites and applications. We are dedicated to delivering high-quality digital solutions that help businesses grow and succeed online.",
    ],
    client: "My Own Project",
    date: "October 04, 2024",
    category: "Detail",
    share: [
      // {
      //   id: 1,
      //   iconName: "icon-github-squared",
      //   link: "https://www.facebook.com/",
      // },
      // {
      //   id: 2,
      //   iconName: "icon-share",
      //   link: "https://twitter.com/",
      // },
    ],
    bigImage: "assets/img/portfolio/try1.png",
    images: ["assets/img/portfolio/try2.png", "assets/img/portfolio/try3.png"],
  },
   {
    id: 11,
    thumbnail: "assets/img/portfolio/11.jpg",
    title: "Business Conference",
    text: [
      "Business Conference is a web application that allows users to view the latest business conferences, This project is on hold which i am going to build for a client in few days.",
    ],
    client: "ArrowEvents",
    date: "June 6, 2025",
    category: "Detail",
    share: [
      // {
      //   id: 1,
      //   iconName: "icon-github-squared",
      //   link: "https://www.facebook.com/",
      // },
      // {
      //   id: 2,
      //   iconName: "icon-share",
      //   link: "https://twitter.com/",
      // },
    ],
    bigImage: "assets/img/portfolio/b1.png",
    images: ["assets/img/portfolio/b2.png", "assets/img/portfolio/b3.png"],
  },
   {
    id: 12,
    thumbnail: "assets/img/portfolio/12.jpg",
    title: "Clothophile",
    text: [
      "Clothophile is a web application that allows users to view the latest fashion trends, shop for clothing, and add items to their cart.",

    ],
    client: "My Own Project",
    date: "December 11, 2024",
    category: "Detail",
    share: [
      // {
      //   id: 1,
      //   iconName: "icon-github-squared",
      //   link: "https://www.facebook.com/",
      // },
      // {
      //   id: 2,
      //   iconName: "icon-share",
      //   link: "https://twitter.com/",
      // },
    ],
    bigImage: "assets/img/portfolio/c1.png",
    images: ["assets/img/portfolio/c2.png", "assets/img/portfolio/c3.png"],
  },
];

const Portfolio = () => {
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);

  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  }, []);

  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <SectionTitle pageName="Portfolio" title="Creative Portfolio" />
          </div>

          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              {detailData.map((item) => (
                <li
                  key={item.id}
                  className="detail mb-[40px] float-left w-1/3 pl-[40px] item__"
                >
                  <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                    <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title={item.title}
                      data-category={item.category}
                    >
                      <a
                        className="popup_info"
                        href="#"
                        onClick={() => {
                          setPortfolioDetailsModal(item);
                          modalToggle(true);
                        }}
                      >
                        <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                        />
                        <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url={item.thumbnail}
                        />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;

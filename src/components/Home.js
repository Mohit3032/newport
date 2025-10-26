import SectionContainer from "./SectionContainer";


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

            
              
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Home;

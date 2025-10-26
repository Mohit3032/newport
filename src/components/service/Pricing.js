const Pricing = () => {
  return (
    <div className="tokyo_tm_pricing w-full h-auto clear-both float-left px-[0px] pt-[100px] pb-[60px] bg-white">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Pricing</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left">
          <ul className="ml-[-40px]">
            {/* Free Plan */}
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>0<span className="currency">$</span></span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Free Preview
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active"><p>Initial WordPress Demo</p></li>
                  <li className="opacity-50"><p>Basic Logo Mockup</p></li>
                  <li className="opacity-50"><p>Consultation (15 min)</p></li>
                  <li className="opacity-50"><p>No Revisions</p></li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="#"><span>Request</span></a>
                </div>
              </div>
            </li>

            {/* Standard Plan */}
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>249<span className="currency">$</span></span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Standard
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active"><p>1-Page WordPress Site</p></li>
                  <li className="active"><p>Custom Logo Design</p></li>
                  <li className="active"><p>Business Card Design</p></li>
                  <li className="opacity-50"><p>Source Code Access</p></li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="#"><span>Purchase</span></a>
                </div>
                <span className="popular absolute inline-block bg-black text-white text-[13px] px-[20px] pb-[3px] pt-0 top-[-17px] right-[10px]">
                  Popular
                </span>
              </div>
            </li>

            {/* Premium Plan */}
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    <span>499<span className="currency">$</span></span>
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Pro
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active"><p>Full Stack Web/App Project</p></li>
                  <li className="active"><p>React/Next.js or React Native</p></li>
                  <li className="active"><p>Custom Admin Panel / API</p></li>
                  <li className="active"><p>Ongoing Support (30 days)</p></li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="/#contact"><span>Purchase</span></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;


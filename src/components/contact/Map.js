const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height={355}
            id="gmap_canvas"
           src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3661.1267156889344!2d73.16276037529413!3d22.35534737964706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDIxJzE5LjMiTiA3M8KwMDknNTUuMiJF!5e1!3m2!1sen!2sin!4v1748633670346!5m2!1sen!2sin" 
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
       
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
            }}
          />
        
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
            }}
          />
        </div>
      </div>
      {/* Get your API here https://www.embedgooglemap.net */}
    </div>
  );
};
export default Map;

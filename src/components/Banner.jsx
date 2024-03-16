const Banner = () => {
  return (
    <div>
      <div className="bg-[url('./images/Banner.png')] w-full h-[600px] bg-contain bg-no-repeat  flex justify-center items-center flex-col ">
        <div className=" text-white flex justify-center items-center flex-col ">
          <h1 className="w-[50%] text-center text-[40px] font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="w-[70%] text-center text-[16px] font-light leading-10">
            Indulge in a personalized cooking class designed just for you! Our
            expert instructors will guide you through hands-on techniques,
            helping you master culinary skills and create unforgettable dishes.
            Join us and elevate your cooking prowess in a fun and supportive
            environment!
          </p>
          <div className=" space-x-5 ">
            <button className=" text-lg font-bold border-[#0be58a]  bg-[#0be58a] border-none outline-none px-4 py-2 rounded-full">
              Explore Now
            </button>
            <button className=" text-lg bg-transparent font-bold border-white outline-none px-4 py-2 rounded-full text-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

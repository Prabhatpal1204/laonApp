import React from "react";

const Home = () => {
  return (
    <div className="h-[80vh] w-[80%] mx-auto">
      <div className="h-[150px] w-full bg-black my-8 rounded-[40px] gap-24 flex justify-around ">
        <diV>
          {" "}
          <div className=" text-white mx-6 pt-6">Current Amount</div>
          <div className="text-6xl text-white mx-6">₹ 10000</div>
        </diV>

        <div className="pt-10 mr-8">
          <button className="text-white border-2 h-[60px]  rounded-xl w-[150px]">
            View Details
          </button>
        </div>
      </div>
      <div className=" flex justify-around items-center flex-nowrap">
        <div>
          <h1 className=" font-extrabold font-rubik text-4xl text-[#9191FF]">
            Helping you reach your financial goals.{" "}
          </h1>
          <br />
          <p className="max-w-[400px] font-bold  text-[#9baaf9]">
            Your Goals, Our Guidance We'll Chart the Course Navigating Finances
            with You The Roadmap to Financial Success Your Journey, Our Support
            Progress Towards Your Targets Managing Wealth, Step by Step Bespoke
            Solutions for Your Needs Tailoring Finance to Your Life
          </p>
        </div>
        <div>
          <img src="./main1.jpg" height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Home;

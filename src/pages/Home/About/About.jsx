import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-32 bg-slate-300 md:flex lg:flex">
      <div className="p-9 md:m-32 lg:m-32 md:w-1/2 lg:w-1/2">
        <h1 className="text-2xl md:text-5xl lg:text-5xl  font-bold text-[#a67c00]">
          About US
        </h1>
        <p className="text-black  md:mt-12 lg:mt-12 mt-4">
          Highlight the extensive recipe collection available on Kitchen Genius.
          Mention the diverse range of cuisines, dietary preferences, and skill
          levels catered to. For example: With our ever-growing recipe
          collection, we aim to satisfy every taste bud and dietary preference.
          From mouthwatering international dishes to quick and healthy weeknight
          meals, we have curated a vast selection of recipes that suit various
          cooking skills and meet the needs of both novice and experienced
          cooks.....
        </p>
        <button className="flex items-center gap-4 btn mt-3 bg-gradient-to-r from-purple-200 to-indigo-400">
          See more <FaArrowRight></FaArrowRight>
        </button>
      </div>
      <div className="grid grid-cols-col md:grid-cols-2 lg:grid-cols-2 gap-2 p-4 md:w-1/2 lg:w-1/2">
        <img
          className="h-[280px] w-[400px]"
          src="https://i.ibb.co/pKHjJLC/rice-mango-620x350-61525952416.jpg"
          alt=""
        />
        <img
          className="h-[280px] w-[400px]"
          src="https://i.ibb.co/2NgSDjR/thai-pineapple-fried-rice-16.jpg"
          alt=""
        />
        <img
          className="h-[280px] w-[400px]"
          src="https://i.ibb.co/ZMnTS3z/Green-Papaya-Salad.jpg"
          alt=""
        />
        <img
          className="h-[280px] w-[400px]"
          src="https://i.ibb.co/7VJtFBL/images-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;

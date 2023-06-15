import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-32 bg-slate-300 flex">
      <div className="m-32 w-1/2">
        <h1 className="text-5xl font-bold text-[#a67c00]">About US</h1>
        <p className="text-black  mt-12">
          Highlight the extensive recipe collection available on Kitchen Genius.
          Mention the diverse range of cuisines, dietary preferences, and skill
          levels catered to. For example: With our ever-growing recipe
          collection, we aim to satisfy every taste bud and dietary preference.
          From mouthwatering international dishes to quick and healthy weeknight
          meals, we have curated a vast selection of recipes that suit various
          cooking skills and meet the needs of both novice and experienced
          cooks.....
        </p>
        <button className="flex items-center gap-4 btn mt-3">
          See more <FaArrowRight></FaArrowRight>
        </button>
      </div>
      <div className="grid grid-cols-col md:grid-cols-2 lg:grid-cols-2 gap-2 p-4 w-1/2">
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

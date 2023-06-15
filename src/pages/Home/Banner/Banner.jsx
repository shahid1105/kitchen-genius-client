import banner from "../../../assets/images/banner-2.jpg";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-indigo-400 pt-16 pb-12">
      <div className="flex gap-16">
        <div className="w-1/2">
          <img
            className="ps-4 md:mt-12 md:ps-24 md:mb-12 lg:mt-12 lg:ps-24 lg:mb-12 rounded"
            src={banner}
            alt=""
          />
        </div>
        <div className="w-1/2  md:mt-10 lg:mt-10">
          <p className="font-semibold md:text-[70px] md:ps-8 md:font-bold lg:text-[70px] lg:ps-8 lg:font-bold bg-gradient-to-r from-orange-500 to-blue-600 text-transparent bg-clip-text">
            Meet your new favorite <br /> cookbook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

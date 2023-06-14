import banner from "../../../assets/images/banner-2.jpg";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-indigo-400 pt-16">
      <div className="flex gap-16">
        <div className="w-1/2">
          <img className="mt-12 ps-24 mb-12 rounded" src={banner} alt="" />
        </div>
        <div className="w-1/2  mt-10">
          <p className="md:text-[70px] md:ps-8 md:font-bold lg:text-[70px] lg:ps-8 lg:font-bold">
            Meet your new favorite <br /> cookbook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

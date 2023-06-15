import award from "../../../assets/award/award.webp";
import award1 from "../../../assets/award/award-1.jpg";
import award2 from "../../../assets/award/award-2.jpg";
import award3 from "../../../assets/award/award-3.jpg";
import award4 from "../../../assets/award/award-4.jpg";
import award5 from "../../../assets/award/award.jpg";

const OurRecord = () => {
  return (
    <div className="mt-20">
      <h3 className="text-center text-2xl md:text-5xl lg:text-5xl font-bold text-[#a67c00] opacity-80">
        A recognized track-record of excellence
      </h3>
      <div className="md:flex lg:flex ps-14 md:ps-0 lg:ps-0 gap-4 mt-16">
        <div>
          <img
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px]"
            src={award}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px]"
            src={award1}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px]"
            src={award2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px]"
            src={award3}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px]"
            src={award4}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px]"
            src={award5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurRecord;

import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import OurRecord from "../OurRecord/OurRecord";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Banner></Banner>
        <Chef></Chef>
        <OurRecord></OurRecord>
        <About></About>
      </div>
    </div>
  );
};

export default Home;

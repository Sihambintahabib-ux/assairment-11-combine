import Clubs from "../../components/Home/clubs";
import MotionFramer from "../../components/Home/MotionFramer/MotionFramer";
import Slider from "../../components/Home/Slider";

const Home = () => {
  return (
    <div>
      {/* slider */}

      <Slider></Slider>

      <Clubs></Clubs>
      <MotionFramer></MotionFramer>
      {/* More components */}
    </div>
  );
};

export default Home;

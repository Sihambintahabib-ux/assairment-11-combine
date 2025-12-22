import Clubs from "../../components/Home/clubs";
import HowClubSphereWorks from "../../components/Home/HowClubSphereWorks";
import MotionFramer from "../../components/Home/MotionFramer/MotionFramer";
import Slider from "../../components/Home/Slider";
import WhyJoinClub from "../../components/Home/WhyJoinClub";

const Home = () => {
  return (
    <div>
      {/* slider */}

      <Slider></Slider>

      <Clubs></Clubs>
      <MotionFramer></MotionFramer>
      <HowClubSphereWorks></HowClubSphereWorks>
      <WhyJoinClub></WhyJoinClub>
      {/* More components */}
    </div>
  );
};

export default Home;

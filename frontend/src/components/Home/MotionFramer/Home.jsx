import HeroAnimation from "../components/Animations/HeroAnimation";
import TypingText from "../components/Animations/TypingText";
import StaggerCards from "../components/Animations/StaggerCards";
import FadeInScroll from "../components/Animations/FadeInScroll";
import CountUp from "../components/Animations/CountUp";
import PulseButton from "../components/Animations/PulseButton";
import RevealSection from "../components/Animations/RevealSection";
import HoverScale from "../components/Animations/HoverScale";

const Home = () => {
  const clubs = [
    { id: 1, name: "Photography Club", members: 150 },
    { id: 2, name: "Sports Club", members: 200 },
    { id: 3, name: "Tech Club", members: 180 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroAnimation>
        <div className="hero min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="hero-content text-center text-white">
            <div>
              <TypingText
                text="Join Amazing Clubs Today"
                className="text-5xl font-bold mb-6"
              />
              <p className="text-xl mb-8">
                Connect with people who share your interests
              </p>
              <PulseButton>Get Started</PulseButton>
            </div>
          </div>
        </div>
      </HeroAnimation>

      {/* Stats Section */}
      <RevealSection className="py-16 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            ClubSphere by Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeInScroll delay={0}>
              <div className="card bg-white shadow-xl p-6">
                <CountUp from={0} to={150} suffix="+" />
                <p className="text-xl mt-2">Active Clubs</p>
              </div>
            </FadeInScroll>

            <FadeInScroll delay={0.2}>
              <div className="card bg-white shadow-xl p-6">
                <CountUp from={0} to={5000} suffix="+" />
                <p className="text-xl mt-2">Members</p>
              </div>
            </FadeInScroll>

            <FadeInScroll delay={0.4}>
              <div className="card bg-white shadow-xl p-6">
                <CountUp from={0} to={300} suffix="+" />
                <p className="text-xl mt-2">Events</p>
              </div>
            </FadeInScroll>
          </div>
        </div>
      </RevealSection>

      {/* Featured Clubs */}
      <RevealSection className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Clubs
          </h2>

          <StaggerCards>
            {clubs.map((club) => (
              <HoverScale key={club.id}>
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">{club.name}</h3>
                    <p>{club.members} members</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">View</button>
                    </div>
                  </div>
                </div>
              </HoverScale>
            ))}
          </StaggerCards>
        </div>
      </RevealSection>
    </div>
  );
};

export default Home;

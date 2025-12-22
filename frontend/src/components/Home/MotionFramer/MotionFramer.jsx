import React from "react";
import InfiniteCarousel from "./InfiniteCarousel";
import EventLoop from "./EventLoop";
import HeroAnimation from "./HeroAnimation";
import StaggerCards from "./StaggerCards";

function MotionFramer() {
  return (
    <div>
      <div>{/* <h1>MotionFramer</h1> */}</div>
      {/* <InfiniteCarousel></InfiniteCarousel> */}
      <HeroAnimation>
        <EventLoop></EventLoop>
      </HeroAnimation>
      {/* <StaggerCards>
        {clubs.map((club) => (
          <Card club={club} />
        ))}
      </StaggerCards> */}

      {/* link :
      https://claude.ai/public/artifacts/83b7722d-ee5e-4339-b550-952921eadbbb */}
    </div>
  );
}

export default MotionFramer;

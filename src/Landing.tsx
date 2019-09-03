import React from 'react';
import './Landing.sass';

const Landing: React.FunctionComponent = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing">
        <Logo />
        <LandingText/>
      </div>
  </div>
         );
}

const Logo: React.FunctionComponent = () => (
  <div className="landing__logo">
    <div className="landing__logo__bar landing__logo__bar1"></div>
    <div className="landing__logo__bar landing__logo__bar2"></div>
    <div className="landing__logo__bar landing__logo__bar3"></div>
  </div>)

const LandingText: React.FunctionComponent = () => (
    <div className="landing__landingtext">
      <div className="landing__landingtext__welcome">Welcome to</div>
      <div className="landing__landingtext__sorted">Sorted!</div>
      <p className="landing__landingtext__body">{"Sorted is an interactive tool for visualizing popular sorting algorithms. Simply select an algorithm, the size of the set you want to sort, and the animation speed."}</p>
    </div>
  )

export default Landing;

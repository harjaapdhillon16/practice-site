/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .margin {
    margin-top: 1rem;
  }
  .button {
    margin-top: 2rem;
  }
`;

const HomeHero = () => {
  return (
    <Container className="columns is-multiline ">
      <div className="column is-5">
        <h1 className="title is-1 has-text-weight-bold">
          Your landing page title here
        </h1>
        <div className="margin">
          <h1 className=" subtitle is-5">
            This landing page is perfect for showing off your awesome product
            and driving people to sign up for a paid plan.
          </h1>
        </div>
        <div className="margin buttons are-medium">
          <button className="button is-primary">Get Started</button>
        </div>
      </div>
      <div className="column is-1" />
      <div className="column is-6">
        <img src="images/homepageimg.svg" alt="home" />
      </div>
    </Container>
  );
};
export default HomeHero;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .margin {
    max-height: 1rem;
  }
`;

const Features = () => {
  return (
    <Container className="section has-text-centered">
      <div className="columns is-centered">
        <div className="column is-8">
          <h1 className="title is-3 has-text-weight-bold ">Features</h1>
          <div className="margin" />
          <h1 className=" subtitle is-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </h1>
        </div>
      </div>
    </Container>
  );
};
export default Features;

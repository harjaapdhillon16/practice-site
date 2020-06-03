import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  span {
    align-self: center;
  }
`;

const SocialButton = () => {
  return (
    <Container
      type="button"
      className=" columns button is-vcentered is-centered"
    >
      <div className="column is-1">
        <span className="icon is-medium ">
          <i className="fab fa-github" />
        </span>
      </div>
      <div className="column is-11 ">
        <span>GitHub</span>
      </div>
    </Container>
  );
};
export default SocialButton;

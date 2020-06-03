import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  border: 1px solid ${theme.homepageBorderColor};
  img {
    border-radius: 100px;
    width: 6rem;
    height: 6rem;
  }
  .margin {
    min-height: 1rem;
  }
  .downMargin {
    min-height: 2rem;
  }
`;

const TeamCard = () => {
  return (
    <Container className="has-text-centered has-background-white">
      <section className="section">
        <img src="images/avatar.jpeg" alt="customers" />
        <div className="margin" />
        <h1 className="title  is-6">John Smith</h1>
        <h1 className="subtitle has-text-weight-regular is-6">
          SOFTWARE ENGINEER
        </h1>
        <h1 className="subtitle is-6">
          &#34;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          consequatur numquam aliquam tenetur ad amet inventore hic beatae.&#34;
        </h1>
        <div className="downMargin" />
      </section>
    </Container>
  );
};
export default TeamCard;

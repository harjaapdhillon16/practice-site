import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Section = styled.section`
  h1 {
    color: ${theme.backgroundColor} !important;
  }
`;

const MakeMoney = () => {
  return (
    <Section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="columns is-centered ">
          <div className="column is-8 has-text-centered">
            <h1 className="title is-1 has-text-weight-bold">
              We help you make money
            </h1>
            <h1 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequatur numquam aliquam tenetur ad amet inventore hic beatae,
              quas accusantium perferendis sapiente explicabo, corporis totam!
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default MakeMoney;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  .margin {
    min-height: 0.5rem;
  }
  .columns {
    flex-direction: ${props => (props.reverse === true ? 'row-reverse' : '')};
  }
`;

const Explore = ({ reverse }) => {
  return (
    <div className="container">
      <Container reverse={reverse} className="section">
        <div className="columns is-multiline is-centered">
          <div className="column is-5">
            <h1 className="title is-2 has-text-weight-bold">Explore </h1>
            <div className="margin" />
            <h2 className="subtitle margin is-5 ">
              Integer ornare neque mauris, ac vulputate lacus venenatis et.
              Pellentesque ut ultrices purus
            </h2>
          </div>
          <div className="column is-1" />
          <div className="column is-4">
            <img src="/images/homepageimg2.svg" alt="work7" />
          </div>
        </div>
      </Container>
    </div>
  );
};
Explore.defaultProps = {
  reverse: false,
};
Explore.propTypes = {
  reverse: PropTypes.bool,
};
export default Explore;

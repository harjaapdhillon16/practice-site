import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .input {
    min-height: 3rem;
  }
  .button {
    min-height: 3rem;
  }
`;

const Subscribe = () => {
  return (
    <Section className="hero is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="section">
            <div className="columns is-multiline">
              <div className="column is-5">
                <h1 className="title has-text-weight-bold is-3">
                  Stay in the know
                </h1>
                <h2 className="subtitle is-6">
                  Receive our latest articles and feature updates
                </h2>
              </div>
              <div className="column is-1" />
              <div className="column is-4">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Text input"
                />
              </div>
              <div className="column is-2">
                <button type="button" className="button is-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Subscribe;

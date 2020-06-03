import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SocialButton from '../components/SocialButton';

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  .input {
    box-shadow: none !important;
  }
  button {
    width: 100%;
    box-shadow: none !important;
  }
  .title {
    margin-bottom: 2rem !important;
  }
  .is-12 {
    padding: 0.4rem !important;
  }
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Section className="section">
      <div className="container">
        <div className="columns is-centered is-multiline">
          <div className="column is-5 has-text-centered">
            <div className="columns is-multiline">
              <div className="column is-12 has-text-centered">
                <h2 className="title is-3 has-text-weight-bold">
                  Welcome Back
                </h2>
              </div>
              <div className="column is-12">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="column is-12">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div className="column is-12">
                <button className="button is-primary is-medium" type="button">
                  Sign in
                </button>
              </div>
              <div className="column is-12">
                <p>OR</p>
              </div>
              <div className="column is-12">
                <SocialButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;

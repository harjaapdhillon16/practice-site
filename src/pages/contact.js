import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  .input {
    box-shadow: none !important;
  }
  .textarea {
    min-height: 14rem;
  }
  button {
    margin-top: 1rem;
  }
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Section className="section">
      <div className="container">
        <div className="columns is-centered is-multiline">
          <div className="column is-12 has-text-centered">
            <h2 className="title is-3 has-text-weight-bold">Contact Us</h2>
          </div>
          <div className="column is-4">
            <input
              className="input is-medium"
              type="text"
              placeholder="Text input"
            />
          </div>
          <div className="column is-4">
            <input
              className="input is-medium"
              type="text"
              placeholder="Text input"
            />
          </div>
          <div className="column is-8">
            <textarea
              className="textarea is-medium"
              placeholder="e.g. Hello world"
            />
            <button className="button is-primary is-medium" type="button">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;

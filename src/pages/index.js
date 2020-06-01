import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import CompaniesSection from '../components/CompaniesSection';
import Features from '../components/Features';

const Container = styled.div`
  margin-top: 1rem;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <section className="section">
          <Container className="container">
            <HomeHero />
            <CompaniesSection />
            <Features />
          </Container>
        </section>
      </Layout>
    );
  }
}

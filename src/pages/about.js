import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import MakeMoney from '../components/MakeMoney';
import Team from '../components/Team';

const Container = styled.div``;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <section>
          <Container>
            <MakeMoney />
            <Team />
          </Container>
        </section>
      </Layout>
    );
  }
}

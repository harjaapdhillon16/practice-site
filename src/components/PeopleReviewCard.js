import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

const PeopleReviewCard = () => {
  return (
    <Container className="has-text-centered has-background-white">
      <section className="section">
        <img src="images/avatar.jpeg" alt="customers" />
        <div className="margin" />
        <h1 className="subtitle is-6">
          &#34;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          consequatur numquam aliquam tenetur ad amet inventore hic beatae.&#34;
        </h1>
        <div className="downMargin" />
        <h1 className="title has-text-weight-bold is-6">Shawna Murray</h1>
        <h1 className="subtitle has-text-weight-regular is-6">Company</h1>
      </section>
    </Container>
  );
};
export default PeopleReviewCard;

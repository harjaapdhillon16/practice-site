import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  img {
    max-height: 2rem;
  }
  .subtitle {
    margin-top: 10px;
  }
  .image {
    min-height: 2rem;
    min-width: 2rem;
  }
`;
const SocialData = [
  {
    uri:
      'https://sguru.org/wp-content/uploads/2018/02/5a2fe479cc45e43754640849.png',
  },
  {
    uri:
      'https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-black-2019.png',
  },
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/1024px-Instagram_simple_icon.svg.png',
  },
];
const PageLinks = [
  { page: 'About', link: '/about' },
  { page: 'Faq', link: '/faq' },
  { page: 'Contact', link: '/contact' },
  { page: 'Blog', link: '/blog' },
];

const Footer = () => {
  return (
    <Container className=" has-background-light">
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-2">
              <img src="images/logo.svg" alt="logo" />
              <h1 className="subtitle is-6">© 2019 Company</h1>
            </div>
            <div className="column is-6" />
            <div className="column">
              <div className="columns is-multiline has-text-centered">
                <div className="column is-6" />
                {SocialData.map(data => (
                  <div className="column is-2">
                    <img className="image" src={data.uri} alt="logo" />
                  </div>
                ))}
                {PageLinks.map(data => (
                  <div className="column is-3">
                    <Link to={data.link}>
                      <h1 className="subtitle is-6">{data.page}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;

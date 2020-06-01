/* eslint-disable prettier/prettier */
/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem;
  max-height: 5rem;
  border: 0px solid ${props => props.theme.homepageBorderColor};
  border-bottom-width: 1px;
  font-family: ${props => props.theme.primaryFontFamily};
  figure {
    max-height: 3rem;
  }
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .home {
    max-height: 3rem;
  }
  .text {
    color: ${props => props.theme.textColor};
    font-weight: 300;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <figure className="image is-128x128">
                  <img src="/images/logo.svg" alt="site logo" />
                </figure>
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end  ">
                <Link to="/signin" className="home navbar-item">
                  <h1 className=" text title is-size-5	">Sign in</h1>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}

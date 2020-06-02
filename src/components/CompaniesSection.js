import React from 'react';

const CompaniesSection = () => {
  return (
    <div className="section has-background-light	">
      <div className="container">
        <div className="columns is-multiline is-centered is-vcentered">
          <div className="column is-2">
            <img alt="company" src="images/instagram.svg" />
          </div>
          <div className="column is-2">
            <img alt="company" src="images/logo-slack.svg" />
          </div>
          <div className="column is-2">
            <img alt="company" src="images/logo-spotify.svg" />
          </div>
          <div className="column is-2">
            <img alt="company" src="images/logo-tinder.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompaniesSection;

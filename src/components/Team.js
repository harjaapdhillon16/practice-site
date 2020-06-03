import React from 'react';

import PeopleReviewCard from './TeamCard';

const Team = () => {
  return (
    <div className="has-background-light">
      <section className="section">
        <h1 className="subtitle is-3 has-text-weight-bold has-text-centered">
          Meet The Team
        </h1>
        <div className="columns is-multiline is-centered">
          <div className="column is-3">
            <PeopleReviewCard />
          </div>
          <div className="column is-3">
            <PeopleReviewCard />
          </div>
          <div className="column is-3">
            <PeopleReviewCard />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Team;

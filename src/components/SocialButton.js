import React from 'react';
import styled from 'styled-components';

const SocialButton = () => {
  return (
    <button type="button" className="button is-medium ">
      <span className="icon ">
        <i className="fab fa-github has-icons-left" />
      </span>
      <span>GitHub</span>
    </button>
  );
};
export default SocialButton;

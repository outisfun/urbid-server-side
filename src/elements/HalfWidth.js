import React from 'react';
import { css } from '@emotion/core';

const HalfWidth = ({ children }) => {
  return (
    <div 
      css={css`
        @media (min-width: 768px) {
          min-width: 50%;
          width: 50%;
          flex-basis: 0;
          flex-grow: 1;
        }
      `}>
      { children }
    </div>
  )
};

export default HalfWidth;
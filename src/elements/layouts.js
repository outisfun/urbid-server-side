import React from 'react';
import { css } from '@emotion/core';

export const HalfWidth = ({ children }) => {
  return (
    <div
      css={css`
        @media (min-width: 768px) {
          min-width: 50%;
          width: 50%;
          flex-basis: 0;
          flex-grow: 1;
          padding: 0px 6px;
        }
      `}
    >
      {children}
    </div>
  );
};

export const ContainerFlex = ({ children }) => (
  <div
    css={css`
      width: 100%;
      max-width: auto;
      margin: 0 auto;
    `}
  >
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 767px) {
          flex-direction: column;
          margin: 0px;
        }
      `}
    >
      {children}
    </div>
  </div>
);

export const Container = ({ children }) => (
  <div
    css={css`
      width: 100%;
      max-width: auto;
      margin: 0 auto;
    `}
  >
    {children}
  </div>
);

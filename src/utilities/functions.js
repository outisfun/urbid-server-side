import React from 'react';
import split from 'lodash/split';
import pull from 'lodash/pull';
import includes from 'lodash/includes';

export const collectIdsAndDocs = doc => {
  let _u = doc ? (doc.data() ? doc.data() : {}) : {};
  _u.id = doc ? doc.id : '';
  return { ..._u };
};

export const getColorMode = () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const segments = pull(split(url, '/'), ''); // split url and cleanup empty strings

  let mode =
    includes(url, 'contacts') ||
    includes(url, 'services') ||
    includes(url, 'work')
      ? 'dark'
      : 'light';

  // silly workaround for homepage :/
  if (
    !includes(url, 'services') &&
    !includes(url, 'work') &&
    !includes(url, 'about') &&
    !includes(url, 'contacts')
  ) {
    mode = 'dark';
  }

  // silly workaround for single project page
  if (segments.length > 3 && includes(url, 'work')) {
    mode = 'light';
  }

  return mode;
};

export const setDocHeight = el => {
  let vh = window.innerHeight * 0.01;

  if (!el || !el.current) {
    return;
  }
  el.current.style.setProperty('--vh', `${vh}px`);
};

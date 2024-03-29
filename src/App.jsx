import React from 'react';
import PropTypes from 'prop-types';
import sum from './another';

const App = ({ title }) => {
  const a = 1;
  const b = 2;
  console.log(process.env.NODE_ENV);
  return (
    <div>{title}</div>
  );
};

App.defaultProps = {
  title: 'Hello World',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;

import React from 'react';
import Styled from './index.styled';

const PerformanceHero = ({ children }) => {
  return (
    <Styled.PerformanceHero>
      {children}
    </Styled.PerformanceHero>
  );
};

export default PerformanceHero;

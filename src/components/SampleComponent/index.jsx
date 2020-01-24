import React from 'react';
import Styled from './index.styled';

const SampleComponent = ({ children }) => {
  return (
    <Styled.SampleComponent>
      {children}
    </Styled.SampleComponent>
  );
};

export default SampleComponent;

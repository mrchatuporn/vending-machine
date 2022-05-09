import { FunctionComponent } from 'react';
import styled from 'styled-components';

import Header from '../base/header';
import Price from './prices';

const SystemContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

const System: FunctionComponent = () => {
  return (
    <SystemContainer>
      <Header title='storage prices' fontSize='18px' color='#212529' />
      <Price />
    </SystemContainer>
  );
};

export default System;

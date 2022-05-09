import { FunctionComponent } from 'react';
import styled from 'styled-components';

import Message from '../message';
import InsideGlass from '../inside-glass';
import Deposit from '../deposit';
import Withdraw from '../withdraw';
import ProductSelection from '../product-selection';

const MachineContainer = styled.div`
  background: #212529;
  border: 2px solid #393c40;
  padding: 4.5rem 1rem;
  height: 100vh;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: start;
  width: 100%;

  .canned-drink,
  .control-panel {
    display: flex;
    flex-direction: column;
  }

  .canned-drink {
    width: 70%;
    margin-right: 1rem;
  }

  .control-panel {
    width: 30%;

    .panel {
      margin-bottom: 1.4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const Machine: FunctionComponent = () => {
  return (
    <MachineContainer>
      <div className='canned-drink'>
        <InsideGlass />
        <Message />
      </div>
      <div className='control-panel'>
        <div className='panel'>
          <Deposit />
        </div>
        <div className='panel'>
          <ProductSelection />
        </div>
        <div className='panel'>
          <Withdraw />
        </div>
      </div>
    </MachineContainer>
  );
};

export default Machine;

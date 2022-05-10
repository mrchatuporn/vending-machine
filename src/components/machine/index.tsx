import { FunctionComponent } from 'react';
import styled from 'styled-components';

import Header from '../base/header';
import Message from '../message';
import InsideGlass from '../inside-glass';
import Deposit from '../deposit';
import Withdraw from '../withdraw';
import ProductSelection from '../product-selection';

const MachineContainer = styled.div`
  padding: 1.5rem 0;
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

    .control-item {
      margin-bottom: 1.2rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const LayoutMachine = styled.div`
  background: #272727;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border: 2px solid #393c40;
  padding: 2.5rem 1rem;
`;

const Machine: FunctionComponent = () => {
  return (
    <LayoutMachine>
      <Header title='vending-machine' fontSize='18px' color='#fff' />
      <MachineContainer>
        <div className='canned-drink'>
          <InsideGlass />
          <Message />
        </div>
        <div className='control-panel'>
          <div className='control-item'>
            <Deposit />
          </div>
          <div className='control-item'>
            <ProductSelection />
          </div>
          <div className='control-item'>
            <Withdraw />
          </div>
        </div>
      </MachineContainer>
    </LayoutMachine>
  );
};

export default Machine;

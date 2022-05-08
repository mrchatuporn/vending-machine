import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import Message from './message';
import InsideGlass from './inside-glass';
import Slot from './slot';
import Deposit from '../deposit';
import ProductSelection from '../product-selection';

const MachineContainer = styled.div`
  background: #808080;
  border: 2px solid #696969;
  border-radius: 7px;
  padding: 2rem;

  .machine-control {
    margin-bottom: 0.5rem;
  }
`;

const Machine: FunctionComponent = () => {
  return (
    <MachineContainer>
      <Row>
        <Col md={8}>
          <InsideGlass />
          <Slot />
        </Col>
        <Col md={4}>
          <Row>
            <Col md={12} className='machine-control'>
              <Deposit />
            </Col>
            <Col md={12} className='machine-control'>
              <ProductSelection />
            </Col>
            <Col md={12} className='machine-control'>
              <Message />
            </Col>
          </Row>
        </Col>
      </Row>
    </MachineContainer>
  );
};

export default Machine;

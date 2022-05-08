import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import { useTypedSelector } from '../../hooks';
import Canned from '../canned';
import Status from './status';

const CannedContainer = styled.div`
  background: #43ada7;
  border: 2px solid #43ada7;
  border-radius: 7px;
  padding: 1.5rem 1rem;
  border: 2px solid #dcdcdc;

  .item,
  .canned {
    justify-items: center;
    justify-content: center;
    display: flex;
  }

  .canned {
    padding: 1rem;
  }

  .item {
    border-right: 1px solid #ffffff50;

    &:last-child,
    &:nth-last-child(5n) {
      border-right: 1px solid #43ada7;
    }
  }

  .status {
    background: #fff;
  }
`;

const InsideGlass: FunctionComponent = () => {
  const { inventories, loading, error } = useTypedSelector(state => state.inventory);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <CannedContainer>
        <Row>
          {inventories.map(inventory => (
            <Col md={3} className='item' key={inventory.id}>
              <Row>
                <Col md={12} className='canned'>
                  <Canned color={inventory.color} name={inventory.name} />
                </Col>
                <Col md={12} className='status'>
                  <Status active={inventory.quantity > 0} code={inventory.code} />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </CannedContainer>
    </>
  );
};

export default InsideGlass;

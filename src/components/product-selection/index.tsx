import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import Button from '../base/button';
import { activeArray } from '../../helper/active';

const ProductSelectionContainer = styled.div`
  padding: 0.5rem;
  background: #000;
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 2px solid #dcdcdc;
`;

const ProductSelection: FunctionComponent = () => {
  const selections = ['A', '1', '2', 'B', '3', '4'];
  const [isActive, setIsActive] = useState<string[]>([]);
  const [productCode, setProductCode] = useState<string>('');

  const handleAddProductCode = (name: string) => {
    if (productCode?.length >= 2) {
      setProductCode(name);
      setIsActive([name]);
    } else {
      setIsActive([...isActive, name]);
      setProductCode(productCode + name);
    }
  };

  return (
    <ProductSelectionContainer>
      <Container>
        <Row>
          <Col md={12} className='button-deposit'>
            <Row>
              {selections.map((selection, index) => (
                <Col key={index} md={4}>
                  <div> {}</div>
                  <Button
                    type='selection'
                    name={selection}
                    handlerClick={() => handleAddProductCode(selection)}
                    active={activeArray(isActive, selection)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </ProductSelectionContainer>
  );
};

export default ProductSelection;

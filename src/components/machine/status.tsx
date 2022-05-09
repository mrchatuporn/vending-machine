import { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { verifyQuantity } from '../../helper/verify';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  flex-direction: row;
  border-radius: 10px;
  flex-direction: column;

  .stock {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .status {
      width: 10px;
      height: 10px;
      background: ${props => props.color} !important;
      border-radius: 50%;
    }

    span {
      font-size: 12px;
      padding-left: 0.5rem;
      font-weight: 500;
      color: ${props => props.color};

      strong {
        font-size: 12px;
      }
    }
  }

  .price {
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.color};
    border: dashed 1px ${props => props.color};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.25rem;
  }
`;

interface IStatusProps {
  code: string;
  quantity: number;
  price: number;
}

const Status: FunctionComponent<IStatusProps> = ({ code, quantity, price }) => {
  const [color, setColor] = useState<string>('#198754');

  useEffect(() => {
    const { color } = verifyQuantity(quantity > 0);
    setColor(color);
  }, []);

  return (
    <Container color={color}>
      <div className='stock'>
        <div className='status' />
        <span>
          {code} (<strong>{quantity}</strong>)
        </span>
      </div>
      <div className='price'>
        <span>{price} THB</span>
      </div>
    </Container>
  );
};

export default Status;

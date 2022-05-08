import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setWallet } from '../../store/wallet/actions';

import { useTypedSelector } from '../../hooks';
import Header from '../base/header';
import Button from '../base/button';

const DepositContainer = styled.div`
  padding: 0.5rem;
  background: #000;
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 2px solid #dcdcdc;

  .wallet-total {
    text-align: center;

    .price {
      border: dashed 1px #696969;
      span {
        color: #fff;
      }
    }
  }
`;

const Deposit: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { wallet, loading, error } = useTypedSelector(state => state.wallet);

  const prices = [1, 5, 10, 20, 50, 100, 500, 1000];

  const handleAddPrice = (price: number) => {
    dispatch(setWallet(price));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <DepositContainer>
      <Container>
        <Row>
          <Col md={12} className='wallet-total'>
            <Header title='deposit' />
            <div className='price'>
              <span>{wallet}</span>
            </div>
          </Col>
          <Col md={12} className='button-deposit'>
            <Row>
              {prices.map((price, index) => (
                <Col key={index} md={6}>
                  <Button type='deposit' name={price} handlerClick={() => handleAddPrice(price)} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </DepositContainer>
  );
};

export default Deposit;

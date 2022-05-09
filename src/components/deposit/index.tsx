import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { depositWallet } from '../../store/wallet/actions';
import { removeMessage } from '../../store/message/actions';
import { depositPrice } from '../../store/prices/actions';

import { useTypedSelector } from '../../hooks';
import LayoutControl from '../layouts/control';
import Header from '../base/header';
import Button from '../base/button';

const DepositContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .wallet-total {
    text-align: center;
    width: 100%;
    padding: 0 5px;

    .price {
      border: dashed 1px #696969;

      span {
        color: #fff;
      }
    }
  }

  .button-deposit {
    gap: 0;
    grid-template-columns: repeat(2, minmax(0, 2fr));
    display: grid;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;

    .rates {
      padding: 0 5px;
    }
  }
`;

const Deposit: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { wallet, loading, error } = useTypedSelector(state => state.wallet);
  const { text } = useTypedSelector(state => state.message);

  const prices = [1, 5, 10, 20, 50, 100, 500, 1000];

  const handleAddPrice = (price: number) => {
    if (text) {
      dispatch(removeMessage());
    }
    dispatch(depositWallet(price));
    dispatch(depositPrice(price));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <LayoutControl>
      <DepositContainer>
        <div className='wallet-total'>
          <Header title='deposit' fontSize='18px' color='#fff' />
          <div className='price'>
            <span>{wallet}</span>
          </div>
        </div>
        <div className='button-deposit'>
          {prices.map((price, index) => (
            <div className='rates' key={index}>
              <Button type='deposit' name={price} handlerClick={() => handleAddPrice(price)} />
            </div>
          ))}
        </div>
      </DepositContainer>
    </LayoutControl>
  );
};

export default Deposit;

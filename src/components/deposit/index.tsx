import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { depositWallet } from '../../store/wallet/actions';
import { setLogger } from '../../store/logger/action';
import { removeMessage } from '../../store/message/actions';
import { depositPrice } from '../../store/prices/actions';

import { useTypedSelector } from '../../hooks';
import LayoutControl from '../base/layouts/control';
import Header from '../base/header';
import Button from '../base/button';
import Loading from '../base/loading';

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
  const { wallet, loading } = useTypedSelector(state => state.wallet);
  const { text } = useTypedSelector(state => state.message);

  const prices = [1, 5, 10, 20, 50, 100, 500, 1000];

  const handleAddPrice = (price: number) => {
    if (text) {
      dispatch(removeMessage());
    }
    dispatch(depositWallet(price));
    dispatch(depositPrice(price));
    dispatch(
      setLogger({
        type: 'DEPOSIT',
        product: undefined,
        coins: [
          {
            quantity: 1,
            price,
          },
        ],
        totalCoin: price,
        wallet: wallet + price,
      })
    );
  };

  if (loading) return <Loading />;

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

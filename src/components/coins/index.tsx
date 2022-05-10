import { FunctionComponent } from 'react';
import styled from 'styled-components';

import LayoutTerminal from '../layouts/terminal';
import { useTypedSelector } from '../../hooks';

const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  height: auto;
  max-height: 35vh;

  .items {
    gap: 0;
    grid-template-columns: repeat(2, minmax(0, 2fr));
    display: grid;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
  }

  .item {
    width: 100%;
    padding: 10px;
    border: 1px solid #9cd9f070;
  }

  .text,
  .quantity {
    color: #9cd9f0;
    margin: 0 !important;
  }

  .quantity {
    font-size: 14px !important;
    padding-left: 15px;
  }

  .text {
    font-size: 12px !important;
    font-weight: bold;
  }
`;

const Coins: FunctionComponent = () => {
  const { prices, error, loading } = useTypedSelector(state => state.prices);

  if (loading) return <span>...loading</span>;

  return (
    <LayoutTerminal>
      <CoinContainer>
        <div className='items'>
          {prices?.map(({ id, quantity, price }) => (
            <div className='item' key={id}>
              <p className='text'>{price} COIN :</p>
              <span className='quantity'>- quantity : [{quantity}]</span>
            </div>
          ))}
        </div>
      </CoinContainer>
    </LayoutTerminal>
  );
};

export default Coins;

import { FunctionComponent, useRef, useEffect } from 'react';
import styled from 'styled-components';

import LayoutTerminal from '../base/layouts/terminal';
import { useTypedSelector } from '../../hooks';
import Loading from '../base/loading';

const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  height: auto;
  max-height: 45vh;

  .item {
    width: 100%;
    padding: 10px;
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

  .obj {
    padding-left: 20px;
  }
`;

const Logs: FunctionComponent = () => {
  const logsEndRef = useRef<any>(null);
  const { logger, loading } = useTypedSelector(state => state.logger);

  useEffect(() => {
    scrollToBottom();
  }, [logger]);

  const scrollToBottom = () => {
    logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <Loading />;

  return (
    <LayoutTerminal>
      <CoinContainer>
        {logger?.map(({ type, product, coins, totalCoin, wallet }, index) => (
          <div className='item' key={index}>
            <p className='text'>log[{index + 1}] : [</p>
            <p className='text obj'>type: {type}</p>
            <p className='text obj'>product: {JSON.stringify(product)}</p>
            <p className='text obj'>coins: {JSON.stringify(coins)}</p>
            <p className='text obj'>totalCoin: {totalCoin}</p>
            <p className='text obj'>wallet: {wallet}</p>
            <p className='text'>]</p>
          </div>
        ))}
        <div ref={logsEndRef} />
      </CoinContainer>
    </LayoutTerminal>
  );
};

export default Logs;

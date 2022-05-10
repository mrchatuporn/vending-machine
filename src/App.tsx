import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInventory } from './store/inventory/actions';
import { setPrice } from './store/prices/actions';
import styled from 'styled-components';

import Machine from './components/machine';
import System from './components/coins';
import Logs from './components/logs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 100vh;

  .machine {
    width: 100%;
    min-width: 800px;
    height: 100vh;
    background: #272727;
  }

  .system {
    width: 100%;
    height: 100vh;
    background: #151515;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getInventoryHandler();
    setPriceHandler();
  }, []);

  const getInventoryHandler = () => {
    dispatch(getInventory());
  };

  const setPriceHandler = () => {
    dispatch(setPrice());
  };

  return (
    <Container>
      <div className='machine'>
        <Machine />
      </div>
      <div className='system'>
        <System />
        <Logs />
      </div>
    </Container>
  );
}

export default App;

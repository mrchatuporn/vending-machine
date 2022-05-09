import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInventory } from './store/inventory/actions';
import styled from 'styled-components';

import Machine from './components/machine';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background: #393c40;
  height: 100vh;

  .machine {
    width: 100%;
    min-width: 800px;
    height: 100vh;
  }

  .system {
    width: 100%;
    height: 100vh;
    background: #c0c0c0;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getInventoryHandler();
  }, []);

  const getInventoryHandler = () => {
    dispatch(getInventory());
  };

  return (
    <Container>
      <div className='machine'>
        <Machine />
      </div>
      <div className='system'>System</div>
    </Container>
  );
}

export default App;

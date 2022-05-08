import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getInventory } from './store/inventory/actions';
import styled from 'styled-components';

import Machine from './components/machine';

const Container = styled.div`
  padding: 2.5rem;
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
      <Row>
        <Col md={8}>
          <Machine />
        </Col>
        <Col md={4}>System</Col>
      </Row>
    </Container>
  );
}

export default App;

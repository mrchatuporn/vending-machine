import { FunctionComponent } from 'react';
import styled from 'styled-components';

const SlotContainer = styled.div`
  padding: 0.5rem 1rem;
  background: #dcdcdc;
  margin-top: 1rem;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  span {
    font-size: 1.2rem;
    font-weight: 500;
    color: #696969;
  }
`;

const Slot: FunctionComponent = () => {
  return (
    <SlotContainer>
      <span>test</span>
    </SlotContainer>
  );
};

export default Slot;

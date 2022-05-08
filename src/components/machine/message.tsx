import { FunctionComponent } from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 0.5rem 1rem;
  background: #dcdcdc;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  span {
    font-size: 1.2rem;
    font-weight: 500;
    color: #696969;
  }
`;

const Message: FunctionComponent = () => {
  return (
    <MessageContainer>
      <span>test</span>
    </MessageContainer>
  );
};

export default Message;

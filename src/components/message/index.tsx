import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '../../hooks';
import Loading from '../base/loading';

const MessageContainer = styled.div`
  padding: 0.25rem 1rem;
  background: #dcdcdc;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 7px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;

  span {
    font-size: 0.75rem;
    font-weight: 500;
    color: #393c40;
    font-family: 'Press Start 2P', cursive !important;
  }
`;

const Message: FunctionComponent = () => {
  const { text, loading, error } = useTypedSelector(state => state.message);

  if (loading) return <Loading />;

  return (
    <MessageContainer>
      <span>{text}</span>
    </MessageContainer>
  );
};

export default Message;

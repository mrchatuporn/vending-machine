import { FunctionComponent } from 'react';
import styled from 'styled-components';

const LayoutTerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

const Top = styled.div`
  box-sizing: border-box;
  height: 30px;
  width: 100%;
  background: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  align-items: center;

  .close,
  .minimize,
  .zoom {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    top: 2px;
    left: 6px;
    display: inline-block;
  }

  .close {
    background-color: #ff3b47;
    border-color: #9d252b;
  }

  .minimize {
    left: 11px;
    background-color: #ffc100;
    border-color: #9d802c;
  }

  .zoom {
    left: 16px;
    background-color: #00d742;
    border-color: #049931;
  }
`;

const Screen = styled.div`
  background-color: #151515;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

interface LayoutTerminalProps {
  children: JSX.Element[] | JSX.Element;
}

const LayoutTerminal: FunctionComponent<LayoutTerminalProps> = ({ children }) => {
  return (
    <LayoutTerminalContainer>
      <Top>
        <div className='close' />
        <div className='minimize' />
        <div className='zoom' />
      </Top>
      <Screen>{children}</Screen>
    </LayoutTerminalContainer>
  );
};

export default LayoutTerminal;

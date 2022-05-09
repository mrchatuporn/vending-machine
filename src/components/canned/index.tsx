import { FunctionComponent } from 'react';
import styled from 'styled-components';

const CannedContainer = styled.div`
  position: relative;

  .can-top {
    position: relative;
    overflow: hidden;
    width: 85px;
    background: ${props => props.color}95;

    .highlight {
      height: 10px;
      background: linear-gradient(
        110deg,
        rgba(0, 0, 0, 0) 15%,
        gba(#43ada7, 0.3) ; 18%,
        gba(#43ada7, 0.3) ; 22%,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 30%,
        gba(#43ada7, 0.3) ; 32%,
        gba(#43ada7, 0.3) ; 46%,
        rgba(0, 0, 0, 0) 48%,
        rgba(0, 0, 0, 0) 100%
      );
      border: 1px solid ${props => props.color};
    }

    &:before,
    &:after {
      display: block;
      content: '';
      position: absolute;
      background: #43ada7;
      width: 55px;
      height: 18px;
      border: 1px solid ${props => props.color};
      border-bottom: 0;
    }

    &:before {
      border-top-left-radius: 35px;
      border-top-right-radius: 10px;
      transform: rotate(130deg);
      left: -39px;
      top: 3px;
    }
    &:after {
      border-top-left-radius: 10px;
      border-top-right-radius: 35px;
      transform: rotate(230deg);
      right: -28px;
      top: 3px;
    }
  }

  .can-body {
    width: 74px;
    height: 80px;
    background: ${props => props.color}95;
    border-left: 2px solid ${props => props.color};
    border-right: 2px solid ${props => props.color};
    display: flex;
    animation: movelabel 2s infinite;
    align-items: center;
    justify-content: center;

    span {
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      color: white;
    }

    &:after {
      display: flex;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 10%,
        gba(#43ada7, 0.3) ; 12%,
        gba(#43ada7, 0.3) ; 17%,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0) 25%,
        gba(#43ada7, 0.3) ; 27%,
        gba(#43ada7, 0.3) ; 42%,
        rgba(0, 0, 0, 0) 44%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }

  .can-bottom {
    position: relative;
    overflow: hidden;
    width: 85px;
    background: ${props => props.color}95;

    .highlight {
      height: 10px;
      background: linear-gradient(
        65deg,
        rgba(0, 0, 0, 0) 15%,
        gba(#43ada7, 0.3) ; 18%,
        gba(#43ada7, 0.3) ; 22%,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 30%,
        gba(#43ada7, 0.3) ; 32%,
        gba(#43ada7, 0.3) ; 46%,
        rgba(0, 0, 0, 0) 48%,
        rgba(0, 0, 0, 0) 100%
      );
      border: 1px solid ${props => props.color};
    }

    &:before,
    &:after {
      display: block;
      content: '';
      position: absolute;
      background: #43ada7;
      width: 55px;
      height: 18px;
      border: 1px solid ${props => props.color};
      border-bottom: 0;
    }

    &:before {
      border-top-left-radius: 35px;
      border-top-right-radius: 10px;
      transform: rotate(420deg);
      left: -39px;
      bottom: 3px;
    }
    &:after {
      border-top-left-radius: 10px;
      border-top-right-radius: 35px;
      transform: rotate(-55deg);
      right: -28px;
      bottom: 3px;
    }
  }
`;

interface ICannedProps {
  color: string;
  name: string;
}

const Canned: FunctionComponent<ICannedProps> = ({ color, name }) => {
  return (
    <CannedContainer color={color}>
      <div className='can-top'>
        <div className='highlight'></div>
      </div>
      <div className='can-body'>
        <span>{name}</span>
      </div>
      <div className='can-bottom'>
        <div className='highlight'></div>
      </div>
    </CannedContainer>
  );
};
export default Canned;

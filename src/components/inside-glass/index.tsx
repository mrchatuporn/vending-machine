import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '../../hooks';
import Canned from './canned';
import Status from './status';

const InsideGlassContainer = styled.div`
  background: #43ada7;
  border: 2px solid #43ada7;
  border-radius: 7px;
  padding: 1.5rem 1rem;
  border: 2px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .items {
    gap: 0;
    grid-template-columns: repeat(4, minmax(0, 2fr));
    display: grid;
    justify-content: center;
    width: 100%;
  }

  .item,
  .box-canned {
    justify-items: center;
    justify-content: center;
    display: flex;
    justify-content: column;
    width: 100%;
  }

  .box-canned {
    padding: 1rem;
  }

  .item {
    border-right: 1px solid #ffffff50;

    &:last-child,
    &:nth-last-child(5n) {
      border-right: 1px solid #43ada7;
    }

    .box {
      width: 100%;
    }
  }

  .box-status {
    background: #fff;
  }
`;

const InsideGlass: FunctionComponent = () => {
  const { inventories, loading, error } = useTypedSelector(state => state.inventory);

  if (loading) return <div>Loading...</div>;

  return (
    <InsideGlassContainer>
      <div className='items'>
        {inventories.map(inventory => (
          <div className='item' key={inventory.id}>
            <div className='box'>
              <div className='box-canned'>
                <Canned color={inventory.color} name={inventory.name} />
              </div>
              <div className='box-status'>
                <Status code={inventory.code} quantity={inventory.quantity} price={inventory.price} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </InsideGlassContainer>
  );
};

export default InsideGlass;

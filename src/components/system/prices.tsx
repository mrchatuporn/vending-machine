import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '../../hooks';

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;

  ul {
    list-style-type: none;
    padding-left: 0;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 2fr));
    display: grid;
    width: 100%;

    li {
      border-radius: 0.5rem;
      box-shadow: 1px 1px 5px #888888;
      padding: 0.5rem 0.75rem;
      background: #fff;

      span {
        font-size: 14px;
      }
      strong {
        color: #393c40;
      }
    }
  }
`;

const Price: FunctionComponent = () => {
  const { prices, error, loading } = useTypedSelector(state => state.prices);

  if (loading) return <span>...loading</span>;

  return (
    <PriceContainer>
      <ul>
        {prices?.map(({ id, quantity, price }) => (
          <li key={id}>
            <div className='name'>
              <span>
                <strong>name : </strong> {price} THB
              </span>
            </div>
            <div className='quantity'>
              <span>
                <strong>quantity : </strong> {quantity}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </PriceContainer>
  );
};

export default Price;

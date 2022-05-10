import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import LayoutControl from '../base/layouts/control';
import Button from '../base/button';

import { useTypedSelector } from '../../hooks';
import { reduceInventory } from '../../store/inventory/actions';
import { reduceWallet } from '../../store/wallet/actions';
import { setLogger } from '../../store/logger/action';
import { setMessage, removeMessage } from '../../store/message/actions';
import { activeArray } from '../../helper/active';
import { IInventory } from '../../store/inventory/reducer';

const ProductSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .selection-number {
    gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 2fr));
    display: grid;
    width: 100%;
    padding: 0.25rem 0.5rem;

    .number {
      display: flex;
      justify-content: column;
      width: 100%;
    }
  }

  .selection-control {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .reset,
    .confirm {
      width: 100%;

      &:first-child {
        padding-right: 0.5rem;
      }

      &:last-child {
        padding-left: 0.5rem;
      }
    }
  }
`;

const ProductSelection: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { inventories } = useTypedSelector(state => state.inventory);
  const { wallet } = useTypedSelector(state => state.wallet);
  const { text } = useTypedSelector(state => state.message);

  const [isActive, setIsActive] = useState<string[]>(['']);
  const [productCode, setProductCode] = useState<string>('');

  const selections = ['A', '1', '2', 'B', '3', '4'];

  const handleAddProductCode = (name: string): void => {
    if (wallet <= 0) {
      dispatch(setMessage('wallet is empty'));
      return;
    }

    if (productCode?.length >= 2 || name === productCode) return;

    if (productCode?.length >= 2) {
      setProductCode(name);
      setIsActive([name]);
      return;
    }

    if (text) {
      dispatch(removeMessage());
    }

    setIsActive([...isActive, name]);
    setProductCode(productCode + name);
  };

  const handleConfirm = (): void => {
    if (productCode?.length < 2) {
      dispatch(setMessage('please select product code 2 digits'));
      return;
    }

    const product: IInventory | undefined = inventories.find(inventory => inventory.code === productCode);

    if (!product) {
      dispatch(setMessage(`product code ${productCode} not found`));
      handleReset();
      return;
    }

    if (product.quantity === 0) {
      dispatch(setMessage(`product ${product.name}(${productCode}) is out of stock`));
      handleReset();
      return;
    }

    if (wallet < product.price) {
      dispatch(setMessage(`wallet is not enough to buy ${product.name}(${productCode})`));
      handleReset();
      return;
    }

    dispatch(reduceInventory(productCode));
    dispatch(reduceWallet(product.price));
    dispatch(setMessage(`${product.name}(${productCode}) is purchased`));
    dispatch(
      setLogger({
        type: 'BUY',
        product: product,
        coins: [],
        totalCoin: product.price,
        wallet: wallet - product.price,
      })
    );
    handleReset();
  };

  const handleReset = (): void => {
    setProductCode('');
    setIsActive(['']);
  };

  return (
    <LayoutControl>
      <ProductSelectionContainer>
        <div className='selection-number'>
          {selections.map((selection, index) => (
            <div className='number' key={index}>
              <Button
                type='selection'
                name={selection}
                handlerClick={() => handleAddProductCode(selection)}
                active={activeArray(isActive, selection)}
              />
            </div>
          ))}
        </div>
        <div className='selection-control'>
          <div className='reset'>
            <Button name='reset' handlerClick={() => handleReset()} />
          </div>
          <div className='confirm'>
            <Button name='confirm' handlerClick={() => handleConfirm()} />
          </div>
        </div>
      </ProductSelectionContainer>
    </LayoutControl>
  );
};

export default ProductSelection;

import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { withdrawWallet } from '../../store/wallet/actions';
import { removeMessage, setMessage } from '../../store/message/actions';

import { useTypedSelector } from '../../hooks';
import Button from '../base/button';

const Withdraw: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { wallet } = useTypedSelector(state => state.wallet);
  const { text } = useTypedSelector(state => state.message);

  const handleWithdraw = () => {
    if (wallet <= 0) {
      dispatch(setMessage('wallet is empty.'));
      return;
    }

    if (text) {
      dispatch(removeMessage());
    }
    dispatch(withdrawWallet());
    dispatch(setMessage('withdraw success.'));
  };

  return <Button name='Coin Return' height='50px' handlerClick={() => handleWithdraw()} />;
};

export default Withdraw;

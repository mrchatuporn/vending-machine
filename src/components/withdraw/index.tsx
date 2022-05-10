import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { calculateBalanceCoins } from '../../helper/calculate';

import { withdrawWallet } from '../../store/wallet/actions';
import { removeMessage, setMessage } from '../../store/message/actions';
import { setLogger } from '../../store/logger/action';
import { withdrawPrice } from '../../store/prices/actions';

import { useTypedSelector } from '../../hooks';
import Button from '../base/button';

const Withdraw: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { prices } = useTypedSelector(state => state.prices);
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

    const coins = calculateBalanceCoins(wallet, prices);

    dispatch(withdrawWallet());
    dispatch(withdrawPrice(coins));
    dispatch(
      setLogger({
        type: 'DEPOSIT',
        product: undefined,
        coins: coins,
        totalCoin: wallet,
        wallet: 0,
      })
    );
    dispatch(setMessage(`withdraw success ${wallet} coin.`));
  };

  return <Button name='width draw coin' height='50px' handlerClick={() => handleWithdraw()} />;
};

export default Withdraw;

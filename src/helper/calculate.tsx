export const calculateWithdrawPrice = (wallet: number, prices: number[]): any => {
  console.log('🚀 ~ file: calculate.tsx ~ line 4 ~ calculateWithdrawPrice ~ wallet', wallet);
  let data: number[] = [];

  for (let i = 0; i < wallet; ) {
    const price: any = closest(wallet, prices);
    data.push(price);
    wallet = wallet - price;
  }

  console.log(data);
};

export const closest = (num: any, arr: any): number => {
  let curr = arr[0];
  let diff = Math.abs(num - curr);
  for (var val = 0; val < arr.length; val++) {
    let newdiff = Math.abs(num - arr[val]);
    if (newdiff < diff) {
      console.log('if', newdiff);
      diff = newdiff;
      curr = arr[val];
    }
  }
  console.log(diff);
  return curr;
};

var steem = require('steem');


steem.api.streamTransactions('head', function(err, result) {
  let txType = result.operations[0][0]
  let txData = result.operations[0][1]
  if(txType == 'transfer' && txData.memo.includes("Please update your delegation:") && txData.memo.includes("0.000000%20VESTS") && txData.to == "fbslo" && txData.from == 'minnowbooster') {
   var str = txData.memo;
   var res = str.split("=") && str.split("&");
   var delegatee123 = res[1].split("=");
   let delegatee1234 = delegatee123[1]
   console.log('Undelegate to ' + delegatee123[1]);

   var wif = 'your-private-ACTIVE-key'
   var delegator = 'your-username (e.g fbslo)'
   var vesting_shares = '0.000000 VESTS'

   steem.broadcast.delegateVestingShares(wif, delegator, delegatee1234, vesting_shares, function(err, result) {
console.log('Undelegated to ' + delegatee123[1]);
})
};
})

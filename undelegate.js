var steem = require('steem'); //get steemsj --> npm install steem --save
var cron = require('node-cron'); //get CronJob --> npm install --save node-cron

cron.schedule('* * * * *', function() { //use https://crontab.guru/ to set time to run this script.
            // * * * * * will run it every minute.

        const ACCOUNT_NAME = 'your-account-name' //change account name
        const WALLET_FILTER = 'transfer'
        steem.api.getAccountHistory(ACCOUNT_NAME, -1, 50, (err, result) => {
          console.log(err,result)
          let transfers = result.filter( tx => tx[1].op[0] === WALLET_FILTER )
          console.log(transfers)
          displayTransactions(transfers)
        });
        function displayTransactions(transactions){
          transactions.forEach((tx) => {
            let transfer = tx[1].op[1]

            if(transfer.memo.includes("Please update your delegation:") && transfer.memo.includes("0.000000%20VESTS") && transfer.to == "your-account-name" && transfer.from == 'minnowbooster') {
             //change your-account-name to your steem username in line 15 (above)
              var str = transfer.memo;
             var res = str.split("=") && str.split("&");
             var delegatee123 = res[1].split("=");
             let delegatee1234 = delegatee123[1]
             console.log('Undelegate to ' + delegatee123[1]);

             var wif = 'your-active-private-key' //change your active key
             var delegator = 'your-account-name' //change username
             var vesting_shares = '0.000000 VESTS'

             steem.broadcast.delegateVestingShares(wif, delegator, delegatee1234, vesting_shares, function(err, result) {
          console.log('Undelegated to ' + delegatee123[1]);
        });
        };
          });
        }
})

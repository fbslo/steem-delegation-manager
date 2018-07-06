var steem = require('steem'); //get steemsj --> npm install steem --save
var cron = require('node-cron'); //get CronJob --> npm install --save node-cron

cron.schedule('* * * * *', function() { //use https://crontab.guru/ to set time to run this script.
            // * * * * * will run it every minute.

       
        const your_account = 'account_username' //change account name
        const active_key = 'active_private_key' //change your active key
        const WALLET_FILTER = 'transfer'
        steem.api.getAccountHistory(your_account, -1, 50, (err, result) => {
          let transfers = result.filter( tx => tx[1].op[0] === WALLET_FILTER )
          console.log(transfers)
          displayTransactions(transfers)
        });
        function displayTransactions(transactions){
          transactions.forEach((tx) => {
            let transfer = tx[1].op[1]

            if(transfer.memo.includes("Please update your delegation:") && transfer.to == your_account && transfer.from == 'minnowbooster') {
             var str = transfer.memo;
             var res = str.split("=") && str.split("&");
             var delegatee123 = res[1].split("=");
             let delegatee1234 = delegatee123[1]
             console.log('Update delegation to @' + delegatee123[1] + "!");

             var vests = res[2].split("=");
             var vests1 = vests[1].split("%")
             console.log("Delegate " + vests1[0] + " vests!")

             let vesting_shares = vests1[0] + ' VESTS'

             steem.broadcast.delegateVestingShares(active_key, your_account, delegatee1234, vesting_shares, function(err, result) {
               if (err)
                  console.log('Failure! ' + err);
               else
                  console.log('SUCCESS! Updated delegation of ' + vests1[0] + 'VESTS to @' + delegatee1234)

        });
      };
    });
}
})

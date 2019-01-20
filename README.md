# MinnowBooster Delegation Manager

### How to Install:

You need node.js installed. If you already have Node.js and npm installed, you can skip this part.
```
$ sudo apt-get update
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Install Steem.js and node-cron. Clone the project repo into the "steem-delegation-manager" directory.
```
$ npm install steem --save
$ npm install --save node-cron
$ git clone https://github.com/fbslo/steem-delegation-manager.git
$ cd steem-delegation-manager
```


##### Configuration:
Edit undelegate.js file.

```
const your_account = 'account_username' //change account name
const active_key = 'active_private_key' //change your active key
```

##### Run:
Run in background with PM2.
```
$ sudo npm install pm2 -g
$ pm2 start undelegate.js
$ pm2 logs undelegate
$ pm2 save
```



#### Created with :heart: for STEEM by [Steem Witness @fbslo](https://steemconnect.com/sign/account-witness-vote?witness=fbslo&approve=1)!
<br>
Contact: @fbslo --> https://steem.chat & fbslo [Witness]#8470 --> https://discordapp.com

https://steemit.com/minnowbooster/@fbslo/minnowbooster-delegation-manager

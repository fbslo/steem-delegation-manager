# Steem Delegation Manager

### How to Install:
```
git clone https://github.com/fbslo/steem-delegation-manager.git
cd steem-delegation-manager
npm install
```

1) ***Undelegate.js***
##### Config:
Edit undelegate.js file and change:<br>
 Line 7 --> ```txData.to == "your-account"```<br>
Line 14 --> `var wif = 'your-private-ACTIVE-key'`<br>
Line 15 --> `var delegator = 'your-username (e.g fbslo)'`<br>

##### Run:

```
node undelegate.js
```

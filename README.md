# heroku
-  install heroku client (for mac, brew install heroku/brew/heroku)
```
#clone
git clone https://github.com/hlthi/sample_node_api.git
# login
heroku login
# create
heroku create
# push code
git push heroku master
# ensure least one instance of the app is running
heroku ps:scale web=1
```

# fast test with heroku
https://calm-badlands-49165.herokuapp.com/
- Heroku app can sleep, please deploy yourself
```
curl --request POST \
  --url https://calm-badlands-49165.herokuapp.com/ \
  --header 'content-type: application/json' \
  --data '{
        "startDate": "2017-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
}'
```


# local
This project developed with Nodejs v12.10.0 for using latest node features.
Default port is **3061** or you can define port with process.env.PORT.
```
# ensure install same version
nvm install v12.10.0

# check node version
# v12.10.0
node -v

# https://yarnpkg.com/lang/en/docs/install
# probably not important but, let's use the same version anyway
# 1.17.3
yarn -v

# install packages
yarn 

# start
yarn start

# fast test with curl
curl --request POST \
  --url http://localhost:3061/ \
  --header 'content-type: application/json' \
  --data '{
	"startDate": "2017-01-26",
	"endDate": "2018-02-02",
	"minCount": 2700,
	"maxCount": 3000
}'

```

# test
Make sure you do everything written above (LOCAL)

```
yarn test
```

# Features
- Code formatting -> prettier ,  eslint
- Test -> Jest , Supertest
- Validation -> @hapi/joi
- Error messages -> @hapi/boom

# Thoughts
- Some systems return 200 in each case. 
Some systems return 200 in each case. 
I think it is against the HTTP code determined by years of experience.

# File Tree
```
.src
├── ResultModel.js      --> Prepare result body
├── app.js              --> start server
├── db.js               --> prepare the database
├── error-mw.js         --> main error middleware
├── index.js            --> starting point of the program
├── main-mw.js          --> main post middleware
├── test            
│   ├── db.test.js      --> test db
│   └── main.test.js    --> integration test
└── validator.js        --> request validation
```

# Notes
- babel.config.js using for jest

## Face Recognition App Using React

### Installation Steps 

Clone the github repo: 

```
$ git clone https://github.com/sujaykundu777/faceapp.git
$ cd faceapp
```

#### Requirements : Install node, npm and mongodb locally

Install necessary packages for server 

```
$ npm install 
```

Install necessary packages for client 

```
$ cd client 
$ npm install 
```

Create .env file for configuring Database Server Access :

```
$ cd faceapp
$ touch .env
```
Paste the following 

```
DB_HOST=localhost 
DB_NAME =database
DB_USER =db_user 
DB_PASS= db_password
PORT=3001
NODE_ENV=development
```

Start the mongod server locally  

```
$ sudo service mongod start
```

Start the app 

```
$ cd faceapp
$ npm start 
```
The App should start at http://localhost:3000 

Create the first User 

```
$ curl -i http://localhost:3001/api/setup
```

Login the App using the following credentials 
```
Email : nick123@gmail.com
Password: pass123
``` 

Todo : 
 > Faceplusplus ( Not working )
 > Deploy to Heroku 











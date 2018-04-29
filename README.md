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
 - Faceplusplus ( Not working )
 - Deploy to Heroku 

Sample Request for Face++  Api 

```
curl -X POST "https://api-us.faceplusplus.com/facepp/v3/detect" -F "api_key=<api_key>" \
-F "api_secret=<api_secret>" \
-F "image_file=@image_file.jpg" \
-F "return_landmark=1" \
-F "return_attributes=gender,age"
```

Testing :

```
$ curl -X POST "https://api-us.faceplusplus.com/facepp/v3/detect" -F "api_key=23WMp1Qn5l7vB4bZ0Uv3JCfoP3C1T--O" \
-F "api_secret=-lHR7PSfCp-ONDAkbocf53BG2MpXRDdp" \
-F "image_url=https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/28378869_128168764674178_5154762980780939156_n.jpg?_nc_cat=0&oh=c5ce0d195b982cecf4a1fc0fbe08d4e9&oe=5B5E04F7" \
-F "return_attributes=gender,age"
```






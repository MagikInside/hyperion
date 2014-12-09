Hyperion
========

In this small project, I used data of more than 30000 job offers from a job portal, to create a simple page using the MEAN stack (MongoDB, Express, Angularjs and Nodejs).

You can check out how I got the data, scapping and crawling the portal [infojobs](http://www.infojobs.net/) in here: [scrawlper](https://github.com/MagikInside/scrawlper).

For this project I used:

+ MEAN Stack
+ [Bootstrap](http://getbootstrap.com/)
+ [Angular-charts](https://github.com/chinmaymk/angular-charts)



## How to use

> You will need MongoDB installed and running

1. Clone the project:<br><br>
```
     $git clone https://github.com/MagikInside/hyperion.git
```

2. Install dependencies:<br><br>
```
     $cd hyperion
```<br>
```
     $npm install
```

3. Import the database:<br><br>
```
     $mongorestore -db infojobs db/dump/infojobs/
```

4. Start:<br><br>
```
     $ node app.js
```

Now you can see the page in [http://localhost:3000](http://localhost:3000)
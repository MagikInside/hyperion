Hyperion
========

In this small project, I used data of more than 30000 job offers from a job portal, to create a simple page using the MEAN stack (MongoDB, Express, Angularjs and Nodejs).

You can check out how I got the data, scrapping and crawling the portal [infojobs](http://www.infojobs.net/) in here: [scrawlper](https://github.com/MagikInside/scrawlper).

For this project was used:

+ MEAN Stack
+ [Bootstrap](http://getbootstrap.com/)
+ [Angular-charts](https://github.com/chinmaymk/angular-charts)



## How to use

> You will need MongoDB installed and running

+ Clone the project:

```
     $git clone https://github.com/MagikInside/hyperion.git
```

+ Install dependencies:

```
     $cd hyperion
```

```
     $npm install
```

+ Import the database:

```
     $mongorestore -db infojobs db/dump/infojobs/
```

+ Start:

```
     $ node app.js
```

Now you can see the page in [http://localhost:3000](http://localhost:3000).

You can check also a demo of this project in [here](http://130.211.51.233:3000/).
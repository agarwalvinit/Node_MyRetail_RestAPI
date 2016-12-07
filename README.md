# Node_MyRetail_RestAPI
MyRetail restAPI is built in nodejs using mongoDB and third party database modulusmongoDB.

Things you need to install in your system:
  - npm
  - mongoDB

I have used [modulus](https://my.modulus.io) to create a database. You can use other third party database provider or create locally.


### Tech
* [IntelliJ IDEA] - awesome web-based text editor
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework

### Installation

[Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:agarwalvinit/Node_MyRetail_RestAPI.git
$ cd Node_MyRetail_RestAPI
$ npm install
$ npm start
```

but before running npm start you have to change the mongoose connection to your localDB or any third party database provider in index.js line no. 10

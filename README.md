# Task fo Meme

- [ReactJS](https://reactjs.org/) - The state based framework for your Views
- [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy) - For routing to different paths
- [Redux](https://redux.js.org/introduction) - Redux manages your state
- [Babel](https://babeljs.io/) - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
- [Webpack](https://webpack.js.org/) - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js so you can include it in a HTML page
- [ExpressJS](https://expressjs.com/) - The node framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html
- [Docker](https://www.docker.com/) - The Docker platform leverages Docker containers to enable IT operations teams and Developement teams to build, ship and run any application, anywhere.

## Installation
*Project requires Node.js v6+ to run.*

### Start Docker

#### Spin up docker containers
docker-compose up -d

#### See what is running
docker ps

#### Stop containers
docker-compose stop

### Go to frontend react - development mode
```
$ cd yourLocalRepositoryRoot

$ yarn install
$ yarn start

or

$ npm install
$ npm run start
```
Navigate to http://0.0.0.0:8081 in browser to view project in development environment.

### Build for Production
Compile development files @ **public** into production files @ **build**:
```
$ yarn build

or

$ npm run build
```

### Go to Wordpress admin
http://0.0.0.0:80/wp-admin

### Access Wordpress database through phpmyAdmin
http://0.0.0.0:8080

## Live version 

Live version is deployed on heroku under this link: 
https://empatica.herokuapp.com/

## Installation

Starting from the root of the project on a terminal, type the following command:
```npm install && npm install --prefix client```

## Execution

This App will have to run the backend and the client together (concurrently). This is achievable via a single command using the "concurrently" module. I made a shortcut script for it in package.json, so all you'll have to run is: 

```npm run dev```

## Installation using docker

On the root of the project, run the following command to build the docker image

```docker build -t empatica .```

Then run this command to start the container once the image building is finished: 

```docker container run --publish 3000:3000 --publish 5000:5000 --name empatica empatica```

NOTE: To make sure that your image was succinctly built, run ```docker image ls -a``` and look for an image with the tag "empatica". 

Once the docker container starts running, wait for a bit more time for webpack to run and then visit:
"http://localhost:3000/" on your browser.
Also, don't use --detach to know exactly when webpack project has finished its setup.

You are all set! 

## Work made:

1) The home page as figured in the design spec
2) The login page and functionality. 
3) The login controlled user information page.
4) The orders list with their computed information and the ability to delete an order. 
5) The multiplatform support with Dockfile

I have used: 

1) Redux predictable state container library for a better management of the global state of the application and the ability to separate actions and API calls from components with redux-thunk. 
I could have also used Mobx as this one demands less boilerplate code but I prefered a more common functional approach rather than an object oriented one. It's also better to make sure that all potential contributors always use the same and unique source of truth (redux state compared to multiple mobx states) 
I could have used React's Context API but I still prefer redux because this one is very community friendly and comes with a lot of other libraries that make development easier.

2) Typescript for consistent and less error prone code. It's somewhat similar to redux in how you would be writing a lot of boilerplate code once; but much less code and much less time spent on debugging on the long run. However, I think this isn't worth it for smaller projects. PropTypes are enough for quick or short term projects. 

3) A proxy in the dev environment to get rid of CORS problems. This is not needed for the production code since they are both hosted under the same origin: https://empatica.herokuapp.com/

4) Only functional components and hooks to follow latest React trends and stay consistent and faithful to Javascript and Redux functional programming (avoiding class components as much as possible)

5) A custom hook to detect mobile views for some types of logic that can't be applied with CSS alone. 

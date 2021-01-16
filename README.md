## Installation

Starting from the root of the project on a terminal, type the following command:
```npm install && npm install --prefix client```

## Execution

This App will have to run the backend and the client together (concurrently). This is achievable via a single command using the "concurrently" module. I made a shortcut for it in package.json, so all you'll have to run is: 

```npm run dev```

## Installation using docker

On the root of the project, run the following command to build docker image

```docker build -t empatica .```

Then run this command to start the container: 

```docker container run --publish 3000:3000 --publish 5000:5000 --name empatica empatica```

Then visit "http://localhost:3000/" on your browser and you are all set! 
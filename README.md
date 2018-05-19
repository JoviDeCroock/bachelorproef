# bachelorproef

This repository is gemaakt om de experimenten te ondersteunen gemaakt in het thema van mijn bachelorproef

MobX vs Redux in moderne cms-systemen

## Reproduceren

U kan deze projecten runnen door

- `cd ./server && yarn && yarn start` dit runt de server die de gebruikers retourneert
- daarna navigeer je naar de desbetreffende library folder
- `yarn`
- `yarn run dev` impliceert het runnen in dev modus
- `yarn run build` impliceert een productie build van het project (deze is nodig voor yarn run server)
- `yarn run stats` gaat een productiebuild maken en vervolgens een `stats.json` retourneren in de folder, deze zijn de productie webpack stats.
- `yarn run server` zal de `/dist` folder lokaal op een http-server draaien
- ieder commando heeft ook een windows variant deze is aan te spreken door bvb `yarn run dev-windows`


    "build": "NODE_ENV=production webpack -p",
    "dev": "NODE_ENV=development webpack-dev-server",
    "stats": "NODE_ENV=production webpack --json > stats.json",
    "dev-windows": "cross-env NODE_ENV=development webpack-dev-server",
    "build-windows": "cross-env NODE_ENV=production webpack -p",
    "stats-windows": "cross-env NODE_ENV=production webpack --json > stats.json",
    "server": "cd ./dist && http-server -o -g"
---
sidebar_position: 6
label: "Docker service"
---

# Run graphql service in docker in `mongo` mode

```
docker-compose -f docker-compose.yml up -d
```
It will start 3 services
- mongo: the instance of MongoDB for caching layer
- ingester: the process which fills Database layer
- server: graphql server, which is available at http://localhost:4000/

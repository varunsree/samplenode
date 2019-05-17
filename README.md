# Sample Node

Sample node application with api end point and graphql mplementation
## Installation

install packages
```bash
npm install

npm start
```

## Usages

```
#API CALL 
app.get('/listUsers', function (req, res) {

});

Graphql UP

var { graphqlExpress, graphiqlExpress } = require("graphql-server-express");

app.use("/myapp/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/myapp/graphiql", graphiqlExpress({ endpointURL: "/myapp/graphql" }));


##node express installation tutorial link

```
https://expressjs.com/en/starter/installing.html
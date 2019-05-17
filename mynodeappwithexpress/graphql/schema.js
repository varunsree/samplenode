var gt = require("graphql-tools");
var resolvers = require("./resolvers");

var typeDefs = `
type inpObj {
    name: String
}
input setNameInput {
    name: String
}
type Query {
  getAllJobs: inpObj
}
type Status {
    status: Boolean!
    message: String!
  }
type Mutation {
  setName (input: setNameInput!): Status
}
schema {
  query: Query,
  mutation: Mutation
}
`;
var schema = gt.makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;

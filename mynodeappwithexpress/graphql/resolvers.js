// const validator = require("validator");
// const constants = require("../common/constants");

var resolvers = {
  Query: {

    /**
     * Query to get all CDK-Extract schedules
     * @param {object} _ GraphQL root object
     * @param {object} args User arguments
     */
    async getAllJobs(_, args) {
      console.log(args.input, "ddddddddddddddddddddddddddddd");
      return {name:"test Data"};
    },
  },
  Mutation: {
    setName(_, args) {
      console.log(args.input, "ddddddddddddddddddddddddddddd");
      return {status:true, message: ""};
    },
  },
  // Date: {
  //   __serialize(value) {

  //     return value;
  //   },

  //   __parseValue(value) {
  //     var parts = value.split("-")
  //     return [parts[0], parts[1], parts[2]].join("/");
  //   },
  //   __parseLiteral(ast) {
  //     var dateStr = JSON.parse(JSON.stringify(ast)).value;
  //     var parts = dateStr.split("-")
  //     return [parts[1], parts[0], parts[2]].join("/");
  //   }
  // },

  // DateTime: {
  //   __serialize(value) {
  //     if (validator.isISO8601(value)) {
  //       return value;
  //     }
  //     throw new Error("DateTime cannot represent an invalid ISO-8601 Date string");
  //   },
  //   __parseValue(value) {
  //     if (validator.isISO8601(value)) {
  //       return value;
  //     }
  //     throw new Error("DateTime cannot represent an invalid ISO-8601 Date string");
  //   },
  //   __parseLiteral(ast) {
  //     if (validator.isISO8601(ast.value)) {
  //       return ast.value;
  //     }
  //     throw new Error("DateTime cannot represent an invalid ISO-8601 Date string");
  //   }
  // },
};
module.exports = resolvers;

import { makeExecutableSchema } from "graphql-tools";

import { GraphQLSchema } from "graphql";
import { resolvers } from "./resolvers";

const typeDefs = `
  type User {
    id: ID!
    email: String!
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }
  type Mutation {
    createUser(email: String): User
  }
`;

export const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

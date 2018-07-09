import { IResolverObject } from "graphql-tools";
import { getUser, getUsers } from "./controller/user";

export const resolvers = {
  Query: {
    user: (root: any, { id }: { id: string }) => {
      return getUser(id);
    },
    users: () => {
      return getUsers();
    },
  } as IResolverObject,
};

import { ApolloServer } from "apollo-server";
import colors from "colors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { context } from "./context";

import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const port = 4000;
// 2
server.listen({ port }).then(({ url }) => {
  console.log(colors.bold.green(`🚀  Server ready at ${url}`));
});

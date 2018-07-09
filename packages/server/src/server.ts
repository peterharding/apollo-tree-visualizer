import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import * as BodyParser from "body-parser";
import * as Express from "express";
import * as path from "path";

// TODO: move this into the app
import * as fs from "fs";
import * as mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/apollo-practice-db");
const modelsPath = path.join(__dirname, "./model");
fs.readdirSync(modelsPath).forEach((file: any) => {
  if (file.indexOf(".js") >= 0 && file.indexOf(".js.map") === -1) {
    require(path.join(modelsPath, file));
  }
});
// END TODO

import { schema } from "./schema";

const app = Express();
const port = process.env.PORT || 5000;

app.use("/graphql", BodyParser.json(), graphqlExpress({
  schema,
}));

app.use("/graphiql", BodyParser.json(), graphiqlExpress({
  endpointURL: "/graphql",
}));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });

  app.use(Express.static(path.join(__dirname, "../../client/build")));
}

app.listen(port, () => console.log(`Listening on port ${port}`));

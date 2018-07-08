import * as Express from "express";
import * as path from "path";

const app = Express();
const port = process.env.PORT || 5000;


app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});


if (process.env.NODE_ENV === 'production') {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });

  app.use(Express.static(path.join(__dirname, "../../client/build")));
}

app.listen(port, () => console.log(`Listening on port ${port}`));

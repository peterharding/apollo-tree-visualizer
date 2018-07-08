import * as Express from "express";
import * as path from "path";

const app = Express();
const port = process.env.PORT || 5000;

// app.get('/', (req: Express.Request, res: Express.Response) => {
//   res.send({ express: 'Hello From Express' });
// });

app.use(Express.static(path.join(__dirname, '../../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

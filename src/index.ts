import app from "./app";

const port = 3000;

app.listen(port, () =>
  console.log(
    `\u{1F525} Server starting on port ${port} - click here http://localhost:${port} to go to server`
  )
);

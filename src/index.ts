import app from "./app";

const PORT = 3000;

app.listen(PORT, () =>
  console.log(
    `\u{1F525} Server starting on PORT ${PORT} - click here http://localhost:${PORT} to go to server`
  )
);

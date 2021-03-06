const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./Routes/htmlRoutes");
// more tests



// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// make certain files readily available and not gate it behind a server endpoint
app.use(express.static("Develop/public"));

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

const express = require("express");
const contactsRoutes = require("./routes/contactsRoutes");

const app = express();
app.use(express.json());

app.use("/api/contacts", contactsRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");
const cors = require("cors");
const axios = require("axios").default;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;  // Destructure username from req.body

  try {
    // Make a PUT request to the API with the appropriate payload
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,  // or simply { username } 
        secret: username,
      },
      {
        headers: { "PRIVATE-KEY": "b746d835-9478-41d7-ab9f-6e11a2b6be96" },
      }
    );

    // Send back the response status and data
    return res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors by sending back the error status and message
    return res.status(error.response?.status || 500).json({
      message: error.response?.data || "Internal Server Error",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

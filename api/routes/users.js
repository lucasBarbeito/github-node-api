const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const since = req.query.since || 0;

    const githubResponse = await axios.get(
      `https://api.github.com/users?since=${since}`
    );

    const users = githubResponse.data;
    const nextPageLink = githubResponse.headers.link;
    res.status(200).json({
      users: users,
      // This returns the since number
      nextPageLink: getSinceNumber(nextPageLink),
    });
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    res.status(500).json({
      error: "Error fetching GitHub users",
    });
  }
});

router.get("/:username/details", async (req, res, next) => {
  try {
    const githubResponse = await axios.get(
      `https://api.github.com/users/${req.params.username}`
    );

    const user = githubResponse.data;

    res.status(200).json({
      user: user,
    });
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    res.status(500).json({
      error: "Error fetching GitHub user",
    });
  }
});

router.get("/:username/repos", async (req, res, next) => {
  try {
    const githubResponse = await axios.get(
      `https://api.github.com/users/${req.params.username}/repos`
    );

    const userRepos = githubResponse.data;

    res.status(200).json({
      userRepos: userRepos,
    });
  } catch (error) {
    console.error("Error fetching GitHub user Repos:", error);
    res.status(500).json({
      error: "Error fetching GitHub user Repos",
    });
  }
});

const getSinceNumber = (url) => {
  const regex = /since=\d+/;
  const match = url.match(regex);
  const since = match[0].replace("since=", "");
  return since;

}

module.exports = router;

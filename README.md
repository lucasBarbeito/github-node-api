# GitHub Node API

This is a Node.js application that interacts with the GitHub API to provide information about GitHub users and repositories.

## Live URL

The live version of this API is hosted at: [https://lucbar-github-node-api.onrender.com/](https://lucbar-github-node-api.onrender.com/)

## Endpoints

- `/users` - Get a list of GitHub users.
- `/users/:username/details` - Get details of a specific GitHub user.
- `/users/:username/repos` - Get repositories of a specific GitHub user.

## How to Use

1. Make a GET request to the desired endpoints.
2. Replace `:username` in the URL with the actual GitHub username.

Example:
- To get details of a user: `/users/octocat/details`
- To get repositories of a user: `/users/octocat/repos`
## Prerequisites
-You need to have installed node or nvm in your system

## Local enviroment configuration
Install NOde Version if you dont have it

```
nvm install 17
```
Use Ruby Version

```
nvm use 17
```
install depednencies

```
npm install
```
To run the server run the following command

```
node server.js
```

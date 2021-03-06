## Repo Provas 📚

<div align="center">
  <h4>This is the frontend repo, access the backend repo <a href="https://github.com/cgabrieu/repoprovas-api">here</a>.</h4>
  <a href="https://repoprovas-front-sigma.vercel.app/">
    <img src="https://user-imaaages.githubusercontent.com/25062334/144354678-760db174-fabb-41d1-a997-db36a92d044b.gif">
  </a>
    <br />
    <a href="https://repoprovas-front-sigma.vercel.app/">View the deploy</a>
    <br />
</div>
  
<br/>

## About

This is a repository of tests, it can be extended to your college. In it you can share the old tests of teachers and classes for them to have support in the tests. It is also possible to add new courses, teachers and classes and upload the tests directly through the app.
    
<br/>

## Technologies

Tools that were used in the project:
<p>
  <img src='https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react'>
  <img src='https://img.shields.io/badge/styled--components-000000?style=for-the-badge&logo=styled-components'>
  <img src='https://img.shields.io/badge/eslint-000000?style=for-the-badge&logo=eslint&logoColor=482fbd'>
  <img src='https://img.shields.io/badge/npm-000000?style=for-the-badge&logo=npm'>
  <img src='https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel'>
</p>
  
<br/>

## Getting Started

To run locally follow the steps

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Create the root folder named repoprovas and access it
```sh
mkdir repoprovas-api && cd repoprovas-api
```
2. Clone the frontend repo
```sh
git clone https://github.com/cgabrieu/repoprovas-front.git
```
3. Install dependencies with npm
```sh
npm install
```
4. Clone the backend repo
```sh
git clone https://github.com/cgabrieu/repoprovas-api.git
```
5. Install dependencies with npm
```sh
npm install
```
6. Create a database using the command below via postgres
```sh
CREATE DATABASE repoprovas;
```
7. Automatically create all necessary tables to backend repo with <a href="https://github.com/cgabrieu/repoprovas-api/blob/main/dump.sql">dump</a>. 

8. Connect your backend to the database, for that, rename the .env.example to .env.dev and fill in your data.

### How to run

1. Run the backend using the command (remember to be on the backend repo): 
```sh
npm run start:dev
```
2. Run the frontend using the command (remember to be on the fronend repo): 
```sh
npm start
```

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b feat/myFeatureName`
3. For each feature implemented, make a commit specifying what was done
4. Submit your changes: `git push -u origin feat/myFeatureName`

<br/>

## Developer

* [Carlos Gabriel](https://github.com/cgabrieu)


# Minimal Web App

- Create React App
- MongoDb Atlas
- Netlify Lamba Functions
- JWT Authentication

## Install Dependencies

`npm install`

## Add ENV Variables

Choose an app secret, used for Json webtoken

`REACT_APP_APP_SECRET="<YOUR:APP:SECRET>"`

Create a new project / cluster in MongoDB Atlas and get the connection string

`REACT_APP_DB_URL="<YOUR:CONNECTION:STRING:WITH:PASSWORD>"`

## Run Locally with ENV vars from command line

`REACT_APP_APP_SECRET="<YOUR:APP:SECRET>" REACT_APP_DB_URL="<YOUR:CONNECTION:STRING:WITH:PASSWORD>" netlify dev`

## Add ENV Vars to deployed netlify app inside the build & deploy section, or inside the netlify.toml

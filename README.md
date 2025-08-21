# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

```shell
$ rails new video_2 api
$ bundle
```

Add Rack::Cors with initializer.

```shell
$ rails g scaffold post title body:text
$ rails db:migrate
$ rails db:seed
```

Creating the react app

```shell
$ npm create vite@latest
$ npm install
$ npm install dotenv
   Create .env.development #Create .env
$ npm run dev
$ npm install -g vercel
$ vercel
$ npm install react-router-dom
```

Linked to romalopes-projects/react-client (created .vercel and added it to .gitignore)
🔍 Inspect: https://vercel.com/romalopes-projects/react-client/AGk39x5rjNhMcyN3DUkPbAE7WV6T [3s]
✅ Production: https://react-client-a6y1tzcqh-romalopes-projects.vercel.app [3s]
💡 To change the domain or build command, go to https://vercel.com/romalopes-projects/react-client/settings

# Heroku

```shell
$ brew tap heroku/brew && brew install heroku
$ heroku login
$ heroku create video_rails_react
$ heroku addons:create heroku-postgresql:hobby-dev
$ git push heroku main
$ heroku run rails db:migrate
$ heroku run rails db:seed
$ heroku open
```

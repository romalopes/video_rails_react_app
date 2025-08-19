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
```

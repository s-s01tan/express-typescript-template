## <strong>Express + Typescript</strong> App Template

<hr>

### All basic `NPM` requirements (Dependencies)

### Main `scripts` including <strong>"test"</strong>, <strong>"build"</strong>, <strong>"start"</strong> and <strong>"dev"</strong> mode

### TypeScript Configuration credentials in `tsconfig.json`

### Function returns config values including `host` , `port` , `db_url` and etc. by given `environment value`

### `.env.sample` file to configure your dotenv file

<hr>

## <strong>Usage</strong>

<br>

### 1. Clone or download the repository

```
$ git clone https://github.com/s-s01tan/express-typescript-template.git
```

<br>

### 2. Install all required npm packages

```
$ npm i
```

<br>

### 3. Build your application (TSC compiler builds JS files)

```
$ npm run build
```

#### Note : `start` command runs `app.js` file in the directory called `dist` (TSC generates after compilation). That's why, you will <strong>not</strong> able to start app before you build that.

<br>

### 4. Start application

```
$ npm run start
```

<hr>

### In development process, you can use command like

```
$ npm run start:dev
```

### Which makes TSC to build and replace new built `dist` folder with an old one in each save event in code editor (`ctrl+s`).

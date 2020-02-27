# vue-cli-3

`npm install gh-pages --save-dev`  

[Command Line Utility](https://www.npmjs.com/package/gh-pages)

package.json

```js
"homepage": "https://jacobhsu.github.io/vue-cli-3/",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

vue.config.js

```js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'vue-cli-3' : '/',
}
```

## Note

[路由組件傳參](https://router.vuejs.org/zh/guide/essentials/passing-props.html) 
/user/:id   
/user/prop/:id      
/user/props/:id  
 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

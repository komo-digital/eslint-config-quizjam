### eslint-config-quizjam

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [QuizJam](https://quizjam.com)

##### Install

`$ yarn add eslint eslint-plugin-standard eslint-config-standard eslint-config-quizjam`

###### Vue

for vue support

`$ yarn add eslint-plugin-vue`

##### Usage

Add base `quizjam` to `.eslintrc.js`

```js
module.exports = {
  extends: ['quizjam'],
};
```

###### Vue

Add also `quizjam/vue` to `.eslintrc.js`

```js
module.exports = {
  extends: ['quizjam', 'quizjam/vue'],
};
```

##### Extending

Add new files to the root folder and then they can be used like `quizjam/<filename>`

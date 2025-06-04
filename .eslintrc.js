module.exports = {
  root: true, 
  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true 
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential' 
  ],
  parserOptions: {
    ecmaVersion: 2021, 
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off' 
  }
};
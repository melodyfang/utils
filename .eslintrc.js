module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: ['import'],
  ignorePatterns: [
    'node_modules/**/*.*',
    'dist/**/*.*'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: [1, 'never'], // 末尾不允许分号
    quotes: ['warn', 'single'], // 只允许单引号
    'space-in-parens': 1, // 小括号里面要不要有空格
    'space-before-function-paren': 1, // 函数定义时括号前面要不要有空格
    'comma-spacing': 1, // 控制逗号前后的空格
    indent: [1, 2], // 缩进风格
  }
}

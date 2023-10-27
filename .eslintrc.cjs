module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  ignorePatterns: ['postcss.config.js', 'vite.config.ts'],
  globals: {
    REACT_APP_ENV: true,
  },
  rules: {
    'radix': [0, 'as-needed'],
    'no-restricted-syntax': [0],
    'consistent-return': [0],
    'no-continue': [0],
    'no-lonely-if': [0],
    '@typescript-eslint/no-unused-expressions': [0],
    // 代码缩进
    'indent': [2, 2, {
      'SwitchCase': 1, // 强制 switch 语句中的 case 子句的缩进级别
      'outerIIFEBody': 0, // 立即执行函数没有缩进
      'MemberExpression': 1, // 强制多行属性链的缩进
      // 'ignoredNodes': ['CallExpression > FunctionExpression.callee > BlockStatement.body', 'MemberExpression']
      'ignoredNodes': ['JSXElement *', 'JSXElement'],
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'jsx-quotes': [2, 'prefer-double'],

    // 声明
    'one-var': [2, {
      'initialized': 'never', // （Stylistic Issues. no）要求每个作用域的初始化的变量有多个变量声明
    }],

    // 代码块
    'padded-blocks': [1, 'never'], // （Stylistic Issues. no）禁止块语句和类的开始或末尾有空行
    'operator-linebreak': [2, 'after', { // （Stylistic Issues. no）先换行，再写操作符例如三元操作符 +等
      // 'overrides': {
      //   '?': 'before',
      //   ':': 'before',
      // },
    }],
    'block-spacing': [2, 'always'], // 强制在代码块中开括号前和闭括号后有空格，例如if (foo) { bar = 0; }
    'brace-style': [2, '1tbs', { // 大括号风格要求
      'allowSingleLine': true,
    }],
    'curly': [1, 'multi-line'], // 控制语句如 if、else if、else、for、while、do 允许在单行中省略大括号，多行需要大括号

    // 单引号
    'quotes': [2, 'single', { // 要求尽可能地使用单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],

    // 命名
    'camelcase': [0, { // 是否必须驼峰
      'properties': 'always',
    }],

    // 分号
    'semi': [1, 'always', {
      'omitLastInOneLineBlock': true, // 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
    }], // 必须写分号
    'semi-spacing': [2, {
      'before': false, // 分号前不能有空格
      'after': true, // 分号不在一行的最后时，分号后必须有空格
    }],

    // 逗号
    'comma-dangle': [1, 'always-multiline'], // 数组和对象的最后一个有没有逗号
    'comma-spacing': [1, { // 逗号前后是否有空格
      'before': false,
      'after': true,
    }],
    'comma-style': [1, 'last'], // 逗号放在一句的最后，不要另起一行

    // 冒号
    'key-spacing': [2, {
      'beforeColon': false, // 冒号前不要有空格
      'afterColon': true, // 冒号后必须有空格
    }],

    // 空格
    'keyword-spacing': [2, { // 关键字（if\while\for）前后是否有空格
      'before': true,
      'after': true,
    }],
    'space-before-blocks': [2, 'always'], // 语句块{}之前总是至少有一个前置空格
    'space-before-function-paren': [2, 'never'], // function() {} 禁止在参数的(前面有空格
    'space-in-parens': [2, 'never'], // 强制圆括号内没有空格，例如foo( 'bar');
    'space-infix-ops': 2, // 要求操作符周围有空格，例如a+ b是错误的
    'space-unary-ops': [2, {
      'words': true, // 单词类一元操作符，例如delete foo.bar;
      'nonwords': false, // 一元操作符: -、+、--、++、!、!!，例如foo++
    }],
    'spaced-comment': [2, 'always', { // // 或 /* 必须跟随至少一个空白
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
    }],
    'template-curly-spacing': [2, 'never'], // ${} 禁止花括号内出现空格
    'object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格，例如不要写var obj = {'foo': 'bar' };
    'array-bracket-spacing': [2, 'never'], // 不允许数组括号内的空格，例如var ary = ['foo', 'bar']

    // 点号
    'dot-location': [1, 'property'], // 对象的点操作符和属性放在同一行

    // 实例化
    'new-cap': [2, {
      'newIsCap': true, // 类new的时候要大写
      'capIsNew': true, // 类实例化必须要写new
    }],
    'new-parens': 2, // 调用无参构造函数时必须带括号

    // IIFE
    'wrap-iife': [2, 'inside'], // （Best Practices. no）要求 IIFE 使用括号括起来

    // 其他
    'yoda': [2, 'never'], // 不要写if ('red' === color) {}
    'eol-last': 1, // 文件最后一行需要是空行
    'no-param-reassign': [2, {
      'props': false,
    }],
    // 'no-console': process.env.REACT_APP_ENV === 'dev' ? 0 : [2, {
    //   'allow': ['warn', 'error'],
    // }],
  },
};

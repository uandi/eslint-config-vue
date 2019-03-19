module.exports = {
    extends: [
        '@vue/airbnb',
        'plugin:vue/recommended',
        '@vue/prettier',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
    },
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'no-debugger': 1,
        'no-alert': 1,
        'no-console': 1,
        'no-plusplus': 0,
        quotes: [2, 'single'],
        'no-tabs': 2,
        'eol-last': 'error',
        'no-unused-vars': [
            1,
            {
                ignoreSiblings: true,
                argsIgnorePattern: 'res|next|^err',
            },
        ],
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'prettier/prettier': [
            2,
            {
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'es5',
                printWidth: 120,
            },
        ],
    },
};

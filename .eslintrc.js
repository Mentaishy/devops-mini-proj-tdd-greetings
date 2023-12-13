module.exports = {
    env: {
        /* node , not browser */
        node: true,
        // commonjs ... modules.exports use
        commonjs: true,
        es2021: true,
        jest: true,
    },

    extends: 'eslint:recommended',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {},
}

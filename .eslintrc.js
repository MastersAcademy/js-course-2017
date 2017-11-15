module.exports = {
    extends: 'eslint:recommended',
    env: {
        browser: true,
        amd: true,
        es6: true
    },
    rules: {
        // enable additional rules
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-undef': 'off',
        'no-unused-vars': ['error', { vars: 'local' }],

        // override default options for rules from base configurations
        // "comma-dangle": ["error", "always"],
        'no-cond-assign': ['error', 'always'],
        // eqeqeq: ['error', 'smart'],

        // disable rules from base configurations
        "no-console": "off",
        'block-scoped-var': 'error',
        'guard-for-in': 'error',
        'no-loop-func': 'error',
        'no-self-compare': 'error',
        'no-use-before-define': 'error',
        'no-unneeded-ternary': 'error'
    }
};

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": false
    },
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "rules": {
        "prefer-arrow-callback": "error"
    }
};
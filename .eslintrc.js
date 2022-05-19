module.exports = {
    rules: {
        'vue/multi-word-component-names': 0,
    },
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 2020,
        'sourceType': 'module',
        // "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    // "plugins": ["import", "vue"],
}
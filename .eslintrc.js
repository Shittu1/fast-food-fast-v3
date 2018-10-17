module.exports = {
    extends: "airbnb-base",
    rules: {
        "no-console": 0,
        "semi":["error", "always"],
        "camelcase":"off",
        "comma-dangle":"off",
        "indent":["error", 2],
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "linebreak-style": [
            "error",
            "unix"
        ]
    },
    env: {
        "browser": true,
        "node": true,
        "mocha":true
    }
};
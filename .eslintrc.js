module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "classes": true
    },
    "sourceType": "module"
  },
  // These settings are needed for eslint to play well with webpack resolve
  "settings": {
    "import/parser": "babel-eslint"
  },
  "rules": {
    "max-len": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off"
  },
  "plugins": [
    "react"
  ]
}

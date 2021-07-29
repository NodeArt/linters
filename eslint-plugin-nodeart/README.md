# eslint-plugin-nodeart

ESLint plugin from NodeArt

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@nodeart/eslint-plugin`:

```
$ npm install @nodeart/eslint-plugin --save-dev
```


## Usage

Add `nodeart` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@nodeart"
    ]
}
```

Then add a specific config to the `extends` section:

```json
{
    "extends": [
        "plugin:@nodeart/react"
    ]
}
```

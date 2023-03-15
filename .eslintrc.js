module.exports = {
    root: true,
    env: {
        node: true,
        jquery: true,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
    },
    ignorePatterns: ["**/libs/*.js", "**/public"],
    rules: {
        semi: "error",
        "no-console": "off",
        "no-useless-escape": "off",
        "vue/max-attributes-per-line": "off",
        "vue/no-v-model-argument": "off",
        "no-constant-condition": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/multiline-html-element-content-newline": "off",
        "no-unused-vars": "off",
        "vue/no-v-html": "off",
        "vue/no-v-for-template-key": "off",
        "vue/no-template-key": "off",
        "vue/require-component-is": "off",
        "vue/no-multiple-template-root": "off",
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "always",
                },
            },
        ],
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/multi-word-component-names": [
            "off",
            {
                ignores: ["default"],
            },
        ],
        "vue/no-unused-components": "off",
        "no-irregular-whitespace": "off",
        "vue/no-irregular-whitespace": [
            "off",
            {
                skipStrings: true,
                skipComments: true,
                skipRegExps: true,
                skipTemplates: true,
                skipHTMLAttributeValues: true,
                skipHTMLTextContents: true,
            },
        ],
        "prettier/prettier": [
            "error",
            {
                semi: true,
                htmlWhitespaceSensitivity: "ignore",
                endOfLine: "auto",
            },
        ],
    },
    globals: {
        moment: true,
        Swal: true,
        $: true,
        _: true,
    },
};

// Example: snowpack.config.js
// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    plugins: [
        /* ... */
        "@snowpack/plugin-sass",
        '@snowpack/plugin-babel'
    ],
    "mount": {
        "src": "/dist/",
        "public": "/"
    }
};

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client,
    ENV: 'development',
    ACCESS_TOKEN_KEY: 'ACCESS_TOKEN',
    // interface address,
    REQUEST_TIMEOUT: 12000,
    BASE_API: 'http://localhost:8080',
    WS_API: 'ws://localhost:8000',
    // Whether to enable babel-plugin-dynamic-import-node plugin,
    BABEL_TRANSPILE_MODULES: true,
    MEDIA_SERVER_URL: 'http://localhost:8080/api/engine/media',

    ROOT_MEDIA_FOLDER_ID: '51dec85e-757e-41ad-9d39-812d9fd14f12',

    // pages,
    HOME_PAGE: '/p/home/en',
    LOGIN_PAGE: '/p/login/en',
    UNAUTHOROZED_PAGE: '/p/unauthorized/en',
    NOT_FOUND_PAGE: '/p/notfound/en',
    ERROR_PAGE: '/p/500/en',
    WEBSITE_FURL: '/wedgoeasy',

  }
};

/*
const workaround = require('next-translate/lib/cjs/plugin/utils.js');

workaround.defaultLoader =
  '(l, n) => import(`lang/${l}/${n}.json`).then(m => m.default)';
*/

module.exports = {
  locales: ['en', 'da'],
  defaultLocale: 'en',
  pages: {
    '*': ['common']
  }
  // logger: true,

  /*
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}`).then((m) => m.default)
    */
};

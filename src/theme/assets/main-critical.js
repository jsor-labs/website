// Note, that critical javascript must not require any polyfills, eg. can't
// use dynamic imports as webpack uses promises for that!
require('./lib/rel-preload-as-style-polyfill');

require('./fonts/fonts.css');
require('./styles/styles-critical.css');
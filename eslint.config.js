import finsweetConfigs from '@finsweet/eslint-config';

export default [...finsweetConfigs];

module.exports = {
  env: {
    browser: true, // Wenn der Code im Browser ausgeführt wird
    node: true, // Wenn der Code auch im Node.js-Umfeld ausgeführt werden könnte
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': 'off', // Erlaubt die Verwendung von console.log und anderen console-Methoden
    'no-undef': 'error', // Diese Regel bleibt aktiv, um undefinierte Variablen zu erkennen
  },
};

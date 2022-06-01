import { baseConfig as config } from './base.conf';

config.services.push('chromedriver');

config.specs = [
    './test/specs/**/ios.spec.ts'
];

export { config };

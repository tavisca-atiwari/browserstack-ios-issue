/* eslint-disable indent */
import { baseConfig as config } from './base.conf';

config.user = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
	config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

	config.services.push(['browserstack', {
		setJobNameInBeforeSuite: true
	}]);

config.specs = [
	'./test/specs/ios.spec.ts'
];
config.logLevel = 'trace';
const build = new Date().toISOString();
config.capabilities = [
	{
		'bstack:options': {
			"osVersion": "15",
			"deviceName": "iPhone 13 Pro",
			"realMobile": "true",
			"local": "false",
			"debug": "true",
			"networkLogs": "true",
			"buildName": build
		},
		"browserName": "safari",
	},
	{
		'bstack:options': {
			"osVersion": "12.0",
			"deviceName": "Samsung Galaxy S22 Ultra",
			"realMobile": "true",
			"local": "false",
			"debug": "true",
			"networkLogs": "true",
			"buildName": build
		},
		"browserName": "chrome",
	}
];

export { config };

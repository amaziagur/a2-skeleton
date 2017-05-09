"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    rootElement: 'my-app',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    baseUrl: 'http://localhost:3000',
    specs: ['*e2e-spec.js'],
    jasmineNodeOpts: {
        showColors: true
    }
};

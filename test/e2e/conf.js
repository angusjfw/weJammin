exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: { 'browserName': 'chrome' },
  specs: ['metronomeFeatures.js', 'jamminFeatures.js', 'userPresenceFeatures.js']
};

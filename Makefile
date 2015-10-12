start:
	./node_modules/.bin/browser-sync start --config bs-config.js

test:
	./node_modules/.bin/browser-sync start --config bs-config-test.js

bundle-deps:
	jspm bundle 'src/**/* - [src/**/*]' bundle.js --inject

.PHONY: dist test

module.exports = {
	'*.{js,jsx,ts,tsx}': ['prettier --write', 'npm run lint:fix'],
	'*.{json,css,scss,md}': ['prettier --write'],
};

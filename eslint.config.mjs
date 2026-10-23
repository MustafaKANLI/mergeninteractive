import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
	{ ignores: ['node_modules/**', 'dist/**'] },
	{
		files: ['**/*.js', '**/*.jsx'],
		plugins: { react, 'react-hooks': reactHooks, import: importPlugin },
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: { ecmaFeatures: { jsx: true } },
			globals: { ...globals.browser },
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				node: { extensions: ['.js', '.jsx'] },
				alias: { map: [['@', './src']], extensions: ['.js', '.jsx'] },
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...importPlugin.flatConfigs.recommended.rules,
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/no-unescaped-entities': 'off',
			'no-undef': 'error',
		},
	},
	{ files: ['*.config.js', 'tailwind.config.js', 'postcss.config.js'], languageOptions: { globals: globals.node } },
];

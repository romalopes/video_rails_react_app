# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Jest Instalation requirement

## Jest Installation Requirements

```bash
npm install --save-dev jest @testing-library/jest-dom @testing-library/react @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react vite-plugin-testing babel-plugin-transform-import-meta jest-environment-jsdom eslint-plugin-jest jest-fetch-mock history
```

#### create a jest.config.cjs

#### create a .babelrc

#### create a .eslintrc.cjs

#### npm install --save-dev @babel/plugin-transform-runtime

Test:
$ npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react

add: delete jest.config.js and add jest-preset.js

$ npm install --save-dev @testing-library/react

$ npm install --save-dev jest-environment-jsdom

$ npm install --save-dev @testing-library/jest-dom

npm install --save-dev jest @testing-library/jest-dom @testing-library/react @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react vite-plugin-testing babel-plugin-transform-import-meta jest-environment-jsdom eslint-plugin-jest jest-fetch-mock history

npm install --save-dev jest @testing-library/jest-dom @testing-library/react @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react vite-plugin-testing babel-plugin-transform-import-meta jest-environment-jsdom eslint-plugin-jest jest-fetch-mock history --force

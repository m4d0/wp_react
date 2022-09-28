# Starter Kit for WP & React using Webpack

[WordPress](https://wordpress.org/) starter theme built with [Webpack](https://webpack.js.org/).

### How to use
- 1 - Clone the project inside the `/wp-content/themes/` directory.
- 2 - Run `npm install` to install all dependencies.
- 3 - Run `npm run dev` to start developing.
- 4 - Run `npm run prod` to build files for production!

### Create React Apps
- 1 - Create template on `/page-templates/`
- 2 - Create page js on `/src/pages/`
- 3 - Create React App for page in `/src/pages/App/App.js`
- 4 - Edit webpack.config.js to include the new app 
- 5 - Create a blank page on WP using a page template  
- 6 - Edit `src/index.js` to build and test app using reatc-scripts
- 7 - Run `npm run build` to build react app 

**_Note:_** React Apps is setup using [mui](https://mui.com/material-ui/getting-started/overview/) and [tailwind css](https://tailwindui.com/)



**_Note:_** `npm run prod` and `npm run dev` pack files to the `/public` folder without really build React apps. First build the apps and the check results in WP environment.

Thanks to [jackcoral89 Giacomo Corallini](https://github.com/jackcoral89)

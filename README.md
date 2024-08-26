# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


*******************

# *** STEPS *** 

### To run this project, Change the directory path from your default directory to this project's downloaded folder directory ( using cd) and then,

### Firstly you need to install Node.js and then following dependencies :

    -> npm modules
    -> @fortawesome/fontawesome-svg-core
    -> @fortawesome/free-solid-svg-icons
    -> @fortawesome/react-fontawesome
    -> body-parser
    -> bootstrap
    -> browserify-fs
    -> buffer
    -> cors
    -> express
    -> fs
    -> react
    -> react-bootstrap
    -> react-circular-progressbar
    -> react-dom
    -> react-hook-form
    -> react-redux
    -> react-router-dom
    -> react-scripts
    -> redux
    -> redux-persist
    -> stream-browserify


### So, to install above, We can use following corresponding commands :

    for node.js, just download and install node.js application to your local machine and then you can check the installation status :

        -> node -v
        -> npm -v

    and for remaining,

    -> npm install
    -> npm i @fortawesome/fontawesome-svg-core
    -> npm i @fortawesome/free-solid-svg-icons
    -> npm i @fortawesome/react-fontawesome
    -> npm i body-parser
    -> npm i bootstrap
    -> npm i browserify-fs
    -> npm i buffer
    -> npm i cors
    -> npm i express
    -> npm i fs
    -> npm i react
    -> npm i react-bootstrap
    -> npm i react-circular-progressbar
    -> npm i react-dom
    -> npm i react-hook-form
    -> npm i react-redux
    -> npm i react-router-dom
    -> npm i react-scripts
    -> npm i redux
    -> npm i redux-persist
    -> npm i stream-browserify

**********************

## -> The main project runs on url : http://localhost:3000/


## -> For FRONT-END, run the following command :

     npm start


## -> For BACK-END, run the following command :

    node server.js


### After running above two commands, it automatically redirects to the http://localhost:3000/


**********************

And now, run the project and you can do various operations on it by adding a widget or removing a widget.But to have a Dashboard Data information, I have a default information or a backup of this particular project which is a .json file and which contains the information like list of dashboard categories, widgets within the category & its id, name, content, status, description etc...

So that default backup dashboard data contains in the separate file which presents in root directory with a name "defaultData.json" file.

i.e, if in case you remove any default widget in the dashboard and if you want that widget or if you need the initial default dashboard data, You can just simply copy that entire dashboard data from that defaultData.json file and you can paste it into the main dashboardData.json file.



**********************

### Detailed information of the project and its purpose :

* Project Name : Company Statistics Dashboard

* Project Description: The Company Statistics Dashboard is a dynamic and interactive web application designed to provide a comprehensive overview of key company metrics and statistics. Built using React for the frontend and Redux for state management, the dashboard offers a highly customizable user experience, allowing users to add, remove, and search for widgets that display various data points and performance indicators.

The dashboard is divided into categories, each containing relevant widgets that provide visual insights into different aspects of the company's operations. Users can personalize their dashboard by selecting which widgets to display, making it a powerful tool for monitoring and analyzing business performance in real time.

### * Key features of the Company Statistics Dashboard include:

### -> Search Functionality.
### -> Widget Management ( add or remove widget).
### -> Selection or Unselection of specific widgets under that specific dashboard category.
### -> Real-Time Data Integration.
const express = require('express');
const app = express(); // to trigger the app

// let app = require('express')(); // to trigger the app

app.get('/', (req, res) => { // get is a method of express to get the request from the client
    res.send("<h1>Hello world!</h1>"); // send is a method of express to send the response to the client
}); // '/' is the root path of the application

app.get('/about', (req, res) => { // get is a method of express to get the request from the client
    res.send('About Page'); // send is a method of express to send the response to the client
}); // '/about' is the about path of the application







app.listen(3000, () => {
    console.log(' Server is running on port 3000');
} ); // listen is a method contains port number and a callback function 
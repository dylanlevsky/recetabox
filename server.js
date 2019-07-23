//Install express server
/*
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/recetabox'));

app.get('*', function(req, res) {
    // Replace the '/dist/<to_your_project_name>/index.html'
    res.sendFile(path.join(__dirname + '/dist/recetabox/index.html'));
});
// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
*/

/*
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/recetabox'));
app.listen(process.env.PORT || 5000);

//PATH LOCATION STARTEGY

app.get('/*', function(req, res) {
    const fullPath = path.join(__dirname + '/dist/recetabox/index.html');
    console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

console.log('Server started running..');

//Changed to run on Heroku

*/
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
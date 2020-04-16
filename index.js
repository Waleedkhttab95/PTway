const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const error = require('./middleware/error');
const path = require('path');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('express-async-errors');



require('./models/Users/User');
require('./services/passport');


mongoose.connect(keys.mongoURI,{ useFindAndModify: false })
const app = express();
app.use(cors());


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use("/images", express.static(path.join("images")));
 app.use(express.static(__dirname + '/build'));
//app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 *60*1000,
      keys: [keys.cookieKey]
  })  
);
app.use(error);




app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/Registretion')(app);
require('./routes/Companies')(app);
require('./routes/Country_City')(app);
require('./routes/Information')(app);
require('./routes/admin')(app);
require('./routes/admin/admin')(app);
require('./routes/admin/user')(app);
require('./routes/admin/company')(app);
require('./routes/admin/Country_City')(app);
require('./routes/admin/University_Majors')(app);
require('./routes/Services')(app);
require('./routes/candidate')(app);
require('./routes/Accept')(app);
require('./routes/term')(app);
require('./routes/User')(app);
require('./routes/temp')(app);
require('./services/updateResume')();
require('./startup/prod')(app);


app.get('/*', function(req,res) {
    
  res.sendFile(path.join(__dirname+'/build/index.html'));
  });



const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};
var port = "80";
if(process.env.NODE_ENV === 'production'){
   port = normalizePort(process.env.PORT || "5000");
}
else{
   port = normalizePort(process.env.PORT || "80");
}
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
console.log(port);
server.listen(port);

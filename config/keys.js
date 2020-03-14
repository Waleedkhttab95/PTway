if(process.env.NODE_ENV === 'production'){
  console.log("production");
    module.exports = require('./dev');
    }
    else{
      console.log("development");
      module.exports = require('./dev');  
    }
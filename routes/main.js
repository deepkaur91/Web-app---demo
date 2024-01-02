const path = require("path");
const express = require("express");
const hbs = require("hbs");

const PORT = 5000;
const app = express();
const publicPath = path.join(__dirname, "../www");

//hbs
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine','hbs');// say to express that i am going to use hbs
app.set('views',viewsPath); //say to express to use hbs views
hbs.registerPartials(partialsPath); // partials - to avoid repetive code

app.use(express.static(publicPath));


const myLogger = function (req, res, next) {
  console.log('Function called')
  next()
}

app.use(myLogger)

// app.get('/hello', (req, res) => {
//   console.log(req.baseUrl);
//   res.send('Hello World!')
// })



// for hbs
app.get("", (req, res) => {
    res.render("index",{
        title: "HBS", 
    });
});


app.get("/registerPage", (req, res) => {
    res.render("register",{
      title: "HBS", 
    });
  });

  app.get("/loginPage", (req, res) => {
    res.render("login",{
      title: "HBS", 
    });
  });

  app.get("/homePage", (req, res) => {
    res.render("home",{
      title: "HBS", 
    });
  });



  app.get("/help", (req, res) => {

    try {
     // throw new Error("Something went wrong");
      res.render("help",{
        title: "HBS", 
      });
    } catch (error) {
      res.render("404",{
        title: "404 Page not found : Error handling",
      });
    
  }
    });

    app.get("/help/*", (req, res) => {
      res.render("help",{
        title: "Community Help : @abc.com",
      });
    });

    app.get("*", (req, res) => {
      res.render("404",{
        title: "404 Page not found",
        name: "Please go to community support", 
      });
    });


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
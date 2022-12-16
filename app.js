const express =require('express')
const morgan =require('morgan')
const{router}=require('./routes/indexRoutes')
const path=require('path')
const{fileURLToPath}=require('url')
const{engine,create}=require('express-handlebars')

const app = express();
const Morgan = morgan();


app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  create ({
      layoutsDir: path.join(app.get("views"), "layouts"),
      defaultLayout: "main",
      extname: ".hbs",
    }
  ).engine
);
app.set("view engine", ".hbs");


app.use(express.urlencoded({extended:false}))


app.use(router)

app.use(express.static(path.join(__dirname,"public")))









module.exports={
    app,
   
}

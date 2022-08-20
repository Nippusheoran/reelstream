const express = require("express");
const app = express();
app.use(express.json());
const path = require('path');
const http = require("http");
const server = http.createServer(app);


app.use(express.static(__dirname +'/public'))
app.set('views',path.join(__dirname,'./views'));
app.set("view engine", "ejs")
app.get("/", (req, res) => res.render("Home"))
app.get("/videocat", (req, res) => res.render("videocat"))
app.get("/videodetail", (req, res) => res.render("videodetail"))
app.get("/pageprice", (req, res) => res.render("pageprice"))
app.get("/signup", (req, res) => res.render("signup"))
app.get("/signin", (req, res) => res.render("signin")) 
app.get("/forgotpassword", (req, res) => res.render("forgotpassword"))
app.get("/pagesetting", (req, res) => res.render("pagesetting"))
app.get("/pageprofile", (req, res) => res.render("pageprofile"))
app.get("/pageinvoice", (req, res) => res.render("pageinvoice"))



//server//
const port = process.env.PORT || 4040
server.listen(port , () => {
    console.log(`server runing port ${port}`);
})

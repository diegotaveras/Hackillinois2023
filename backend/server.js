const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

app.use(express.json());

app.use(cors());

const mongoURL = "mongodb+srv://cs196:cs196@userdata.sn7wv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser:true
})
.then(()=> {console.log("Connected to database");
})
.catch((e)=> console.log(e));

app.listen(3001, () => {
    console.log("Server Started");
});

console.log("Hello");

app.post("/post", async (req, res) => {
    console.log(req.body);
    const { data } = req.body;

    console.log("Hello");

    try {
        if (data == "cs196") {
            res.send({ status: "ok"});
        } else {
            res.send({ status: "User Not Found"});
        }
    } catch (error) {
        res.send({ status: "Something went wrong. Try again."});
    }
});

require("./userDetails");

const user = mongoose.model("UserInfo");

app.post("/register", async(req, res) => {

    const { name, email, password } = req.body;
    try {
        await user.create({
            uname: name,
            email,
            password,
        });
        res.send({status:"ok"});
    
    } catch (error) {
        res.send({status:"error"});
    }
});

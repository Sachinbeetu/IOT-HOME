const ser = require('express').Router()

ser.get("/", (req, res) =>{
    res.render('home')
})

ser.post('/', (req, res) =>{
    let button_selection = [
        req.body.button_1,
        req.body.button_2,
        req.body.button_3,
        req.body.button_4,
        req.body.button_5,
        req.body.button_6
    ]
    for(button of button_selection){
        if(typeof button != 'undefined'){
            res.render("home", {
                button_ans : "Button " + button.toString() + " is selected!"
            })
        }
    }
})
module.exports = ser
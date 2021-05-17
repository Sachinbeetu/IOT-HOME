const { default: axios } = require('axios')

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
            const data = ['1']
            axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/V1', data)
                .then((res) => {
                    console.log(`Status: ${res.status}`)
                    console.log("Body: ", res.data)
                }).catch((err) => {
                    console.error(err)
                })
        }
    }

    for(button of button_selection){
        if(typeof button != 'undefined'){
            res.render("home", {
                button_ans : "Button " + button.toString() + " is selected! and made a PUT request"
            })
        }
    }
})
module.exports = ser
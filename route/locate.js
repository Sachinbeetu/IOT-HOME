const { default: axios } = require('axios')

const ser = require('express').Router()

const button_state = [
    {
        "button_id" : '1',
        "value" : "0"
    },
    {
        "button_id" : '2',
        "value" : "0"
    },
    {
        "button_id" : '3',
        "value" : "0"
    },
    {
        "button_id" : '4',
        "value" : "0"
    },
    {
        "button_id" : '5',
        "value" : "0"
    },
    {
        "button_id" : '6',
        "value" : "0"
    },
    {
        "button_id" : '7',
        "value" : "0"
    }
]

const login_data = [
    {
        "user_id" : "nalayak_sachin@gmail.com",
        "password" : "NalayakNahiKhalnayakHunM"
    },
    {
        "user_id" : "gaurav@gmail.com",
        "password" : "KnownToAll"
    }
]


ser.get("/", (req, res) =>{
    res.render('index')
})

ser.post('/action', (req, res) =>{
    let button_selection = [
        req.body.button_1,
        req.body.button_2,
        req.body.button_3,
        req.body.button_4,
        req.body.button_5,
        req.body.button_6,
        req.body.button_7
    ]
    // console.log(button_selection)
    for(button of button_selection){
        // console.log("button = " + button)
        if(typeof button != 'undefined'){
            let data = ["1"]
            let button_number
            for(button_data of button_state){
                if(button_data.button_id === button){
                    button_number = button
                    if(button_data.value === "0"){
                        data = ["1"]
                        button_data.value = "1"
                        // console.log("data for " + button + " is " + data)
                    }else{
                        data = ["0"]
                        button_data.value = "0"
                        // console.log("data for " + button + " is " + data)
                    }
                }
            }
            axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/V1', data)
                .then((response_axios) => {
                    // console.log(`Status: ${response_axios.status}`)
                    // console.log("Body: ", response_axios.data)
                    // console.log("button = " + button)
                    res.render("home", {
                        button_ans : "Button " + button_number + " is selected! with value =" + data[0] + "and made a PUT request"
                    })
                }).catch((err) => {
                    console.error(err)
                    res.render("home", {
                        button_ans : "Something Went Wrong!! Try Again"
                    })
                })
        }
    }
 

    // for(button of button_selection){
    //     if(typeof button != 'undefined'){
    //         res.render("home", {
    //             button_ans : "Button " + button.toString() + " is selected! and made a PUT request"
    //         })
    //     }
    // }
})

ser.get("/login", (req, res) =>{
    res.render("login")
})

ser.post('/login', (req, res) => {
    let user_name = req.body.user_name
    let user_id = req.body.user_id
    let password = req.body.user_password
    let true_user_id = false
    let true_user_pass = false
    // console.log("user_name = " + req.body.user_name)
    // console.log("user_id = " + req.body.user_id)
    // console.log("password = " + req.body.user_password)
    for(user_cred of login_data){
        if(user_cred.user_id === user_id){
            true_user_id = true;
        }
        if(user_cred.password === password){
            true_user_pass = true;
        }
    }
    if(true_user_pass && true_user_id){
        res.render("home", {
            greet : `Welcome! ${user_name}` 
        })
    }else if(!true_user_id && !true_user_pass){
        res.render("login", {
            reply : "User Name and User Password is wrong"
        })
    }
    else if(!true_user_id){
        res.render("login", {
            reply : "User Name is Wrong!"
        })
    }else{
        res.render("login", {
            reply : "User Password is Wrong"
        })
    }
})
module.exports = ser
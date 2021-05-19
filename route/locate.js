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
    let button_0 = req.body.button_0
    let button_1 = req.body.button_1
    let button_2 = req.body.button_2
    let button_3 = req.body.button_3
    let button_4 = req.body.button_4
    let button_5 = req.body.button_5
    let button_6 = req.body.button_6

    // console.log("button_0 : " + button_0)
    // console.log("button_1 : " + button_1)
    // console.log("button_2 : " + button_2)
    // console.log("button_3 : " + button_3)
    // console.log("button_4 : " + button_4)
    // console.log("button_5 : " + button_5)
    if(typeof button_0 != 'undefined'){
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D1', ["1"])
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_0 + " is selected! with value = " + 1 + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_1 != 'undefined'){
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D1', ["1"])
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                   button_ans : "Button " + button_1 + " is selected! with value = " + 1 + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_2 != 'undefined'){
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D2', ["1"])
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_2 + " is selected! with value = " + 1 + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_3 != 'undefined'){
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D3', ["1"])
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_3 + " is selected! with value = " + 1 + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_4 != 'undefined'){
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D4', ["1"])
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_4 + " is selected! with value = " + 1 + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_5 != 'undefined'){
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D5', ["1"])
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_5 + " is selected! with value = " + 1 + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_6 != 'undefined'){
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D6', ["1"])
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                   button_ans : "Smart Button is selected! with value always 1 and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }

            // axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/V1', data)
            //     .then((response_axios) => {
            //         // console.log(`Status: ${response_axios.status}`)
            //         // console.log("Body: ", response_axios.data)
            //         // console.log("button = " + button)
            //         res.render("home", {
            //             button_ans : "Button " + button_number + " is selected! with value = " + data[0] + " and made a PUT request"
            //         })
            //     }).catch((err) => {
            //         console.error(err)
            //         res.render("home", {
            //             button_ans : "Something Went Wrong!! Try Again"
            //         })
            //     })
  

    // if(button_is_selected == false){
    //     let data = ["1"]
    //     axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/V1', data)
    //         .then((response_axios) => {
    //             // console.log(`Status: ${response_axios.status}`)
    //             // console.log("Body: ", response_axios.data)
    //             // console.log("button = " + button)
    //             res.render("home",{
    //                 button_ans : "V1 is pressed"
    //             })
    //         }).catch((err) => {
    //             console.error(err)
    //             res.render("home", {
    //                 button_ans : "Something Went Wrong!! Try Again"
    //             })
    //         })


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
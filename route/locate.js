const { default: axios } = require('axios')

const ser = require('express').Router()

const button_state = [
    {
        "button_id" : '0',
        "value" : "0"
    },
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
    // console.log("typeof button_2 : " + typeof button_2)
    // console.log("button_3 : " + button_3)
    // console.log("button_4 : " + button_4)
    // console.log("button_5 : " + button_5)


    if(typeof button_0 != 'undefined'){
        let data_0 = ["0"]
        for(button_data of button_state){
            if(button_data.button_id == button_0){
                // console.log("allowed")
                if(button_data.value[0] === "0"){
                    data_0.pop()
                    data_0.push("1")
                    button_data.value = ["1"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_0[0])
                }else{
                    data_0.pop()
                    data_0.push("0")
                    button_data.value = ["0"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_0[0])
                }
            }else{
                // console.log("rejected")
            }
        }
        // console.log(data_0)
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D16', data_0)
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_0 + " is selected! with value = " + data_0[0] + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_1 != 'undefined'){
        let data_1 = ["0"]
        for(button_data of button_state){
            if(button_data.button_id == button_1){
                // console.log("allowed")
                if(button_data.value[0] === "0"){
                    data_1.pop()
                    data_1.push("1")
                    button_data.value = ["1"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_1[0])
                }else{
                    data_1.pop()
                    data_1.push("0")
                    button_data.value = ["0"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_1[0])
                }
            }else{
                // console.log("rejected")
            }
        }
        // console.log(data_1)
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D5', data_1)
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_1 + " is selected! with value = " + data_1[0] + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_2 != 'undefined'){
        let data_2 = ["0"]
        for(button_data of button_state){
            if(button_data.button_id == button_2){
                // console.log("allowed")
                if(button_data.value[0] === "0"){
                    data_2.pop()
                    data_2.push("1")
                    button_data.value = ["1"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_2[0])
                }else{
                    data_2.pop()
                    data_2.push("0")
                    button_data.value = ["0"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_2[0])
                }
            }else{
                // console.log("rejected")
            }
        }
        // console.log(data_2)
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D4', data_2)
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_2 + " is selected! with value = " + data_2[0] + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_3 != 'undefined'){
        let data_3 = ["0"]
        for(button_data of button_state){
            if(button_data.button_id == button_3){
                // console.log("allowed")
                if(button_data.value[0] === "0"){
                    data_3.pop()
                    data_3.push("1")
                    button_data.value = ["1"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_3[0])
                }else{
                    data_3.pop()
                    data_3.push("0")
                    button_data.value = ["0"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_3[0])
                }
            }else{
                // console.log("rejected")
            }
        }
        // console.log(data_3)
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D0', data_3)
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_3 + " is selected! with value = " + data_3[0] + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_4 != 'undefined'){
        let data_4 = ["0"]
        for(button_data of button_state){
            if(button_data.button_id == button_4){
                // console.log("allowed")
                if(button_data.value[0] === "0"){
                    data_4.pop()
                    data_4.push("1")
                    button_data.value = ["1"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_4[0])
                }else{
                    data_4.pop()
                    data_4.push("0")
                    button_data.value = ["0"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_4[0])
                }
            }else{
                // console.log("rejected")
            }
        }
        // console.log(data_4)
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D2', data_4)
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_4 + " is selected! with value = " + data_4[0] + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_5 != 'undefined'){
        let data_5 = ["0"]
        for(button_data of button_state){
            if(button_data.button_id == button_5){
                // console.log("allowed")
                if(button_data.value[0] === "0"){
                    data_5.pop()
                    data_5.push("1")
                    button_data.value = ["1"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_5[0])
                }else{
                    data_5.pop()
                    data_5.push("0")
                    button_data.value = ["0"]
                    // console.log("button_data.value[0] = " + button_data.value[0])
                    // console.log("WE are allowed thus changging data to = " + data_5[0])
                }
            }else{
                // console.log("rejected")
            }
        }
        // console.log(data_5)
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D14', data_5)
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Button " + button_5 + " is selected! with value = " + data_5[0] + " and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
    if(typeof button_6 != 'undefined'){
        let data_6 = ["1"]
        // for(button_data of button_state){
        //     if(button_data.button_id == button_6){
        //         console.log("allowed")
                
        //     }else{
        //         console.log("rejected")
        //     }
        // }
        // console.log(data_6)
        axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/V1', data_6)
            .then((response_axios) => {
                // console.log(`Status: ${response_axios.status}`)
                // console.log("Body: ", response_axios.data)
                // console.log("button = " + button)
                res.render("home", {
                    button_ans : "Smart Switch is selected! with value always = 1 and made a PUT request"
                })
            }).catch((err) => {
                console.error(err)
                res.render("home", {
                    button_ans : "Something Went Wrong!! Try Again"
                })
            })
    }
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
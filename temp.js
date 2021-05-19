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
let button_1 = "1"
let data_1 = ["0"]
for(button_data of button_state){
    if(button_data.button_id === button_1){
        console.log("allowed")
        if(button_data.value[0] === "0"){
            // data_1 = ["1"]
            data_1.pop()
            data_1.push("1")
            button_1 = ""
            console.log("WE are allowed thus changging data to = " + data_1[0])
        }else{
            // data_1 = ["0"]
            data_1.pop()
            data_1.push("0")
            console.log("WE are allowed thus changging data to = " + data_1[0])
        }
        // data_1 = button_data.value
    }else{
        console.log("rejected")
    }
}
console.log(data_1)


if(typeof button_2 != 'undefined'){
    let data_2 = ["0"]
    for(button_data of button_state){
        if(button_data.button_id == button_2){
            console.log("allowed")
            if(button_data.value[0] === "0"){
                data_2.pop()
                data_2.push("1")
                button_data.value = ["1"]
                console.log("button_data.value[0] = " + button_data.value[0])
                console.log("WE are allowed thus changging data to = " + data_2[0])
            }else{
                data_2.pop()
                data_2.push("0")
                button_data.value = ["0"]
                console.log("button_data.value[0] = " + button_data.value[0])
                console.log("WE are allowed thus changging data to = " + data_2[0])
            }
        }else{
            console.log("rejected")
        }
    }
    console.log(data_2)
    axios.put('http://188.166.206.43/eXBZDeQdaKiOd0uVDFjpfRiTB7R6ekJL/update/D2', data_2)
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
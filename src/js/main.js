
if(localStorage.getItem("dark-mode")=="Enabled"){
    document.getElementById("switch-d-mode").checked = true
    console.log("checking")
}else{
    console.log("not checked")
}

function chekbox_changed(){
    if(document.getElementById("switch-d-mode").checked == true){
        localStorage.setItem("dark-mode","Enabled")
        console.log("enabling")
    }
    if(document.getElementById("switch-d-mode").checked == false){
        localStorage.clear()
        console.log("enabling")
    }
}


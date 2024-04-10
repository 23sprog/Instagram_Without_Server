 let users = [
     {id:1, username:"Erfan", password:"12345678",image:"img/Erfan_profile.jpg", bio:"Hello World!"},
 ]

 let $ = document
let queryS=value=>$.querySelector(value)
let isAuth = false
let loginContainer = queryS(".login_container")
let profileContainer = queryS(".profile_container")
let subLogin = queryS(".sub_login")
let usernameInput = queryS(".username_input")
let passwordInput = queryS(".password_input")
let alertLog = queryS(".alert")
let user
 let bio = queryS(".bio_container p")
 let usernameLog = queryS(".pic_username_container h3")
 let profileImage = queryS(".pic_username_container img")

 subLogin.addEventListener("click",(event)=>{
     let usernameValue = usernameInput.value
     let passwordValue = passwordInput.value
     if (usernameValue && passwordValue){
        user = users.find((user)=>{
            if (user.username === usernameValue && user.password === passwordValue){
                isAuth = true
                return true
            }

        })
        if(isAuth){
            loginContainer.style.display = "none"
            profileContainer.style.display = "block"
            bio.textContent = user.bio
            usernameLog.textContent = user.username
            profileImage.setAttribute("src", "img/Erfan_profile.jpg")
        }else {
            alertLog.style.display = "block"
            alertLog.textContent = "Your Username or Password is incorrect."
        }
     }else {
         alertLog.style.display = "block"
         alertLog.textContent = "Enter Username and Password."
     }
 })

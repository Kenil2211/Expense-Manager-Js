function data() {
    x = document.getElementById('uname').value
    y = document.getElementById('pass').value
    if (x != '' || y!='') {
        document.getElementById('msg').innerHTML = ''
    }
}

document.getElementById('signup').addEventListener("click", () => {

    var name = document.getElementById('uname').value
    var pass = document.getElementById('pass').value
    var temp = {
        name: name,
        pass: pass,
    }
    if (name == '' || pass == '') {
        document.getElementById('msg').innerHTML = 'Please Fill the details!'
        document.getElementById('uname').focus()
        

    }
    else {
        if (isUserS(temp)) {
            localStorage.setItem(localStorage.length, JSON.stringify(temp))
            // document.getElementById('msg').style.color="green"
            document.getElementById('msg1').innerHTML = 'Signed Up Successfully'
            document.getElementById('uname').value = ''
            document.getElementById('pass').value = ''
        }
        else {
            document.getElementById('msg').innerHTML = 'Username Already Taken'
            document.getElementById('uname').style.border = '2px solid red'
        }
    }
})

function isUserS(temp) {
    var flag = 0
    for (var i = 0; i < localStorage.length; i++) {
        var t = localStorage.getItem(i)
        t = JSON.parse(t)
        if (t.name === temp.name) {
            flag = 1
            return false
        }
    }
    if (!flag) {
        return true
    }
}

function isUserl(temp) {
    var flag = 0
    for (var i = 0; i < localStorage.length; i++) {
        var t = localStorage.getItem(i)
        t = JSON.parse(t)
        if (t.name === temp.name && t.pass === temp.pass) {
            flag = 1
            return false
        }
    }
    if (!flag) {
        return true
    }
}

document.getElementById('login').addEventListener('click', () => {

    var name = document.getElementById('uname').value
    var pass = document.getElementById('pass').value
    var temp = {
        name: name,
        pass: pass,
    }

    var flag = 1

    if (name == '' || pass == '') {
        document.getElementById('msg').innerHTML = 'Please Fill the details!'
    }
    else {
        if (!isUserl(temp)) {

            flag = 0
            document.getElementById('msg').innerHTML = 'Login Successfull'
            document.getElementById('uname').value = ''
            document.getElementById('pass').value = ''
            window.location.replace("mainPage.html")
            
        }

        if (flag) {
            document.getElementById('msg').innerHTML = 'Not a User? Sign up Now!'
        }
    }
})


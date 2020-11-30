function display10(cb) { //ten = 10
    setTimeout(function () {
        document.getElementById("msg").innerHTML="10";
        cb(display9)
    }, 1000)
}

function display9(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="9";
        cb(display8)
    }, 1000)
}

function display8(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="8";
        cb(display7)
    }, 1000)
}

function display7(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="7";
        cb(display6)
    }, 1000)
}

function display6(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="6";
        cb(display5)
    }, 1000)
}

function display5(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="5";
        cb(display4)
    }, 1000)
}

function display4(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="4";
        cb(display3)
    }, 1000)
}

function display3(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="3"
        cb(display2)
    }, 1000)
}

function display2(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="2"
        cb(display1)
    }, 1000)
}

function display1(cb) {
    setTimeout(function () {
        document.getElementById("msg").innerHTML="1"
        cb(message)
    }, 1000)
}

function message() {
    setTimeout(function(){
        document.getElementById("msg").innerHTML=('Happy Independence Day! :D');
    },1000)    
}

display10(function (display9) {
    display9(function (display8) {
        display8(function (display7) {
            display7(function (display6) {
                display6(function (display5) {
                    display5(function (display4) {
                        display4(function (display3) {
                            display3(function (display2) {
                                display2(function (display1) {
                                    display1(function (message) {
                                        message()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
var bgCol
var txtStyle
var txtFont
var frstLetter
var frstChar
var redW
var imgBorder
var field


function setBG(){
    field = document.getElementById('main')
    var color = document.getElementById('backG').value
    field.style.backgroundColor = color
}


function setStyle(){
    var txtStyle = document.getElementById('txt').value
    var parag = document.getElementsByTagName('p')
    for(let i=0; i<3; i++){
        p = parag[i]
        switch(txtStyle){
            case "normal":
                p.style.fontStyle = "normal"
                p.style.textDecoration = "none"
                p.style.fontWeight = "normal"
                break;
            case "underln":
                p.style.fontStyle = "normal"
                p.style.textDecoration = "underline"
                p.style.fontWeight = "normal"
                break;
            case "it":
                p.style.fontStyle = "italic"
                p.style.textDecoration = "none"
                p.style.fontWeight = "normal"
                break;
            case "bold":
                p.style.fontStyle = "normal"
                p.style.fontWeight = "bold"
                p.style.textDecoration = "none"
                break;
            default:
                p.style.fontStyle = "normal"
                p.style.textDecoration = "none"
        }
    }
}


function setFont(){
    var txtFont = document.getElementById('font').value
    var parag = document.getElementsByTagName('p')
    for(let i = 0; i < parag.length; i++){
        parag[i].style.fontFamily = txtFont
    }
}


function setFontFirst(){
    var txtFont = document.getElementById('fontFirst').value
    var parag = document.getElementsByTagName('p')[0]
    parag.style.fontFamily = txtFont 
}


function setFirstChar(){
    firstLetters = document.getElementsByName('firstLet')
    weight = document.getElementById('firstChar').value
    for(var i = 0; i < firstLetters.length; i++){
        firstLetters[i].style.fontWeight = weight
    }
}


function colorizeWord(){
    var parag = document.getElementsByTagName('p')
    for(var i = 0; i < parag.length; i++){
        var words = parag[i].textContent.split(/\s+/)
        var text = words.join( "</span> <span>" )
        parag[i].innerHTML = "<span>" + text + "</span>" 
    }
    var index = document.getElementById('redWord').value - 1
    document.getElementsByTagName('span')[index].style.color='red'
}


function setBorder(){
    img = document.getElementsByTagName('img')
    bordStyle = document.getElementById('imgBorder').value
    for(var i = 0; i < img.length; i++){
        img[i].style.border = bordStyle + " 10px orange"
        img[i].style.borderRadius = "5%"
    }
}


function resetAll(){
    document.getElementById('main').style.backgroundColor = ""
    var p = document.getElementsByTagName('p')
    for(var i = 0; i < p.length; i++){
        p[i].style.fontStyle = ""
        p[i].style.textDecoration = ""
        p[i].style.fontWeight = ""
        p[i].style.fontFamily = ""
    }

    firstLetters = document.getElementsByName('firstLet')
    for(var i = 0; i < firstLetters.length; i++){
        firstLetters[i].style.fontWeight = ""
    }

    img = document.getElementsByTagName('img')
    for(var i = 0; i < img.length; i++){
        img[i].style.border = ""
        img[i].style.borderRadius = ""
    }

    span = document.getElementsByTagName('span')
    for(var i = 0; i < span.length; i++){
        span[i].style.color = ""
    }
}

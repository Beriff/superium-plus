chrome.storage.sync.get(["theme"], function(items){
    //  items = [ { "yourBody": "myBody" } ]

    console.log(items['theme'])

    if (items['theme'] == "PureBlack") {

        console.log(items['theme'])

        let navbar = document.getElementById('spNavbar')
        navbar.style.backgroundColor = 'black'

        document.body.style.backgroundColor = 'black'
        let myElements = document.querySelectorAll(".card");

        for (let i = 0; i < myElements.length; i++) {
            myElements[i].style.backgroundColor = 'black';
        }

        let myElements2 = document.querySelectorAll(".panel-block");

        for (let i = 0; i < myElements2.length; i++) {
            myElements2[i].style.backgroundColor = 'black';
        }

        let myElements3 = document.querySelectorAll(".box");

        for (let i = 0; i < myElements3.length; i++) {
            myElements3[i].style.backgroundColor = 'black';
        }

        let myElements4 = document.querySelectorAll(".navbar-brand");

        for (let i = 0; i < myElements4.length; i++) {
            myElements4[i].style.backgroundColor = 'black';
        }

        let myElements5 = document.querySelectorAll(".container");

        for (let i = 0; i < myElements5.length; i++) {
            myElements5[i].style.backgroundColor = 'black';
        }

    }
    else if (items['theme'] == 'Matrix') {
        let navbar = document.getElementById('spNavbar')
        navbar.style.backgroundColor = 'black'

        document.body.style.backgroundColor = 'black'
        document.body.style.color = "green"
        let myElements = document.querySelectorAll(".card");

        for (let i = 0; i < myElements.length; i++) {
            myElements[i].style.backgroundColor = 'black';
            myElements[i].style.color = 'green';
        }

        let myElements2 = document.querySelectorAll(".panel-block");

        for (let i = 0; i < myElements2.length; i++) {
            myElements2[i].style.backgroundColor = 'black';
            myElements2[i].style.color = 'green'
        }

        let myElements3 = document.querySelectorAll(".box");

        for (let i = 0; i < myElements3.length; i++) {
            myElements3[i].style.backgroundColor = 'black';
            myElements3[i].style.color = 'green'
        }

        let myElements4 = document.querySelectorAll(".navbar-brand");

        for (let i = 0; i < myElements4.length; i++) {
            myElements4[i].style.backgroundColor = 'black';
            myElements4[i].style.color = 'green'
        }

        let myElements5 = document.querySelectorAll(".container");

        for (let i = 0; i < myElements5.length; i++) {
            myElements5[i].style.backgroundColor = 'black';
            myElements5[i].style.color = 'green'
        }
    }
});

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

let ownersRequest = 'https://cors-anywhere.herokuapp.com/https://api.superium.net/asset/owners?id=REPLACE&limit=500'

let url = window.location.pathname

let itemID = url.replace("/Shop/", '')

ownersRequest = ownersRequest.replace('REPLACE', itemID)

var s = document.createElement('script');
s.type = 'text/javascript';

var code = `var flag = true;
function show() { 
    var thatList = document.getElementById("spList"); 
    if(flag){
        flag = !flag; 
        thatList.setAttribute("style", "display: block; white-space: pre-line")
    }else{
        flag = !flag; 
        thatList.setAttribute("style", "display: none; white-space: pre-line")
    }
}
var themeName = 0
function putSignal() {

    window.location = '?biber=' + themeName

}

///////////////////////////
//theme switchers
//////////////////////////
function toblack() {
    themeName = 'PureBlack'
    putSignal()
}
function todef() {
    themeName = 'Default'
    putSignal()
}
function tomatrix() {
    themeName = 'Matrix'
    putSignal()
}

function createCard(imglink, name_, author_, id_, usedfuncname) {

    var cardBox = document.createElement('div')
    cardBox.setAttribute('class', 'column is-2 zoom_sp')

    var labelsHolder = document.createElement('a')
    labelsHolder.setAttribute('id', id_)
    var imageHolder = document.createElement('div')
    imageHolder.setAttribute('class', 'card has-ribbon-right')
    imageHolder.setAttribute('style', 'margin-bottom: 0.5rem')

    var finalHolder = document.createElement('div')
    finalHolder.setAttribute('style', 'padding: 15px;')

    var image = document.createElement('img')
    image.setAttribute('src', imglink)

    var name = document.createElement('h1')
    name.setAttribute('class', 'title is-6')
    name.setAttribute('style', 'margin-bottom: 0px;')
    name.innerHTML = name_

    var by = document.createElement('span')
    by.setAttribute('class', 'title is-6')
    by.setAttribute('style', 'font-weight: 400')
    by.innerHTML = 'By: '

    var author = document.createElement('a')
    author.innerHTML = author_

    finalHolder.appendChild(image)
    imageHolder.appendChild(finalHolder)
    labelsHolder.appendChild(imageHolder)
    labelsHolder.appendChild(name)
    labelsHolder.appendChild(by)
    labelsHolder.appendChild(author)

    cardBox.appendChild(labelsHolder)
    cardBox.setAttribute('onclick', usedfuncname)

    return cardBox

}

function setThemes() {

    var cards = document.getElementsByClassName('column is-10')
    var actualCards = cards[0]
    actualCards.innerHTML = ''

    var columns = document.createElement('div')
    columns.setAttribute('class', 'columns')
    columns.appendChild(createCard('https://cdn.discordapp.com/attachments/746375338019258451/763327250963365898/black.png', 'PureBlack', 'Beriff', 'pureblack', 'toblack()'))
    columns.appendChild(createCard('https://cdn.discordapp.com/attachments/716672669163978815/763373338503807001/default.png', 'Default', 'Superium', 'default', 'todef()'))
    columns.appendChild(createCard('https://cdn.discordapp.com/attachments/716672669163978815/763388891944058950/matrix.png', 'Matrix', 'Beriff', 'matrix', 'tomatrix()'))
    actualCards.appendChild(columns)
    
    themeTab = document.getElementById('customTab1')
    themeTab.setAttribute('class', 'panel-block is-active')
}
`

try {
    s.appendChild(document.createTextNode(code));
    document.body.appendChild(s);
} catch (e) {
    s.text = code;
    document.body.appendChild(s);
}
if (window.location.pathname == "/Shop/") {
    var panels = document.getElementsByClassName('panel')
    var firstpanel = panels[0]
    var themeTab = document.createElement('a')
    themeTab.setAttribute('class', 'panel-block')
    themeTab.setAttribute('id', 'customTab1')
    themeTab.setAttribute('onclick', 'setThemes()')
    themeTab.innerText = "Themes"

    var outerSpan = document.createElement('span')
    outerSpan.setAttribute('class', 'panel-icon')

    var icon = document.createElement('i')
    icon.setAttribute('class', 'fas fa-paint-brush')
    icon.setAttribute('aria-hidden', 'true')

    outerSpan.appendChild(icon)
    themeTab.prepend(outerSpan)

    firstpanel.appendChild(themeTab)

    var whole = document.children
    var doc = whole[0]


    function apply() {

        if (window.location.search.includes('?biber=')) {

            var themeName = window.location.search.replace('?biber=', '')

            chrome.storage.sync.set({'theme': themeName}, function(items){});

            console.log('setTheTheme!')

        }

    }

    apply()
} else if (/\/Shop\/\d+/.test(window.location.pathname)) {
    let owners = httpGetAsync(ownersRequest, function(text) {

    var ownersList = JSON.parse(text)
    var commentSection = document.getElementsByClassName("box")
    var commentSection = commentSection[3]

    var labelList = document.createElement('p')
    var iteratedList = ""

    for (var prop in ownersList) {

        iteratedList = iteratedList + ' <b> ' + ownersList[prop]['username'] + ' </b> ' + '(#' + ownersList[prop]['serial'] + ') <br/>'  

    }

    var textlist = document.createTextNode(iteratedList)
    labelList.innerHTML = iteratedList
    labelList.setAttribute('style', 'display: none; white-space: pre-line')
    labelList.setAttribute('id', 'spList')
    commentSection.prepend(labelList)
    

    var showButton = document.createElement('button')
    showButton.setAttribute('class', "button is-success")
    showButton.setAttribute('onclick', "show()")
    showButton.setAttribute('style', "margin: 10px;")
    showButton.textContent = "Show"
    commentSection.prepend(showButton)
    
    var label = document.createElement('p')
    var text_ = document.createTextNode('Item Owners:')
    label.appendChild(text_)
    commentSection.prepend(label)
})
}

//only god can judge me for the following shit i wrote



chrome.storage.sync.get(["theme"], function(items){
    //  items = [ { "yourBody": "myBody" } ]

    console.log(items['theme'])
    let outerSelector

    function changeBg(class_, col='black') {
        if (class_.includes('.') || class_.includes('#')) {
            outerSelector = document.querySelectorAll(class_);
            for (let i = 0; i < outerSelector.length; i++) {
                outerSelector[i].style.backgroundColor = col;
            }
        } else {
            outerSelector = document.getElementsByTagName(class_)[0]
            outerSelector.style.backgroundColor = col;
        }

    }
    function changeBgCol(class_, col='black', textcol='green', flag=false) {

        if ( (class_.includes('.') || class_.includes('#')) || flag) {
            outerSelector = document.querySelectorAll(class_);
            for (let i = 0; i < outerSelector.length; i++) {
                outerSelector[i].style.backgroundColor = col;
                outerSelector[i].style.color = textcol;
            }
        } else {
            outerSelector = document.getElementsByTagName(class_)[0]
            outerSelector.style.backgroundColor = col;
            outerSelector.style.color = textcol;
        }

    }
    function changeCol(class_, col='#eee') {
        outerSelector = document.querySelectorAll(class_);
            for (let i = 0; i < outerSelector.length; i++) {
                outerSelector[i].style.color = col;
            }
    }

    function changeBgBorder(class_, col='rgba(0, 0, 0, 0)', border='1px solid #48c774') {

        outerSelector = document.querySelectorAll(class_);
        for (let i = 0; i < outerSelector.length; i++) {
            outerSelector[i].style.backgroundColor = col //+ ' !important';
            outerSelector[i].style.border = border //+ ' !important';
        }

    }


    if (items['theme'] == "PureBlack") {

        let navbar = document.getElementById('spNavbar')
        navbar.style.backgroundColor = 'black'

        document.body.style.backgroundColor = 'black'
        
        changeBg('.card')
        changeBg('.panel-block')
        changeBg('.box')
        changeBg('.navbar-brand')
        changeBg('.container')
        changeBg('.footer')

        

    }
    else if (items['theme'] == 'Outlined') {

        changeBgBorder('.button.is-success')
        changeBgBorder('.button.is-link', 'rgba(0, 0, 0, 0)', '2px solid #3273dc')
        changeBgBorder('.button.is-small', 'rgba(0, 0, 0, 0)', '2px solid #3273dc')
        changeBgBorder('.button.is-danger', 'rgba(0, 0, 0, 0)', '2px solid #e74940')
        changeBgBorder('.ribbon.is-success', 'rgba(0, 0, 0, 0)', '1px solid #48c774')
        changeBgBorder('.ribbon.is-danger', 'rgba(0, 0, 0, 0)', '1px solid #e74940')
    }
    else if (items['theme'] == "Flawless") {
        /*changeBgCol('body', '#16171d', '#eee')
        let placeholder = document.getElementById('spNavbar')
        placeholder.style.backgroundColor = '#2b2d38'
        placeholder.style.border = 'none'
        placeholder.style.boxShadow = 'none'
        changeCol('.navbar-burger')
        changeBg('.navbar-menu.is-active', '#20222f')
        for(let i in ['.navbar-link.is-active', '.navbar-link:focus', '.navbar-link:focus-within']) {
            changeBgCol(i, 'rgba(0, 0, 0, 0.1)', '#fff')
        }

        changeBgCol*/

        var css = `

        body, html {
            background-color:#16171d;
            color:#eee;
        }
        #spNavbarLogo {
            content:url("/images/navbar-logo-white.png");
        }
        #spNavbar {
            background-color:#2b2d38;
            border:none;
            box-shadow:none;
        }
        .navbar-burger {
            color:#eee!important;
        }
        .navbar-menu.is-active {
            background-color:#20222f;
        }
        .navbar-link.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, a.navbar-item.is-active, a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
            background-color: rgba(0, 0, 0, 0.1);
            color:#fff;
        }
        #spNavExtra .navbar-dropdown {
            background-color:#2c2e3c;
        }
        #spNavExtra .navbar-dropdown .dropdown-divider {
            background-color:#232735!important;
        }
        #sploggedindropdown .navbar-dropdown {
            background-color:#2c2e3c;
            width:12.4em;
        }
        .tooltiptext {
            background-color:#484e6f!important;
        }
        #sploggedindropdown .navbar-dropdown .navbar-item .icon {
            position:relative;
            color:#fff;
            right:7px;
            opacity: 0;
            margin-right:-30px;
            transition:all .2s ease-in-out;
        }
        #sploggedindropdown .navbar-dropdown .navbar-item:hover .icon {
            color:#669af7;
            opacity: 1;
            margin-right:0;
            right:0;
        }
        #sploggedindropdown .navbar-dropdown .navbar-item.has-text-danger .icon {
            position:relative;
            top:1px;
            right:7px;
            opacity: 0;
        }
        #sploggedindropdown .navbar-dropdown .navbar-item.has-text-danger:hover .icon {
            color:#f36d6d;
            opacity: 1;
            right:0;
        }
        .box {
            background-color:#20212b;
        }
        .panel-heading {
            background-color:#282a36;
            color:#ccc;
        }
        .panel .panel-block {
            background-color:#2c2f3e!important;
            border-color:rgb(22 23 29 / 19%)!important;
        }
        .panel-block.is-active .panel-icon {
            color:#2dd3b4;
        }
        .spmForumPost {
            border-color:rgb(22 23 29 / 19%)!important;
        }
        .ribbon {
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }
        .card {
            background-color:rgb(56 61 88 / 57%);
            border-radius:4px;
        }
        .column hr {
            background-color:transparent!important;
        }
        .footer {
            background-color:#21232d!important;
        }
        .tabs ul {
            border-color:#383a4c!important;
        }
        .tabs.is-boxed li.is-active a {
            background-color:#364e65!important;
            color:#fff!important;
        }
        .tabs.is-boxed li.is-active a .icon {
            transform: scale(1.4);
        }
        .tabs a {
            border-bottom:1px solid #383a4c!important;
            border:none!important;
        }
        .tabs a:hover {
            background-color:#353748!important;
        }
        .tabs a .icon {
            transition: transform .2s ease-in-out;
            margin-right:6px;
        }
        .tabs a:hover .icon {
            transform: scale(1.4);
        }
        input {
            background-color:#34374c!important;
            border-color:#34374c!important;
            color:#eee!important;
        }
        input::placeholder {
            color:#eee;
        }
        .button.is-success {
            background-color:#19843e!important;
        }
        .button.is-info {
            background-color:#155f9e!important;
        }
        .button.is-danger {
            background-color:#b72542!important;
        }
        .modal-card-head {
            background-color:#222633!important;
            border-color:#425065!important;
        }
        .modal-card-head .modal-card-title {
            color:#eee!important;
        }
        .modal-card-body {
            background-color:#2d3242!important;
        }
        .modal-card-foot {
            background-color:#222633!important;
            border-color:#425065!important;
        }
        .pagination-previous {
            color:#eee!important;
        }
        .pagination-next {
            color:#eee!important;
        }
        .input, .select select, .textarea {
            background-color:#3c3d4e!important;
            border-color:#3c3d4e!important;
            color:#eee!important;
        }
        .select:not(.is-multiple):not(.is-loading)::after {
            border-color:#fff!important;
        }
        .message.is-success {
            background-color:rgb(94 175 123 / 9%)!important;
        }
        .message.is-success .message-header {
            background-color:#2e884d!important;
        }
        .message.is-success .box {
            background-color:rgb(23 249 176 / 8%)!important;
        }
        .message.is-success .message-body {
            color:#37bd65!important;
        }
        .pricing-table.is-comparative {
            background-color:#111!important;
        }
        .pricing-table .pricing-plan .plan-header {
            background-color:#1b1d29!important;
            color:#eee!important;
        }
        .plan-price-amount {
            color:#fff;
        }
        .plan-price {
            background-color:#262b38!important;
        }
        .pricing-table .pricing-plan .plan-price {
            color:#fff;
        }
        .plan-price-currency {
            color:#30a730!important;
        }
        .plan-item {
            background-color:#1b1e27!important;
            border-color:#1b1e27!important;
            color:#fff!important;
        }
        .pricing-table .pricing-plan {
            background-color:#262b38!important;
            border-color:transparent!important;
        }
        .hero {
            background-color:transparent!important;
        }
        .media {
            border-color:#1b1e27!important;
        }
        .button.is-success.is-outlined {
            background-color: transparent!important;
        }
        .content blockquote {
            background-color: rgb(20 24 33 / 30%)!important;
            border-left-color: rgb(39 51 68 / 45%)!important;
        }
        .message.is-danger .message-header {
            background-color: #862f40!important;
        }
        .message.is-danger {
            background-color:rgb(132 35 57 / 15%)!important;
        }
        .message.is-danger .message-body {
            color:#f5889e!important;
        }

        `,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
        } else {
        style.appendChild(document.createTextNode(css));
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
function tooutlined() {
    themeName = 'Outlined'
    putSignal()
}
function toflawless() {
    themeName = 'Flawless'
    putSignal()
}
//////////////////////////

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
    image.setAttribute('style', 'margin-left: 10%; border-radius: 10px;')

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
    columns.setAttribute('style', 'margin-top: 9%;')
    columns.appendChild(createCard('https://cdn.discordapp.com/attachments/716672669163978815/763373338503807001/default.png', 'Default', 'Superium', 'default', 'todef()'))
    columns.appendChild(createCard('https://cdn.discordapp.com/attachments/746375338019258451/763327250963365898/black.png', 'PureBlack', 'Beriff', 'pureblack', 'toblack()'))
    columns.appendChild(createCard('https://cdn.discordapp.com/attachments/746638325615689748/763627256215502848/unknown.png', 'Outlined', 'Beriff', 'outlined', 'tooutlined()'))
    columns.appendChild(createCard('https://cdn.discordapp.com/attachments/763307392821362740/763636787166838784/unknown.png', 'Flawless', 'x_o', 'flawless', 'toflawless()'))
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

    //////////CLICKABLE NICKNAMES
    var media = document.querySelectorAll('.media')
    for (var i in media.length) {
        var media_content = media.children[1]
        var nickname_p = media_content.children[0].children[0]
        var nickname = media_content.children[0].children[0].children[0]
    }
})
}

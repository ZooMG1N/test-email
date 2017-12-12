var link = document.querySelector('.email-button');
var popup = document.querySelector('.email-popup');

link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.setAttribute("style", "background-color:rgba(138,75,250,.5);bottom:565px;display:block;left:52px;max-width:500px;position:absolute;right:0;top:85px;z-index:2");
});
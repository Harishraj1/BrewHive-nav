var menu_bar = document.getElementById("menu_bar")
var close_nav = document.getElementById("close_nav")
var side_nav = document.querySelector(".side_nav")
close_nav.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
menu_bar.addEventListener("click",function(){
    side_nav.style.right = "0%"
})
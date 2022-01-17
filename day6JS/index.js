window.history.pushState(null,"",window.location.href);

window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
};




document.getElementById('danger').addEventListener("click",()=>{
    alert("warning!!!");
});



var dialog=document.getElementById('dia');

document.getElementById('btn').addEventListener('click',function onOpen(){
  history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
     history.go(1);     }
  if(typeof dialog.showModal === "function" ){
    dialog.showModal();
  }
})

inner.addEventListener('click',function onClose(){
  // var length = history.length;
  //    history.go(-length);
  dialog.close();
      window.onpopstate=function(){
        window.location.replace("file:///home/ampa/training/day6JS/index.html")
      }
      
      
  
});

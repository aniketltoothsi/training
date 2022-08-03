
var dialog=document.getElementById('dia');

document.getElementById('btn').addEventListener('click',function onOpen(){
  history.pushState(null, null, window.location.href);
      
  if(typeof dialog.showModal === "function" ){
    dialog.showModal();
  }
})
window.onpopstate=function(){
 dialog.close()       
}
inner.addEventListener('click',function onClose(){

  dialog.close();
  history.back(); 
      
      
  
});



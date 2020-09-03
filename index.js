var add = document.getElementById('add');
var update=document.getElementById('update');
var remove = document.getElementById('remove');


add.addEventListener('click', function(){
  var list =document.getElementById('ulist');
  if(document.getElementById('inputtext').value.length==0)
  {
    alert('insert any text');

  }
  else{
    var inputext= document.getElementById('inputtext').value;
    var newli= document.createElement('li');
   var newtext= document.createTextNode(inputext);
   newli.appendChild(newtext);
   list.appendChild(newli);
   document.getElementById('inputtext').value="";

  }
 
  

})
update.addEventListener('click',function(){
  var list =document.getElementById('ulist');
  if(document.getElementById('inputtext').value.length==0)
  {
    alert('insert any text');

  }
  else{
  var inputext= document.getElementById('inputtext').value;
 var  firstele= document.getElementById('ulist').firstElementChild;
    var newli= document.createElement('li');
   var newtext= document.createTextNode(inputext);
   newli.appendChild(newtext);
   list.appendChild(newli);
   list.replaceChild(newli, firstele);
   document.getElementById('inputtext').value="";
  }

  
})
remove.addEventListener('click', function(){
  var list =document.getElementById('ulist');
  if(document.getElementById('ulist').childElementCount==0)
  {
    alert('No List');
  }
  else
  {
    var  removepele= document.getElementById('ulist').firstElementChild;
  list.removeChild(removepele);
  }
  

})



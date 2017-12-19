try{
window.oofURL="https://freesound.org/data/previews/44/44429_468340-lq.mp3";
req=new XMLHttpRequest();
req.open('GET',window.oofURL,true);
req.responseType='arraybuffer';
req.onload=function(){window.oof=req.response;for(var i=0;i<document.querySelectorAll('input').length;i++){document.querySelectorAll('input')[i].removeAttribute('disabled');}}
req.send();
}catch(e){alert(e);}

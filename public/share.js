if("share"in window.navigator){const e=document.getElementById("share");e.style.display="inline-flex",e.addEventListener("click",()=>{window.navigator.share({title:document.title,text:e.dataset.description,url:location.href})})}
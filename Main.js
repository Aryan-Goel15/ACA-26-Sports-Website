
var item = document.querySelectorAll(".t1");
console.log(item.length);
function IsVisible(e){
  var rect=e.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function ScrollUp(){
for(i=0;i<item.length;i++){
    if(IsVisible(item[i])){
        item[i].classList.add("t1v")
    }
}
}
window.addEventListener("scroll",ScrollUp);

for(i=0;i<item.length;i++){
    console.log(i);
}
console.log("HEHE");

let zindex=0
zahra()
setInterval(auto , 3000)

function zahra(){
  let items = document.getElementsByClassName("items")
  let point = document.querySelectorAll(".point span")
  if(zindex<0){
    zindex=6
  }else if(zindex>6){
    zindex=0
  }
  for(let i=0 ; i<items.length ;i++){
    items[i].className = items[i].className.replace("active" , "")
    point[i].className = point[i].className.replace("point-active" , "")

  }
  items[zindex].className+=" active"
  point[zindex].className+="point-active"

}
function btn(x){
  zindex+=x
  zahra()
}
function pointz(x){
  zindex=x
  zahra()
}
function auto(){
  zindex+=1
  zahra()
}
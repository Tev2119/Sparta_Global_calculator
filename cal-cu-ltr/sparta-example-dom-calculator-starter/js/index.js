var bottomNum = document.getElementsByClassName('buttonNum','operator');
// var ans = (bottomNum + bottomNum);
for (var i = 0; i<bottomNum.length; i++){
  bottomNum[i].addEventListener('click',clickButtons);
}
var operator = document.getElementsByClassName('operator');
// var ans = (bottomNum + bottomNum);
for (var p = 0; p<operator.length; p++){
  operator[p].addEventListener('click',selectOp);
}

function clickButtons(){
  var buttonClickedValue = this.innerHTML;
console.log(this.innerHTML, typeof buttonClickedValue);
if (!target.matches('buttonNum')) {
   return;
 }
alert( this.innerHTML)

}

function selectOp(value){
  var buttonClickedValue = this.innerHTML;
console.log(this.innerHTML, typeof buttonClickedValue);
}

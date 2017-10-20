let ketzDeli = [];
function takeANumber(array,name){
let n = array.indexOf(name);
let a = n + 1
return 'Welcome, ' + name + '. You are number ' + a + ' in line.';
}
function nowServing(array){
if(array.length==0){
return 'There is nobody waiting to be served!';
} else {
  return 'Currently serving ' + array[0] + '.';
  delete array[0];
}
}

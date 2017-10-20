let ketzDeli = [];
function takeANumber(katzDeliLine,name){
let n = katzDeliLine.indexOf(name);
let a = n + 1
return 'Welcome, ' + name + '. You are number ' + a + ' in line.';
}
function nowServing(katzDeliLine){
if(katzDeliLine.length==0){
return 'There is nobody waiting to be served';
} else {
  return 'Currently serving ' + katzDeliLine[0] + '.';
  delete katzDeliLine[0];
}
}

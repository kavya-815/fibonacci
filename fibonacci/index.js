//var n=Number(document.getElementById("num").value);
//var n=   parseInt(document.getElementById("num").value);
var n=   parseInt(document.getElementById("num").value);

function fibonacciSeries(n){

  var a=[];
  var f1,f2,f3;
  if(n===1){
    f1=0;
    a.push(f1);
    return "fibonacci Sequence: "+a;
  }
  else if(n===2){
    f1=0;
    f2=1;
    a.push(f1);
    a.push(f2);
    return "fibonacci Sequence: "+a;
  }
  else{
    f1=0;
    f2=1;
    a.push(f1);
    a.push(f2);

    for(i=2;i<n;i++){
      f3=f1+f2;
      a.push(f3);
      f1=f2;
      f2=f3;
    }
    return "fibonacci Sequence: "+a;
  }
}

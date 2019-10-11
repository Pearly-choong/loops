console.log('testing');

//Loops

//for loops

// for (initial value; final value; increment/decrement){
//
// }


for (var i=0; i<10; i++) {
  // document.getElementById('result').textContent = '10';
  document.getElementById('result').textContent += i;
}

for (var i=10; i>0; i--) {
  document.getElementById('result2').textContent += i;
}


for (var i=0; i<25; i++) {
  for (var j=0; j<i; j++){
    document.getElementById('result3').innerHTML += '*';
  }
  document.getElementById('result3').innerHTML += '</br>';
}


var names = ['David', 'Chris', 'Maria', 'Luke', 'Jenny'];

 for (var j=0; j<5; j++){
   document.getElementById('result4').innerHTML += j;
   document.getElementById('result4').innerHTML += names[j];
   document.getElementById('result4').innerHTML += '</br>';
 }

 //do while loops
 var i=0;
 do {
   document.getElementById('result4').innerHTML += i ;
   i++;
 }while(i>5);

//while loops
// var i=0;
// while (i<5){
//   document.getElementById('result4').innerHTML += i;
//   i++;
// }

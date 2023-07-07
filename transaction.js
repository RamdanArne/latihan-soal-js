//var times = 10;
//for (var i=1; i<=times; i++) {
   // if (i>=5){
        //console.log(i)
  //  }
//}

// var times =5;
// while (times>=0) {
    // console.log('hello world')
//    times--
// }

var step=0;
var finish=true;
while (finish==true) {
    if (step==100) {
        console.log('you reach', step , 'step, finish!')
        finish=false
    } else {
        step++;
        console.log(step)
    }
}


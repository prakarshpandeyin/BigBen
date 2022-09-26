var time = document.getElementById("time");
var lapbutton = document.getElementById("lap");
var startbutton = document.getElementById("start");

var display = null;
var second = 0;
    var minute = 0;
    var hour = 0;
    var hourappend=0;
    var minuteappend=0;
    var secondappend=0;
startbutton.addEventListener('click', function () {
  if (startbutton.innerText === "start") {
    lapbutton.innerText="lap"
    start.innerText = 'stop';
    
    
   
    display = setInterval(function () {

      second++;
      if (second == 60) {
        minute++;
        second = 0;
        if (minute == 60) {
          minute = 0;
          hour++;
          if (hour === 24) {
            hour = 0;
          }
        }
      }
     // console.log(hour, minute, second)


      let m = minute < 10 ? "0" + minute : minute;
      let s = second < 10 ? "0" + second : second;
      let h = hour < 10 ? "0" + hour : hour < 24 ? "0" + hour : hour;
      time.innerHTML = ` ${h} : ${m} : ${s}`;
      hourappend=h;
      minuteappend=m;
      secondappend=s;


    }, 1000)
  }
  else{
    startbutton.innerText='start';
    lapbutton.innerText="reset"
    clearInterval(display)
  }
});


var counter=0;

lapbutton.addEventListener('click',function()
{

 if(lapbutton.innerText==='lap')
 {
//  console.log(second)
  counter++;
 
 
  if(hourappend!==0 && secondappend!==0 &&secondappend!==0){

    var parent=document.createElement('div');
 
 var leftchild=document.createElement('span');
 leftchild.innerHTML=`lap ${counter} `;
 parent.appendChild(leftchild);
 var rightchild=document.createElement('span');

  rightchild.innerHTML=`${hourappend} :${minuteappend} : ${secondappend}`;
  parent.appendChild(rightchild);
  var ancestor = document.getElementById("ancestor");
  ancestor.appendChild(parent);
  }
  
 }
 else{
  
   second = 0;
   minute = 0;
   hour = 0;
   time.innerHTML=`00 : 00 : 00`;
   lapbutton.innerText='lap'
  

 }
 });
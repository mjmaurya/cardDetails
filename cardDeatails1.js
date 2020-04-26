var inner=document.querySelector(".flip-box-inner");
    var input=document.querySelector(".inputto");
    var numbers=document.querySelector(".numbers")
    var dates=document.querySelector(".dates")
    var codes=document.querySelector(".codes")
    var names=document.querySelector(".names")
    input.addEventListener("keyup",function() {
        inner.style.transform="rotateX(180deg)";
        var ans=document.querySelector(".inputto").value;
        if (ans.length==4 || ans.length==9 || ans.length==14) {
            input.value=ans+" ";
        }
        numbers.innerText=input.value;   
    });
    document.querySelector(".inputdate").addEventListener("keyup",function(){
      var date=document.querySelector(".inputdate").value;
      if (date.length==2) {
        date=date+"/";
        document.querySelector(".inputdate").value=date;
      }
      dates.innerText=document.querySelector(".inputdate").value
    });
    document.querySelector(".inputcvv").addEventListener("keyup",function(){
      codes.innerText=document.querySelector(".inputcvv").value
    });
    document.querySelector(".inputname").addEventListener("keyup",function(){
      names.innerText=document.querySelector(".inputname").value
    });
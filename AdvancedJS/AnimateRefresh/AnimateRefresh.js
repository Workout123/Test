(
  function ()
  {
      //console.log("In here");
      //document.getElementById("Move Text").onclick=function () {SetMotion()};
      //document.getElementById("Refresh").onclick=function () {SetRefresh()};

      document.getElementById("Move Text").addEventListener("click", DoEverything);
      //document.getElementById("Refresh").addEventListener("click", Refresh);

      function DoEverything()
      {
        var pos=0;
        var IntervalVal;
        var MoveText=null;
        document.getElementById("Refresh").addEventListener("click", Refresh);
        //function Initialize()

          MoveText=document.getElementById("TextToMove");
          MoveText.style.position="relative";
          MoveText.style.left='0px';
          console.log("Initialized");

        function Refresh()
        {
          pos=0;
          clearInterval(IntervalVal);
          SetMotion();
        }

        function Animate()
        {
          pos++;
          MoveText.style.left=pos+'px';
        }

        function SetMotion()
        {
          //console.log("In SetMotion");
          IntervalVal=setInterval(Animate, 5);
        }

        return SetMotion();
        //alert ("Hello World!");
      }

  }
)();

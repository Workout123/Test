


(
  function ()
  {
      document.getElementById("Move Text").addEventListener("click", DoEverything);
      //document.getElementById("Refresh").addEventListener("click", Refresh);

      function DoEverything()
      {
        var pos=new Array(), val=0, curr=0;
        var IntervalVal;
        var MoveText=new Array();
        //var start, stop, timetaken=new Array();
        document.getElementById("Refresh").addEventListener("click", Refresh);

        var NumList=new Array("TextToMove1", "TextToMove2", "TextToMove3", "TextToMove4", "TextToMove5");

        for(var i=0; i<NumList.length; i++)
        {
          Initialize(NumList[i], i);
          //timetaken[i]=0;
        }

        function Initialize(Stringval, i)
        {
          MoveText[i]=document.getElementById(Stringval);
          MoveText[i].style.position="relative";
          MoveText[i].style.left='0px';
          pos[i]=0;
          //console.log(screen.width);
        }

        function Refresh()
        {
          for(var i=0; i<NumList.length; i++)
          {
            pos[i]=0;
            //timetaken[i]=0;
            Initialize(NumList[i], i);
          }
          curr=0;
          clearInterval(IntervalVal);
          //SetMotion();
          Animate();
        }

        function MoveStep(i)
        {
            //start=performance.now();
            pos[i]++;
            MoveText[i].style.left=pos[i]+'px';
            //stop=performance.now();
            //timetaken[i]+=(stop-start);
            //console.log(timetaken[i]);

        }

        //Works
        /*function CallNextElement()
        {
          MoveStep(0);
          for(var i=0; i<NumList.length-1; i++)
          {
            if(pos[i]>screen.availWidth/2)
              MoveStep(i+1);
          }
        }*/

        //Experiment
        //curr=0;
        function CallNextElement()
        {
          if(curr<NumList.length)
          {
            if(pos[curr]>screen.availWidth/2)
              curr++;
            MoveStep(curr);
          }
        }

        //Works
        function Animate()
        {
          //console.log("In SetMotion");
          IntervalVal=setInterval(CallNextElement, 5);
        }

        //Experiment
        /*curr=0;
        function Animate()
        {
          while(curr<NumList.length)
          {
            if(pos[curr]>screen.availWidth/2)
              curr++;
            MoveStep(curr);
          }
        }*/

        return Animate();
        //alert ("Hello World!");
      }

  }
)();

var box = document.getElementById("box");
        var pos = 0;
        var posTop = 0;
        var posRight = 0;
        var posBottom = 0;
        function move(){
            if(pos < 350){
                pos += 10
                box.style.left = pos+'px';
                box.style.background = 'red';
            }else if(pos >= 350 && posTop < 350)
            {
                posTop += 10
                box.style.top = posTop+'px';
            }else if(pos >= 350 && posTop <= 350 && posRight <= 340){
                posRight += 10
                box.style.left = (pos - posRight)+'px';
                box.style.background = 'aqua';
            }else if(pos >= 350 && posBottom<=340){
                posBottom += 10
                box.style.top = (posTop - posBottom)+'px';
                box.style.background = 'yellow';
            }else{
                clearInterval();
                // pos = 0
                // posRight = 0
                // posBottom = 0
                // posTop = 0
            }
            setTimeout(function(){
                box.style.background = 'red'
            }, 500)
        }
       setInterval(move,50)
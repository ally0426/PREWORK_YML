        document.getElementById("button1").addEventListener("click", function(){

            document.getElementById("box").style.height = "450px";
            document.getElementById("box").style.width = "450px";

        });

        document.getElementById("button2").addEventListener("click", function(){

            document.getElementById("box").style.color = "blue";

        });

        document.getElementById("button3").addEventListener("click", function(){

            document.getElementById("box").fadeOut(5000);

        });

        document.getElementById("button4").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.wide = "150px";

        });
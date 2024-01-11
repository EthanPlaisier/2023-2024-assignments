//wanneer je scherm/browser is geladen, wordt je canvas getoond.
 window.addEventListener("load", function () {
    const canvas = document.querySelector("canvas");
    //voeg context toe
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    let painting = false

        function startPosition() {
            painting = true;
            ctx.beginPath();
            ctx.moveTo(event.clientX, event.clientY)
            draw(event);
            console.log("painting")
        };

        function finishedPosition() {
            painting = false;
            console.log("stopped")
        };

        function draw() {
            if(!painting) return;
            ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
            console.log("drawing")
        };

    const ctx = canvas.getContext("2d");
    //geef canvas de hoogte en breedte van je browser
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    //drie vierkanten met de kleuren blauw, rood en geel
//    ctx.fillStyle = "blue";
//    ctx.fillRect(50, 50, 200,200);
//    ctx.fillStyle = "red";
//    ctx.fillRect(60, 60, 200,200);
//    ctx.fillStyle = "yellow";
//    ctx.fillRect(70, 70, 200,200);
    })


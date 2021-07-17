import React, { useEffect } from 'react';
import { Controls } from '../components'
const Canvas = () => {
    useEffect(() => {
        let canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.globalCompositeOperation = 'destination-over';
        // let size = 0;
        let number = 50;
        let scale = .0005;
        let lineW = 10;
        let opacity = .7;
        let opacity2 = .9;
        function drawPhi() {
            let angle = number;
            let radius = scale * Math.sqrt(number);
            let x = radius * Math.sin(angle) + canvas.width / 2 + opacity2;
            let y = radius * Math.cos(angle) + canvas.height / 2 + lineW;
            ctx.strokeStyle = number % 2 == 0 ? `rgba(105,105,105,${opacity2})` : `rgba(0,0,0,${opacity})`;
            ctx.fillStyle =
                number % 2 == 0 ? `rgba(255,255,255,${opacity})` :
                    number % 3 === 0 ? `rgba(0,255,0,${opacity2})` : `rgba(255,0,0,${opacity2})`;
            ctx.lineWidth = lineW + 5;
            ctx.beginPath();
            ctx.arc(x, y, Math.PI, number, Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            number += 1
            lineW -= .005
            scale -= .009
            opacity -= .00001
            opacity2 -= .00001
        };
        function animate() {
            drawPhi();
            requestAnimationFrame(animate);
        };
        animate();
    });

    return (
        <div>
            <canvas id='canvas1'
                // style={
                //     {position:'absolute',top:0,left: 0, maxHeight:'100vh',maxWidth:'100%' }
                // } 
                >
            </canvas>
 
        </div>
    )
};

export default Canvas;
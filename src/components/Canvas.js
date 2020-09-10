import React, { useState, useEffect } from 'react';


const Canvas = () => {

    useEffect(() => {


        let canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.globalCompositeOperation = 'destination-over'

        // let size = 0;

        let number = 0;
        // let scale = Math.random() * 10 / Math.PI * 1 ;
        let scale = 3
        let lineW = .008

        function drawFlower() {
            let angle = number * 1
            let radius = scale * Math.sqrt(number + angle);
            let x = radius * Math.sin(angle) + canvas.width / 2;
            let y = radius * Math.cos(angle) + canvas.height / 2;
            ctx.fillStyle = 'black';
            // ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
            ctx.strokeStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
            // ctx.strokeStyle = 'black'
            ctx.lineWidth = lineW
            // ctx.lineWidth = 5
            ctx.beginPath();
            ctx.arc(x, y, 80, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            // number+  Math.random() * 100 + 5
            number++
            lineW += .01
            scale += .01
            // lineW = 3 + Math.random() * 10




        }

        function animate() {
            // ctx.clearRect(0,0,canvas.width, canvas.height)
            drawFlower();
            // if(number > 300) return ;
            requestAnimationFrame(animate);

        }
        animate();
    });

    return (
        <div >

            <canvas id='canvas1'
                style={
                    { position: 'absolute', top: '0', left: '0' }
                } >


            </canvas> </div>
    )

}

export default Canvas;
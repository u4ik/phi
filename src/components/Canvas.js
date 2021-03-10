import React, { useEffect } from 'react';

const Canvas = () => {
    useEffect(() => {
        let canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.globalCompositeOperation = 'destination-over';
        // let size = 0;
        let number = 0;
        let scale = .9;
        let lineW = .3;
        let opacity = 0;
        let opacity2 = 0;
        function drawPhi() {
            let angle = number;
            let radius = scale * Math.sqrt(number + angle);
            let x = radius * Math.sin(angle) + canvas.width / 2;
            let y = radius * Math.cos(angle) + canvas.height / 2;
            ctx.fillStyle = number % 2 == 0 ? `rgba(255,255,255,${opacity2})` : `rgba(0,0,0,${opacity2})`;
            ctx.strokeStyle = number % 2 == 0 ? `rgba(0,0,0,${opacity})` : `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = lineW;
            ctx.beginPath();
            ctx.arc(x, y, Math.PI, 0, Math.PI * 3);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            number++
            lineW += .1
            scale += .001
            opacity += .0001
            opacity2 += .001
        };
        function animate() {
            drawPhi();
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <div>
            <canvas id='canvas1'
                style={
                    { position: 'absolute', top: '0', left: '0' }
                } >
            </canvas>
        </div>
    )
};

export default Canvas;
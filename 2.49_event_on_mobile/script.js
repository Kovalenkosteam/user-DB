document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    // touch(start, end, move, enter, leave, cancel)
    box.addEventListener('touchstart', (event) => {
        // box.style.backgroundColor='green';
        // box.style.fontSize=(event.touches[0].screenX)/2+'px';
        let fingOne = event.touches[0].screenX;
        let fingTwo = event.touches[0].screenY;
        let colorX=Math.round((fingOne*255)/360);
        let colorY=Math.round((fingTwo*255)/708);
        let colorZ=Math.round((colorX+colorY)/2);
        console.log(`rgb(${colorX}, ${colorY}, ${(colorX+colorY)/2})`);
        box.style.backgroundColor = `rgb(${colorX}, ${colorY}, ${colorZ})`;
    });
});

//touches, 
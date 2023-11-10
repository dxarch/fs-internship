const shape = document.querySelector('.shape--js_request_animation');

let position = 0;
let direction = 1;
const speed = 5;

const moveShape = () => {
    if (position <= 0){
        direction = 1;
    } else if (position >= 1030) {
        direction = -1;
    }

    position += direction * speed;
    shape.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(moveShape)
}

requestAnimationFrame(moveShape);
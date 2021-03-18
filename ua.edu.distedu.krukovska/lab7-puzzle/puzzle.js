let imagesPaths = [
    './images/puzzle1.jpg',
    './images/puzzle2.jpg',
    './images/puzzle3.jpg',
    './images/puzzle4.jpg'
]

function setOnMouseMoveListener(image) {
    return function (e) {
        image.style.left = e.pageX - image.offsetWidth / 2 + 'px';
        image.style.top = e.pageY - image.offsetHeight / 2 + 'px';
    };
}

function loadImages() {
    let puzzleHolder = document.getElementById('puzzle-parts');

    for (let i = 0; i < imagesPaths.length; i++) {
        let image = document.createElement('img');
        image.src = imagesPaths[i];
        image.id = 'image' + i;
        image.alt = 'puzzle part ' + i;
        image.style.border = '1px solid black';
        image.style.position = 'absolute';

        image.onmousemove = setOnMouseMoveListener(image);

        image.onclick = function () {
            image.onmousemove = null;
        }

        image.onmouseout = function () {
            image.onmousemove = setOnMouseMoveListener(image);
        }

        image.style.left = (Math.random() *
            puzzleHolder.offsetWidth) - image.offsetWidth * 2 + 'px';
        image.style.top = (Math.random() *
            puzzleHolder.offsetHeight) - image.offsetHeight * 2 + 'px';

        puzzleHolder.appendChild(image);
    }


}


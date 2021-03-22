let imagePaths = [
    './images/puzzle1.jpg',
    './images/puzzle2.jpg',
    './images/puzzle3.jpg',
    './images/puzzle4.jpg'
]

let foundPuzzlePieces = 0;

function setOnMouseMoveListener(image) {
    return function (e) {
        image.style.left = e.pageX - image.offsetWidth / 2 + 'px';
        image.style.top = e.pageY - image.offsetHeight / 2 + 'px';
    };
}

function loadImages() {
    let puzzleHolder = document.getElementById('puzzle-parts');

    for (let i = 0; i < imagePaths.length; i++) {
        let image = document.createElement('img');
        image.src = imagePaths[i];
        image.id = "image" + i;
        image.alt = 'puzzle part ' + i;
        image.style.border = '1px solid black';
        image.style.position = 'absolute';

        image.onmousemove = setOnMouseMoveListener(image);

        image.onclick = function (e) {
            image.onmousemove = null;

            console.log(image.id)
            centerImages(image.id, e);
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

function coordinatesMatch(mouseX, mouseY, rect) {
    return mouseX > rect.left && mouseX < rect.right && mouseY > rect.top && mouseY < rect.bottom;
}

function setBackgroundPicture(container, imageId, imagePath) {
    document.getElementById(imageId).hidden = true;
    container.style.backgroundImage = "url(" + imagePath + ")";
    foundPuzzlePieces++;
}

function centerImages(imageId, e) {

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let container1 = document.getElementById("puzzle-part1");
    let container2 = document.getElementById("puzzle-part2");
    let container3 = document.getElementById("puzzle-part3");
    let container4 = document.getElementById("puzzle-part4");

    if (imageId === "image0" && coordinatesMatch(mouseX, mouseY, container1.getBoundingClientRect())) {
        setBackgroundPicture(container1, "image0", "images/puzzle1.jpg");
    } else if (imageId === "image1" && coordinatesMatch(mouseX, mouseY, container2.getBoundingClientRect())) {
        setBackgroundPicture(container2, "image1", "images/puzzle2.jpg");
    } else if (imageId === "image2" && coordinatesMatch(mouseX, mouseY, container3.getBoundingClientRect())) {
        setBackgroundPicture(container3, "image2", "images/puzzle3.jpg");
    } else if (imageId === "image3" && coordinatesMatch(mouseX, mouseY, container4.getBoundingClientRect())) {
        setBackgroundPicture(container4, "image3", "images/puzzle4.jpg");
    }

    if (foundPuzzlePieces === 4) {
        let allPuzzlePieces = document.getElementsByClassName('puzzle-spot');
        for (let i = 0; i < allPuzzlePieces.length; i++) {
            allPuzzlePieces[i].style.border = 'none';
        }
        alert("You completed the puzzle!");
    }
}


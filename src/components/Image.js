import React from "react";

function deleteImage() {
    let img = document.getElementById("image");
    img.remove();
}


function biggerImage() {
    let myImg = document.getElementById("image");
    let currWidth = myImg.clientWidth;
    let currHeight = myImg.clientHeight;
    if (currWidth >= 1200) {
        alert("You have reached the maximum size!");
    } else {
        myImg.style.width = (currWidth + 20) + "px";
        myImg.style.height = (currHeight + 20) + "px";
    }
}

function smallerImage() {
    let myImg2 = document.getElementById("image");
    let currWidth2 = myImg2.clientWidth;
    let currHeight2 = myImg2.clientHeight;
    if (currHeight2 <= 160) {
        alert("You have reached the minimum size!");
    } else {
        myImg2.style.width = (currWidth2 - 20) + "px";
        myImg2.style.height = (currHeight2 - 20) + "px";
    }
}

function addImage() {
    let img = document.getElementById("image-container");
    if (document.getElementById("image") === null) {
        img.insertAdjacentHTML('beforeend', `<img id="image"
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tbilisi_sunset-6.jpg/700px-Tbilisi_sunset-6.jpg"
                                                alt="Tbilisi Image"/>`)
    }
}

class Image extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <button onClick={addImage}>Додати</button>
                    <button onClick={biggerImage}>Збільшити</button>
                    <button onClick={smallerImage}>Зменшити</button>
                    <button onClick={deleteImage}>Видалити</button>
                </p>
                <a href="https://en.wikipedia.org/wiki/Tbilisi">
                    <div id="image-container"></div>
                    <img id="image"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tbilisi_sunset-6.jpg/700px-Tbilisi_sunset-6.jpg"
                         alt="Tbilisi"/></a>
            </div>
        )
    }
}

export default Image
var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/taonan_2.jpg';
images[1] = 'img/sps.jpg';
images[2] = 'img/chijkp.jpg';
images[3] = 'img/chijkc.jpg';
images[4] = 'img/nap.jpg';
images[5] = 'img/vjc.jpg';

function changeImg() {
    document.slide.src = images[i];
    if (i<images.length-1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()",time);
}

window.onload = changeImg;
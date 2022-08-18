var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image4.jpg') {
      myImage.setAttribute ('src','images/image5.jpg');
    } else {
      myImage.setAttribute ('src','images/image4.jpg');
    }
}
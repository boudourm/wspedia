
function imagesEffect(nbImages)
{
    var i;
    for(i=1;i<=nbImages;i++)
        imageeffect(i)
}
function imageeffect(id)
{
    // Get the modal
var modal = document.getElementById('myModal'+id);

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg'+id);
var modalImg = document.getElementById("img0"+id);
var captionText = document.getElementById("caption"+id);


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  var temp = modalImg.style.backgroundColor;
  modalImg.style.backgroundColor = "white";
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[id-1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  modalImg.style.backgroundColor = temp;
}
}

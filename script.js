document.getElementById('background').addEventListener('click', background)
document.getElementById('picturechange').addEventListener('click', picturechange)
document.getElementById('switchback').addEventListener('click', switchback)

function background () {
  document.getElementById('body').style.backgroundColor = 'pink'
}
// This function changes the body, because the body in the HTML is named body, and the event listner on line 1 finds where the ids are, on the HTML and it branches the together

function picturechange () {
  document.getElementById('paragraph').style.color = 'magenta'
  document.getElementById('picture').src =
  'Aventador.jpg'
  document.getElementById('picture').src =
  'Lamborghini Huracan.jpg'
  document.getElementById('paragraph').innerHTML =
  'This is a Lamborghini Huracan'
}

// This function connects to line 2 which basically, tells the event listner to locate the ids, which correlate with the ', and to also replace them with the innerHTML or the src, after it figures out what to replace, and where to replace it.

function switchback () {
  document.getElementById('picture').src =
  'CENTENARIO.jpg'
  document.getElementById('paragraph').innerHTML =
  'Its back to the Centenario!'
}

// This basically uses the same pictures, where it knows that to replace, and it knows to replace it with the ids labeled paragrapj and  picutes, due to the eventlistner on line 3, finding everything

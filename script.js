document.getElementById('background').addEventListener('click',background)
document.getElementById('picturechange').addEventListener('click',picturechange)

function background () {
  document.getElementById('body').style.backgroundColor = 'pink'
}

function picturechange () {
  document.getElementById('paragraph').style.color = "magenta"
  document.getElementById('picture').src = 
  'Aventador.jpg'
}

function picturechange () {
  document.getElementById('picture').src = 
  'Lamborghini Huracan.jpg'
  document.getElementById('paragraph').innerHTML =
  'This is a Lamborghini Huracan'
}



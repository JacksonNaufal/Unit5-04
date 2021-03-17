document.getElementById('background').addEventListener('click', background)
document.getElementById('picturechange').addEventListener('click', picturechange)
document.getElementById('switchback').addEventListener('click', switchback)

function background () {
  document.getElementById('body').style.backgroundColor = 'pink'
}

function picturechange () {
  document.getElementById('paragraph').style.color = 'magenta'
  document.getElementById('picture').src =
  'Aventador.jpg'
  document.getElementById('picture').src =
  'Lamborghini Huracan.jpg'
  document.getElementById('paragraph').innerHTML =
  'This is a Lamborghini Huracan'
}

function switchback () {
  document.getElementById('picture').src =
  'CENTENARIO.jpg'
  document.getElementById('paragraph').innerHTML =
  'Its back to the Centenario!'
}

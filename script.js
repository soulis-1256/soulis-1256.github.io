var box = document.getElementById('box');
box.addEventListener('mouseover', function() {
  this.classList.add('hovered');
});

box.addEventListener('mouseout', function() {
  this.classList.remove('hovered');
});

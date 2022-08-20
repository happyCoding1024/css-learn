const panels = document.querySelectorAll('.panel');

panels.forEach((panelElem) => {
  panelElem.addEventListener('click', () => {
    removeActiveClass();
    panelElem.classList.add('active');
  })
})

function removeActiveClass() {
  panels.forEach((panelElem) => {
    panelElem.classList.remove('active');
  })
}
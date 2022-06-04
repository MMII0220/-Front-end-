window.addEventListener('DOMContentLoaded', () => {
  const hearth = document.querySelectorAll('.hearth'),
    hearth__two = document.querySelectorAll('.hearth__two');

  /*Hover Сердца
   ******************/
  hearth.forEach((item, i) => {
    item.addEventListener('mouseover', (ev) => {
      /* const e = ev.target; */
      hearth__two[i].style.display = 'block';
      hearth__two[i].classList.add('hearth__two');
      /* hearth.classList.add('hearth'); */
      /* hearth__two.style.display = 'block'; */
      /* e.style.display = 'none'; */
    });
  });
  hearth__two.forEach((item, i) => {
    item.addEventListener('mouseout', (ev) => {
      const e = ev.target;

      hearth[i].classList.add('hearth');
      e.classList.remove('item');
      e.style.display = 'none';
    });
  });
});

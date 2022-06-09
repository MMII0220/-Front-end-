window.addEventListener('DOMContentLoaded', () => {
  const hearth__two = document.querySelectorAll('.hearth__two'),
    hearth__three = document.querySelectorAll('.hearth__three'),
        link = document.querySelectorAll('.link');

  /* let a, b;

  localStorage.setItem('a', hearth__two[0]);

  a = localStorage.getItem('a');

  console.log(a); */
  
  const click__hearth = () => {
    /*Clicked Hearth
     ********************/
    hearth__two.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (hearth__three[i].classList.contains != 'hide') {
          hearth__three[i].classList.remove('hide');
          hearth__three[i].classList.add('show');
        }
      });
    });
  };

  /* Remove Click Effect
   ***********************/
  const unclick__hearth = () => {
    hearth__three.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (hearth__three[i].classList.contains != 'show') {
          hearth__three[i].classList.remove('show');
          hearth__three[i].classList.add('hide');
        }
      });
    });
  };

  click__hearth();
  unclick__hearth();
});

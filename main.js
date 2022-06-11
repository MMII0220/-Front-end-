window.addEventListener('DOMContentLoaded', () => {
  const hearth__two = document.querySelectorAll('.hearth__two'),
    hearth__three = document.querySelectorAll('.hearth__three'),
    link = document.querySelectorAll('.link'),
    arr = [];

  let itemsArray = [],
    item;

  let stored = localStorage.getItem('items');

  if (stored) ;

  /*Clicked Hearth
   ********************/
  const click__hearth = () => {
    hearth__two.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (hearth__three[i].classList.contains != 'hide') {
          hearth__three[i].classList.remove('hide');
          hearth__three[i].classList.add('show');

          arr.push(hearth__three[i].parentNode);

          item = itemsArray.push(hearth__three[i].parentNode);

          localStorage.setItem('items', item);

          stored = localStorage.getItem('items');
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

  /* Add Cats to Favorite
   *************************/
  const add__favorite = () => {
    link[1].addEventListener('click', () => {
      hearth__three.forEach((item) => {
        if (item.classList.contains != 'flex') {
          item.parentNode.classList.remove('flex');
          item.parentNode.classList.add('hide');
        }
      });

      arr.forEach((key) => {
        key.append();
        key.classList.remove('hide');
        key.classList.add('flex');
      });
    });
  };

  /* Return All Cats Back
   ******************************/
  const return__cats = () => {
    link[0].addEventListener('click', () => {
      hearth__three.forEach((item) => {
        if (item.classList.contains != 'hide') {
          item.parentNode.classList.remove('hide');
          item.parentNode.classList.add('flex');
        }
      });
    });
  };

  click__hearth();
  unclick__hearth();
  return__cats();
  add__favorite();
});

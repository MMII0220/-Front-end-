window.addEventListener('DOMContentLoaded', () => {
  const hearth = document.querySelectorAll('.hearth__three'),
    link = document.querySelectorAll('.link'),
    asd = document.querySelectorAll('.cats');

  const catContainer = document.querySelector('.cats__collection');

  const cats = JSON.parse(localStorage.getItem('cats')) || [
    {
      img: './assets/img/cat1.png',
      id: 1,
      likedByMe: false,
    },
    {
      img: './assets/img/cat2.png',
      id: 2,
      likedByMe: true,
    },
    {
      img: './assets/img/cat3.png',
      id: 3,
      likedByMe: false,
    },
    {
      img: './assets/img/cat4.png',
      id: 4,
      likedByMe: false,
    },
    {
      img: './assets/img/cat5.png',
      id: 5,
      likedByMe: false,
    },
    {
      img: './assets/img/cat6.png',
      id: 6,
      likedByMe: false,
    },
    {
      img: './assets/img/cat7.png',
      id: 7,
      likedByMe: false,
    },
    {
      img: './assets/img/cat8.png',
      id: 8,
      likedByMe: false,
    },
    {
      img: './assets/img/cat9.png',
      id: 9,
      likedByMe: false,
    },
    {
      img: './assets/img/cat10.png',
      id: 10,
      likedByMe: false,
    },
    {
      img: './assets/img/cat11.png',
      id: 11,
      likedByMe: false,
    },
    {
      img: './assets/img/cat12.png',
      id: 12,
      likedByMe: false,
    },
    {
      img: './assets/img/cat13.png',
      id: 13,
      likedByMe: false,
    },
    {
      img: './assets/img/cat14.png',
      id: 14,
      likedByMe: false,
    },
  ];

  const setCats = () => {
    cats.forEach((cat) => {
      const catItem = document.createElement('picture');
      catItem.classList.add('cats');
      catItem.addEventListener('click', () => handleLiked(cat.id));
      catItem.innerHTML = `
      <img src="${cat.img}" alt="cat">
      <img class="hearth" src="./assets/icon/Vector.png" alt="hearth" />
      <div class="hearth__two"></div>
      ${
        cat.likedByMe
          ? '<img class="hearth__three" src="./assets/icon/Vector (2).png" alt="hearth" />'
          : ''
      }
      `;

      catContainer.appendChild(catItem);

      favoriteCats(cat.likedByMe, cat, catItem);
    });
  };

  const handleLiked = (id) => {
    cats.forEach((cat) => {
      if (cat.id === id) {
        cat.likedByMe = !cat.likedByMe;
      }
    });
    localStorage.setItem('cats', JSON.stringify(cats));
    //after click , replace cats with new cats
    catContainer.innerHTML = '';
    setCats();
  };

  const favoriteCats = (item, cat, block) => {
    /* Add Cats to Favorite
     ************************ */
    if (!cat.likedByMe) console.log(cat.likedByMe);
    link[1].addEventListener('click', () => {
      if (!cat.likedByMe) {
        block.classList.remove('flex');
        block.classList.add('hide');
      }
    });

    link[0].addEventListener('click', () => {
      if (!cat.likedByMe) {
        block.classList.remove('hide');
        block.classList.add('flex');
      }
    });
  };

  window.addEventListener('load', setCats);
});

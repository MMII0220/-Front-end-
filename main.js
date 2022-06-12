const catContainer = document.querySelector('.cats__collection');

const cats = JSON.parse(localStorage.getItem('cats')) || [{
  img: "./assets/img/cat1.png",
  id: 1,
  likedByMe: false,
},
{
  img: "./assets/img/cat2.png",
  id: 2,
  likedByMe: true,
},
{
  img: "./assets/img/cat3.png",
  id: 3,
  likedByMe: false,
},
{
  img: "./assets/img/cat4.png",
  id: 4,
  likedByMe: false,
}];

const setCats = () => {
  cats.forEach(cat => {
    const catItem = document.createElement('div');
    catItem.classList.add('cat');
    catItem.addEventListener('click',( ) =>handleLiked(cat.id) )
    catItem.innerHTML = `
    <div>
    <img src="${cat.img}" alt="cat">
    ${cat.likedByMe ? '<div>liked<div>' : ''}
    </div>
    `
    catContainer.appendChild(catItem);
  });
}

const handleLiked = (id) => {
  cats.forEach(cat => {
    if (cat.id === id) {
      cat.likedByMe = !cat.likedByMe;
    }
  }
  )
  localStorage.setItem('cats', JSON.stringify(cats));
  //after click , replace cats with new cats
  catContainer.innerHTML = '';
  setCats();
}

  window.addEventListener('load', setCats);
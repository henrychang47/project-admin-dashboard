document.querySelectorAll('.thumb').forEach(element => {
  element.addEventListener('click', (e) => {
    e.target.innerText =
      e.target.innerText === 'thumb_up' ? 'thumb_up_off_alt' : 'thumb_up';
    e.target.style.color =
      e.target.style.color === 'skyblue' ? 'black' : 'skyblue';
  });
});

document.querySelectorAll('.heart').forEach(element => {
  element.addEventListener('click', (e) => {
    e.target.innerText =
      e.target.innerText === 'favorite_border' ? 'favorite' : 'favorite_border';
    e.target.style.color =
      e.target.style.color === 'red' ? 'black' : 'red';
  });
});


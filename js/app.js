document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newList = document.createElement('ul');

    const l1 = document.createElement('li');
    const l2 = document.createElement('li');
    const l3 = document.createElement('li');
    l1.textContent = event.target.title.value;
    l2.textContent = event.target.author.value;
    l3.textContent = event.target.category.value;
    l1.classList = 'titleClass';
    l2.classList = 'authorClass';
    l3.classList = 'categoryClass';
    newList.appendChild(l1);
    newList.appendChild(l2);
    newList.appendChild(l3);
    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newList);
    form.reset();
  });

  const button = document.querySelector('#delete-all');

  button.addEventListener('click', () => {
    const readingList = document.querySelector('#reading-list');
    const children = document.querySelectorAll('ul');
    for(child of children){
      readingList.removeChild(child);
    };
  });
});

const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. \
                    Click an existing list item to change its text to something else or delete it.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  if(listContent === "" || listContent === null) {
    return;
  }
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    if(listContent === "" || listContent === null) {
      list.removeChild(this);
    }else {
      this.textContent = listContent;
    }
  }
}

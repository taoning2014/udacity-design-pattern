/**
 * Hide a cat
 * @param {HTMLELement} catElement - The cat element to hide
 */
function hideCat(catElement) {
  catElement.style.display = 'none';
}

/**
 * Hide all cat
 * @param {String} catClassName
 */
function hideAllCat(catClassName) {
  const containerList = document.getElementsByClassName(catClassName);
  Array.from(containerList).forEach(item => hideCat(item));
}

/**
 * Show a cat
 * @param {HTMLELement} catElement - The cat element to show
 */
function showCat(catElement) {
  catElement.style.display = 'block';
}

/**
 * Create and attached cat to DOM, also add click listener
 * @type {function}
 * @param {String} name
 * @param {String} img
 * @param {String} count - Initial counter value
 * @param {String} catsContainerId - Container Id
 * @return {HTMLELement} catContainerElem - cat container that has a cat inside
 */
function createCat(name, img, count = 0, catsContainerId) {
  const catsContainerElem = document.getElementById(catsContainerId);
  const catContainerElem = document.createElement('div');
  const nameElem = document.createElement('p');
  const imgElem = document.createElement('img');
  const counterElem = document.createElement('p');

  nameElem.innerHTML = name;
  imgElem.alt = `cat image with the cat name: ${name}`;
  imgElem.src = img;
  counterElem.innerHTML = count;

  catContainerElem.classList.add('cat-container');
  catContainerElem.appendChild(nameElem);
  catContainerElem.appendChild(imgElem);
  catContainerElem.appendChild(counterElem);
  catsContainerElem.appendChild(catContainerElem);

  hideCat(catContainerElem);

  imgElem.addEventListener('click', () => {
    count += 1;
    counterElem.innerHTML = count;
  });

  return catContainerElem;
}

/**
 * Create a list item and car element. Attach to DOM, also add click listener.
 * @type {function}
 * @param {String} name
 * @param {String} img
 * @param {String} count - Initial counter value
 * @param {String} catsContainerId - Cars container Id
 * @param {String} catsContainerId - List container Id
 * @return {HTMLELement} listItem - list item
 */
function createCatItem(name, img, count = 0, catsContainerId, listContainerId) {
  const listContainerElem = document.getElementById(listContainerId);
  const listItemElem = document.createElement('li');
  const linkElem = document.createElement('a');
  const catContainerElem = createCat(name, img, count, catsContainerId);

  linkElem.innerHTML = name;
  linkElem.href = '#';
  listItemElem.appendChild(linkElem);
  listContainerElem.appendChild(listItemElem);

  listItemElem.addEventListener('click', () => {
    hideAllCat('cat-container');
    showCat(catContainerElem);
  });

  return listItemElem;
}

createCatItem('Maoo', '/img/cat-1.jpg', 0, 'catsContainer', 'listContainer');
createCatItem('Muuu', '/img/cat-2.jpg', 0, 'catsContainer', 'listContainer');

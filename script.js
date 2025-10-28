const menu = document.getElementById('menu');
const pdfViewer = document.getElementById('pdfViewer');

async function loadMenu() {
  const response = await fetch('docs.json');
  const data = await response.json();

  Object.keys(data).forEach(section => {
    const li = document.createElement('li');
    li.textContent = section;

    const submenu = document.createElement('ul');
    data[section].forEach(doc => {
      const subLi = document.createElement('li');
      subLi.textContent = doc.key;
      subLi.addEventListener('click', () => {
        pdfViewer.src = doc.url;
      });
      submenu.appendChild(subLi);
    });

    li.appendChild(submenu);
    menu.appendChild(li);
  });
}

loadMenu();

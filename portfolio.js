function mobileMenuClicked() {
  document.getElementById('mobile-menu-icon').classList.toggle('expanded');
  document.getElementById('mobile-menu-items').toggleAttribute('hidden');
  document.getElementById('my-logo').toggleAttribute('hidden');
}

document
  .querySelector('#mobile-menu-icon')
  .addEventListener('click', mobileMenuClicked);

document.querySelectorAll('#mobile-menu-items li').forEach((item) => {
  item.addEventListener('click', mobileMenuClicked);
});

const previousWorks = [
  {
    prName: 'Multi Post Stories',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                standard dummy text.`,
    langs: ['css', 'html', 'bootstrap', 'Ruby'],
    links: [],
    refId: 0,
    image_src: './images/modal-portfolio.svg',
  },
  {
    prName: 'Profesional Art Printing',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    refId: 1,
    image_src: './images/modal-portfolio.svg',
    img: { desktop: 'bkg-4', mobile: '', alt: '' },
  },
  {
    prName: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    refId: 2,
    image_src: './images/modal-portfolio.svg',
    img: { desktop: 'bkg-2', mobile: '', alt: '' },
  },
  {
    prName: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    refId: 3,
    image_src: './images/modal-portfolio.svg',
    img: { desktop: 'bkg-3', mobile: '', alt: '' },
  },
  {
    prName: 'Profesional Art Printing',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    refId: 4,
    image_src: './images/modal-portfolio.svg',
    img: { desktop: 'bkg-4', mobile: '', alt: '' },
  },
  {
    prName: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    refId: 5,
    image_src: './images/modal-portfolio.svg',
    img: { desktop: 'bkg-2', mobile: '', alt: '' },
  },
  {
    prName: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    refId: 6,
    image_src: './images/modal-portfolio.svg',
    img: { desktop: 'bkg-3', mobile: '', alt: '' },
  },
];

const worksWrapper = document.getElementById('works-wrapper');
const workModal = document.getElementById('work-modal');
const workItem = document.getElementsByClassName('work-item');
workItem.onclick = () => {
  workModal.style.display = 'block';
};

function getLangsList(langs) {
  let list = '';
  if (langs) {
    langs.forEach((item) => {
      list += `<li class="stack-item">${item}</li>`;
    });
  }

  return list;
}

function getWorksArticleContent({
  prName, description, langs, refId,
}) {
  return `<h3>${prName}</h3>
              <p>
                ${description}
              </p> 
              <ul class="work-stack">
                ${getLangsList(langs)}                
              </ul> 
              <button class="btn-a" data-target=${refId}>See Project</button>`;
}

function setWorksFirstItem(details) {
  const firstItemImg = document.createElement('img');
  firstItemImg.className = 'work-item';
  firstItemImg.id = 'works-placeholder';
  firstItemImg.src = 'images/Img Placeholder.png';
  firstItemImg.alt = 'Multipost stories, a selection of privately personalized reads.';

  worksWrapper.appendChild(firstItemImg);

  const firstItemDetail = document.createElement('article');
  firstItemDetail.className = 'work-item';
  firstItemDetail.id = 'first-item';

  firstItemDetail.innerHTML = getWorksArticleContent(details);

  worksWrapper.appendChild(firstItemDetail);
}

function setWorksOtherDesktop(details) {
  const firstItemDetail = document.createElement('article');
  firstItemDetail.className = `work-item desktop ${details.img.desktop}`;

  firstItemDetail.innerHTML = getWorksArticleContent(details);

  return firstItemDetail;
}

function setWorksOtherMobile(details) {
  const firstItemDetail = document.createElement('article');
  firstItemDetail.className = 'work-item mobile';

  firstItemDetail.innerHTML = getWorksArticleContent(details, true);

  return firstItemDetail;
}

function setWorksOther(details) {
  worksWrapper.appendChild(setWorksOtherDesktop(details));
  worksWrapper.appendChild(setWorksOtherMobile(details));
}

function displayPreviousWorks() {
  for (let i = 0; i < previousWorks.length; i += 1) {
    if (i === 0) setWorksFirstItem(previousWorks[0]);
    else if (i > 0) setWorksOther(previousWorks[i]);
  }
}

function getWorkModalContent(id) {
  const data = previousWorks[id];
  return `
  <div class="content">
          <div><h3>${data.prName}</h3><span id="cancel-modal"></span></div>
          <ul class="work-stack">${getLangsList(data.langs)}</ul>
          <div class="modal-details">
            <img src="./images/modal-portfolio.svg" alt="Gist me">
            <div>
              <p>${data.description}</p>
              <div id="ref-buttons">
                <a href="https://google.com" id="live-preview" class="btn-a w-part" data-target=${
  data.refId
} target="_blank" rel="noopener noreferrer">Live Preview <span></span></a>
                  <a href="http://github.com/adamilare" id="source-code" class="btn-a w-part" data-target=${
  data.refId
} target="_blank" rel="noopener noreferrer">Source Code<span></span></a>
              </div>
            </div>
          </div>
        </div>
  `;
}
function closeModal(modal) {
  modal.style.display = 'none';
}
function launchWorkModal(dataId) {
  const modal = document.getElementById('work-modal');
  modal.innerHTML = getWorkModalContent(dataId);
  modal.querySelector('#cancel-modal').onclick = () => closeModal(modal);
  modal.querySelector('#cancel-modal').onclick = () => closeModal(modal);
  modal.querySelectorAll('a').forEach((btn) => {
    btn.onclick = () => closeModal(modal);
  });
  modal.style.display = 'flex';
}

function prepareModal() {
  document.querySelectorAll('.work-item button').forEach((item) => {
    item.onclick = () => {
      launchWorkModal(item.getAttribute('data-target'));
    };
  });
}

window.onload = () => {
  displayPreviousWorks();
  prepareModal();
};

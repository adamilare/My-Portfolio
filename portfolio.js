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
    image_src: '',
  },
  { img: { desktop: 'bkg-1', mobile: '', alt: '' } },
  {
    prName: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    img: { desktop: 'bkg-2', mobile: '', alt: '' },
  },
  {
    prName: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    img: { desktop: 'bkg-3', mobile: '', alt: '' },
  },
  {
    prName: 'Profesional Art Printing',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    img: { desktop: 'bkg-4', mobile: '', alt: '' },
  },
  {
    prName: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    img: { desktop: 'bkg-2', mobile: '', alt: '' },
  },
  {
    prName: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    langs: ['html', 'bootstrap', 'Ruby'],
    links: [],
    img: { desktop: 'bkg-3', mobile: '', alt: '' },
  },
];

const worksWrapper = document.getElementById('works-wrapper');

function getLangsList(langs) {
  let list = '';
  if (langs) {
    langs.forEach((item) => {
      list += `<li class="stack-item">${item}</li>`;
    });
  }

  return list;
}
function getWorksArticleContent(
  { prName, description, langs },
  isOther = false,
) {
  let innerHtml = `<h3>${prName}</h3>
              <p>
                ${description}
              </p> 
              <ul class="work-stack">
                ${getLangsList(langs)}                
              </ul> `;
  innerHtml += isOther ? '<a href="" class="btn-a">See Project</a>' : '';

  return innerHtml;
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

function setWorksSecondItem() {
  const firstItemDetail = document.createElement('article');
  firstItemDetail.className = 'work-item desktop bkg-1';

  firstItemDetail.innerHTML = `<h3></h3>
              <p></p>
              <ul class="work-stack"></ul>
              <a href="" class="btn-a">See Project</a>`;

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
  for (let i = 0; i < previousWorks.length; i + 1) {
    if (i === 0) setWorksFirstItem(previousWorks[0]);
    else if (i === 1) setWorksSecondItem(previousWorks[1]);
    else if (i > 1) setWorksOther(previousWorks[i]);
  }
}

window.onload = () => {
  displayPreviousWorks();
};

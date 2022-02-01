const speakersData = [
  {
    name: 'Miftah Amin',
    bio: 'Software Developer and Student at Microverse',
    paragraph:'Assistant developer since 2019 and now student in Microverse',
    img:'speaker1.png'
  },
  {
    name: 'Ibrahim Amin',
    bio: 'Senoir Business System Analyst',
    paragraph: 'Ibrahim amin is senior business developement specialist and started his career since 2013',
    img: 'speaker2.png',

  },
  {
    name: 'Stev Job',
    bio: 'CEO of Apple',
    paragraph: 'Stev job is ceo of apple and we are honor to have him as a speaker in our conference',
    img: 'speaker3.png',
  },
  {
    name: 'Nelson Mandela',
    bio: 'Mentor',
    paragraph: 'he fought for freedom and stayed in a jail cell for 27 years and refused to be released until South Africa was free',
    img: 'speaker4.png',
  },
  {
    name: 'Dolly Parton',
    bio: 'National Expert',
    paragraph: 'wore a coat made of rags to school every day and the other children laughed at her.',
    img: 'speaker5.png',
  },
  {
    name: 'Saleem Saee',
    bio: 'Senior professor talnin univeristy',
    paragraph: 'he fought for freedom and stayed in a jail cell for 27 years and refused to be released until South Africa was free',
    img: 'speaker6.png',
  },
];
function cardGenerator(img,name,bio,paragraph)
{
  const cardsContainer = document.createElement('div');
  const container = document.createElement('div');
  const cardsImage = document.createElement('div');
  const chess = document.createElement('img');
  const photo = document.createElement('img');
  const cardsInformation = document.createElement('div');
  const cardsBody = document.createElement('div');
  const fullName = document.createElement('h3');
  const title = document.createElement('h5');
  const description = document.createElement('small');

  cardsContainer.appendChild(container);
  container.appendChild(cardsImage);
  container.appendChild(cardsInformation);
  cardsImage.appendChild(chess);
  cardsImage.appendChild(photo);
  cardsInformation.appendChild(cardsBody);
  cardsBody.appendChild(fullName);
  cardsBody.appendChild(title);
  cardsBody.appendChild(description);

  cardsContainer.className = 'cards-container';
  container.className = 'container';
  cardsImage.className = 'cards-images';
  chess.className = 'image-inside-cards1';
  photo.className = 'image-inside-cards2';
  cardsInformation.className = 'cards-info';
  cardsBody.className = 'cards-body';
  fullName.className = 'cards-name';
  title.className = 'cards-title';
  description.className = 'cards-small';

  document.querySelector('.speakers-data').appendChild(cardsContainer);
  photo.src = '/images/speakers/'+img;
  chess.src ='/images/chess-bg.png';
  fullName.innerText = name;
  title.innerText = paragraph;
  description.innerText = bio;
}

for (let i = 0; i < speakersData.length; i++) {
  cardGenerator(speakersData[i].img,speakersData[i].name,speakersData[i].paragraph,speakersData[i].bio)
  
}
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const role = document.querySelector('.role');
const username = document.querySelector('.username');

const testimonials = [
  {
    name: 'Rishabh Gupta',
    position: 'Senior Python Developer',
    photo: 'https://randomuser.me/api/portraits/men/85.jpg',
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. He stresses on good, clean code and pays attention to the details.",
  },
  {
    name: 'Deepanshi Shukla',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it.',
  },
  {
    name: 'Ritik Saini',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time.",
  },
  {
    name: 'Rishika Gupta',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "This guy does everything he can to get the job done and done right.",
  },
  {
    name: 'Deepali Gupta',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "I had concerns that due to a tight deadline this project couldn't be done, but this guy proved me wrong.",
  },
  {
    name: 'Purnima Tripathi',
    position: 'Accountant',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: 'This guy is a top-notch designer and front-end developer. He communicates well, works fast, and produces quality work.',
  },
  {
    name: 'Virendra Sahu',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic.',
  },
];

let idx = 0;
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx >= testimonials.length) {
    idx = 0;
  }
}

updateTestimonial(); // Initial call
setInterval(updateTestimonial, 10000);

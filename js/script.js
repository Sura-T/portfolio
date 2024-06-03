let menuContainer = document.querySelector('.a-right');
let menu = document.querySelector('.header-right');
menuContainer.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
let progressBars = document.getElementsByClassName('progress-bar');

for (let i = 0; i < progressBars.length; i++) {
    progressBars[i].style.width = progressBars[i].getAttribute('data-width') + '%';
}

let certificateContainer = document.querySelector('.certificate-container');
let certificates = document.querySelectorAll('.certificate');
certificates.forEach(function(certificate) {
  certificate.addEventListener('click', function() {
    certificate.style.zIndex = 1;
    certificate.style.transform = 'translateZ(0px)';
  });
});

certificateContainer.addEventListener('mouseover', function(event) {
  let hoveredCertificate = event.target.closest('.certificate');
  hoveredCertificate.style.zIndex = 1;
  hoveredCertificate.style.transform = 'translateZ(0px)';
});

certificateContainer.addEventListener('mouseout', function(event) {
  let hoveredCertificate = event.target.closest('.certificate');
  hoveredCertificate.style.zIndex = 0;
  hoveredCertificate.style.transform = 'translateZ(-100px)';
});


let projectContainer = document.querySelector('.project-container');

let projects = document.querySelectorAll('.project');

projects.forEach(function(project) {
  project.addEventListener('click', function() {
    window.open(project.querySelector('.btn').getAttribute('href'), '_blank');
  });
});


let experienceContainer = document.querySelector('.experience-container');
let experiences = document.querySelectorAll('.experience');

experiences.forEach(function(experience) {
  experience.addEventListener('click', function() {
    experience.querySelector('p').style.display = 'block';
  });
});


experiences.forEach(function(experience) {
  experience.querySelector('p').style.display = 'none';
});

let educationContainer = document.querySelector('.education-container');


let educations = document.querySelectorAll('.education');


educations.forEach(function(education) {
  education.addEventListener('click', function() {
    education.querySelector('p').style.display = 'block';
  });
});


educations.forEach(function(education) {
  education.querySelector('p').style.display = 'none';
});


let testimonialsContainer = document.querySelector('.testimonials-container');


let testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach(function(testimonial) {
  testimonial.addEventListener('click', function() {
    testimonial.querySelector('p').style.display = 'block';
  });
});


testimonials.forEach(function(testimonial) {
  testimonial.querySelector('p').style.display = 'none';
});


let form = document.querySelector('form');


form.addEventListener('submit', function(event) {
  event.preventDefault();

 
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;

 
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
  } else {
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Your message has been sent!');
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    };
    xhr.send(encodeURI('name=' + name + '&email=' + email + '&message=' + message));
  }
});



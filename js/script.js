// This is a simple example of JavaScript code for a portfolio website.
// It doesn't do much, but you can use it as a starting point for your own code.

// You can use JavaScript to add interactivity to your website.
// For example, you could use it to create a skill bar that shows your proficiency in a particular skill.

// Here's an example of how you could use JavaScript to create a simple skill bar:

// Get the progress bar elements
var progressBars = document.getElementsByClassName('progress-bar');

// Loop through the progress bar elements
for (var i = 0; i < progressBars.length; i++) {
    // Set the width of the progress bar based on the data-width attribute
    progressBars[i].style.width = progressBars[i].getAttribute('data-width') + '%';
}

// Get the certificate container element
var certificateContainer = document.querySelector('.certificate-container');

// Get the certificate elements
var certificates = document.querySelectorAll('.certificate');

// Add event listeners to the certificates
certificates.forEach(function(certificate) {
  certificate.addEventListener('click', function() {
    // Bring the clicked certificate to the front
    certificate.style.zIndex = 1;
    certificate.style.transform = 'translateZ(0px)';
  });
});

// Add event listeners to the certificate container
certificateContainer.addEventListener('mouseover', function(event) {
  // Get the hovered certificate
  var hoveredCertificate = event.target.closest('.certificate');
  
  // Bring the hovered certificate to the front
  hoveredCertificate.style.zIndex = 1;
  hoveredCertificate.style.transform = 'translateZ(0px)';
});

certificateContainer.addEventListener('mouseout', function(event) {
  // Get the hovered certificate
  var hoveredCertificate = event.target.closest('.certificate');
  
  // Send the hovered certificate back to its original position
  hoveredCertificate.style.zIndex = 0;
  hoveredCertificate.style.transform = 'translateZ(-100px)';
});

// Get the project container element
var projectContainer = document.querySelector('.project-container');

// Get the project elements
var projects = document.querySelectorAll('.project');

// Add event listeners to the projects
projects.forEach(function(project) {
  project.addEventListener('click', function() {
    // Open the project in a new tab
    window.open(project.querySelector('.btn').getAttribute('href'), '_blank');
  });
});

// This is a simple example of JavaScript code for a portfolio website.
// It doesn't do much, but you can use it as a starting point for your own code.

// You can use JavaScript to add interactivity to your website.
// For example, you could use it to create a timeline of your work experience.

// Here's an example of how you could use JavaScript to create a simple timeline:

// Get the experience container element
var experienceContainer = document.querySelector('.experience-container');

// Get the experience elements
var experiences = document.querySelectorAll('.experience');

// Add event listeners to the experiences
experiences.forEach(function(experience) {
  experience.addEventListener('click', function() {
    // Show the details of the clicked experience
    experience.querySelector('p').style.display = 'block';
  });
});

// Hide the details of the experiences by default
experiences.forEach(function(experience) {
  experience.querySelector('p').style.display = 'none';
});

// This is a simple example of JavaScript code for a portfolio website.
// It doesn't do much, but you can use it as a starting point for your own code.

// You can use JavaScript to add interactivity to your website.
// For example, you could use it to create a timeline of your education.

// Here's an example of how you could use JavaScript to create a simple timeline:

// Get the education container element
var educationContainer = document.querySelector('.education-container');

// Get the education elements
var educations = document.querySelectorAll('.education');

// Add event listeners to the educations
educations.forEach(function(education) {
  education.addEventListener('click', function() {
    // Show the details of the clicked education
    education.querySelector('p').style.display = 'block';
  });
});

// Hide the details of the educations by default
educations.forEach(function(education) {
  education.querySelector('p').style.display = 'none';
});

// This is a simple example of JavaScript code for a portfolio website.
// It doesn't do much, but you can use it as a starting point for your own code.

// You can use JavaScript to add interactivity to your website.
// For example, you could use it to create a carousel of testimonials.

// Here's an example of how you could use JavaScript to create a simple carousel:

// Get the testimonials container element
var testimonialsContainer = document.querySelector('.testimonials-container');

// Get the testimonial elements
var testimonials = document.querySelectorAll('.testimonial');

// Add event listeners to the testimonials
testimonials.forEach(function(testimonial) {
  testimonial.addEventListener('click', function() {
    // Show the details of the clicked testimonial
    testimonial.querySelector('p').style.display = 'block';
  });
});

// Hide the details of the testimonials by default
testimonials.forEach(function(testimonial) {
  testimonial.querySelector('p').style.display = 'none';
});

// This is a simple example of JavaScript code for a portfolio website.
// It doesn't do much, but you can use it as a starting point for your own code.

// You can use JavaScript to add interactivity to your website.
// For example, you could use it to validate the contact form.

// Here's an example of how you could use JavaScript to validate the contact form:

// Get the form element
var form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var message = document.querySelector('#message').value;

  // Validate the form data
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
  } else {
    // Send the form data to a server-side script
    // (This is just an example, you would need to create your own server-side script)
    var xhr = new XMLHttpRequest();
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
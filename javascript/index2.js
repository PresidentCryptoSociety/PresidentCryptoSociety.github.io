board_positions = {
  president: {
    title: "President",
    name: "Benjamin L. Brückner",
    image: "president.jpeg",
    people_image: "president.jpeg",
    short_description: "As President, I lead and assist the Board in growing and designing the society each and every day.",
    email: "president@cryptosocietystgallen.club"
    },
  vice_president: {
    title: "Vice-President",
    name: "Gian O. Mühlemann",
    image: "vice-president.jpeg",
    people_image: "vice-president.jpg",
    short_description: "As Vice-President, I support and advise the president in his operative and strategic tasks. Together we lead and assist the Board in creating a growing cryptosociety.",
    email: "vice-president@cryptosocietystgallen.club"
  },
  head_of_legal_affairs: {
    title: "Head of Legal Affairs",
    name: "Jan Scherrer",
    image: "legal-affairs.jpeg",
    people_image: "legal-affairs.jpg",
    short_description: "As Head of Legal Affairs, my responsibilities include inter alia the creation and management of all legal documents, the society’s official incorporation, and the appointment of the Judicial Committee.",
    email: "legal-affairs@cryptosocietystgallen.club"},
  chief_of_staff: {
    title: "Chief of Staff",
    name: "Sanna Mühlemann",
    image: "staff.jpeg",
    people_image: "staff.jpg",
    short_description: "As Chief of Staff, I am your first point of contact. I will make sure to help you if there are any issues or questions regarding to our society.",
    email: "chief-of-staff@cryptosocietystgallen.club"},
  head_of_finance: {
    title: "Head of Finance",
    name: "Elias Henke",
    image: "finance.jpg",
    people_image: "finance.jpg",
    short_description: "As Head of Finance, I am responsible for managing all financial affairs of the society as well as for the development of the finance department.",
    email: "finance@cryptosocietystgallen.club"
  },
  head_of_academic_affairs: {
    title: "Head of Academic Affairs",
    name: "Malte Knauer",
    image: "academic-affairs.jpeg",
    people_image: "academic-affairs.jpg",
    short_description: "As Head of Academic Affairs, I develop and plan how knowledge about crypto is shared throughout the society. My goal is to both let beginners and advanced students emerse into the realm of Crypto & Blockchain.",
    email: "academic-affairs@cryptosocietystgallen.club"
  },
  head_of_marketing: {
    title: "Head of Marketing",
    name: "Sandro Gössi",
    image: "marketing.jpeg",
    people_image: "marketing.jpg",
    short_description: "As Head of Marketing, I lead all marketing activities from social media, branding and digital campaigns to advertising and creative projects. Your vibe attracts your tribe!",
    email: "marketing@cryptosocietystgallen.club"
  },
  head_of_social_events: {
    title: "Head of Social Events",
    name: "Davide Brunetti",
    image: "socials.jpeg",
    people_image: "socials.jpg",
    short_description: "As Head of Social Events, I contribute to the social platform of the society and I am determined to establish a pleasant environment of social exchange.",
    email: "social-events@cryptosocietystgallen.club"}
}

function collapsible(){
  const allButtons = document.getElementsByClassName("collapsible");
  console.log(allButtons)
  console.log("collap")
  for (let button of allButtons) {
    button.addEventListener('click', event => {
      button.classList.toggle("active");
      console.log(button);

    });
  };
};

function stringifyHTML(position) {
  let body = "Hello there, welcome to the Crypto Society Application Process!%0D%0A%0D%0A"
  body += "Please fill out the following form to apply:%0D%0A%0D%0A"
  body += "Full Name:%0D%0A"
  body += "Matriculation Number:%0D%0A"
  body += "Birthdate: %0D%0A"
  body += "LinkedIn Profile:%0D%0A"
  body += `What other positions could you also imagine yourself in (not ${position["title"]}):%0D%0A%0D%0A`
  body += "Please add a motivational letter why you want to join the board of the Crypto Society. Also if you don't have LinkedIn, please add a CV.%0D%0A%0D%0A"
  body += "We happily await your application and get back to you!%0D%0A"
  body += "(Please remember, the application deadline for all applications is the 15.11.2021)"
  
  let header = `<h4 class="title">${position["title"]}</h4>
  <div class="example-pic">
    <img src="people_images/${position["people_image"]}" class="title-image">
    <div class="image-shade title-image"></div>
  </div>
    <h4 class="name">${position['name']}</h4>
    <img src="images/${position['image']}" class="pos-img-pos">
    <p class="short-description">${position["short_description"]}</p>`
 
  let contact = `<div class='requirements'><div class="single-requirement"><a href="mailto:${position["email"]}"class="text-single-requirement">Contact Me</a></div>`
  contact = contact + "</div>"


        
  my_html = header + contact+ "</div></div>"    
  return my_html
}


function writeHTML() {
  let positions = document.getElementsByClassName("single-position")
  let i = 0
  Object.keys(board_positions).forEach(function (key) {
      positions[i].insertAdjacentHTML("beforebegin", "<div class='card single-position'>" + stringifyHTML(board_positions[key]) + "</div>")
      i += 1
  })
}

writeHTML()
collapsible()


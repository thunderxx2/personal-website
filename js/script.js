// script.js
// Function to fetch and include HTML content
function includeHTML(file, containerId){
    fetch(file)
    .then(response => response.text())
    .then(
        html => {
            document.getElementById(containerId).innerHTML = html;
        }
    )
}

// Include content from about.html
includeHTML('about/about.html', 'aboutMeContainer');

// Include content from contact.html
includeHTML('contact/contact.html', 'contactMeContainer');

// Include skills from skills.html
includeHTML('skills/skills.html', 'skillsContainer');
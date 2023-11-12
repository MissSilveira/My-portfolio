
const projects = [
    {
        'name': 'Shooping cart',
        'urlImg': 'project-cart.png',
        'urlGithub': 'https://github.com/MissSilveira/Interactive-Shopping-Cart-',
        'description': 'This project involves creating an online shooping cart using HTML, CSS and JavaScript. Users will be able to add and remove products, with automatic total calculation.',
        'url':'https://misssilveira.github.io/Interactive-Shopping-Cart-/'
    },

    {
        'name': 'Age Calculator',
        'urlImg': 'project-age.png',
        'urlGithub': 'https://github.com/MissSilveira/Age-Calculator',
        'description': 'This project aims to build an age calcutator using HTML, CSS and JavaScript. USers can input their birthdate, and the calculator will display their current age.',
        'url': 'https://misssilveira.github.io/Age-Calculator/'
    },

    {
        'name': 'Dictionary',
        'urlImg': 'project-dictionary.png',
        'urlGithub': 'https://github.com/MissSilveira/Interactive-Dictionary---HTML-CSS-JavaScript-Free-Dictionary-API',
        'description': 'This project involves creating an online dictionary using HTML, CSS and Javascript, with acess to a dictionary API. Users can search for words and retrieve real-time definitions',
        'url': 'https://misssilveira.github.io/Interactive-Dictionary---HTML-CSS-JavaScript-Free-Dictionary-API/'
    },

    {
        'name': 'Psychoterapy',
        'urlImg': 'project-psycho.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---psychoterapy',
        'description': 'This project involves coding a website for a psychotherapist using HTML and CSS. The design has been provided, and the task is to implement it to create a functional website.',
        'url': 'https://misssilveira.github.io/Website-Clone---psychoterapy/'
    },

    {
        'name': 'Travel-agency',
        'urlImg': 'project-travel.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---Travel-agency',
        'description': 'This project involves creating a website for a fictitious travel agency using html, css and javascript.',
        'url': 'https://misssilveira.github.io/Website-Clone---Travel-agency/'
    },

    {
        'name': 'Velocity',
        'urlImg': 'project-velocity.png',
        'urlGithub': 'https://github.com/MissSilveira/velocity',
        'description': 'This project entails creating a website using HTML and CSS, with added functionality powered by jQuery.',
        'url': 'https://misssilveira.github.io/velocity/'
    },

    {
        'name': 'Only Quality Food',
        'urlImg': 'project-only.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---onlyQualityFood',
        'description': 'This project involves designing a website using HTML and CSS, leveraging both display: flex and display: grid for flexible and grid-based layouts.',
        'url': 'https://misssilveira.github.io/Website-Clone---onlyQualityFood/'
    },

    {
        'name': 'Review: Four Seasons Seychelles',
        'urlImg': 'project-review.png',
        'urlGithub': 'https://github.com/MissSilveira/Responsive-Cloning-Reproduction-of-Review-Four-Seasons-Seychelles-Website',
        'description': 'This project involves building a website using HTML, CSS, and jQuery. ',
        'url': 'https://misssilveira.github.io/Responsive-Cloning-Reproduction-of-Review-Four-Seasons-Seychelles-Website/'
    },

    {
        'name': 'Jaime consultancy website',
        'urlImg': 'project-jaime.png',
        'urlGithub': 'https://github.com/MissSilveira/Jaime-Consultancy-Website-Built-with-HTML-CSS-JavaScript-and-jQuery',
        'description': 'This responsive site for Jaime Consultancy showcases technical skills with HTML, CSS, JS, and jQuery. It features animations, arrays, and Flexbox layouts',
        'url': 'https://misssilveira.github.io/Jaime-Consultancy-Website-Built-with-HTML-CSS-JavaScript-and-jQuery/'
    },

    {
        'name': 'NOMA | AUTHENTIC - HTML, CSS Grid page',
        'urlImg': 'project-noma.png',
        'urlGithub': 'https://github.com/MissSilveira/HTML-CSS-Grid-Page',
        'description': 'This project aims to showcase the power of CSS Grid and responsiveness by creating a website using HTML and CSS',
        'url': 'https://misssilveira.github.io/HTML-CSS-Grid-Page/'
    },

]

const exibeProjetos = () =>{
    projects.forEach((projeto, index)=>{
        const newDiv = document.createElement('div')
        newDiv.classList = `project project-${index}`
        newDiv.innerHTML = `
        <div class="project-left"> 
            <img src="${projeto.urlImg}" alt="">
        </div>
        <div class="project-right"> 
            <div class="text"> 
                <h3>${projeto.name}</h3>
                <p>${projeto.description}</p>
            </div>
            
            <div class="projects-link">
                <a href="${projeto.url}" class="btn-project" id="seeProject">See project</a>
                <a href="${projeto.urlGithub}" class="btn-github">View in repository</a>
            </div>
        </div>
        `
        document.querySelector('.projects').appendChild(newDiv)
    })
}

exibeProjetos()
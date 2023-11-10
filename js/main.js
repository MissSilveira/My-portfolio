function typeWriter(elemento){
    const textoArray = elemento.innerText.split('')
    //fazemos com que fique com NADA porque queremos que cada letra entre
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.getElementById('need-text');
typeWriter(titulo);



const target = document.querySelectorAll('[data-anime]')

const animationClass = 'animate'

function animScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(element){
       if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
            
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animScroll();

if(target.length){

    window.addEventListener('scroll', function(){
        animScroll();
    })
}

const projects = [
    {
        'name': 'Interactive shooping cart',
        'urlImg': '/img/project-cart.png',
        'urlGithub': 'https://github.com/MissSilveira/Interactive-Shopping-Cart-',
        'description': 'The Interactive Shopping Cart is a modern and user-friendly web application built using HTML, CSS, and JavaScript. This feature-rich shopping cart provides a seamless shopping experience for customers, allowing them to browse and add products to their cart with ease',
        'url':'https://misssilveira.github.io/Interactive-Shopping-Cart-/'
    },

    {
        'name': 'Age Calculator',
        'urlImg': '/img/project-age.png',
        'urlGithub': 'https://github.com/MissSilveira/Age-Calculator',
        'description': 'This Age Calculator is a simple web application built using HTML, CSS, and JavaScript that allows users to calculate their age based on their birth date. With an intuitive and user-friendly interface, this tool provides a hassle-free way for anyone to determine their age quickly.',
        'url': 'https://misssilveira.github.io/Age-Calculator/'
    },

    {
        'name': 'Dictionary',
        'urlImg': '/img/project-dictionary.png',
        'urlGithub': 'https://github.com/MissSilveira/Interactive-Dictionary---HTML-CSS-JavaScript-Free-Dictionary-API',
        'description': 'Welcome to the Interactive Dictionary repository! This project is a user-friendly web-based dictionary built using HTML, CSS, and JavaScript, leveraging the power of the Free Dictionary API.',
        'url': 'https://misssilveira.github.io/Interactive-Dictionary---HTML-CSS-JavaScript-Free-Dictionary-API/'
    },

    {
        'name': 'Website clone - Psychoterapy',
        'urlImg': '/img/project-psycho.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---psychoterapy',
        'description': 'This is my user-friendly website clone, fully developed with HTML and CSS. I faithfully reproduced the layout, style, and functionalities of the original website to provide a seamless and enjoyable online experience.',
        'url': 'https://misssilveira.github.io/Website-Clone---psychoterapy/'
    },

    {
        'name': 'Website-Clone---Travel-agency',
        'urlImg': '/img/project-travel.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---Travel-agency',
        'description': 'Step into a realm of innovative web design as we present our captivating website clone, meticulously crafted with HTML, CSS, and the enchanting capabilities of JavaScript. Our clone showcases the artful integration of JavaScript effects, providing an immersive and visually delightful browsing experience.',
        'url': 'https://misssilveira.github.io/Website-Clone---Travel-agency/'
    },

    {
        'name': 'Website-Clone---Velocity',
        'urlImg': '/img/project-velocity.png',
        'urlGithub': 'https://github.com/MissSilveira/velocity',
        'description': 'I am thrilled to present my web development project, a charming website built using the foundational technologies of HTML, CSS, and JavaScript. This website consists of two well-defined pages, designed to provide an intuitive and pleasant user experience',
        'url': 'https://misssilveira.github.io/velocity/'
    },

    {
        'name': 'Website-Clone--- Only Quality Food',
        'urlImg': '/img/project-only.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---onlyQualityFood',
        'description': 'Im excited to present my HTML and CSS template clone, a project Ive crafted to enhance my web development competencies. This endeavor serves as a training ground where Ive replicated a carefully designed template using HTML and CSS, allowing me to sharpen my abilities and refine my understanding of modern web design principles.',
        'url': 'https://misssilveira.github.io/Website-Clone---onlyQualityFood/'
    },

    {
        'name': 'Review: Four Seasons Seychelles',
        'urlImg': '/img/project-review.png',
        'urlGithub': 'https://github.com/MissSilveira/Responsive-Cloning-Reproduction-of-Review-Four-Seasons-Seychelles-Website',
        'description': 'Responsive recreation of Review: Four Seasons Seychelles website using HTML, CSS & JS/jQuery. Faithfully translated template with interactivity. Adapts seamlessly to diverse screen sizes.',
        'url': 'https://misssilveira.github.io/Responsive-Cloning-Reproduction-of-Review-Four-Seasons-Seychelles-Website/'
    },

    {
        'name': 'Jaime consultancy website',
        'urlImg': '/img/project-jaime.png',
        'urlGithub': 'https://github.com/MissSilveira/Jaime-Consultancy-Website-Built-with-HTML-CSS-JavaScript-and-jQuery',
        'description': 'This responsive site for Jaime Consultancy showcases technical skills with HTML, CSS, JS, and jQuery. It features animations, arrays, and Flexbox layouts',
        'url': 'https://misssilveira.github.io/Jaime-Consultancy-Website-Built-with-HTML-CSS-JavaScript-and-jQuery/'
    },

    {
        'name': 'NOMA | AUTHENTIC - HTML, CSS Grid page',
        'urlImg': '/img/project-noma.png',
        'urlGithub': 'https://github.com/MissSilveira/HTML-CSS-Grid-Page',
        'description': 'Single-page grid layout crafted in HTML & CSS, mirroring Noma Authentic. Efficiently designed for responsive viewing across various devices',
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
                <a href="${projeto.urlGithub}" class="btn-github">View in repository</a>
                <a href="${projeto.url}" class="btn-project">See project</a>
        </div>
        `
        document.querySelector('.projects').appendChild(newDiv)
    })
}

exibeProjetos()

const disporMenu = () =>{
    document.querySelector('nav').classList.toggle('nav')
}

document.getElementById('menu')
    .addEventListener('click', disporMenu)




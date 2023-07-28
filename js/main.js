function typeWriter(elemento){
    const textoArray = elemento.innerText.split('')
    //fazemos com que fique com NADA porque queremos que cada letra entre
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        //com isso podemos dizer "Adicione isso aqui em 100 segundos e esse proximo item em 200segundos"
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.getElementById('need-text');
typeWriter(titulo);

//typeWriter(document.querySelector('title'))


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
        'urlImg': 'img/project-cart.png',
        'urlGithub': 'https://github.com/MissSilveira/Interactive-Shopping-Cart-',
        'description': 'The Interactive Shopping Cart is a modern and user-friendly web application built using HTML, CSS, and JavaScript. This feature-rich shopping cart provides a seamless shopping experience for customers, allowing them to browse and add products to their cart with ease',
        'url':'pages/Interactive Shopping Cart/index.html'
    },

    {
        'name': 'Age Calculator',
        'urlImg': 'img/project-age.png',
        'urlGithub': 'https://github.com/MissSilveira/Age-Calculator',
        'description': 'This Age Calculator is a simple web application built using HTML, CSS, and JavaScript that allows users to calculate their age based on their birth date. With an intuitive and user-friendly interface, this tool provides a hassle-free way for anyone to determine their age quickly.',
        'url': 'pages/age calculator/index.html'
    },

    {
        'name': 'Dictionary',
        'urlImg': 'img/project-dictionary.png',
        'urlGithub': 'https://github.com/MissSilveira/Interactive-Dictionary---HTML-CSS-JavaScript-Free-Dictionary-API',
        'description': 'Welcome to the Interactive Dictionary repository! This project is a user-friendly web-based dictionary built using HTML, CSS, and JavaScript, leveraging the power of the Free Dictionary API.',
        'url': 'pages/Interactive-Dictionary---HTML-CSS-JavaScript-Free-Dictionary-API/index.html'
    },

    {
        'name': 'Website clone - Psychoterapy',
        'urlImg': 'img/project-psycho.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---psychoterapy',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet accusamus laudantium, excepturi sunt, velit mollitia nam repudiandae neque, molestias veritatis aspernatur magnam pariatur ipsum culpa corporis fuga? Pariatur, mollitia!',
        'url': 'pages/Website-Clone---psychoterapy/index.html'
    },

    {
        'name': 'Website-Clone---Travel-agency',
        'urlImg': 'img/project-travel.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---Travel-agency',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet accusamus laudantium, excepturi sunt, velit mollitia nam repudiandae neque, molestias veritatis aspernatur magnam pariatur ipsum culpa corporis fuga? Pariatur, mollitia!',
        'url': 'pages/Website-Clone---Travel-agency/index.html'
    },

    {
        'name': 'Website-Clone---Velocity',
        'urlImg': 'img/project-velocity.png',
        'urlGithub': 'https://github.com/MissSilveira/velocity',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet accusamus laudantium, excepturi sunt, velit mollitia nam repudiandae neque, molestias veritatis aspernatur magnam pariatur ipsum culpa corporis fuga? Pariatur, mollitia!',
        'url': 'pages/Velocity/index.html'
    },

    {
        'name': 'Website-Clone--- Only Quality Food',
        'urlImg': 'img/project-food.png',
        'urlGithub': 'https://github.com/MissSilveira/Website-Clone---onlyQualityFood',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet accusamus laudantium, excepturi sunt, velit mollitia nam repudiandae neque, molestias veritatis aspernatur magnam pariatur ipsum culpa corporis fuga? Pariatur, mollitia!',
        'url': 'pages/Only Quality Food/index.html'
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
            <h3>${projeto.name}</h3>
            <p>${projeto.description}</p>
            <div class="projects-link">
                <a href="${projeto.urlGithub}" class="btn-github">GitHub</a>
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



/*
Welcome to my portfolio! As a front-end web developer, I am well-versed in a diverse range of technologies and tools, and I am excited to showcase my skills to you.

**HTML, CSS, and JavaScript:**
These three form the core foundation of my front-end development expertise. I craft clean and semantic HTML structures, style them with CSS to create visually appealing designs, and bring life to web applications through interactive and dynamic functionality using JavaScript.

**JSON:**
I am proficient in working with JSON (JavaScript Object Notation), which plays a crucial role in handling data interchange between the client and server. Leveraging JSON allows me to build efficient and scalable applications.

**PHP and MySQL:**
My skill set extends to server-side development with PHP, a powerful scripting language for creating robust back-end logic. Combined with MySQL, I can effectively manage databases and implement dynamic data-driven solutions.

**Bootstrap and jQuery:**
I harness the power of Bootstrap to develop responsive, mobile-first web applications that offer an exceptional user experience across various devices and screen sizes. Additionally, jQuery empowers me to simplify complex tasks and create visually appealing animations and effects.

**TypeScript:**
I have expanded my toolkit to include TypeScript, a superset of JavaScript that adds static typing to the language. TypeScript enables me to catch potential errors during development, leading to more reliable code and improved collaboration.

In my portfolio, you will find a curated selection of projects that demonstrate my expertise in these technologies. From captivating user interfaces to seamless interactions and database-driven applications, each project showcases the dedication and passion I invest in my work.

I am committed to staying at the forefront of the ever-evolving web development landscape. As new technologies emerge, I eagerly embrace the opportunity to enhance my skills and tackle exciting challenges.

Thank you for taking the time to explore my portfolio. If you have any inquiries, potential collaborations, or projects that could benefit from my expertise, please feel free to get in touch. Let's build the future of the web together!

Best regards,
[Your Name]


*/

                var navlinks = document.querySelectorAll('.nav-link')
                console.log(navlinks)


                navlinks.forEach((link)=>{
                        link.addEventListener('click',(e)=>{
                                e.preventDefault()
                                var linkName = link.getAttribute('href').replace('#','').toLowerCase()
                                console.log(linkName)
                                loadPage(linkName)
                        })
                })

                function loadPage(link) {
                        var contentDiv  = document.querySelector('.grid-container');

                        contentDiv.innerHTML = '';
                        
                        switch (link) {
                                case 'home':
                                displayHome()
                                break;

                                case 'service':
                                        showService()
                                break;

                                case 'projects':
                                        showProjects()
                                break;

                                case 'about':
                                        showAbout();
                                break;

                                case 'contact':
                                        showContact();
                                break;


                                case 'trainings':
                                    contentDiv.innerHTML = `
                                        <h1>My Trainings</h1>
                                        <div class="trainings-grid">
                                            <div class="training-item">Azure Fundamentals</div>
                                            <div class="training-item">Office 365 Admin</div>
                                            <div class="training-item">PowerShell Automation</div>
                                            <div class="training-item">ITIL Foundations</div>
                                            <div class="training-item">Windows Server Administration</div>
                                            <div class="training-item">Linux for Admins</div>
                                            <div class="training-item">Cybersecurity Essentials</div>
                                            <div class="training-item">Monitoring & Incident Response</div>
                                        </div>`;
                                    break;
                            
                                case 'community':
                                    contentDiv.innerHTML = `
                                        <h1>My Community Involvement</h1>
                                        <ul>
                                            <li>Mentored junior engineers in PowerShell and troubleshooting techniques.</li>
                                            <li>Participated in design/code review sessions in cross-functional teams.</li>
                                            <li>Shared knowledge through collaborative issue-solving and tech strategy discussions.</li>
                                        </ul>`;
                                    break;
                            
                                case 'certifications':
                                    contentDiv.innerHTML = `
                                        <h1>My Certifications</h1>
                                        <div class="certifications-container">
                                            <div class="cert-card">
                                                <h3>CCNA</h3>
                                                <p>Cisco Certified Network Associate</p>
                                            </div>
                                            <div class="cert-card">
                                                <h3>JNCIA</h3>
                                                <p>Juniper Networks Certified Associate</p>
                                            </div>
                                            <div class="cert-card">
                                                <h3>ITIL v3 Foundation</h3>
                                                <p>IT Service Management Best Practices</p>
                                            </div>
                                        </div>`;
                                    break;

                                default:
                                contentDiv.innerHTML = '<h1>Welcome</h1><p>Choose a Section from the menu.</p>';
                                break;
                        }

                        function getRandomColor() {
                                const r = Math.floor(Math.random() * 256);
                                const g = Math.floor(Math.random() * 256);
                                const b = Math.floor(Math.random() * 256);
                                return `rgb(${r}, ${g}, ${b})`;
                        }

                        anime({
                                targets: '#main-content',
                                rotate:'1turn',
                                translateX:['-30px','0px'],
                                translateY:['-30px','0px'],
                                opacity: [0,1],
                                easing: 'easeInOutExpo', // Smooth easing for the animation
                                duration: 800, // Duration of the animation in milliseconds
                                complete:()=>{
                                        //document.body.style.backgroundColor = getRandomColor()
                                }
                        });
                        }



                loadPage('home');




                function displayMessage()
                {
                        var helloMsgBox = document.querySelector('#helloMsg')
                        var helloMsgBoxText = "Thanks for visiting my portfolio"
                        helloMsgBox.innerText = ''

                        for(var i=0;i< helloMsgBoxText.length;i++)
                        {
                        var span = document.createElement('span')
                        span.setAttribute('class','span')
                        span.textContent = helloMsgBoxText[i]
                        helloMsgBox.appendChild(span)
                        }
                        
                        anime({
                                targets: '#helloMsg .span',
                                rotate: '1turn',
                                opacity: [1,0],
                                scale: [0, 1],
                                duration: 5000,
                                easing: 'cubicBezier(0.65, 1.78, 0.1, -0.81)',
                                delay: anime.stagger(30),
                                loop: false
                                });
                }



                window.onload = function() {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                };


function displayHome() {
    var contentDiv  = document.querySelector('.grid-container');


    var grid1 = document.createElement('div')
    grid1.setAttribute('id','grid1')


    var grid2 = document.createElement('div')
    grid2.setAttribute('id','grid2')

    var grid3 = document.createElement('div')
    grid3.setAttribute('id','grid3')

    grid1.innerHTML = ''
    grid2.innerHTML = ''
    grid3.innerHTML = ''
    


const navItems = [
    { href: "#experience", text: "Experience" },
    { href: "#skills", text: "Skills" },
    { href: "#strength", text: "Strength" }
];



navItems.forEach(item => {
    const navLink = document.createElement("a");
    navLink.setAttribute("class", "nav-link");
    navLink.setAttribute("href", item.href);
    navLink.textContent = item.text;
    grid1.appendChild(navLink);
});


    contentDiv.appendChild(grid1)
    contentDiv.appendChild(grid2)
    contentDiv.appendChild(grid3)

    function defaultViewInHome()
    {

const mySkills = [
  "Expert in designing and optimizing scalable IT infrastructures",
  "Proficient in Azure and Microsoft 365 cloud solutions",
  "Extensive experience in Active Directory administration",
  "Strong expertise in VMware and virtualization technologies",
  "Skilled in automation using PowerShell, Python, and Bash scripting",
  "Proven ability to enhance system efficiency through process automation",
  "Experienced in root cause analysis and issue resolution",
  "Strong problem-solving skills for complex IT challenges",
  "Hands-on experience with Windows Server and Linux administration",
  "Comprehensive knowledge of security protocols and system hardening",
  "Proficient in network configurations, including VLAN, VPN, and firewall security",
  "Ability to troubleshoot and optimize corporate networks",
  "Skilled in implementing security compliance and best practices",
  "Adept at system integration, testing, and troubleshooting",
  "Experienced in IT asset management and procurement efficiency",
  "Strong ability to mentor junior engineers and foster team growth",
  "Hands-on experience with IT service management tools like ServiceNow and SCCM",
  "Skilled in cross-functional collaboration to drive IT solutions",
  "Proven success in reducing error rates and optimizing system performance",
  "Experience in managing enterprise-level batch processing systems",
  "Ability to enhance business operations through IT automation",
  "Efficient in designing custom tools for system monitoring",
  "Strong knowledge of ITIL frameworks and incident management",
  "Ability to work under pressure and manage high-priority tasks",
  "Excellent analytical and strategic thinking skills",
  "Proficient in network security, risk assessment, and mitigation",
  "Expert in troubleshooting enterprise-level applications",
  "Skilled in developing scripts to streamline administrative tasks",
  "Capable of integrating cloud-based solutions into existing infrastructures",
  "Strong understanding of network protocols including TCP/IP and NAT",
  "Experienced in vendor management and hardware procurement",
  "Proven track record of driving IT process improvements",
  "Strong verbal and written communication skills",
  "Detail-oriented approach to IT documentation and system audits",
  "Effective in knowledge transfer and technical training sessions",
  "Experience in engineering solutions to prevent system disruptions",
  "Highly adaptable to new technologies and IT environments",
  "Dedicated to optimizing business processes through innovative IT strategies",
  "Passionate about learning and implementing cutting-edge IT solutions",
  "Ability to balance multiple projects with efficiency and precision"
];

function loadDefaultAnimation()
{
        grid2.innerHTML = ''

    for (let n = 0; n < mySkills.length; n++) {
    var card = document.createElement('div');
    card.setAttribute('class', 'col-12 col-md-6 col-lg-6 mb-3 card');
    card.textContent = mySkills[n];

    // Row-based animation: Every 2 cards = 1 row
    if (Math.floor(n / 2) % 2 === 0) {
        card.setAttribute('data-aos', 'fade-right'); // Even row: fade-right
    } else {
        card.setAttribute('data-aos', 'fade-left');  // Odd row: fade-left
    }

    grid2.appendChild(card);
}

        // anime({
        //     targets: '.card',
        //     translateY: [30, 0],
        //     opacity: [0, 1],
        //     easing: 'easeOutExpo',
        //     duration: 3000,
        //     loop:false
        // });
}
loadDefaultAnimation()

        grid3.style.display = 'none'

const shakilAhmedSkills = [
  "Expert in designing and optimizing scalable IT infrastructures",
  "Proficient in Azure and Microsoft 365 cloud solutions",
  "Extensive experience in Active Directory administration",
  "Strong expertise in VMware and virtualization technologies",
  "Skilled in automation using PowerShell, Python, and Bash scripting",
  "Proven ability to enhance system efficiency through process automation",
  "Experienced in root cause analysis and issue resolution",
  "Strong problem-solving skills for complex IT challenges",
  "Hands-on experience with Windows Server and Linux administration",
  "Comprehensive knowledge of security protocols and system hardening",
  "Proficient in network configurations, including VLAN, VPN, and firewall security",
  "Ability to troubleshoot and optimize corporate networks",
  "Skilled in implementing security compliance and best practices",
  "Adept at system integration, testing, and troubleshooting",
  "Experienced in IT asset management and procurement efficiency",
  "Strong ability to mentor junior engineers and foster team growth",
  "Hands-on experience with IT service management tools like ServiceNow and SCCM",
  "Skilled in cross-functional collaboration to drive IT solutions",
  "Proven success in reducing error rates and optimizing system performance",
  "Experience in managing enterprise-level batch processing systems",
  "Ability to enhance business operations through IT automation",
  "Efficient in designing custom tools for system monitoring",
  "Strong knowledge of ITIL frameworks and incident management",
  "Ability to work under pressure and manage high-priority tasks",
  "Excellent analytical and strategic thinking skills",
  "Proficient in network security, risk assessment, and mitigation",
  "Expert in troubleshooting enterprise-level applications",
  "Skilled in developing scripts to streamline administrative tasks",
  "Capable of integrating cloud-based solutions into existing infrastructures",
  "Strong understanding of network protocols including TCP/IP and NAT",
  "Experienced in vendor management and hardware procurement",
  "Proven track record of driving IT process improvements",
  "Strong verbal and written communication skills",
  "Detail-oriented approach to IT documentation and system audits",
  "Effective in knowledge transfer and technical training sessions",
  "Experience in engineering solutions to prevent system disruptions",
  "Highly adaptable to new technologies and IT environments",
  "Dedicated to optimizing business processes through innovative IT strategies",
  "Passionate about learning and implementing cutting-edge IT solutions",
  "Ability to balance multiple projects with efficiency and precision"
];


    }

    defaultViewInHome()
    
    document.querySelectorAll("#grid1 .nav-link").forEach(link => {

                link.addEventListener("click", function() {
                var linkName = link.getAttribute('href').replace('#','')
                console.log(linkName)
                const content = this.nextElementSibling;

                grid2.innerHTML = ''
                grid3.innerHTML = ''
                grid2.style.backgroundColor = ''


                switch (linkName) {
                        case 'experience':
                                grid2.setAttribute('id','experienceDiv')

const jobExperiences = [
    {
        title: "Software Support Engineer L3",
        company: "NCR Corporation",
        duration: "December 2022 - June 2024",
        details: [
            "Led technical support for the Retalix (R10) application, ensuring robust system performance.",
            "Designed and implemented system processes using Azure and PowerShell scripting.",
            "Collaborated with teams to troubleshoot system issues, reducing error rates by 15%.",
            "Managed root cause analysis for recurring issues, applying engineering solutions.",
            "Developed automation scripts, saving 20% of engineering time.",
            "Mentored junior engineers, fostering skills in best practices and troubleshooting."
        ]
    },
    {
        title: "Senior Technical Engineer",
        company: "SPL Services",
        duration: "December 2020 – November 2022",
        details: [
            "Administered Windows Server and Office 365, optimizing IT infrastructure.",
            "Automated administrative tasks with PowerShell, reducing workload by 30%.",
            "Worked with hardware, software, and networking teams for system integration.",
            "Designed internal tools to improve system monitoring and incident response."
        ]
    },
    {
        title: "Network Administrator",
        company: "Greenlight Australia",
        duration: "March 2016 - November 2020",
        details: [
            "Managed corporate networks, VPN, VLAN, and firewall configurations.",
            "Implemented network maintenance automation using Python and Bash.",
            "Collaborated with vendors for hardware procurement.",
            "Enhanced IT asset management, improving procurement efficiency by 15%."
        ]
    }
];



// Loop through the array and create elements
jobExperiences.forEach((job, index) => {
    // Create accordion item
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // Create button
    const button = document.createElement("button");
    button.classList.add("accordion-button");
    button.innerHTML = `${job.title} <span class="accordion-icon">+</span>`;

    // Create content container
    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.style.display = "none"; // Default closed

    // Create job details paragraph
    const jobDetails = document.createElement("p");
    jobDetails.innerHTML = `<strong>${job.company} | ${job.duration}</strong>`;

    // Create unordered list
    const ul = document.createElement("ul");
    job.details.forEach(detail => {
        const li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });

    // Append elements
    content.appendChild(jobDetails);
    content.appendChild(ul);
    accordionItem.appendChild(button);
    accordionItem.appendChild(content);
    experienceDiv.appendChild(accordionItem);


    button.addEventListener("click", () => {
        const isActive = accordionItem.classList.contains("active");


        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active");
            item.querySelector(".accordion-content").style.display = "none";
        });

        if (!isActive) {
            accordionItem.classList.add("active");
            content.style.display = "block";
        }
    });
});

                                grid3.style.display = 'none'
                                break;


                                case 'skills':
                                var cardData = [
                                ["🛠️ System & IT Operations🔍 Troubleshooting & Root Cause Analysis ⚙️ Software Application Support"],
                                ["💾 Database Management🛢️ SQL 🔗 MongoDB, MySQL, PostgreSQL"],
                                ["🖥️ Cloud & DevOps ☁️ Azure Cloud"],
                                ["📦 Backend Development 📜 Node.js & Express 🔗 REST API"],
                                ["🎨 Frontend Development ⚛️ React.js & ReactNative.js 📌 EJS, HTML5 & CSS3"],
                                ["🌀 UI/UX & Animations 🎭 Anime.js, AOS, Swiper.js 🖌️ Lottie, SVG Effects"],
                                ["🛡️ Security & Authentication 🔑 JWT, OAuth🔒 User & API Security"],
                                ["🖥️ Infrastructure & Networking 🌍 Linux & Windows Servers🛰️ Docker, Virtualization"]
                                ];

                                grid2.setAttribute('id','skillDiv')


                                cardData.forEach((text, index) => {
                                const card = document.createElement("div");
                                card.classList.add("card");

                                const front = document.createElement("div");
                                front.classList.add("front");
                                front.textContent = text;

                                const back = document.createElement("div");
                                back.classList.add("back");

                                card.appendChild(front);
                                card.appendChild(back);
                                grid2.appendChild(card);
                                });

                                anime({
                                        targets: ".card",
                                        rotateY: [0, 180],
                                        perspective: 1000,
                                        easing: "easeInOutQuad",
                                        duration: 1000, // Smooth flip speed
                                        loop: true, // Keeps flipping
                                        direction: "alternate", // Flips back and forth
                                        delay: anime.stagger(1000, { start: 1000 }) // Staggered delay for natural sequence
                                });


                                grid3.style.display = 'none'

                                break;
                        case 'strength':
                        const strengths = {
                                professional: [
                                        "Project Management",
                                        "Team Collaboration",
                                        "Client Engagement",
                                        "Problem-Solving",
                                        "Leadership",
                                        "Business Strategy",
                                        "Time Management"
                                ],
                                technical : [
                                        "Microsoft 365 Administration",
                                        "Azure Cloud Administration",
                                        "IT Service Management (ITIL)",
                                        "Full-Stack Web Development",
                                        "Cloud Infrastructure & Virtualization",
                                        "Database Design & Management",
                                        "Version Control & CI/CD (Git, GitHub, GitLab)",
                                        "RESTful API Development & Integration",
                                        "Automation & Scripting (PowerShell, Bash, Python)",
                                        "Cybersecurity & Compliance Best Practices"
                                        ],

                                personal: [
                                        "Adaptability",
                                        "Continuous Learning",
                                        "Attention to Detail",
                                        "Communication Skills",
                                        "Critical Thinking",
                                        "Empathy and Emotional Intelligence",
                                        "Time Management",
                                        "Creativity"
                                ]
                                };

                                grid2.setAttribute('id','strengthDiv')
                                grid3.style.display = 'none'

                                function createCard(title, textArray) {
                                const card = document.createElement("div");
                                card.classList.add("strength-card");

                                const cardTitle = document.createElement("div");
                                cardTitle.classList.add("strength-title");
                                cardTitle.textContent = title;

                                const typedOutput = document.createElement("div");
                                typedOutput.classList.add("typed-output");

                                card.appendChild(cardTitle);
                                card.appendChild(typedOutput);
                                grid2.appendChild(card);

                                new Typed(typedOutput, {
                                        strings: textArray,
                                        typeSpeed: 40,
                                        backSpeed: 30,
                                        backDelay: 1000,
                                        startDelay: 500,
                                        loop: true,
                                        showCursor: true
                                });
                                }

                                createCard("Professional Strengths", strengths.professional);
                                createCard("Technical Strengths", strengths.technical);
                                createCard("Personal Strengths", strengths.personal);

                                break;
                        default:
                                break;
                }

                document.querySelectorAll(".accordion-button").forEach(button => {
                        button.addEventListener("click", function() {
                        const content = this.nextElementSibling;
                        const icon = this.querySelector(".accordion-icon");
                        if (content.style.maxHeight) {
                                content.style.maxHeight = null;
                                icon.textContent = "+";
                        } else {
                                content.style.maxHeight = content.scrollHeight + "px";
                                icon.textContent = "-";
                        }
                        });
                        });

                anime({
                        targets:document.getElementById("final"),
                        duration:1200,
                        translateY:[-50,0],
                        opacity:[0,1],
                        direction:'alternate',
                        easing:'easeInOutQuad',
                        loop:false,
                        complete:()=>{
                                //document.getElementById("final").style.background = "linear-gradient(45deg, green, orange, white)";
                        }
                })
        });
});
}

const projects = [
        {
            projectName: "Admin Panel for E-Commerce",
            duration: "1 months",
            whoIsThisFor: "E-Commerce Owners",
            whatDidILearn: "How to create an admin panel with backend integration, visualize data in charts, and manage inventory data.",
            skillsAndToolsUsed: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Chart.js", "HTML", "CSS"],
        },
        {
            projectName: "ReactJS-Based Fruit Shop",
            duration: "3 weeks",
            whoIsThisFor: "Online Fruit Shop Owners",
            whatDidILearn: "Built a frontend with ReactJS to display products, add them to the cart, and integrate Stripe for demo payments.",
            skillsAndToolsUsed: ["ReactJS", "Stripe API", "JavaScript", "HTML", "CSS"],
        },
        {
            projectName: "To-Do App in ReactJS & React Native",
            duration: "1.5 months",
            whoIsThisFor: "Users wanting task management apps",
            whatDidILearn: "Developed a cross-platform to-do app with database integration for storing tasks.",
            skillsAndToolsUsed: ["ReactJS", "React Native", "Firebase", "JavaScript", "CSS"],
        },
        {
            projectName: "3D Animation Integration in Websites",
            duration: "1.5 month",
            whoIsThisFor: "Website Owners looking for visually appealing effects",
            whatDidILearn: "Learned how to integrate 3D animations into websites for enhanced user experience.",
            skillsAndToolsUsed: ["Three.js", "WebGL", "JavaScript", "CSS"],
        },
        {
            projectName: "Dynamic Website Templates",
            duration: "2 months",
            whoIsThisFor: "Clients needing custom website templates",
            whatDidILearn: "Built responsive, dynamic website templates with JavaScript and CSS to cater to different needs.",
            skillsAndToolsUsed: ["HTML", "CSS", "JavaScript", "Sass", "Bootstrap"],
        },
        {
            projectName: "Static Website Animation Conversion",
            duration: "1 month",
            whoIsThisFor: "Website Owners wanting to modernize their static websites",
            whatDidILearn: "Converted static websites to modern dynamic ones with added animations.",
            skillsAndToolsUsed: ["jQuery", "CSS Animations", "JavaScript", "HTML"],
        },
        {
            projectName: "ReactJS-based Shopping Cart",
            duration: "1 month",
            whoIsThisFor: "Online Retailers",
            whatDidILearn: "Created a shopping cart using ReactJS, focusing on state management and cart persistence.",
            skillsAndToolsUsed: ["ReactJS", "JavaScript", "CSS", "Redux"],
        },
        {
            projectName: "Admin Panel with Dashboard",
            duration: "2 months",
            whoIsThisFor: "Admin Users",
            whatDidILearn: "Learned how to build a full-stack admin panel with user management and data visualization.",
            skillsAndToolsUsed: ["Node.js", "Express.js", "MongoDB", "Chart.js", "JavaScript", "HTML", "CSS"],
        },
        {
            projectName: "E-Commerce Product Display & Cart Management",
            duration: "1.5 months",
            whoIsThisFor: "E-Commerce Store Owners",
            whatDidILearn: "Built a dynamic product display system and shopping cart management for e-commerce platforms.",
            skillsAndToolsUsed: ["JavaScript", "ReactJS", "Node.js", "Express.js", "MongoDB", "CSS"],
        }
    ];

    function showProjects() {
    var contentDiv = document.querySelector('.grid-container');

    // Clear existing content
    contentDiv.innerHTML = '';


    const newGrid = document.createElement('div');
    newGrid.setAttribute('id', 'newGrid');



    for (let m = 0; m < projects.length; m++) {
        const project = projects[m];

        const projectCard = document.createElement('div');
        projectCard.setAttribute('class', 'projectCard');



        projectCard.innerHTML = `
            <h3 style="color: #333;">${project.projectName}</h3>
            <p><strong>Duration:</strong> ${project.duration}</p>
            <p><strong>For:</strong> ${project.whoIsThisFor}</p>
            <p><strong>What I Learned:</strong> ${project.whatDidILearn}</p>
            <p><strong>Skills:</strong> ${project.skillsAndToolsUsed.join(', ')}</p>
        `;

        newGrid.appendChild(projectCard);
    }

    contentDiv.appendChild(newGrid);
}

function showAbout() {
    var contentDiv = document.querySelector('.grid-container');

    // Clear previous content
    contentDiv.innerHTML = '';

    // Create a new about container
    const aboutGrid = document.createElement('div');
    aboutGrid.setAttribute('id', 'aboutGrid');

    // About details array
    const aboutMe = [
        "🎯 Passionate about software development and IT automation.",
        "💻 Experienced in JavaScript, Node.js, Python, and SQL.",
        "☁️ Skilled in Azure, Microsoft 365, and cloud infrastructure.",
        "🔧 Strong problem-solving skills and a keen eye for debugging.",
        "📚 Always learning new technologies and improving efficiency.",
        "🎨 Enthusiastic about UI/UX design and web animations.",
        "💡 Believer in continuous improvement and innovation in IT."
    ];



    // Loop through about details and create elements
    aboutMe.forEach(detail => {
        const aboutCard = document.createElement('div');
        aboutCard.setAttribute('class', 'aboutCard');


        aboutCard.innerHTML = `<p>${detail}</p>`;

        aboutGrid.appendChild(aboutCard);
    });

    // Append the about section to the main container
    contentDiv.appendChild(aboutGrid);
}


function showContact() {
    var contentDiv = document.querySelector('.grid-container');

    // Clear previous content
    contentDiv.innerHTML = '';

    // Create a new contact container
    const contactGrid = document.createElement('div');
    contactGrid.setAttribute('id', 'contactGrid');

    // Contact details array
    const contactDetails = [
        { type: "📧 Email", value: "shakilmsa@yahoo.com" },
        { type: "📞 Phone", value: "+61 406 001 444" },
        { type: "🌍 Website", value: "https://msausha.github.io/myportfolio" },
        { type: "📍 Location", value: "Melbourne, Australia" }
    ];


    contactGrid.style.display = 'grid';
    contactGrid.style.cursor = 'pointer';
    
    contactGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    contactGrid.style.gap = '15px';
    contactGrid.style.padding = '20px';
    contactGrid.style.background = '#f8f9fa';
    contactGrid.style.borderRadius = '10px';

    // Loop through contacts and create cards
    contactDetails.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.setAttribute('class', 'contactCard');

        contactCard.style.padding = '15px';
        contactCard.style.borderRadius = '8px';
        contactCard.style.background = '#ffffff';
        contactCard.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        contactCard.style.textAlign = 'center';

        contactCard.innerHTML = `<h3>${contact.type}</h3><p>${contact.value}</p>`;

        contactGrid.appendChild(contactCard);
    });

    // Append the contact section to the main container
    contentDiv.appendChild(contactGrid);
}
function showService() {
    var contentDiv = document.querySelector('.grid-container');

    // Clear previous content
    contentDiv.innerHTML = '';

    // Create a new service container
    const serviceGrid = document.createElement('div');
    serviceGrid.setAttribute('id', 'serviceGrid');

    // Service details array
    const services = [
        {
            serviceName: "💻 Full-Stack Web Development",
            description: "Building responsive and scalable web applications using JavaScript, Node.js, Express.js, and MongoDB."
        },
        {
            serviceName: "☁️ Cloud Solutions & DevOps",
            description: "Deploying and managing cloud infrastructure using Azure, Microsoft 365, and Docker containers."
        },
        {
            serviceName: "🛠️ IT Support & System Administration",
            description: "Providing IT support, troubleshooting system issues, and automating tasks using PowerShell and Bash."
        },
        {
            serviceName: "📊 Data Analysis & Automation",
            description: "Automating reports, processing large datasets, and optimizing performance with SQL and Python."
        },
        {
            serviceName: "🎨 UI/UX Design & Web Animations",
            description: "Enhancing user experiences with modern UI frameworks and smooth animations using Anime.js, AOS, and Lottie."
        }
    ];



    // Loop through services and create cards
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.setAttribute('class', 'serviceCard');

        // Apply styling to service cards
        serviceCard.style.padding = '15px';
        serviceCard.style.borderRadius = '8px';
        serviceCard.style.background = '#ffffff';
        serviceCard.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        serviceCard.style.textAlign = 'center';

        // Fill in the service details
        serviceCard.innerHTML = `
            <h3>${service.serviceName}</h3>
            <p>${service.description}</p>
        `;

        serviceGrid.appendChild(serviceCard);
    });

    // Append the service section to the main container
    contentDiv.appendChild(serviceGrid);
}

                AOS.init({
                        offset: 100,
                        duration: 1000,
                        easing: 'ease-in-out',
                        once: true
                });

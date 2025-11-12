const projects = [
    { 
    title: "Employee-Management-System", 
    github: "https://github.com/macdee1998/Five-Page-Website", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "React", "vite", "MUI", "AI", "PostgreSQL", "Node.js", "Express"], 
    description: "I was part of a team that developed an Employee Management System using React for the frontend, Node.js and Express for the backend, and PostgreSQL for the database. The system includes AI-powered features to enhance user experience and streamline employee management processes.",
    image: "images/ems.png"
  },
  { 
    title: "Employee Data Management Module", 
    github: "#", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "React", "vite", "MUI", "AI", "PostgreSQL", "Node.js", "Express"], 
    description: "My responsibilty in the Employee Management System project was to develop the Employee Data Management Module. This module allows users to efficiently manage employee records, including adding, updating, and deleting employee information. I implemented AI-powered features to automate data entry and improve accuracy, enhancing the overall user experience.",
    image: "images/emsdata.png"
  },
  { 
    title: "Employee Performance Management Module", 
    github: "#", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "React", "vite", "MUI", "AI", "PostgreSQL", "Node.js", "Express"], 
    description: "My responsibilty in the Employee Management System project was to develop the Employee Performance Management Module. This module allows users to efficiently manage employee performance data, including setting goals, tracking progress, and conducting evaluations. I implemented AI-powered features to analyze performance trends and provide actionable insights, enhancing the overall user experience.",
    image: "images/emspms.png"
  },
  { 
    title: "CDM Real Estate", 
    github: "https://github.com/macdee1998/Five-Page-Website", 
    live: "#", 
    tech: ["HTML", "CSS", "JS"], 
    description: "Developed a five-page real estate website with responsive design and interactive features.",
    image: "images/cdm-real.png"
  },
  { 
    title: "Mabhundu-Attorneys-Website", 
    github: "https://github.com/macdee1998/Mabhundu-Attorneys-Website", 
    live: "#", 
    tech: ["HTML", "CSS", "JS"], 
    description: "Developed a professional website for Mabhundu Attorneys, featuring responsive design and client-focused content.",
    image: "images/mabundu.png"
  },
  { 
    title: "Camelot-High-School", 
    github: "https://github.com/macdee1998/Camelot-High-School", 
    live: "#", 
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"], 
    description: "Created a responsive website for Camelot High School using Bootstrap, enhancing user experience across devices.",
    image: "images/camelot.png"
  },
  { 
    title: "CDM-gym-portfolio", 
    github: "https://github.com/macdee1998/CDM-gym-portfolio", 
    live: "#", 
    tech: ["HTML", "CSS", "JS"], 
    description: "Gym portfolio website.",
    image: "images/gym-02.png"
  },
  { 
    title: "CDM-Tech Website", 
    github: "https://macdee1998.github.io/Five-Page-Website/", 
    live: "#", 
    tech: ["HTML", "CSS", "JS"], 
    description: "Tech portfolio website.",
    image: "images/cdm-tech.png"
  },
  { 
    title: "SmartTrends", 
    github: "https://github.com/macdee1998/SmartTrends", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "Bootstrap"], 
    description: "Developed a website for SmartTrends, a security solutions provider, using Bootstrap for responsive design.",
    image: "images/smarttrends.png"
  },
  { 
    title: "Great Heights University", 
    github: "https://github.com/macdee1998/ghu-draft", 
    live: "https://ghuniversity.ac.zw/", 
    tech: ["HTML", "CSS", "JS"], 
    description: "Created a draft website for Great Heights University, focusing on user-friendly navigation and informative content.",
    image: "images/ghu.png"
  },
  { 
    title: "Wireemit Money Transfer Web App", 
    github: "https://github.com/macdee1998/wiremit-money-transfer-web-app", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "React", "vite"], 
    description: "Developed a money transfer web application requested by wireemit using React and Vite for a seamless user experience.",
    image: "images/wireemit.png"
  },
  { 
    title: "Luxurious Trails Travel Agency", 
    github: "https://github.com/macdee1998/Luxurious-Trail", 
    live: "#", 
    tech: ["HTML", "CSS", "JS"], 
    description: "Created a draft website for Luxurious Trails Travel Agency, focusing on user-friendly navigation and informative content.",
    image: "images/trails.png"
  },
  { 
    title: "Eunice Njovana UN Campaign Website", 
    github: "https://github.com/macdee1998/UN-Campaign-Election-Website", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "Bootstrap"], 
    description: "Developed a campaign website for Eunice Njovana's UN election bid using React and Vite for a modern user experience.",
    image: "images/un.png"
  },
  { 
    title: "MDK Tech Construction Website", 
    github: "https://github.com/macdee1998/MD-K-Civil-Engineering-Connstruction", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "Bootstrap"], 
    description: "Created a draft website for MDK Tech Construction, a company in Kenya, focusing on user-friendly navigation and informative content.",
    image: "images/mdk.png"
  },
  { 
    title: "ConLearn", 
    github: "https://github.com/macdee1998/ConLearn", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "Bootstrap"], 
    description: "Developed a basic e-learning platform called ConLearn using HTML, CSS, Bootstrap, and JS for an interactive user experience.",
    image: "images/conlearn.png"
  },
  { 
    title: "Portfolio Website", 
    github: "https://github.com/macdee1998/Personal-Portfolio-Website", 
    live: "#", 
    tech: ["HTML", "CSS", "JS", "Bootstrap"], 
    description: "Created a personal portfolio website to showcase my projects and skills.",
    image: "images/portfolio-01.png"
  },
];


const container = document.getElementById('projects-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.title = project.title;
  card.dataset.description = project.description;
  card.dataset.image = project.image; 
  card.dataset.live = project.live;
  card.dataset.github = project.github;

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="project-info">
      <h3>${project.title.replace(/-/g, ' ')}</h3>
      <div class="tech-badges">
        ${project.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>
  `;

  container.appendChild(card);
});

const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalLive = document.getElementById('modal-live');
const modalGit = document.getElementById('modal-github');
const modalClose = document.getElementById('modal-close');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = card.dataset.image;
    modalTitle.textContent = card.dataset.title.replace(/-/g, ' ');
    modalDesc.textContent = card.dataset.description;
    modalLive.href = card.dataset.live;
    modalGit.href = card.dataset.github;
  });
});

modalClose.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

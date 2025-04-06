// Sample project data
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('open');
  });
  
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  
  const projects = [
    {
      title: "Responsive Photography Gallery",
      description: "A photo gallery that adapts to different screen sizes using CSS Grid and JavaScript modals.",
      image: "images/gallery.jpg", // ✅ Add the image path here
      link: "#" // Replace with actual URL or anchor
    },
    {
      title: "Book Review Blog",
      description: "A clean and accessible blog layout styled with modern CSS and semantic HTML.",
      image: "images/bookblog.png",
      link: "https://peteyhansen340.github.io/blog/"
    },
    {
      title: "Calculator App (Kotlin)",
      description: "A simple calculator built with Kotlin, showcasing core programming logic.",
      image: "images/calculator.jpg",
      link: "https://github.com/peteyhansen340/calculator4"
    }
  ];
  
  // Inject projects into HTML
  const projectList = document.getElementById('project-list');
  projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project';
    div.innerHTML = `
      <a href="${project.link}" target="_blank" rel="noopener">
        <img src="${project.image}" alt="${project.title}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </a>
    `;
    projectList.appendChild(div);
  });
  
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      e.preventDefault();
    }
  });
  
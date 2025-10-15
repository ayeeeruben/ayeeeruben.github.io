const PROJECTS = [
    {
      title: "BlackJack App on Andriod Studio",
      year: "2025",
      tags: ["app", "ui", "design"],
      image: "img/bjappPrev.jpg",
      description: "A functional Black Jack Game with decent UI and great code design. Left out the gambling feature due to time constraints.",
      links: { github: "https://github.com/mamarsh525/BlackJack2"} //add demo: "" and you can link it to something
    },
    {
      title: "BST in C++",
      year: "2023",
      tags: ["app", "C++"],
      image: "img/bst.png",
      description: "This is a bst tree implemented using C++ you give it a list of commands like shown in the image and it gives you the tree",
      links: { github: "https://github.com/ayeeeruben/classwork-history/tree/main/classwork-history/cs21/21-7" }
    },
    {
        title: "Maze Generator",
        year: "2023",
        tags: ["app", "C++"],
        image: "img/mazeGen.png",
        description: "This is a maze generator in C++ using disjoint sets! Input the hex output of the program into the demo to see the maze!",
        links: { github: "https://github.com/ayeeeruben/classwork-history/tree/main/classwork-history/cs21/21-6", demo:"https://jeff.cis.cabrillo.edu/tools/cs21_maze_viewer" }
    },
    {
        title: "Maze Solver",
        year: "2023",
        tags: ["app", "C++"],
        image: "img/mazeSolverDemo.png",
        description: "This is a maze solver using BFS!",
        links: { github: "https://github.com/ayeeeruben/classwork-history/tree/main/classwork-history/cs21/21-8"}
      },
      {
        title: "Multimedia Audio App",
        year: "2025",
        tags: ["app", "Python", "ui", "design"],
        image: "img/kaboom.png",
        description: "This was a mulitmedia app I contributed for my final project. I worked specifically on the Shazam-like feature I renamed to 'Kaboom!'",
        links: { github: "https://github.com/CarkinSoft/CST205-FinalProject"}
    },
    {
      title: "Arduino",
      year: "2023",
      tags: ["app", "Arduino", "design", "hardware"],
      image: "img/arduinoBomb.jpg",
      description: "This was an arduino project that I built for pne of my classes. It's supposed to mimc a 'bomb' countdown. We were required to both build and code it.",
      links: { github: "https://github.com/ayeeeruben/classwork-history/blob/main/classwork-history/Arduino/proj2/proj2.ino"}
  }
];
  
  function $(sel, parent=document){return parent.querySelector(sel);}
  function renderProjects(list=PROJECTS){
    $("#projectGrid").innerHTML=list.map(p=>`
    <article class="card">
      <img class="thumb" src="${p.image}" alt="${p.title}" data-viewer-title="${p.title}" data-viewer-caption="${p.description}">
      <div class="card-body">
        <div class="card-meta">${p.year} • ${p.tags.join(", ")}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-actions">
          <a class="btn" href="${p.links.github}" target="_blank">GitHub</a>
          ${p.links.demo ? `<a class="btn ghost" href="${p.links.demo}" target="_blank">Demo</a>` : ""}
        </div>
      </div>
    </article>`).join("");
  }
  
  function renderFilters(){
    const tags=[...new Set(PROJECTS.flatMap(p=>p.tags))];
    $("#filters").innerHTML=`<button class="chip active" data-tag="all">All</button>`+
    tags.map(t=>`<button class="chip" data-tag="${t}">${t}</button>`).join("");
    $("#filters").onclick=e=>{
      if(!e.target.matches(".chip"))return;
      document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
      e.target.classList.add("active");
      const tag=e.target.dataset.tag;
      renderProjects(tag==="all"?PROJECTS:PROJECTS.filter(p=>p.tags.includes(tag)));
    };
  }
  
  function initViewer(){
    const viewer=$("#viewer"), img=$("#viewerImg"), title=$("#viewerTitle"), cap=$("#viewerCaption");
    document.body.onclick=e=>{
      const t=e.target;
      if(t.classList.contains("thumb")){
        img.src=t.src; title.textContent=t.dataset.viewerTitle; cap.textContent=t.dataset.viewerCaption;
        viewer.showModal();
      }
    };
    $("#viewerClose").onclick=()=>viewer.close();
  }
  
  document.addEventListener("DOMContentLoaded",()=>{
    renderProjects(); renderFilters(); initViewer();
    $("#themeToggle").onclick=()=>document.body.classList.toggle("light");
    $("#year").textContent=new Date().getFullYear();
  });
  
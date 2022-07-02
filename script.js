(function () {
  const data = [
    {
      id: 1,
      company: "Photosnap",
      logo: "./images/photosnap.svg",
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 2,
      company: "Manage",
      logo: "./images/manage.svg",
      new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"],
    },
    {
      id: 3,
      company: "Account",
      logo: "./images/account.svg",
      new: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
    {
      id: 4,
      company: "MyHome",
      logo: "./images/myhome.svg",
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: "./images/loop-studios.svg",
      new: false,
      featured: false,
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["Ruby", "Sass"],
    },
    {
      id: 6,
      company: "FaceIt",
      logo: "./images/faceit.svg",
      new: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"],
    },
    {
      id: 7,
      company: "Shortly",
      logo: "./images/shortly.svg",
      new: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"],
    },
    {
      id: 8,
      company: "Insure",
      logo: "./images/insure.svg",
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"],
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: "./images/eyecam-co.svg",
      new: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"],
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: "./images/the-air-filter-company.svg",
      new: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
  ];

  let arFiltered = [];
  const filterContainer = document.querySelector(".filterContainer");
  const listContainer = document.querySelector(".listContainer");
  const createMarkup = function (datas = data) {
    return `${datas
      .map((ele) => {
        return `
		<div class="job${ele.featured ? " featuredBorder" : ""}" data-id="${ele.id}">
		     <div class="infoWrapper">
		        <div class="container">
		            <div class="pictureContainer">
		              <img src="${ele.logo}" class="roundPic">
		            </div>
		            <div class="namesWrapper">
		              <div class="names">
		                <p>${ele.company}</p>${
          ele.new ? `<span class="new">New!</span>` : ""
        }${ele.featured ? `<span class="featured">Featured</span>` : ""}
		              </div>
		              <div class="position">
		                <h3>${ele.position}</h3>
		              </div>

		              <div>
		              <ul class="someDetails"><li>${ele.postedAt}</li><li>${
          ele.contract
        }</li><li>${ele.location}</li></ul>
		              </div>
		            </div>
		        </div>
		        <div class="requirements">
		            ${
                  ele.role
                    ? `<div class="requirement" data-role="${ele.role}"><p>${ele.role}</p></div>`
                    : ""
                }
		            ${
                  ele.level
                    ? `<div class="requirement" data-level="${ele.level}"><p>${ele.level}</p></div>`
                    : ""
                }
		            ${
                  ele.languages
                    ? ele.languages
                        .map(
                          (lang) =>
                            `<div class="requirement" data-languages="${lang}"><p>${lang}</p></div>`
                        )
                        .join("")
                    : ""
                }
		            ${
                  ele.tools
                    ? ele.tools
                        .map(
                          (tool) =>
                            `<div class="requirement" data-tools="${tool}"><p>${tool}</p></div>`
                        )
                        .join("")
                    : ""
                }
		        </div>
		     </div>
    	</div>`;
      })
      .join("")}`;
  };

  const init = function () {
    const markup = createMarkup();
    listContainer.insertAdjacentHTML("afterbegin", markup);
  };

  init();

  const updateList = function () {
    const filtered = data.filter(function ({ role, level, languages, tools }) {
      if (
        arFiltered.every(
          (val) =>
            val === role ||
            val === level ||
            languages.some((e) => e === val) ||
            tools.some((e) => e === val)
        )
      ) {
        return {};
      }
    });
    listContainer.innerHTML = "";
    listContainer.insertAdjacentHTML("afterbegin", createMarkup(filtered));
  };

  listContainer.addEventListener("click", function (e) {
    const targetElement = e.target.closest(".requirement");
    const jobElement = e.target.closest(".job");

    if (!targetElement) return;

    const val = Object.values(targetElement.dataset).join("");

    if (arFiltered.some((ele) => ele === val)) return;

    const caps = `
	  <div class="capsule" data-remove="${val}">
        <div class="selected"><p>${val}</p></div>
        <span class="remove">
        	<img src="images/icon-remove.svg">
        </span>
    </div>`;

    arFiltered.push(val);

    filterContainer.classList.remove("hidden");

    filterContainer
      .querySelector(".filter")
      .insertAdjacentHTML("beforeend", caps);

    updateList();
  });

  filterContainer.addEventListener("click", function (e) {
    const capsContainer = e.target.closest(".filter");
    const removeBtn = e.target.closest(".remove");
    const clearBtn = e.target.closest(".clear");

    if (clearBtn) {
      arFiltered = [];
      filterContainer.querySelector(".filter").innerHTML = "";
      filterContainer.classList.add("hidden");
      updateList();
      return;
    }

    if (!removeBtn) return;

    const removeAttr = removeBtn.closest(".capsule").dataset.remove;

    arFiltered.splice(arFiltered.indexOf(removeAttr), 1);

    if (arFiltered.length === 0) filterContainer.classList.add("hidden");

    removeBtn.closest(".capsule").remove();
    updateList();
  });
})();

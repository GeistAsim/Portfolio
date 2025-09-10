import { server } from "./server.js";

// load html page function
async function loadpages(i, push = true) {

    const urls = [
        "pages/home.html",
        "pages/about.html",
        "pages/project.html",
        "pages/contact.html",
    ]

    try {
        const res = await fetch(urls[i])
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

        const htmlpage = await res.text()

        const template = document.createElement("template");
        template.innerHTML = htmlpage.trim();

        const container = document.querySelector(".container");
        container.replaceChildren(template.content.cloneNode(true));

        initDropdowns()
        fileDropdowns()
        activateEdu2Clicks()

        // display home
        if (i === 0) {
            await server("home");
        }

        // show about_text when about.html loaded
        else if (i === 1) {
            paraloading(0);
        }

        else if (i === 2) {
            await displayProject()
        }

        else if (i === 3) {
            await sendFormData()
        }

        // Pushing history only when needed
        if (push) {
            history.pushState({ index: i }, "", `#page${i}`)
        }

        updateNavHighlight(i)

    } catch (err) {
        console.error("Failed to load page:", err)
    }

}


// send form data
async function sendFormData() {
    let form = document.querySelector("#contactform");
    console.log(form);
    form.addEventListener("submit", async (s) => {
        s.preventDefault();

        // collect form data
        const formdata = {
            name: document.getElementById("clname").value,
            email: document.getElementById("clemail").value,
            subject: document.getElementById("clsubject").value,
            message: document.getElementById("clmessage").value
        }

        let response = await server("contact", formdata)

        if (response && response.status === "success") {
            alert("Message sent successfuly")
            form.reset();
        }
        else {
            alert("XX Message failed")
        }
        console.log("clicked");
    })
}


// project display
async function displayProject() {
    try {
        // get the projects detail
        let projectData = await server("projects");

        // get all the projects name
        let posts = projectData.map(item => item.project)

        // get target
        let postbox = document.getElementById("projectbox");

        if (!postbox) {
            console.error("No element with id projectbox");
            return;
        }

        for (let p of posts) {
            let posts_data = projectData.find(item => item.project === p);

            let projectHTML = `
                                <div class="box flex">
                        <div class="head flex">
                            <div class="heading">
                                <span>Project </span>
                                <span id="postno"></span>
                                <span class="spnHead">// </span>
                                <span class="spnHead" id="postname">${posts_data.project}</span>
                            </div>
                        </div>
                        <div class="tile flex">
                            <div class="mid">
                                <a class="projectlink" href="${posts_data.link}" target="_blank">
                                    <img src="${posts_data.imglink}" alt="${posts_data.project}">
                                </a>
                            </div>
                            <div class="last flex hovertile">
                                <p id="postdesc">${posts_data.project_desc}</p>
                                <a class="prjt-btn projectlink" href="${posts_data.link}" target="_blank">
                                    <button class="btn hoverbtn">
                                        view-project
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>`


            // insert new projects
            postbox.insertAdjacentHTML("beforeend", projectHTML)
        }
    }
    catch (error) {
        console.error("filed to load projects", error);
        return null;
    }

}

// about paragraph loading function
async function paraloading(i) {
    try {
        let selectfile = document.querySelectorAll(".edu-2");
        Array.from(selectfile).forEach(c => {
            c.style.color = ""
        });
        selectfile[i].style.color = "#FFA1AD"

        // map index to about page key
        const aboutMap = ["Bio", "Interest", "Education"];
        let key = aboutMap[i]

        // fetch content from the server
        let content = await server("about", key);

        // find target data
        let aboutBox = document.querySelector(".onFile");

        if (aboutBox) {
            aboutBox.textContent = content || "no data found";
        }

    } catch (err) {
        console.error("Failed to load about para:", err)
    }
}

// add eevent listner to the files
function activateEdu2Clicks() {
    const fileMap = {
        "my-info": 0,
        "my-interest": 1,
        "my-edu": 2
    };

    let files = document.querySelectorAll(".edu-2")
    files.forEach(item => {
        item.addEventListener("click", () => {
            // for (let key in fileMap) {
            //     if (item.classList.contains(key)) {
            //         paraloading(fileMap[key]);
            //         break;

            const key = Object.keys(fileMap).find(k => item.classList.contains(k));
            if (key) {
                paraloading(fileMap[key]);
            }
        });
    });

    // change svg
    let imgContainer = document.querySelectorAll(".svgChange")

    imgContainer.forEach(ele => {

        ele.addEventListener("click", () => {

            let icon = ele.querySelector(".direct-1")
            if (icon) {
                const fileName = icon.src.split("/").pop();
                icon.src = fileName === "down_arrow.svg"
                    ? "images/svg/right_arrow_solid.svg"
                    : "images/svg/down_arrow.svg";
            }
        })
    })
}



// initialize drop down menu for about
function initDropdowns() {
    setupDropdown(".pDrop", ".edu");
    setupDropdown(".conDrop", ".mail");
    // setupDropdown(".projtDrop", ".projects");

    function setupDropdown(triggerSelector, contentSelector) {
        let triggers = document.querySelectorAll(triggerSelector);
        triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                let contents = trigger.parentElement.querySelectorAll(contentSelector);
                contents.forEach(item => {
                    item.style.display = (item.style.display === "flex") ? "none" : "flex";

                    let icon = trigger.querySelector(".direct");
                    if (icon) {
                        const fileName = icon.src.split("/").pop();
                        icon.src = fileName === "down_arrow.svg"
                            ? "images/svg/right_arrow_solid.svg"
                            : "images/svg/down_arrow.svg";
                    }
                });
            });
        });
    }
}

// function for opening files in personal-info section
function fileDropdowns() {
    setupDropdownFiles(".pFdrop", ".my-info")
    setupDropdownFiles(".iFdrop", ".my-interest")
    setupDropdownFiles(".eFdrop", ".my-edu")

    function setupDropdownFiles(triggerParent, triggerClass) {
        let selects = document.querySelectorAll(triggerParent)
        // console.log(selects);

        selects.forEach(select => {
            select.addEventListener("click", () => {
                let files = Array.from(select.parentElement.querySelectorAll(triggerClass))
                files.forEach(item => {
                    item.style.display = (item.style.display === "flex") ? "none" : "flex";
                })
            })
        })
    }
}

// close menu bar
function closeMenuBar() {
    // add event listner to close side bar
    let cls = document.querySelectorAll(".close")
    cls.forEach(close => {
        close.addEventListener("click", () => {
            console.log("close");
            let show = document.querySelector(".nav-right")
            show.style.right = "-110%"
        })
    })
}

// function to update nav highlight
function updateNavHighlight(i) {
    let elements = document.querySelector(".r-left").children
    Array.from(elements).forEach(e => {
        e.style.color = "";
        e.style.borderBottom = "";
    });
    elements[i].style.color = "#FFA1AD"
    elements[i].style.borderBottom = "1px solid #FFA1AD"
}

// main function
function main() {

    let elements = document.querySelector(".r-left")

    let itemEle = elements.children

    // add event listner to handle backword/forword
    window.addEventListener("popstate", (event) => {
        let i = event.state?.index ?? 0;
        loadpages(i, false)
    })

    // on page load
    window.addEventListener("DOMContentLoaded", () => {
        let pageIndx = 0;
        let currentpageIndx = window.location.hash;
        if (currentpageIndx.startsWith("#page")) {
            let indx = parseInt(currentpageIndx.replace("#page", ""));
            if (!isNaN(indx)) pageIndx = indx;
        }

        loadpages(pageIndx)
    });


    // humburger activating click
    let hmbrgr = document.querySelector(".menu")
    hmbrgr.addEventListener("click", () => {
        console.log("humburger");
        let show = document.querySelector(".nav-right")
        show.style.right = "1px"
    })

    closeMenuBar()

    // dynamic item click on nav btn
    Array.from(itemEle).forEach((item, i) => {
        // console.log(item);
        item.addEventListener("click", () => {
            // load pages
            loadpages(i)
        })
    })
}

main()
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

        // show about_text when about.html loaded
        if (i === 1) {
            paraloading(0)
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

// about paragraph loading function
async function paraloading(i) {
    const paras = [
        "pages/about_me.txt",
        "pages/interest.txt",
        "pages/education.txt",
    ]

    if (typeof i !== "number" || i < 0 || i >= paras.length) {
        console.error("Invalid index passed to paraloading:", i);
        return;
    }

    try {
        const res = await fetch(paras[i])
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

        const aboutpage = await res.text(res)

        const paraEle = document.querySelector(".onFile")
        paraEle.textContent = aboutpage.trim()

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
            for (let key in fileMap) {
                if (item.classList.contains(key)) {
                    paraloading(fileMap[key]);
                    break;
                }
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
    console.log(elements);

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
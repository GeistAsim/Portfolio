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

        // Push history only when needed
        if (push) {
            history.pushState({ index: i }, "", `#page${i}`);
        }

        // Update nav item highlight
        updateNavHighlight(i)

    } catch (err) {
        console.error("Failed to load page:", err)
    }

}

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

        const aboutpage = await res.text()

        const paraEle = document.querySelector(".onFile")
        paraEle.textContent = aboutpage.trim()
    } catch (err) {
        console.error("Failed to load about para:", err)
    }
}

// initialize drop down menu for about
function initDropdowns() {
    setupDropdown(".pDrop", ".edu");
    setupDropdown(".conDrop", ".mail");
    setupDropdown(".projtDrop", ".projects");

    function setupDropdown(triggerSelector, contentSelector) {
        let triggers = document.querySelectorAll(triggerSelector);
        triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                let contents = trigger.parentElement.querySelectorAll(contentSelector);
                contents.forEach(item => {
                    item.style.display = (item.style.display === "flex") ? "none" : "flex";
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

        selects.forEach(select => {
            select.addEventListener("click", () => {
                let files = select.parentElement.querySelectorAll(triggerClass)
                files.forEach(item => {
                    item.style.display = (item.style.display === "flex") ? "none" : "flex";
                    item.addEventListener("click", () => {
                        // Add paraloading logic if needed
                    })
                })
            })
        })
    }
}

function closeMenuBar() {
    let cls = document.querySelectorAll(".close")
    cls.forEach(close => {
        close.addEventListener("click", () => {
            let show = document.querySelector(".nav-right")
            show.style.right = "-110%"
        })
    })
}

// helper function to update nav highlight
function updateNavHighlight(index) {
    const elements = document.querySelector(".r-left").children
    Array.from(elements).forEach(ele => {
        ele.style.color = "";
        ele.style.borderBottom = ""
    });
    elements[index].style.color = "#FFA1AD"
    elements[index].style.borderBottom = "1px solid #FFA1AD"
}

// main function
function main() {

    let elements = document.querySelector(".r-left")
    let itemEle = elements.children

    // Handle back/forward browser button
    window.addEventListener("popstate", (event) => {
        const i = event.state?.index ?? 0;
        loadpages(i, false);
    });

    // On page load
    window.addEventListener("DOMContentLoaded", () => {
        let pageIndex = 0;

        const hash = window.location.hash;
        if (hash.startsWith("#page")) {
            const idx = parseInt(hash.replace("#page", ""));
            if (!isNaN(idx)) pageIndex = idx;
        }

        loadpages(pageIndex);
    });

    // Hamburger menu
    let hmbrgr = document.querySelector(".menu")
    hmbrgr.addEventListener("click", () => {
        let show = document.querySelector(".nav-right")
        show.style.right = "1px"
    })

    closeMenuBar()

    // nav click handling
    Array.from(itemEle).forEach((item, i) => {
        item.addEventListener("click", () => {
            loadpages(i); // history will be pushed
        })
    })
}

main()
// load html page function
async function loadpages(i) {

    const urls = [
        "pages/home.html",
        "pages/about.html",
        "pages/project.html",
        "pages/contact.html",
    ]

    try {
        const res = await fetch(urls[i])
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

        const htmlpage = await res.text(res)

        const template = document.createElement("template");
        template.innerHTML = htmlpage.trim();

        const container = document.querySelector(".container");
        container.replaceChildren(template.content.cloneNode(true));

        initDropdowns()
        fileDropdowns()
    } catch (err) {
        console.error("Failed to load page:", err)
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
        console.log(selects);

        selects.forEach(select => {
            select.addEventListener("click", () => {
                let files = select.parentElement.querySelectorAll(triggerClass)
                files.forEach(item => {
                    item.style.display = (item.style.display === "flex") ? "none" : "flex";
                })
            })
        })
    }
}

// main function
function main() {

    // humburger activating click
    let hmbrgr = document.querySelector(".menu")
    hmbrgr.addEventListener("click", () => {
        console.log("humburger");
        let show = document.querySelector(".nav-right")
        show.style.right = "1px"
    })

    // add event listner to close side bar
    let cls = document.querySelector(".cls")
    cls.addEventListener("click", () => {
        console.log("close");
        let show = document.querySelector(".nav-right")
        show.style.right = "-110%"
    })

    let elements = document.querySelector(".r-left")
    console.log(elements);

    let itemEle = elements.children

    // Highlight Home on page load (index 0)
    window.addEventListener("DOMContentLoaded", () => {
        itemEle[0].style.color = "#FFA1AD";
        itemEle[0].style.borderBottom = "1px solid #FFA1AD";

        loadpages(0)  // load home page default

    });

    // dynamic item click on nav btn and its color, border changing
    Array.from(itemEle).forEach((item, i) => {
        // console.log(item);
        item.addEventListener("click", () => {

            // load pages
            loadpages(i)

            // change the nav bar botton color on click

            // Reset all colors first
            Array.from(itemEle).forEach(ele => {
                ele.style.color = "";
                ele.style.borderBottom = ""
            });

            item.style.color = "#FFA1AD"
            item.style.borderBottom = "1px solid #FFA1AD"
        })
    })

}

main()
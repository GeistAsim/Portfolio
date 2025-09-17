import { server } from "./server_admin.js";

// pages route
const routes = ["home", "about", "projects", "links"]

// fetch pages
async function loadadmin(i, push = true) {
    const url = [
        "pages/home.html",
        "pages/about.html",
        "pages/projects.html",
        "pages/links.html"
    ];

    try {
        let res = await fetch(url[i]);
        if (!res.ok) throw Error(`HTTP error: ${res.status}`);

        const htmlpage = await res.text();

        const template = document.createElement("template");
        template.innerHTML = htmlpage.trim();

        const container = document.getElementById("container");
        container.replaceChildren(template.content.cloneNode(true));

        if (i === 3) {
            await weblinks();
        }

        if (push) {
            history.pushState({ index: i }, "", `#${routes[i]}`);
        }

    }
    catch (err) {
        console.error(`Failed to load pages: ${err}`);
    }

}


// show form
async function showlinkform(mode = "post", data = null) {
    const formbox = document.getElementById("addlink");
    const form = formbox.querySelector("form");
    const btn = form.querySelector("#btn")

    // show overlay
    formbox.classList.remove("hidden");
    formbox.classList.add("flex");

    // change button title
    btn.textContent = mode === "post" ? "Add Link" : "Update Link";

    form.querySelectorAll(".forminput").forEach(e => e.value = "");
    if (mode === "put" && data) {
        form.querySelector("#linkname").value = data.title || "";
        form.querySelector("#linkurl").value = data.url || "";
        form.dataset.id = data.id;
    }
    else {
        delete form.dataset.id;
    }

    // handle submit
    form.onsubmit = async (e) => {
        e.preventDefault();

        const formDATA = {
            "title": document.getElementById("linkname").value,
            "url": document.getElementById("linkurl").value,
        };

        let response;

        try {
            if (mode == "post") {
                response = await server("postlinks", "POST", formDATA);
            }
            else {
                formDATA.id = form.dataset.id;
                response = await server("postlinks", "PUT", formDATA);
            }

            if (response && response.ok) {
                alert(mode == "post" ? "Add Successfully" : "Updated Successfully");
                form.reset()

                // hide after success
                formbox.classList.remove("flex");
                formbox.classList.add("hidden");

                // referesh table
                await weblinks();
            }
            else {
                alert("❌ Failed to submit");
            }

        }
        catch (err) {
            alert("Failed to connect backend form")
            console.error("Failed to connect backend form: ", err);
            return;
        }

    }

    //  hide if not submit
    let clsform = document.getElementById("clsform")
    clsform.addEventListener("click", () => {
        formbox.classList.remove("flex");
        formbox.classList.add("hidden");
    });

}



// web links
async function weblinks() {
    try {
        // get the links response
        let linksres = await server("links");

        // get all the links web name
        let linksdata = linksres.map(item => item.title);

        // get target element
        let linkbox = document.getElementById("links");

        if (!linkbox) {
            console.error("Could not find linkbox element");
            return;
        }

        linkbox.innerHTML = "";
        for (let l of linksdata) {
            let getlinks = linksres.find(item => item.title == l)

            let linkhtml = `<tr class="border-b">
                    <td id="linkID" class="p-3 border-r text-center">${getlinks.title}</td>
                    <td id="link" class="p-3 border-r text-justify">${getlinks.url}</td>
                    <td class="p-3 flex items-center justify-center gap-3">
                        <button data-id="${getlinks.id}" type="submit" class="updatebtn bg-gray-800 text-white py-2 px-3 rounded-xl cursor-pointer">
                            Update
                        </button>
                        <button data-id="${getlinks.id}" type="submit" class="hidden bg-red-800 text-white py-2 px-4 rounded-xl cursor-pointer">
                            Delete
                        </button>
                    </td>
                </tr>`

            // insert links in tables
            linkbox.insertAdjacentHTML("afterbegin", linkhtml)
        }

        // new form
        document.getElementById("newbtn").addEventListener("click", async () => {
            await showlinkform("post");
        });

        // update form
        document.querySelectorAll(".updatebtn").forEach(btn => {
            btn.addEventListener("click", async () => {
                const linkID = btn.getAttribute("data-id");
                const link = linksres.find(item => item.id == linkID)
                console.log("link ID: ", linkID);
                console.log("link: ", link);

                await showlinkform("put", link);
            })
        })

    }
    catch (err) {
        console.error("Failed to load links: ", err);
        return;
    }
}


async function main() {
    // get nav buttons
    let navbtn = document.querySelectorAll(".navBtn")

    window.addEventListener("popstate", async (event) => {
        let i = event.state?.index ?? 0;
        await loadadmin(i, false)
    });

    // on page load
    window.addEventListener("DOMContentLoaded", async () => {
        let pageIndx = 0;
        let currentpageIndx = window.location.hash.replace("#", "");
        let indx = routes.indexOf(currentpageIndx);

        if (indx !== -1) {
            pageIndx = indx;
        }

        await loadadmin(pageIndx);
    });

    navbtn.forEach((item, i) => {
        item.addEventListener("click", async () => {
            // load page
            await loadadmin(i);
        });
    });
}

main()
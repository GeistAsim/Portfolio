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

        if (i === 1) {
            await aboutme();
        }

        else if (i === 2) {
            await projects();
        }

        else if (i === 3) {
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
async function showform({
    formID,
    mode = "POST",
    data = null,
    inputmap = {},
    endpoint = "",
    refreshFn = null
} = {}) {
    const formbox = document.getElementById(formID);

    if (!formbox) throw Error("Formbox not found: ", formID);

    const form = formbox.querySelector("form");
    const btn = form.querySelector("#btn")

    // show overlay
    formbox.classList.remove("hidden");
    formbox.classList.add("flex");

    // change button title
    btn.textContent = mode === "post" ? "Add" : "Update";

    // clear input
    form.querySelectorAll(".forminput").forEach(e => e.value = "");

    // prefill (for edit)
    if (mode === "put" && data) {
        for (const key in inputmap) {
            const el = form.querySelector(inputmap[key]);
            if (el) el.value = data[key] ?? "";
        }
        form.dataset.id = data.id;
    }
    else {
        delete form.dataset.id;
    }

    // handle submit
    form.onsubmit = async (e) => {
        e.preventDefault();

        const formDATA = {};
        for (const key in inputmap) {
            const el = document.querySelector(inputmap[key]);
            formDATA[key] = el ? el.value.trim() : "";
        };
        if (mode === "put" && form.dataset.id) formDATA.id = form.dataset.id;

        try {
            const method = mode === "post" ? "POST" : "PUT";
            const response = await server(endpoint, method.toUpperCase(), formDATA);

            if (response && response.ok) {
                alert(mode == "post" ? "Add Successfully" : "Updated Successfully");
                form.reset()

                // hide after success
                formbox.classList.remove("flex");
                formbox.classList.add("hidden");

                // feresh function
                if (typeof refreshFn === "function") await refreshFn();
            }
            else {
                alert("❌ Failed to submit");
            }

        }
        catch (err) {
            alert("Failed to connect backend form")
            console.error("Failed to connect backend form: ", err);
        }

    }

    //  hide if not submit
    let clsform = document.getElementById("clsform")
    clsform.addEventListener("click", () => {
        formbox.classList.remove("flex");
        formbox.classList.add("hidden");
    });

}

// about page
async function aboutme() {
    try {
        // get the response
        let aboutdata = await server("about");

        let aboutname = aboutdata.map(item => item.title);


        let aboutbox = document.getElementById("abouttable");
        if (!aboutbox) {
            console.error("aboutbox not found!");
        }

        aboutbox.innerHTML = "";
        for (let a of aboutname) {
            let getabout = aboutdata.find(item => item.title == a);

            let abouthtml = `<tr class="border-b">
                    <td class="p-3 border-r text-center">${getabout.title}</td>
                    <td class="p-3 border-r text-justify">${getabout.desc}</td>
                    <td class="p-3 flex items-center justify-center gap-3">
                        <button data-id="${getabout.id}" type="submit"
                            class="updateaboutbtn bg-gray-800 text-[16px] text-white py-2 px-3 rounded-xl cursor-pointer">
                            Update
                        </button>
                    </td>
                </tr>`

            // insert data in table
            aboutbox.insertAdjacentHTML("afterbegin", abouthtml)
        }

        // update the fields
        document.querySelectorAll(".updateaboutbtn").forEach(btn => {
            btn.addEventListener("click", async () => {
                let data_ID = btn.getAttribute("data-id");
                let ID = aboutdata.find(item => item.id == data_ID);
                await showform({
                    formID: "addabout",
                    mode: "put",
                    data: ID,
                    inputmap: {
                        "title": "#fieldname",
                        "desc": "#fielddesc"
                    },
                    endpoint: "aboutupdate",
                    refreshFn: aboutme
                })
            })
        })

    }
    catch (err) {
        console.error("Failed to load about data", err);
    }

}


// Prjects
async function projects() {
    try {
        // get the response
        let projectname = await server("projects");

        // get all the projects name
        let projectdata = projectname.map(item => item.project);

        // get target element
        let projectbox = document.getElementById("projects");

        if (!projectbox) {
            console.error("could not load projects");
        }

        projectbox.innerHTML = ""
        for (let p of projectdata) {
            let getprojets = projectname.find(item => item.project == p)

            let projecthtml = `<tr class="border-b">
                <td class="p-3 border-r text-center">${getprojets.project}</td>
                <td class="p-3 border-r text-justify">${getprojets.project_desc}</td>
                <td class="p-3 flex items-center justify-center gap-3">
                    <button data-id="${getprojets.id}" type="submit" class="updateformbtn bg-gray-800 text-white py-2 px-3 rounded-xl cursor-pointer">
                        Update
                    </button>
                    <button data-id="${getprojets.id}" type="submit" class="hidden bg-red-800 text-white py-2 px-4 rounded-xl cursor-pointer">
                        Delete
                    </button>
                </td>
            </tr>`

            // insert in table
            projectbox.insertAdjacentHTML("afterbegin", projecthtml);
        }

        // new form
        document.getElementById("newformbtn").addEventListener("click", async () => {
            await showform({
                formID: "projectform",
                mode: "post",
                inputmap: {
                    "project": "#projectname",
                    "project_desc": "#projectdesc",
                    "link": "#plink",
                    "imglink": "#imglink"
                },
                endpoint: "postprojects",
                refreshFn: projects
            });
        });

        // update project
        document.querySelectorAll(".updateformbtn").forEach(btn => {
            btn.addEventListener("click", async () => {
                const dataID = btn.getAttribute("data-id");
                const ID = projectname.find(item => item.id == dataID);
                await showform({
                    formID: "projectform",
                    mode: "put",
                    data: ID,
                    inputmap: {
                        "project": "#projectname",
                        "project_desc": "#projectdesc",
                        "link": "#plink",
                        "imglink": "#imglink"
                    },
                    endpoint: "postprojects",
                    refreshFn: projects
                });
            })
        })

    }
    catch (err) {
        console.error("Failed to laod projects: ", err);
    }
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
                        <button data-id="${getlinks.id}" type="submit" class="updateformbtn bg-gray-800 text-white py-2 px-3 rounded-xl cursor-pointer">
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
        document.getElementById("newformbtn").addEventListener("click", async () => {
            await showform({
                formID: "linkform",
                mode: "post",
                inputmap: {
                    "title": "#linkname",
                    "url": "#linkurl"
                },
                endpoint: "postlinks",
                refreshFn: weblinks
            });
        });

        // update form
        document.querySelectorAll(".updateformbtn").forEach(btn => {
            btn.addEventListener("click", async () => {
                const dataID = btn.getAttribute("data-id");
                const ID = linksres.find(item => item.id == dataID)
                await showform({
                    formID: "linkform",
                    mode: "put",
                    data: ID,
                    inputmap: {
                        "title": "#linkname",
                        "url": "#linkurl"
                    },
                    endpoint: "postlinks",
                    refreshFn: weblinks
                });
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
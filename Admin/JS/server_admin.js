// API 
const api = `https://my-backend-support.onrender.com`

// const api = `http://127.0.0.1:8000/api/` // For development


// fetch links
async function loadLinks() {
    try {
        // load links
        let res = await fetch(`${api}links`);
        if (!res) throw new Error("Failed to fetch links")

        const links_data = await res.json();

        return links_data;

    } catch (error) {
        console.error("Error loading links: ", error);
        return null;
    }
}

// add new links
async function postLinks(formDATA) {
    let res = await fetch(`${api}post/links`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formDATA)
    });

    // check response
    if (!res.ok) throw Error("Failed to add link");

    // return row response
    return res;
}

// upadate links
async function upadteLinks(formData) {
    let res = await fetch(`${api}update/links/${formData.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    // check response
    if (!res.ok) throw Error("Fialed to update");

    return res;
}

// getting about section data
async function loadAboutData() {
    try {
        // connect with about
        let res = await fetch(`${api}about`);
        if (!res.ok) throw new Error("Fail to load about data");

        let about_data = await res.json();

        return about_data;

    }
    catch (error) {
        console.error("Failed to load about data: ", error);
        return null;
    }
}

// Update about data
async function updateabout(aboutDATA) {
    try {
        let res = await fetch(`${api}update/about/${aboutDATA.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(aboutDATA)
        });
        if (!res.ok) throw Error("failed in res (about)");

        return res
    }
    catch (err) {
        console.error("Failed to connect about backend");
    }
}

// projects data
async function loadProjects() {
    try {
        let res = await fetch(`${api}projects`);
        if (!res.ok) throw Error("filed to load projects");

        let post = await res.json();

        // let found = post.find(p => p.project === project);
        // return found || null;
        return post
    }
    catch (error) {
        console.error("Failed to load projects: ", error);
        return null;
    }

}

// post projects
async function postProject(projectData) {
    let res = await fetch(`${api}add/project`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(projectData)
    });


    // check response
    if (!res.ok) throw Error("Failed to add link");

    // return row response
    return res;
}

// Update project
async function updateProject(projectData) {
    let res = await fetch(`${api}update/project/${projectData.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(projectData)
    });

    // check response
    if (!res.ok) throw Error("failed to update project");

    return res;
}


// main function
export async function server(page, m = null, key = null) {
    // about data
    if (page === "about") {
        return await loadAboutData();
    }

    else if (page === "aboutupdate" && key) {
        return await updateabout(key);
    }

    // projects
    else if (page === "projects") {
        return await loadProjects();
    }

    else if (page === "contact" && key) {
        return await sendMessage(key);
    }

    else if (page == "links") {
        return await loadLinks();
    }

    else if (page == "postlinks" && m && key) {
        if (m === "POST") {
            return await postLinks(key);
        }
        else if (m === "PUT") {
            return await upadteLinks(key);
        }
        else {
            return "No Method Allow";
        }
    }

    else if (page == "postprojects" && m && key) {
        if (m === "POST") {
            return await postProject(key);
        }
        else if (m === "PUT") {
            return await updateProject(key);
        }
        else {
            return "no Method Allow";
        }
    }

}
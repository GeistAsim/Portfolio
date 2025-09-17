// API 
const api = `http://127.0.0.1:8000/api/`


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
    console.log("FormDATA: ", formData.id);
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

        let found = about_data.find(about => about.title === title);
        return found ? found.desc : null;

    }
    catch (error) {
        console.error("Failed to load about data: ", error);
        return null;
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

// main function
export async function server(page, m = null, key = null) {
    // about data
    if (page === "about") {
        return await loadAboutData();
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
            return await upadteLinks(key)
        }
        else {
            return "No Method allow"
        }
    }

}
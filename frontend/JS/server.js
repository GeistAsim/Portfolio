// API 
const api = `http://127.0.0.1:8000/api/`


// fetch links
async function loadLinks(title) {
    try {
        // load links
        let res = await fetch(`${api}links`);
        if (!res) throw new Error("Failed to fetch links")

        const links_data = await res.json();

        let found = links_data.find(link => link.title === title)
        return found ? found.url : null;

    } catch (error) {
        console.error("Error loading links: ", error);
        return null;
    }
}


// fetch home data
async function loadHomeData() {
    try {
        // connect with home
        let res = await fetch(`${api}home`);

        // verify responce
        if (!res.ok) throw new Error("Failed to fetch home data");

        // make json formatted string
        let home = await res.json();

        // getting the object
        let home_data = home[0];

        // selecting and putting the content
        let name = document.querySelector(".name");
        name.textContent = home_data.name;

        const role = document.querySelector(".role");
        role.textContent = home_data.role;

        let github_link = document.querySelectorAll(".github_link");
        let git = await loadLinks("GitHub");

        github_link.forEach((g) => {
            // Add github link on all github entry point
            g.setAttribute("href", git);

            // add link in home
            if (g.getAttribute("id") == "git_hub") {
                g.textContent = git;
            }

            // add git username
            if (g.getAttribute("id") == "git_user") {
                g.textContent = home_data.github_username;
            }
        });
    }
    catch (error) {
        console.error("Error loading home data: ", error);
        return null;
    }
}


// getting about section data
async function loadAboutData(title) {
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


// Load Projects
// async function loadProjects(title) {
    
// }


// main function
export async function server(page, key=null){
    if (page === "home") {
        return await loadHomeData();
    }

    else if (page === "about" && key) {
        return await loadAboutData(key);
    }

    else if (page === "projects" && key) {
        return await loadProjects(key);
    }
}
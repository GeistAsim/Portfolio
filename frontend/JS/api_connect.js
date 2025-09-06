// API 
const api = `http://127.0.0.1:8000/api/`


// fetch links
export async function loadLinks(item) {
    try {
        // load links
        let res = await fetch(`${api}links`);
        if (!res) throw new Error("Failed to fetch links")

        const links_data = await res.json();
        let data = links_data[0][item];
        return data

    } catch (error) {
        console.error("Error loading links: ", error);
        return null;
    }
}


// fetch home data
export async function loadHomeData() {
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
        let git = await loadLinks("github_link");

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

loadHomeData()


// getting about section data
async function loadAboutData() {
    // connect with about
    let res = await fetch(`${my_api}about`);
    if (!res.ok) throw new Error ("Fail to load about data")
    
    let about = await res.json();

    // getting object
    let about_data = about[0]
    
    // Distructuring the about data
    // const 

}

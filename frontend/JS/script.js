async function loadHomeData() {
    const response = await fetch("http://127.0.0.1:8000/api/home");
    const data = await response.json();
    console.log("Backend says:", data);
}

loadHomeData();
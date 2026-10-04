function addMission() {
    const missionName = document.getElementById("missionName").value;
    const destination = document.getElementById("destination").value;
    const astronaut = document.getElementById("astronaut").value;
    const status = document.getElementById("status").value;

    if (missionName === "" || destination === "" || astronaut === "") {
        alert("Please fill in all mission information.");
        return;
    }

    const missions = document.getElementById("missions");

    // Remove the "No missions" message
    if (missions.innerHTML.includes("No missions added yet.")) {
        missions.innerHTML = "";
    }

    const mission = document.createElement("div");
    mission.className = "mission";

    mission.innerHTML = `
        <h3>🚀 ${missionName}</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Astronaut:</strong> ${astronaut}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;

    missions.appendChild(mission);

    // Clear the form
    document.getElementById("missionName").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("astronaut").value = "";
}

//On submit button click, send post request to server with form data 
function submitVisit() {
    const submitButton = document.getElementById("submitbutton");
    submitButton.addEventListener("click", () => {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const visitor = {
            Name: name,
            Email: email
        };
        sendVisitToAPI(visitor);
    })
}

async function sendVisitToAPI(visitor) {
    //TESTING PURPOSES:
    alert("Sending visit to API: " + JSON.stringify(visitor));
    const response = await fetch("API LINK HERE", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(visitor)
    });

    if (response.ok) {
        alert("Thank you for your visit!");
    }
    else {
        const errorText = await response.text();
        throw new Error("Failed to submit visit: " + errorText);
    }
    return await response.json();
}

function main()
{
    submitVisit();
}
main();
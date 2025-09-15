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
        alert("button was pressed");
    })
}

async function sendVisitToAPI(visitor) {
    //TESTING PURPOSES:
    console.log("Sending visit to API: " + JSON.stringify(visitor));
    try {
        alert("Sending visit to API: " + JSON.stringify(visitor));
        const response = await fetch("https://visitlogapp-anb8gkhwc4cmcway.swedencentral-01.azurewebsites.net/api/PostFunction", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitor),
        });
        console.log("reached this");
        if (response.status === 200) {
            alert("Thank you for your visit!");
        }
        else {
            const errorText = await response.text();
            throw new Error("Failed to submit visit: " + errorText);
        }
        console.log("Response from API: ", response);
        return await response.json();
    } catch (error) {
        alert("Network or server error: " + error.message);
        console.error("Fetch error:", error);
    }
}

function main()
{
    document.addEventListener("DOMContentLoaded", submitVisit());
    //submitVisit();
}
main();
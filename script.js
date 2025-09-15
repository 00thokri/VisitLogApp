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
    
    try {
        
        const response = await fetch("https://visitlogapp-anb8gkhwc4cmcway.swedencentral-01.azurewebsites.net/api/PostFunction", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitor),
        });
        
        if (response.status === 201) {
            alert("Your visit has been logged successfully!");
        }
        else {
            const errorText = await response.text();
            throw new Error("Failed to submit visit: " + errorText);
        }
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
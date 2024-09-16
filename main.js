function clicked(a) {
    window.type = a;
}

function insert_data() {
    // Collecting form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    // Construct the payload
    var payload = {
        "Name": name,
        "Email": email,
        "Subject": subject,
        "Message": message
    };

    // Setting up headers
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(payload);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // Making the POST request
    fetch("/server/Customer_Review/insert_data", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

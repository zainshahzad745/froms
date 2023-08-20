document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#inputs[type='text']");
    const passwordInput = document.querySelector("#inputs[type='password']");
    const phoneInput = document.querySelector("#inputs[type='number']");
    const projectsRadio = document.querySelector("#button3 input");
    const designsRadio = document.querySelector("#button4 input");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
            phone: phoneInput.value,
            radioOption: projectsRadio.checked ? "Projects" : "Designs"
        };

        console.log(formData); // Display the form data in the browser console

        // Validate email using a simple pattern
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password (you can add more criteria if needed)
        if (passwordInput.value.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // Validate phone number
        const phoneNumberPattern = /^\d{11}$/;
        if (!phoneNumberPattern.test(phoneInput.value)) {
            alert("Phone number must be 11 digits long.");
            return;
        }

        // Validate radio buttons
        if (!projectsRadio.checked && !designsRadio.checked) {
            alert("Please select either 'Projects' or 'Designs'.");
            return;
        }

        // If all validations pass, you can submit the form or perform other actions here
        // For demonstration, we'll just show an alert
        alert("Form submitted successfully!");

        // For demonstration, we'll just show an alert with the collected data
        const alertMessage = `Email: ${formData.email}\nPassword: ${formData.password}\nPhone: ${formData.phone}\nOption: ${formData.radioOption}`;
        alert(alertMessage);
    });
});
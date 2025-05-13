// RECIPE POP UP MODAL SECTION

// SETS UP THE BUTTONS THAT WILL OPEN THE RECIPE MODALS
var btns = document.querySelectorAll("input.modal-button");

// Defines all modals for each recipe 
var modals = document.querySelectorAll(".recipe-modal");

// Get the <span> elements that close the modals
var closeBtn = document.getElementsByClassName("close-btn");

// Variable to store timeout references for each modal
var modalTimers = new Map();

// When the user clicks a recipe button, open the corresponding modal 
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        event.preventDefault(); // Prevents page jump if using <a href="#modalID">
        var modalSelector = event.target.getAttribute("href");
        var modal = document.querySelector(modalSelector);

        if (modal) {
            modal.style.display = "block";

            // Clear existing timer if any for this modal
            if (modalTimers.has(modal)) {
                clearTimeout(modalTimers.get(modal));
            }

            // Set a new timer to auto-close this modal after 10 seconds
            var timer = setTimeout(() => {
                modal.style.display = "none";
                modalTimers.delete(modal); // Clean up
            }, 10000);

            // Store the timer reference
            modalTimers.set(modal, timer);
        }
    };
}

// When the user clicks on a close button (X), close all modals
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var j = 0; j < modals.length; j++) {
            modals[j].style.display = "none";
            if (modalTimers.has(modals[j])) {
                clearTimeout(modalTimers.get(modals[j]));
                modalTimers.delete(modals[j]);
            }
        }
    };
}


// EMAIL VALIDATION 
document.getElementById('contactForm').addEventListener('submit', 
    function (event) {
        event.preventDefault();
        // Variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Email Pattern checks for all symbols that would be needed for an email address
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Use this variable to display message if fields are filled.
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !email || !phone || !message) {
            valMsg.innerHTML = '<p style="color: red;">Please fill out all fields.</p>';
        } else if (!emailPattern.test(email)) {
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email address.</p>';
        } else {
            valMsg.innerHTML = '<p style="color: green;">Thank you for your message!</p>';
        }

        // Check if the subscribe checkbox exists before accessing it
        const subscribeCheckbox = document.getElementById('subscribe');
        const subscribe = subscribeCheckbox ? subscribeCheckbox.checked : false;

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: subscribe
        };
        
        console.log(JSON.stringify(formData));
    }
);

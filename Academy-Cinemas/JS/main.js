//Initialize Pop overs

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover',

    })
});

//Initialize toast
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//function to display toast with selected optons
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').ariaValueMax;

    var message ="Puchase confrimed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;


//Display toast
var toastBody = document.getElementById('toastBody');
toastBody.textContent = message;
var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}
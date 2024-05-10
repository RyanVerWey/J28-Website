document.getElementById('close-banner').onclick = function () {
    document.getElementById('announcement-banner').style.display = 'none';
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("snapModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('addCalendarEvent').addEventListener('click', function() {
var event = [
'BEGIN:VCALENDAR',
'VERSION:2.0',
'BEGIN:VEVENT',
'URL:' + document.URL,
'DTSTART:20231117T200000Z', // Start time of the event in YYYYMMDDTHHMMSSZ format in UTC
'DTEND:20231117T220000Z', // End time of the event in YYYYMMDDTHHMMSSZ format in UTC
'SUMMARY:AI EXPO - Experience The Power of AI', // Event title
'DESCRIPTION:Join us for an engaging session on AI.', // Event description
'LOCATION:Venue Address', // Event location
'END:VEVENT',
'END:VCALENDAR'
].join('\n');

// Create a blob with the data
var blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });

// Create a link element, use it to download the blob, and then remove it
var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.setAttribute('download', 'ai_expo_event.ics');
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});

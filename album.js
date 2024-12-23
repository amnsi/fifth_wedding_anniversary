let currentAudio = null;

$(document).ready(function () { 

    $('button.engagement').click(function () {
        $('section.engagement').removeClass('d-none');
        $('section.wedding').addClass('d-none');
        $('section.reception').addClass('d-none');
        playSong("engagement");
    });

    $('button.wedding').click(function () {
        $('section.wedding').removeClass('d-none');
        $('section.engagement').addClass('d-none');
        $('section.reception').addClass('d-none');
        playSong("wedding");
    });

    $('button.reception').click(function () {
        $('section.reception').removeClass('d-none');
        $('section.engagement').addClass('d-none');
        $('section.wedding').addClass('d-none');
        playSong("reception");
    });

    $('button.light-theme-button').click(function () {
        $('html').attr('data-bs-theme', 'light');
    });

    $('button.dark-theme-button').click(function () {
        $('html').attr('data-bs-theme', 'dark');
    });
});

function playSong(typeOfEvent) {
        // Check if there is already a song playing, if so, stop it
        if (currentAudio !== null && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset the audio to the start
        }

        // Play the appropriate song based on the event
        switch (typeOfEvent) {
            case "engagement":
                currentAudio = new Audio("engagement.mp3");
                currentAudio.play();
                break;
            case "wedding":
                currentAudio = new Audio("wedding.mp3");
                currentAudio.play();
                break;
            case "reception":
                currentAudio = new Audio("reception.mp3");
                currentAudio.play();
                break;
            default:
                console.log("Invalid event: " + typeOfEvent);
                break;
        }
    }
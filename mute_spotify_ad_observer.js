let info_curr_song = document.querySelectorAll('[data-testid="now-playing-widget"]')[0];
let btn = document.getElementsByClassName('volume-bar__icon-button control-button')[0];

const root_playing_observer = new MutationObserver(function(mutated_elements) {
    
    let is_muted = btn.getAttribute('aria-label');

    mutated_elements.forEach((element) => {
        let aria_label = element.target.ariaLabel;

        if (aria_label == "Advertisement"){
            console.log("----> Keeping the sound muted, it's a Spotify AD!")

            if (is_muted == 'Mute'){
                btn.click();
            }


        } else {
            console.log("----> Playing the sound, isn't a Spotify AD!")

            if (is_muted == 'Unmute'){
                btn.click();
            }

            console.log(is_muted)

        }

    })

});

root_playing_observer.observe(
    info_curr_song, 
    {
        attributes: true,
    }
);

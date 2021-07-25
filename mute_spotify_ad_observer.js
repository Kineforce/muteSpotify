let info_curr_song = document.querySelectorAll('[data-testid="now-playing-widget"]')[0];
let btn = document.getElementsByClassName('volume-bar__icon-button control-button')[0];
let is_muted = btn.getAttribute('aria-label');

const root_playing_observer = new MutationObserver(function(mutated_elements) {
    
    mutated_elements.forEach((element) => {
        let aria_label = element.target.ariaLabel;

        if (aria_label == "Advertisement"){
            console.log("----> Keeping the sound muted, it's a Spotify AD!")
            console.log(mutated_elements)

            if (is_muted == 'Mute'){
                btn.click();
            }

        } else {
            console.log("----> Playing the sound, isn't a Spotify AD!")
            console.log(mutated_elements)

            if (is_muted == 'Unmute'){
                btn.click();
            }
        }

    })

});

root_playing_observer.observe(
    info_curr_song, 
    {
        attributes: true,
    }
);

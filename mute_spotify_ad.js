// Control variables
var mute = 'off';
var play = 'on';

// Listening each 0.5 seconds
main_listener = setInterval(()=>{
	// Sibling element of the element who shows the duration of the sound
	let progress_bar = document.getElementsByClassName('progress-bar-wrapper')[0];

	// Element who shows the duration of the sound
	let duration_sound = progress_bar.nextElementSibling.textContent;
	
	// Is playing an AD?
	let running_ad = 0;

	// Test for any evidence of a Spotify AD
	let ad_text = document.querySelectorAll('[data-testid="track-info-advertiser"]');
	let ad_link = document.querySelectorAll('');

	if (ad_text.search('Adver')){
		running_ad += 1;
	}

	if (ad_link.search('adclick')){
		running_ad += 1;
	}

	// If the sound duration is equal to 0:30, then it's a spotify ad
    if (running_ad > 0){
		// Log
		console.log("----> Keeping the sound muted, it's a Spotify AD!")

		// Flag to make only one click when the spotify ad comes
		play = 'off';

		// Then mutes the sound 
		if (mute == 'off'){
			// Click on the mute button 
			btn = document.getElementsByClassName('volume-bar__icon-button control-button')[0].click();

			// Change mute variable value to avoid multiple clicks
			mute = 'on';
		}

	} 

	// If the sound duration is not equal to 0:30, then it's just a regular song
	if (duration_sound === 0){
		// Log
		console.log("----> Playing the sound, isn't a Spotify AD!")
		
		// Flag to keep the flow when it'll need to mute the sound
		mute = 'off';

		// Unmute the sound again
		if (play == 'off'){
			// Click on the mute button
			btn = document.getElementsByClassName('volume-bar__icon-button control-button')[0].click();

			// Keep playing the sound, no need to click again to mute if isn't an spotify ad
			play = 'on';
		}

	}	

}, 500)
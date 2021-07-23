// Control variables
var mute = 'off';
var play = 'off';

// Listening each 0.5 seconds
main_listener = setInterval(()=>{
	// Sibling element of the element who shows the duration of the sound
	let progress_bar = document.getElementsByClassName('progress-bar-wrapper')[0];

	// Is playing an AD?
	let running_ad = 0;

	// Test for any evidence of a Spotify AD using custom data attributes

	let ad_text_1 = document.querySelectorAll('[data-testid="track-info-advertiser"]');
	let ad_text_2 = document.querySelectorAll('[data-testid="context-item-info-ad-subtitle"]');
	
	// Array of evidences
	let = arr_ad = [
		ad_text_1,
		ad_text_2
	];

	// Check if there's an non element in the list of evidences
	arr_ad.map((possible_ad)=>{
		if (possible_ad.length > 0){
			// If exists, increment control play or mute variable
			running_ad += 1;
		}
	})

	// Get the button element
	btn = document.getElementsByClassName('volume-bar__icon-button control-button')[0];

	// Check if the button is or isn't muted
	is_muted = btn.getAttribute('aria-label');

	// If the sound duration is equal to 0:30, then it's a spotify ad
    if (running_ad > 0){
		// Log
		console.log("----> Keeping the sound muted, it's a Spotify AD!")
		
		// If isn't muted, mute
		if (is_muted == 'Mute'){
			btn.click();
		}

	} 

	// If no evidence of AD exists then it's just a regular song
	if (running_ad === 0){
		// Log
		console.log("----> Playing the sound, isn't a Spotify AD!")

		// If it's muted, unmute
		if (is_muted == 'Unmute'){
			btn.click();
		}

	}	

}, 500)

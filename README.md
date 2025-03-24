:bulb: **INSPIRATION**:
<br> 

:hospital: Do you just ever get **tired** and **frustrated** of the long wait times :clock5: you have when you go to a walk in clinic? I'm assuming you do and that's why we created WellWait! 

The idea stemmed from a repeated problem we personally experienced of having to wait at walk in clinics when we needed help at a particular time instead of having to rely on future appointments to go.

<br>

**WHAT WELLWAIT DOES**: 

Wellwait is a webapp that tells you the wait times as well as the time to reach the clinics around you after you give it your location. The one with the least sum 
(wait time + time to get there by car) will be placed at the top with them chronologically being listed as the times increase. This just saves you a whole lot of time and 
instead of going to a clinic where you'll have a long wait time, you can directly go to one where you'll have to wait for less. Isn't that *amazing* ?! 

<br> 

**HOW IT WORKS**:

:arrow_right: We created dummy past data about clinics and sent that to Nebius API, which returned predicted wait times. 

:arrow_right: This data was then stored into a list of objects which was then sorted to give the least wait time first, followed by the rest sequentially. 

:arrow_right: The Google Maps JavaScript API allows us to display interactive maps, while the Google Places API enables users to search for and discover relevant locations like clinics

:arrow_right: The Google Geocoding API helps us convert addresses into geographic coordinates, making it easier to locate and display clinics on the map.

<br>

**THE CHALLENGES WE FACED**:

:high_brightness: The first problem we encounted was not knowing how to use Nebius studio to integrat AI into our project and that hit us in the face. 

:high_brightness: Once we finally learnt how to use it's fine tuning feature, the AI model wasn't trained as it kept running through the entirety of the hackathon. 
Watching it just running for a day felt like a bucket of cold water was poured all over us. Now we had to figure out another way in which we could incorporate AI. 

:high_brightness: Finding actual datasets from clinics on the number of visits they've had each day from the past few years 

:high_brightness: Integrating together all the different parts everyone worked on

<br> 

**OUR ACCOMPLISHMENTS**:

:star: We thought of a *practical solution* to a problem a vast majority faced 

:star: Were able to implement a *functioning* idea into our project

:star: Learnt how to use a Google API key as well as Nebius AI API 

:star: Collaborated in a way that *each member* of our team had something they could input towards 

:star: Figured out solutions to various problems we faced despite being unfamiliar with most of the technologies used

<br>

**WHAT'S IN STORE FOR US NEXT**:

We want to be able to get real data from the past on the number of visits the clinics have had and use that data to train an AI model for it to predict wait times
you'll have currently and in the future. 


<br>

**OUR BUILDING BLOCKS**:

:white_check_mark: HTML

:white_check_mark: CSS

:white_check_mark: Javascript

:white_check_mark: Node.js 

:white_check_mark: Nebius AI studio API 

:white_check_mark: Google maps API 

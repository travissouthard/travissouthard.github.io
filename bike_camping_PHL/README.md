# Philadelphia Bike Camping
## Dynamic Gear Checklist
### By [Travis Southard](travissouthard.github.io)

#### See the app!
* [Use the checklist yourself!](https://travissouthard.github.io)
* Go camping!
* [Check out the bike camping trips I've led in the past!](https://www.instagram.com/explore/tags/cyclescampout/)

#### Premise
This checklist is an app built to take in weather data and populate a checklist with various weather-dependent gear.
The weather data used is for the day the page is loaded and the following two days. This assumes that the user is taking a one-night camping trip (ride out, sleep, wake up, ride back).
Before presenting this, I will be asking my bike camping friends to try the checklist and give their input on gear or conditions I may be missing. 

#### Features
On loading the page creates 3 cards with weather for "Today", "Tomorrow", & "The Next Day" for Philadelphia specifically. It uses the data in those cards to determine if the next few days might have rain, heat, or cold. If the weather thresholds are exceeded (For example, if any day's low temperature is below 40) it populates the checklist from respective lists.

There is a base checklist, as well as cold, hot, and rainy checklists. The checklist generator is built in such a way that if all, any, or none of the thresholds are exceeded it will generate appropriately. This way if it is hot during the day and also cold at night, the user will have what they need.

Clicking on the list items crosses them out to let the user know that this is an item they have packed. The user can also use the form above the checklist to add their own items (e.g. a special permit needed to camp, something they were asked to bring by a camping companion, etc.)

#### Built with:
* HTML5
* CSS3
* Javascript
* JQuery
* JSON
* [OpenWeather Map API](https://openweathermap.org/api)

#### Installing on your system
If you'd like to download this and play with the code, you'd have to save the files in the `bike_camping_PHL` directory which currently are only the `index.html`, `style.css`, `app.js`, and `images` directory, which is currently only full of the favicon options. Open them in your favorite text editor to test, play, etc. 

#### Current bugs
* *Fixed, but differences in location don't seem to vary enough* When the user clicks a campground button, the currentLat and currentLong update with appropriate coordinate values, but weatherQuery's use of those variables does not reflect that upgrade

#### Desired upgrades
For now the weather thresholds and location are predetermined. I would like to add a control panel to customize the weather and checklist for the user. For this I would like to add:
* Temperature sliders for the user to set their hot and cold temperatures for themself.
* *Done, but differences in location don't seem to vary enough* Buttons that ask the user where they are camping. The buttons would be set to the geographical coordinates of various local campgrounds.
  * I would also love to improve that feature to allow the user to set any geographical location.
* The ability to save custom checklists, or save what they've packed beyond the current page load.

#### Full build vision 
Originally this was imagined as one page of a full bike camping resource. The full website was imagined with a dynamic map (see unresolved issues with Mapbox below), dynamic list of campgrounds, route cue sheets, a beginner guide, gear guide, and camp recipes.

This could easily scale up to that, especially with the idea of dynamically adding recipe ingredients and items from the gear guide to the packing checklist.

#### Unresolved Issues
The initial minimum viable product was to have a dynamic map that would give you basic directions from a place the user chose to a local campground on the map and a gear checklist that the user could add custom items to.

The map was going to be built with [Mapbox](https://www.mapbox.com/) and while their tools are powerful, relatively easy to use, and extremely customizeable, they are built with Mapbox's *Mapbox GL js* framework and are not friendly with `ajax` calls (mandatory for this project). The other issue I find is that computer-generated bike directions are usually crap. They try to create an efficient route, but not often the safest or prettiest route. This reinforced my belief that bike tour and bike camping routes should be hand-made and curated, not generated. So even if this did meet the project's needs, creating just one route on the map would be weeks of work, let alone the dozen campgrounds in this area.

The second idea was to use [Active.com](https://www.active.com/)'s [Campground API](https://developer.active.com/docs/read/Campground_Search_API) to generate a list of campgrounds local to a user-generated ZIP code. While the API was once comprehensive, it went out of date in 2018 as camp data was demonopolized and made more publicly available. After fighting against `CORS` & `CORB` errors and finally getting data, the data was in XML and unavailable in JSON.

These mishaps did lead me to amending the plan for this app to what it is now, which is an ultimately more useful app for planning a camping weekend than I had built before. All of the original code for these are still in the website files and relegated to respective "code graveyards."
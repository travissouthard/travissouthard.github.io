//Camp Checklist Variables
const baseChecklist = {
    Shelter: ["tent", "sleeping bag", "sleeping pad", "pillow", "hammock", "hammock bug net", "paracord"],
    Bike: ["bike", "lock", "lights", "spare tubes", "patch kit", "pump/CO2", "multitool", "tire levers"],
    Kitchen: ["stove", "stove fuel", "pot/pan", "spatula", "plate/bowl", "spork", "mug", "lighter", "plastic bags", "camp snacks", "ride snacks", "coffee/tea", "lunch 1", "dinner", "breakfast", "lunch 2", "sponge", "dish soap",],
    Body: ["cycling shirt", "cycling socks", "sportsbra", "phone", "wallet", "keys", "camp shirt", "underwear", "bra", "hoodie", "towel", "bandana", "glasses", "sunglasses", "headlamp", "phone charger"],
    Toiletries: ["first aid kit", "allergy meds", "bugspray", "body soap", "toothbrush", "toothpaste", "contact case & solution", "chamois butter", "intimacy kit"],
    Custom: [],
};
const hotChecklist = {
    Shelter: [],
    Bike: [],
    Kitchen: ["coozies"],
    Body: ["flip flops", "swimsuit", "cycling shorts", "camp shorts"],
    Toiletries: ["sunscreen", "deodorant"],
    Custom: [],
}
const coldChecklist = {
    Shelter: ["0 degree sleeping bag", "sleeping bag liner", "hammock underquilt"],
    Bike: [],
    Kitchen: [],
    Body: ["warm wool socks", "wool underlayers", "camp coat", "camp pants", "warm gloves", "pajama pants"],
    Toiletries: [],
    Custom: [],
}
const rainChecklist = {
    Shelter: ["hammock rain fly", "tarp"],
    Bike: ["fenders"],
    Kitchen: [],
    Body: ["rain jacket", "rain pants", ],
    Toiletries: [],
    Custom: [],
}

//Global variables
const philaLat = 39.9528;
const philaLong = -75.1635;
const dayList = ["Today", "Tomorrow", "The Next Day", "The Day After That"];
const iconList = [];
let weatherIdList = [];
const maxList = [];
const minList = [];
const customItems = [];

//Weather API variables
const campgroundLats = [40.2148, 40.3372, 40.2100, 39.9512, 40.4362, 39.8910, 39.5584];
const campgroundLongs = [-75.7895, -75.4693, -75.3708, -75.4520, -75.0750, -74.5796, -75.7204];

//Array method callbacks
const checkLowest = (temp) => temp < 40; //Below 40degF, most people need extra warm gear
const checkHighest = (temp) => temp > 80; //Above 80degF, most people need lighter gear
const checkWeatherId = (id) => id < "800"; //IDs with "800" or up are clear or cloudy, all under "800" have some adverse weather, check OpenWeather API documentation for details

$(() => { // On page load
    //Event handlers
    const crossout = (event) => { //For crossing out checked items
        console.log("I clicked the ", event.currentTarget);
        $(event.currentTarget).toggleClass("unchecked");
        $(event.currentTarget).toggleClass("checked");
    }
    const renderCustomItems = () => {
        let $customItem = $("<li>").text(customItems[customItems.length-1]).addClass("unchecked");
        $("#Custom").append($customItem);
        $customItem.on("click", crossout);
    }
    const setCampgroundCoords = (event) => {
        let $index = $(event.currentTarget).attr("id"); //Uses id as index to get coordinates
        let currentLat = campgroundLats[$index]; //Sets currentLat to the corresponding latitude
        let currentLong = campgroundLongs[$index]; //Sets currentLong to corresponding longitude
        getWeather(currentLat, currentLong);
    }

    //Event listeners
    $("form").on("submit", (event) => { //Custom item submissions in form
        event.preventDefault();
        const $inputValue = $("#input").val();
        // console.log($inputValue);
        customItems.push($inputValue);
        renderCustomItems();
        $(event.currentTarget).trigger('reset');
    })
    $("button").on("click", setCampgroundCoords);
    // $(".unchecked").on("click", crossout);

    //Builds weather cards
    const buildWeatherCards = (weatherData) => {
        $(".container").empty(); //To make room for when a button is pressed
        weatherIdList = [];
        let $weatherHeader = $("<h3>").text("Upcoming Weather");
        $(".container").append($weatherHeader);
        for (let i = 0; i < 3; i++) {
            //Put data into relevant arrays
            iconList.push(weatherData.daily[i].weather[0].icon);
            weatherIdList.push(weatherData.daily[i].weather[0].id);
            maxList.push(Math.round(weatherData.daily[i].temp.max));
            minList.push(Math.round(weatherData.daily[i].temp.min));
            //Make elements with data
            let $weatherCard = $("<div>").addClass("weather-card");
            let $title = $("<h4>").text(dayList[i]);
            let $icon = $("<img>").attr("src", `http://openweathermap.org/img/wn/${iconList[i]}@2x.png`);
            let $high = $("<p>").text(`High: ${maxList[i]}°(F)`);
            let $low = $("<p>").text(`Low: ${maxList[i]}°(F)`);
            //Put elements in place
            $weatherCard.append($title);
            $weatherCard.append($icon);
            $weatherCard.append($high);
            $weatherCard.append($low);
            $(".container").append($weatherCard);
        }
    }

    
    
    //Generates the checklist for the page
    const generateChecklist = () => {
        $(".checklist").empty(); //To make room for button presses
        for (let category in baseChecklist) {
            //Adds list items from the checklist called
            const appendList = (list) => {
                for (let i = 0; i < list[category].length; i++) {
                    let $item = $("<li>").addClass(category).text(list[category][i]);
                    $item.addClass("unchecked");
                    $item.on("click", crossout);
                    $category.append($item);
                }
            }
            //Makes a ul to hold each category of the checklists
            let $category = $("<ul>").attr("id", category);

            //Adds a title to each category
            let $title = $("<h4>").text(category);
            $category.append($title);

            //Conditionals to customize the list with the weather
            //If the lowest low-temperature is below 40deg add the cold list
            if (minList.some(checkLowest)) {
                appendList(coldChecklist);
            }
            //If the highest high-temperature is above 90deg add the hot list   
            if (maxList.some(checkHighest)) {
                appendList(hotChecklist);
            }
            //If it is other than clear or cloudy, bring the rain list
            if (maxList.some(checkWeatherId)) {
                appendList(rainChecklist);
            }
            //Finishes with the base checklist
            appendList(baseChecklist);
            $(".checklist").append($category);
        }
    }

    //Fetches the weather from openweathermap.org
        //This also calls buildWeatherCards and generateChecklist, without the weather, this does not really work. A breakproof way to still make a basic list should go in the error catch.
    const getWeather = (lat, long) => {
        const weatherApiKey = "&appid=d175d89ebe6588949bced83b103d7c13";
        const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&units=imperial`;
        const weatherQuery = weatherURL + weatherApiKey;
        $.ajax({
            method: "GET",
            url: weatherQuery,
            datatype: "jsonp"
        }).done((weatherData) => {
            // console.log("Icon: ", weatherData.daily[0].weather[0].icon);
            // console.log("Max: ", weatherData.daily[0].temp.max);
            // console.log("Min: ", weatherData.daily[0].temp.min);
            buildWeatherCards(weatherData);
            console.log(weatherQuery);
            generateChecklist();
        }), (error) => {
            console.log(error);
        }
    }

    //Calls each of these as the page loads in
    getWeather(philaLat, philaLong);

    //*****************************************************//
    //CODE GRAVEYARD: RIP These ideas, failed though they be.
    //*****************************************************//

    //For retrieving campgrounds local to Philadelphia, but the API only gives back XML, and newer sources only give federal/national campgrounds, and our area only has state and private campgrounds within a day's ride.
    //Campground API variables
    // const campgroundApiKey = "&api_key=zjntthn8m976q987yp48vzkw";
    // const activeApiKey = "&api_key=H8XCTF6FVEGX87PUZXAWQ28Y";
    // const baseURL = "https://api.amp.active.com/camping/campgrounds?";
    // const testURL = "https://api.amp.active.com/camping/campgrounds?pstate=CO&siteType=2001&expwith=1&amenity=4005&pets=3010";
    // const coordQuery = `landmarkName=true&landmarkLat=${philaLat}&landmarkLong=${philaLong}`
    // const getCampgrounds = () => {
    //     $.ajax({
    //         method: "GET",
    //         url: baseURL + coordQuery + campgroundApiKey,
    //         dataType: "jsonp",
    //     }).done((campgroundData) => {
    //         console.log(campgroundData);
    //     }), (error) => {
    //         console.log(error);
    //     }
    // }
    // getCampgrounds();
    // let zipCode = 19145;
    // const zipQuery = `zip=${zipCode},us`;
});
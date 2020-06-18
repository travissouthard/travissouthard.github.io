//Camp Checklist Variables
const checklist = {
    Shelter: ["tent", "sleeping bag", "sleeping pad", "sleeping bag liner", "pillow", "hammock", "hammock rain fly", "hammock bug net"],
    Kitchen: ["stove", "stove fuel", "pot/pan", "spatula", "plate/bowl", "spork", "mug", "lighter", "plastic bags", "camp snacks", "ride snacks", "coffee/tea", "lunch 1", "dinner", "breakfast", "lunch 2", "sponge", "dish soap"],
    Bike: ["bike", "lock", "lights", "spare tubes", "patch kit", "pump/CO2", "multitool", "tire levers"],
    Body: ["cycling shirt", "cycling bottoms", "cycling socks", "sportsbra", "phone", "wallet", "keys", "camp shirt", "camp bottoms", "warm socks", "underwear", "bra", "flip flops", "rain jacket", "pajama pants", "hoodie", "swimsuit", "towel", "bandana", "glasses", "sunglasses", "headlamp", "phone charger"],
    Toiletries: ["first aid kit", "allergy meds", "sunscreen", "bugspray", "body soap/shampoo", "toothbrush", "toothpaste", "contact case & solution", "deodorant", "chamois butter"],
    Custom: [],
};

//Global variables
const philaLat = 39.9528;
const philaLong = -75.1635;
let currentLat = philaLat;
let currentLong = philaLong;
const dayList = ["Today", "Tomorrow", "The Next Day", "The Day After That"];
const iconList = [];
const maxList = [];
const minList = [];


//Campground API variables
// const campgroundApiKey = "&api_key=zjntthn8m976q987yp48vzkw";
// const activeApiKey = "&api_key=H8XCTF6FVEGX87PUZXAWQ28Y";
// const baseURL = "https://api.amp.active.com/camping/campgrounds?";
// const testURL = "https://api.amp.active.com/camping/campgrounds?pstate=CO&siteType=2001&expwith=1&amenity=4005&pets=3010";
// const coordQuery = `landmarkName=true&landmarkLat=${philaLat}&landmarkLong=${philaLong}`

//Weather API variables
const weatherApiKey = "&appid=d175d89ebe6588949bced83b103d7c13";
const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLat}&lon=${currentLong}&exclude=current,minutely,hourly&units=imperial`;
// let zipCode = 19145;
// const zipQuery = `zip=${zipCode},us`;
const weatherQuery = weatherURL + weatherApiKey;


//Event handlers
const crossout = (event) => { //For crossing out checked items
    $(event.currentTarget).toggleClass("checked");
}

$(() => { // On page load
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
    
    //Builds weather cards
    const buildWeatherCards = (weatherData) => {
        //Put data into relevant arrays
        iconList.push(weatherData.daily[0].weather[0].icon);
        maxList.push(weatherData.daily[0].temp.max);
        minList.push(weatherData.daily[0].temp.min);
        console.log(iconList);
        console.log(maxList);
        console.log(minList);
        //Make elements with data
        let $weatherCard = $("<div>").addClass("weather");
        let $title = $("<h4>").text(dayList[0]);
        let $icon = $("<img>").attr["src", `http://openweathermap.org/img/wn/${iconList[0]}@2x.png`]//.css("display", "block");
        let $high = $("<p>").text("High: " + maxList[0] + " degrees(F)");
        let $low = $("<p>").text("Low: " + minList[0] + " degrees(F)");
        //Put elements in place
        $weatherCard.append($title);
        $weatherCard.append($icon);
        $weatherCard.append($high);
        $weatherCard.append($low);
        $(".container").append($weatherCard);
    }

    //Fetches the weather from openweathermap.org
    const getWeather = () => {
        $.ajax({
            method: "GET",
            url: weatherQuery,
            datatype: "jsonp"
        }).done((weatherData) => {
            // console.log("Icon: ", weatherData.daily[0].weather[0].icon);
            // console.log("Max: ", weatherData.daily[0].temp.max);
            // console.log("Min: ", weatherData.daily[0].temp.min);
            buildWeatherCards(weatherData);
        }), (error) => {
            console.log(error);
        }
    }

    //Generates the checklist for the page
    const generateChecklist = () => {
        for (let category in checklist) {
            let $category = $("<ul>").text(category);
            for (let i = 0; i < checklist[category].length; i++) {
                let $item = $("<li>").addClass(category).text(checklist[category][i]);
                $($item).on("click", crossout);
                $category.append($item);
            }
            $(".checklist").append($category);
        }
    }

    //Calls each of these as the page loads in
    // getCampgrounds();
    getWeather();
    generateChecklist();
});
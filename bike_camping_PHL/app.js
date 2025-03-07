//Weather API variables
const philaLat = 39.9528;
const philaLong = -75.1635;
const dayList = ["Today", "Tomorrow", "The Next Day", "The Day After That"];
const iconList = [];
let weatherIdList = [];
const descList = [];
const highs = [];
const lows = [];
const customItems = [];
// const campgroundLats = [40.2148, 40.3372, 40.2100, 39.9512, 40.4362, 39.8910, 39.5584];
// const campgroundLongs = [-75.7895, -75.4693, -75.3708, -75.4520, -75.0750, -74.5796, -75.7204];

//Array method callbacks
const checkLowest = (temp) => temp < 40; //Below 40degF, most people need extra warm gear
const checkHighest = (temp) => temp > 80; //Above 80degF, most people need lighter gear
const checkWeatherId = (id) => id < "800"; //IDs with "800" or up are clear or cloudy, all under "800" have some adverse weather, check OpenWeather API documentation for details

$(() => {
    // On page load
    //Event handlers
    const crossout = (event) => {
        $(event.currentTarget).toggleClass("checked");
    };
    const renderCustomItems = () => {
        let $customItem = $("<li>")
            .text(customItems[customItems.length - 1])
            .addClass("unchecked");
        $("#Custom").append($customItem);
        $customItem.on("click", crossout);
    };

    //Event listeners
    $("form").on("submit", (event) => {
        //Custom item submissions in form
        event.preventDefault();
        const $inputValue = $("#input").val();
        customItems.push($inputValue);
        renderCustomItems();
        $(event.currentTarget).trigger("reset");
    });

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
            highs.push(Math.round(weatherData.daily[i].temp.max));
            lows.push(Math.round(weatherData.daily[i].temp.min));
            //Make elements with data
            let $weatherCard = $("<div>").addClass("weather-card");
            let $title = $("<h4>").text(dayList[i]);
            let $icon = $("<img>").attr(
                "src",
                `https://openweathermap.org/img/wn/${iconList[i]}@2x.png`
            );
            let $high = $("<p>").text(`High: ${highs[i]}°(F)`);
            let $low = $("<p>").text(`Low: ${lows[i]}°(F)`);
            //Put elements in place
            $weatherCard.append($title);
            $weatherCard.append($icon);
            $weatherCard.append($high);
            $weatherCard.append($low);
            $(".container").append($weatherCard);
        }
    };

    //Generates the checklist for the page
    const generateChecklist = () => {
        $(".checklist").empty(); //To make room for button presses
        for (let category in checklist.base) {
            //Adds list items from the checklist called
            const appendList = (list) => {
                for (let i = 0; i < list[category].length; i++) {
                    let $item = $("<li>")
                        .addClass(category)
                        .text(list[category][i]);
                    $item.on("click", crossout);
                    $category.append($item);
                }
            };
            //Makes a ul to hold each category of the checklists
            let $category = $("<ul>").attr("id", category);

            //Adds a title to each category
            let $title = $("<h4>").text(category);
            $category.append($title);

            //Conditionals to customize the list with the weather
            //If the lowest low-temperature is below 40deg add the cold list
            if (lows.length === 0 || lows.some(checkLowest)) {
                appendList(checklist.cold);
            }
            //If the highest high-temperature is above 90deg add the hot list
            if (lows.length === 0 || highs.some(checkHighest)) {
                appendList(checklist.hot);
            }
            //If it is other than clear or cloudy, bring the rain list
            if (lows.length === 0 || highs.some(checkWeatherId)) {
                appendList(checklist.rain);
            }
            //Finishes with the base checklist
            appendList(checklist.base);
            $(".checklist").append($category);
        }
    };

    //Fetches the weather from openweathermap.org
    //This also calls buildWeatherCards and generateChecklist, without the weather, this does not really work. A breakproof way to still make a basic list should go in the error catch.
    const getWeather = (lat, long) => {
        const weatherApiKey = "&appid=d175d89ebe6588949bced83b103d7c13";
        const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&units=imperial`;
        const weatherQuery = weatherURL + weatherApiKey;
        $.ajax({
            method: "GET",
            url: weatherQuery,
            datatype: "jsonp",
        }).done((weatherData) => {
            buildWeatherCards(weatherData);
            generateChecklist();
        }),
            (error) => {
                console.log(error);
            };
    };

    //Calls each of these as the page loads in
    // getWeather(philaLat, philaLong);

    generateChecklist();
});

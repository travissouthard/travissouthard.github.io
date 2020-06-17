//Camp Checklist Variables
const checklist = {
    Shelter: ["tent", "sleeping bag", "sleeping pad", "sleeping bag liner", "pillow", "hammock", "hammock rain fly", "hammock bug net"],
    Kitchen: ["stove", "stove fuel", "pot/pan", "spatula", "plate/bowl", "spork", "mug", "lighter", "plastic bags", "camp snacks", "ride snacks", "coffee/tea", "lunch 1", "dinner", "breakfast", "lunch 2", "sponge", "dish soap"],
    Bike: ["bike", "lock", "lights", "spare tubes", "patch kit", "pump/CO2", "multitool", "tire levers"],
    Body: ["cycling shirt", "cycling bottoms", "cycling socks", "sportsbra", "phone", "wallet", "keys", "camp shirt", "camp bottoms", "warm socks", "underwear", "bra", "flip flops", "rain jacket", "pajama pants", "hoodie", "swimsuit", "towel", "bandana", "glasses", "sunglasses", "headlamp", "phone charger"],
    Toiletries: ["first aid kit", "allergy meds", "sunscreen", "bugspray", "body soap/shampoo", "toothbrush", "toothpaste", "contact case & solution", "deodorant", "chamois butter"],
    Custom: [],
};

//Campground API variables
const campgroundApiKey = "&api_key=zjntthn8m976q987yp48vzkw";
const activeApiKey = "&api_key=H8XCTF6FVEGX87PUZXAWQ28Y";
const baseURL = "https://api.amp.active.com/camping/campgrounds?";
const testURL = "https://api.amp.active.com/camping/campgrounds?pstate=CO&siteType=2001&expwith=1&amenity=4005&pets=3010";
let philaLat = 39.9528;
let philaLong = -75.1635;
const coordQuery = `landmarkName=true&landmarkLat=${philaLat}&landmarkLong=${philaLong}`

//Event handlers
const crossout = (event) => { //For crossing out checked items
    $(event.currentTarget).toggleClass("checked");
}

$(() => { // On page load
    const getCampgrounds = () => {
        $.ajax({
            method: "GET",
            url: baseURL + coordQuery + campgroundApiKey,
            dataType: "jsonp",
        }).done((campgroundData) => {
            console.log(campgroundData);
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
    generateChecklist();
});
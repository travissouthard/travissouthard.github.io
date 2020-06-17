//Camp Checklist Variables
const checklistCats = {
    shelter: ["tent", "sleeping bag", "sleeping pad", "sleeping bag liner", "pillow", "hammock", "hammock rain fly", "hammock bug net"],
    kitchen: ["stove", "stove fuel", "pot/pan", "spatula", "plate/bowl", "spork", "mug", "lighter", "plastic bags", "camp snacks", "ride snacks", "coffee/tea", "lunch 1", "dinner", "breakfast", "lunch 2", "sponge", "dish soap"],
    bike: ["bike", "lock", "lights", "spare tubes", "patch kit", "pump/CO2", "multitool", "tire levers"],
    body: ["cycling shirt", "cycling bottoms", "cycling socks", "sportsbra", "phone", "wallet", "keys", "camp shirt", "camp bottoms", "warm socks", "underwear", "bra", "flip flops", "rain jacket", "pajama pants", "hoodie", "swimsuit", "towel", "bandana", "glasses", "sunglasses", "headlamp", "phone charger"],
    toiletries: ["first aid kit", "allergy meds", "sunscreen", "bugspray", "body soap/shampoo", "toothbrush", "toothpaste", "contact case & solution", "deodorant", "chamois butter"],
    custom: [],
};

//Campground API variables
const campgroundApiKey = "&api_key=zjntthn8m976q987yp48vzkw";
const activeApiKey = "&api_key=H8XCTF6FVEGX87PUZXAWQ28Y";
const baseURL = "https://api.amp.active.com/camping/campgrounds?";
const testURL = "https://api.amp.active.com/camping/campgrounds?pstate=CO&siteType=2001&expwith=1&amenity=4005&pets=3010";
let philaLat = 39.9528;
let philaLong = -75.1635;
const coordQuery = `landmarkName=true&landmarkLat=${philaLat}&landmarkLong=${philaLong}`

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
    // getCampgrounds();
    const generateChecklist = () => {

    }
});
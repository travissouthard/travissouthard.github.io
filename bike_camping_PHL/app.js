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
            console.log("Just in case");
        }), (error) => {
            console.log(error);
        }
    }
    getCampgrounds();
});
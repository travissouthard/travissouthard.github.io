const campgroundApiKey = "&api_key=zjntthn8m976q987yp48vzkw";
const activeApiKey = "&api_key=H8XCTF6FVEGX87PUZXAWQ28Y";
const baseURL = "http://api.amp.active.com/camping/campgrounds?";
const testURL = "http://api.amp.active.com/camping/campgrounds?pstate=CO&siteType=2001&expwith=1&amenity=4005&pets=3010";

$(() => { // On page load
    console.log("But does this?");
    const getCampgrounds = () => {
        $.ajax({
            type: "GET",
            url: baseURL + "pstate=PA" + campgroundApiKey,
        }).done((campgroundData) => {
            console.log(campgroundData);
            console.log("Just in case");
        }), (error) => {
            console.log(error);
        }
    }
    getCampgrounds();
});
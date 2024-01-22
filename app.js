// This just redirects the old `?post=slug` style of link
// to keep them alive
const [folder, fileExtension] = window.location.pathname.split(".");
const urlParams = new URLSearchParams(window.location.search);
const postSlug = urlParams.get("post");

const redirectIfValid = async (url) => {
    return await fetch(fixedPostPath)
        .then((res) => {
            if (res.status >= 400) {
                console.error(res);
                return;
            }
            window.location.replace(url);
        })
        .catch((err) => console.error(err));
};

if (postSlug) {
    try {
        const fixedPostUrl = [
            window.location.origin,
            folder,
            "/",
            postSlug,
            fileExtension,
        ].join("");
        redirectIfValid(fixedPostUrl);
    } catch (e) {
        console.log(e);
    }
}

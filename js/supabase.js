import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

/* =====================================================
   SUPABASE CONNECTION
   ===================================================== */

const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL";

const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY";


/* Create Supabase client */
export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);


/* =====================================================
   CHECK CONNECTION
   ===================================================== */

export function isConfigured() {

    return (
        SUPABASE_URL.startsWith("https://") &&
        !SUPABASE_URL.includes("PASTE_") &&
        !SUPABASE_ANON_KEY.includes("PASTE_")
    );

}


/* =====================================================
   POSTER IMAGE
   ===================================================== */

export function poster(url, title = "Prime Video") {

    if (
        url &&
        url.startsWith("http") &&
        !url.includes("placeholder.jpg")
    ) {
        return url;
    }

    return `https://placehold.co/500x750/16232d/ffffff?text=${encodeURIComponent(title)}`;
}


/* =====================================================
   YOUTUBE TRAILER
   ===================================================== */

export function youtubeEmbed(url) {

    if (!url) {
        return "";
    }

    try {

        const videoURL = new URL(url);

        let videoID = videoURL.searchParams.get("v");

        if (!videoID && videoURL.hostname.includes("youtu.be")) {
            videoID = videoURL.pathname.substring(1);
        }

        if (!videoID) {
            return "";
        }

        return `https://www.youtube.com/embed/${videoID}`;

    } catch (error) {

        console.error("Invalid YouTube URL:", error);

        return "";

    }

}


/* =====================================================
   GLOBAL SEARCH
   ===================================================== */

export function setupGlobalSearch() {

    const searchInput = document.getElementById("globalSearch");

    const searchButton = document.getElementById("searchBtn");


    if (!searchInput) {
        return;
    }


    function performSearch() {

        const query = searchInput.value.trim();


        if (query !== "") {

            window.location.href =
                `movies.html?search=${encodeURIComponent(query)}`;

        }

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}

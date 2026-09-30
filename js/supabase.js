import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

/* =========================================
   SUPABASE CONNECTION
   ========================================= */

const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY";

export const connected =
    SUPABASE_URL.startsWith("https://") &&
    !SUPABASE_URL.includes("PASTE_") &&
    SUPABASE_ANON_KEY.length > 20 &&
    !SUPABASE_ANON_KEY.includes("PASTE_");

export const supabase = connected
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;


/* =========================================
   POSTER IMAGE
   ========================================= */

export function img(url, title = "Movie") {

    if (
        url &&
        typeof url === "string" &&
        url.startsWith("http") &&
        !url.includes("placeholder.jpg")
    ) {
        return url;
    }

    return `https://placehold.co/500x750/17232d/ffffff?text=${encodeURIComponent(title)}`;
}


/* =========================================
   YOUTUBE TRAILER
   ========================================= */

export function yt(url) {

    if (!url) return "";

    try {

        const u = new URL(url);

        let id = u.searchParams.get("v");

        if (!id && u.hostname.includes("youtu.be")) {
            id = u.pathname.slice(1);
        }

        return id
            ? `https://www.youtube.com/embed/${id}`
            : "";

    } catch {

        return "";
    }
}

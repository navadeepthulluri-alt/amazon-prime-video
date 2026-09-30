import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function isConfigured(){return !SUPABASE_URL.includes("PASTE_")&&!SUPABASE_ANON_KEY.includes("PASTE_")}
export function poster(url,title="Prime Video"){if(url&&url.startsWith("http")&&!url.includes("placeholder.jpg"))return url;return `https://placehold.co/500x750/16232d/ffffff?text=${encodeURIComponent(title)}`}
export function youtubeEmbed(url){try{const u=new URL(url);let id=u.searchParams.get("v");if(!id&&u.hostname.includes("youtu.be"))id=u.pathname.slice(1);return id?`https://www.youtube.com/embed/${id}`:""}catch{return ""}}
export function setupGlobalSearch(){const i=document.getElementById("globalSearch"),b=document.getElementById("searchBtn");if(!i)return;const go=()=>{const q=i.value.trim();if(q)location.href=`movies.html?search=${encodeURIComponent(q)}`};b?.addEventListener("click",go);i.addEventListener("keydown",e=>{if(e.key==="Enter")go()})}
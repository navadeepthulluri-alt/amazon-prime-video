import {createClient} from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

/* PASTE THESE TWO VALUES ONLY */
const SUPABASE_URL="PASTE_YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY="PASTE_YOUR_SUPABASE_ANON_KEY";

export const supabase=createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
export const connected=!SUPABASE_URL.includes("PASTE_")&&!SUPABASE_ANON_KEY.includes("PASTE_");

export function img(url,title){
 if(url&&url.startsWith("http")&&!url.includes("placeholder.jpg")) return url;
 return "https://placehold.co/500x750/17232d/ffffff?text="+encodeURIComponent(title);
}
export function yt(url){
 if(!url)return "";
 try{let u=new URL(url),id=u.searchParams.get("v");if(!id&&u.hostname.includes("youtu.be"))id=u.pathname.slice(1);return id?"https://www.youtube.com/embed/"+id:""}catch{return ""}
}

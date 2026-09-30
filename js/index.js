import {supabase,connected,img} from "./supabase.js";import {makeCard,openMovie,setupModal} from "./ui.js";import {demo} from "./data.js";
setupModal();
async function load(){if(!connected)return demo();let {data,error}=await supabase.from("movies").select("*").order("rating",{ascending:false});if(error){console.error(error);return demo()}return data||[]}
const all=await load(),hero=all[0];
if(hero){document.getElementById("heroTitle").textContent=hero.title;document.getElementById("heroDesc").textContent=hero.description||"";document.getElementById("heroMeta").innerHTML=`<span>IMDb ${hero.rating}</span><span>${hero.release_year}</span><span>${hero.content_type}</span><span>${hero.language}</span>`;document.getElementById("hero").style.backgroundImage=`url("${img(hero.poster_url,hero.title)}")`}
function row(id,list){const e=document.getElementById(id);e.innerHTML="";list.slice(0,12).forEach(m=>e.appendChild(makeCard(m,openMovie)))}
row("continue",all.filter((_,i)=>i%3===0));row("originals",all.filter(m=>["The Boys","Reacher","Fallout","The Family Man","Panchayat","Mirzapur"].includes(m.title)));row("movies",all.filter(m=>m.content_type==="Movie"));row("series",all.filter(m=>m.content_type==="Series"));row("action",all.filter(m=>m.genre_id===1||m.genre_id===2));row("scifi",all.filter(m=>m.genre_id===8));row("india",all.filter(m=>["Hindi","Telugu","Tamil","Kannada"].includes(m.language)));row("top", [...all].sort((a,b)=>b.rating-a.rating));
document.getElementById("heroWatch").onclick=()=>openMovie(hero);document.getElementById("heroMore").onclick=()=>openMovie(hero);
document.getElementById("search").onkeydown=e=>{if(e.key==="Enter"&&e.target.value.trim())location.href="movies.html?search="+encodeURIComponent(e.target.value.trim())};

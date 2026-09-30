import {img,yt} from "./supabase.js";
export function makeCard(m,open){
 const e=document.createElement("div");e.className="card";
 e.innerHTML=`<div class="posterWrap"><img class="poster" src="${img(m.poster_url,m.title)}" alt="${m.title}"><div class="play">▶</div></div><div class="info"><div class="title">${m.title}</div><div class="small"><span class="star">★ ${m.rating??"N/A"}</span><span>${m.release_year??""}</span><span>${m.content_type??""}</span></div></div>`;
 e.onclick=()=>open(m);return e;
}
export function openMovie(m){
 const modal=document.getElementById("modal"),body=document.getElementById("modalContent");
 const video=yt(m.trailer_url);
 body.innerHTML=`<div class="modalTop"><img src="${img(m.poster_url,m.title)}"><div><div class="prime">prime video</div><h2>${m.title}</h2><div class="small"><span class="star">★ ${m.rating??"N/A"}</span><span>${m.release_year??""}</span><span>${m.language??""}</span><span>${m.content_type??""}</span></div><p>${m.description||""}</p><button class="modalPlay" id="playTrailer">▶ Play Trailer</button></div></div><div id="videoBox"></div>`;
 document.getElementById("playTrailer").onclick=()=>{document.getElementById("videoBox").innerHTML=video?`<iframe class="trailer" src="${video}?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`:"<p>Trailer not available.</p>"};
 modal.classList.remove("hidden");
}
export function setupModal(){document.getElementById("close").onclick=()=>document.getElementById("modal").classList.add("hidden");document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.add("hidden")}}

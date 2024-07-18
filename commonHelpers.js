import{i as c,S as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");m.addEventListener("submit",d);const d=function(i){i.preventDefault();const o=i.target.querySelector("input").value.trim();if(!o){c.error({position:"topRight",message:"Please complete the form"});return}a.style.display="block",l.innerHTML="",y(o).then(r=>{if(r.totalHits===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none";return}g(r.hits),a.style.display="none",new f(".gallery a").refresh()}).catch(r=>{c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none",console.error(r)})};function y(i){const r=`https://pixabay.com/api/?key=44961445-711bc8a23588390ccc23a177e&q=${i}&image_type=photo&pretty=true`;return fetch(r).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()})}function g(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${r}" alt="${e}" loading="lazy"/>
        </a>
        <div class="image-info">
        <div class ="info-part"><p class="info-name">Likes</p><p class="info-num">${t}</p></div>
        <div class ="info-part"><p class="info-name">Views</p><p class="info-num">${n}</p></div>
        <div class ="info-part"><p class="info-name">Comments</p><p class="info-num">${p}</p></div>
        <div class ="info-part"><p class="info-name">Downloads</p><p class="info-num">${u}</p></div>
        </div>
      </li>
    `).join("");l.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map

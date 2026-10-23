const starterData = {
  facebookUrl: "https://www.facebook.com/",
  candidates: [
    {name:"Candidate Name", position:"Party-list President", photo:"", bio:"Add a short introduction here."},
    {name:"Candidate Name", position:"Vice President", photo:"", bio:"Add a short introduction here."},
    {name:"Candidate Name", position:"Secretary", photo:"", bio:"Add a short introduction here."},
    {name:"Candidate Name", position:"Treasurer", photo:"", bio:"Add a short introduction here."}
  ],
  platforms: [
    {title:"Student Voice", text:"Describe how your team will listen to students and represent their concerns."},
    {title:"Campus Community", text:"Describe activities or initiatives that bring students together."},
    {title:"Action & Transparency", text:"Explain how you will share updates and be accountable for your work."}
  ],
  pubmats: [
    {title:"Main campaign pubmat", image:"", description:"Add your main campaign graphic to the assets folder and enter its path here."}
  ]
};
async function loadData(){try{const r=await fetch("data.json");if(r.ok)return await r.json()}catch(e){}return starterData}
function initials(name){return (name||"?").split(/\s+/).slice(0,2).map(x=>x[0]||"").join("").toUpperCase()}
function el(tag,cls){const n=document.createElement(tag);if(cls)n.className=cls;return n}
function render(data){
 const team=document.getElementById("teamGrid");team.innerHTML="";
 (data.candidates||[]).forEach(c=>{const card=el("article","person-card"),photo=el("div","person-photo");if(c.photo){const img=el("img");img.src=c.photo;img.alt=c.name;img.loading="lazy";photo.append(img)}else photo.textContent=initials(c.name);const info=el("div","person-info"),name=el("h3"),pos=el("p");name.textContent=c.name||"Candidate Name";pos.textContent=c.position||"Candidate";info.append(name,pos);if(c.bio){const bio=el("p","bio");bio.textContent=c.bio;info.append(bio)}card.append(photo,info);team.append(card)});
 const pg=document.getElementById("platformGrid");pg.innerHTML="";(data.platforms||[]).forEach((p,i)=>{const card=el("article","platform-card"),num=el("div","platform-number"),h=el("h3"),t=el("p");num.textContent=String(i+1).padStart(2,"0");h.textContent=p.title;t.textContent=p.text;card.append(num,h,t);pg.append(card)});
 const mats=document.getElementById("pubmatGrid");mats.innerHTML="";(data.pubmats||[]).forEach(p=>{const card=el("article","pubmat-card");if(p.image){const img=el("img");img.src=p.image;img.alt=p.title||"Campaign pubmat";img.loading="lazy";card.append(img)}const body=el("div"),h=el("strong"),desc=el("p");h.textContent=p.title||"Campaign pubmat";desc.textContent=p.description||"";body.append(h,desc);card.append(body);mats.append(card)});
 document.getElementById("facebookLink").href=data.facebookUrl||"https://www.facebook.com/";
}
document.getElementById("menuToggle").addEventListener("click",()=>{const nav=document.getElementById("mainNav"),open=nav.classList.toggle("open");document.getElementById("menuToggle").setAttribute("aria-expanded",String(open))});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
loadData().then(data=>{render(data);const url=location.href.split("#")[0];const draw=()=>{const node=document.getElementById("qrCode");node.innerHTML="";if(window.QRCode){new QRCode(node,{text:url,width:150,height:150,colorDark:"#251b17",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}else node.textContent="QR library unavailable";};if(window.QRCode)draw();else window.addEventListener("load",draw);document.getElementById("downloadQr").addEventListener("click",()=>{const node=document.querySelector("#qrCode canvas")||document.querySelector("#qrCode img");if(!node){alert("QR code is not ready yet. Check your internet connection and try again.");return}const a=document.createElement("a");a.download="spark-partylist-qr.png";a.href=node.tagName==="CANVAS"?node.toDataURL("image/png"):node.src;a.click()})});

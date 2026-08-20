import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"
const pmurl = "./manifest.md";
const pmmarkdown = await fetch(pmurl).then(r => r.text());
document.getElementById("party-mani").innerHTML = marked.parse(pmmarkdown);

const pdurl = "./description.md";
const pdmarkdown = await fetch(pdurl).then(r => r.text());
document.getElementById("party-desc").innerHTML = marked.parse(pdmarkdown);
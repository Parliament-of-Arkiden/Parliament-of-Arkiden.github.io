import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
const constitutionurl = "./CONSTITUTION/index.md";
const constitutionmarkdown = await fetch(constitutionurl).then(r => r.text());
document.getElementById("constitution").innerHTML = marked.parse(constitutionmarkdown);
        
const descriptionurl = "./README.md";
const descriptionmarkdown = await fetch(descriptionurl).then(r => r.text());
document.getElementById("description").innerHTML = marked.parse(descriptionmarkdown);
        
const lawsurl = "./LAWS/PASSED/index.md";
const lawsmarkdown = await fetch(lawsurl).then(r => r.text());
document.getElementById("laws").innerHTML = marked.parse(lawsmarkdown);
       
const plawsurl = "./LAWS/PROPOSED/index.md";
const plawsmarkdown = await fetch(plawsurl).then(r => r.text());
document.getElementById("plaws").innerHTML = marked.parse(plawsmarkdown);

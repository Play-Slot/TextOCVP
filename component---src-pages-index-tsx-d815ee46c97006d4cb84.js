"use strict";(self.webpackChunkTextOCVP=self.webpackChunkTextOCVP||[]).push([[245],{5604:function(e,t,l){l.r(t),l.d(t,{Head:function(){return y},default:function(){return w}});var a=l(6540);const r=(e,t)=>{const l=parseInt(e.slice(1),16);return`rgba(${l>>16&255}, ${l>>8&255}, ${255&l}, ${t})`},n={textColor:"#111827",linkColor:"#2563eb"},c=(0,a.createContext)(n),i=()=>(0,a.useContext)(c);var s=e=>{let{children:t}=e;const{textColor:l}=i();return a.createElement("div",{className:"pb-12"},a.createElement("div",{className:"flex justify-center content-center text-3xl",style:{color:l}},a.createElement("h3",null,"Abstract")),a.createElement("div",{className:"flex justify-center content-center mt-4"},a.createElement("p",{className:"text-justify font-normal text-base m-1 sm:m-1 max-w-xl",style:{color:l}},t)))};var o=e=>{let{children:t,website:l,number:r}=e;const{textColor:n,linkColor:c}=i();return a.createElement("span",{className:"text-center opacity-90 inline-block mr-4 mt-0 leading-tight",style:{color:n}},r&&a.createElement("sup",{className:"mr-1"},r),a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"font-normal no-underline underline-offset-3 hover:transition-all",style:{color:n}},t))};var m=e=>{let{children:t,website:l,firstAuthor:r,affiliations:n,lastAuthor:c}=e;const{textColor:s,linkColor:o}=i();return a.createElement("span",{className:"text-center inline-block mb-0 mt-0 leading-tight"},a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"font-normal text-xl no-underline underline-offset-3 hover:transition-all",style:{color:o}},t),(r||n)&&a.createElement("sup",{className:"pl-0.5"},r&&a.createElement("span",{className:"font-bold"},"*"),n&&n),!c&&a.createElement(a.Fragment,null,", "))};var d=e=>{let{children:t}=e;const{textColor:l}=i();return a.createElement("div",{className:"flex justify-left text-3xl mt-12 mb-6",style:{color:l}},t)},g=l(5178);var u=e=>{let{}=e;const{textColor:t,linkColor:l}=i(),{0:n,1:c}=(0,a.useState)(""),{0:s,1:o}=(0,a.useState)(!1),m=r(l,.05);(0,a.useEffect)((()=>{fetch("/bibtex.txt").then((e=>e.text())).then((e=>c(e))).catch((e=>console.error("Error loading BibTeX file:",e)))}),[]);return a.createElement("div",null,a.createElement(d,null,"Citation"),a.createElement("div",{className:"relative p-6 rounded-xl bg-opacity-5 !my-0",style:{backgroundColor:m}},a.createElement("button",{className:"absolute top-0 right-0 float-right text-2xl p-1 m-3",style:{color:l},onClick:()=>{navigator.clipboard.writeText(n).then((()=>{o(!0),setTimeout((()=>{o(!1)}),3e3)})).catch((e=>{console.error("Failed to copy text: ",e)}))}},s?a.createElement(g.FAw,null):a.createElement(g.$G0,null)),a.createElement("pre",{className:"whitespace-pre-wrap",style:{color:t}},a.createElement("code",{id:"citation-bib"},n||"Loading..."))))},f=l(4263);var E=e=>{let{githubUrl:t,googleScholarUrl:l,linkedInUrl:r}=e;const{textColor:n,linkColor:c}=i();return a.createElement("footer",{className:"pt-8 pb-4"},a.createElement("div",{className:"container mx-auto w-full max-w-[90%] lg:max-w-4xl flex justify-between items-center text-normal text-base"},a.createElement("div",{className:"flex space-x-8"},a.createElement("span",{className:"text-gray-800"},"Website template available on ",a.createElement("a",{href:"https://github.com/maltemosbach/project-page-template",style:{color:c}},a.createElement("span",{className:"align-text-top inline-flex justify-center mr-0.25"},a.createElement(f.NSh,{size:18})," "),a.createElement("span",null,"GitHub")))),a.createElement("div",{className:"flex space-x-8"},t&&a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"no-underline-effect",style:{color:c},"aria-label":"GitHub"},a.createElement(f.NSh,{size:24})),l&&a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"no-underline-effect",style:{color:c},"aria-label":"Google Scholar"},a.createElement(f.Y7U,{size:24})),r&&a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"no-underline-effect",style:{color:c},"aria-label":"LinkedIn"},a.createElement(f.Uvl,{size:24})))))},b=l(33);var p=e=>{let{arxivUrl:t,pdfUrl:l}=e;const{0:r,1:n}=(0,a.useState)(!1),c=(0,a.useRef)(null),s=()=>{n(!1)};(0,a.useEffect)((()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&s()};return r?document.addEventListener("mousedown",e):document.removeEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[r]);const{linkColor:o}=i();return a.createElement("div",{className:"relative inline-block text-left mr-6",ref:c},a.createElement("button",{onClick:()=>{n(!r)},className:"flex text-base items-center pl-5 pr-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300",style:{color:o},"aria-haspopup":"true","aria-expanded":r},"Paper",r?a.createElement(b.Ik,{className:"ml-2"}):a.createElement(b.pte,{className:"ml-2"})),r&&a.createElement("div",{className:"absolute right-0 mt-2 bg-white rounded-xl shadow-lg",role:"menu","aria-orientation":"vertical",tabIndex:0},a.createElement("a",{href:t,className:"text-sm whitespace-nowrap no-underline-effect flex items-center rounded-t-xl pl-3 pr-1.5 py-2 hover:bg-gray-100 transition-colors duration-200",target:"_blank",style:{color:o},role:"menuitem",tabIndex:0,onClick:s},a.createElement("span",{className:"mr-0.5"},"View on"),a.createElement("svg",{className:"w-12 h-5 ml-0.5 pt-0.5 me-2 fill-current","aria-hidden":"true","data-name":"primary logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 246.978 111.119"},a.createElement("path",{d:"M427.571,255.154c1.859,0,3.1,1.24,3.985,3.453,1.062-2.213,2.568-3.453,4.694-3.453h14.878a4.062,4.062,0,0,1,4.074,4.074v7.828c0,2.656-1.327,4.074-4.074,4.074-2.656,0-4.074-1.418-4.074-4.074V263.3H436.515a2.411,2.411,0,0,0-2.656,2.745v27.188h10.007c2.658,0,4.074,1.329,4.074,4.074s-1.416,4.074-4.074,4.074h-26.39c-2.659,0-3.986-1.328-3.986-4.074s1.327-4.074,3.986-4.074h8.236V263.3h-7.263c-2.656,0-3.985-1.329-3.985-4.074,0-2.658,1.329-4.074,3.985-4.074Z",transform:"translate(-358.165 -222.27)",fill:"currentColor"}),a.createElement("path",{d:"M539.233,255.154c2.656,0,4.074,1.416,4.074,4.074v34.007h10.1c2.746,0,4.074,1.329,4.074,4.074s-1.328,4.074-4.074,4.074H524.8c-2.656,0-4.074-1.328-4.074-4.074s1.418-4.074,4.074-4.074h10.362V263.3h-8.533c-2.744,0-4.073-1.329-4.073-4.074,0-2.658,1.329-4.074,4.073-4.074Zm4.22-17.615a5.859,5.859,0,1,1-5.819-5.819A5.9,5.9,0,0,1,543.453,237.539Z",transform:"translate(-358.165 -222.27)",fill:"currentColor"}),a.createElement("path",{d:"M605.143,259.228a4.589,4.589,0,0,1-.267,1.594L590,298.9a3.722,3.722,0,0,1-3.721,2.48h-5.933a3.689,3.689,0,0,1-3.808-2.48l-15.055-38.081a3.23,3.23,0,0,1-.355-1.594,4.084,4.084,0,0,1,4.164-4.074,3.8,3.8,0,0,1,3.718,2.656l14.348,36.134,13.9-36.134a3.8,3.8,0,0,1,3.72-2.656A4.084,4.084,0,0,1,605.143,259.228Z",transform:"translate(-358.165 -222.27)",fill:"currentColor"}),a.createElement("path",{d:"M486.149,277.877l-32.741,38.852c-1.286,1.372-2.084,3.777-1.365,5.5a4.705,4.705,0,0,0,4.4,2.914,4.191,4.191,0,0,0,3.16-1.563l40.191-42.714a4.417,4.417,0,0,0,.042-6.042Z",transform:"translate(-358.165 -222.27)",fill:"#aa142d"}),a.createElement("path",{d:"M486.149,277.877l31.187-38.268c1.492-1.989,2.2-3.03,1.492-4.723a5.142,5.142,0,0,0-4.481-3.161h0a4.024,4.024,0,0,0-3.008,1.108L472.711,274.6a4.769,4.769,0,0,0,.015,6.53L520.512,332.2a3.913,3.913,0,0,0,3.137,1.192,4.394,4.394,0,0,0,4.027-2.818c.719-1.727-.076-3.438-1.4-5.23l-40.124-47.464",transform:"translate(-358.165 -222.27)",fill:"currentColor"}),a.createElement("path",{d:"M499.833,274.828,453.169,224.4s-1.713-2.08-3.524-2.124a4.607,4.607,0,0,0-4.338,2.788c-.705,1.692-.2,2.88,1.349,5.1l40.093,48.422",transform:"translate(-358.165 -222.27)",fill:"#aa142d"}),a.createElement("path",{d:"M390.61,255.154c5.018,0,8.206,3.312,8.206,8.4v37.831H363.308a4.813,4.813,0,0,1-5.143-4.929V283.427a8.256,8.256,0,0,1,7-8.148l25.507-3.572v-8.4H362.306a4.014,4.014,0,0,1-4.141-4.074c0-2.87,2.143-4.074,4.355-4.074Zm.059,38.081V279.942l-24.354,3.4v9.9Z",transform:"translate(-358.165 -222.27)",fill:"currentColor"}))),a.createElement("a",{href:l,target:"_blank",className:"text-sm no-underline-effect rounded-b-xl block px-3 py-2 hover:bg-gray-100 transition-colors duration-200",style:{color:o},role:"menuitem",tabIndex:0,onClick:s},"View PDF")))};var h=e=>{let{arxivUrl:t,pdfUrl:l,otherUrls:r}=e;const{textColor:n,linkColor:c}=i();return a.createElement("div",{className:"flex justify-center mt-4 mb-12"},a.createElement(p,{arxivUrl:t,pdfUrl:l}),r.map(((e,t)=>{let[l,r]=e;return a.createElement("a",{href:l,className:"underline-offset-small inline-flex items-center text-base mr-6",style:{color:c}},r," ",a.createElement(b.OQo,{className:"ml-1"}))})))};var v=e=>{let{children:t}=e;const{textColor:l}=i(),n=r(l,.85);return a.createElement("div",{className:"text-center text-sm mb-4",style:{color:n}},t)};var x=e=>{let{children:t}=e;const{textColor:l}=i();return a.createElement("div",{className:"mt-10 pb-1 mb-4 text-center text-4xl",style:{color:l}},t)};const _=e=>{let{children:t}=e;return a.createElement("div",{className:"mx-auto w-full max-w-[90%] lg:max-w-4xl"},t)},y=()=>a.createElement("title",null,"TextOCVP: Object-Centric Image to Video Generation with Language Guidance ");var w=()=>a.createElement("div",null,a.createElement("main",{className:""},a.createElement(_,null,a.createElement(x,null,"TextOCVP: Object-Centric Image to Video Generation with Language Guidance"),a.createElement("div",{className:"flex flex-wrap justify-center text-lg mb-2.5 mt-0 leading-none"},a.createElement(m,{website:"http://angelvillarcorrales.com/templates/home.php",firstAuthor:!0,affiliations:""},"Angel Villar-Corrales"),a.createElement(m,{website:"",firstAuthor:!0,affiliations:""},"Gjergj Plepi"),a.createElement(m,{website:"https://www.ais.uni-bonn.de/behnke/",firstAuthor:!1,affiliations:""},"Sven Behnke")),a.createElement(v,null,"* Indicates equal contribution"),a.createElement("div",{className:"flex flex-wrap justify-center text-base mb-4 mt-0 leading-none"},a.createElement(o,{website:"https://www.ais.uni-bonn.de/index.html",number:""},"Autonomous Intelligent Systems, University of Bonn")),a.createElement(h,{arxivUrl:"",pdfUrl:"",otherUrls:[["TODO","BibTex"],["https://github.com/angelvillar96/TextOCVP","Code"]]}),a.createElement(s,null,"Accurate and flexible world models are crucial for autonomous systems to reason about          their surroundings and predict future outcomes. Object-centric world models, equipped with a structured latent space, have recently shown strong capabilities to model object dynamics and interactions. However, existing approaches struggle to scale to complex datasets and fail to incorporate external guidance, limiting their effectiveness as world models in robotic applications. In this work, we propose TextOCVP, an object-centric model for image-to-video generation with language guidance, enabling it to function as a world model for forecasting future scene dynamics conditioned on textual information. TextOCVP parses an observed scene into object representations, called slots, and utilizes a text-conditioned transformer predictor to forecast future object states and video frames. Our approach jointly models object dynamics and interactions while incorporating textual guidance, thus leading to accurate and controllable predictions. We show that the structured latent space of our method provides enhanced control over the prediction process, outperforming existing image-to-video generative models across different tasks."),a.createElement(d,null,"TextOCVP Architecture"),a.createElement("div",null,"Overview of TextOCVP model. ",a.createElement("br",null),a.createElement("b",null," a) Overview: "),"  TextOCVP parses the reference frame into object slot representations. The text-conditioned object-centric predictor module models the object dynamics and interactions, incorporating information from the textural description to predict future object states, which can be decoded into frames.",a.createElement("br",null),a.createElement("b",null," b) Predictor: ")," Overview of our proposed text-conditioned object-centric predictor module."),a.createElement("br",null),a.createElement("div",{class:"image-container"},a.createElement("img",{src:"imgs/main.png",alt:"Main",class:"img1"}),a.createElement("img",{src:"imgs/predictor.png",alt:"Predictor",class:"img2"})),a.createElement(d,null," Benchmarking "),a.createElement("div",null,"TextOCVP outperforms all baselines on the CATER dataset, and performs among the best image-to-video generation models on the more challenging CLIPort dataset."),a.createElement("br",null),a.createElement("div",{class:"tables"},a.createElement("figure",null,a.createElement("figcaption",null,"Benchmark on CATER"),a.createElement("img",{src:"imgs/benchmark_1.png",alt:"Benchmark on CATER",class:"quant_00"})),a.createElement("figure",null,a.createElement("figcaption",null,"Benchmark on CLIPport"),a.createElement("img",{src:"imgs/benchmark_2.png",alt:"Benchmark on CLIPort",class:"quant_01"}))),a.createElement("br",null),a.createElement(d,null," Qualitative Evaluation "),a.createElement("div",null,"TextOCVP generates, given a single reference frame and a text caption, a sequence that closely aligns to the ground-truth. We observe that TextOCVP maintains sharp object representations and correctly models the dynamics and interactions between the robot and the objects. In contrasts, the baseline model features multiple errors and artifacts, such as missing objects or blurry contours."),a.createElement("div",{class:"image-container"},a.createElement("img",{src:"imgs/qual_imgs/qual_cater.png",alt:"qual_01",class:"qual_00"}),a.createElement("img",{src:"imgs/qual_imgs/qual_cliport.png",alt:"qual_02",class:"qual_01"})),a.createElement("p",{class:"subtitle"}," CATER "),a.createElement("br",null),a.createElement("div",{class:"gif-container"},a.createElement("p",{class:"git-title-main"},a.createElement("code",null,"the ",a.createElement("span",{style:{color:"green",fontWeight:800}},"medium green metal sphere")," is sliding to (2, 1). the ",a.createElement("span",{style:{color:"brown",fontWeight:800}},"small brown metal cube")," is picked up and placed to (-3, 1).")),a.createElement("div",{class:"gif-items"},a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"GT"),a.createElement("img",{src:"GIFs/Qual_Comp/cater_1/gt_GIF_frames.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"MAGE Baseline"),a.createElement("img",{src:"GIFs/Qual_Comp/cater_1/MAGE_pred.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"TextOCVP (ours)"),a.createElement("img",{src:"GIFs/Qual_Comp/cater_1/TextOCVP_pred_GIF_frames.gif",alt:""})))),a.createElement(d,null," Text-Conditioned Predictions "),"TextOCVP represents each object in its corresponding object slots.",a.createElement("div",{class:"gif-container"},a.createElement("p",{class:"git-title-main"},a.createElement("code",null,"the ",a.createElement("span",{style:{color:"brown",fontWeight:800}},"medium brown rubber cone")," is picked up and containing the small gold metal snitch. the ",a.createElement("span",{style:{color:"gray",fontWeight:800}},"medium gray metal cube")," is rotating.")),a.createElement("div",{class:"gif-items"},a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"GT"),a.createElement("img",{src:"GIFs/Objs/Seq_00/gt_GIF_frames.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Preds"),a.createElement("img",{src:"GIFs/Objs/Seq_00/pred_GIF_frames.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 1."),a.createElement("img",{src:"GIFs/Objs/Seq_00/gt_obj_1.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 2."),a.createElement("img",{src:"GIFs/Objs/Seq_00/gt_obj_2.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 3."),a.createElement("img",{src:"GIFs/Objs/Seq_00/gt_obj_4.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 4."),a.createElement("img",{src:"GIFs/Objs/Seq_00/gt_obj_5.gif",alt:""})))),a.createElement("div",{class:"gif-container"},a.createElement("p",{class:"git-title-main"},a.createElement("code",null,"the ",a.createElement("span",{style:{color:"blue",fontWeight:800}},"large blue metal cone")," is picked up and containing the small yellow rubber cone. the ",a.createElement("span",{style:{color:"green",fontWeight:800}},"medium green metal cylinder "),"is sliding to (-1, 1).")),a.createElement("div",{class:"gif-items"},a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"GT"),a.createElement("img",{src:"GIFs/Objs/Seq_02/gt_GIF_frames.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Preds"),a.createElement("img",{src:"GIFs/Objs/Seq_02/pred_GIF_frames.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 1."),a.createElement("img",{src:"GIFs/Objs/Seq_02/gt_obj_3.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 2."),a.createElement("img",{src:"GIFs/Objs/Seq_02/gt_obj_4.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 3."),a.createElement("img",{src:"GIFs/Objs/Seq_02/gt_obj_5.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 4."),a.createElement("img",{src:"GIFs/Objs/Seq_02/gt_obj_6.gif",alt:""})))),a.createElement("div",{class:"gif-container"},a.createElement("p",{class:"git-title-main"},a.createElement("code",null,"the ",a.createElement("span",{style:{color:"brown",fontWeight:800}},"medium brown metal cone")," is picked up and placed to (-3, -3). the ",a.createElement("span",{style:{color:"brown",fontWeight:800}},"large brown metal cone")," is picked up and containing the small gold metal snitch.")),a.createElement("div",{class:"gif-items"},a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"GT"),a.createElement("img",{src:"GIFs/Objs/Seq_01/gt_GIF_frames.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Preds"),a.createElement("img",{src:"GIFs/Objs/Seq_01/pred_GIF_frames.gif",alt:"GT"})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 1."),a.createElement("img",{src:"GIFs/Objs/Seq_01/gt_obj_3.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 2."),a.createElement("img",{src:"GIFs/Objs/Seq_01/gt_obj_4.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 3."),a.createElement("img",{src:"GIFs/Objs/Seq_01/gt_obj_6.gif",alt:""})),a.createElement("div",{class:"gif-item"},a.createElement("div",{class:"gif-title"},"Obj 4."),a.createElement("img",{src:"GIFs/Objs/Seq_01/gt_obj_8.gif",alt:""})))),a.createElement(d,null," Controllability "),"TODO",a.createElement(d,null," Text-to-Slot Attention "),"TODO",a.createElement(u,null)),a.createElement(E,{githubUrl:"https://github.com/angelvillar96",googleScholarUrl:"https://scholar.google.com/citations?user=NCUoKLMAAAAJ&hl=en",linkedInUrl:"http://angelvillarcorrales.com/templates/home.php"})))},4084:function(e,t,l){l.d(t,{k5:function(){return o}});var a=l(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(r),c=function(){return c=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},i=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(l[a[r]]=e[a[r]])}return l};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function o(e){return function(t){return a.createElement(m,c({attr:c({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var l,r=e.attr,n=e.size,s=e.title,o=i(e,["attr","size","title"]),m=n||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:l,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d815ee46c97006d4cb84.js.map
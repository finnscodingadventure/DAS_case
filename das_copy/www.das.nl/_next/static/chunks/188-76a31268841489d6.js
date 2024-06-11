"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{32478:function(e,t,n){function r(e){let{src:t,width:n,quality:r}=e;if(t.match(/contentstack\.com/gi)){let e=new URL(t);return e.host="eu-images.contentstack.com",e.searchParams.set("quality",String(r||75)),e.searchParams.set("width",n),e.href}return t}n.r(t),n.d(t,{default:function(){return r}})},47592:function(e,t,n){n.d(t,{u:function(){return r}});let r=1280},31155:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(411),i=n(28570),o=n(59728);let a=e=>{let t=(0,o.E)(e=>e.setSideSheetOpen),n={...e,...e.sideSheet&&{href:void 0,onPress:()=>t(!0,e.sideSheet)}};return(0,r.tZ)(i.zx,{...n})}},75039:function(e,t,n){n.d(t,{z:function(){return B}});var r=n(411),i=n(67294),o=n(21870),a=n(83169);let l=e=>"rbv"===e||"doc"===e?e:"rbv";var d=n(28570),s=n(26601);let c=(0,s.Z)(d.Tn,{target:"ey9mafm0"})(()=>({position:"relative","a:first-of-type":{"&::after":{content:'""',position:"absolute",top:0,right:0,bottom:0,left:0}}}));var u=n(88537);let p=(0,s.Z)("div",{target:"e18t0tfu0"})(e=>{let{theme:t,size:n="l"}=e,r=(0,d.kM)(t.breakpoint);return{fontSize:t.typography.text["regular-".concat(n)].base.fontSize.rem,marginBlockEnd:t.typography.text["regular-".concat(n)].mobile.fontSize.rem,[r.up("desktop")]:{marginBlockEnd:t.typography.text["regular-".concat(n)].base.fontSize.rem}}}),h=async e=>{let{feed:t}=e,n=new URL("".concat("https://www.das.nl","/api/feedback/rating"));t&&n.searchParams.set("feed",t);let r=await fetch(n).catch(()=>{console.error("Fout bij het ophalen van rating.")});if(r)try{return await r.json()}catch(e){console.error("Fout bij het ophalen van rating",e)}};var g=n(79274);let v=async e=>{let{feed:t,start:n,limit:r}=e,i=new URL("".concat("https://www.das.nl","/api/feedback/reviews"));t&&i.searchParams.set("feed",t),n.toString()&&i.searchParams.set("start",n.toString()),r.toString()&&i.searchParams.set("limit",r.toString());try{let e=await fetch(i);if(!e.ok){console.log("Error fetching reviews",e.status);return}let t=await e.json(),n=Math.round(t.count.total/t.count.records);return{reviews:t.reviews,...n>100?{numberOfPages:100}:{numberOfPages:n}}}catch(e){throw console.error("Fout bij het ophalen van reviews.",e),Error("Fout bij het ophalen van reviews. ".concat(e))}},m=i.forwardRef((e,t)=>{let{reviews:n}=e;return(0,r.tZ)("div",{ref:t,children:n.map((e,t)=>(0,r.tZ)(d.Cq,{...e},t))})}),f=(0,s.Z)("div",{target:"e1t8zbdd0"})(()=>({position:"relative",minHeight:"160px"})),b=(0,s.Z)("div",{target:"e1t8zbdd1"})(e=>{let{theme:t}=e;return{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",inset:0,zIndex:1,background:t.color["white-alpha"]["alpha-40"]}}),y=e=>{let{openReviewDialog:t,setOpenReviewDialog:n,feed:o}=e,[a,l]=(0,i.useState)(0),[s,c]=(0,i.useState)([]),u=(0,i.useId)(),[p,h]=(0,g.v1)("page-"+u,{...g.U.withDefault(1),history:"push"}),[y,k]=(0,i.useState)(!1),[Z,w]=(0,i.useState)(!1),x=(0,i.useRef)(null),S=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=async()=>{var e,t;let n=(p-1)*6;k(!0),x.current&&(null===(e=x.current)||void 0===e||e.focus());try{let e=await v({feed:o,start:n,limit:6});e&&(0===a&&l(e.numberOfPages),c(e.reviews)),S.current&&(null===(t=S.current)||void 0===t||t.scrollTo({top:0,behavior:"smooth"}))}catch(e){w(!0),console.error("Reviews ophalen mislukt",e)}finally{k(!1)}};t&&e()},[p,o,a,t]),(0,r.tZ)(d.fd,{onSurface:"none",children:(0,r.tZ)(d.Vq,{width:"fixed",title:"Beoordelingen van onze klanten",overlayRef:S,description:"De mening van onze klanten is belangrijk. Lees hoe anderen onze dienstverlening hebben beoordeeld.",visuallyHiddenDescription:!1,requireExplicitClose:!1,open:t,onOpenChange:e=>{n(e)},footer:(0,r.tZ)("div",{sx:{display:"flex",justifyContent:"center"},children:a>1&&(0,r.tZ)(d.tl,{count:a,defaultPage:p,onChange:(e,t)=>h(t),page:p})}),children:(0,r.BX)(f,{children:[y&&(0,r.tZ)(b,{children:(0,r.tZ)(d.$j,{})}),Z&&(0,r.tZ)(d.gb,{severity:"error",announce:"assertive",title:"Er gaat iets fout bij het ophalen van reviews",description:"We zijn op de hoogte van het probleem en werken aan een oplossing. Excuses voor het ongemak."}),s?(0,r.tZ)(m,{reviews:s,ref:x}):(0,r.tZ)(d.gb,{severity:"info",announce:"polite",title:"Er zijn geen reviews beschikbaar"})]})})})},k=e=>{var t,n;let{feed:o,ratingProps:a,footer:l,...s}=e,[c,u]=(0,i.useState)(),p=(0,i.useId)(),[v,m]=(0,i.useState)(!1),[f,b]=(0,g.v1)("reviewOpen"+p,{...g.AE,history:"push"});return(0,i.useEffect)(()=>{m(!!f)},[f]),(0,i.useEffect)(()=>{(async()=>{if(o)try{let e=await h({feed:o});e&&u(e)}catch(e){}})()},[o]),(0,r.BX)(i.Fragment,{children:[(0,r.tZ)(d.Ak,{footer:l||o?{...l,...!!o&&{rating:{score:(null==c?void 0:c.score)||0,count:(null==c?void 0:c.count)||0,textColor:(null==a?void 0:a.textColor)||"default",variant:(null==a?void 0:a.variant)||"md",...c&&{hitArea:{label:(null==a?void 0:null===(t=a.hitAreaProps)||void 0===t?void 0:t.label)||"Bekijk alle reviews",onClick:()=>b(!0),"data-gtm-trigger":(null==a?void 0:null===(n=a.hitAreaProps)||void 0===n?void 0:n["data-gtm-trigger"])||"testimonial-card"}}}}}:void 0,...s}),!!o&&(0,r.tZ)(y,{openReviewDialog:!!v,setOpenReviewDialog:b,feed:o})]})};var Z=n(59728);let w=(0,s.Z)("iframe",{target:"e1jaujl10"})(()=>({border:"none",borderRadius:"12px"})),x=e=>{let{url:t}=e;return(0,r.tZ)(w,{style:{borderRadius:"12px"},src:t,width:"100%",height:"80",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})};var S=n(90071);let C=e=>{switch(e.type){case"json":var t;if(!(null===(t=e.json.text_editor)||void 0===t?void 0:t.json)||(0,o.mW)(e.json.text_editor.json))return null;return(0,o.Rw)(e.json.text_editor.json,{hasWrapper:!0,fontSize:"m"});case"proscons":return e.items?(0,r.tZ)(p,{size:"m",children:(0,r.tZ)(d.kU,{items:e.items})}):null;case"linklist":return e.items?(0,r.tZ)(d.Mc,{variant:"default",type:"links",items:e.items}):null;case"person":return e.person?(0,r.tZ)(u.g,{size:"xl",name:e.person.name,role:e.showCustomRole&&e.person.customRole?e.person.customRole:e.person.role,profileImage:e.person.profileImage}):null;default:return null}},z=e=>{if(!e)return null;let t=e.map((e,t)=>(0,r.tZ)(i.Fragment,{children:C(e)},t));return 0===t.length?null:t},B=e=>{var t,n,s,u,p,h,g,v,m,f,b,y;let{card:w,baseCardProps:C,options:B,children:T,...E}=e,j=(0,Z.E)(e=>e.setSideSheetOpen),F=(0,i.useCallback)(e=>t=>{let n=!!t.sideSheet;return{as:n?"button":"a",children:t.title,href:n?void 0:t.href,...!!t.icon&&{icon:t.icon},...!!e&&{"data-gtm-trigger":e},...n&&{onPress:()=>j(!0,t.sideSheet)}}},[j]),I=(e,t)=>{let n=(null==B?void 0:B.buttonDisplayAs)?null==B?void 0:B.buttonDisplayAs:e,r=(null==B?void 0:B["data-gtm-trigger"])?null==B?void 0:B["data-gtm-trigger"]:t||"cta-button";return{[n]:[w.footer.primary,w.footer.secondary].filter(S.jM).map(F(r))}},R={...(null===(t=w.graphic)||void 0===t?void 0:t.illustration)?{graphic:{title:"unset at CSCard.tsx",illustration:w.graphic.illustration}}:null},X={...!!(null==B?void 0:B.textColor)&&{body:{textColor:null==B?void 0:B.textColor}}},A={title:(null===(n=w.header)||void 0===n?void 0:n.title)||"",...(null==B?void 0:B.titleHeadingProps)&&{titleHeadingProps:null==B?void 0:B.titleHeadingProps},...(null==B?void 0:B.subTitleColor)&&{subTitleColor:null==B?void 0:B.subTitleColor}};switch(w.variant){case"standard":let O={header:{...A},...(null===(s=w.graphic)||void 0===s?void 0:s.illustration)?{graphic:w.graphic}:null,...!!(null==B?void 0:B.textColor)&&{body:{textColor:null==B?void 0:B.textColor}},...w.footer.primary&&{footer:I("buttons")}};return(0,r.tZ)(d.aX,{graphic:O.graphic,header:O.header,footer:O.footer,body:O.body,...C,...E,children:(0,r.BX)(i.Fragment,{children:[!!w.labelTag&&(0,r.tZ)(d.vO,{mb:16,children:(0,r.tZ)(d.qo,{variant:"blue",text:null==w?void 0:w.labelTag})}),z(null==w?void 0:w.body),T]})});case"product":let P=(0,a.T)(null===(u=w.footer.price)||void 0===u?void 0:u.current),W={header:{...A},...R,...X,footer:{...I("buttons"),price:{current:P,...w.footer.price},...!!(null==B?void 0:B.divider)&&{divider:null==B?void 0:B.divider}}};return(0,r.tZ)(d.Il,{header:W.header,footer:W.footer,...C,...E,children:(0,r.BX)(i.Fragment,{children:[!!w.labelTag&&(0,r.tZ)(d.vO,{mb:16,children:(0,r.tZ)(d.qo,{variant:"blue",text:null==w?void 0:w.labelTag})}),z(null==w?void 0:w.body),T]})});case"related content":let D={header:{...A,subTitleTop:(null===(p=w.header)||void 0===p?void 0:p.subTitleTop)||""},iconButton:w.iconButton&&!w.spotifyEmbed?{...w.iconButton,icon:w.iconButton.icon||"ArrowRight",label:w.iconButton.title,"data-gtm-trigger":(null==B?void 0:B["data-gtm-trigger"])?null==B?void 0:B["data-gtm-trigger"]:(null===(h=w.iconButton)||void 0===h?void 0:h.icon)==="Download"?"related-content-download":"related-content-cta"}:void 0,...!!w.spotifyEmbed&&{spotifyEmbed:w.spotifyEmbed}};return(0,r.BX)(d.$W,{header:D.header,iconButton:D.iconButton,...C,...E,children:[(null==w?void 0:w.body)&&z(null==w?void 0:w.body),!!D.spotifyEmbed&&(0,r.tZ)(x,{url:D.spotifyEmbed}),T]});case"overview":let L={header:{...A,subTitleTop:(null===(g=w.header)||void 0===g?void 0:g.subTitleTop)||""},...R,...X,...w.footer.primary&&{footer:I("links")}};return(0,r.tZ)(d.K0,{graphic:L.graphic,header:L.header,body:(null==B?void 0:B.noBody)?void 0:L.body,footer:L.footer,...C,...E,children:(null==B?void 0:B.noBody)||(null==B?void 0:B.asArticleCard)?(null==B?void 0:B.asArticleCard)?(0,r.BX)(i.Fragment,{children:[w.body&&(0,o.Rw)(null==w?void 0:w.body),T]}):null:(0,r.BX)(i.Fragment,{children:[z(null==w?void 0:w.body),T]})});case"keyfigure":let M={header:{...A,secondTitle:(null===(v=w.header)||void 0===v?void 0:v.secondTitle)||""},...R,...X,...w.footer.primary&&{footer:I("buttons")}};return(0,r.tZ)(d.mk,{graphic:M.graphic,header:M.header,footer:M.footer,body:M.body,...C,...E,children:(0,r.BX)(i.Fragment,{children:[z(null==w?void 0:w.body),T]})});case"review":let U={header:{...A,subTitleBottom:(null===(m=w.header)||void 0===m?void 0:m.subTitleBottom)||""},...R,...X,...w.footer.primary&&{footer:I("links")}};return(0,r.tZ)(k,{feed:w.feedbackCompanyFeed?l(w.feedbackCompanyFeed):void 0,ratingProps:null==B?void 0:B.rating,graphic:U.graphic,header:U.header,footer:U.footer,body:U.body,...C,...E,children:(0,r.BX)(i.Fragment,{children:[z(null==w?void 0:w.body),T]})});case"article":let _={header:{...A,subTitleTop:(null===(f=w.header)||void 0===f?void 0:f.subTitleTop)||""},graphic:{image:(null===(b=w.graphic)||void 0===b?void 0:b.image)||"",title:(null===(y=w.header)||void 0===y?void 0:y.title)||""},...X,...!!w.footer.primary&&{footer:{...I("links","related-blog-cta")}}};return _.header.titleHeadingProps||(_.header.titleHeadingProps={level:3,size:5}),_.footer.links[0].children="Lees meer",(0,r.tZ)(c,{graphic:{..._.graphic,imageHeight:200},header:_.header,footer:_.footer,body:_.body,...C,addPaddingOffset:!1,...E,children:(0,r.BX)(i.Fragment,{children:[(null==w?void 0:w.body)&&(0,o.Rw)(null==w?void 0:w.body),T]})});default:return(0,r.tZ)(d.Sl,{children:(0,r.tZ)(d.Sl.Header,{title:"Card variant not supported"})})}}},88537:function(e,t,n){n.d(t,{g:function(){return f}});var r=n(411),i=n(67294),o=n(21870),a=n(28570),l=n(26601);let d={xl:"64",xxl:"192"},s=(0,l.Z)(a.qE,{target:"eiy4cey0"})(e=>{let{theme:t,size:n}=e;return{[(0,a.kM)(t.breakpoint).up("tablet")]:{width:"".concat(d[n],"px"),height:"".concat(d[n],"px")}}}),c=(0,l.Z)("div",{target:"eiy4cey1"})(()=>({containerType:"inline-size"})),u=(0,l.Z)("div",{target:"eiy4cey2"})(e=>{let{theme:t,size:n}=e,r=(0,a.kM)(t.breakpoint);return{display:"inline-flex",position:"relative",flexDirection:"column",gap:"xxl"===n?t.spacing[24].rem:t.spacing[12].rem,..."xl"===n&&{a:{opacity:0,position:"absolute",inset:0,width:"auto"},["".concat(g,":has(~ a:hover, ~ a:focus)")]:{color:t.color.pink[500]}},[r.up("desktop-small")]:{flexDirection:"row"},"@container (max-width: 549px)":{flexDirection:"xxl"===n?"column":"row"},"@container (min-width: 550px)":{flexDirection:"row"}}}),p=(0,l.Z)("div",{target:"eiy4cey3"})(e=>{let{theme:t,size:n}=e;return{display:"flex",flexDirection:"column",justifyContent:"center",..."xxl"===n&&{rowGap:t.spacing[12].rem}}}),h=(0,l.Z)("div",{target:"eiy4cey4"})(e=>{let{theme:t}=e;return{"> span":{display:"block",color:t.color.grey[500],fontSize:t.typography.text["regular-m"].base.fontSize.rem,marginBottom:t.spacing[8].rem}}}),g=(0,l.Z)("p",{target:"eiy4cey5"})(e=>{let{theme:t}=e;return{color:t.color.blue[800],fontWeight:t.typography.text.base.fontWeight,fontFamily:t.typography.text.nexa.fontFamily,fontSize:"20px",transition:"color ".concat(t.motion.duration.short3," ").concat(t.motion.easing.linear)}}),v=(0,l.Z)("p",{target:"eiy4cey6"})(e=>{let{theme:t}=e;return{fontSize:t.typography.text["regular-s"].base.fontSize.rem,color:t.color.grey[600],textTransform:"capitalize"}}),m=e=>{let t=e.split(" ");return t.filter((e,n)=>0===n||n===t.length-1).map(e=>{var t;return null===(t=e[0])||void 0===t?void 0:t.toUpperCase()}).join("")},f=e=>{let{name:t,content:n,role:l,link:f,profileImage:b,size:y="xxl","data-gtm-trigger":k}=e,Z=b?new URL(b):null;Z&&(Z.searchParams.set("width",d[y]),Z.searchParams.set("crop","1:1,smart"),Z.searchParams.set("auto","webp"));let w=n?(0,o.Yz)(n):"";return(0,r.tZ)(c,{children:(0,r.BX)(u,{size:y,children:[(0,r.tZ)(s,{fallBackLetters:t?m(t):"DAS",label:t||"DAS",size:y,src:null==Z?void 0:Z.toString()}),(0,r.BX)(p,{size:y,children:["xxl"===y&&(0,r.BX)(h,{children:[!!l&&(0,r.tZ)("span",{children:l}),(0,r.tZ)(a.X6,{level:2,size:4,children:t||"DAS"})]}),"xl"===y&&(0,r.BX)(i.Fragment,{children:[(0,r.tZ)(g,{children:t||"DAS"}),!!l&&(0,r.tZ)(v,{children:l})]}),!!w&&"xxl"===y&&(0,r.tZ)(a.xv,{marginSide:"none",children:w.length>225?"".concat(w.substring(0,225),"..."):w}),f&&(0,r.tZ)(a.rU,{variant:"standalone-pink",...f,"data-gtm-trigger":k,children:f.title})]})]})})}},59728:function(e,t,n){n.d(t,{B:function(){return s},E:function(){return d}});var r=n(411),i=n(67294),o=n(28570),a=n(4298),l=n.n(a);let d=(0,n(64529).Ue)()(e=>({sideSheetOpen:!1,setSideSheetOpen:(t,n)=>e(e=>({...e,sideSheetOpen:t,sideSheet:n}))})),s=()=>{var e;let t=(0,i.useRef)(!0),n=(0,i.useRef)(!1),[a,s,c]=d(e=>[e.sideSheetOpen,e.sideSheet,e.setSideSheetOpen]),u=(0,i.useCallback)(()=>{if(t.current){t.current=!1;return}if(n.current){n.current=!1;return}window.history.pushState({sideSheetOpen:a,sideSheet:s},"")},[a,s]);(0,i.useEffect)(()=>{u()},[a,u]);let p=(0,i.useCallback)(e=>{n.current=!0;let t=null==e?void 0:e.state;t&&t.sideSheetOpen?c(!0,t.sideSheet):c(!1)},[c]);return(0,i.useEffect)(()=>(window.addEventListener("popstate",p),()=>{window.removeEventListener("popstate",p)}),[p]),(0,r.BX)(i.Fragment,{children:[(0,r.tZ)(l(),{src:"/das-transitievergoeding/dasoc.js",strategy:"lazyOnload"}),(0,r.tZ)(l(),{src:"/das-afspraak-maken/dasas.js",strategy:"lazyOnload"}),(0,r.tZ)(l(),{type:"module",src:"/das-tools/das-tools.esm.js",strategy:"lazyOnload"}),(0,r.BX)(o.Uu,{header:(null==s?void 0:null===(e=s.header)||void 0===e?void 0:e.title)?{title:s.header.title,subtitle:s.header.subtitle,labelTag:s.header.labelTag}:void 0,openState:[a,c],shouldCloseOnInteractOutside:e=>!e.closest(".pika-lendar"),children:[(null==s?void 0:s.formType)==="transitievergoeding-calculator"&&(0,r.tZ)("das-online-check",{"content-url":"/das-transitievergoeding/collection/",checks:"vergoeding"}),(null==s?void 0:s.formType)==="appointment-scheduler"&&(0,r.tZ)("das-appointment-scheduler",{event:(null==s?void 0:s.event)||"consult_call","content-url":"/das-afspraak-maken/collection/data/events/"}),(null==s?void 0:s.formType)==="letsel-vergoeding"&&(0,r.tZ)("das-letsel-vergoeding",{}),(null==s?void 0:s.formType)==="zakelijke-ontslag-vergoeding"&&(0,r.tZ)("das-ontslag-vergoeding",{})]})]})}},6071:function(e,t,n){n.d(t,{t:function(){return w}});var r=n(411),i=n(67294),o=n(69554),a=n.n(o),l=n(28513),d=n(28570),s=n(71068),c=n(11463),u=n(26601),p=n(47592),h=n(43495);function g(e,t,n){return Array.isArray(e)?{[t]:(0,d._e)("".concat(e[n],"px")).rem}:{[t]:(0,d._e)("".concat(e,"px")).rem}}function v(e,t){if(!t)return"transparent";switch(t){case"lightblue":return e.color.blue[25];case"pink":return"transparent";case"blue":return e.color.blue[500];default:return e.header.color.variant[t]}}let m=(0,u.Z)("div",{target:"e1pmo4dw0"})(e=>{let{theme:t,innerBackground:n,maxWidth:r=1390}=e,i=(0,d.kM)(t.breakpoint);return{"& > div":{padding:"".concat(t.spacing[64].rem," ").concat(t.spacing[64].rem),borderRadius:"80px",backgroundColor:v(t,n),color:function(e,t){if(!t)return e.color.blue[800];switch(t){case"lightblue":default:return e.color.blue[800];case"pink":return e.color.pink[900];case"blue":return e.color.white}}(t,n),maxWidth:"".concat(r,"px"),margin:"0 auto",[i.down("desktop-small")]:{padding:"".concat(t.spacing[24].rem," ").concat(t.spacing[8].rem),paddingInline:t.spacing[24].rem,borderRadius:"40px"}}}}),f=(0,u.Z)("section",{shouldForwardProp:e=>(0,s.Z)(e),target:"e1cgruun0"})(e=>{let{backgroundVariant:t,pT:n,pB:r,pY:i=[32,80],paddingTopFirstSection:o,rightSidebarComponents:a,overflowVisible:l,noPaddingInline:s,roundedCorners:c,isHero:u}=e,p=(0,d.kM)(d.rS.breakpoint);return{position:"relative",background:v(d.rS,t),...!c&&!s&&{paddingInline:d.rS.header.spacing.paddingInline.rem},paddingBlock:d.rS.spacing[40].rem,overflow:a||l?"visible":"hidden",...i||0===i?g(i,"paddingBlock",0):null,...n||0===n?g(n,"paddingTop",0):null,...r||0===r?g(r,"paddingBottom",0):null,":first-of-type":{...o||0===o?g(o,"paddingTop",0):null},[p.down("tablet")]:{...u&&{paddingLeft:0,paddingRight:0}},[p.up("tablet")]:{":first-of-type":{...o||0===o?g(o,"paddingTop",1):null}},[p.up("desktop-small")]:{paddingInline:c?0:d.rS.header.spacing["desktop-small"].paddingInline.rem,...i||0===i?g(i,"paddingBlock",1):null,...n||0===n?g(n,"paddingTop",1):null,...r||0===r?g(r,"paddingBottom",1):null,":first-of-type":{...o||0===o?g(o,"paddingTop",2):null}},[p.up("desktop")]:{paddingInline:c?0:d.rS.header.spacing.desktop.paddingInline.rem},[p.up("desktop-large")]:{paddingInline:c?0:d.rS.header.spacing["desktop-large"].paddingInline.rem}}}),b=(0,u.Z)("div",{target:"e1cgruun1"})(e=>{let{innerMaxWidth:t,alignCenter:n}=e;return{gridArea:"mainContent",...n&&{textAlign:"center"},...t&&{maxWidth:(0,d.Q1)("".concat(t,"px"),100,16)}}}),y=(0,u.Z)(b,{target:"e1cgruun2"})(()=>({gridArea:"endComponents"})),k=(0,u.Z)("aside",{target:"e1cgruun3"})(e=>{let{rightSidebarWidth:t=400}=e,n=(0,d.kM)(d.rS.breakpoint);return{gridArea:"sidebar",overflow:"hidden",display:"flex",flexDirection:"column",gap:d.rS.spacing[24].rem,padding:d.rS.spacing[4].rem,[n.up("desktop")]:{position:"sticky",height:"fit-content",top:"160px",width:(0,d.Q1)("".concat(t,"px"),100,16),minWidth:(0,d.Q1)("".concat(t,"px"),100,16)}}}),Z=(0,u.Z)(h.E.div,{shouldForwardProp:e=>!["maxWidth","splitContainer","endComponents"].includes(e),target:"e1cgruun4"})(e=>{let{maxWidth:t=p.u,splitContainer:n,endComponents:r}=e,i=(0,d.kM)(d.rS.breakpoint);return{maxWidth:t?"".concat(t,"px"):"unset",margin:"auto",...n&&{display:"grid",gridTemplateColumns:"1fr",gap:d.rS.spacing[40].rem,gridTemplateAreas:r?"\n      'mainContent'\n      'sidebar'\n      'endComponents'\n      ":"\n      'mainContent'\n      'sidebar'\n      ",[i.up("desktop")]:{rowGap:d.rS.spacing[40].rem,flexDirection:"row",gridTemplateAreas:r?"'mainContent sidebar' 'endComponents sidebar'":"'mainContent sidebar'",columnGap:d.rS.spacing[80].rem,...!!r&&{rowGap:d.rS.spacing[48].rem}}}}}),w=e=>{let{maxWidth:t,innerMaxWidth:n,backgroundVariant:o,children:s,rightSidebarComponents:u,rightSidebarWidth:p,endingComponents:h,id:g,showMotion:v,roundedCorners:w,alignCenter:x=!1,...S}=e,C=(0,i.useRef)(null),[z,B]=(0,i.useState)(!1),T=(0,c.u)();(0,i.useEffect)(()=>{if(null===C.current)return;let e=C.current,t=new IntersectionObserver(e=>{let[t]=e;B(t.isIntersecting)},{rootMargin:"-50% 0%"});return t.observe(e),()=>{t.unobserve(e)}},[]);let E=(0,r.BX)(Z,{splitContainer:!!u,endComponents:!!h,maxWidth:t,...v&&l.t9,children:[(0,r.tZ)(b,{innerMaxWidth:n,alignCenter:x,children:s}),!!u&&(0,r.tZ)(k,{rightSidebarWidth:p,children:u}),!!h&&(0,r.tZ)(y,{innerMaxWidth:n,children:h})]});return(0,r.BX)(i.Fragment,{children:[z&&(0,r.tZ)(a(),{id:"3c14a0dea62ed674",dynamic:[T.color.pink[25]],children:"body{background-color:".concat(T.color.pink[25],"}")}),(0,r.tZ)(f,{...S,backgroundVariant:o,rightSidebarComponents:u,id:g,roundedCorners:w,..."pink"===o&&C&&{ref:C},children:(0,r.tZ)(d.fd,{onSurface:"blue"===o?"on-surface":void 0,children:w?(0,r.tZ)(m,{innerBackground:"white",children:(0,r.tZ)(d.fd,{onSurface:"none",children:(0,r.tZ)("div",{children:E})})}):E})})]})}},26056:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(411),i=n(67294),o=n(21870),a=n(28570),l=n(5152),d=n.n(l),s=n(9008),c=n.n(s),u=n(79274),p=n(16769),h=n(59728);let g=(0,n(26601).Z)("div",{target:"e1csvwu0"})(e=>{let{theme:t}=e,n=(0,a.kM)(t.breakpoint);return{position:"fixed",left:"50%",bottom:t.spacing[24].rem,maxWidth:(0,a.Q1)(1440),width:"100%",paddingInline:t.spacing[24].rem,pointerEvents:"none",transform:"translateX(-50%)",[n.up("desktop-small")]:{bottom:(0,a.Q1)(50),paddingInline:t.spacing[40].rem},[n.up("desktop")]:{paddingInline:t.spacing[64].rem},[n.up("desktop-large")]:{paddingInline:t.spacing[80].rem},a:{display:"flex",justifyContent:"center",alignItems:"center",gap:(0,a.Q1)(4),height:(0,a.Q1)(48),marginInlineStart:"auto",paddingInline:t.spacing[16].rem,color:t.color.blue[500],backgroundColor:t.color.white,borderRadius:(0,a.Q1)(40),boxShadow:"0 ".concat((0,a.Q1)(4)," ").concat((0,a.Q1)(16)," ").concat((0,a.Q1)(8)," rgba(0, 98, 172, 0.05)"),outline:"none",pointerEvents:"visible",transition:"transform ".concat(t.motion.duration.short1," ").concat(t.motion.easing.calm),"&:hover":{transform:"translateY(".concat((0,a.Q1)(-4),")")},span:{...(0,a.q7)(16),fontFamily:t.typography.text.nexa.fontFamily,fontSize:t.typography.text["regular-s"].base.fontSize}}}}),v=e=>{let{text:t}=e,[n,o]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let e=()=>o(window.scrollY>300);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),n)?(0,r.tZ)(g,{children:(0,r.BX)(a.rU,{variant:"unstyled",href:"#",noSpanWrap:!0,children:[(0,r.tZ)("div",{children:(0,r.tZ)(a.JO,{name:"ArrowUp"})}),(0,r.tZ)("span",{children:t})]})}):null};var m=n(6071);let f=d()(()=>n.e(944).then(n.bind(n,75944)),{loadableGenerated:{webpack:()=>[75944]},ssr:!1}),b=e=>{let{domainSection:t,header:n,footer:l,breadcrumbs:d,warnings:s,children:g,stackApi:b,isDraftMode:y,hideToTop:k}=e,Z=(0,p.Av)(),[w,x,S]=l.doormatLinks,[C,z]=(0,u.v1)("mobileMenuOpen",{...u.AE.withDefault(!1),history:"push"});return(0,r.BX)(i.Fragment,{children:[(0,r.tZ)(c(),{children:(0,r.tZ)("meta",{className:"elastic",name:"section",content:t.id})}),(0,r.tZ)(a.h4,{buttons:n.buttons,logoHref:n.href,logoTitle:n.title,links:n.links.map(e=>({...e,active:!1})),warnings:Z?void 0:s,variant:"blue",mobileMenuCards:n.mobileMenuCards.map(e=>{var t,n;return{link:{title:(null===(t=e.link)||void 0===t?void 0:t.title)||"-",href:(null===(n=e.link)||void 0===n?void 0:n.href)||""},body:(0,o.Yz)(e.body)||"",title:e.title||"-",variant:e.variant||"light"}}),domainNavigationItems:n.domainNavigationItems,selectedDomainNavigation:t.id,scrollProgress:!0,mobileNavigationOpen:C,setMobileNavigationOpen:e=>{z(e)}}),!k&&(0,r.tZ)(v,{text:"Naar boven"}),d&&!!d.links.length&&d.links.length>1&&(0,r.tZ)(m.t,{pY:12,children:(0,r.tZ)(a.Oo,{navItems:d.links,"aria-label":"Breadcrumbs"})}),(0,r.BX)("main",{children:[!!b&&(0,r.tZ)(f,{isDraftMode:y,stackApi:b}),g]}),(0,r.tZ)(h.B,{}),(0,r.tZ)(a.$_,{homeUrl:l.homeUrl,doormatLinks:[w,x,S],legalLinks:l.legalLinks,payoff:l.payoff,socialLinks:l.socialLinks})]})}},21870:function(e,t,n){n.d(t,{Rw:function(){return C},Yz:function(){return z},mW:function(){return S}});var r=n(411),i=n(67294),o=n(31155),a=n(75039),l=n(28570),d=n(26601);let s=(0,d.Z)(l.vO,{target:"e12fbd7o0"})({"&:last-of-type":{marginBlockEnd:0}}),c=e=>{let{items:t}=e,n=(0,l.kC)(),o=t.map(e=>{var t;return{...e,...!!e.link&&{link:{children:null===(t=e.link)||void 0===t?void 0:t.title,...e.link}},headingLevel:3,content:(0,r.tZ)(i.Fragment,{children:C(e.content,{fontSize:"m",hasWrapper:!1})}),"data-gtm-trigger":"accordion-list"}});return(0,r.tZ)(s,{mv:24,children:(0,r.tZ)(l.MK,{items:o,variant:"none"===n.onSurface?"blue-25":"default"})})};var u=n(25675),p=n.n(u);let h=(0,d.Z)("figure",{target:"ec58wuj0"})(e=>{let{theme:t,position:n}=e,r=(()=>{switch(n){case"left":return"start";case"right":return"end";case"center":return"center";default:return null}})();return{paddingBlock:t.spacing[12].px,display:"grid",...r&&{justifyContent:r},"& > img":{borderRadius:"16px"}}}),g=(0,d.Z)("figcaption",{target:"ec58wuj1"})(e=>{let{theme:t,position:n}=e,r=(()=>{switch(n){case"left":return"left";case"right":return"right";case"center":return"center";default:return null}})();return{paddingBlock:t.spacing[8].rem,color:t.color.grey[600],fontSize:"14px",lineHeight:"20px",...r&&{textAlign:r}}}),v=e=>{let{caption:t,position:n="none",children:i}=e;return(0,r.BX)(h,{position:n,children:[i,!!t&&(0,r.tZ)(g,{position:n,children:t})]})},m=(0,d.Z)(p(),{target:"ec58wuj2"})(e=>{let{width:t,height:n}=e;return{aspectRatio:"".concat(t,"/").concat(n),maxWidth:"100%",height:"auto",display:"inline"}});var f=n(42734),b=n(2203);let y=(e,t,n)=>{let d=function(e,t){let n=t&&(0,f.l)(t);return{h1:(e,t)=>(0,r.tZ)(l.X6,{id:n,level:1,marginSide:"both",children:t}),h2:(e,t)=>(0,r.tZ)(l.X6,{id:n,level:2,size:3,marginSide:"both",children:t}),h3:(e,t)=>(0,r.tZ)(l.X6,{id:n,level:3,size:4,marginSide:"both",children:t}),h4:(e,t)=>(0,r.tZ)(l.X6,{id:n,level:4,size:5,marginSide:"both",children:t}),h5:(e,t)=>(0,r.tZ)(l.X6,{id:n,level:5,size:6,marginSide:"both",children:t}),h6:(e,t)=>(0,r.tZ)(l.X6,{id:n,level:6,marginSide:"both",children:t}),p:(t,n)=>(0,r.tZ)(l.xv,{size:e,children:n}),span:(t,n)=>(0,r.tZ)(l.xv,{size:e,as:"span",children:n}),a:(e,t)=>(0,r.tZ)(l.rU,{variant:"inline",href:e.url,target:e.target,"data-gtm-trigger":"cta-button",children:t}),fragment:(e,t)=>t,reference:(e,t)=>{if("asset"===e.type&&"display"===e["display-type"]&&e.width&&e.height){let t=(0,r.tZ)(m,{src:e["asset-link"],width:parseFloat(e.width),height:parseFloat(e.height),alt:e["asset-alt"]||"",loading:"lazy"});return e.inline?t:(0,r.tZ)(v,{position:e.position,caption:e["asset-caption"],children:t})}return("entry"===e.type||"asset"===e.type)&&"link"===e["display-type"]?(0,r.tZ)(l.rU,{variant:"inline",href:e.href,target:"asset"===e.type?"_blank":e.target,"data-gtm-trigger":"cta-button",children:t}):null},ul:(e,t)=>(0,r.tZ)(l.QI,{nestingOption:"direct",variant:"default",children:t}),ol:(e,t)=>(0,r.tZ)(l.GS,{nestingOption:"direct",children:t}),card_standard:e=>(0,r.tZ)(l.vO,{mv:24,children:(0,r.tZ)(a.z,{card:e,baseCardProps:{surface:"blue",size:"sm"}})}),button:e=>{let{title:t,...n}=e;return(0,r.tZ)(o.a,{...n,as:"a","data-gtm-trigger":"cta-button",children:t})},collapsible_steps:e=>(0,r.tZ)(c,{items:e})}}(t,n);return d[e]?d[e]:["embed","hr"].includes(e)?t=>i.createElement(e,{...t}):(t,n)=>i.createElement(e,{},(0,r.tZ)(i.Fragment,{children:n}))},k=(e,t)=>{var n;return e.break?(0,r.tZ)("br",{}):e.bold?(0,r.tZ)(l.xv,{as:"span",semiBold:!0,size:t,children:e.text}):(0,r.tZ)(i.Fragment,{children:null==e?void 0:null===(n=e.text)||void 0===n?void 0:n.replace(b.S.quicklink,"")})},Z=(e,t)=>{if(!(null==e?void 0:e.children))return null;let n=e.children.map((e,n)=>{var o,a,l;let d=e.children;if("text"in e)return(0,r.tZ)(i.Fragment,{children:k(e,null==t?void 0:t.fontSize)},"".concat(n,"_").concat(null===(l=e.text)||void 0===l?void 0:l.length));if(e.type&&["div","span","p","h1","h2","h3","h4","h5","h6","img"].includes(e.type)&&S(e))return(0,r.tZ)(i.Fragment,{children:(0,r.tZ)("br",{})},e.uid);let s=e,c=null==d?void 0:d.find(t=>"p"===e.type&&t.type===e.type&&"children"in t);c&&(s=c);let u=null==d?void 0:d.find(t=>("a"===e.type||"reference"===e.type)&&("a"===t.type||"reference"===t.type)&&"children"in t);u&&(s=u);let p=Array.isArray(d)?null===(a=d.find(e=>e.text&&e.highlight))||void 0===a?void 0:null===(o=a.text)||void 0===o?void 0:o.replace(b.S.quicklink,""):void 0;return(0,r.tZ)(i.Fragment,{children:y(s.type,null==t?void 0:t.fontSize,p)(s.attrs,Z(s,{...t,hasWrapper:!1}))},e.uid)});return(null==t?void 0:t.hasWrapper)?(0,r.tZ)("div",{className:"das-rich-text",children:n}):n},w=e=>(null==e?void 0:e.children)?e.children.map(e=>e.type?w(e):e.text?e.text:void 0).join(" "):"",x=e=>{var t;return!!(null==e?void 0:null===(t=e.children)||void 0===t?void 0:t.find(e=>{var t,n;return"reference"===e.type&&null!==(t=e.attrs)&&void 0!==t&&!!t["display-type"]&&(null===(n=e.attrs)||void 0===n?void 0:n["display-type"])==="display"||(e.type?x(e):void 0)}))},S=e=>{let t=x(e);return!(""!==w(e).replace(/\s/g,"").replace(/&nbsp;/gi,""))&&!t},C=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasWrapper:!0,fontSize:"l"};return S(e)?null:Z(e,t)},z=e=>S(e)?"":w(e)},83169:function(e,t,n){n.d(t,{T:function(){return r}});function r(e){let t;return(t=(t="string"==typeof e&&e.trim().length?e:new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR"}).format("number"==typeof e?e:0)).startsWith("€")?t:"€ ".concat(t)).replace(",00",",-")}},28513:function(e,t,n){n.d(t,{SV:function(){return d},Z5:function(){return r},b9:function(){return o},gx:function(){return a},t9:function(){return l},x9:function(){return i}});let r={functional:[.2,0,.6,1],entrance:[0,0,.3,1],linear:[0,0,1,1],exit:[.4,.14,1,1],custom:[.3,0,.8,1]},i={short1:.1,short2:.16,short3:.2,medium1:.3,medium2:.4,medium3:.5,long1:.6,long2:.8,long3:1},o={initial:["hidden"],whileInView:["visible"],viewport:{once:!0},transition:{ease:r.entrance,duration:.6,delay:.1},variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:48}}},a={initial:["hidden"],whileInView:["visible"],viewport:{once:!0},transition:{ease:r.entrance,duration:.6,delay:.4},variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:48}}},l={initial:["hidden","hiddenY"],whileInView:["visible","visibleY"],viewport:{once:!1},variants:{visible:{opacity:1,transition:{ease:r.linear,duration:.6,delay:.5}},visibleY:{y:0,transition:{ease:r.entrance,duration:.6,delay:.5}},hidden:{opacity:0},hiddenY:{y:48}}},d={animate:{y:[-16,16,-16]},transition:{delay:.9,y:{duration:4*i.long1,repeat:1,ease:r.entrance}}}},2203:function(e,t,n){n.d(t,{S:function(){return r}});let r={postalCode:/[1-9][0-9]{3}(?!sa|sd|ss) ?[a-z]{2}$/i,houseNumber:/^\d{1,5}$/,password:/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,phoneNumber:/^(?:^0[0-57-9][0-9]{2}[-\s]?[0-9]{6}$)|(?:^0[0-57-9][0-9][-\s]?[0-9]{7}$)|(?:^06[-\s]?[0-9]{8}$)$/,birthDate:/(\d{2})-(\d{2})-(\d{4})/,quicklink:/\{(.*?)\}/}}}]);
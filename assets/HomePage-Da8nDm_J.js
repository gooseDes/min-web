import{n as e,r as t,t as n}from"./useLocalStorage-CVayp3JY.js";import{Dt as r,Et as i,Nt as a,Ot as o,St as s,Tt as c,X as l,bt as u,i as d,kt as f,n as p,r as m,st as h,t as g,wt as _,xt as v}from"./index-Cm9_WuwO.js";function y(e,t){if(e===`first`)return 0;{let n=t-1;return e===`last`?n:n/2}}function b(e=.1,{startDelay:t=0,from:n=0,ease:r}={}){return(i,a)=>{let o=typeof n==`number`?n:y(n,a),s=e*Math.abs(o-i);if(r){let t=a*e;s=h(r)(s/t)*t}return t+s}}var x=a(o(),1);function ee(e){let t=u(()=>l(e)),{isStatic:n}=(0,x.useContext)(d);if(n){let[,n]=(0,x.useState)(e);(0,x.useEffect)(()=>t.on(`change`,n),[])}return t}var S=a(r(),1),C=i(),w={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_dbb83ab`,panel:`_panel_6779756`,main:`_main_411beac`,container:`_container_2b49e59`,listItem:`_listItem_8b0b17a`},T=v();function E(e){let t=(0,C.c)(20),n,r,i,a,o,s;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6]):({text:a,image:o,className:r,isInList:s,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s);let c=a===void 0?``:a,l=o===void 0?``:o,u=s===void 0?!1:s,d=r||``,f=u?w.listItem:``,p;t[7]!==d||t[8]!==f?(p=[d,w.container,f].filter(Boolean),t[7]=d,t[8]=f,t[9]=p):p=t[9];let m=p.join(` `),h;t[10]===l?h=t[11]:(h=l&&(0,T.jsx)(`img`,{src:l}),t[10]=l,t[11]=h);let g;t[12]===c?g=t[13]:(g=(0,T.jsx)(`p`,{children:c}),t[12]=c,t[13]=g);let _;return t[14]!==n||t[15]!==m||t[16]!==i||t[17]!==h||t[18]!==g?(_=(0,T.jsxs)(`div`,{...i,className:m,children:[h,g,n]}),t[14]=n,t[15]=m,t[16]=i,t[17]=h,t[18]=g,t[19]=_):_=t[19],_}var D={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_7722443`,panel:`_panel_0b10f16`,main:`_main_d3a141c`,container:`_container_f68fb93`};function O(e){let t=(0,C.c)(13),[r,i]=p(),[a]=n(`user`),o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=[],t[0]=o):o=t[0];let[s,c]=(0,x.useState)(o),{ref:l,onClick:u}=e,d;t[1]===i?d=t[2]:(d=()=>({setChats:e=>{(0,S.flushSync)(()=>c(e))},show:async()=>{await i(`.chatItem`,{opacity:0,translateX:-200,scale:0},{duration:0}),i(`.chatItem`,{opacity:1},{delay:b(.05)}),await i(`.chatItem`,{translateX:0,scale:1},{type:`spring`,damping:15,stiffness:250,delay:b(.05)})}}),t[1]=i,t[2]=d),(0,x.useImperativeHandle)(l,d);let f;if(t[3]!==s||t[4]!==u||t[5]!==a){let e;t[7]!==u||t[8]!==a?(e=e=>(0,T.jsx)(E,{className:`chatItem`,style:{opacity:0},image:`https://serv.msg-min.xyz/avatars/${e.participants?.find(e=>(e?.id||-1)!==a.id)?.avatar||`default`}.webp`,text:e.name,isInList:!0,onClick:t=>u?.(e,t)},e.id),t[7]=u,t[8]=a,t[9]=e):e=t[9],f=s.map(e),t[3]=s,t[4]=u,t[5]=a,t[6]=f}else f=t[6];let m;return t[10]!==r||t[11]!==f?(m=(0,T.jsx)(`div`,{className:D.container,ref:r,children:f}),t[10]=r,t[11]=f,t[12]=m):m=t[12],m}function te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ne(e){if(Array.isArray(e))return e}function re(e){if(Array.isArray(e))return te(e)}function ie(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ue(r.key),r)}}function ae(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function A(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=fe(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function j(e,t,n){return(t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function N(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function P(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?se(Object(n),!0).forEach(function(t){j(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ce(e,t){return ne(e)||N(e,t)||fe(e,t)||P()}function I(e){return re(e)||M(e)||fe(e)||oe()}function le(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ue(e){var t=le(e,`string`);return typeof t==`symbol`?t:t+``}function de(e){"@babel/helpers - typeof";return de=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},de(e)}function fe(e,t){if(e){if(typeof e==`string`)return te(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}var pe=function(){},me={},he={},ge=null,_e={mark:pe,measure:pe};try{typeof window<`u`&&(me=window),typeof document<`u`&&(he=document),typeof MutationObserver<`u`&&(ge=MutationObserver),typeof performance<`u`&&(_e=performance)}catch{}var ve=(me.navigator||{}).userAgent,ye=ve===void 0?``:ve,L=me,R=he,be=ge,xe=_e;L.document;var z=!!R.documentElement&&!!R.head&&typeof R.addEventListener==`function`&&typeof R.createElement==`function`,Se=~ye.indexOf(`MSIE`)||~ye.indexOf(`Trident/`),Ce,we=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Te=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Ee={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},De={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Oe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],B=`classic`,ke=`duotone`,Ae=`sharp`,je=`sharp-duotone`,Me=`chisel`,Ne=`etch`,Pe=`graphite`,Fe=`jelly`,Ie=`jelly-duo`,Le=`jelly-fill`,Re=`notdog`,ze=`notdog-duo`,Be=`slab`,Ve=`slab-press`,He=`thumbprint`,Ue=`utility`,We=`utility-duo`,Ge=`utility-fill`,Ke=`whiteboard`,qe=`Classic`,Je=`Duotone`,Ye=`Sharp`,Xe=`Sharp Duotone`,Ze=`Chisel`,Qe=`Etch`,$e=`Graphite`,et=`Jelly`,tt=`Jelly Duo`,nt=`Jelly Fill`,rt=`Notdog`,it=`Notdog Duo`,at=`Slab`,ot=`Slab Press`,st=`Thumbprint`,ct=`Utility`,lt=`Utility Duo`,ut=`Utility Fill`,dt=`Whiteboard`,ft=[B,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke];Ce={},j(j(j(j(j(j(j(j(j(j(Ce,B,qe),ke,Je),Ae,Ye),je,Xe),Me,Ze),Ne,Qe),Pe,$e),Fe,et),Ie,tt),Le,nt),j(j(j(j(j(j(j(j(j(Ce,Re,rt),ze,it),Be,at),Ve,ot),He,st),Ue,ct),We,lt),Ge,ut),Ke,dt);var pt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},mt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},ht=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),gt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},_t=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],vt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},yt=[`kit`];j(j({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var bt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},xt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},St={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Ct={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},wt,Tt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Et=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];wt={},j(j(j(j(j(j(j(j(j(j(wt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),j(j(j(j(j(j(j(j(j(wt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),j(j({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Dt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Ot={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},kt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},At=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Et,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),jt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Mt=[1,2,3,4,5,6,7,8,9,10],Nt=Mt.concat([11,12,13,14,15,16,17,18,19,20]),Pt=[].concat(I(Object.keys(Ot)),jt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,Tt.GROUP,Tt.SWAP_OPACITY,Tt.PRIMARY,Tt.SECONDARY],Mt.map(function(e){return`${e}x`}),Nt.map(function(e){return`w-${e}`})),Ft={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},V=`___FONT_AWESOME___`,It=16,Lt=`fa`,Rt=`svg-inline--fa`,H=`data-fa-i2svg`,zt=`data-fa-pseudo-element`,Bt=`data-fa-pseudo-element-pending`,Vt=`data-prefix`,Ht=`data-icon`,Ut=`fontawesome-i2svg`,Wt=`async`,Gt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Kt=[`::before`,`::after`,`:before`,`:after`],qt=function(){try{return!0}catch{return!1}}();function Jt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[B]}})}var Yt=F({},Ee);Yt[B]=F(F(F(F({},{"fa-duotone":`duotone`}),Ee[B]),vt.kit),vt[`kit-duotone`]);var Xt=Jt(Yt),Zt=F({},gt);Zt[B]=F(F(F(F({},{duotone:`fad`}),Zt[B]),Ct.kit),Ct[`kit-duotone`]);var Qt=Jt(Zt),$t=F({},kt);$t[B]=F(F({},$t[B]),St.kit);var en=Jt($t),tn=F({},Dt);tn[B]=F(F({},tn[B]),bt.kit),Jt(tn);var nn=we,rn=`fa-layers-text`,an=Te;Jt(F({},pt));var on=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],sn=De,cn=[].concat(I(yt),I(Pt)),ln=L.FontAwesomeConfig||{};function un(e){var t=R.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function dn(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}R&&typeof R.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=ce(e,2),n=t[0],r=t[1],i=dn(un(n));i!=null&&(ln[r]=i)});var fn={styleDefault:`solid`,familyDefault:B,cssPrefix:Lt,replacementClass:Rt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ln.familyPrefix&&(ln.cssPrefix=ln.familyPrefix);var pn=F(F({},fn),ln);pn.autoReplaceSvg||(pn.observeMutations=!1);var U={};Object.keys(fn).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(t){pn[e]=t,mn.forEach(function(e){return e(U)})},get:function(){return pn[e]}})}),Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){pn.cssPrefix=e,mn.forEach(function(e){return e(U)})},get:function(){return pn.cssPrefix}}),L.FontAwesomeConfig=U;var mn=[];function hn(e){return mn.push(e),function(){mn.splice(mn.indexOf(e),1)}}var W=It,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gn(e){if(!(!e||!z)){var t=R.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=R.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return R.head.insertBefore(t,r),e}}var _n=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function vn(){for(var e=12,t=``;e-- >0;)t+=_n[Math.random()*62|0];return t}function yn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bn(e){return e.classList?yn(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function xn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Sn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${xn(e[n])}" `},``).trim()}function Cn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function wn(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function Tn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function En(e){var t=e.transform,n=e.width,r=n===void 0?It:n,i=e.height,a=i===void 0?It:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&Se?c+=`translate(${t.x/W-r/2}em, ${t.y/W-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/W}em), calc(-50% + ${t.y/W}em)) `:c+=`translate(${t.x/W}em, ${t.y/W}em) `,c+=`scale(${t.size/W*(t.flipX?-1:1)}, ${t.size/W*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Dn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function On(){var e=Lt,t=Rt,n=U.cssPrefix,r=U.replacementClass,i=Dn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var kn=!1;function An(){U.autoAddCss&&!kn&&(gn(On()),kn=!0)}var jn={mixout:function(){return{dom:{css:On,insertCss:An}}},hooks:function(){return{beforeDOMElementCreation:function(){An()},beforeI2svg:function(){An()}}}},K=L||{};K[V]||(K[V]={}),K[V].styles||(K[V].styles={}),K[V].hooks||(K[V].hooks={}),K[V].shims||(K[V].shims=[]);var q=K[V],Mn=[],Nn=function(){R.removeEventListener(`DOMContentLoaded`,Nn),Pn=1,Mn.map(function(e){return e()})},Pn=!1;z&&(Pn=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),Pn||R.addEventListener(`DOMContentLoaded`,Nn));function Fn(e){z&&(Pn?setTimeout(e,0):Mn.push(e))}function In(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?xn(e):`<${t} ${Sn(r)}>${a.map(In).join(``)}</${t}>`}function Ln(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Rn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},zn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Rn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Bn(e){return I(e).length===1?e.codePointAt(0).toString(16):null}function Vn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Vn(t);typeof q.hooks.addPack==`function`&&!r?q.hooks.addPack(e,Vn(t)):q.styles[e]=F(F({},q.styles[e]||{}),i),e===`fas`&&Hn(`fa`,t)}var Un=q.styles,Wn=q.shims,Gn=Object.keys(en),Kn=Gn.reduce(function(e,t){return e[t]=Object.keys(en[t]),e},{}),qn=null,Jn={},Yn={},Xn={},Zn={},Qn={};function $n(e){return~cn.indexOf(e)}function er(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!$n(i)?i:null}var tr=function(){var e=function(e){return zn(Un,function(t,n,r){return t[r]=zn(n,e,{}),t},{})};Jn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Yn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Qn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Un||U.autoFetchSvg,n=zn(Wn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Xn=n.names,Zn=n.unicodes,qn=lr(U.styleDefault,{family:U.familyDefault})};hn(function(e){qn=lr(e.styleDefault,{family:U.familyDefault})}),tr();function nr(e,t){return(Jn[e]||{})[t]}function rr(e,t){return(Yn[e]||{})[t]}function ir(e,t){return(Qn[e]||{})[t]}function ar(e){return Xn[e]||{prefix:null,iconName:null}}function or(e){var t=Zn[e],n=nr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function J(){return qn}var sr=function(){return{prefix:null,iconName:null,rest:[]}};function cr(e){var t=B,n=Gn.reduce(function(e,t){return e[t]=`${U.cssPrefix}-${t}`,e},{});return ft.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Kn[r].includes(e)}))&&(t=r)}),t}function lr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?B:t,r=Xt[n][e];if(n===ke&&!e)return`fad`;var i=Qt[n][e]||Qt[n][r],a=e in q.styles?e:null;return i||a||null}function ur(e){var t=[],n=null;return e.forEach(function(e){var r=er(U.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function dr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var fr=At.concat(_t);function pr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=dr(e.filter(function(e){return fr.includes(e)})),a=dr(e.filter(function(e){return!fr.includes(e)})),o=ce(i.filter(function(e){return r=e,!Oe.includes(e)}),1)[0],s=o===void 0?null:o,c=cr(i),l=F(F({},ur(a)),{},{prefix:lr(s,{family:c})});return F(F(F({},l),_r({values:e,family:c,styles:Un,config:U,canonical:l,givenPrefix:r})),mr(n,r,l))}function mr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?ar(i):{},o=ir(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Un.far&&Un.fas&&!U.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var hr=ft.filter(function(e){return e!==B||e!==ke}),gr=Object.keys(kt).filter(function(e){return e!==B}).map(function(e){return Object.keys(kt[e])}).flat();function _r(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===ke,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&hr.includes(n)&&(Object.keys(s).find(function(e){return gr.includes(e)})||l.autoFetchSvg)&&(r.prefix=ht.get(n).defaultShortPrefixId,r.iconName=ir(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=J()||`fas`),r}var vr=function(){function e(){ie(this,e),this.definitions={}}return ae(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=F(F({},e.definitions[n]||{}),t[n]),Hn(n,t[n]);var r=en[B][n];r&&Hn(r,t[n]),tr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),yr=[],br={},xr={},Sr=Object.keys(xr);function Cr(e,t){var n=t.mixoutsTo;return yr=e,br={},Object.keys(xr).forEach(function(e){Sr.indexOf(e)===-1&&delete xr[e]}),yr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),de(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){br[e]||(br[e]=[]),br[e].push(r[e])})}e.provides&&e.provides(xr)}),n}function wr(e,t){var n=[...arguments].slice(2);return(br[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Tr(e){var t=[...arguments].slice(1);(br[e]||[]).forEach(function(e){e.apply(null,t)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xr[e]?xr[e].apply(null,t):void 0}function Er(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||J();if(t)return t=ir(n,t)||t,Ln(Dr.definitions,n,t)||Ln(q.styles,n,t)}var Dr=new vr,X={noAuto:function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Tr(`noAuto`)},config:U,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(Tr(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,Fn(function(){Or({autoReplaceSvgRoot:t}),Tr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(de(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ir(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=lr(e[0]);return{prefix:n,iconName:ir(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${U.cssPrefix}-`)>-1||e.match(nn))){var r=pr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:ir(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=J();return{prefix:i,iconName:ir(i,e)||e}}}},library:Dr,findIconDefinition:Er,toHtml:In},Or=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?R:e;(Object.keys(q.styles).length>0||U.autoFetchSvg)&&z&&U.autoReplaceSvg&&X.dom.i2svg({node:t})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return In(e)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var t=R.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Ar(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(wn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Cn(F(F({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function jr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${U.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:F(F({},i),{},{id:o}),children:r}]}]}function Mr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Nr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[U.replacementClass,a?`${U.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:F(F({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Mr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[H]=``);var _=F(F({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:F({},l.styles)}),v=r.found&&n.found?Y(`generateAbstractMask`,_)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?jr(_):Ar(_)}function Pr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=F(F({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[H]=``);var l=F({},a.styles);wn(i)&&(l.transform=En({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Cn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Fr(e){var t=e.content,n=e.extra,r=F(F({},n.attributes),{},{class:n.classes.join(` `)}),i=Cn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Ir=q.styles;function Lr(e){var t=e[0],n=e[1],r=ce(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${U.cssPrefix}-${sn.GROUP}`},children:[{tag:`path`,attributes:{class:`${U.cssPrefix}-${sn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${U.cssPrefix}-${sn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Rr={found:!1,width:512,height:512};function zr(e,t){!qt&&!U.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Br(e,t){var n=t;return t===`fa`&&U.styleDefault!==null&&(t=J()),new Promise(function(r,i){if(n===`fa`){var a=ar(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ir[t]&&Ir[t][e]){var o=Ir[t][e];return r(Lr(o))}zr(e,t),r(F(F({},Rr),{},{icon:U.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var Vr=function(){},Hr=U.measurePerformance&&xe&&xe.mark&&xe.measure?xe:{mark:Vr,measure:Vr},Ur=`FA "7.2.0"`,Wr=function(e){return Hr.mark(`${Ur} ${e} begins`),function(){return Gr(e)}},Gr=function(e){Hr.mark(`${Ur} ${e} ends`),Hr.measure(`${Ur} ${e}`,`${Ur} ${e} begins`,`${Ur} ${e} ends`)},Kr={begin:Wr,end:Gr},qr=function(){};function Jr(e){return typeof(e.getAttribute?e.getAttribute(H):null)==`string`}function Yr(e){var t=e.getAttribute?e.getAttribute(Vt):null,n=e.getAttribute?e.getAttribute(Ht):null;return t&&n}function Xr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function Zr(){return U.autoReplaceSvg===!0?ni.replace:ni[U.autoReplaceSvg]||ni.replace}function Qr(e){return R.createElementNS(`http://www.w3.org/2000/svg`,e)}function $r(e){return R.createElement(e)}function ei(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Qr:$r:t;if(typeof e==`string`)return R.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(ei(e,{ceFn:n}))}),r}function ti(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var ni={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(ei(e),t)}),t.getAttribute(H)===null&&U.keepOriginalSource){var n=R.createComment(ti(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~bn(t).indexOf(U.replacementClass))return ni.replace(e);var r=RegExp(`${U.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===U.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return In(e)}).join(`
`);t.setAttribute(H,``),t.innerHTML=a}};function ri(e){e()}function ii(e,t){var n=typeof t==`function`?t:qr;if(e.length===0)n();else{var r=ri;U.mutateApproach===Wt&&(r=L.requestAnimationFrame||ri),r(function(){var t=Zr(),r=Kr.begin(`mutate`);e.map(t),r(),n()})}}var ai=!1;function oi(){ai=!0}function si(){ai=!1}var ci=null;function li(e){if(be&&U.observeMutations){var t=e.treeCallback,n=t===void 0?qr:t,r=e.nodeCallback,i=r===void 0?qr:r,a=e.pseudoElementsCallback,o=a===void 0?qr:a,s=e.observeMutationsRoot,c=s===void 0?R:s;ci=new be(function(e){if(!ai){var t=J();yn(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Jr(e.addedNodes[0])&&(U.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&U.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Jr(e.target)&&~on.indexOf(e.attributeName))if(e.attributeName===`class`&&Yr(e.target)){var r=pr(bn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Vt,a||t),s&&e.target.setAttribute(Ht,s)}else Xr(e.target)&&i(e.target)})}}),z&&ci.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ui(){ci&&ci.disconnect()}function di(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function fi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=pr(bn(e));return i.prefix||=J(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=rr(i.prefix,e.innerText)||nr(i.prefix,Bn(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function pi(e){return yn(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function mi(){return{iconName:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fi(e),r=n.iconName,i=n.prefix,a=n.rest,o=pi(e),s=wr(`parseNodeAttributes`,{},e);return F({iconName:r,prefix:i,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?di(e):[],attributes:o}},s)}var gi=q.styles;function _i(e){var t=U.autoReplaceSvg===`nest`?hi(e,{styleParser:!1}):hi(e);return~t.extra.classes.indexOf(rn)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function vi(){return[].concat(I(_t),I(At))}function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=R.documentElement.classList,r=function(e){return n.add(`${Ut}-${e}`)},i=function(e){return n.remove(`${Ut}-${e}`)},a=U.autoFetchSvg?vi():Oe.concat(Object.keys(gi));a.includes(`fa`)||a.push(`fa`);var o=[`.${rn}:not([${H}])`].concat(a.map(function(e){return`.${e}:not([${H}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=yn(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Kr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=_i(t);n&&e.push(n)}catch(e){qt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){ii(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_i(e).then(function(e){e&&ii([e],t)})}function xi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Er(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Er(i||{}),e(r,F(F({},n),{},{mask:i}))}}var Si=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?G:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return kr(F({type:`icon`},e),function(){return Tr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Nr({icons:{main:Lr(v),mask:s?Lr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:F(F({},G),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Ci={mixout:function(){return{icon:xi(Si)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=yi,e.nodeCallback=bi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?R:t,r=e.callback;return yi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Br(n,r),o.iconName?Br(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=ce(o,2),u=l[0],d=l[1];t([e,Nr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Cn(a);o.length>0&&(n.style=o);var s;return wn(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},wi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return kr({type:`layer`},function(){Tr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${U.cssPrefix}-layers`].concat(I(r)).join(` `)},children:n}]})}}}},Ti={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return kr({type:`counter`,content:e},function(){return Tr(`beforeDOMElementCreation`,{content:e,params:t}),Fr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-counter`].concat(I(a))}})})}}}},Ei={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?G:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return kr({type:`text`,content:e},function(){return Tr(`beforeDOMElementCreation`,{content:e,params:t}),Pr({content:e,transform:F(F({},G),r),extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-text`].concat(I(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Se){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Pr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Di=RegExp(`"`,`ug`),Oi=[1105920,1112319],ki=F(F(F(F({},{FontAwesome:{normal:`fas`,400:`fas`}}),mt),Ft),xt),Ai=Object.keys(ki).reduce(function(e,t){return e[t.toLowerCase()]=ki[t],e},{}),ji=Object.keys(Ai).reduce(function(e,t){var n=Ai[t];return e[t]=n[900]||I(Object.entries(n))[0][1],e},{});function Mi(e){return Bn(I(e.replace(Di,``))[0]||``)}function Ni(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Di,``),r=n.codePointAt(0),i=r>=Oi[0]&&r<=Oi[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Pi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ai[n]||{})[i]||ji[n]}function Fi(e,t){var n=`${Bt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=yn(e.children).filter(function(e){return e.getAttribute(zt)===t})[0],o=L.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(an),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Pi(s,l),p=Mi(d),m=c[0].startsWith(`FontAwesome`),h=Ni(o),g=nr(f,p),_=g;if(m){var v=or(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Vt)!==f||a.getAttribute(Ht)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=mi(),b=y.extra;b.attributes[zt]=t,Br(g,f).then(function(i){var a=Nr(F(F({},y),{},{icons:{main:i,mask:sr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=R.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return In(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ii(e){return Promise.all([Fi(e,`::before`),Fi(e,`::after`)])}function Li(e){return e.parentNode!==document.head&&!~Gt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(zt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Ri=function(e){return!!e&&Kt.some(function(t){return e.includes(t)})},zi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=A(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Ri(a)){var o=Kt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var n;if(t)n=e;else if(U.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=A(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=A(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=A(zi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){U.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=yn(n).filter(Li).map(Ii),i=Kr.begin(`searchPseudoElements`);oi(),Promise.all(r).then(function(){i(),si(),e()}).catch(function(){i(),si(),t()})})}}var Vi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Bi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?R:t;U.searchPseudoElements&&Bi(n)}}},Hi=!1,Ui={mixout:function(){return{dom:{unwatch:function(){oi(),Hi=!0}}}},hooks:function(){return{bootstrap:function(){li(wr(`mutationObserverCallbacks`,{}))},noAuto:function(){ui()},watch:function(e){var t=e.observeMutationsRoot;Hi?si():li(wr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Wi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Gi={mixout:function(){return{parse:{transform:function(e){return Wi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Wi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:F({},a.outer),children:[{tag:`g`,attributes:F({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:F(F({},t.icon.attributes),a.path)}]}]}}}},Ki={x:0,y:0,width:`100%`,height:`100%`};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ji(e){return e.tag===`g`?e.children:[e]}Cr([jn,Ci,wi,Ti,Ei,Vi,Ui,Gi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?pr(n.split(` `).map(function(e){return e.trim()})):sr();return r.prefix||=J(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Tn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:F(F({},Ki),{},{fill:`white`})},p=c.children?{children:c.children.map(qi)}:{},m={tag:`g`,attributes:F({},d.inner),children:[qi(F({tag:c.tag,attributes:F(F({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:F({},d.outer),children:[m]},g=`mask-${a||vn()}`,_=`clip-${a||vn()}`,v={tag:`mask`,attributes:F(F({},Ki),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ji(u)},v]};return t.push(y,{tag:`rect`,attributes:F({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ki)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;L.matchMedia&&(t=L.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:F(F({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=F(F({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:F(F({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:F(F({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:F(F({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:X}),X.noAuto;var Yi=X.config;X.library,X.dom;var Xi=X.parse;X.findIconDefinition,X.toHtml;var Zi=X.icon;X.layer,X.text,X.counter;function Qi(e){return e-=0,e===e}function $i(e){return Qi(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var ea=(e,t)=>x.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function ta(e){return e.charAt(0).toUpperCase()+e.slice(1)}var na=new Map,ra=1e3;function ia(e){if(na.has(e))return na.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=$i(n);t[e.startsWith(`webkit`)?ta(e):e]=r}}}n=a+1}if(na.size===ra){let e=na.keys().next().value;e&&na.delete(e)}return na.set(e,t),t}function aa(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),aa(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=ia(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[$i(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(ea)))}return e(t.tag,{...a,...u},...r)}var oa=aa.bind(null,x.createElement),sa=(e,t)=>{let n=(0,x.useId)();return e||(t?n:void 0)},ca=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var la=`searchPseudoElementsFullScan`in Yi&&typeof Yi.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,ua=Number.parseInt(la)>=7,da=()=>ua,fa=`fa`,Z={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},pa={left:`fa-pull-left`,right:`fa-pull-right`},ma={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},ha={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Q={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},ga={default:`fa-layers`};function _a(e){let t=Yi.cssPrefix||Yi.familyPrefix||fa;return t===fa?e:e.replace(new RegExp(String.raw`(?<=^|\s)${fa}-`,`g`),`${t}-`)}function va(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Z.beat),n&&x.push(Z.fade),r&&x.push(Z.beatFade),i&&x.push(Z.bounce),a&&x.push(Z.shake),o&&x.push(Z.spin),c&&x.push(Z.spinReverse),s&&x.push(Z.spinPulse),l&&x.push(Z.pulse),u&&x.push(Q.fixedWidth),d&&x.push(Q.inverse),f&&x.push(Q.border),p===!0&&x.push(Q.flip),(p===`horizontal`||p===`both`)&&x.push(Q.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(Q.flipVertical),m!=null&&x.push(ha[m]),h!=null&&h!==0&&x.push(ma[h]),g!=null&&x.push(pa[g]),_&&x.push(Q.swapOpacity),da()?(v&&x.push(Q.rotateBy),y&&x.push(Q.widthAuto),(Yi.cssPrefix||Yi.familyPrefix||fa)===fa?x:x.map(_a)):x}var ya=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ba(e){if(e)return ya(e)?e:Xi.icon(e)}function xa(e){return Object.keys(e)}var Sa=new ca(`FontAwesomeIcon`),Ca={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},wa=new Set(Object.keys(Ca)),Ta=x.forwardRef((e,t)=>{let n={...Ca,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=sa(c,!!i),d=sa(s,!!o),f=ba(r);if(!f)return Sa.error(`Icon lookup is undefined`,r),null;let p=va(n),m=typeof l==`string`?Xi.transform(l):l,h=ba(i),g=Zi(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Sa.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of xa(n))wa.has(e)||(v[e]=n[e]);return oa(_[0],v)});Ta.displayName=`FontAwesomeIcon`,`${ga.default}${Q.fixedWidth}`;var Ea={container:`_container_e84588b`};function Da(e){let t=(0,C.c)(14),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({icon:r,size:a,className:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o;t[5]===n?o=t[6]:(o=[n,Ea.container].filter(Boolean),t[5]=n,t[6]=o);let s=o.join(` `),c;t[7]!==r||t[8]!==a?(c=(0,T.jsx)(Ta,{icon:r,fontSize:a,color:g.primaryColor}),t[7]=r,t[8]=a,t[9]=c):c=t[9];let l;return t[10]!==i||t[11]!==s||t[12]!==c?(l=(0,T.jsx)(`div`,{className:s,...i,children:c}),t[10]=i,t[11]=s,t[12]=c,t[13]=l):l=t[13],l}var Oa={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_cbdbe2a`,panel:`_panel_085af9d`,main:`_main_5c8dc31`,container:`_container_b390d75`};function ka(e){let t=(0,C.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({icon:r,size:a,className:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=`${Oa.container} ${n}`,s;t[5]!==r||t[6]!==a?(s=(0,T.jsx)(Da,{icon:r,size:a}),t[5]=r,t[6]=a,t[7]=s):s=t[7];let c;return t[8]!==i||t[9]!==o||t[10]!==s?(c=(0,T.jsx)(`button`,{className:o,...i,children:s}),t[8]=i,t[9]=o,t[10]=s,t[11]=c):c=t[11],c}var Aa=f((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`far`,n=`comments`,r=576,i=512,a=[128490,61670],o=`f086`,s=`M76.2 258.7c6.1-15.2 4-32.6-5.6-45.9-14.5-20.1-22.6-43.7-22.6-68.8 0-66.8 60.5-128 144-128s144 61.2 144 128-60.5 128-144 128c-15.9 0-31.1-2.3-45.3-6.5-10.3-3.1-21.4-2.5-31.4 1.5l-50.4 20.2 11.4-28.5zM0 144c0 35.8 11.6 69.1 31.7 96.8L1.9 315.2c-1.3 3.2-1.9 6.6-1.9 10 0 14.8 12 26.8 26.8 26.8 3.4 0 6.8-.7 10-1.9l96.3-38.5c18.6 5.5 38.4 8.4 58.9 8.4 106 0 192-78.8 192-176S298-32 192-32 0 46.8 0 144zM384 512c20.6 0 40.3-3 58.9-8.4l96.3 38.5c3.2 1.3 6.6 1.9 10 1.9 14.8 0 26.8-12 26.8-26.8 0-3.4-.7-6.8-1.9-10l-29.7-74.4c20-27.8 31.7-61.1 31.7-96.8 0-82.4-61.7-151.5-145-170.7-1.6 16.3-5.1 31.9-10.1 46.9 63.9 14.8 107.2 67.3 107.2 123.9 0 25.1-8.1 48.7-22.6 68.8-9.6 13.3-11.7 30.6-5.6 45.9l11.4 28.5-50.4-20.2c-10-4-21.1-4.5-31.4-1.5-14.2 4.2-29.4 6.5-45.3 6.5-72.2 0-127.1-45.7-140.7-101.2-15.6 3.2-31.7 5-48.1 5.2 16.4 81.9 94.7 144 188.8 144z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faComments=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a}))(),ja={prefix:`fas`,iconName:`arrow-right-to-bracket`,icon:[512,512,[`sign-in`],`f090`,`M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z`]},Ma={prefix:`fas`,iconName:`paperclip`,icon:[512,512,[128206],`f0c6`,`M224.6 12.8c56.2-56.2 147.4-56.2 203.6 0s56.2 147.4 0 203.6l-164 164c-34.4 34.4-90.1 34.4-124.5 0s-34.4-90.1 0-124.5L292.5 103.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L185 301.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l164-164c31.2-31.2 31.2-81.9 0-113.1s-81.9-31.2-113.1 0l-164 164c-53.1 53.1-53.1 139.2 0 192.3s139.2 53.1 192.3 0L428.3 284.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L343.4 459.6c-78.1 78.1-204.7 78.1-282.8 0s-78.1-204.7 0-282.8l164-164z`]},Na={prefix:`fas`,iconName:`list-ul`,icon:[512,512,[`list-dots`],`f0ca`,`M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z`]},Pa={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_5afa451`,panel:`_panel_472e73c`,chatsPanel:`_chatsPanel_104f2c6`,userPanel:`_userPanel_e903ffe`,main:`_main_093a1fe`,mobileHidden:`_mobileHidden_b18829d`,leftPart:`_leftPart_c8aabed`,iconButton:`_iconButton_f5e94f8`,header:`_header_7f0e54d`};function Fa(t){let n=(0,C.c)(20),{user:r,navigate:i,onChatClick:a,chatsContainerRef:o,leftPartRef:s}=t,c;n[0]===i?c=n[1]:(c=()=>{i(`/auth`,{viewTransition:!0})},n[0]=i,n[1]=c);let l=c,u,d;n[2]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,T.jsxs)(`div`,{className:Pa.header,children:[(0,T.jsx)(Da,{icon:Aa.faComments,size:24}),(0,T.jsx)(`h1`,{children:`Chats`})]}),d=(0,T.jsx)(e,{}),n[2]=u,n[3]=d):(u=n[2],d=n[3]);let f;n[4]!==o||n[5]!==a?(f=(0,T.jsxs)(`div`,{className:Pa.chatsPanel,children:[u,d,(0,T.jsx)(O,{onClick:a,ref:o})]}),n[4]=o,n[5]=a,n[6]=f):f=n[6];let p;n[7]===Symbol.for(`react.memo_cache_sentinel`)?(p={flex:1},n[7]=p):p=n[7];let m=`https://serv.msg-min.xyz/avatars/${r.avatar}.webp`,h;n[8]!==m||n[9]!==r.username?(h=(0,T.jsx)(E,{style:p,image:m,text:r.username}),n[8]=m,n[9]=r.username,n[10]=h):h=n[10];let g;n[11]===l?g=n[12]:(g=(0,T.jsx)(ka,{onClick:l,className:Pa.iconButton,icon:ja,size:24}),n[11]=l,n[12]=g);let _;n[13]!==h||n[14]!==g?(_=(0,T.jsxs)(`div`,{className:Pa.userPanel,children:[h,g]}),n[13]=h,n[14]=g,n[15]=_):_=n[15];let v;return n[16]!==s||n[17]!==f||n[18]!==_?(v=(0,T.jsxs)(`div`,{ref:s,className:Pa.leftPart,children:[f,_]}),n[16]=s,n[17]=f,n[18]=_,n[19]=v):v=n[19],v}var $={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_58c3c08`,panel:`_panel_7ce20b8`,message:`_message_a606eec`,main:`_main_ea75f04`,container:`_container_bd81563`,containerLeft:`_containerLeft_8a50c17`,containerRight:`_containerRight_63692db`,left:`_left_644dc63`,right:`_right_e61114a`,senderName:`_senderName_dfa911b`,sentAt:`_sentAt_239ab20`,text:`_text_077fce4`,senderAvatar:`_senderAvatar_416592a`,jump:`_jump_3320511`},Ia=(0,x.memo)(function(e){let n=(0,C.c)(37),{text:r,side:i,senderName:a,senderAvatar:o,sentAt:s,type:c,className:l,shown:u}=e,d=r===void 0?`Unknown`:r,f=i===void 0?`left`:i,p=a===void 0?`Unknown`:a,h=s===void 0?`some time ago`:s,g=c===void 0?`header`:c,_=l===void 0?``:l,v=u===void 0?!1:u,y=ee(+!!v),b=ee(v?0:f===`left`?-200:200),S=ee(v?1:.5),w,E;n[0]!==y||n[1]!==S||n[2]!==v||n[3]!==f||n[4]!==b?(w=()=>{let e=m(y,+!!v,{}),t=m(b,v?0:f===`left`?-200:200,{type:`spring`,damping:15,stiffness:250}),n=m(S,v?1:.5,{type:`spring`,damping:15,stiffness:250});return()=>{e.stop(),t.stop(),n.stop()}},E=[v,y,b,S,f],n[0]=y,n[1]=S,n[2]=v,n[3]=f,n[4]=b,n[5]=w,n[6]=E):(w=n[5],E=n[6]),(0,x.useEffect)(w,E);let D;n[7]===y?D=n[8]:(D={padding:`8px`,margin:0,opacity:y},n[7]=y,n[8]=D);let O=`${$.container} ${f===`left`?$.containerLeft:$.containerRight} ${_}`,te=g===`header`?`block`:`none`,ne;n[9]===te?ne=n[10]:(ne={display:te},n[9]=te,n[10]=ne);let re;n[11]!==o||n[12]!==ne?(re=(0,T.jsx)(`img`,{src:o,alt:``,className:$.senderAvatar,style:ne}),n[11]=o,n[12]=ne,n[13]=re):re=n[13];let ie=`${$.message} ${f===`left`?$.left:$.right}`,k;n[14]!==S||n[15]!==b?(k={translateX:b,scale:S},n[14]=S,n[15]=b,n[16]=k):k=n[16];let ae=g===`header`?`block`:`none`,A;n[17]===ae?A=n[18]:(A={display:ae},n[17]=ae,n[18]=A);let j;n[19]!==p||n[20]!==A?(j=(0,T.jsx)(`p`,{className:$.senderName,style:A,children:p}),n[19]=p,n[20]=A,n[21]=j):j=n[21];let M;n[22]===d?M=n[23]:(M=(0,T.jsx)(`p`,{className:$.text,children:d}),n[22]=d,n[23]=M);let N;n[24]===h?N=n[25]:(N=(0,T.jsx)(`p`,{className:$.sentAt,children:h}),n[24]=h,n[25]=N);let P;n[26]!==ie||n[27]!==k||n[28]!==j||n[29]!==M||n[30]!==N?(P=(0,T.jsxs)(t.div,{className:ie,style:k,children:[j,M,N]}),n[26]=ie,n[27]=k,n[28]=j,n[29]=M,n[30]=N,n[31]=P):P=n[31];let oe;return n[32]!==O||n[33]!==re||n[34]!==P||n[35]!==D?(oe=(0,T.jsxs)(t.div,{style:D,className:O,children:[re,P]}),n[32]=O,n[33]=re,n[34]=P,n[35]=D,n[36]=oe):oe=n[36],oe}),La={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_a4cd77f`,panel:`_panel_70355d0`,message:`_message_f71f736`,main:`_main_7bc4d29`,container:`_container_6b9280d`,containerLeft:`_containerLeft_4dbc43d`,containerRight:`_containerRight_5a7dc3e`,left:`_left_6a2bfe6`,right:`_right_1a9b581`,senderName:`_senderName_5eae6b1`,sentAt:`_sentAt_ce8e61c`,text:`_text_602e970`,senderAvatar:`_senderAvatar_455c823`,jump:`_jump_590caf3`};function Ra(e){let r=(0,C.c)(15),{ref:i}=e,[a]=n(`user`),o;r[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=[],r[0]=o):o=r[0];let[s,c]=(0,x.useState)(o),l=(0,x.useRef)(null),[u,d]=(0,x.useState)(0),f;r[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>({clearMessages:()=>{c([]),d(0)},setMessages:async e=>{let t=[];e.forEach((n,r)=>{let i;i=r===0?`header`:e[r-1].sender.id===n.sender.id?`regular`:`header`,t.push({shown:!0,type:i,...n})}),(0,S.flushSync)(()=>c(t)),l.current&&(l.current.scrollTop=l.current.scrollHeight);for(let e=0;e<15;e++)setTimeout(()=>d(za),e*50)},addMessage:e=>{if(!l.current)return;let t=l.current.scrollHeight-l.current.scrollTop===l.current.clientHeight;(0,S.flushSync)(()=>c(t=>[...t,{shown:!0,type:`header`,...e}])),t&&l.current.scrollTo({top:l.current.scrollHeight,behavior:`smooth`})}}),r[1]=f):f=r[1],(0,x.useImperativeHandle)(i,f);let p,m,h;r[2]===Symbol.for(`react.memo_cache_sentinel`)?(p={opacity:0},m={opacity:1},h={opacity:0},r[2]=p,r[3]=m,r[4]=h):(p=r[2],m=r[3],h=r[4]);let g;if(r[5]!==u||r[6]!==s||r[7]!==a){let e;r[9]!==u||r[10]!==s.length||r[11]!==a?(e=(e,t)=>{let n=s.length-t-1;return(0,T.jsx)(Ia,{side:e.sender.id===a.id?`right`:`left`,text:e.content,senderName:e.sender.username===a.username?`You`:e.sender.username,senderAvatar:`https://serv.msg-min.xyz/avatars/${e.sender.avatar}.webp`,sentAt:_(e.sentAt,`en-US`,!1),type:e.type,className:`message-${e.id}`,shown:u>n||n>=15},e.id)},r[9]=u,r[10]=s.length,r[11]=a,r[12]=e):e=r[12],g=s.map(e),r[5]=u,r[6]=s,r[7]=a,r[8]=g}else g=r[8];let v;return r[13]===g?v=r[14]:(v=(0,T.jsx)(t.div,{initial:p,animate:m,exit:h,className:La.container,ref:l,children:g}),r[13]=g,r[14]=v),v}function za(e){return e+1}var Ba={prefix:`far`,iconName:`paper-plane`,icon:[576,512,[61913],`f1d8`,`M290.5 287.7L491.4 86.9 359 456.3 290.5 287.7zM457.4 53L256.6 253.8 88 185.3 457.4 53zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3L39.4 151.7c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z`]},Va={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_36951c8`,panel:`_panel_27c99aa`,container:`_container_fff0025`,main:`_main_2ec5ab0`,input:`_input_b27d49a`,button:`_button_036e3c7`,horizontalRow:`_horizontalRow_28d43a4`};function Ha(e){let n=(0,C.c)(31),r,i,a,o;n[0]===e?(r=n[1],i=n[2],a=n[3],o=n[4]):({ref:a,onTextChanged:i,onSend:r,...o}=e,n[0]=e,n[1]=r,n[2]=i,n[3]=a,n[4]=o);let[s,c]=(0,x.useState)(``),[l,u]=(0,x.useState)(``),d;n[5]===Symbol.for(`react.memo_cache_sentinel`)?(d=()=>({setMessagePrefix:e=>{c(e)}}),n[5]=d):d=n[5],(0,x.useImperativeHandle)(a,d);let f,p;n[6]!==i||n[7]!==s||n[8]!==l?(f=()=>{i?.(s+l)},p=[s,l,i],n[6]=i,n[7]=s,n[8]=l,n[9]=f,n[10]=p):(f=n[9],p=n[10]),(0,x.useEffect)(f,p);let m;n[11]===Symbol.for(`react.memo_cache_sentinel`)?(m=e=>{u(e)},n[11]=m):m=n[11];let h=m,g;n[12]!==r||n[13]!==s||n[14]!==l?(g=()=>{r?.(s+l),c(``),u(``)},n[12]=r,n[13]=s,n[14]=l,n[15]=g):g=n[15];let _=g,v,y,b;n[16]===Symbol.for(`react.memo_cache_sentinel`)?(v={translateY:100},y={translateY:0},b={translateY:100},n[16]=v,n[17]=y,n[18]=b):(v=n[16],y=n[17],b=n[18]);let ee;n[19]===Symbol.for(`react.memo_cache_sentinel`)?(ee=(0,T.jsx)(ka,{className:Va.button,icon:Ma,size:24}),n[19]=ee):ee=n[19];let S;n[20]===Symbol.for(`react.memo_cache_sentinel`)?(S=e=>h(e.target.value),n[20]=S):S=n[20];let w;n[21]===l?w=n[22]:(w=(0,T.jsx)(`input`,{className:Va.input,placeholder:`Your message...`,onChange:S,value:l}),n[21]=l,n[22]=w);let E;n[23]===_?E=n[24]:(E=(0,T.jsx)(ka,{className:Va.button,icon:Ba,size:24,onClick:_}),n[23]=_,n[24]=E);let D;n[25]!==w||n[26]!==E?(D=(0,T.jsxs)(`div`,{className:Va.horizontalRow,children:[ee,w,E]}),n[25]=w,n[26]=E,n[27]=D):D=n[27];let O;return n[28]!==o||n[29]!==D?(O=(0,T.jsx)(t.div,{className:Va.container,initial:v,animate:y,exit:b,layout:!0,...o,children:D}),n[28]=o,n[29]=D,n[30]=O):O=n[30],O}var Ua={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_7362387`,panel:`_panel_e468890`,contentPanel:`_contentPanel_765c338`,chatHeaderPanel:`_chatHeaderPanel_bdfde53`,main:`_main_a2ce4e3`,mobileHidden:`_mobileHidden_9de98f3`,closeButton:`_closeButton_001fdda`,rightPart:`_rightPart_fe75fde`};function Wa(e){let n=(0,C.c)(23),{openedChat:r,user:i,closeChat:a,messagesContainerRef:o}=e,c;n[0]!==r?.participants||n[1]!==i.id?(c=r?.participants.find(e=>e.id!==i.id),n[0]=r?.participants,n[1]=i.id,n[2]=c):c=n[2];let l=c,u;n[3]===r?.id?u=n[4]:(u=e=>s.sendMessage({content:e,chatId:r?.id||-1}),n[3]=r?.id,n[4]=u);let d=u,f;n[5]!==a||n[6]!==r||n[7]!==l?.avatar||n[8]!==l?.username?(f=r&&(0,T.jsxs)(t.div,{initial:{translateY:-100},animate:{translateY:0},exit:{translateY:100},className:Ua.chatHeaderPanel,layout:!0,children:[(0,T.jsx)(ka,{onClick:a,className:Ua.closeButton,icon:Na,size:24}),(0,T.jsx)(E,{image:`https://serv.msg-min.xyz/avatars/${l?.avatar||`default`}.webp`,text:l?.username||`Default Chat`})]}),n[5]=a,n[6]=r,n[7]=l?.avatar,n[8]=l?.username,n[9]=f):f=n[9];let p;n[10]===Symbol.for(`react.memo_cache_sentinel`)?(p={layout:{type:`spring`}},n[10]=p):p=n[10];let m;n[11]!==o||n[12]!==r?(m=r&&(0,T.jsx)(Ra,{ref:o}),n[11]=o,n[12]=r,n[13]=m):m=n[13];let h;n[14]===m?h=n[15]:(h=(0,T.jsx)(t.div,{layout:!0,transition:p,className:Ua.contentPanel,children:m}),n[14]=m,n[15]=h);let g;n[16]!==r||n[17]!==d?(g=r&&(0,T.jsx)(Ha,{onSend:d}),n[16]=r,n[17]=d,n[18]=g):g=n[18];let _;return n[19]!==f||n[20]!==h||n[21]!==g?(_=(0,T.jsxs)(`div`,{className:Ua.rightPart,children:[f,h,g]}),n[19]=f,n[20]=h,n[21]=g,n[22]=_):_=n[22],_}var Ga={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_7876d8e`,panel:`_panel_b650328`,main:`_main_7901154`,mobileHidden:`_mobileHidden_efa773f`};function Ka(){let e=(0,C.c)(13),[t]=n(`user`),r=c(),i=(0,x.useRef)(null),a=(0,x.useRef)(null),o=(0,x.useRef)(null),[l,u]=(0,x.useState)(null),d,f;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(d=()=>{s.fetchChats().then(e=>{console.log(e),e.success&&(i.current?.setChats([{id:1,name:`Default Chat`,type:`group`,participants:[]},...e.chats]),i.current?.show())});let e=s.subscribeToMessages(e=>{a.current?.addMessage(e)});return()=>{e.remove()}},f=[],e[0]=d,e[1]=f):(d=e[0],f=e[1]),(0,x.useEffect)(d,f);let p;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(p=async e=>{a.current?.clearMessages(),o.current?.classList.add(Ga.mobileHidden),u(e);let t=await s.fetchChatMessages({chatId:e.id});t.success&&await a.current?.setMessages(t.messages)},e[2]=p):p=e[2];let m=p,h;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>{o.current?.classList.remove(Ga.mobileHidden),u(null)},e[3]=h):h=e[3];let g=h,_;e[4]!==r||e[5]!==t?(_=(0,T.jsx)(Fa,{user:t,navigate:r,onChatClick:m,chatsContainerRef:i,leftPartRef:o}),e[4]=r,e[5]=t,e[6]=_):_=e[6];let v;e[7]!==l||e[8]!==t?(v=(0,T.jsx)(Wa,{openedChat:l,user:t,closeChat:g,messagesContainerRef:a}),e[7]=l,e[8]=t,e[9]=v):v=e[9];let y;return e[10]!==_||e[11]!==v?(y=(0,T.jsxs)(`div`,{className:Ga.main,children:[_,v]}),e[10]=_,e[11]=v,e[12]=y):y=e[12],y}export{Ka as default};
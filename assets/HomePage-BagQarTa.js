import{n as e,r as t,t as n}from"./useLocalStorage-D1323qH6.js";import{Ct as r,Dt as i,Et as a,J as o,Mt as s,Ot as c,St as l,Tt as u,at as d,i as f,n as p,r as m,t as h,vt as g,wt as _,xt as v,yt as y}from"./index-B3gXRKXu.js";function b(e,t){if(e===`first`)return 0;{let n=t-1;return e===`last`?n:n/2}}function x(e=.1,{startDelay:t=0,from:n=0,ease:r}={}){return(i,a)=>{let o=typeof n==`number`?n:b(n,a),s=e*Math.abs(o-i);if(r){let t=a*e;s=d(r)(s/t)*t}return t+s}}var S=s(i(),1);function ee(e){let t=g(()=>o(e)),{isStatic:n}=(0,S.useContext)(f);if(n){let[,n]=(0,S.useState)(e);(0,S.useEffect)(()=>t.on(`change`,n),[])}return t}var C=s(a(),1),w=u(),T={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_dbb83ab`,panel:`_panel_6779756`,main:`_main_411beac`,container:`_container_2b49e59`,listItem:`_listItem_8b0b17a`},E=_();function D(e){let t=(0,w.c)(20),n,r,i,a,o,s;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6]):({text:a,image:o,className:r,isInList:s,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s);let c=a===void 0?``:a,l=o===void 0?``:o,u=s===void 0?!1:s,d=r||``,f=u?T.listItem:``,p;t[7]!==d||t[8]!==f?(p=[d,T.container,f].filter(Boolean),t[7]=d,t[8]=f,t[9]=p):p=t[9];let m=p.join(` `),h;t[10]===l?h=t[11]:(h=l&&(0,E.jsx)(`img`,{src:l}),t[10]=l,t[11]=h);let g;t[12]===c?g=t[13]:(g=(0,E.jsx)(`p`,{children:c}),t[12]=c,t[13]=g);let _;return t[14]!==n||t[15]!==m||t[16]!==i||t[17]!==h||t[18]!==g?(_=(0,E.jsxs)(`div`,{...i,className:m,children:[h,g,n]}),t[14]=n,t[15]=m,t[16]=i,t[17]=h,t[18]=g,t[19]=_):_=t[19],_}var O={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_7722443`,panel:`_panel_0b10f16`,main:`_main_d3a141c`,container:`_container_f68fb93`};function k(e){let t=(0,w.c)(13),[r,i]=p(),[a]=n(`user`),o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=[],t[0]=o):o=t[0];let[s,c]=(0,S.useState)(o),{ref:l,onClick:u}=e,d;t[1]===i?d=t[2]:(d=()=>({setChats:e=>{(0,C.flushSync)(()=>c(e))},show:async()=>{await i(`.chatItem`,{opacity:0,translateX:-200,scale:0},{duration:0}),i(`.chatItem`,{opacity:1},{delay:x(.05)}),await i(`.chatItem`,{translateX:0,scale:1},{type:`spring`,damping:15,stiffness:250,delay:x(.05)})}}),t[1]=i,t[2]=d),(0,S.useImperativeHandle)(l,d);let f;if(t[3]!==s||t[4]!==u||t[5]!==a){let e;t[7]!==u||t[8]!==a?(e=e=>(0,E.jsx)(D,{className:`chatItem`,style:{opacity:0},image:`https://api.msgmin.com/avatars/${e.participants?.find(e=>(e?.id||-1)!==a.id)?.avatar||`default`}.webp`,text:e.name,isInList:!0,onClick:t=>u?.(e,t)},e.id),t[7]=u,t[8]=a,t[9]=e):e=t[9],f=s.map(e),t[3]=s,t[4]=u,t[5]=a,t[6]=f}else f=t[6];let m;return t[10]!==r||t[11]!==f?(m=(0,E.jsx)(`div`,{className:O.container,ref:r,children:f}),t[10]=r,t[11]=f,t[12]=m):m=t[12],m}function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function te(e){if(Array.isArray(e))return e}function ne(e){if(Array.isArray(e))return A(e)}function re(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,de(r.key),r)}}function ae(e,t,n){return t&&ie(e.prototype,t),n&&ie(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=pe(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function M(e,t,n){return(t=de(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function P(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function oe(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ce(Object(n),!0).forEach(function(t){M(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function le(e,t){return te(e)||P(e,t)||pe(e,t)||oe()}function I(e){return ne(e)||N(e)||pe(e)||se()}function ue(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function de(e){var t=ue(e,`string`);return typeof t==`symbol`?t:t+``}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},fe(e)}function pe(e,t){if(e){if(typeof e==`string`)return A(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}var me=function(){},he={},ge={},_e=null,ve={mark:me,measure:me};try{typeof window<`u`&&(he=window),typeof document<`u`&&(ge=document),typeof MutationObserver<`u`&&(_e=MutationObserver),typeof performance<`u`&&(ve=performance)}catch{}var ye=(he.navigator||{}).userAgent,be=ye===void 0?``:ye,L=he,R=ge,xe=_e,Se=ve;L.document;var z=!!R.documentElement&&!!R.head&&typeof R.addEventListener==`function`&&typeof R.createElement==`function`,Ce=~be.indexOf(`MSIE`)||~be.indexOf(`Trident/`),we,Te=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ee=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,De={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Oe={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ke=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],B=`classic`,Ae=`duotone`,je=`sharp`,Me=`sharp-duotone`,Ne=`chisel`,Pe=`etch`,Fe=`graphite`,Ie=`jelly`,Le=`jelly-duo`,Re=`jelly-fill`,ze=`mosaic`,Be=`notdog`,Ve=`notdog-duo`,He=`pixel`,Ue=`slab`,We=`slab-duo`,Ge=`slab-press`,Ke=`slab-press-duo`,qe=`thumbprint`,Je=`utility`,Ye=`utility-duo`,Xe=`utility-fill`,Ze=`vellum`,Qe=`whiteboard`,$e=`Classic`,et=`Duotone`,tt=`Sharp`,nt=`Sharp Duotone`,rt=`Chisel`,it=`Etch`,at=`Graphite`,ot=`Jelly`,st=`Jelly Duo`,ct=`Jelly Fill`,lt=`Mosaic`,ut=`Notdog`,dt=`Notdog Duo`,ft=`Pixel`,pt=`Slab`,mt=`Slab Duo`,ht=`Slab Press`,gt=`Slab Press Duo`,_t=`Thumbprint`,vt=`Utility`,yt=`Utility Duo`,bt=`Utility Fill`,xt=`Vellum`,St=`Whiteboard`,Ct=[B,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe];we={},M(M(M(M(M(M(M(M(M(M(we,B,$e),Ae,et),je,tt),Me,nt),Ne,rt),Pe,it),Fe,at),Ie,ot),Le,st),Re,ct),M(M(M(M(M(M(M(M(M(M(we,ze,lt),Be,ut),Ve,dt),He,ft),Ue,pt),We,mt),Ge,ht),Ke,gt),qe,_t),Je,vt),M(M(M(M(we,Ye,yt),Xe,bt),Ze,xt),Qe,St);var wt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Tt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Et=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Dt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Ot=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],kt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},At=[`kit`];M(M({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var jt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Mt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Nt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Pt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Ft,It={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Lt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Ft={},M(M(M(M(M(M(M(M(M(M(Ft,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),M(M(M(M(M(M(M(M(M(M(Ft,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),M(M(M(M(Ft,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),M(M({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Rt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},zt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Bt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Vt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Lt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Ht=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Ut=[1,2,3,4,5,6,7,8,9,10],Wt=Ut.concat([11,12,13,14,15,16,17,18,19,20]),Gt=[].concat(I(Object.keys(zt)),Ht,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,It.GROUP,It.SWAP_OPACITY,It.PRIMARY,It.SECONDARY],Ut.map(function(e){return`${e}x`}),Wt.map(function(e){return`w-${e}`})),Kt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},V=`___FONT_AWESOME___`,qt=16,Jt=`fa`,Yt=`svg-inline--fa`,H=`data-fa-i2svg`,Xt=`data-fa-pseudo-element`,Zt=`data-fa-pseudo-element-pending`,Qt=`data-prefix`,$t=`data-icon`,en=`fontawesome-i2svg`,tn=`async`,nn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],rn=[`::before`,`::after`,`:before`,`:after`],an=function(){try{return!0}catch{return!1}}();function on(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[B]}})}var sn=F({},De);sn[B]=F(F(F(F({},{"fa-duotone":`duotone`}),De[B]),kt.kit),kt[`kit-duotone`]);var cn=on(sn),ln=F({},Dt);ln[B]=F(F(F(F({},{duotone:`fad`}),ln[B]),Pt.kit),Pt[`kit-duotone`]);var un=on(ln),dn=F({},Bt);dn[B]=F(F({},dn[B]),Nt.kit);var fn=on(dn),pn=F({},Rt);pn[B]=F(F({},pn[B]),jt.kit),on(pn);var mn=Te,hn=`fa-layers-text`,gn=Ee;on(F({},wt));var _n=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],vn=Oe,yn=[].concat(I(At),I(Gt)),bn=L.FontAwesomeConfig||{};function xn(e){var t=R.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Sn(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}R&&typeof R.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=le(e,2),n=t[0],r=t[1],i=Sn(xn(n));i!=null&&(bn[r]=i)});var Cn={styleDefault:`solid`,familyDefault:B,cssPrefix:Jt,replacementClass:Yt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bn.familyPrefix&&(bn.cssPrefix=bn.familyPrefix);var wn=F(F({},Cn),bn);wn.autoReplaceSvg||(wn.observeMutations=!1);var U={};Object.keys(Cn).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(t){wn[e]=t,Tn.forEach(function(e){return e(U)})},get:function(){return wn[e]}})}),Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){wn.cssPrefix=e,Tn.forEach(function(e){return e(U)})},get:function(){return wn.cssPrefix}}),L.FontAwesomeConfig=U;var Tn=[];function En(e){return Tn.push(e),function(){Tn.splice(Tn.indexOf(e),1)}}var W=qt,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dn(e){if(!(!e||!z)){var t=R.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=R.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return R.head.insertBefore(t,r),e}}var On=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function kn(){for(var e=12,t=``;e-->0;)t+=On[Math.random()*62|0];return t}function An(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function jn(e){return e.classList?An(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Mn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Nn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Mn(e[n])}" `},``).trim()}function Pn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Fn(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function In(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Ln(e){var t=e.transform,n=e.width,r=n===void 0?qt:n,i=e.height,a=i===void 0?qt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&Ce?c+=`translate(${t.x/W-r/2}em, ${t.y/W-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/W}em), calc(-50% + ${t.y/W}em)) `:c+=`translate(${t.x/W}em, ${t.y/W}em) `,c+=`scale(${t.size/W*(t.flipX?-1:1)}, ${t.size/W*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Rn=`:root, :host {
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
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
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

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
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
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
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
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
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

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
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
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
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
}`;function zn(){var e=Jt,t=Yt,n=U.cssPrefix,r=U.replacementClass,i=Rn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Bn=!1;function Vn(){U.autoAddCss&&!Bn&&(Dn(zn()),Bn=!0)}var Hn={mixout:function(){return{dom:{css:zn,insertCss:Vn}}},hooks:function(){return{beforeDOMElementCreation:function(){Vn()},beforeI2svg:function(){Vn()}}}},K=L||{};K[V]||(K[V]={}),K[V].styles||(K[V].styles={}),K[V].hooks||(K[V].hooks={}),K[V].shims||(K[V].shims=[]);var q=K[V],Un=[],Wn=function(){R.removeEventListener(`DOMContentLoaded`,Wn),Gn=1,Un.map(function(e){return e()})},Gn=!1;z&&(Gn=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),Gn||R.addEventListener(`DOMContentLoaded`,Wn));function Kn(e){z&&(Gn?setTimeout(e,0):Un.push(e))}function qn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Mn(e):`<${t} ${Nn(r)}>${a.map(qn).join(``)}</${t}>`}function Jn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Yn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Xn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Yn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Zn(e){return I(e).length===1?e.codePointAt(0).toString(16):null}function Qn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function $n(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Qn(t);typeof q.hooks.addPack==`function`&&!r?q.hooks.addPack(e,Qn(t)):q.styles[e]=F(F({},q.styles[e]||{}),i),e===`fas`&&$n(`fa`,t)}var er=q.styles,tr=q.shims,nr=Object.keys(fn),rr=nr.reduce(function(e,t){return e[t]=Object.keys(fn[t]),e},{}),ir=null,ar={},or={},sr={},cr={},lr={};function ur(e){return~yn.indexOf(e)}function dr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!ur(i)?i:null}var fr=function(){var e=function(e){return Xn(er,function(t,n,r){return t[r]=Xn(n,e,{}),t},{})};ar=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),or=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),lr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in er||U.autoFetchSvg,n=Xn(tr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});sr=n.names,cr=n.unicodes,ir=br(U.styleDefault,{family:U.familyDefault})};En(function(e){ir=br(e.styleDefault,{family:U.familyDefault})}),fr();function pr(e,t){return(ar[e]||{})[t]}function mr(e,t){return(or[e]||{})[t]}function hr(e,t){return(lr[e]||{})[t]}function gr(e){return sr[e]||{prefix:null,iconName:null}}function _r(e){var t=cr[e],n=pr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function J(){return ir}var vr=function(){return{prefix:null,iconName:null,rest:[]}};function yr(e){var t=B,n=nr.reduce(function(e,t){return e[t]=`${U.cssPrefix}-${t}`,e},{});return Ct.forEach(function(r){(e.includes(n[r])||e.some(function(e){return rr[r].includes(e)}))&&(t=r)}),t}function br(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?B:t,r=cn[n][e];if(n===Ae&&!e)return`fad`;var i=un[n][e]||un[n][r],a=e in q.styles?e:null;return i||a||null}function xr(e){var t=[],n=null;return e.forEach(function(e){var r=dr(U.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Sr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Cr=Vt.concat(Ot);function wr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Sr(e.filter(function(e){return Cr.includes(e)})),a=Sr(e.filter(function(e){return!Cr.includes(e)})),o=le(i.filter(function(e){return r=e,!ke.includes(e)}),1)[0],s=o===void 0?null:o,c=yr(i),l=F(F({},xr(a)),{},{prefix:br(s,{family:c})});return F(F(F({},l),Or({values:e,family:c,styles:er,config:U,canonical:l,givenPrefix:r})),Tr(n,r,l))}function Tr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?gr(i):{},o=hr(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!er.far&&er.fas&&!U.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Er=Ct.filter(function(e){return e!==B||e!==Ae}),Dr=Object.keys(Bt).filter(function(e){return e!==B}).map(function(e){return Object.keys(Bt[e])}).flat();function Or(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Ae,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Er.includes(n)&&(Object.keys(s).find(function(e){return Dr.includes(e)})||l.autoFetchSvg)&&(r.prefix=Et.get(n).defaultShortPrefixId,r.iconName=hr(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=J()||`fas`),r}var kr=function(){function e(){re(this,e),this.definitions={}}return ae(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=F(F({},e.definitions[n]||{}),t[n]),$n(n,t[n]);var r=fn[B][n];r&&$n(r,t[n]),fr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Ar=[],jr={},Mr={},Nr=Object.keys(Mr);function Pr(e,t){var n=t.mixoutsTo;return Ar=e,jr={},Object.keys(Mr).forEach(function(e){Nr.indexOf(e)===-1&&delete Mr[e]}),Ar.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),fe(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){jr[e]||(jr[e]=[]),jr[e].push(r[e])})}e.provides&&e.provides(Mr)}),n}function Fr(e,t){var n=[...arguments].slice(2);return(jr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Ir(e){var t=[...arguments].slice(1);(jr[e]||[]).forEach(function(e){e.apply(null,t)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mr[e]?Mr[e].apply(null,t):void 0}function Lr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||J();if(t)return t=hr(n,t)||t,Jn(Rr.definitions,n,t)||Jn(q.styles,n,t)}var Rr=new kr,X={noAuto:function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Ir(`noAuto`)},config:U,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(Ir(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,Kn(function(){zr({autoReplaceSvgRoot:t}),Ir(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(fe(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=br(e[0]);return{prefix:n,iconName:hr(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${U.cssPrefix}-`)>-1||e.match(mn))){var r=wr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:hr(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=J();return{prefix:i,iconName:hr(i,e)||e}}}},library:Rr,findIconDefinition:Lr,toHtml:qn},zr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?R:e;(Object.keys(q.styles).length>0||U.autoFetchSvg)&&z&&U.autoReplaceSvg&&X.dom.i2svg({node:t})};function Br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return qn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var t=R.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Vr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Fn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Pn(F(F({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Hr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${U.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:F(F({},i),{},{id:o}),children:r}]}]}function Ur(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Wr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[U.replacementClass,a?`${U.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:F(F({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Ur(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[H]=``);var _=F(F({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:F({},l.styles)}),v=r.found&&n.found?Y(`generateAbstractMask`,_)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Hr(_):Vr(_)}function Gr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=F(F({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[H]=``);var l=F({},a.styles);Fn(i)&&(l.transform=Ln({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Pn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Kr(e){var t=e.content,n=e.extra,r=F(F({},n.attributes),{},{class:n.classes.join(` `)}),i=Pn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var qr=q.styles;function Jr(e){var t=e[0],n=e[1],r=le(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${U.cssPrefix}-${vn.GROUP}`},children:[{tag:`path`,attributes:{class:`${U.cssPrefix}-${vn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${U.cssPrefix}-${vn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Yr={found:!1,width:512,height:512};function Xr(e,t){!an&&!U.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Zr(e,t){var n=t;return t===`fa`&&U.styleDefault!==null&&(t=J()),new Promise(function(r,i){if(n===`fa`){var a=gr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&qr[t]&&qr[t][e]){var o=qr[t][e];return r(Jr(o))}Xr(e,t),r(F(F({},Yr),{},{icon:U.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var Qr=function(){},$r=U.measurePerformance&&Se&&Se.mark&&Se.measure?Se:{mark:Qr,measure:Qr},ei=`FA "7.3.0"`,ti=function(e){return $r.mark(`${ei} ${e} begins`),function(){return ni(e)}},ni=function(e){$r.mark(`${ei} ${e} ends`),$r.measure(`${ei} ${e}`,`${ei} ${e} begins`,`${ei} ${e} ends`)},ri={begin:ti,end:ni},ii=function(){};function ai(e){return typeof(e.getAttribute?e.getAttribute(H):null)==`string`}function oi(e){var t=e.getAttribute?e.getAttribute(Qt):null,n=e.getAttribute?e.getAttribute($t):null;return t&&n}function si(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function ci(){return U.autoReplaceSvg===!0?pi.replace:pi[U.autoReplaceSvg]||pi.replace}function li(e){return R.createElementNS(`http://www.w3.org/2000/svg`,e)}function ui(e){return R.createElement(e)}function di(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?li:ui:t;if(typeof e==`string`)return R.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(di(e,{ceFn:n}))}),r}function fi(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var pi={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(di(e),t)}),t.getAttribute(H)===null&&U.keepOriginalSource){var n=R.createComment(fi(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~jn(t).indexOf(U.replacementClass))return pi.replace(e);var r=RegExp(`${U.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===U.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return qn(e)}).join(`
`);t.setAttribute(H,``),t.innerHTML=a}};function mi(e){e()}function hi(e,t){var n=typeof t==`function`?t:ii;if(e.length===0)n();else{var r=mi;U.mutateApproach===tn&&(r=L.requestAnimationFrame||mi),r(function(){var t=ci(),r=ri.begin(`mutate`);e.map(t),r(),n()})}}var gi=!1;function _i(){gi=!0}function vi(){gi=!1}var yi=null;function bi(e){if(xe&&U.observeMutations){var t=e.treeCallback,n=t===void 0?ii:t,r=e.nodeCallback,i=r===void 0?ii:r,a=e.pseudoElementsCallback,o=a===void 0?ii:a,s=e.observeMutationsRoot,c=s===void 0?R:s;yi=new xe(function(e){if(!gi){var t=J();An(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!ai(e.addedNodes[0])&&(U.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&U.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&ai(e.target)&&~_n.indexOf(e.attributeName))if(e.attributeName===`class`&&oi(e.target)){var r=wr(jn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Qt,a||t),s&&e.target.setAttribute($t,s)}else si(e.target)&&i(e.target)})}}),z&&yi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xi(){yi&&yi.disconnect()}function Si(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Ci(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=wr(jn(e));return i.prefix||=J(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=mr(i.prefix,e.innerText)||pr(i.prefix,Zn(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function wi(e){return An(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ti(){return{iconName:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ci(e),r=n.iconName,i=n.prefix,a=n.rest,o=wi(e),s=Fr(`parseNodeAttributes`,{},e);return F({iconName:r,prefix:i,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Si(e):[],attributes:o}},s)}var Di=q.styles;function Oi(e){var t=U.autoReplaceSvg===`nest`?Ei(e,{styleParser:!1}):Ei(e);return~t.extra.classes.indexOf(hn)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function ki(){return[].concat(I(Ot),I(Vt))}function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=R.documentElement.classList,r=function(e){return n.add(`${en}-${e}`)},i=function(e){return n.remove(`${en}-${e}`)},a=U.autoFetchSvg?ki():ke.concat(Object.keys(Di));a.includes(`fa`)||a.push(`fa`);var o=[`.${hn}:not([${H}])`].concat(a.map(function(e){return`.${e}:not([${H}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=An(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=ri.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Oi(t);n&&e.push(n)}catch(e){an||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){hi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Oi(e).then(function(e){e&&hi([e],t)})}function Mi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Lr(i||{}),e(r,F(F({},n),{},{mask:i}))}}var Ni=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?G:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Br(F({type:`icon`},e),function(){return Ir(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Wr({icons:{main:Jr(v),mask:s?Jr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:F(F({},G),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Pi={mixout:function(){return{icon:Mi(Ni)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Ai,e.nodeCallback=ji,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?R:t,r=e.callback;return Ai(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Zr(n,r),o.iconName?Zr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=le(o,2),u=l[0],d=l[1];t([e,Wr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Pn(a);o.length>0&&(n.style=o);var s;return Fn(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Fi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Br({type:`layer`},function(){Ir(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${U.cssPrefix}-layers`].concat(I(r)).join(` `)},children:n}]})}}}},Ii={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Br({type:`counter`,content:e},function(){return Ir(`beforeDOMElementCreation`,{content:e,params:t}),Kr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-counter`].concat(I(a))}})})}}}},Li={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?G:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Br({type:`text`,content:e},function(){return Ir(`beforeDOMElementCreation`,{content:e,params:t}),Gr({content:e,transform:F(F({},G),r),extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-text`].concat(I(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Ce){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Gr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ri=RegExp(`"`,`ug`),zi=[1105920,1112319],Bi=F(F(F(F({},{FontAwesome:{normal:`fas`,400:`fas`}}),Tt),Kt),Mt),Vi=Object.keys(Bi).reduce(function(e,t){return e[t.toLowerCase()]=Bi[t],e},{}),Hi=Object.keys(Vi).reduce(function(e,t){var n=Vi[t];return e[t]=n[900]||I(Object.entries(n))[0][1],e},{});function Ui(e){return Zn(I(e.replace(Ri,``))[0]||``)}function Wi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ri,``),r=n.codePointAt(0),i=r>=zi[0]&&r<=zi[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Gi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Vi[n]||{})[i]||Hi[n]}function Ki(e,t){var n=`${Zt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=An(e.children).filter(function(e){return e.getAttribute(Xt)===t})[0],o=L.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(gn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Gi(s,l),p=Ui(d),m=c[0].startsWith(`FontAwesome`),h=Wi(o),g=pr(f,p),_=g;if(m){var v=_r(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Qt)!==f||a.getAttribute($t)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Ti(),b=y.extra;b.attributes[Xt]=t,Zr(g,f).then(function(i){var a=Wr(F(F({},y),{},{icons:{main:i,mask:vr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=R.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return qn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function qi(e){return Promise.all([Ki(e,`::before`),Ki(e,`::after`)])}function Ji(e){return e.parentNode!==document.head&&!~nn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Yi=function(e){return!!e&&rn.some(function(t){return e.includes(t)})},Xi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=j(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Yi(a)){var o=rn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var n;if(t)n=e;else if(U.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=j(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=j(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=j(Xi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){U.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=An(n).filter(Ji).map(qi),i=ri.begin(`searchPseudoElements`);_i(),Promise.all(r).then(function(){i(),vi(),e()}).catch(function(){i(),vi(),t()})})}}var Qi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Zi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?R:t;U.searchPseudoElements&&Zi(n)}}},$i=!1,ea={mixout:function(){return{dom:{unwatch:function(){_i(),$i=!0}}}},hooks:function(){return{bootstrap:function(){bi(Fr(`mutationObserverCallbacks`,{}))},noAuto:function(){xi()},watch:function(e){var t=e.observeMutationsRoot;$i?vi():bi(Fr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},ta=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},na={mixout:function(){return{parse:{transform:function(e){return ta(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=ta(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:F({},a.outer),children:[{tag:`g`,attributes:F({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:F(F({},t.icon.attributes),a.path)}]}]}}}},ra={x:0,y:0,width:`100%`,height:`100%`};function ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function aa(e){return e.tag===`g`?e.children:[e]}Pr([Hn,Pi,Fi,Ii,Li,Qi,ea,na,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?wr(n.split(` `).map(function(e){return e.trim()})):vr();return r.prefix||=J(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=In({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:F(F({},ra),{},{fill:`white`})},p=c.children?{children:c.children.map(ia)}:{},m={tag:`g`,attributes:F({},d.inner),children:[ia(F({tag:c.tag,attributes:F(F({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:F({},d.outer),children:[m]},g=`mask-${a||kn()}`,_=`clip-${a||kn()}`,v={tag:`mask`,attributes:F(F({},ra),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:aa(u)},v]};return t.push(y,{tag:`rect`,attributes:F({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},ra)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;L.matchMedia&&(t=L.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:F(F({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=F(F({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:F(F({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:F(F({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:F(F({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:X}),X.noAuto;var oa=X.config;X.library,X.dom;var sa=X.parse;X.findIconDefinition,X.toHtml;var ca=X.icon;X.layer,X.text,X.counter;function la(e){return e-=0,e===e}function ua(e){return la(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var da=(e,t)=>S.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function fa(e){return e.charAt(0).toUpperCase()+e.slice(1)}var pa=new Map,ma=1e3;function ha(e){if(pa.has(e))return pa.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=ua(n);t[e.startsWith(`webkit`)?fa(e):e]=r}}}n=a+1}if(pa.size===ma){let e=pa.keys().next().value;e&&pa.delete(e)}return pa.set(e,t),t}function ga(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),ga(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=ha(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[ua(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(da)))}return e(t.tag,{...a,...u},...r)}var _a=ga.bind(null,S.createElement),va=(e,t)=>{let n=(0,S.useId)();return e||(t?n:void 0)},ya=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var ba=`searchPseudoElementsFullScan`in oa&&typeof oa.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,xa=Number.parseInt(ba)>=7,Sa=()=>xa,Ca=`fa`,Z={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},wa={left:`fa-pull-left`,right:`fa-pull-right`},Ta={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Ea={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Q={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Da={default:`fa-layers`};function Oa(e){let t=oa.cssPrefix||oa.familyPrefix||Ca;return t===Ca?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Ca}-`,`g`),`${t}-`)}function ka(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Z.beat),n&&x.push(Z.fade),r&&x.push(Z.beatFade),i&&x.push(Z.bounce),a&&x.push(Z.shake),o&&x.push(Z.spin),c&&x.push(Z.spinReverse),s&&x.push(Z.spinPulse),l&&x.push(Z.pulse),u&&x.push(Q.fixedWidth),d&&x.push(Q.inverse),f&&x.push(Q.border),p===!0&&x.push(Q.flip),(p===`horizontal`||p===`both`)&&x.push(Q.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(Q.flipVertical),m!=null&&x.push(Ea[m]),h!=null&&h!==0&&x.push(Ta[h]),g!=null&&x.push(wa[g]),_&&x.push(Q.swapOpacity),Sa()?(v&&x.push(Q.rotateBy),y&&x.push(Q.widthAuto),(oa.cssPrefix||oa.familyPrefix||Ca)===Ca?x:x.map(Oa)):x}var Aa=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ja(e){if(e)return Aa(e)?e:sa.icon(e)}function Ma(e){return Object.keys(e)}var Na=new ya(`FontAwesomeIcon`),Pa={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Fa=new Set(Object.keys(Pa)),Ia=S.forwardRef((e,t)=>{let n={...Pa,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=va(c,!!i),d=va(s,!!o),f=ja(r);if(!f)return Na.error(`Icon lookup is undefined`,r),null;let p=ka(n),m=typeof l==`string`?sa.transform(l):l,h=ja(i),g=ca(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Na.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Ma(n))Fa.has(e)||(v[e]=n[e]);return _a(_[0],v)});Ia.displayName=`FontAwesomeIcon`,`${Da.default}${Q.fixedWidth}`;var La={container:`_container_e84588b`};function Ra(e){let t=(0,w.c)(14),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({icon:r,size:a,className:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o;t[5]===n?o=t[6]:(o=[n,La.container].filter(Boolean),t[5]=n,t[6]=o);let s=o.join(` `),c;t[7]!==r||t[8]!==a?(c=(0,E.jsx)(Ia,{icon:r,fontSize:a,color:h.primaryColor}),t[7]=r,t[8]=a,t[9]=c):c=t[9];let l;return t[10]!==i||t[11]!==s||t[12]!==c?(l=(0,E.jsx)(`div`,{className:s,...i,children:c}),t[10]=i,t[11]=s,t[12]=c,t[13]=l):l=t[13],l}var za={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_cbdbe2a`,panel:`_panel_085af9d`,main:`_main_5c8dc31`,container:`_container_b390d75`};function Ba(e){let t=(0,w.c)(12),n,r,i,a;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({icon:r,size:a,className:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a);let o=`${za.container} ${n}`,s;t[5]!==r||t[6]!==a?(s=(0,E.jsx)(Ra,{icon:r,size:a}),t[5]=r,t[6]=a,t[7]=s):s=t[7];let c;return t[8]!==i||t[9]!==o||t[10]!==s?(c=(0,E.jsx)(`button`,{className:o,...i,children:s}),t[8]=i,t[9]=o,t[10]=s,t[11]=c):c=t[11],c}var Va=c((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=`far`,n=`comments`,r=576,i=512,a=[128490,61670],o=`f086`,s=`M76.2 258.7c6.1-15.2 4-32.6-5.6-45.9-14.5-20.1-22.6-43.7-22.6-68.8 0-66.8 60.5-128 144-128s144 61.2 144 128-60.5 128-144 128c-15.9 0-31.1-2.3-45.3-6.5-10.3-3.1-21.4-2.5-31.4 1.5l-50.4 20.2 11.4-28.5zM0 144c0 35.8 11.6 69.1 31.7 96.8L1.9 315.2c-1.3 3.2-1.9 6.6-1.9 10 0 14.8 12 26.8 26.8 26.8 3.4 0 6.8-.7 10-1.9l96.3-38.5c18.6 5.5 38.4 8.4 58.9 8.4 106 0 192-78.8 192-176S298-32 192-32 0 46.8 0 144zM384 512c20.6 0 40.3-3 58.9-8.4l96.3 38.5c3.2 1.3 6.6 1.9 10 1.9 14.8 0 26.8-12 26.8-26.8 0-3.4-.7-6.8-1.9-10l-29.7-74.4c20-27.8 31.7-61.1 31.7-96.8 0-82.4-61.7-151.5-145-170.7-1.6 16.3-5.1 31.9-10.1 46.9 63.9 14.8 107.2 67.3 107.2 123.9 0 25.1-8.1 48.7-22.6 68.8-9.6 13.3-11.7 30.6-5.6 45.9l11.4 28.5-50.4-20.2c-10-4-21.1-4.5-31.4-1.5-14.2 4.2-29.4 6.5-45.3 6.5-72.2 0-127.1-45.7-140.7-101.2-15.6 3.2-31.7 5-48.1 5.2 16.4 81.9 94.7 144 188.8 144z`;e.definition={prefix:t,iconName:n,icon:[r,i,a,o,s]},e.faComments=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=i,e.ligatures=a,e.unicode=o,e.svgPathData=s,e.aliases=a}))(),Ha={prefix:`fas`,iconName:`arrow-right-to-bracket`,icon:[512,512,[`sign-in`],`f090`,`M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z`]},Ua={prefix:`fas`,iconName:`earth-americas`,icon:[512,512,[127758,`earth`,`earth-america`,`globe-americas`],`f57d`,`M55.7 199.7l30.9 30.9c6 6 14.1 9.4 22.6 9.4l21.5 0c8.5 0 16.6 3.4 22.6 9.4l29.3 29.3c6 6 9.4 14.1 9.4 22.6l0 37.5c0 8.5 3.4 16.6 9.4 22.6l13.3 13.3c6 6 9.4 14.1 9.4 22.6l0 18.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-2.7c0-8.5 3.4-16.6 9.4-22.6l45.3-45.3c6-6 9.4-14.1 9.4-22.6l0-34.7c0-17.7-14.3-32-32-32l-82.7 0c-8.5 0-16.6-3.4-22.6-9.4l-16-16c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6l34.7 0c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-19.7-19.7C242 130 240 125.1 240 120s2-10 5.7-13.7l17.3-17.3c5.8-5.8 9.1-13.7 9.1-21.9 0-7.2-2.4-13.7-6.4-18.9-3.2-.1-6.4-.2-9.6-.2-95.4 0-175.7 64.2-200.3 151.7zM464 256c0-34.6-8.4-67.2-23.4-95.8-6.4 .9-12.7 3.9-17.9 9.1l-13.4 13.4c-6 6-9.4 14.1-9.4 22.6l0 34.7c0 17.7 14.3 32 32 32l24.1 0c2.5 0 5-.3 7.3-.8 .4-5 .5-10.1 .5-15.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z`]},Wa={prefix:`fas`,iconName:`paperclip`,icon:[512,512,[128206],`f0c6`,`M224.6 12.8c56.2-56.2 147.4-56.2 203.6 0s56.2 147.4 0 203.6l-164 164c-34.4 34.4-90.1 34.4-124.5 0s-34.4-90.1 0-124.5L292.5 103.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L185 301.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l164-164c31.2-31.2 31.2-81.9 0-113.1s-81.9-31.2-113.1 0l-164 164c-53.1 53.1-53.1 139.2 0 192.3s139.2 53.1 192.3 0L428.3 284.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L343.4 459.6c-78.1 78.1-204.7 78.1-282.8 0s-78.1-204.7 0-282.8l164-164z`]},Ga={prefix:`fas`,iconName:`list-ul`,icon:[512,512,[`list-dots`],`f0ca`,`M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z`]},Ka={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_5afa451`,panel:`_panel_472e73c`,chatsPanel:`_chatsPanel_104f2c6`,userPanel:`_userPanel_e903ffe`,main:`_main_093a1fe`,mobileHidden:`_mobileHidden_b18829d`,leftPart:`_leftPart_c8aabed`,iconButton:`_iconButton_f5e94f8`,header:`_header_7f0e54d`};function qa(t){let n=(0,w.c)(26),{user:i,navigate:a,onChatClick:o,chatsContainerRef:s,leftPartRef:c}=t,{t:l,changeLanguage:u}=r(),d;n[0]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,E.jsx)(Ra,{icon:Va.faComments,size:24}),n[0]=d):d=n[0];let f;n[1]===l.chats?f=n[2]:(f=(0,E.jsxs)(`div`,{className:Ka.header,children:[d,(0,E.jsx)(`h1`,{children:l.chats})]}),n[1]=l.chats,n[2]=f);let p;n[3]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,E.jsx)(e,{}),n[3]=p):p=n[3];let m;n[4]!==s||n[5]!==o?(m=(0,E.jsx)(k,{onClick:o,ref:s}),n[4]=s,n[5]=o,n[6]=m):m=n[6];let h;n[7]!==f||n[8]!==m?(h=(0,E.jsxs)(`div`,{className:Ka.chatsPanel,children:[f,p,m]}),n[7]=f,n[8]=m,n[9]=h):h=n[9];let g;n[10]===Symbol.for(`react.memo_cache_sentinel`)?(g={flex:1},n[10]=g):g=n[10];let _=`https://api.msgmin.com/avatars/${i.avatar}.webp`,v;n[11]!==_||n[12]!==i.username?(v=(0,E.jsx)(D,{style:g,image:_,text:i.username}),n[11]=_,n[12]=i.username,n[13]=v):v=n[13];let y;n[14]===u?y=n[15]:(y=(0,E.jsx)(Ba,{onClick:()=>u(),className:Ka.iconButton,icon:Ua,size:24}),n[14]=u,n[15]=y);let b;n[16]===a?b=n[17]:(b=(0,E.jsx)(Ba,{onClick:()=>a(`/auth`,{viewTransition:!0}),className:Ka.iconButton,icon:Ha,size:24}),n[16]=a,n[17]=b);let x;n[18]!==v||n[19]!==y||n[20]!==b?(x=(0,E.jsxs)(`div`,{className:Ka.userPanel,children:[v,y,b]}),n[18]=v,n[19]=y,n[20]=b,n[21]=x):x=n[21];let S;return n[22]!==c||n[23]!==x||n[24]!==h?(S=(0,E.jsxs)(`div`,{ref:c,className:Ka.leftPart,children:[h,x]}),n[22]=c,n[23]=x,n[24]=h,n[25]=S):S=n[25],S}var $={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_58c3c08`,panel:`_panel_7ce20b8`,message:`_message_a606eec`,main:`_main_ea75f04`,container:`_container_bd81563`,containerLeft:`_containerLeft_8a50c17`,containerRight:`_containerRight_63692db`,left:`_left_644dc63`,right:`_right_e61114a`,senderName:`_senderName_dfa911b`,sentAt:`_sentAt_239ab20`,text:`_text_077fce4`,senderAvatar:`_senderAvatar_416592a`,jump:`_jump_3320511`},Ja=(0,S.memo)(function(e){let n=(0,w.c)(37),{text:r,side:i,senderName:a,senderAvatar:o,sentAt:s,type:c,className:l,shown:u}=e,d=r===void 0?`Unknown`:r,f=i===void 0?`left`:i,p=a===void 0?`Unknown`:a,h=s===void 0?`some time ago`:s,g=c===void 0?`header`:c,_=l===void 0?``:l,v=u===void 0?!1:u,y=ee(+!!v),b=ee(v?0:f===`left`?-200:200),x=ee(v?1:.5),C,T;n[0]!==y||n[1]!==x||n[2]!==v||n[3]!==f||n[4]!==b?(C=()=>{let e=m(y,+!!v,{}),t=m(b,v?0:f===`left`?-200:200,{type:`spring`,damping:15,stiffness:250}),n=m(x,v?1:.5,{type:`spring`,damping:15,stiffness:250});return()=>{e.stop(),t.stop(),n.stop()}},T=[v,y,b,x,f],n[0]=y,n[1]=x,n[2]=v,n[3]=f,n[4]=b,n[5]=C,n[6]=T):(C=n[5],T=n[6]),(0,S.useEffect)(C,T);let D;n[7]===y?D=n[8]:(D={opacity:y},n[7]=y,n[8]=D);let O=`${$.container} ${f===`left`?$.containerLeft:$.containerRight} ${_}`,k=g===`header`?`block`:`none`,A;n[9]===k?A=n[10]:(A={display:k},n[9]=k,n[10]=A);let te;n[11]!==o||n[12]!==A?(te=(0,E.jsx)(`img`,{src:o,alt:``,className:$.senderAvatar,style:A}),n[11]=o,n[12]=A,n[13]=te):te=n[13];let ne=`${$.message} ${f===`left`?$.left:$.right}`,re;n[14]!==x||n[15]!==b?(re={translateX:b,scale:x},n[14]=x,n[15]=b,n[16]=re):re=n[16];let ie=g===`header`?`block`:`none`,ae;n[17]===ie?ae=n[18]:(ae={display:ie},n[17]=ie,n[18]=ae);let j;n[19]!==p||n[20]!==ae?(j=(0,E.jsx)(`p`,{className:$.senderName,style:ae,children:p}),n[19]=p,n[20]=ae,n[21]=j):j=n[21];let M;n[22]===d?M=n[23]:(M=(0,E.jsx)(`p`,{className:$.text,children:d}),n[22]=d,n[23]=M);let N;n[24]===h?N=n[25]:(N=(0,E.jsx)(`p`,{className:$.sentAt,children:h}),n[24]=h,n[25]=N);let P;n[26]!==ne||n[27]!==re||n[28]!==j||n[29]!==M||n[30]!==N?(P=(0,E.jsxs)(t.div,{className:ne,style:re,children:[j,M,N]}),n[26]=ne,n[27]=re,n[28]=j,n[29]=M,n[30]=N,n[31]=P):P=n[31];let oe;return n[32]!==O||n[33]!==te||n[34]!==P||n[35]!==D?(oe=(0,E.jsxs)(t.div,{style:D,className:O,children:[te,P]}),n[32]=O,n[33]=te,n[34]=P,n[35]=D,n[36]=oe):oe=n[36],oe}),Ya={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_a4cd77f`,panel:`_panel_70355d0`,message:`_message_f71f736`,main:`_main_7bc4d29`,container:`_container_6b9280d`,containerLeft:`_containerLeft_4dbc43d`,containerRight:`_containerRight_5a7dc3e`,left:`_left_6a2bfe6`,right:`_right_1a9b581`,senderName:`_senderName_5eae6b1`,sentAt:`_sentAt_ce8e61c`,text:`_text_602e970`,senderAvatar:`_senderAvatar_455c823`,jump:`_jump_590caf3`};function Xa(e){let r=(0,w.c)(16),{ref:i}=e,[a]=n(`user`),o;r[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=[],r[0]=o):o=r[0];let[s,c]=(0,S.useState)(o),l=(0,S.useRef)(null),[u,d]=(0,S.useState)(0),f;r[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=function(){return l.current?Math.abs(l.current?.scrollHeight-l.current?.scrollTop-l.current?.clientHeight)<200:!1},r[1]=f):f=r[1];let p=f,m;r[2]===Symbol.for(`react.memo_cache_sentinel`)?(m=()=>({clearMessages:()=>{c([]),d(0)},setMessages:async e=>{let t=[];e.forEach((n,r)=>{let i;i=r===0?`header`:e[r-1].sender.id===n.sender.id?`regular`:`header`,t.push({shown:!0,type:i,...n})}),(0,C.flushSync)(()=>c(t)),l.current&&(l.current.scrollTop=l.current.scrollHeight);for(let e=0;e<15;e++)setTimeout(()=>d(Za),e*50)},addMessage:e=>{l.current&&((0,C.flushSync)(()=>c(t=>[...t,{shown:!0,type:`header`,...e}])),p()&&l.current.scrollTo({top:l.current.scrollHeight,behavior:`smooth`}))},removeMessage:e=>{(0,C.flushSync)(()=>c(t=>t.filter(t=>t.id!==e))),p()&&l.current?.scrollTo({top:l.current.scrollHeight,behavior:`smooth`})}}),r[2]=m):m=r[2],(0,S.useImperativeHandle)(i,m);let h,g,_;r[3]===Symbol.for(`react.memo_cache_sentinel`)?(h={opacity:0},g={opacity:1},_={opacity:0},r[3]=h,r[4]=g,r[5]=_):(h=r[3],g=r[4],_=r[5]);let y;if(r[6]!==u||r[7]!==s||r[8]!==a){let e;r[10]!==u||r[11]!==s.length||r[12]!==a?(e=(e,t)=>{let n=s.length-t-1;return(0,E.jsx)(Ja,{side:e.sender.id===a.id?`right`:`left`,text:e.content,senderName:e.sender.username===a.username?`You`:e.sender.username,senderAvatar:`https://api.msgmin.com/avatars/${e.sender.avatar}.webp`,sentAt:v(e.sentAt,`en-US`,!1),type:e.type,className:`message-${e.id}`,shown:u>n||n>=15},e.id)},r[10]=u,r[11]=s.length,r[12]=a,r[13]=e):e=r[13],y=s.map(e),r[6]=u,r[7]=s,r[8]=a,r[9]=y}else y=r[9];let b;return r[14]===y?b=r[15]:(b=(0,E.jsx)(t.div,{initial:h,animate:g,exit:_,className:Ya.container,ref:l,children:y}),r[14]=y,r[15]=b),b}function Za(e){return e+1}var Qa={prefix:`far`,iconName:`paper-plane`,icon:[576,512,[61913],`f1d8`,`M290.5 287.7L491.4 86.9 359 456.3 290.5 287.7zM457.4 53L256.6 253.8 88 185.3 457.4 53zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3L39.4 151.7c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z`]},$a={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_36951c8`,panel:`_panel_27c99aa`,container:`_container_fff0025`,main:`_main_2ec5ab0`,input:`_input_b27d49a`,button:`_button_036e3c7`,horizontalRow:`_horizontalRow_28d43a4`};function eo(e){let n=(0,w.c)(32),i,a,o,s;n[0]===e?(i=n[1],a=n[2],o=n[3],s=n[4]):({ref:o,onTextChanged:a,onSend:i,...s}=e,n[0]=e,n[1]=i,n[2]=a,n[3]=o,n[4]=s);let{t:c}=r(),[l,u]=(0,S.useState)(``),[d,f]=(0,S.useState)(``),p;n[5]===Symbol.for(`react.memo_cache_sentinel`)?(p=()=>({setMessagePrefix:e=>{u(e)}}),n[5]=p):p=n[5],(0,S.useImperativeHandle)(o,p);let m,h;n[6]!==a||n[7]!==l||n[8]!==d?(m=()=>{a?.(l+d)},h=[l,d,a],n[6]=a,n[7]=l,n[8]=d,n[9]=m,n[10]=h):(m=n[9],h=n[10]),(0,S.useEffect)(m,h);let g;n[11]===Symbol.for(`react.memo_cache_sentinel`)?(g=e=>{f(e)},n[11]=g):g=n[11];let _=g,v;n[12]!==i||n[13]!==l||n[14]!==d?(v=()=>{i?.(l+d),u(``),f(``)},n[12]=i,n[13]=l,n[14]=d,n[15]=v):v=n[15];let y=v,b,x,ee;n[16]===Symbol.for(`react.memo_cache_sentinel`)?(b={translateY:100},x={translateY:0},ee={translateY:100},n[16]=b,n[17]=x,n[18]=ee):(b=n[16],x=n[17],ee=n[18]);let C;n[19]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,E.jsx)(Ba,{className:$a.button,icon:Wa,size:24}),n[19]=C):C=n[19];let T;n[20]===Symbol.for(`react.memo_cache_sentinel`)?(T=e=>_(e.target.value),n[20]=T):T=n[20];let D;n[21]!==c.your_message||n[22]!==d?(D=(0,E.jsx)(`input`,{className:$a.input,placeholder:c.your_message,onChange:T,value:d}),n[21]=c.your_message,n[22]=d,n[23]=D):D=n[23];let O;n[24]===y?O=n[25]:(O=(0,E.jsx)(Ba,{className:$a.button,icon:Qa,size:24,onClick:y}),n[24]=y,n[25]=O);let k;n[26]!==D||n[27]!==O?(k=(0,E.jsxs)(`div`,{className:$a.horizontalRow,children:[C,D,O]}),n[26]=D,n[27]=O,n[28]=k):k=n[28];let A;return n[29]!==s||n[30]!==k?(A=(0,E.jsx)(t.div,{className:$a.container,initial:b,animate:x,exit:ee,layout:!0,...s,children:k}),n[29]=s,n[30]=k,n[31]=A):A=n[31],A}var to={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_7362387`,panel:`_panel_e468890`,contentPanel:`_contentPanel_765c338`,chatHeaderPanel:`_chatHeaderPanel_bdfde53`,main:`_main_a2ce4e3`,mobileHidden:`_mobileHidden_9de98f3`,closeButton:`_closeButton_001fdda`,rightPart:`_rightPart_fe75fde`};function no(e){let n=(0,w.c)(23),{openedChat:r,user:i,closeChat:a,messagesContainerRef:o}=e,s;n[0]!==r?.participants||n[1]!==i.id?(s=r?.participants.find(e=>e.id!==i.id),n[0]=r?.participants,n[1]=i.id,n[2]=s):s=n[2];let c=s,l;n[3]===r?.id?l=n[4]:(l=e=>y.sendMessage({content:e,chatId:r?.id||-1}),n[3]=r?.id,n[4]=l);let u=l,d;n[5]!==a||n[6]!==r||n[7]!==c?.avatar||n[8]!==c?.username?(d=r&&(0,E.jsxs)(t.div,{initial:{translateY:-100},animate:{translateY:0},exit:{translateY:100},className:to.chatHeaderPanel,layout:!0,children:[(0,E.jsx)(Ba,{onClick:a,className:to.closeButton,icon:Ga,size:24}),(0,E.jsx)(D,{image:`https://api.msgmin.com/avatars/${c?.avatar||`default`}.webp`,text:c?.username||`Default Chat`})]}),n[5]=a,n[6]=r,n[7]=c?.avatar,n[8]=c?.username,n[9]=d):d=n[9];let f;n[10]===Symbol.for(`react.memo_cache_sentinel`)?(f={layout:{type:`spring`}},n[10]=f):f=n[10];let p;n[11]!==o||n[12]!==r?(p=r&&(0,E.jsx)(Xa,{ref:o}),n[11]=o,n[12]=r,n[13]=p):p=n[13];let m;n[14]===p?m=n[15]:(m=(0,E.jsx)(t.div,{layout:!0,transition:f,className:to.contentPanel,children:p}),n[14]=p,n[15]=m);let h;n[16]!==r||n[17]!==u?(h=r&&(0,E.jsx)(eo,{onSend:u}),n[16]=r,n[17]=u,n[18]=h):h=n[18];let g;return n[19]!==d||n[20]!==m||n[21]!==h?(g=(0,E.jsxs)(`div`,{className:to.rightPart,children:[d,m,h]}),n[19]=d,n[20]=m,n[21]=h,n[22]=g):g=n[22],g}var ro={bgColor:`#131317`,panelBgColor:`#1f1f23`,borderColor:`rgba(45, 45, 50, 0.8666666667)`,dividerColor:`rgba(45, 45, 50, 0.8666666667)`,primaryColor:`#ffffff`,secondaryColor:`#aaaaaa`,shadowColor:`rgba(0, 0, 0, 0.5)`,rippleColor:`rgba(255, 255, 255, 0.4)`,rippleColorOpaque:`#7c7c7e`,borderRadius:`16px`,borderWidth:`2px`,padding:`12px`,fontSizeBase:`16px`,fontSizeSmall:`14px`,fontSizeSmallest:`12px`,fontFamily:`"Rubik"`,shadow:`_shadow_7876d8e`,panel:`_panel_b650328`,main:`_main_7901154`,mobileHidden:`_mobileHidden_efa773f`};function io(){let e=(0,w.c)(13),[t]=n(`user`),r=l(),i=(0,S.useRef)(null),a=(0,S.useRef)(null),o=(0,S.useRef)(null),[s,c]=(0,S.useState)(null),u,d;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(u=()=>{y.fetchChats().then(e=>{e.success&&(i.current?.setChats([{id:1,name:`Default Chat`,type:`group`,participants:[]},...e.chats]),i.current?.show())});let e=y.subscribeToMessages(e=>{a.current?.addMessage(e)}),t=y.subscribeToDeletingMessages(e=>{a.current?.removeMessage(e)});return()=>{e.remove(),t.remove()}},d=[],e[0]=u,e[1]=d):(u=e[0],d=e[1]),(0,S.useEffect)(u,d);let f;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(f=async e=>{a.current?.clearMessages(),o.current?.classList.add(ro.mobileHidden),c(e);let t=await y.fetchChatMessages({chatId:e.id});t.success&&await a.current?.setMessages(t.messages)},e[2]=f):f=e[2];let p=f,m;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(m=()=>{o.current?.classList.remove(ro.mobileHidden),c(null)},e[3]=m):m=e[3];let h=m,g;e[4]!==r||e[5]!==t?(g=(0,E.jsx)(qa,{user:t,navigate:r,onChatClick:p,chatsContainerRef:i,leftPartRef:o}),e[4]=r,e[5]=t,e[6]=g):g=e[6];let _;e[7]!==s||e[8]!==t?(_=(0,E.jsx)(no,{openedChat:s,user:t,closeChat:h,messagesContainerRef:a}),e[7]=s,e[8]=t,e[9]=_):_=e[9];let v;return e[10]!==g||e[11]!==_?(v=(0,E.jsxs)(`div`,{className:ro.main,children:[g,_]}),e[10]=g,e[11]=_,e[12]=v):v=e[12],v}export{io as default};
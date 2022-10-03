"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[3127],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(o),d=n,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return o?r.createElement(g,a(a({ref:t},p),{},{components:o})):r.createElement(g,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5237:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905)),i=o(4996);const a={id:"troubleshooting",title:"Troubleshooting",slug:"dapps/troubleshooting"},s=void 0,l={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"",source:"@site/dapps/guide3-troubleshooting.md",sourceDirName:".",slug:"/dapps/troubleshooting",permalink:"/dapps/troubleshooting",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/guide3-troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Suga",lastUpdatedAt:1643964517,formattedLastUpdatedAt:"Feb 4, 2022",frontMatter:{id:"troubleshooting",title:"Troubleshooting",slug:"dapps/troubleshooting"},sidebar:"dapps",previous:{title:"Donating with Metamask",permalink:"/dapps/donatingmetamask"},next:{title:"Frequently Asked Questions",permalink:"/dapps/faq"}},c={},p=[{value:"Brave Browser",id:"brave-browser",level:2},{value:"Giveth.io shows a blank screen! Help!",id:"givethio-shows-a-blank-screen-help",level:3}],u={toc:p};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you are having technical problems with the Giveth DApp, you may find a solution on this page."),(0,n.kt)("h2",{id:"brave-browser"},"Brave Browser"),(0,n.kt)("p",null,"If you try to sign into the Giveth DApp with Brave browser, Torus (the wallet provider) notifies you that it needs cookies to operate. (Torus needs these permissions for their OAuth services, so our users can be provided easily with their own Ethereum wallet that is tied i.e. their Google account.)"),(0,n.kt)("p",null,"To quickly solve this problem you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"click on the site settings (Brave icon)"),(0,n.kt)("li",{parentName:"ul"},'change the cookie setting just for Giveth.io to "all cookies allowed"')),(0,n.kt)("img",{alt:"Enable Cookies in Brave",src:(0,i.Z)("img/content/screenshot-brave-cookies.png")}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-"},"Read more about handling cookies in Brave.")),(0,n.kt)("h3",{id:"givethio-shows-a-blank-screen-help"},"Giveth.io shows a blank screen! Help!"),(0,n.kt)("p",null,"Sometimes updates get pushed to the Giveth.io website, and your cached files and cookies don't always get along well with the new updates on the site, so you'll need to clear your cache, delete your cookies, then refresh the browser."),(0,n.kt)("p",null,"To clear your cache and cookies on Brave, navigate to: ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings -> Additional Settings -> Privacy and Securiy -> Clear Browsing Data ")," Once you're arrived there, check off ",(0,n.kt)("inlineCode",{parentName:"p"},"Cookies")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Cached images and files"),", and make sure at the top of the pop-up window you check off the appropriate Time Range. You can select ",(0,n.kt)("inlineCode",{parentName:"p"},"All Time")," just to be sure you got 'em all."),(0,n.kt)("p",null,"Clearing your cookies will log you out of most sites. If you don't want to go through the hassle of logging back in to all the websites you frequent, then head to: ",(0,n.kt)("inlineCode",{parentName:"p"},"Privacy and Security -> Cookies and othersite data -> See all site cookies and other data")," Then from this menu look up the Giveth domain like so:"),(0,n.kt)("img",{alt:"Deleting Cookies in Brave",src:(0,i.Z)("img/content/givethcookies.png")}),(0,n.kt)("p",null,"Then click the trash icon to delete the cookie for Giveth. If that's finished, pull up a fresh Brave browser window, head back to Giveth, and get back to giving!"))}h.isMDXComponent=!0}}]);
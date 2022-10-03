"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8907],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>l});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),l=n,f=m["".concat(i,".").concat(l)]||m[l]||u[l]||o;return a?r.createElement(f,c(c({ref:t},d),{},{components:a})):r.createElement(f,c({ref:t},d))}));function l(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"exchangeRates",title:"Taxas de C\xe2mbio",slug:"dapps/exchangeRates"},c=void 0,s={unversionedId:"exchangeRates",id:"exchangeRates",title:"Taxas de C\xe2mbio",description:"Quando voc\xea deixa uma Trace dentro do Giveth TRACE, voc\xea pode inserir um valor em ether ou em moeda fiduci\xe1ria. Nosso sistema calcula automaticamente a taxa de convers\xe3o com base na data da Trace.",source:"@site/i18n/pt/docusaurus-plugin-content-docs-dapps/current/exchangeRates.md",sourceDirName:".",slug:"/dapps/exchangeRates",permalink:"/pt/dapps/exchangeRates",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/exchangeRates.md",tags:[],version:"current",lastUpdatedBy:"mrbear",lastUpdatedAt:1651518279,formattedLastUpdatedAt:"2 de mai. de 2022",frontMatter:{id:"exchangeRates",title:"Taxas de C\xe2mbio",slug:"dapps/exchangeRates"},sidebar:"dapps",previous:{title:"Documento T\xe9cnico",permalink:"/pt/technicalWhitePaper"},next:{title:"Informa\xe7\xf5es T\xe9cnicas de Contratos, Bridges e Multisigs",permalink:"/pt/dapps/traceContracts"}},i={},p=[],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Quando voc\xea deixa uma Trace dentro do ",(0,n.kt)("a",{parentName:"p",href:"https://beta.giveth.io/"},"Giveth TRACE"),", voc\xea pode inserir um valor em ether ou em moeda fiduci\xe1ria. Nosso sistema calcula automaticamente a taxa de convers\xe3o com base na data da Trace."),(0,n.kt)("p",null,"Em nosso backend Feathers, mantemos um cache da taxa de c\xe2mbio m\xe9dia di\xe1ria para cada data. Usamos o ",(0,n.kt)("a",{parentName:"p",href:"https://min-api.cryptocompare.com/"},"Crypto Compare")," e o ",(0,n.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/api"},"CoinGecko")," para obter essas taxas."),(0,n.kt)("p",null,"Quando voc\xea insere um valor de moeda em uma Trace, buscamos a taxa de convers\xe3o em cache de Feathers e calculamos o resultado na interface do usu\xe1rio. Quando voc\xea salva a Trace, verificamos essa convers\xe3o novamente para garantir que tudo esteja correto."),(0,n.kt)("p",null,"Atualmente, suportamos pagamentos em ETH, SAI, DAI, PAN, WBTC, USDC Ethereum Mainnet Tokens. As moedas nativas permitidas para compara\xe7\xe3o de pre\xe7os de pares de negocia\xe7\xe3o s\xe3o BTC, ETH, AUD, GBP, USD, MXN, CAD, CZK, THB, BRL, CHF."))}u.isMDXComponent=!0}}]);
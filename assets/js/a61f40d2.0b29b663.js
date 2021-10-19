"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[4341],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4996),l={id:"givethioinstallation",title:"Installing Giveth.io for Local development"},s=void 0,p={unversionedId:"givethioinstallation",id:"givethioinstallation",isDocsHomePage:!1,title:"Installing Giveth.io for Local development",description:"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS.",source:"@site/docs/givethioinstallation.md",sourceDirName:".",slug:"/givethioinstallation",permalink:"/docs/givethioinstallation",tags:[],version:"current",frontMatter:{id:"givethioinstallation",title:"Installing Giveth.io for Local development"},sidebar:"defaultSidebar"},u=[{value:"Install impact-graph from GitHub",id:"install-impact-graph-from-github",children:[]},{value:"Create a Database and User in Postgres using psql",id:"create-a-database-and-user-in-postgres-using-psql",children:[]},{value:"Clone and Install the Frontend",id:"clone-and-install-the-frontend",children:[]},{value:"Get the Environment Variables",id:"get-the-environment-variables",children:[]},{value:"Launch the Development Server and Environment",id:"launch-the-development-server-and-environment",children:[]},{value:"Start Editing!",id:"start-editing",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You'll need a couple prerequisites to get started.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/topics/quickstart"},"Redis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download"},"Postgres")),(0,i.kt)("li",{parentName:"ul"},"Bash CLI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/reference/gatsby-cli/"},"Gatsby CLI")),(0,i.kt)("li",{parentName:"ul"},"Configure NodeJS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-linux/"},"For Linux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/"},"For Windows")))),(0,i.kt)("li",{parentName:"ul"},"Your Favourite Code Editor (VScode for linting presets)")),(0,i.kt)("h3",{id:"install-impact-graph-from-github"},"Install impact-graph from GitHub"),(0,i.kt)("p",null,"In order to develop locally you need to clone the backend server as well. We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Giveth/impact-graph"},"https://github.com/Giveth/impact-graph")," for this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"via SSH on the CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Giveth/impact-graph.git\ncd impact-graph\nnpm i\ncp .env.example .env\n")))),(0,i.kt)("h3",{id:"create-a-database-and-user-in-postgres-using-psql"},"Create a Database and User in Postgres using psql"),(0,i.kt)("p",null,"Follow this tutorial on PSQL to setup your username and create the database.\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"},"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TL;DR")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql\npostgres=# create database <databaseName>;\npostgres=# create user <userName> with encrypted password '<passwordHere>';\npostgres=# grant all privileges on database <databaseName> to <userName>;\n")),(0,i.kt)("h3",{id:"clone-and-install-the-frontend"},"Clone and Install the Frontend"),(0,i.kt)("p",null,"  Head on over to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-2"},"https://github.com/Giveth/giveth-2")," and clone the repo."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"via the CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Giveth/giveth-2.git\ncd giveth-2\nnpm i\n")))),(0,i.kt)("h3",{id:"get-the-environment-variables"},"Get the Environment Variables"),(0,i.kt)("p",null," In order to run the local build for Giveth.io you'll need to ask for the environment variables. Head on over to our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/EndTUw9955"},"Contributors Discord")," say Hi and get in touch with one of the developers."),(0,i.kt)("h3",{id:"launch-the-development-server-and-environment"},"Launch the Development Server and Environment"),(0,i.kt)("p",null," Start up the ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-graph")," backend server and redis."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run redis by using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-server"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"From the impact-graph repo start with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")),(0,i.kt)("p",{parentName:"li"},"To take advantage of linting presets, please use ",(0,i.kt)("strong",{parentName:"p"},"VSCODE"),":"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("em",{parentName:"p"},"File -> Open Workspace"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Navigate into the giveth-2 directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open the workspace file ",(0,i.kt)("inlineCode",{parentName:"p"},"giveth2-full-stack.code-workspace"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install recommended extensions (Prettier and StandardJS plugins)"),(0,i.kt)("p",{parentName:"li"},"Then fire up the local development server."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gatsby develop\n")))),(0,i.kt)("h3",{id:"start-editing"},"Start Editing!"),(0,i.kt)("p",null,"Open up the giveth2 repo on your code editor."),(0,i.kt)("p",null,"Giveth.io is now running locally at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"!"),(0,i.kt)("img",{alt:"Giveth Running Locally",src:(0,o.Z)("img/content/givethlocalresized.png")}),(0,i.kt)("p",null,"You can also expiremnt with querying your data via GraphQL - you'll find it at this link here - ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/___graphql"),"\nLearn more about using this tool in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql"},"Gatsby tutorial"),"."),(0,i.kt)("p",null,"  Save your changes and the browser will update in real time!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Current Build Statuses")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://v2.giveth.io"},"master")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth2/deploys"},(0,i.kt)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Netlify Status"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://staging.giveth.io"},"staging")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth-website-staging/deploys"},(0,i.kt)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Netlify Status"}))),(0,i.kt)("br",null))}d.isMDXComponent=!0}}]);
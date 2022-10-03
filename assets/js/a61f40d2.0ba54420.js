"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[4341],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(4996);const l={id:"givethioinstallation",title:"Installing Giveth.io for Local development"},o=void 0,p={unversionedId:"givethioinstallation",id:"givethioinstallation",title:"Installing Giveth.io for Local development",description:"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS.",source:"@site/docs/givethioinstallation.md",sourceDirName:".",slug:"/givethioinstallation",permalink:"/docs/givethioinstallation",draft:!1,tags:[],version:"current",frontMatter:{id:"givethioinstallation",title:"Installing Giveth.io for Local development"},sidebar:"defaultSidebar"},s={},u=[{value:"Install impact-graph from GitHub",id:"install-impact-graph-from-github",level:3},{value:"Create a Database and User in Postgres using psql",id:"create-a-database-and-user-in-postgres-using-psql",level:3},{value:"Clone and Install the Frontend",id:"clone-and-install-the-frontend",level:3},{value:"Get the Environment Variables",id:"get-the-environment-variables",level:3},{value:"Launch the Development Server and Environment",id:"launch-the-development-server-and-environment",level:3},{value:"Start Editing!",id:"start-editing",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will document the steps to set up and run Giveth.io locally for the purposes of development.The setup process was documented using Ubuntu 20.04 LTS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You'll need a couple prerequisites to get started.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.io/topics/quickstart"},"Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download"},"Postgres")),(0,r.kt)("li",{parentName:"ul"},"Bash CLI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/reference/gatsby-cli/"},"Gatsby CLI")),(0,r.kt)("li",{parentName:"ul"},"Configure NodeJS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-linux/"},"For Linux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/"},"For Windows")))),(0,r.kt)("li",{parentName:"ul"},"Your Favourite Code Editor (VScode for linting presets)")),(0,r.kt)("h3",{id:"install-impact-graph-from-github"},"Install impact-graph from GitHub"),(0,r.kt)("p",null,"In order to develop locally you need to clone the backend server as well. We are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Giveth/impact-graph"},"https://github.com/Giveth/impact-graph")," for this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"via SSH on the CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Giveth/impact-graph.git\ncd impact-graph\nnpm i\ncp .env.example .env\n")))),(0,r.kt)("h3",{id:"create-a-database-and-user-in-postgres-using-psql"},"Create a Database and User in Postgres using psql"),(0,r.kt)("p",null,"Follow this tutorial on PSQL to setup your username and create the database.\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"},"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql\npostgres=# create database <databaseName>;\npostgres=# create user <userName> with encrypted password '<passwordHere>';\npostgres=# grant all privileges on database <databaseName> to <userName>;\n")),(0,r.kt)("h3",{id:"clone-and-install-the-frontend"},"Clone and Install the Frontend"),(0,r.kt)("p",null,"  Head on over to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-2"},"https://github.com/Giveth/giveth-2")," and clone the repo."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"via the CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Giveth/giveth-2.git\ncd giveth-2\nnpm i\n")))),(0,r.kt)("h3",{id:"get-the-environment-variables"},"Get the Environment Variables"),(0,r.kt)("p",null," In order to run the local build for Giveth.io you'll need to ask for the environment variables. Head on over to our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"Contributors Discord")," say Hi and get in touch with one of the developers."),(0,r.kt)("h3",{id:"launch-the-development-server-and-environment"},"Launch the Development Server and Environment"),(0,r.kt)("p",null," Start up the ",(0,r.kt)("inlineCode",{parentName:"p"},"impact-graph")," backend server and redis."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run redis by using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-server"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From the impact-graph repo start with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")),(0,r.kt)("p",{parentName:"li"},"To take advantage of linting presets, please use ",(0,r.kt)("strong",{parentName:"p"},"VSCODE"),":"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("em",{parentName:"p"},"File -> Open Workspace"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate into the giveth-2 directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the workspace file ",(0,r.kt)("inlineCode",{parentName:"p"},"giveth2-full-stack.code-workspace"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install recommended extensions (Prettier and StandardJS plugins)"),(0,r.kt)("p",{parentName:"li"},"Then fire up the local development server."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gatsby develop\n")))),(0,r.kt)("h3",{id:"start-editing"},"Start Editing!"),(0,r.kt)("p",null,"Open up the giveth2 repo on your code editor."),(0,r.kt)("p",null,"Giveth.io is now running locally at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"!"),(0,r.kt)("img",{alt:"Giveth Running Locally",src:(0,i.Z)("img/content/givethlocalresized.png")}),(0,r.kt)("p",null,"You can also expiremnt with querying your data via GraphQL - you'll find it at this link here - ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/___graphql"),"\nLearn more about using this tool in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql"},"Gatsby tutorial"),"."),(0,r.kt)("p",null,"  Save your changes and the browser will update in real time!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current Build Statuses")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://v2.giveth.io"},"master")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth2/deploys"},(0,r.kt)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Netlify Status"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://staging.giveth.io"},"staging")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth-website-staging/deploys"},(0,r.kt)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Netlify Status"}))),(0,r.kt)("br",null))}d.isMDXComponent=!0}}]);
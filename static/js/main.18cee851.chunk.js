(this.webpackJsonpethhole=this.webpackJsonpethhole||[]).push([[0],{114:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r(52),s=r.n(c),n=(r(65),r(6)),i=r(7),o=r(12),l=r.n(o),d=r(34);function b(e,t){var r=new Date(t);switch(e){case"yesterday":r.setDate(r.getDate()-1);break;case"week":r.setDate(r.getDate()-7);break;case"month":r.setDate(r.getDate()-30)}return r.toISOString().split("T")[0]}var h,m,p,j=function(){var e=Object(a.useState)("{}"),t=Object(i.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(""),n=Object(i.a)(s,2),o=n[0],h=n[1],m="https://raw.githubusercontent.com/gasolin/ethhole";return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/main/src/data/data.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,h(r.lastUpdate),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.next=5;break;case 5:return t=o?b("today",new Date(o)):b("yesterday",new Date),e.next=8,fetch("".concat(m,"/main/src/data/").concat(t,".json"));case 8:return r=e.sent,e.next=11,r.json();case 11:a=e.sent,c(JSON.stringify(a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o]),[JSON.parse(r),o]},x=r(5),u=r.n(x),g=r(2),f=function(e){var t=e.price,r=e.tvl,a=e.children,c=1===t?"\u039e":"$";return Object(g.jsxs)("div",{className:"shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800",children:[Object(g.jsxs)("div",{className:"flex items-center",children:[Object(g.jsx)("span",{className:"rounded-xl relative p-4 bg-purple-200",children:Object(g.jsx)("svg",{width:"40",fill:"currentColor",height:"40",className:"text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"})})}),Object(g.jsx)("p",{className:"text-md text-black dark:text-white ml-2",children:"Total Value Tracked"})]}),Object(g.jsxs)("div",{className:"flex flex-col justify-start",children:[Object(g.jsxs)("p",{className:"text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4",children:[c," ",u()(r*t)]}),Object(g.jsx)("div",{className:"flex items-center text-green-500 text-sm",children:a}),Object(g.jsx)("span",{className:"text-purple-400 text-sm",children:"Calculated by tokens deposit to bridge contracts on Ethereum."})]})]})},w=function(e){var t=e.children;return Object(g.jsxs)("table",{className:"min-w-full leading-normal",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",className:"px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal",children:"Name"}),Object(g.jsx)("th",{scope:"col",className:"px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal",children:"Value Locked"}),Object(g.jsx)("th",{scope:"col",className:"px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal",children:"Type"})]})}),Object(g.jsx)("tbody",{children:t})]})},O=r(4),y=r(3),v="l2payment",k="l2ex",N="sidechain",A="l2derivatives",D="l2lend",C="liquidity",F="crossdex",E=(h={},Object(y.a)(h,"layer2","General"),Object(y.a)(h,v,"Payment"),Object(y.a)(h,k,"DEX"),Object(y.a)(h,N,"Side Chain"),Object(y.a)(h,A,"Derivatives"),Object(y.a)(h,D,"Lend"),Object(y.a)(h,C,"Liquidity"),Object(y.a)(h,F,"Crosschain DEX"),h),B={name:"AnySwap",website:"https://anyswap.exchange/",twitter:"https://twitter.com/AnyswapNetwork",github:"https://github.com/anyswap",color:"#2f80ed",type:F},q={name:"Aztec",explorer:"https://explorer.aztec.network/",website:"https://aztec.network/",github:"https://github.com/AztecProtocol",twitter:"https://twitter.com/aztecprotocol",color:"#944af2",type:v},I={name:"Avalanche",explorer:"https://cchain.explorer.avax.network/",website:"https://www.avalabs.org/",github:"https://github.com/ava-labs",twitter:"https://twitter.com/avalancheavax",color:"#e84142",type:N},S={name:"Binance Smart Chain",explorer:"https://bscscan.com/",website:"https://www.binance.org/en/smartChain",github:"https://github.com/binance-chain/",twitter:"https://twitter.com/binancechain",color:"#f8d12f",type:N},z={name:"connext",website:"https://www.connext.network/",github:"https://github.com/connext",twitter:"https://twitter.com/connextnetwork",color:"#29c1fc",type:C},_={name:"dydx",website:"https://dydx.exchange/",github:"https://github.com/dydxprotocol",twitter:"https://twitter.com/dydxprotocol",color:"#6966FF",type:k},P={name:"DeversiFi",website:"https://www.deversifi.com/",github:"https://github.com/deversifi",twitter:"https://twitter.com/deversifi",color:"#5500FC",type:k},T={name:"Fantom",explorer:"https://explorer.fantom.network/",website:"https://fantom.foundation/",github:"https://github.com/Fantom-Foundation",twitter:"https://twitter.com/FantomFDN",color:"#1969ff",type:N},L={name:"Fuel",explorer:"https://mainnet.fuel.sh/network",website:"https://fuel.sh/",github:"https://github.com/fuellabs",twitter:"https://twitter.com/fuellabs_",color:"#04c399",type:v},U={name:"Fusion",explorer:"https://fsnex.com/blocks",website:"https://www.fusion.org/en",github:"https://github.com/FUSIONFoundation",twitter:"https://twitter.com/FUSIONProtocol",color:"#358dcc",type:N},H={name:"GLUON",explorer:"https://gluon.leverj.io/",website:"https://gluon.network/",github:"https://github.com/leverj",twitter:"https://twitter.com/GluonNetwork",color:"#f7961c",type:N},V={name:"Harmony",explorer:"https://explorer.harmony.one/",website:"https://www.harmony.one/",github:"https://github.com/harmony-one",twitter:"https://harmony.one/twitter",color:"#00ade8",type:N},$={name:"Hermez",explorer:"https://explorer.hermez.io/",website:"https://hermez.io/",github:"https://github.com/hermeznetwork/",twitter:"https://twitter.com/hermez_network",color:"#e75a2b",type:v},M={name:"HUOBI ECO CHAIN",explorer:"https://hecoinfo.com/",website:"https://www.hecochain.com/en-us/",github:"https://github.com/huobiGroup/",twitter:"https://twitter.com/HECO_Chain",color:"#01943f",type:N},G={name:"ImmutableX",website:"https://www.immutable.com/",twitter:"https://twitter.com/immutable",color:"#24d1e9",type:k},K={name:"Layer2.Finance",website:"https://layer2.finance/",github:"https://github.com/celer-network/layer2-finance-contracts",twitter:"https://twitter.com/layer2finance",color:"#ca9979",type:D},R={name:"Loopring",website:"https://loopring.org",github:"https://github.com/Loopring",twitter:"https://twitter.com/loopringorg",color:"#1c42ff",type:k},J="OKExChain",X={name:"Optimism",explorer:"https://mainnet-l2-explorer.surge.sh/",website:"https://optimism.io/",github:"https://github.com/ethereum-optimism",twitter:"https://twitter.com/optimismPBC",color:"#f01a37",type:A},Y={name:"Polygon",explorer:"https://explorer-mainnet.maticvigil.com/",website:"https://polygon.technology/",github:"https://github.com/maticnetwork/",twitter:"https://twitter.com/maticnetwork",color:"#8248e5",type:N},Z={name:"PolyNetwork",explorer:"https://explorer.poly.network/",website:"https://www.poly.network/",github:"https://github.com/polynetwork",twitter:"https://twitter.com/PolyNetwork2",color:"#2222FF",type:N},W={name:"RSK",explorer:"https://explorer.rsk.co/",website:"https://www.rsk.co/",twitter:"https://twitter.com/rsksmart",color:"#00b520",type:N},Q={name:"xDai",explorer:"https://blockscout.com/poa/xdai/",website:"https://www.xdaichain.com/",twitter:"https://twitter.com/xdaichain",color:"#1ca9a6",type:N},ee={name:"ZKSwap",explorer:"https://zkswap.info/en/transactions",website:"https://zkswap.info/en",github:"https://github.com/l2labs",twitter:"https://twitter.com/ZKSwapOfficial",color:"#596efd",type:k},te={name:"zkSync",explorer:"https://zkscan.io/explorer/",website:"https://zksync.io/",github:"https://github.com/matter-labs/zksync",twitter:"https://twitter.com/zksync",color:"#8c8dfc",type:v},re=(m={},Object(y.a)(m,B.name,B),Object(y.a)(m,z.name,z),m),ae=(p={},Object(y.a)(p,q.name,Object(O.a)({bridges:[{address:"0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",chainId:1,name:"zk.money",website:"https://zk.money/"}]},q)),Object(y.a)(p,I.name,Object(O.a)({bridges:[{address:"0xdAC7Bb7Ce4fF441A235F08408e632FA1D799A147",chainId:1,name:"Avalanche-Ethereum Bridge",website:"https://aeb.xyz/"},{address:"0x820A9eb227BF770A9dd28829380d53B76eAf1209",chainId:1,name:"Anyswap Avalanche bridge",project:B.name,website:"https://anyswap.exchange/"}]},I)),Object(y.a)(p,S.name,Object(O.a)({bridges:[{address:"0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503",chainId:1,name:"Binance Smart Chain Bridge",website:"https://www.binance.org/en/bridge"},{address:"0x9BF4001d307dFd62B26A2F1307ee0C0307632d59",chainId:1,name:"Binance Smart Chain ETH Bridge",website:"https://www.binance.org/en/bridge"},{address:"0x13B432914A996b0A48695dF9B2d701edA45FF264",chainId:1,name:"Anyswap BSC bridge",project:B.name,website:"https://anyswap.exchange/"},{address:"0x533e3c0e6b48010873B947bddC4721b1bDFF9648",chainId:1,name:"Anyswap BSC bridge",project:B.name,website:"https://anyswap.exchange/"}]},S)),Object(y.a)(p,_.name,Object(O.a)({bridges:[{address:"0xD54f502e184B6B739d7D27a6410a67dc462D69c8",chainId:1}]},_)),Object(y.a)(p,P.name,Object(O.a)({bridges:[{address:"0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b",chainId:1}]},P)),Object(y.a)(p,T.name,Object(O.a)({bridges:[{address:"0x65e64963b755043CA4FFC88029FfB8305615EeDD",chainId:1,name:"Anyswap Fantom bridge",project:B.name,website:"https://anyswap.exchange/"},{address:"0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE",chainId:1,name:"Anyswap Fantom bridge",project:B.name,website:"https://anyswap.exchange/"},{address:"0xBe008e52c5682A49dd0260735a26Aa221f303456",chainId:1,name:"Anyswap Fantom bridge",project:B.name,website:"https://anyswap.exchange/"}]},T)),Object(y.a)(p,L.name,Object(O.a)({bridges:[{address:"0x6880f6Fd960D1581C2730a451A22EED1081cfD72",chainId:1}]},L)),Object(y.a)(p,U.name,Object(O.a)({bridges:[{address:"0x46290B0c3A234E3d538050d8F34421797532A827",chainId:1,name:"Anyswap Fusion bridge",project:B.name,website:"https://anyswap.exchange/"}]},U)),Object(y.a)(p,H.name,Object(O.a)({bridges:[{address:"0x75ace7a086ea0fb1a79e43cc6331ad053d8c67cb",chainId:1,name:"GLUON bridge",project:H.name,website:"https://gluon.network/"},{address:"0xBbff34E47E559ef680067a6B1c980639EEb64D24",chainId:1,name:"L2 bridge"},{address:"0x6B175474E89094C44Da98b954EedeAC495271d0F",chainId:1,name:"DAI bridge"},{address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",chainId:1,name:"USDT bridge"}]},H)),Object(y.a)(p,V.name,Object(O.a)({bridges:[{address:"0xfD53b1B4AF84D59B20bF2C20CA89a6BeeAa2c628",name:"BUSD manager"},{address:"0xfE601dE9D4295274b9904D5a9Ad7069F23eE2B32",name:"LINK manager"},{address:"0x2dCCDB493827E15a5dC8f8b72147E6c4A5620857",name:"ERC20 manager"}]},V)),Object(y.a)(p,$.name,Object(O.a)({bridges:[{address:"0xA68D85dF56E733A06443306A095646317B5Fa633",chainId:1}]},$)),Object(y.a)(p,M.name,Object(O.a)({bridges:[{address:"0xa929022c9107643515f5c777ce9a910f0d1e490c",chainId:1,name:"Huobi ECO Chain bridge"},{address:"0xD779967F8B511C5edf39115341B310022900eFED",chainId:1,name:"connext HECO bridge",project:B.name}]},M)),Object(y.a)(p,G.name,Object(O.a)({bridges:[{address:"0x5FDCCA53617f4d2b9134B29090C87D01058e27e9",chainId:1}]},G)),Object(y.a)(p,K.name,Object(O.a)({bridges:[{address:"0xf86FD6735f88d5b6aa709B357AD5Be22CEDf1A05",chainId:1,name:"Layer 2"},{address:"0x9D233A907E065855D2A9c7d4B552ea27fB2E5a36",chainId:1,name:"AAVE DAI"},{address:"0xCbE56b00d173A26a5978cE90Db2E33622fD95A28",chainId:1,name:"AAVE USDC"},{address:"0xf4B2cbc3bA04c478F0dC824f4806aC39982Dce73",chainId:1,name:"AAVE USDT"},{address:"0x30640476B9b47aBa450e351e8527Ba35B5E995bf",chainId:1,name:"AAVE BUSD"},{address:"0x7A05831A2D0Dd5aA0c638c9d22c29b21DA5067Da",chainId:1,name:"Compound DAI"},{address:"0x4d6406895EF1b408F0F3D4c4696e394Cc78629A0",chainId:1,name:"Compound USDC"},{address:"0xc8e3785BCf59aC59d7a449128c633c6F6272D156",chainId:1,name:"Compound USDT"},{address:"0x1DA1cebC2525a5Bb1242CAde6E923F3f1388874E",chainId:1,name:"Curve3Pool Dai",staked:["curve"]},{address:"0x3D3092560d48c02f524dfb3fa3CAdDc8A5717751",chainId:1,name:"Curve3Pool USDC",staked:["curve"]},{address:"0xca222c64b7f3ca0322356fA19e9A09a13bE71e06",chainId:1,name:"Curve3Pool USDT",staked:["curve"]}]},K)),Object(y.a)(p,R.name,Object(O.a)({bridges:[{address:"0x674bdf20A0F284D710BC40872100128e2d66Bd3f",chainId:1}]},R)),Object(y.a)(p,J,{bridges:[{address:"0x2c8fbb630289363ac80705a1a61273f76fd5a161",chainId:1,name:"OKExChain bridge"}]}),Object(y.a)(p,X.name,Object(O.a)({bridges:[{address:"0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f",chainId:1,name:"Synthetix: L2 Deposit Escrow"}]},X)),Object(y.a)(p,Y.name,Object(O.a)({bridges:[{address:"0x8484Ef722627bf18ca5Ae6BcF031c23E6e922B30",chainId:1,name:"PoS Ether bridge"},{address:"0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf",chainId:1,name:"PoS ERC20 bridge",protocol:["harvest","badger","synthetix"]},{address:"0x401F6c983eA34274ec46f84D70b31C151321188b",chainId:1,name:"Plasma bridge"},{address:"0x668b9734FfE9eE8a01d4Ade3362De71E8989EA87",chainId:1,name:"Anyswap Polygon bridge",project:B.name}]},Y)),Object(y.a)(p,Z.name,Object(O.a)({bridges:[{address:"0x250e76987d838a75310c34bf422ea9f1AC4Cc906",name:"Lock Proxy",chainId:1}]},Z)),Object(y.a)(p,W.name,Object(O.a)({bridges:[{address:"0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d",name:"Bridge",chainId:1}]},W)),Object(y.a)(p,Q.name,Object(O.a)({bridges:[{address:"0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016",name:"xDai Bridge",chainId:1},{address:"0x88ad09518695c6c3712ac10a214be5109a655671",name:"Omni Bridge",chainId:1,protocol:["sushiswap","synthetix","uniswap","balancer"]},{address:"0x2F10c5eE93ac666dA72195abA8a49FD6D27fA02F",chainId:1,name:"Anyswap XDAI bridge",project:B.name}]},Q)),Object(y.a)(p,ee.name,Object(O.a)({bridges:[{address:"0x8eca806aecc86ce90da803b080ca4e3a9b8097ad",chainId:1}]},ee)),Object(y.a)(p,te.name,Object(O.a)({bridges:[{address:"0xaBEA9132b05A70803a4E85094fD0e1800777fBEF",chainId:1}]},te)),p),ce=function(e){var t,r=e.name,a=e.data,c=e.price,s=a[r],i=ae[r],o=1===c?"\u039e".concat(u()(s.tvl)):"$".concat(u()(s.tvl*c));return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 bg-white text-sm",children:Object(g.jsxs)("div",{className:"flex items-center",children:[i.color&&Object(g.jsx)("div",{className:"flex-shrink-0",children:Object(g.jsx)("a",{href:i.website,target:"_blank",className:"block relative",style:{color:i.color},rel:"noreferrer",children:"\u25cf"})}),Object(g.jsx)("div",{className:"ml-3",children:Object(g.jsx)(n.A,{href:"/project/".concat(r),className:"text-blue-500 underline whitespace-no-wrap",children:r})})]})}),Object(g.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 bg-white text-sm",children:Object(g.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:o})}),Object(g.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 bg-white text-sm",children:Object(g.jsxs)("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight",children:[Object(g.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),Object(g.jsx)("span",{className:"relative",children:(t=i.type,E[t]||"Unknown")})]})})]})},se=r(53),ne=r(54),ie=r.n(ne),oe=function(e){var t=e.children,r=Object(se.a)({onResize:ie()((function(e){var t=e.observe;(0,e.unobserve)(),t()}),500)}).observe;return Object(g.jsx)("div",{ref:r,className:"container mx-auto px-4 sm:px-8 max-w-3xl",children:Object(g.jsx)("div",{className:"py-4",children:Object(g.jsx)("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto",children:Object(g.jsx)("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden",children:t})})})})},le=r(17),de=r(35),be="#babcbc",he=Object(a.memo)((function(e){var t=e.data,r=e.price,c=e.projects,s=e.layer2,n=e.width,o=void 0===n?400:n,l=Object(a.useState)(null),d=Object(i.a)(l,2),b=d[0],h=d[1],m=s?3500:35e3,p=[],j=c.filter((function(e){return t[e].tvl>m})),x=c.filter((function(e){return!j.includes(e)})),f=[].concat(p,[{name:"Ethereum",color:"#747c84"}],Object(le.a)(j.map((function(e){return{name:e,color:ae[e].color}}))),[{name:"Others"}]),w=p.length,v=w+1,k=j.map((function(e,r){return{source:w,target:r+v,value:t[e].tvl,color:r<3?ae[e].color:be}})),N=x.reduce((function(e,r){return e+t[r].tvl}),0),A=[].concat(Object(le.a)(k),[{source:0,target:j.length+v,value:N,color:be}]).map((function(e,t){return Object(O.a)(Object(O.a)({},e),{},{opacity:b&&t===b.index?.6:.3})}));return Object(g.jsx)(de.b,{nodes:f,links:A,margin:{left:20,right:20,top:10,bottom:10},height:300,width:o,onLinkMouseOver:function(e){return h(e)},onLinkMouseOut:function(){return h(null)},children:b&&function(){var e=Object(y.a)({},"".concat(b.target.name),u()(b.value*r));return Object(g.jsx)(de.a,{value:e,align:{vertical:"top",horizontal:"left"},x:50,y:-50})}()})})),me=function(e){var t=e.text;return Object(g.jsxs)("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight",children:[Object(g.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),Object(g.jsx)("span",{className:"relative",children:t})]})},pe=r.p+"static/media/hole.58c9d202.svg",je=function(e){var t=e.ethUsdPrice,r=e.timestamp,a=1===t?"":"\u039e = $".concat(t),c=r&&"".concat(b("today",r)," ").concat(a);return Object(g.jsxs)("nav",{className:"flex bg-white flex-wrap items-center justify-between p-4",children:[Object(g.jsxs)("div",{className:"lg:order-2 w-auto lg:w-1/5 lg:text-center",children:[Object(g.jsx)("img",{className:"absolute hidden md:block md:mt-1 lg:ml-6",src:pe,width:24,height:24,alt:"ethhole.link"}),Object(g.jsx)("a",{className:"md:ml-6 lg:ml-2 text-xl text-gray-800 font-semibold font-heading pl-2",href:"/",children:"ETH Hole"})]}),Object(g.jsx)("div",{className:"block lg:hidden",children:Object(g.jsx)(me,{text:c})}),Object(g.jsx)("div",{className:"navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5",children:Object(g.jsx)(me,{text:c})}),Object(g.jsx)("div",{className:"navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right",children:Object(g.jsx)("a",{className:"block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600",target:"_blank",href:"https://github.com/gasolin/ethhole",rel:"noreferrer",children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200",viewBox:"0 0 1792 1792",children:Object(g.jsx)("path",{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"})})})})]})},xe=r(117),ue=r(118),ge=function(){return Object(g.jsx)("footer",{className:"px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200",children:Object(g.jsxs)("div",{className:"flex flex-col",children:[Object(g.jsx)("div",{className:"md:hidden mt-7 mx-auto w-11 h-px rounded-full"}),Object(g.jsxs)("div",{className:"mt-4 md:mt-0 flex flex-col md:flex-row",children:[Object(g.jsxs)("nav",{className:"flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5",children:[Object(g.jsx)("a",{"aria-current":"page",href:"http://gasolin.idv.tw/eth-milestone",className:"hover:text-gray-700 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:"Ethereum Milestone"}),Object(g.jsx)("a",{"aria-current":"page",href:"https://github.com/gasolin/ethhole/tree/main/src/data",className:"hover:text-gray-700 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:"Raw Data"}),Object(g.jsx)("a",{"aria-current":"page",href:"https://github.com/gasolin/ethhole/blob/main/src/data/bridge_contracts.js",className:"hover:text-gray-700 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:"List Your Project"})]}),Object(g.jsx)("div",{className:"md:hidden mt-4 mx-auto w-11 h-px rounded-full"}),Object(g.jsxs)("div",{className:"mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100",children:[Object(g.jsxs)("a",{className:"hover:text-primary-gray-20",href:"https://github.com/gasolin/ethhole",target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("span",{className:"sr-only",children:"View on GitHub"}),Object(g.jsx)(xe.a,{})]}),Object(g.jsxs)("a",{className:"ml-4 hover:text-primary-gray-20",href:"https://twitter.com/stakerwatch",target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("span",{className:"sr-only",children:"Twitter"}),Object(g.jsx)(ue.a,{})]})]}),Object(g.jsx)("div",{className:"md:hidden mt-4 mx-auto w-11 h-px rounded-full "}),Object(g.jsxs)("div",{className:"mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5",children:[Object(g.jsx)("span",{className:"",children:"\xa9 2021"}),Object(g.jsxs)("span",{className:"mt-7 md:mt-1",children:["Created by"," ",Object(g.jsx)("a",{className:"underline hover:text-primary-gray-20",href:"https://twitter.com/stakerwatch",target:"_blank",rel:"noreferrer",children:"@stakerwatch"})]}),Object(g.jsx)("span",{children:Object(g.jsx)("a",{className:"underline hover:text-primary-gray-20",href:"https://www.flaticon.com/free-icon/hole_595435?term=hole&related_id=595435",target:"_blank",rel:"noreferrer",children:"Logo credit freepik"})})]})]})]})})},fe=["ethereum","fuse"],we=function(e){var t,r=e.layer2,c=j(),s=Object(i.a)(c,2),o=s[0],l=s[1],d=Object(a.useState)(!1),b=Object(i.a)(d,2),h=b[0],m=b[1],p=Object.keys(o).filter((function(e){return!fe.includes(e)})).filter((function(e){return!r||ae[e].type!==N})).sort((function(e,t){return o[t].tvl-o[e].tvl})),x=h?1:(null===o||void 0===o||null===(t=o.ethereum)||void 0===t?void 0:t.usd)||1,u=h?"ETH":"USD",O=p.reduce((function(e,t){return e+o[t].tvl}),0);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(je,{ethUsdPrice:x,timestamp:l}),Object(g.jsx)(oe,{children:Object(g.jsx)(he,{projects:p,data:o,price:x,layer2:r})}),Object(g.jsx)(oe,{children:Object(g.jsxs)(f,{projects:p,tvl:O,price:x,children:[Object(g.jsxs)("div",{className:"mb-3 pr-2",children:[Object(g.jsxs)("div",{className:"relative inline-block w-10 mr-2 align-middle select-none",children:[Object(g.jsx)("input",{type:"checkbox",name:"toggle",id:"eth",onChange:function(){return m(!h)},checked:h,className:"checked:bg-purple-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}),Object(g.jsx)("label",{htmlFor:"eth",className:"block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]}),Object(g.jsxs)("span",{className:"text-gray-400 font-medium",children:[u," Equivalent"]})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsxs)("div",{className:"relative inline-block w-10 mr-2 align-middle select-none",children:[Object(g.jsx)("input",{type:"checkbox",name:"toggle",id:"strict",onChange:function(){return r?Object(n.navigate)("/"):Object(n.navigate)("/layer2")},checked:r,className:"checked:bg-purple-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}),Object(g.jsx)("label",{htmlFor:"strict",className:"block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]}),Object(g.jsx)("span",{className:"text-gray-400 font-medium",children:"Strict Mode"})]})]})}),Object(g.jsx)(oe,{children:Object(g.jsx)(w,{children:p.map((function(e){return Object(g.jsx)(ce,{price:x,name:e,data:o},e)}))})}),Object(g.jsx)(ge,{})]})},Oe=Object.keys(re),ye=function(e){var t=e.proj,r=Oe.includes(t)?re[t]:ae[t],a=[["Website",r.website],["Explorer",r.explorer],["Github",r.github],["Twitter",r.twitter]];return Object(g.jsxs)("div",{className:"bg-white overflow-hidden",children:[Object(g.jsx)("div",{className:"px-4 py-5 sm:px-6",children:Object(g.jsxs)("h3",{className:"text-lg leading-6 font-medium text-gray-900 flex flex-row",children:[r.color&&Object(g.jsx)("span",{children:Object(g.jsx)("a",{href:r.website,target:"_blank",className:"block relative pr-2",style:{color:r.color},rel:"noreferrer",children:"\u25cf"})})," ",t]})}),Object(g.jsx)("div",{className:"border-t border-gray-200",children:Object(g.jsx)("dl",{children:a.filter((function(e){return e[1]})).map((function(e,t){return Object(g.jsxs)("div",{className:"".concat(t%2?"bg-white":"bg-gray-50"," px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"),children:[Object(g.jsxs)("dt",{className:"text-sm font-medium text-gray-500",children:[e[0],":"]}),Object(g.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:Object(g.jsx)("a",{href:e[1],target:"_blank",rel:"noreferrer",className:"text-blue-500 underline whitespace-no-wrap",children:e[1]})})]},e[0])}))})})]})},ve=function(e){var t=e.children;return Object(g.jsxs)("table",{className:"min-w-full leading-normal",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",className:"px-5 py-3 bg-white  border-t border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal",children:"Token"}),Object(g.jsx)("th",{scope:"col",className:"px-5 py-3 bg-white  border-t border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal",children:"Value"}),Object(g.jsx)("th",{scope:"col",className:"px-5 py-3 bg-white  border-t border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal",children:"Type"})]})}),Object(g.jsx)("tbody",{children:t})]})},ke=function(e){var t=e.bridge,r=e.idx,a=e.tokenData,c=e.sum,s=a.contract_ticker_symbol,n=a.logo_url,i=a.contract_address,o=a.type,l="protocol"===o?"https://zapper.fi/dashboard?address=".concat(t):"https://etherscan.io/token/".concat(i,"?a=").concat(t);return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"".concat(r%2?"bg-white":"bg-gray-50"," px-5 py-5 border-b border-gray-200 bg-white text-sm"),children:Object(g.jsxs)("div",{className:"flex flex-row items-center",children:[Object(g.jsx)("img",{src:n,width:"14",height:"14"}),Object(g.jsx)("div",{className:"ml-3",children:Object(g.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",className:"text-blue-500 underline whitespace-no-wrap pl-2",children:s})})]})}),Object(g.jsx)("td",{className:"".concat(r%2?"bg-white":"bg-gray-50"," px-5 py-5 border-b border-gray-200 bg-white text-sm"),children:Object(g.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:c})}),Object(g.jsx)("td",{className:"".concat(r%2?"bg-white":"bg-gray-50"," px-5 py-5 border-b border-gray-200 bg-white text-sm"),children:"cryptocurrency"!==o&&Object(g.jsxs)("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight",children:[Object(g.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),Object(g.jsx)("span",{className:"relative",children:o})]})})]})},Ne=r(56),Ae=function(e){var t=e.project,r=e.tokens,a=e.price,c=e.width,s=void 0===c?400:c,n=[["Token","Parent","Value","Amount"],[t,null,0,0]].concat(Object(le.a)(r.filter((function(e){return"YLD"!==e.contract_ticker_symbol})).map((function(e){return[e.contract_ticker_symbol,t,e.quote,e.quote]}))));return Object(g.jsx)(Ne.a,{width:"".concat(s,"px"),height:"300px",chartType:"TreeMap",loader:Object(g.jsx)("div",{children:"Loading Chart"}),data:n,options:{minColor:"#9eebff",midColor:"#72bbd4",maxColor:"#5da3bf",headerHeight:15,fontColor:"black",showScale:!0,legend:"none",generateTooltip:function(e,t,r){return"<div>$".concat(u()(t*a),"</div>")}},rootProps:{"data-testid":"1"}})},De=function(e){var t,r=e.proj,a=j(),c=Object(i.a)(a,2),s=c[0],o=c[1];Object(n.useTitle)(r);var l=s[r];if(!l)return null;var d=(null===s||void 0===s||null===(t=s.ethereum)||void 0===t?void 0:t.usd)||1,b=1e3/d,h=l.tvl;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(je,{ethUsdPrice:d,timestamp:o}),Object(g.jsx)(oe,{children:Object(g.jsx)(ye,{proj:r})}),Object(g.jsx)(oe,{children:Object(g.jsx)(f,{price:d,tvl:h})}),l.bridges.map((function(e,t){var a,c,s,i=ae[r].bridges,o=e.items.filter((function(e){return e.quote>b})),l=(null===(a=i[t])||void 0===a?void 0:a.name)||"Bridge ".concat(t+1),h=(null===(c=i[t])||void 0===c?void 0:c.website)?Object(g.jsx)("a",{href:i[t].website,className:"text-blue-500 underline whitespace-no-wrap",target:"_blank",rel:"noreferrer",children:l}):Object(g.jsx)("span",{children:l}),m=null===(s=i[t])||void 0===s?void 0:s.project;return Object(g.jsxs)(oe,{children:[Object(g.jsx)("div",{className:"p-4 bg-white dark:bg-gray-800 border-b border-gray-200",children:Object(g.jsx)("div",{className:"flex items-center",children:Object(g.jsxs)("p",{className:"text-md text-black dark:text-white ml-2",children:[h," ",Object(g.jsx)("a",{href:"https://etherscan.io/address/".concat(e.address),target:"_blank",rel:"noreferrer",alt:"smart contract",children:"\ud83d\udcdd"})," ","(","$",u()(e.tvl*d),")",m&&Object(g.jsxs)(g.Fragment,{children:[" by ",Object(g.jsx)(n.A,{className:"text-blue-500 underline whitespace-no-wrap",href:"/liquidity/".concat(m),children:m})]})]})})}),Object(g.jsx)(Ae,{project:r,tokens:o,price:d}),Object(g.jsx)(ve,{children:o.map((function(t,r){var a=t.contract_ticker_symbol;return Object(g.jsx)(ke,{idx:r,tokenData:t,bridge:e.address,sum:"$".concat(u()(t.quote*d))},a)}))})]},t)})),Object(g.jsx)(ge,{})]})},Ce=function(e){var t,r=e.proj,a=j(),c=Object(i.a)(a,2),s=c[0],o=c[1];Object(n.useTitle)(r);var l=(null===s||void 0===s||null===(t=s.ethereum)||void 0===t?void 0:t.usd)||1;if(0===Object.keys(s).length)return null;var d=Object.keys(ae).map((function(e){return ae[e].bridges&&ae[e].bridges.filter((function(e){return e.project===r}))})).flat(1),b={};d.map((function(e){return b[e.address.toLowerCase()]=e}));var h=Object.keys(s).filter((function(e){return s[e]&&s[e].bridges})).map((function(e){return s[e].bridges.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{from:e})}))})).flat(1).filter((function(e){return b[e.address]}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(je,{ethUsdPrice:l,timestamp:o}),Object(g.jsx)(oe,{children:Object(g.jsx)(ye,{proj:r})}),Object(g.jsx)(oe,{children:Object(g.jsxs)("div",{className:"shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800",children:[Object(g.jsxs)("div",{className:"flex items-center",children:[Object(g.jsx)("span",{className:"rounded-xl relative p-4 bg-purple-200",children:Object(g.jsx)("svg",{width:"40",fill:"currentColor",height:"40",className:"text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"})})}),Object(g.jsx)("p",{className:"text-md text-black dark:text-white ml-2",children:"Total Value Tracked"})]}),Object(g.jsxs)("div",{className:"flex flex-col justify-start",children:[Object(g.jsxs)("p",{className:"text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4",children:["$"," ",u()(h.reduce((function(e,t){return e+t.tvl}),0)*l)]}),Object(g.jsx)("div",{className:"flex items-center text-green-500 text-sm"})]})]})}),h.map((function(e,t){var a;return Object(g.jsxs)(oe,{children:[Object(g.jsx)("div",{className:"p-4 bg-white dark:bg-gray-800 border-b border-gray-200",children:Object(g.jsx)("div",{className:"flex items-center",children:Object(g.jsxs)("p",{className:"text-md text-black dark:text-white ml-2",children:["\ud83d\udd0e ",Object(g.jsx)("a",{href:"https://etherscan.io/address/".concat(e.address),className:"text-blue-500 underline whitespace-no-wrap",target:"_blank",rel:"noreferrer",children:(null===(a=b[e.address])||void 0===a?void 0:a.name)||"Bridge ".concat(t+1)})," ","(","$",u()(e.tvl*l),") for ",Object(g.jsx)(n.A,{className:"text-blue-500 underline whitespace-no-wrap",href:"/project/".concat(e.from),children:e.from})]})})}),Object(g.jsx)(Ae,{project:r,tokens:e.items,price:l}),Object(g.jsx)(ve,{children:e.items.map((function(t,r){var a=t.contract_ticker_symbol;return Object(g.jsx)(ke,{idx:r,tokenData:t,bridge:e.address,sum:"".concat(a," $").concat(u()(t.quote*l))},a)}))})]},t)})),Object(g.jsx)(ge,{})]})},Fe={"/":function(){return Object(g.jsx)(we,{})},"/l2":function(){return Object(g.jsx)(we,{layer2:!0})},"/layer2":function(){return Object(g.jsx)(we,{layer2:!0})},"/liquidity/:proj":function(e){var t=e.proj;return Object(g.jsx)(Ce,{proj:t.replaceAll("%20"," ")})},"/project/:proj":function(e){var t=e.proj;return Object(g.jsx)(De,{proj:t.replaceAll("%20"," ")})}},Ee=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(oe,{children:"Project Not Found"}),Object(g.jsx)(ge,{})]})},Be=r(58);console.log("ethhole.link v",Be.a,"go https://github.com/gasolin/ethhole to learn more");var qe=function(){var e=Object(n.useRoutes)(Fe);return Object(g.jsx)("div",{className:"App",children:e||Object(g.jsx)(Ee,{})})},Ie=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,119)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),a(e),c(e),s(e),n(e)}))};s.a.render(Object(g.jsx)(qe,{}),document.getElementById("root")),Ie()},58:function(e){e.exports=JSON.parse('{"a":"0.6.1"}')},65:function(e,t,r){}},[[114,1,2]]]);
//# sourceMappingURL=main.18cee851.chunk.js.map
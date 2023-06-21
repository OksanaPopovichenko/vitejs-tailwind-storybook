import{r as d}from"./index-c013ead5.js";var i={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=d,f=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,_=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,o){var r,n={},l=null,a=null;o!==void 0&&(l=""+o),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)y.call(e,r)&&!x.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:f,type:t,key:l,ref:a,props:n,_owner:_.current}}u.Fragment=c;u.jsx=p;u.jsxs=p;i.exports=u;var b=i.exports;function s({primary:t=!1,size:e="medium",backgroundColor:o,label:r,...n}){const l=t?"bg-blue-500 text-white":"bg-transparent text-gray-800",a={small:"py-2 px-4 text-sm",medium:"py-3 px-6 text-base",large:"py-4 px-8 text-lg"};return b.jsx("button",{type:"button",className:`rounded-full cursor-pointer inline-block font-bold ${a[e]} ${l}`,style:{backgroundColor:o},...n,children:r})}try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{s as B,b as j};
//# sourceMappingURL=Button-2c66d348.js.map

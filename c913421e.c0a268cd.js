/*! For license information please see c913421e.c0a268cd.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(181),n(179)),i={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},l=[{value:"Try the Demo",id:"try-the-demo",children:[]},{value:"NPM module dependencies",id:"npm-module-dependencies",children:[{value:"Babel Plugin ordering (Caveat)",id:"babel-plugin-ordering-caveat",children:[]},{value:"Webpack Example",id:"webpack-example",children:[]}]},{value:"Build-time / offline processes",id:"build-time--offline-processes",children:[{value:"Collection",id:"collection",children:[]},{value:"Translation",id:"translation",children:[]},{value:"How to use these scripts",id:"how-to-use-these-scripts",children:[]}]},{value:"Runtime",id:"runtime",children:[{value:"Initialization",id:"initialization",children:[]}]}],c={rightToc:l},u="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"try-the-demo"},"Try the Demo"),Object(o.b)("p",null,"Check out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt"}),"Github")," repository and run the Webpack demo app.\nSee ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/tree/master/demo-app#building-and-starting-the-demo-app"}),'"Building and starting the demo app"')),Object(o.b)("h1",{id:"integrating-into-your-app"},"Integrating into your app"),Object(o.b)("h2",{id:"npm-module-dependencies"},"NPM module dependencies"),Object(o.b)("p",null,"The required NPM modules to add to your ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," in your app are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/fbt"}),Object(o.b)("strong",{parentName:"a"},"fbt"))," - The ",Object(o.b)("inlineCode",{parentName:"li"},"fbt")," runtime module"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-fbt"}),Object(o.b)("strong",{parentName:"a"},"babel-plugin-fbt"))," - The primary Babel transform"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-fbt-runtime"}),Object(o.b)("strong",{parentName:"a"},"babel-plugin-fbt-runtime"))," - The secondary Babel transform",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Transforms the raw payloads within ",Object(o.b)("inlineCode",{parentName:"li"},"fbt._(...)")," so they can be used at runtime (by ",Object(o.b)("inlineCode",{parentName:"li"},"fbt._"),")"),Object(o.b)("li",{parentName:"ul"},"NOTE: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/issues/125"}),"This plugin should get merged into ",Object(o.b)("inlineCode",{parentName:"a"},"babel-plugin-fbt")))))),Object(o.b)("p",null,"If you're unfamiliar with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/"}),"Babel"),", you can read through ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/"}),"their documentation here")),Object(o.b)("h3",{id:"babel-plugin-ordering-caveat"},"Babel Plugin ordering (Caveat)"),Object(o.b)("p",null,"There is a plugin ordering gotcha to be aware of if you use other Babel plugins.\nFBT expects to be the first plugin to visit its relevant ",Object(o.b)("inlineCode",{parentName:"p"},"<fbt>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fbt(...)")," nodes\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/issues/40"}),"See this Github issue tracking this")),Object(o.b)("p",null,"You'll hit issues if another transforms beats the ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt"),'\nto the Babel AST, node and transforms it such that the plugin doesn\'t\n"recognize" as an ',Object(o.b)("inlineCode",{parentName:"p"},"fbt")," node anymore.  This is most commonly on JSX nodes.\nTo work around this you can use Babel's ",Object(o.b)("inlineCode",{parentName:"p"},"passPerPreset")," option, and ensure ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt")," is in an earlier preset bundle:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"  babel.transformSync(source, {\n    passPerPreset: true,\n    {presets: [\n      {plugins: [\u2018babel-plugin-fbt\u2019, \u2018babel-plugin-fbt-runtime'...]}\n      {plugins: [\u2018babel-plugin-jsx-foo\u2019, ...]} //\n    ]},\n    ... // your other options\n  })\n")),Object(o.b)("h3",{id:"webpack-example"},"Webpack Example"),Object(o.b)("p",null,"You'll need to add the fbt babel transforms in a manner similar to our demo-app.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/543e0a9c5b5c74e2094da3b94e3828c1dccacb7a/demo-app/webpack.config.js#L54-L59"}),"See our demo-app's Webpack config")),Object(o.b)("h2",{id:"build-time--offline-processes"},"Build-time / offline processes"),Object(o.b)("h3",{id:"collection"},"Collection"),Object(o.b)("p",null,"There are scripts bundled into the ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt")," package that are desigend for collecting source text (and associated metadata) from your application's source.\nThese are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/master/packages/babel-plugin-fbt/bin/manifest.bin.js"}),"manifest")," -\nScans provided filesystem paths and generates a manifest of the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://facebook.github.io/fbt/docs/enums"}),"enumeration modules"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOTE"),": Enum modules must end in ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/3a5441708ca6b71c2c18fe5a952d1058a22306d1/packages/babel-plugin-fbt/bin/manifest.js#L66"}),"$FbtEnum.(js|jsx|ts|tsx)")," (i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"Foo$FbtEnum.js"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/master/packages/babel-plugin-fbt/bin/collectFBT.bin.js"}),"collectFBT")," -\nGiven source input, extract any source text and print them to STDOUT as JSON")),Object(o.b)("h3",{id:"translation"},"Translation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/master/packages/babel-plugin-fbt/bin/translate.bin.js"}),"translate")," -\nCreates translation payloads for runtime",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Takes extracted source text (from ",Object(o.b)("inlineCode",{parentName:"li"},"collectFBT"),") and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://facebook.github.io/fbt/docs/translating"}),"translations provided in JSON format")," to produce these payloads")))),Object(o.b)("h3",{id:"how-to-use-these-scripts"},"How to use these scripts"),Object(o.b)("p",null,"You can see how the demo-app ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/3a5441708ca6b71c2c18fe5a952d1058a22306d1/demo-app/package.json#L11-L14"}),"calls into these scripts here"),"."),Object(o.b)("p",null,"The demo app ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/3a5441708ca6b71c2c18fe5a952d1058a22306d1/demo-app/run_all.js"}),"runs all these in another script, here")),Object(o.b)("h2",{id:"runtime"},"Runtime"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/fbt"}),"fbt runtime")," is what resolves the translation payload table generated during the translation phase into a singular result base on all the input provided at runtime."),Object(o.b)("h3",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"fbt")," runtime requires that you initialize with your relevant translations via the ",Object(o.b)("inlineCode",{parentName:"p"},"init")," function.  You can see an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/98d0516290975f614737387748769e235bf61216/demo-app/src/example/Example.react.js#L16-L17"}),"example of this in the demo-app"),"."),Object(o.b)("p",null,"If you've split your translation payloads using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/98d0516290975f614737387748769e235bf61216/packages/babel-plugin-fbt/bin/translate.js#L145-L153"}),"the ",Object(o.b)("inlineCode",{parentName:"a"},"--output-dir")," option")," to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/master/packages/babel-plugin-fbt/bin/translate.js"}),Object(o.b)("inlineCode",{parentName:"a"},"translate")," script"),", you can still update locales on-the-fly after you've brought your payload in by updating the translation map held by ",Object(o.b)("inlineCode",{parentName:"p"},"fbt"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/98d0516290975f614737387748769e235bf61216/packages/babel-plugin-fbt/bin/translate.js#L178"}),"similar to the demo-app"),", or by calling into ",Object(o.b)("inlineCode",{parentName:"p"},"init")," with your new translations for your given locale again."))}b.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=i(n),p=r,s=b[l+"."+p]||b[p]||u[p]||o;return n?a.a.createElement(s,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113;a&&Symbol.for("react.suspense_list");var d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=N.prototype=new v;k.constructor=N,r(k,g.prototype),k.isPureReactComponent=!0;var w={current:null},C={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),b=0;b<c;b++)u[b]=arguments[b+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,P=[];function $(e,t,n,r){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function B(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+L(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var b=n+L(l=t[u],u);c+=e(l,b,r,a)}else if(null===t||"object"!=typeof t?b=null:b="function"==typeof(b=h&&t[h]||t["@@iterator"])?b:null,"function"==typeof b)for(t=b.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,b=n+L(l,u++),r,a);else if("object"===l)throw r=""+t,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),B(e,I,t=$(t,o,r,a)),R(t)}function A(){var e=w.current;if(null===e)throw Error(j(321));return e}var D={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;B(e,F,t=$(null,null,t,n)),R(t)},count:function(e){return B(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(j(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return A().useCallback(e,t)},useContext:function(e,t){return A().useContext(e,t)},useEffect:function(e,t){return A().useEffect(e,t)},useImperativeHandle:function(e,t,n){return A().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return A().useLayoutEffect(e,t)},useMemo:function(e,t){return A().useMemo(e,t)},useReducer:function(e,t,n){return A().useReducer(e,t,n)},useRef:function(e){return A().useRef(e)},useState:function(e){return A().useState(e)},Fragment:l,Profiler:u,StrictMode:c,Suspense:f,createElement:T,cloneElement:function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(b in t)S.call(t,b)&&!x.hasOwnProperty(b)&&(a[b]=void 0===t[b]&&void 0!==u?u[b]:t[b])}var b=arguments.length-2;if(1===b)a.children=n;else if(1<b){u=Array(b);for(var p=0;p<b;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},createFactory:function(e){var t=T.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},q={default:D},z=q&&D||q;e.exports=z.default||z},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var b in n=Object(arguments[u]))a.call(n,b)&&(c[b]=n[b]);if(r){l=r(n);for(var p=0;p<l.length;p++)o.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}}}]);
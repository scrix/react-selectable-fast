!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["React-Selectable-Fast"]=t(require("react")):e["React-Selectable-Fast"]=t(e.React)}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,t){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),l=["pageX","pageY","clientX","clientY"];function i(e,t){l.forEach((function(n){void 0===e[n]&&(e[n]=e[t][0][n])}))}function c(e){if(e.type.includes("mouse"))return e;try{"touchstart"===e.type?i(e,"targetTouches"):"touchmove"===e.type&&i(e,"changedTouches")}catch(e){alert(e.message)}return e}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(e.metaKey&&!n.allowMetaClick||e.ctrlKey&&!n.allowCtrlClick||e.altKey&&!n.allowAltClick||e.shiftKey&&!n.allowShiftClick)&&("buttons"in e?e.buttons===t:"which"in e?e.which===t:e.button===t-1)}function a(){return{documentScrollTop:Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),documentScrollLeft:Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft)}}function u(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{scrollTop:0,scrollLeft:0},n=t.scrollTop,o=t.scrollLeft,r=a(),l=r.documentScrollTop,i=r.documentScrollLeft,c=e.getClientRects(),s=[],u=0;u<c.length;u+=1)s.push({top:c[u].top+l+n,left:c[u].left+i+o,offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight,width:c[u].width,height:c[u].height});return s}var f=function(e,t,n){var o=n.tolerance,r=void 0===o?0:o,l=n.useOffsetSize,i=void 0!==l&&l,c=i?e.offsetHeight:e.height,s=i?t.offsetHeight:t.height,a=i?e.offsetWidth:e.width,u=i?t.offsetWidth:t.width;return!(e.top+c-r<t.top||e.top+r>t.top+s||e.left+a-r<t.left||e.left+r>t.left+u)};function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=e instanceof HTMLElement?u(e):e,l=t instanceof HTMLElement?u(t):t;return f(r,l,{tolerance:n,useOffsetSize:1===o})}function d(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}var h=function(){},y=r.a.createContext({selectable:{register:function(e){},unregister:function(e){},selectAll:h,clearSelection:h,getScrolledContainer:function(){return null}}});function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){function t(){var e,n;b(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return C(w(n=g(this,(e=S(t)).call.apply(e,[this].concat(r)))),"state",{y:0,x:0,width:0,height:0,isSelecting:!1}),C(w(n),"selectbox",null),C(w(n),"getRef",(function(){return n.selectbox})),C(w(n),"getSelectboxRef",(function(e){n.selectbox=e})),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.fixedPosition,n=e.className,o={left:this.state.x,top:this.state.y,width:this.state.width,height:this.state.height,zIndex:9e3,position:t?"fixed":"absolute",cursor:"default"};return r.a.createElement("div",null,this.state.isSelecting&&r.a.createElement("div",{ref:this.getSelectboxRef,style:o,className:n}))}}])&&v(n.prototype,o),l&&v(n,l),t}(o.Component);C(x,"defaultProps",{className:"selectable-selectbox"});var k=x;function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?R(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(){var e,n;_(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return B(R(n=T(this,(e=D(t)).call.apply(e,[this].concat(r)))),"state",{selectionMode:!1}),B(R(n),"mouseDownStarted",!1),B(R(n),"mouseMoveStarted",!1),B(R(n),"mouseMoved",!1),B(R(n),"mouseUpStarted",!1),B(R(n),"selectionStarted",!1),B(R(n),"deselectionStarted",!1),B(R(n),"clickedItem",void 0),B(R(n),"mouseDownData",{selectboxY:0,selectboxX:0,target:null}),B(R(n),"registry",new Set),B(R(n),"selectedItems",new Set),B(R(n),"selectingItems",new Set),B(R(n),"ignoreCheckCache",new Map),B(R(n),"ignoreList",n.props.ignoreList.concat([".selectable-select-all",".selectable-deselect-all"])),B(R(n),"ignoreListNodes",[]),B(R(n),"selectbox",null),B(R(n),"selectableGroup",null),B(R(n),"scrollContainer",null),B(R(n),"maxScrollTop",0),B(R(n),"maxScrollLeft",0),B(R(n),"scrollBounds",null),B(R(n),"updateRegistry",(function(){var e={scrollTop:n.scrollContainer.scrollTop,scrollLeft:n.scrollContainer.scrollLeft},t=!0,o=!1,r=void 0;try{for(var l,i=n.registry.values()[Symbol.iterator]();!(t=(l=i.next()).done);t=!0){l.value.registerSelectable(e)}}catch(e){o=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(o)throw r}}})),B(R(n),"registerSelectable",(function(e){n.registry.add(e),e.state.isSelected&&n.selectedItems.add(e)})),B(R(n),"unregisterSelectable",(function(e){n.registry.delete(e);var t=n.selectedItems.has(e)||n.selectingItems.has(e);n.selectedItems.delete(e),n.selectingItems.delete(e),t&&n.props.onSelectionFinish(I(n.selectedItems))})),B(R(n),"updateContainerScroll",(function(e){var t=n.scrollContainer,o=t.scrollTop,r=t.scrollLeft;n.checkScrollTop(e.clientY,o),n.checkScrollBottom(e.clientY,o),n.checkScrollLeft(e.clientX,r),n.checkScrollRight(e.clientX,r)})),B(R(n),"getScrollStep",(function(e){var t=n.props,o=t.minimumSpeedFactor,r=t.scrollSpeed;return Math.max(e,o)*r})),B(R(n),"checkScrollTop",(function(e,t){var o=n.scrollBounds.top-e;(o>0||e<0)&&(n.scrollContainer.scrollTop=t-n.getScrollStep(o))})),B(R(n),"checkScrollBottom",(function(e,t){var o=e-n.scrollBounds.bottom;if(o>0||e>window.innerHeight){var r=t+n.getScrollStep(o);n.scrollContainer.scrollTop=Math.min(r,n.maxScrollTop)}})),B(R(n),"checkScrollLeft",(function(e,t){var o=n.scrollBounds.left-e;if(o>0||e<0){var r=t-n.getScrollStep(o);n.scrollContainer.scrollLeft=r}})),B(R(n),"checkScrollRight",(function(e,t){var o=e-n.scrollBounds.right;if(o>0||e>window.innerWidth){var r=t+n.getScrollStep(o);n.scrollContainer.scrollLeft=Math.min(r,n.maxScrollLeft)}})),B(R(n),"updateSelectBox",(function(e){var t=c(e);if(n.updateContainerScroll(t),!n.mouseMoveStarted){n.mouseMoveStarted=!0,n.mouseMoved=!0;var o=R(n).mouseDownData,r=t.clientX,l=t.clientY,i=n.scrollContainer,s=i.scrollLeft,a=i.scrollTop,u=l-n.scrollBounds.top+a,f=Math.min(u,o.selectboxY),p=r-n.scrollBounds.left+s,d=Math.min(p,o.selectboxX);n.selectbox.setState({x:d,y:f,isSelecting:!0,width:Math.abs(p-o.selectboxX),height:Math.abs(u-o.selectboxY)},(function(){n.updateSelecting(),n.props.duringSelection(I(n.selectingItems)),n.mouseMoveStarted=!1}))}})),B(R(n),"updateSelecting",(function(){var e=n.selectbox.getRef();if(e){var t=u(e);n.selectItems(P({},t[0],{offsetWidth:t[0].offsetWidth||1,offsetHeight:t[0].offsetHeight||1}))}})),B(R(n),"selectItems",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.props,r=o.tolerance,l=o.enableDeselect,i=o.mixedDeselect;e.top+=n.scrollContainer.scrollTop,e.left+=n.scrollContainer.scrollLeft;var c=!0,s=!1,a=void 0;try{for(var u,f=n.registry.values()[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var p=u.value;n.processItem({item:p,selectboxBounds:e,tolerance:r,mixedDeselect:i,enableDeselect:l,isFromClick:t&&t.isFromClick})}}catch(e){s=!0,a=e}finally{try{c||null==f.return||f.return()}finally{if(s)throw a}}})),B(R(n),"clearSelection",(function(){var e=!0,t=!1,o=void 0;try{for(var r,l=n.selectedItems.values()[Symbol.iterator]();!(e=(r=l.next()).done);e=!0){var i=r.value;i.setState({isSelected:!1}),n.selectedItems.delete(i)}}catch(e){t=!0,o=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw o}}n.setState({selectionMode:!1}),n.props.onSelectionFinish(I(n.selectedItems)),n.props.onSelectionClear()})),B(R(n),"selectAll",(function(){n.updateWhiteListNodes();var e=!0,t=!1,o=void 0;try{for(var r,l=n.registry.values()[Symbol.iterator]();!(e=(r=l.next()).done);e=!0){var i=r.value;n.isInIgnoreList(i.node)||i.state.isSelected||(i.setState({isSelected:!0}),n.selectedItems.add(i))}}catch(e){t=!0,o=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw o}}n.setState({selectionMode:!0}),n.props.onSelectionFinish(I(n.selectedItems))})),B(R(n),"mouseDown",(function(e){var t=!e.type.includes("touch")&&!s(e,1,{allowAltClick:n.props.allowAltClick,allowCtrlClick:n.props.allowCtrlClick,allowMetaClick:n.props.allowMetaClick,allowShiftClick:n.props.allowShiftClick});if(!(n.mouseDownStarted||n.props.disabled||t))if(n.updateWhiteListNodes(),n.isInIgnoreList(e.target))n.mouseDownStarted=!1;else{n.props.resetOnStart&&n.clearSelection(),n.mouseDownStarted=!0,n.mouseUpStarted=!1;var o=c(e);if(!n.props.globalMouse&&!d(o.target,n.selectableGroup)){var r=E(u(n.selectableGroup),1)[0];if(!p({top:r[0].top,left:r[0].left,width:0,height:0,offsetHeight:r[0].offsetHeight,offsetWidth:r[0].offsetWidth},{top:o.pageY,left:o.pageX,width:0,height:0,offsetWidth:0,offsetHeight:0}))return}n.updateRootBounds(),n.updateRegistry(),n.mouseDownData={target:o.target,selectboxY:o.clientY-n.scrollBounds.top+n.scrollContainer.scrollTop,selectboxX:o.clientX-n.scrollBounds.left+n.scrollContainer.scrollLeft},o.preventDefault(),document.addEventListener("mousemove",n.updateSelectBox),document.addEventListener("touchmove",n.updateSelectBox),document.addEventListener("mouseup",n.mouseUp),document.addEventListener("touchend",n.mouseUp)}})),B(R(n),"mouseUp",(function(e){if(!n.mouseUpStarted&&(n.mouseUpStarted=!0,n.mouseDownStarted=!1,n.removeTempEventListeners(),n.mouseDownData)){var t=c(e),o=t.pageX,r=t.pageY;if(!n.mouseMoved&&d(t.target,n.selectableGroup))n.handleClick(t,r,o);else{var l=!0,i=!1,s=void 0;try{for(var a,u=n.selectingItems.values()[Symbol.iterator]();!(l=(a=u.next()).done);l=!0){a.value.setState({isSelected:!0,isSelecting:!1})}}catch(e){i=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(i)throw s}}n.selectedItems=new Set([].concat(I(n.selectedItems),I(n.selectingItems))),n.selectingItems.clear(),1===t.which&&n.mouseDownData.target===t.target&&n.preventEvent(t.target,"click"),n.selectbox.setState({isSelecting:!1,width:0,height:0}),n.props.onSelectionFinish(I(n.selectedItems))}n.toggleSelectionMode(),n.cleanUp(),n.mouseMoved=!1}})),B(R(n),"keyListener",(function(e){27===e.keyCode&&n.clearSelection()})),B(R(n),"getGroupRef",(function(e){n.selectableGroup=e})),B(R(n),"getSelectboxRef",(function(e){n.selectbox=e})),B(R(n),"defaultContainerStyle",{position:"relative"}),B(R(n),"contextValue",{selectable:{register:n.registerSelectable,unregister:n.unregisterSelectable,selectAll:n.selectAll,clearSelection:n.clearSelection,getScrolledContainer:function(){return n.scrollContainer}}}),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.scrollContainer?this.scrollContainer=document.querySelector(this.props.scrollContainer):this.scrollContainer=this.selectableGroup,this.selectableGroup.addEventListener("mousedown",this.mouseDown),this.selectableGroup.addEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.addEventListener("keydown",this.keyListener),document.addEventListener("keyup",this.keyListener))}},{key:"componentWillUnmount",value:function(){this.selectableGroup.removeEventListener("mousedown",this.mouseDown),this.selectableGroup.removeEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.removeEventListener("keydown",this.keyListener),document.removeEventListener("keyup",this.keyListener)),this.removeTempEventListeners()}},{key:"removeTempEventListeners",value:function(){document.removeEventListener("mousemove",this.updateSelectBox),document.removeEventListener("touchmove",this.updateSelectBox),document.removeEventListener("mouseup",this.mouseUp),document.removeEventListener("touchend",this.mouseUp)}},{key:"updateRootBounds",value:function(){this.scrollBounds=this.scrollContainer.getBoundingClientRect(),this.maxScrollTop=this.scrollContainer.scrollHeight-this.scrollContainer.clientHeight,this.maxScrollLeft=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth}},{key:"toggleSelectionMode",value:function(){var e=this.selectedItems,t=this.state.selectionMode;e.size&&!t&&this.setState({selectionMode:!0}),!e.size&&t&&this.setState({selectionMode:!1})}},{key:"processItem",value:function(e){var t=this,n=e.item,o=e.tolerance,r=e.selectboxBounds,l=e.enableDeselect,i=e.mixedDeselect,c=e.isFromClick;if(this.isInIgnoreList(n.node))return null;var s=n.bounds.some((function(e){return p(r,e,o,t.props.delta)})),a=n.state,u=a.isSelecting,f=a.isSelected;if(c&&s)return f?this.selectedItems.delete(n):this.selectedItems.add(n),n.setState({isSelected:!f}),this.clickedItem=n;if(!c&&s){if(f&&l&&(!this.selectionStarted||i))return n.setState({isSelected:!1}),n.deselected=!0,this.deselectionStarted=!0,this.selectedItems.delete(n);var d=i?!n.deselected:!this.deselectionStarted;if(!u&&!f&&d)return n.setState({isSelecting:!0}),this.selectionStarted=!0,this.selectingItems.add(n),{updateSelecting:!0}}return!c&&!s&&u&&this.selectingItems.has(n)?(n.setState({isSelecting:!1}),this.selectingItems.delete(n),{updateSelecting:!0}):null}},{key:"isInIgnoreList",value:function(e){if(e){if(void 0!==this.ignoreCheckCache.get(e))return this.ignoreCheckCache.get(e);var t=this.ignoreListNodes.some((function(t){return e===t||t.contains(e)}));return this.ignoreCheckCache.set(e,t),t}}},{key:"updateWhiteListNodes",value:function(){this.ignoreListNodes=Array.from(document.querySelectorAll(this.ignoreList.join(", ")))}},{key:"preventEvent",value:function(e,t){e.addEventListener(t,(function n(o){e.removeEventListener(t,n,!0),o.preventDefault(),o.stopPropagation()}),!0)}},{key:"handleClick",value:function(e,t,n){if(this.props.selectOnClick){var o=this.props,r=o.clickClassName,l=o.allowClickWithoutSelected,i=o.onSelectionFinish,c=e.target.classList||[],s=Array.from(c).indexOf(r)>-1;(l||this.selectedItems.size||s||e.ctrlKey)&&(this.selectItems({top:t,left:n,width:0,height:0,offsetWidth:0,offsetHeight:0},{isFromClick:!0}),i(I(this.selectedItems),this.clickedItem),1===e.which&&this.preventEvent(e.target,"click"),2!==e.which&&3!==e.which||this.preventEvent(e.target,"contextmenu"))}}},{key:"cleanUp",value:function(){if(this.deselectionStarted=!1,this.selectionStarted=!1,this.props.mixedDeselect){var e=!0,t=!1,n=void 0;try{for(var o,r=this.registry.values()[Symbol.iterator]();!(e=(o=r.next()).done);e=!0)o.value.deselected=!1}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}}},{key:"render",value:function(){var e=this.state.selectionMode,t=this.props,n=t.component,o=void 0===n?"div":n,l=t.className,i=t.style,c=t.selectionModeClass,s=t.fixedPosition,a=t.selectboxClassName,u=t.children;return r.a.createElement(y.Provider,{value:this.contextValue},r.a.createElement(o,{ref:this.getGroupRef,style:Object.assign({},this.defaultContainerStyle,i),className:"".concat(l," ").concat(e?c:"")},r.a.createElement(k,{ref:this.getSelectboxRef,className:a,fixedPosition:s}),u))}}])&&M(n.prototype,o),l&&M(n,l),t}(o.Component);B(N,"defaultProps",{clickClassName:"",tolerance:0,globalMouse:!1,ignoreList:[],scrollSpeed:.25,minimumSpeedFactor:60,duringSelection:h,onSelectionFinish:h,onSelectionClear:h,allowClickWithoutSelected:!0,selectionModeClass:"in-selection-mode",resetOnStart:!1,disabled:!1,deselectOnEsc:!0,fixedPosition:!1,delta:1,allowAltClick:!1,allowCtrlClick:!1,allowMetaClick:!1,allowShiftClick:!1,selectOnClick:!0});var W=N;function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function X(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?z(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(e){var t,n;return n=t=function(t){function n(){var e,t;G(this,n);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return q(z(t=X(this,(e=Y(n)).call.apply(e,[this].concat(r)))),"state",{isSelected:t.props.isSelected,isSelecting:!1}),q(z(t),"node",null),q(z(t),"bounds",null),q(z(t),"registerSelectable",(function(e){t.bounds=u(t.node,e),t.context.selectable.register(z(t))})),q(z(t),"getSelectableRef",(function(e){t.node=e})),t}var o,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(n,t),o=n,(l=[{key:"componentDidMount",value:function(){this.registerSelectable()}},{key:"componentWillUnmount",value:function(){this.context.selectable.unregister(this)}},{key:"render",value:function(){return r.a.createElement(e,F({},this.props,this.state,{selectableRef:this.getSelectableRef}))}}])&&U(o.prototype,l),i&&U(o,i),n}(o.Component),q(t,"contextType",y),q(t,"defaultProps",{isSelected:!1}),n};function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function te(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?oe(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie=function(e){function t(){var e,n;$(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return le(oe(n=te(this,(e=ne(t)).call.apply(e,[this].concat(r)))),"root",null),le(oe(n),"getRootRef",(function(e){n.root=e})),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.root.addEventListener("mousedown",(function(e){return e.stopPropagation()}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=void 0===t?"div":t,o=e.children,l=e.className,i=void 0===l?"":l,c=Z(e,["component","children","className"]);return r.a.createElement(n,Q({ref:this.getRootRef,className:"selectable-select-all ".concat(i),onClick:this.context.selectable.selectAll},c),o)}}])&&ee(n.prototype,o),l&&ee(n,l),t}(o.Component);le(ie,"contextType",y);var ce=ie;function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function fe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function de(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?ye(e):t}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ve=function(e){function t(){var e,n;fe(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return be(ye(n=de(this,(e=he(t)).call.apply(e,[this].concat(r)))),"root",null),be(ye(n),"getRootRef",(function(e){n.root=e})),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.root.addEventListener("mousedown",(function(e){return e.stopPropagation()}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=void 0===t?"div":t,o=e.children,l=e.className,i=ue(e,["component","children","className"]);return r.a.createElement(n,ae({ref:this.getRootRef,className:"selectable-select-all ".concat(l),onClick:this.context.selectable.clearSelection},i),o)}}])&&pe(n.prototype,o),l&&pe(n,l),t}(o.Component);be(ve,"contextType",y);var ge=ve,Se=n(1);n.d(t,"TSelectableItemProps",(function(){return Se.TSelectableItemProps})),n.d(t,"SelectableGroup",(function(){return W})),n.d(t,"createSelectable",(function(){return V})),n.d(t,"SelectAll",(function(){return ce})),n.d(t,"DeselectAll",(function(){return ge}))}])}));
//# sourceMappingURL=react-selectable-fast.js.map
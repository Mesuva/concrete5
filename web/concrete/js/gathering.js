!function(a){"use strict";function b(a){return RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")}),a.classie={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c}}(window),function(a){"use strict";function b(){}function c(a,b){if(e)return b.indexOf(a);for(var c=b.length;c--;)if(b[c]===a)return c;return-1}var d=b.prototype,e=Array.prototype.indexOf?!0:!1;d._getEvents=function(){return this._events||(this._events={})},d.getListeners=function(a){var b=this._getEvents();return b[a]||(b[a]=[])},d.addListener=function(a,b){var d=this.getListeners(a);return-1===c(b,d)&&d.push(b),this},d.on=d.addListener,d.removeListener=function(a,b){var d=this.getListeners(a),e=c(b,d);return-1!==e&&(d.splice(e,1),0===d.length&&this.removeEvent(a)),this},d.off=d.removeListener,d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"==typeof b)for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));else for(d=c.length;d--;)f.call(this,b,c[d]);return this},d.removeEvent=function(a){return a?delete this._getEvents()[a]:delete this._events,this},d.emitEvent=function(a,b){for(var c,d=this.getListeners(a),e=d.length;e--;)c=b?d[e].apply(null,b):d[e](),c===!0&&this.removeListener(a,d[e]);return this},d.trigger=d.emitEvent,d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},"function"==typeof define&&define.amd?define(function(){return b}):a.EventEmitter=b}(this),function(a){"use strict";var b=document.documentElement,c=function(){};b.addEventListener?c=function(a,b,c){a.addEventListener(b,c,!1)}:b.attachEvent&&(c=function(b,c,d){b[c+d]=d.handleEvent?function(){var b=a.event;b.target=b.target||b.srcElement,d.handleEvent.call(d,b)}:function(){var c=a.event;c.target=c.target||c.srcElement,d.call(b,c)},b.attachEvent("on"+c,b[c+d])});var d=function(){};b.removeEventListener?d=function(a,b,c){a.removeEventListener(b,c,!1)}:b.detachEvent&&(d=function(a,b,c){a.detachEvent("on"+b,a[b+c]),delete a[b+c]});var e={bind:c,unbind:d};"function"==typeof define&&define.amd?define(e):a.eventie=e}(this),function(a){"use strict";function b(a){b.isReady?a():b.on("ready",a)}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||(b.isReady=!0,b.emit("ready",a))}var d=a.EventEmitter,e=a.eventie,f=a.document;b.isReady=!1;for(var g in d.prototype)b[g]=d.prototype[g];e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c),a.docReady=b}(this),function(a){"use strict";function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return b}):a.getStyleProperty=b}(window),function(a){"use strict";function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var i={};i.width=a.offsetWidth,i.height=a.offsetHeight;for(var j=i.isBorderBox=!(!h||!d[h]||"border-box"!==d[h]),k=0,l=g.length;l>k;k++){var m=g[k],n=d[m],o=parseFloat(n);i[m]=isNaN(o)?0:o}var p=i.paddingLeft+i.paddingRight,q=i.paddingTop+i.paddingBottom,r=i.marginLeft+i.marginRight,s=i.marginTop+i.marginBottom,t=i.borderLeftWidth+i.borderRightWidth,u=i.borderTopWidth+i.borderBottomWidth,v=j&&e,w=b(d.width);w!==!1&&(i.width=w+(v?0:p+t));var x=b(d.height);return x!==!1&&(i.height=x+(v?0:q+u)),i.innerWidth=i.width-(p+t),i.innerHeight=i.height-(q+u),i.outerWidth=i.width+r,i.outerHeight=i.height+s,i}}var e,h=a("boxSizing");return function(){if(h){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[h]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);e=200===b(d.width),c.removeChild(a)}}(),d}var e=document.defaultView,f=e&&e.getComputedStyle?function(a){return e.getComputedStyle(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property"],d):a.getSize=d(a.getStyleProperty)}(window),function(a,b){"use strict";function c(){}function d(a){a.prototype.option||(a.prototype.option=function(a){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))})}function e(a,c){b.fn[a]=function(d){if("string"==typeof d){for(var e=f.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=b.data(j,a);if(k)if(b.isFunction(k[d])&&"_"!==d.charAt(0)){var l=k[d].apply(k,e);if(void 0!==l)return l}else g("no such method '"+d+"' for "+a+" instance");else g("cannot call methods on "+a+" prior to initialization; attempted to call '"+d+"'")}return this}return this.each(function(){var e=b.data(this,a);e?(e.option(d),e._init()):(e=new c(this,d),b.data(this,a,e))})}}if(b){var f=Array.prototype.slice,g="undefined"==typeof console?c:function(a){console.error(a)};b.bridget=function(a,b){d(b),e(a,b)}}}(window,window.jQuery),function(a,b){"use strict";function c(a,b){return a[h](b)}function d(a){var b=document.createDocumentFragment();b.appendChild(a)}function e(a,b){a.parentNode||d(a);for(var c=a.parentNode.querySelectorAll(b),e=0,f=c.length;f>e;e++)if(c[e]===a)return!0;return!1}function f(a,b){return a.parentNode||d(a),c(a,b)}var g,h=function(){for(var a=["matchesSelector","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],c=0,d=a.length;d>c;c++){var e=a[c];if(b[e])return e}}();if(h){var i=document.createElement("div"),j=c(i,"div");g=j?c:f}else g=e;"function"==typeof define&&define.amd?define(function(){return g}):window.matchesSelector=g}(this,Element.prototype),function(a){"use strict";function b(a){for(var c in b.defaults)this[c]=b.defaults[c];for(c in a)this[c]=a[c]}var c=a.Packery=function(){};c.Rect=b,b.defaults={x:0,y:0,width:0,height:0},b.prototype.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.prototype.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return d>this.x&&b>a.x&&e>this.y&&c>a.y},b.prototype.getMaximalFreeRects=function(a){if(!this.overlaps(a))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=a.x+a.width,h=a.y+a.height;return this.y<a.y&&(c=new b({x:this.x,y:this.y,width:this.width,height:a.y-this.y}),d.push(c)),e>g&&(c=new b({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new b({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<a.x&&(c=new b({x:this.x,y:this.y,width:a.x-this.x,height:this.height}),d.push(c)),d},b.prototype.canFit=function(a){return this.width>=a.width&&this.height>=a.height}}(window),function(a){"use strict";function b(a,b){this.width=a||0,this.height=b||0,this.reset()}var c=a.Packery,d=c.Rect;b.prototype.reset=function(){this.spaces=[],this.newSpaces=[];var a=new d({x:0,y:0,width:this.width,height:this.height});this.spaces.push(a)},b.prototype.pack=function(a){for(var b=0,c=this.spaces.length;c>b;b++){var d=this.spaces[b];if(d.canFit(a)){this.placeInSpace(a,d);break}}},b.prototype.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},b.prototype.placed=function(a){for(var c=[],d=0,e=this.spaces.length;e>d;d++){var f=this.spaces[d],g=f.getMaximalFreeRects(a);g?c.push.apply(c,g):c.push(f)}this.spaces=c,b.mergeRects(this.spaces),this.spaces.sort(b.spaceSorterTopLeft)},b.mergeRects=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(d){var e=a.slice(0);e.splice(b,1);for(var f=0,g=0,h=e.length;h>g;g++){var i=e[g],j=b>g?0:1;d.contains(i)&&(a.splice(g+j-f,1),f++)}}}return a},b.spaceSorterTopLeft=function(a,b){return a.y-b.y||a.x-b.x},b.spaceSorterLeftTop=function(a,b){return a.x-b.x||a.y-b.y},c.Packer=b}(window),function(a){"use strict";function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a,b){this.element=a,this.packery=b,this.position={x:0,y:0},this.rect=new e,this.placeRect=new e,this.element.style.position="absolute"}var d=a.Packery,e=d.Rect,f=a.getSize,g=a.getStyleProperty,h=a.EventEmitter,i=document.defaultView,j=i&&i.getComputedStyle?function(a){return i.getComputedStyle(a,null)}:function(a){return a.currentStyle},k=g("transition"),l=g("transform"),m=k&&l,n=!!g("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",OTransform:"-o-transform",transform:"transform"}[l];b(c.prototype,h.prototype),c.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},c.prototype.getSize=function(){this.size=f(this.element)},c.prototype.css=function(a){var b=this.element.style;for(var c in a)b[c]=a[c]},c.prototype.getPosition=function(){var a=j(this.element),b=parseInt(a.left,10),c=parseInt(a.top,10);b=isNaN(b)?0:b,c=isNaN(c)?0:c;var d=this.packery.elementSize;b-=d.paddingLeft,c-=d.paddingTop,this.position.x=b,this.position.y=c};var q=n?function(a,b){return"translate3d( "+a+"px, "+b+"px, 0)"}:function(a,b){return"translate( "+a+"px, "+b+"px)"};c.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j[p]=q(h,i),this.transition(j,this.layoutPosition)},c.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},c.prototype.moveTo=m?c.prototype._transitionTo:c.prototype.goTo,c.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},c.prototype.layoutPosition=function(){var a=this.packery.elementSize;this.css({left:this.position.x+a.paddingLeft+"px",top:this.position.y+a.paddingTop+"px"}),this.emitEvent("layout",[this])},c.prototype._nonTransition=function(a,b){this.css(a),b&&b.call(this)},c.prototype._transition=function(a,b){this.transitionStyle=a;var c=[];for(var d in a)c.push(d);var e={};e[k+"Property"]=c.join(","),e[k+"Duration"]=this.packery.options.transitionDuration,this.element.addEventListener(o,this,!1),b&&this.on("transitionEnd",function(a){return b.call(a),!0}),this.css(e),this.css(a),this.isTransitioning=!0},c.prototype.transition=c.prototype[k?"_transition":"_nonTransition"],c.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},c.prototype.onotransitionend=function(a){this.ontransitionend(a)},c.prototype.ontransitionend=function(a){if(a.target===this.element){this.onTransitionEnd&&(this.onTransitionEnd(),delete this.onTransitionEnd),this.removeTransitionStyles();var b={};for(var c in this.transitionStyle)b[c]="";this.css(b),this.element.removeEventListener(o,this,!1),delete this.transitionStyle,this.isTransitioning=!1,this.emitEvent("transitionEnd",[this])}},c.prototype.removeTransitionStyles=function(){var a={};a[k+"Property"]="",a[k+"Duration"]="",this.css(a)},c.prototype.remove=function(){var a={opacity:0};a[p]="scale(0.001)",this.transition(a,this.removeElem)},c.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},c.prototype.reveal=k?function(){var a={opacity:0};a[p]="scale(0.001)",this.css(a);var b=this.element.offsetHeight,c={opacity:1};c[p]="scale(1)",this.transition(c),b=null}:function(){},c.prototype.destroy=function(){this.css({position:"",left:"",top:""})},c.prototype.dragStart=function(){this.getPosition(),this.removeTransitionStyles(),this.isTransitioning&&l&&(this.element.style[l]="none"),this.getSize(),this.isPlacing=!0,this.needsPositioning=!1,this.positionPlaceRect(this.position.x,this.position.y),this.isTransitioning=!1,this.didDrag=!1},c.prototype.dragMove=function(a,b){this.didDrag=!0;var c=this.packery.elementSize;a-=c.paddingLeft,b-=c.paddingTop,this.positionPlaceRect(a,b)},c.prototype.dragStop=function(){this.getPosition();var a=this.position.x!==this.placeRect.x,b=this.position.y!==this.placeRect.y;this.needsPositioning=a||b,this.didDrag=!1},c.prototype.positionPlaceRect=function(a,b,c){this.placeRect.x=this.getPlaceRectCoord(a,!0),this.placeRect.y=this.getPlaceRectCoord(b,!1,c)},c.prototype.getPlaceRectCoord=function(a,b,c){var d=b?"Width":"Height",e=this.size["outer"+d],f=this.packery[b?"columnWidth":"rowHeight"],g=this.packery.elementSize["inner"+d];b||(g=Math.max(g,this.packery.maxY),this.packery.rowHeight||(g-=this.packery.gutter));var h;if(f){f+=this.packery.gutter,g+=b?this.packery.gutter:0,a=Math.round(a/f);var i=Math[b?"floor":"ceil"](g/f);i-=Math.ceil(e/f),h=i}else h=g-e;return a=c?a:Math.min(a,h),a*=f||1,Math.max(0,a)},c.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y},d.Item=c}(window),function(a){"use strict";function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){var b=[];if("number"==typeof a.length)for(var c=0,d=a.length;d>c;c++)b.push(a[c]);else b.push(a);return b}function d(a,c){if(!a||!r(a))return void(p&&p.error("bad Packery element: "+a));this.element=a,this.options=b({},this.options),b(this.options,c);var d=++t;this.element.packeryGUID=d,u[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var e=a.Packery,f=e.Rect,g=e.Packer,h=e.Item,i=a.classie,j=a.docReady,k=a.EventEmitter,l=a.eventie,m=a.getSize,n=a.matchesSelector,o=a.document,p=a.console,q=a.jQuery,r="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},s=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},t=0,u={};b(d.prototype,k.prototype),d.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isResizeBound:!0,transitionDuration:"0.4s"},d.prototype._create=function(){this.packer=new g,this.reloadItems(),this.stampedElements=[],this.stamp(this.options.stamped);var a=this.options.containerStyle;b(this.element.style,a),this.options.isResizeBound&&this.bindResize();var c=this;this.handleDraggabilly={dragStart:function(a){c.itemDragStart(a.element)},dragMove:function(a){c.itemDragMove(a.element,a.position.x,a.position.y)},dragEnd:function(a){c.itemDragEnd(a.element)}},this.handleUIDraggable={start:function(a){c.itemDragStart(a.currentTarget)},drag:function(a,b){c.itemDragMove(a.currentTarget,b.position.left,b.position.top)},stop:function(a){c.itemDragEnd(a.currentTarget)}}},d.prototype.reloadItems=function(){this.items=this._getItems(this.element.children)},d.prototype._getItems=function(a){for(var b=this._filterFindItemElements(a),c=[],d=0,e=b.length;e>d;d++){var f=b[d],g=new h(f,this);c.push(g)}return c},d.prototype._filterFindItemElements=function(a){a=c(a);var b=this.options.itemSelector;if(!b)return a;for(var d=[],e=0,f=a.length;f>e;e++){var g=a[e];n(g,b)&&d.push(g);for(var h=g.querySelectorAll(b),i=0,j=h.length;j>i;i++)d.push(h[i])}return d},d.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},d.prototype.layout=function(){this._prelayout();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},d.prototype._init=d.prototype.layout,d.prototype._prelayout=function(){this.elementSize=m(this.element),this._getMeasurements(),this.packer.width=this.elementSize.innerWidth+this.gutter,this.packer.height=Number.POSITIVE_INFINITY,this.packer.reset(),this.maxY=0,this.placeStampedElements()},d.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},d.prototype._getMeasurement=function(a,b){var c,d=this.options[a];d?("string"==typeof d?c=this.element.querySelector(d):r(d)&&(c=d),this[a]=c?m(c)[b]:d):this[a]=0},d.prototype.layoutItems=function(a,b){var c=this._getLayoutItems(a);this._itemsOn(c,"layout",function(){this.emitEvent("layoutComplete",[this,c])});for(var d=0,e=c.length;e>d;d++){var f=c[d];this._packItem(f),this._layoutItem(f,b)}var g=this.elementSize,h=this.maxY-this.gutter;g.isBorderBox&&(h+=g.paddingBottom+g.paddingTop+g.borderTopWidth+g.borderBottomWidth),this.element.style.height=h+"px"},d.prototype._getLayoutItems=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},d.prototype._packItem=function(a){this._setRectSize(a.element,a.rect),this.packer.pack(a.rect),this._setMaxY(a.rect)},d.prototype._setMaxY=function(a){this.maxY=Math.max(a.y+a.height,this.maxY)},d.prototype._setRectSize=function(a,b){var c=m(a),d=c.outerWidth,e=c.outerHeight,f=this.columnWidth+this.gutter,g=this.rowHeight+this.gutter;d=this.columnWidth?Math.ceil(d/f)*f:d+this.gutter,e=this.rowHeight?Math.ceil(e/g)*g:e+this.gutter,b.width=Math.min(d,this.packer.width),b.height=e},d.prototype._layoutItem=function(a,b){var c=a.rect;b?a.goTo(c.x,c.y):a.moveTo(c.x,c.y)},d.prototype._itemsOn=function(a,b,c){function d(){return e++,e===f&&c.call(g),!0}for(var e=0,f=a.length,g=this,h=0,i=a.length;i>h;h++){var j=a[h];j.on(b,d)}},d.prototype.stamp=function(a){if(a){"string"==typeof a&&(a=this.element.querySelectorAll(a)),a=c(a),this.stampedElements.push.apply(this.stampedElements,a);for(var b=0,d=a.length;d>b;b++){var e=a[b];this.ignore(e)}}},d.prototype.unstamp=function(a){if(a){a=c(a);for(var b=0,d=a.length;d>b;b++){var e=a[b],f=s(this.stampedElements,e);-1!==f&&this.stampedElements.splice(f,1),this.unignore(e)}}},d.prototype.placeStampedElements=function(){if(this.stampedElements&&this.stampedElements.length){this._getBounds();for(var a=0,b=this.stampedElements.length;b>a;a++){var c=this.stampedElements[a];this.placeStamp(c)}}},d.prototype._getBounds=function(){var a=this.element.getBoundingClientRect();this._boundingLeft=a.left+this.elementSize.paddingLeft,this._boundingTop=a.top+this.elementSize.paddingTop},d.prototype.placeStamp=function(a){var b,c=this.getItem(a);b=c&&c.isPlacing?c.placeRect:this._getElementOffsetRect(a),this._setRectSize(a,b),this.packer.placed(b),this._setMaxY(b)},d.prototype._getElementOffsetRect=function(a){var b=a.getBoundingClientRect(),c=new f({x:b.left-this._boundingLeft,y:b.top-this._boundingTop});return c.x-=this.elementSize.borderLeftWidth,c.y-=this.elementSize.borderTopWidth,c},d.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.prototype.bindResize=function(){this.isResizeBound||(l.bind(a,"resize",this),this.isResizeBound=!0)},d.prototype.unbindResize=function(){l.unbind(a,"resize",this),this.isResizeBound=!1},d.prototype.onresize=function(){function a(){b.resize()}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},d.prototype.resize=function(){var a=m(this.element);a.innerWidth!==this.elementSize.innerWidth&&(this.layout(),delete this.resizeTimeout)},d.prototype.addItems=function(a){var b=this._getItems(a);return b.length?(this.items.push.apply(this.items,b),b):void 0},d.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},d.prototype.prepended=function(a){var b=this._getItems(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._prelayout(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},d.prototype.reveal=function(a){if(a&&a.length)for(var b=0,c=a.length;c>b;b++){var d=a[b];d.reveal()}},d.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},d.prototype.getItems=function(a){if(a&&a.length){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c],f=this.getItem(e);f&&b.push(f)}return b}},d.prototype.remove=function(a){a=c(a);var b=this.getItems(a);this._itemsOn(b,"remove",function(){this.emitEvent("removeComplete",[this,b])});for(var d=0,e=b.length;e>d;d++){var f=b[d];f.remove();var g=s(this.items,f);this.items.splice(g,1)}},d.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},d.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},d.prototype.sortItemsByPosition=function(){this.items.sort(function(a,b){return a.position.y-b.position.y||a.position.x-b.position.x})},d.prototype.fit=function(a,b,c){function d(){g++,2===g&&f.emitEvent("fitComplete",[f,e])}var e=this.getItem(a);if(e){this._getMeasurements(),this.stamp(e.element),e.getSize(),e.isPlacing=!0,b=void 0===b?e.rect.x:b,c=void 0===c?e.rect.y:c,e.positionPlaceRect(b,c,!0);var f=this,g=0;e.on("layout",function(){return d(),!0}),this.on("layoutComplete",function(){return d(),!0}),e.moveTo(e.placeRect.x,e.placeRect.y),this.layout(),this.unstamp(e.element),this.sortItemsByPosition(),e.isPlacing=!1,e.copyPlaceRectPosition()}},d.prototype.itemDragStart=function(a){this.stamp(a);var b=this.getItem(a);b&&b.dragStart()},d.prototype.itemDragMove=function(a,b,c){function d(){f.layout(),delete f.dragTimeout}var e=this.getItem(a);e&&e.dragMove(b,c);var f=this;this.clearDragTimeout(),this.dragTimeout=setTimeout(d,40)},d.prototype.clearDragTimeout=function(){this.dragTimeout&&clearTimeout(this.dragTimeout)},d.prototype.itemDragEnd=function(a){function b(){return g++,g!==f?!0:(d&&(i.remove(d.element,"is-positioning-post-drag"),d.isPlacing=!1,d.copyPlaceRectPosition()),h.unstamp(a),h.sortItemsByPosition(),d&&e&&h.emitEvent("dragItemPositioned",[h,d]),!0)}var c,d=this.getItem(a);if(d&&(c=d.didDrag,d.dragStop()),!d||!c&&!d.needsPositioning)return void this.unstamp(a);i.add(d.element,"is-positioning-post-drag");var e=d.needsPositioning,f=e?2:1,g=0,h=this;e?(d.on("layout",b),d.moveTo(d.placeRect.x,d.placeRect.y)):d&&d.copyPlaceRectPosition(),this.clearDragTimeout(),this.on("layoutComplete",b),this.layout()},d.prototype.bindDraggabillyEvents=function(a){a.on("dragStart",this.handleDraggabilly.dragStart),a.on("dragMove",this.handleDraggabilly.dragMove),a.on("dragEnd",this.handleDraggabilly.dragEnd)},d.prototype.bindUIDraggableEvents=function(a){a.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)},d.prototype.destroy=function(){this.element.style.position="",this.element.style.height="",delete this.element.packeryGUID;for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.destroy()}this.unbindResize()},d.data=function(a){var b=a.packeryGUID;return b&&u[b]},j(function(){for(var a=o.querySelectorAll(".js-packery"),b=0,c=a.length;c>b;b++){var e,f=a[b],g=f.getAttribute("data-packery-options");try{e=g&&JSON.parse(g)}catch(h){p&&p.error("Error parsing data-packery-options on "+f.nodeName.toLowerCase()+(f.id?"#"+f.id:"")+": "+h);continue}var i=new d(f,e);q&&q.data(f,"packery",i)}}),q&&q.bridget&&q.bridget("packery",d),d.Rect=f,d.Packer=g,d.Item=h,a.Packery=d}(window),function(a){var b={"private":{handleAppendedElements:function(c,d,e,f){var g=a("<div />").append(c).find(">div");a.each(g,function(a,b){f?d.prepend(b):d.append(b)}),g.length>0&&(f?d.packery("prepended",g):d.packery("appended",g),e.showTileControls&&b.private.enableEditing(d,e),b.private.enableOverlay(d,e),b.private.enableHover(d,e))},enableOverlay:function(b,c){b.find("a[data-overlay=gathering-item]").not(".overlay-bound").each(function(){var b=a(this).closest("[data-gathering-item-id]").attr("data-gathering-item-id");a(this).on("click",function(){return a.magnificPopup.open({ajax:{settings:{data:{gaiID:b,token:c.loadToken},dataType:"html",type:"post"}},items:{src:CCM_TOOLS_PATH+"/gathering/item/detail"},mainClass:"ccm-gathering-overlay-wrapper",type:"ajax",removalDelay:200}),!1})}).addClass("overlay-bound")},enableHover:function(b){b.find(".ccm-gathering-item").not(".hover-bound").each(function(){a(this).on("mouseenter",function(){a(this).addClass("ccm-gathering-item-over")}).on("mouseleave",function(){a(this).removeClass("ccm-gathering-item-over")})}).addClass("hover-bound")},enableEditing:function(b,c){b.find("a[data-inline-command=options-tile]").not(".gathering-options-bound").on("click",function(b){var c=a(this),d=a("[data-menu="+a(this).attr("data-launch-menu")+"]"),e=new ConcreteMenu(c,{menu:d,launcher:"none"});return e.show(b),!1}).addClass("gathering-options-bound");var d=a(b.packery("getItemElements")).not(".event-bound");d.draggable({handle:"a[data-inline-command=move-tile]",start:function(){a(".ccm-area-block-dropzone").addClass("ccm-area-block-dropzone-active"),a("div[data-gathering-id]").each(function(){var b=a(this);parseInt(b.attr("data-gathering-id"))!=parseInt(c.gaID)&&b.addClass("ccm-gathering-item-droppable").droppable({accept:".ccm-gathering-item",tolerance:"pointer",hoverClass:"ccm-gathering-item-drop-active",drop:function(b,d){jQuery.fn.dialog.showLoader();var e=a(this),f=(e.attr("data-gathering-id"),[{name:"task",value:"move_to_new_gathering"},{name:"gaiID",value:d.draggable.attr("data-gathering-item-id")},{name:"gaID",value:e.attr("data-gathering-id")},{name:"cID",value:CCM_CID},{name:"itemsPerPage",value:c.itemsPerPage},{name:"editToken",value:c.editToken}]),g=a(d.draggable).parent();a(d.draggable).remove(),a.ajax({type:"post",url:CCM_TOOLS_PATH+"/gathering/update",data:f,success:function(a){g.packery("layout"),e.before(a).remove(),e.packery("layout"),jQuery.fn.dialog.hideLoader()}})}})})},stop:function(){a(".ccm-area-block-dropzone").removeClass("ccm-area-block-dropzone-active"),b.packery("layout")}}),b.packery("on","dragItemPositioned",function(b){var d=[{name:"task",value:"update_display_order"},{name:"gaID",value:c.gaID},{name:"editToken",value:c.editToken}],e=b.getItemElements();for(i=0;i<e.length;i++){var f=a(e[i]);d.push({name:"gaiID[]",value:f.attr("data-gathering-item-id")})}a.ajax({type:"post",url:CCM_TOOLS_PATH+"/gathering/update",data:d})}),b.packery("bindUIDraggableEvents",d),d.resizable({handles:"se",helper:"ccm-gathering-resize-helper",grid:[c.columnWidth+c.gutter,c.rowHeight+c.gutter],stop:function(d,e){var f=e.element,g=parseInt(f.css("width")),h=parseInt(f.css("height")),i=Math.floor(g/c.columnWidth),j=Math.floor(h/c.rowHeight);b.packery("layout"),a.ajax({type:"post",url:CCM_TOOLS_PATH+"/gathering/update",data:{task:"resize",gaID:c.gaID,gaiID:f.attr("data-gathering-item-id"),gaiSlotWidth:i,gaiSlotHeight:j,editToken:c.editToken}})}}),d.not(".event-bound").addClass("event-bound")}},updateItemTemplate:function(b){jQuery.fn.dialog.showLoader();var b=a.extend({reloadItemTile:!1},b);a.ajax({type:"POST",data:{task:"update_item_template",gaiID:b.gaiID,gatTypeID:b.gatTypeID,gatID:b.gatID,token:b.updateToken},url:CCM_TOOLS_PATH+"/gathering/item/template",success:function(c){jQuery.fn.dialog.hideLoader(),b.reloadItemTile&&a("[data-gathering-item-id="+b.gaiID+"]").find("div.ccm-gathering-item-inner-render").html(c),jQuery.fn.dialog.closeTop()}})},deleteItem:function(b){jQuery.fn.dialog.showLoader(),a.ajax({type:"POST",data:{task:"delete_item",gaiID:b.gaiID,token:b.deleteToken},url:CCM_TOOLS_PATH+"/gathering/item/delete",success:function(){jQuery.fn.dialog.hideLoader();var c=a("[data-gathering-item-id="+b.gaiID+"]"),d=c.parent();c.remove(),d.packery("layout"),jQuery.fn.dialog.closeTop()}})},getNew:function(){var c=a(this),d=a(this).data("options");jQuery.fn.dialog.showLoader();var e=a(c.find(".ccm-gathering-item")[0]).attr("data-gathering-item-id");a.ajax({type:"post",url:CCM_TOOLS_PATH+"/gathering/get_new",data:{task:"get_gathering_items",newerThan:e,gaID:d.gaID,editToken:d.editToken,showTileControls:d.showTileControls},success:function(a){jQuery.fn.dialog.hideLoader(),b.private.handleAppendedElements(a,c,d,!0)}})},init:function(c){var c=a.extend({totalPages:0,columnWidth:120,itemsPerPage:24,rowHeight:120,showTileControls:!1,gutter:1},c);return this.each(function(){var d=a(this);a(this).data("options",c);var e=d.parent().find("button[data-gathering-button=gathering-load-more-items]");if(1==c.totalPages&&e.hide(),d.packery({columnWidth:c.columnWidth,rowHeight:c.rowHeight,gutter:c.gutter}),d.css("opacity",1),b.private.enableHover(d,c),b.private.enableOverlay(d,c),e.on("click",function(){page=parseInt(d.attr("data-gathering-current-page")),newPage=page+1,e.prop("disabled",!0),a.ajax({type:"post",url:CCM_TOOLS_PATH+"/gathering/load_more",data:{task:"get_gathering_items",gaID:c.gaID,page:newPage,itemsPerPage:c.itemsPerPage,loadToken:c.loadToken,editToken:c.editToken,showTileControls:c.showTileControls},success:function(a){b.private.handleAppendedElements(a,d,c),newPage==c.totalPages?e.hide():(e.prop("disabled",!1),d.attr("data-gathering-current-page",newPage))}})}),c.showTileControls){var f=a("[data-gathering-refresh="+c.gaID+"]");f.on("click",function(){return d.ccmgathering("getNew"),!1}),b.private.enableEditing(d,c)}})}};a.fn.ccmgathering=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.ccmgathering"):b.init.apply(this,arguments)}}(jQuery,window);
function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,i,o,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function x(e){return c=e,u=setTimeout(j,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=p();if(S(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function O(e){return u=void 0,v&&r?b(e):(r=i=void 0,a)}function T(){var e=p(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},T.flush=function(){return void 0===u?a:O(p())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const b={},x={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};x.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(b),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),x.textarea.addEventListener("input",e(t)((function(e){const t=e.target.value;b.message=t,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.email=e.email,b.message=e.message,x.input.value=e.email,x.textarea.value=e.message)}(),x.form.addEventListener("input",(e=>{b.email=x.input.value,b.message=x.textarea.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}));
//# sourceMappingURL=03-feedback.5cc78ca5.js.map

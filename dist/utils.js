(()=>{"use strict";var e={773:(e,r,t)=>{t.d(r,{$P:()=>hexValue});let o=!1,n=!1;const a={debug:1,default:2,info:2,warning:3,error:4,off:5};let s=a.default,i=null;const l=function _checkNormalize(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((r=>{try{if("test"!=="test".normalize(r))throw new Error("bad normalize")}catch(t){e.push(r)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}();var c,h;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(c||(c={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(h||(h={}));const g="0123456789abcdef";class Logger{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,r){const t=e.toLowerCase();null==a[t]&&this.throwArgumentError("invalid log level name","logLevel",e),s>a[t]||console.log.apply(console,r)}debug(...e){this._log(Logger.levels.DEBUG,e)}info(...e){this._log(Logger.levels.INFO,e)}warn(...e){this._log(Logger.levels.WARNING,e)}makeError(e,r,t){if(n)return this.makeError("censored error",r,{});r||(r=Logger.errors.UNKNOWN_ERROR),t||(t={});const o=[];Object.keys(t).forEach((e=>{const r=t[e];try{if(r instanceof Uint8Array){let t="";for(let e=0;e<r.length;e++)t+=g[r[e]>>4],t+=g[15&r[e]];o.push(e+"=Uint8Array(0x"+t+")")}else o.push(e+"="+JSON.stringify(r))}catch(r){o.push(e+"="+JSON.stringify(t[e].toString()))}})),o.push(`code=${r}`),o.push(`version=${this.version}`);const a=e;let s="";switch(r){case h.NUMERIC_FAULT:{s="NUMERIC_FAULT";const r=e;switch(r){case"overflow":case"underflow":case"division-by-zero":s+="-"+r;break;case"negative-power":case"negative-width":s+="-unsupported";break;case"unbound-bitwise-result":s+="-unbound-result"}break}case h.CALL_EXCEPTION:case h.INSUFFICIENT_FUNDS:case h.MISSING_NEW:case h.NONCE_EXPIRED:case h.REPLACEMENT_UNDERPRICED:case h.TRANSACTION_REPLACED:case h.UNPREDICTABLE_GAS_LIMIT:s=r}s&&(e+=" [ See: https://links.ethers.org/v5-errors-"+s+" ]"),o.length&&(e+=" ("+o.join(", ")+")");const i=new Error(e);return i.reason=a,i.code=r,Object.keys(t).forEach((function(e){i[e]=t[e]})),i}throwError(e,r,t){throw this.makeError(e,r,t)}throwArgumentError(e,r,t){return this.throwError(e,Logger.errors.INVALID_ARGUMENT,{argument:r,value:t})}assert(e,r,t,o){e||this.throwError(r,t,o)}assertArgument(e,r,t,o){e||this.throwArgumentError(r,t,o)}checkNormalize(e){null==e&&(e="platform missing String.prototype.normalize"),l&&this.throwError("platform missing String.prototype.normalize",Logger.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:l})}checkSafeUint53(e,r){"number"==typeof e&&(null==r&&(r="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(r,Logger.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(r,Logger.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,r,t){t=t?": "+t:"",e<r&&this.throwError("missing argument"+t,Logger.errors.MISSING_ARGUMENT,{count:e,expectedCount:r}),e>r&&this.throwError("too many arguments"+t,Logger.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:r})}checkNew(e,r){e!==Object&&null!=e||this.throwError("missing new",Logger.errors.MISSING_NEW,{name:r.name})}checkAbstract(e,r){e===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",Logger.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):e!==Object&&null!=e||this.throwError("missing new",Logger.errors.MISSING_NEW,{name:r.name})}static globalLogger(){return i||(i=new Logger("logger/5.7.0")),i}static setCensorship(e,r){if(!e&&r&&this.globalLogger().throwError("cannot permanently disable censorship",Logger.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),o){if(!e)return;this.globalLogger().throwError("error censorship permanent",Logger.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}n=!!e,o=!!r}static setLogLevel(e){const r=a[e.toLowerCase()];null!=r?s=r:Logger.globalLogger().warn("invalid log level - "+e)}static from(e){return new Logger(e)}}Logger.errors=h,Logger.levels=c;const u=new Logger("bytes/5.7.0");function isHexable(e){return!!e.toHexString}function isInteger(e){return"number"==typeof e&&e==e&&e%1==0}function isBytes(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e)return!1;if(!isInteger(e.length)||e.length<0)return!1;for(let r=0;r<e.length;r++){const t=e[r];if(!isInteger(t)||t<0||t>=256)return!1}return!0}function isHexString(e,r){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!r||e.length===2+2*r)}const E="0123456789abcdef";function hexlify(e,r){if(r||(r={}),"number"==typeof e){u.checkSafeUint53(e,"invalid hexlify value");let r="";for(;e;)r=E[15&e]+r,e=Math.floor(e/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(r.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),isHexable(e))return e.toHexString();if(isHexString(e))return e.length%2&&("left"===r.hexPad?e="0x0"+e.substring(2):"right"===r.hexPad?e+="0":u.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(isBytes(e)){let r="0x";for(let t=0;t<e.length;t++){let o=e[t];r+=E[(240&o)>>4]+E[15&o]}return r}return u.throwArgumentError("invalid hexlify value","value",e)}function hexValue(e){const r=function hexStripZeros(e){"string"!=typeof e&&(e=hexlify(e));isHexString(e)||u.throwArgumentError("invalid hex string","value",e);e=e.substring(2);let r=0;for(;r<e.length&&"0"===e[r];)r++;return"0x"+e.substring(r)}(hexlify(e,{hexPad:"left"}));return"0x"===r?"0x0":r}},577:(e,r,t)=>{t.d(r,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=t(773);const __WEBPACK_DEFAULT_EXPORT__=async(e,r)=>{const t=o.$P(+r.chainId);try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]})}catch(o){if(4001===o.code)return;await e.request({method:"wallet_addEthereumChain",params:[{chainId:t,chainName:r.name,nativeCurrency:{name:r.tokenSymbol,symbol:r.tokenSymbol,decimals:r.tokenDenomination},rpcUrls:[r.rpcUrl],blockExplorerUrls:[r.explorerUrl]}]})}}},789:(e,r,t)=>{function getBranchLastUpdatedString(e,r,t,o){return fetch(`https://api.github.com/repos/${e}/${r}/branches/${t}`,{headers:{Accept:"application/vnd.github.v3+json",...o?{Authorization:`Bearer ${o}`}:{}}}).then((e=>200===e.status?e.json():{})).then((e=>e.commit?getHowLongAgoString(e.commit.commit.author.date):""))}t.d(r,{Z:()=>getBranchLastUpdatedString});const getHowLongAgoString=e=>{const r=new Date(e),t=Math.floor((new Date-r)/1e3);let o=t/31536e3;return o>1?Math.floor(o)+" years ago":(o=t/2592e3,o>1?Math.floor(o)+" months ago":(o=t/86400,o>1?Math.floor(o)+" days ago":(o=t/3600,o>1?Math.floor(o)+" hours ago":(o=t/60,Math.floor(o)+" minutes ago"))))}},375:(e,r,t)=>{t.r(r),t.d(r,{addAmbNetwork:()=>addAmbNetwork,allAmbNetworksConfig:()=>s,changeChainId:()=>E.Z,getBranchLastUpdatedString:()=>N.Z,getCurrentAmbNetwork:()=>getCurrentAmbNetwork,metamaskConnector:()=>c,metamaskHooks:()=>h,switchToAmb:()=>m.Z,walletconnectConnector:()=>g,walletconnectHooks:()=>u});var o=t(155),n=t(946),a=t(269);const getCurrentAmbNetwork=(e=process.env.REACT_APP_CHAIN_ID||16718)=>s[e],s={30746:{name:"AirDAO Devnet",chainId:30746,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://devnet.airdao.io/explorer/",rpcUrl:"https://network.ambrosus-dev.io",rpcUrlWS:"wss://network.ambrosus-dev.io/ws"},22040:{name:"AirDAO Testnet",chainId:22040,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://testnet.airdao.io/explorer/",rpcUrl:"https://network.ambrosus-test.io",rpcUrlWS:"wss://network.ambrosus-test.io/ws"},16718:{name:"AirDAO Mainnet",chainId:16718,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://airdao.io/explorer/",rpcUrl:"https://network.ambrosus.io/",rpcUrlWS:"wss://network.ambrosus.io/ws"}},i=getCurrentAmbNetwork(),l=process.env.REACT_APP_WC_PROJECT_ID||process.env.NEXT_PUBLIC_WC_PROJECT_ID,[c,h]=(0,o.initializeConnector)((e=>new n.MetaMask({actions:e}))),[g,u]=(0,o.initializeConnector)((e=>new a.WalletConnect({actions:e,options:{projectId:l,chains:[i.chainId],showQrModal:!0,rpcMap:{[i.chainId]:i.rpcUrl}},defaultChainId:i.chainId})));var E=t(577),N=t(789),m=t(476),_=t(773);function addAmbNetwork(e){const r=getCurrentAmbNetwork(),t=_.$P(+r.chainId);return e.request({method:"wallet_addEthereumChain",params:[{chainId:t,chainName:r.name,nativeCurrency:{name:r.tokenSymbol,symbol:r.tokenSymbol,decimals:r.tokenDenomination},rpcUrls:[r.rpcUrl],blockExplorerUrls:[r.explorerUrl]}]})}},476:(e,r,t)=>{t.d(r,{Z:()=>switchToAmb});var o=t(375);function switchToAmb(e){const r=(0,o.getCurrentAmbNetwork)();return(0,o.changeChainId)(e,r)}},155:e=>{e.exports=require("@web3-react/core")},946:e=>{e.exports=require("@web3-react/metamask")},269:e=>{e.exports=require("@web3-react/walletconnect-v2")}},r={};function __webpack_require__(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t=__webpack_require__(375);module.exports=t})();
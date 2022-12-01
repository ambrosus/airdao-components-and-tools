(()=>{"use strict";var e={236:(e,r,t)=>{t.d(r,{Z:()=>utils_changeChainId});let o=!1,n=!1;const s={debug:1,default:2,info:2,warning:3,error:4,off:5};let i=s.default,a=null;const l=function _checkNormalize(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((r=>{try{if("test"!=="test".normalize(r))throw new Error("bad normalize")}catch(t){e.push(r)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}();var c,E;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(c||(c={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(E||(E={}));const u="0123456789abcdef";class Logger{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,r){const t=e.toLowerCase();null==s[t]&&this.throwArgumentError("invalid log level name","logLevel",e),i>s[t]||console.log.apply(console,r)}debug(...e){this._log(Logger.levels.DEBUG,e)}info(...e){this._log(Logger.levels.INFO,e)}warn(...e){this._log(Logger.levels.WARNING,e)}makeError(e,r,t){if(n)return this.makeError("censored error",r,{});r||(r=Logger.errors.UNKNOWN_ERROR),t||(t={});const o=[];Object.keys(t).forEach((e=>{const r=t[e];try{if(r instanceof Uint8Array){let t="";for(let e=0;e<r.length;e++)t+=u[r[e]>>4],t+=u[15&r[e]];o.push(e+"=Uint8Array(0x"+t+")")}else o.push(e+"="+JSON.stringify(r))}catch(r){o.push(e+"="+JSON.stringify(t[e].toString()))}})),o.push(`code=${r}`),o.push(`version=${this.version}`);const s=e;let i="";switch(r){case E.NUMERIC_FAULT:{i="NUMERIC_FAULT";const r=e;switch(r){case"overflow":case"underflow":case"division-by-zero":i+="-"+r;break;case"negative-power":case"negative-width":i+="-unsupported";break;case"unbound-bitwise-result":i+="-unbound-result"}break}case E.CALL_EXCEPTION:case E.INSUFFICIENT_FUNDS:case E.MISSING_NEW:case E.NONCE_EXPIRED:case E.REPLACEMENT_UNDERPRICED:case E.TRANSACTION_REPLACED:case E.UNPREDICTABLE_GAS_LIMIT:i=r}i&&(e+=" [ See: https://links.ethers.org/v5-errors-"+i+" ]"),o.length&&(e+=" ("+o.join(", ")+")");const a=new Error(e);return a.reason=s,a.code=r,Object.keys(t).forEach((function(e){a[e]=t[e]})),a}throwError(e,r,t){throw this.makeError(e,r,t)}throwArgumentError(e,r,t){return this.throwError(e,Logger.errors.INVALID_ARGUMENT,{argument:r,value:t})}assert(e,r,t,o){e||this.throwError(r,t,o)}assertArgument(e,r,t,o){e||this.throwArgumentError(r,t,o)}checkNormalize(e){null==e&&(e="platform missing String.prototype.normalize"),l&&this.throwError("platform missing String.prototype.normalize",Logger.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:l})}checkSafeUint53(e,r){"number"==typeof e&&(null==r&&(r="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(r,Logger.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(r,Logger.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,r,t){t=t?": "+t:"",e<r&&this.throwError("missing argument"+t,Logger.errors.MISSING_ARGUMENT,{count:e,expectedCount:r}),e>r&&this.throwError("too many arguments"+t,Logger.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:r})}checkNew(e,r){e!==Object&&null!=e||this.throwError("missing new",Logger.errors.MISSING_NEW,{name:r.name})}checkAbstract(e,r){e===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",Logger.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):e!==Object&&null!=e||this.throwError("missing new",Logger.errors.MISSING_NEW,{name:r.name})}static globalLogger(){return a||(a=new Logger("logger/5.7.0")),a}static setCensorship(e,r){if(!e&&r&&this.globalLogger().throwError("cannot permanently disable censorship",Logger.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),o){if(!e)return;this.globalLogger().throwError("error censorship permanent",Logger.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}n=!!e,o=!!r}static setLogLevel(e){const r=s[e.toLowerCase()];null!=r?i=r:Logger.globalLogger().warn("invalid log level - "+e)}static from(e){return new Logger(e)}}Logger.errors=E,Logger.levels=c;const g=new Logger("bytes/5.7.0");function isHexable(e){return!!e.toHexString}function isInteger(e){return"number"==typeof e&&e==e&&e%1==0}function isBytes(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e)return!1;if(!isInteger(e.length)||e.length<0)return!1;for(let r=0;r<e.length;r++){const t=e[r];if(!isInteger(t)||t<0||t>=256)return!1}return!0}function isHexString(e,r){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!r||e.length===2+2*r)}const h="0123456789abcdef";function hexlify(e,r){if(r||(r={}),"number"==typeof e){g.checkSafeUint53(e,"invalid hexlify value");let r="";for(;e;)r=h[15&e]+r,e=Math.floor(e/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(r.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),isHexable(e))return e.toHexString();if(isHexString(e))return e.length%2&&("left"===r.hexPad?e="0x0"+e.substring(2):"right"===r.hexPad?e+="0":g.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(isBytes(e)){let r="0x";for(let t=0;t<e.length;t++){let o=e[t];r+=h[(240&o)>>4]+h[15&o]}return r}return g.throwArgumentError("invalid hexlify value","value",e)}function hexValue(e){const r=function hexStripZeros(e){"string"!=typeof e&&(e=hexlify(e));isHexString(e)||g.throwArgumentError("invalid hex string","value",e);e=e.substring(2);let r=0;for(;r<e.length&&"0"===e[r];)r++;return"0x"+e.substring(r)}(hexlify(e,{hexPad:"left"}));return"0x"===r?"0x0":r}const utils_changeChainId=async(e,r)=>{const t=hexValue(+r);try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]})}catch(o){await e.request({method:"wallet_addEthereumChain",params:[{chainId:t,chainName:r.name,nativeCurrency:{name:r.tokenSymbol,symbol:r.tokenSymbol,decimals:r.tokenDenomination},rpcUrls:[r.rpcUrl],blockExplorerUrls:[r.explorerUrl]}]})}}},3:e=>{e.exports=require("@web3-react/injected-connector")}},r={};function __webpack_require__(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{__webpack_require__.r(t),__webpack_require__.d(t,{allAmbNetworksConfig:()=>o,changeChainId:()=>a.Z,defaultInjectedConnector:()=>s,defaultWalletConnectConnector:()=>i,getCurrentAmbNetwork:()=>getCurrentAmbNetwork});var e=__webpack_require__(3);const r=require("@web3-react/walletconnect-connector"),getCurrentAmbNetwork=(e=process.env.REACT_APP_CHAIN_ID)=>o[e],o={30746:{name:"Ambrosus Devnet",chainId:30746,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://explorer.ambrosus-dev.io/",rpcUrl:"https://network.ambrosus-dev.io",rpcUrlWS:"wss://network.ambrosus-dev.io/ws"},22040:{name:"Ambrosus Testnet",chainId:22040,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://explorer.ambrosus-test.io/",rpcUrl:"https://network.ambrosus-test.io",rpcUrlWS:"wss://network.ambrosus-test.io/ws"},16718:{name:"Ambrosus Mainnet",chainId:16718,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://airdao.io/explorer/",rpcUrl:"https://network.ambrosus.io/",rpcUrlWS:"wss://network.ambrosus.io/ws"}},n=getCurrentAmbNetwork(),s=new e.InjectedConnector({supportedChainIds:[+n.chainId]}),i=new r.WalletConnectConnector({rpc:{[+n.chainId]:n.rpcUrl},chainId:n.chainId,bridge:"https://bridge.walletconnect.org",pollingInterval:6e3,qrcode:!0,qrcodeModalOptions:{mobileLinks:["metamask","trustee"]}});var a=__webpack_require__(236)})(),module.exports=t})();
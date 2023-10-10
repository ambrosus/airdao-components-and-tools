(()=>{"use strict";var e={773:(e,r,t)=>{t.d(r,{$P:()=>hexValue});let o=!1,n=!1;const a={debug:1,default:2,info:2,warning:3,error:4,off:5};let s=a.default,i=null;const c=function _checkNormalize(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((r=>{try{if("test"!=="test".normalize(r))throw new Error("bad normalize")}catch(t){e.push(r)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}();var l,u;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(l||(l={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(u||(u={}));const g="0123456789abcdef";class Logger{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,r){const t=e.toLowerCase();null==a[t]&&this.throwArgumentError("invalid log level name","logLevel",e),s>a[t]||console.log.apply(console,r)}debug(...e){this._log(Logger.levels.DEBUG,e)}info(...e){this._log(Logger.levels.INFO,e)}warn(...e){this._log(Logger.levels.WARNING,e)}makeError(e,r,t){if(n)return this.makeError("censored error",r,{});r||(r=Logger.errors.UNKNOWN_ERROR),t||(t={});const o=[];Object.keys(t).forEach((e=>{const r=t[e];try{if(r instanceof Uint8Array){let t="";for(let e=0;e<r.length;e++)t+=g[r[e]>>4],t+=g[15&r[e]];o.push(e+"=Uint8Array(0x"+t+")")}else o.push(e+"="+JSON.stringify(r))}catch(r){o.push(e+"="+JSON.stringify(t[e].toString()))}})),o.push(`code=${r}`),o.push(`version=${this.version}`);const a=e;let s="";switch(r){case u.NUMERIC_FAULT:{s="NUMERIC_FAULT";const r=e;switch(r){case"overflow":case"underflow":case"division-by-zero":s+="-"+r;break;case"negative-power":case"negative-width":s+="-unsupported";break;case"unbound-bitwise-result":s+="-unbound-result"}break}case u.CALL_EXCEPTION:case u.INSUFFICIENT_FUNDS:case u.MISSING_NEW:case u.NONCE_EXPIRED:case u.REPLACEMENT_UNDERPRICED:case u.TRANSACTION_REPLACED:case u.UNPREDICTABLE_GAS_LIMIT:s=r}s&&(e+=" [ See: https://links.ethers.org/v5-errors-"+s+" ]"),o.length&&(e+=" ("+o.join(", ")+")");const i=new Error(e);return i.reason=a,i.code=r,Object.keys(t).forEach((function(e){i[e]=t[e]})),i}throwError(e,r,t){throw this.makeError(e,r,t)}throwArgumentError(e,r,t){return this.throwError(e,Logger.errors.INVALID_ARGUMENT,{argument:r,value:t})}assert(e,r,t,o){e||this.throwError(r,t,o)}assertArgument(e,r,t,o){e||this.throwArgumentError(r,t,o)}checkNormalize(e){null==e&&(e="platform missing String.prototype.normalize"),c&&this.throwError("platform missing String.prototype.normalize",Logger.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:c})}checkSafeUint53(e,r){"number"==typeof e&&(null==r&&(r="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(r,Logger.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(r,Logger.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,r,t){t=t?": "+t:"",e<r&&this.throwError("missing argument"+t,Logger.errors.MISSING_ARGUMENT,{count:e,expectedCount:r}),e>r&&this.throwError("too many arguments"+t,Logger.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:r})}checkNew(e,r){e!==Object&&null!=e||this.throwError("missing new",Logger.errors.MISSING_NEW,{name:r.name})}checkAbstract(e,r){e===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",Logger.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):e!==Object&&null!=e||this.throwError("missing new",Logger.errors.MISSING_NEW,{name:r.name})}static globalLogger(){return i||(i=new Logger("logger/5.7.0")),i}static setCensorship(e,r){if(!e&&r&&this.globalLogger().throwError("cannot permanently disable censorship",Logger.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),o){if(!e)return;this.globalLogger().throwError("error censorship permanent",Logger.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}n=!!e,o=!!r}static setLogLevel(e){const r=a[e.toLowerCase()];null!=r?s=r:Logger.globalLogger().warn("invalid log level - "+e)}static from(e){return new Logger(e)}}Logger.errors=u,Logger.levels=l;const E=new Logger("bytes/5.7.0");function isHexable(e){return!!e.toHexString}function isInteger(e){return"number"==typeof e&&e==e&&e%1==0}function isBytes(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e)return!1;if(!isInteger(e.length)||e.length<0)return!1;for(let r=0;r<e.length;r++){const t=e[r];if(!isInteger(t)||t<0||t>=256)return!1}return!0}function isHexString(e,r){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!r||e.length===2+2*r)}const h="0123456789abcdef";function hexlify(e,r){if(r||(r={}),"number"==typeof e){E.checkSafeUint53(e,"invalid hexlify value");let r="";for(;e;)r=h[15&e]+r,e=Math.floor(e/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(r.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),isHexable(e))return e.toHexString();if(isHexString(e))return e.length%2&&("left"===r.hexPad?e="0x0"+e.substring(2):"right"===r.hexPad?e+="0":E.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(isBytes(e)){let r="0x";for(let t=0;t<e.length;t++){let o=e[t];r+=h[(240&o)>>4]+h[15&o]}return r}return E.throwArgumentError("invalid hexlify value","value",e)}function hexValue(e){const r=function hexStripZeros(e){"string"!=typeof e&&(e=hexlify(e));isHexString(e)||E.throwArgumentError("invalid hex string","value",e);e=e.substring(2);let r=0;for(;r<e.length&&"0"===e[r];)r++;return"0x"+e.substring(r)}(hexlify(e,{hexPad:"left"}));return"0x"===r?"0x0":r}},375:(e,r,t)=>{t.d(r,{addAmbNetwork:()=>addAmbNetwork,metamaskConnector:()=>l,walletconnectConnector:()=>g});var o=t(155),n=t(946),a=t(269);const getCurrentAmbNetwork=(e=process.env.REACT_APP_CHAIN_ID||16718)=>s[e],s={30746:{name:"AirDAO Devnet",chainId:30746,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://devnet.airdao.io/explorer/",rpcUrl:"https://network.ambrosus-dev.io",rpcUrlWS:"wss://network.ambrosus-dev.io/ws"},22040:{name:"AirDAO Testnet",chainId:22040,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://testnet.airdao.io/explorer/",rpcUrl:"https://network.ambrosus-test.io",rpcUrlWS:"wss://network.ambrosus-test.io/ws"},16718:{name:"AirDAO Mainnet",chainId:16718,code:"AMB",tokenSymbol:"AMB",tokenDenomination:18,explorerUrl:"https://airdao.io/explorer/",rpcUrl:"https://network.ambrosus.io/",rpcUrlWS:"wss://network.ambrosus.io/ws"}},i=getCurrentAmbNetwork(),c=process.env.REACT_APP_WC_PROJECT_ID,[l,u]=(0,o.initializeConnector)((e=>new n.MetaMask({actions:e}))),[g,E]=(0,o.initializeConnector)((e=>new a.WalletConnect({actions:e,options:{projectId:c,chains:[i.chainId],showQrModal:!0,rpcMap:{[i.chainId]:i.rpcUrl}},defaultChainId:i.chainId})));t(476);var h=t(773);function addAmbNetwork(e){const r=getCurrentAmbNetwork(),t=h.$P(+r.chainId);return e.request({method:"wallet_addEthereumChain",params:[{chainId:t,chainName:r.name,nativeCurrency:{name:r.tokenSymbol,symbol:r.tokenSymbol,decimals:r.tokenDenomination},rpcUrls:[r.rpcUrl],blockExplorerUrls:[r.explorerUrl]}]})}},476:(e,r,t)=>{t(375)},155:e=>{e.exports=require("@web3-react/core")},946:e=>{e.exports=require("@web3-react/metamask")},269:e=>{e.exports=require("@web3-react/walletconnect-v2")},497:e=>{e.exports=require("react")}},r={};function __webpack_require__(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{__webpack_require__.r(t),__webpack_require__.d(t,{useAuthorization:()=>hooks_useAuthorization,useAutoLogin:()=>hooks_useAutoLogin});var e=__webpack_require__(375),r=__webpack_require__(155);const{REACT_APP_CHAIN_ID:o}=process.env,hooks_useAuthorization=(t=e.metamaskConnector,n=e.walletconnectConnector)=>{const{connector:a}=(0,r.useWeb3React)();return{loginMetamask:()=>{const{ethereum:r}=window;return r&&r.isMetaMask?t.activate(+o).then((()=>{localStorage.setItem("wallet","metamask")})).catch((t=>{4902===t.code&&(0,e.addAmbNetwork)(r),console.log("metamask connection error",t)})):window.open(`https://metamask.app.link/dapp/${window.location.hostname+window.location.pathname}`).focus()},loginWalletConnect:()=>{const e={...localStorage};localStorage.clear();for(const r in e)r.includes("wc@2")||localStorage.setItem(r,e[r]);return n.activate(+o).catch((e=>{console.log("walletconnect-v2 connection error",e)}))},logout:()=>{a?.deactivate?a.deactivate():a.resetState(),localStorage.removeItem("wallet")}}};var n=__webpack_require__(497);const hooks_useAutoLogin=(r=e.metamaskConnector)=>{const[t,o]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{(async()=>{"metamask"===localStorage.getItem("wallet")&&r.connectEagerly().catch((e=>{console.log("metamask eager connection error",e)})),o(!0)})()}),[]),t},a=require("buffer");window.Buffer=window.Buffer||a.Buffer})(),module.exports=t})();
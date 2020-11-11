(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(e,t,n){"use strict";var r=n(1),a=n(317);r({target:"String",proto:!0,forced:n(318)("link")},{link:function(e){return a(this,"a","href",e)}})},317:function(e,t,n){var r=n(24),a=/"/g;e.exports=function(e,t,n,o){var s=String(r(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),i+">"+s+"</"+t+">"}},318:function(e,t,n){var r=n(2);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},326:function(e,t,n){"use strict";n.r(t);n(166),n(306),n(92),n(316),n(91);var r=n(43),a=n(309),o=n(304),s={name:"Generator",mixins:[a.a,o.a],data:function(){return{loading:!0,currentNetwork:null,tokenType:"",trx:{hash:"",link:""},transactionStarted:!1,makingTransaction:!1,formDisabled:!1,feeAmount:"0",token:{name:"",symbol:"",decimals:18,cap:"",initialBalance:"",supplyType:"Fixed",mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!1}}},mounted:function(){this.tokenType=this.getParam("tokenType")||"SimpleERC20",this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:return e.initService(e.currentNetwork),t.next=7,e.loadToken();case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e.makeToast("Some errors occurred",t.t0,"danger");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},loadToken:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.prototype.hasOwnProperty.call(e.tokenList,e.tokenType)||(e.makeToast("Some errors occurred","Selected token type does not exist!","danger"),e.tokenType="SimpleERC20"),e.initToken(e.tokenType),e.updateTokenDetails(),e.updateInitialBalance(),t.prev=4,t.next=7,e.promisify(e.contracts.service.methods.getPrice(e.tokenType).call);case 7:e.feeAmount=t.sent,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0.message),"mainnet"!==e.currentNetwork?(e.makeToast("Warning","We are having an issue with Current Network Provider. Please switch Network or try again later.","warning"),e.feeAmount=e.web3.utils.toWei("0","ether")):e.feeAmount=e.web3.utils.toWei("".concat(e.token.price),"ether");case 14:e.loading=!1;case 15:case"end":return t.stop()}}),t,null,[[4,10]])})))()},generateToken:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.observer.validate().then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=31;break}if(e.metamask.installed){t.next=6;break}return e.makeToast("Warning","To create a Token please install MetaMask!","danger"),t.abrupt("return");case 6:if(e.metamask.netId===e.network.current.id){t.next=9;break}return e.makeToast("Warning","Your MetaMask in on the wrong network. Please switch on ".concat(e.network.current.name," and try again!"),"warning"),t.abrupt("return");case 9:return t.prev=9,e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,t.next=16,e.web3Provider.request({method:"eth_requestAccounts"});case 16:return r=new e.web3.eth.Contract(e.contracts.token.abi),t.t0=r.deploy({data:e.contracts.token.bytecode,arguments:e.getDeployArguments()}),t.next=20,e.promisify(e.web3.eth.getCoinbase);case 20:t.t1=t.sent,t.t2=e.feeAmount,t.t3={from:t.t1,value:t.t2},t.t0.send.call(t.t0,t.t3).on("error",(function(t){console.log(t.message),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Error!",t.message,"danger")})).on("transactionHash",(function(t){e.transactionStarted=!0,e.trx.hash=t,e.trx.link="".concat(e.network.current.etherscanLink,"/tx/").concat(e.trx.hash),e.gaSend("transaction","trx_".concat(e.network.current.id),e.trx.hash)})).on("receipt",(function(t){e.token.address=t.contractAddress,e.token.link=e.network.current.etherscanLink+"/token/"+e.token.address,e.$forceUpdate(),e.makeToast("Well done!","Your token has been deployed at ".concat(e.token.address),"success"),e.gaSend("token","token_".concat(e.network.current.id),e.token.address)})),t.next=31;break;case 26:t.prev=26,t.t4=t.catch(9),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Some error occurred",t.t4.message,"danger");case 31:case"end":return t.stop()}}),t,null,[[9,26]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),e.makingTransaction=!1,e.makeToast("Some error occurred",t.message,"danger")}));case 1:case"end":return t.stop()}}),t)})))()},updateTokenDetails:function(){var e=this,t=this.tokenDetails.find((function(t){return t.name===e.tokenType}));this.token.customizeDecimals=t.customizeDecimals,this.token.verified=t.verified,this.token.supplyType=t.supplyType,this.token.mintable=t.mintable,this.token.burnable=t.burnable,this.token.erc1363=t.erc1363,this.token.tokenRecover=t.tokenRecover,this.token.removeCopyright=t.removeCopyright,this.token.price=t.price,this.token.decimals=t.customizeDecimals?this.token.decimals:18},updateInitialBalance:function(){this.token.initialBalance="Fixed"===this.token.supplyType?this.token.cap:this.token.initialBalance},getDeployArguments:function(){var e=this.token.name,t=this.token.symbol.toUpperCase(),n=this.web3.utils.toBN(this.token.decimals),r=this.web3.utils.toBN(this.token.cap).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),a=this.web3.utils.toBN(this.token.initialBalance).mul(this.web3.utils.toBN(Math.pow(10,this.token.decimals))),o=[e,t];switch(this.tokenType){case"SimpleERC20":o.push(r);break;case"StandardERC20":o.push(n),o.push(r);break;case"CommonERC20":case"PowerfulERC20":o.push(n),o.push(r),o.push(a);break;default:throw new Error("Invalid Token Type")}return o.push(this.contracts.service.options.address),o}}},i=n(40),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",{attrs:{id:"token-generator"}},[n("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"10","offset-lg":"1"}},[e.loading?n("div",{staticClass:"text-center p-5"},[n("ui--loader",{attrs:{loading:!0}})],1):e._e(),e._v(" "),e.loading?e._e():n("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[e.metamask.installed?e._e():n("b-alert",{attrs:{show:"",variant:"danger"}},[n("h4",{staticClass:"alert-heading"},[e._v("Alert")]),e._v(" "),n("p",[e._v("\n                        To use this app please install "),n("a",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(" extension on Chrome Desktop.\n                    ")]),e._v(" "),n("hr"),e._v(" "),n("p",{staticClass:"mb-0"},[e._v("\n                        Use any other wallet at your own risk.\n                    ")])]),e._v(" "),e.makingTransaction||e.transactionStarted?n("b-card",{staticClass:"mt-3",attrs:{header:"Making transaction...","header-bg-variant":"info","header-text-variant":"white"}},[e.trx.hash?n("div",[n("b",[e._v("Well! Transaction done!")]),n("br"),e._v("\n                        Transaction id "),n("a",{attrs:{href:e.trx.link,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.trx.hash)}})]),n("br"),e._v("\n\n                        Retrieving Token.\n                        "),e.token.address?n("div",[n("b",[e._v("Your Token")]),e._v(" "),n("b-link",{attrs:{href:e.token.link,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.token.address)}})])],1):n("div",[n("p",[e._v("Please wait...")]),e._v(" "),n("ui--loader",{attrs:{loading:!0}})],1)]):n("div",[n("p",[e._v("Please wait...")]),e._v(" "),n("ui--loader",{attrs:{loading:!0}})],1)]):e._e(),e._v(" "),e.makingTransaction?e._e():n("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.generateToken()}}},[n("fieldset",{attrs:{disabled:e.formDisabled}},[n("b-row",[n("b-col",{attrs:{lg:"8"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Details","header-bg-variant":"dark","header-text-variant":"white"}},[n("ValidationProvider",{attrs:{name:"token name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Choose a name for your token.",label:"Token Name *","label-for":"tokenName"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",maxlength:"20"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(r[0])+"\n                                            ")])],1)]}}],null,!1,1098863804)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token symbol",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Choose a symbol for your token (usually 3-5 chars).",label:"Token Symbol *","label-for":"tokenSymbol"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",maxlength:"5"},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(r[0])+"\n                                            ")])],1)]}}],null,!1,817305664)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token Decimals",rules:{required:!0,numeric:!0,min_value:0,max_value:36}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Insert the decimal precision of your token. If you don't know what to insert, use 18.",label:"Token decimals *","label-for":"tokenDecimals"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",type:"number",disabled:!e.token.customizeDecimals,size:"lg",step:"1"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(r[0])+"\n                                            ")])],1)]}}],null,!1,3137482116)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token max supply",rules:{required:!0,numeric:!0,min_value:1,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Insert the maximum number of tokens available.",label:"Total Supply *","label-for":"tokenCap"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenCap",name:"tokenCap",placeholder:"Your token max supply",type:"number",size:"lg",step:"1"},on:{update:e.updateInitialBalance},model:{value:e.token.cap,callback:function(t){e.$set(e.token,"cap","string"==typeof t?t.trim():t)},expression:"token.cap"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(r[0])+"\n                                            ")])],1)]}}],null,!1,4109797745)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token initial supply",rules:{required:!0,numeric:!0,min_value:0,max_value:e.token.cap||0}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("b-form-group",{attrs:{description:"Insert the initial number of tokens available. Will be put in your account.",label:"Initial Supply *","label-for":"tokenInitialBalance"}},[n("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"tokenInitialBalance",name:"tokenInitialBalance",placeholder:"Your token initial supply",type:"number",disabled:"Fixed"===e.token.supplyType,size:"lg",step:"1"},model:{value:e.token.initialBalance,callback:function(t){e.$set(e.token,"initialBalance","string"==typeof t?t.trim():t)},expression:"token.initialBalance"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(r[0])+"\n                                            ")])],1)]}}],null,!1,1634171520)})],1),e._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Network","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-form-group",{attrs:{description:"Choose your Network.",label:"Network *","label-for":"network"}},[n("b-form-select",{attrs:{id:"network",size:"lg"},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(t,r){return n("option",{domProps:{value:r}},[e._v(e._s(t.name)+"\n                                            ")])})),0)],1),e._v(" "),"mainnet"!==e.currentNetwork?n("b-alert",{attrs:{show:"",variant:"warning"}},[n("strong",[e._v("\n                                            You selected a TEST Network.\n                                        ")]),e._v(" "),n("hr"),e._v("\n                                        To deploy on Main Network you must select Main Ethereum Network.\n                                    ")]):e._e()],1)],1),e._v(" "),n("b-col",{attrs:{lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Features","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-form-group",{attrs:{description:"Choose your Token Type.",label:"Token Type *","label-for":"tokenType"}},[n("b-form-select",{attrs:{id:"tokenType",size:"lg"},on:{input:e.loadToken},model:{value:e.tokenType,callback:function(t){e.tokenType=t},expression:"tokenType"}},e._l(e.tokenList,(function(t,r){return n("option",{domProps:{value:r}},[e._v("\n                                                "+e._s(t.contractName)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:"Your Token Source Code will be automatically verified on Etherscan."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.verified,callback:function(t){e.$set(e.token,"verified",t)},expression:"token.verified"}},[e._v("\n                                            Verified Source Code\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Your Token Supply Type.",label:"Supply Type","label-for":"supplyType"}},[n("b-form-select",{attrs:{id:"supplyType",disabled:"",size:"sm"},model:{value:e.token.supplyType,callback:function(t){e.$set(e.token,"supplyType",t)},expression:"token.supplyType"}},e._l(["Fixed","Capped"],(function(t){return n("option",{domProps:{value:t}},[e._v("\n                                                "+e._s(t)+"\n                                            ")])})),0)],1),e._v(" "),n("b-form-group",{attrs:{description:"You will be able to generate tokens by minting them."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.mintable,callback:function(t){e.$set(e.token,"mintable",t)},expression:"token.mintable"}},[e._v("\n                                            Mintable\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Your Token can be burnt."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.burnable,callback:function(t){e.$set(e.token,"burnable",t)},expression:"token.burnable"}},[e._v("\n                                            Burnable\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"The ERC1363 is an ERC20 compatible Token that can make a callback on the receiver contract."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.erc1363,callback:function(t){e.$set(e.token,"erc1363",t)},expression:"token.erc1363"}},[e._v("\n                                            ERC1363\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"It allows the contract owner to recover any ERC20 token sent into the contract for error."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.tokenRecover,callback:function(t){e.$set(e.token,"tokenRecover",t)},expression:"token.tokenRecover"}},[e._v("\n                                            Token Recover\n                                        ")])],1),e._v(" "),n("b-form-group",{attrs:{description:"Remove the link pointing to this page from your contract."}},[n("b-form-checkbox",{attrs:{size:"sm",disabled:"",switch:""},model:{value:e.token.removeCopyright,callback:function(t){e.$set(e.token,"removeCopyright",t)},expression:"token.removeCopyright"}},[e._v("\n                                            Remove Copyright\n                                        ")])],1)],1),e._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Payment","header-bg-variant":"dark","header-text-variant":"white","no-body":""}},[n("b-list-group",{staticClass:"payment-box",attrs:{flush:""}},[n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",attrs:{variant:"success"}},[e._v("\n                                            Token deployment fee:\n                                            "),n("b-badge",{attrs:{variant:"success"}},[e._v("\n                                                "+e._s(e.web3.utils.fromWei(e.feeAmount,"ether"))+" ETH\n                                            ")])],1),e._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("small",{staticClass:"text-muted"},[e._v("\n                                                *GAS fee will be added to final amount\n                                            ")])])],1)],1),e._v(" "),n("b-button",{staticClass:"mt-3 py-3 px-5 text-uppercase",attrs:{variant:"success",size:"lg",block:"",type:"submit"}},[e._v("\n                                    Confirm\n                                ")])],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);
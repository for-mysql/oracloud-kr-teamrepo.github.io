/*! ORA_CLOUD.JS - BUILD: 31-July-2017 version 2.44 */
try{oracle.truste.api.getConsentDecision().consentDecision;oracle.truste.api.getConsentDecision().source;}catch(err){var oracle=oracle||{};oracle.truste={};oracle.truste.api={};(function(){var trusteCookieName="notice_preferences";var trusteStorageItemName="truste.eu.cookie.notice_preferences";this.getCookieName=function(){return trusteCookieName;};this.getStorageItemName=function(){return trusteStorageItemName;};}).apply(oracle.truste);(function(){var trusteCommon=oracle.truste;function getCookie(cookieKey){var name=cookieKey+"=";var cookieArray=document.cookie.split(";");for(var i=0;i<cookieArray.length;i++){var c=cookieArray[i];while(c.charAt(0)==" "){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return null;}function getLocalStorageItem(storageKey){if(typeof(Storage)!=="undefined"){return localStorage.getItem(storageKey);}return null;}function getTRUSTeLocalStorageValue(storageKey){var value=getLocalStorageItem(storageKey);if(value!=null){var obj=JSON.parse(value);return obj.value;}return null;}this.getConsentCode=function(){var value=getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName())||getCookie(trusteCommon.getCookieName());if(value==null){return -1;}else{return parseInt(value)+1;}};this.getConsentDecision=function(){var value=this.getConsentCode();if(value==-1){var text='{"consentDecision": 0, "source": "implied"}';return JSON.parse(text);}else{var text='{"consentDecision": '+parseInt(value)+', "source": "asserted"}';return JSON.parse(text);}};}).apply(oracle.truste.api);}
/*! Tagging script setup */
var tagControl=new Array();tagControl.isTest=s_checkdev();tagControl.ora_local="ora_code_cloud.js";tagControl.ora_global="ora_code.js";tagControl.ora_path="/us/assets/metrics/";tagControl.ora_root=(tagControl.isTest)?"://www-portal-stage.oracle.com":"://www.oracleimg.com";tagControl["reportsuite-dev"]="oracledevcloud,oracledevall";tagControl["reportsuite-prod"]="oraclecloud,oracleglobal";tagControl.site=(document.location.href.toLowerCase().indexOf("oracle-ilnews.com")==-1)?"cloud":"cloud-ilnews";tagControl.lang="en-us";tagControl.codeversion="2.44";tagControl.lang=setCloudLangCountryGLOBAL();tagControl.elq_global="elqCfg.min.js";tagControl.elq_path="/i/";tagControl.elq_root="//img03.en25.com";tagControl.elq_prodID="1973398186";tagControl.elq_devID="30554202";tagControl.clevel=s_setConsentLevel(0);tagControl.host_type=(window.location.protocol.toLowerCase().indexOf("https")!=-1)?"https":"http";tagControl.eloqua_OK=(tagControl.clevel!=1);tagControl.adobe_OK=(tagControl.clevel!=1);tagControl.adTags_OK=((tagControl.clevel==0)||(tagControl.clevel==3));
/*! Global variables */
var s_pageName="";var s_pingOK=true;var ora_bk_version="";var language_value=tagControl.lang.substring(0,2);
/*! Eloqua Site Tags and Functions */
if(tagControl.eloqua_OK){var _elqQ=_elqQ||[];_elqQ.push(["elqSetSiteId",tagControl.elq_prodID]);_elqQ.push(["elqUseFirstPartyCookie","go.oracle.com"]);_elqQ.push(["elqTrackPageView"]);_elqQ.push(["elqSetSiteId",tagControl.elq_devID]);_elqQ.push(["elqUseFirstPartyCookie","go-stage.oracle.com"]);_elqQ.push(["elqTrackPageView"]);(function(){function async_load(){var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src=tagControl.elq_root+tagControl.elq_path+tagControl.elq_global;var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x);}if(window.addEventListener){window.addEventListener("DOMContentLoaded",async_load,false);}else{if(window.attachEvent){window.attachEvent("onload",async_load);}}})();
/*! Site Catalyst Tags and Functions */
}if(tagControl.adobe_OK){if(typeof s_pageName=="undefined"){var s_pageName="";}document.write("<script type='text/javascript' src='"+tagControl.host_type+tagControl.ora_root+tagControl.ora_path+tagControl.ora_global+"'><\/script>");function s_setAccount(){var sa=["oracledevall","cloud","en-us"];sa[0]=(tagControl.isTest)?tagControl["reportsuite-dev"]:tagControl["reportsuite-prod"];sa[1]=tagControl.site;sa[2]=tagControl.lang;return sa;}function s_oraVer(_s,_v){_v=_s+_v;oraVersion=(oraVersion.indexOf(_s)==-1)?oraVersion+_v:oraVersion.substr(0,oraVersion.indexOf(_s))+_v;}function gotjQ(){try{var jq=(jQuery)?true:false;}catch(err){var jq=false;}return jq;}function s_rePingCloud(_in){s_pageName=s.pageName=s_account[1]+":"+s_account[2]+":"+_in;s.eVar27=s.pageName;if(s.pageName.toLowerCase().indexOf("account")!=-1){s.events=s.apl(s.events,"event26",",",1);}if(s.pageName.toLowerCase().indexOf("summary")!=-1){s.events=s.apl(s.events,"event27",",",1);}s_Ping(true);s.events="";}function getUserInfo(){var USER=new Object();this.value_enc=getCookieData("ORA_UCM_INFO");this.array=this.value_enc.split("~");USER.guid=sani(this.array[1]);USER.username=sani(this.array[4]);return USER;}
/*! Site Specific Functions */
function s_prePlugins(s){s_oraVer(":"+tagControl.site+":",tagControl.codeversion);if(s.linkDownloadFileTypes.indexOf("epub")==-1){s.linkDownloadFileTypes=s.linkDownloadFileTypes+"epub ";}if(tagControl.lang=="en-us"){s.pageName=(typeof(s_pageName)=="undefined"||s_pageName=="")?cloudpageName(document.title):s_pageName;s_pageName=s.pageName;}}function s_postPlugins(s){if(typeof USER=="undefined"){var USEROK=new getUserInfo();if(USEROK.username!="NoData"){USER=new getUserInfo();}if(window.s_setGUID){s_setGUID();}}if(document.location.href.toLowerCase().indexOf(tagControl.lang.replace("-","_")+"/home")!=-1){s.pageName=s_account[1]+":"+s_account[2]+":/home";}s.pageName=s.pageName.replace(tagControl.lang.replace("-","_"),"");s.pageName=s.pageName.replace("//","/");s_checkAdTag();searchTracking(s);}function searchTracking(s){if(s.pageName=="cloud:en-us:/cloud-search/"){var pageName_addition="Results";var refURL=document.referrer.replace(/\?.+$/,"");var pURL=location.href;var keyword=pURL.slice(pURL.indexOf("queryStr")).split("&")[0].split("=")[1];var pageNo=pURL.slice(pURL.indexOf("currentPage")).split("&")[0].split("=")[1];if(keyword){keyword=unescape(keyword).toLowerCase().replace(/\++/g," ");if(refURL!=""){s.prop3=refURL+": "+keyword;}s.prop4=keyword;if(pageNo){s.prop6=pageNo;}else{s.prop6=1;}}if(document.getElementById("search-result-block-section").innerHTML.indexOf("No search results")!=-1){pageName_addition="No search results";if(keyword){s.prop5=keyword;s.prop3="";s.prop4="";s.prop6="";}}s.pageName="Search:cloud.oracle.com:"+pageName_addition;}}function cloudpageName(pn){var splitBy=["|"];var dirDelim="/";var s_pn=s_account[1]+":"+s_account[2]+":";var siteName="oracle-cloud";for(var a=0;a<splitBy.length;a++){pn=pn.split(splitBy[a]);}for(a=0;a<pn.length;a++){pn[a]=pn[a].trim().replace(/ /g,"-").toLowerCase();}for(a=pn.length-1;a>-1;a--){if(pn[a]==siteName){s_pn=s_pn+dirDelim;}else{if(document.location.href.toLowerCase().indexOf("webfolder/technetwork/tutorials")!=-1){s_pn=s_pn+"/tutorials/"+pn[a]+dirDelim;}else{s_pn=s_pn+pn[a]+dirDelim;}}}if(document.location.href.toLowerCase().indexOf(".oracle.com/home")!=-1){s_pn=s_account[1]+":"+s_account[2]+":/home";}return s_pn;}function s_checkAdTag(){var BlueKaiCodeVersion="";if(typeof(ora_bk_version)!="undefined"){if(ora_bk_version!=""){try{BlueKaiCodeVersion=(typeof(BKTAG.version)!="undefined")?BKTAG.version:"";}catch(err){console.log("Error collecting BlueKai data...");}s.prop61=ora_bk_version+BlueKaiCodeVersion;}}}function setDivs(){_a=[["a#uLogo","header"],["div.cloudLogo","header"],["ul#opcMobileNav","hnav"],["ul.opcNav","hnav"],["li.signInLink","hnav","signin"],["div.chat-tab","side-tab","chat"],["div.contact-tab","side-tab","contact"],["div.cloudButton","button"],["div.flex-control-nav","heronav-radio"],["div.service-name-summary-tab","service-name-summary-tab"],["div.resourcesSideNav","resourcessidenav"],["div.cloud-banner-container","hero-container"],["div.cloud-banner-section","hero-section"],["div.servicepreviewhomebanner","servicepreviewhomebanner"],["div.category-tab-title","category-tab-title"],["a.LearnMoreTab","LearnMoreTab"],["a.OverviewTab","OverviewTab"],["div.footerLeft","footer"],["div.footerRight ","socialicons"]];return _a;}
/*! jQuery Click Tracking */
if(gotjQ()){jQuery(document).ready(function($){var trackas=setDivs();var sn=s_setAccount()[1];var ln=s_setAccount()[2];$("#ServicePageNavBandSection ul li a").click(function(){var btxt=$(this).text().replace(/[*,\r\n\t ]+/gi,"-");navTrack(sn,ln,"servicenavband",btxt);});for(var i=0;i<trackas.length;i++){if(!$(trackas[i][0]).attr("data-trackas")&&trackas[i][1]){$(trackas[i][0]).attr("data-trackas",trackas[i][1]);}if(trackas[i][2]&&trackas[i][2]=="resetpage"){$(trackas[i][0]).attr("data-pgreset","true");}else{if(trackas[i][2]&&!$(trackas[i][0]).attr("data-lbl")){$(trackas[i][0]).attr("data-lbl",trackas[i][2]);}}}$(document).on("click","*[data-trackas] a,a[data-trackas]",function(e){var lbl="";var o=$(this);if(o.attr("data-lbl")!="notrack"){if(o.attr("data-lbl")){lbl=o.attr("data-lbl");}else{if(o.attr("name")){lbl=o.attr("name");}else{if(o.attr("title")){lbl=o.attr("title");}else{if(o.find("img")&&o.find("img").first().attr("title")){lbl=o.find("img").first().attr("title");}else{if(o.find("img")&&o.find("img").first().attr("alt")){lbl=o.find("img").first().attr("alt");}else{if(o.find("img").first().attr("src")){lbl=o.find("img").first().attr("src");lbl=lbl.split("/")[(lbl.split("/").length-1)];}else{lbl=o.text();}}}}}}lbl=lbl.trim();var d=o.closest("[data-trackas]").attr("data-trackas");d=(d=="hnav"||d=="header")?":":"-";if(!o.attr("data-trackas")){while(o.parent()){o=o.parent();if(o.attr("data-lbl")){lbl=o.attr("data-lbl")+d+lbl;}if(o.attr("data-trackas")){break;}}}lbl=lbl.toLowerCase().replace(/ /g,"-").replace(/-+/g,"-");var sec=(o.attr("data-trackas"))?o.attr("data-trackas"):o.closest("*[data-trackas]").attr("data-trackas");navTrack(sn,ln,sec,lbl);if(o.attr("data-pgreset")=="true"){s.clearVars();if(o.attr("href").indexOf("#")==0&&s.pageName){if(!$("body").attr("data-pgname")){$("body").attr("data-pgname",s.pageName);var pn=s.pageName;}else{var pn=$("body").attr("data-pgname");}s.pageName=pn+"/"+o.attr("href").split("#")[1];}else{s_orapageName(o.attr("href"));}var s_code=s.t();if(s_code){document.write(s_code);}}}});});}
/*! Additional Tags */
}if(tagControl.adTags_OK){document.write("<img src='//20754664p.rfihub.com/ca.html?rb=26998&ca=20754664&_o=26998&_t=20754664&ra=%n' height=0 width=0 style='display:none' alt='Rocket Fuel'/>");ora_bk_version="bkIn:"+tagControl.ora_local.substr(0,tagControl.ora_local.indexOf("."))+":v1.3:SentTo"+(tagControl.isTest?26595:25867);window.bk_async=function(){var bkTagID=(tagControl.isTest)?26595:25867;bk_addPageCtx("contTop",(typeof(contTop)!=="undefined")?contTop:"");bk_addPageCtx("contLang",(typeof(language_value)!=="undefined")?language_value:"");bk_addPageCtx("prodInt",(typeof(prodInt)!=="undefined")?prodInt:"");bk_addPageCtx("pgname",(typeof(bk_pgname)!=="undefined")?bk_pgname:"");bk_allow_multiple_calls=true;BKTAG.doTag(bkTagID,1);};(function(){var bk_scripts=document.getElementsByTagName("script")[0];var bk_s=document.createElement("script");bk_s.async=true;bk_s.src="//tags.bkrtx.com/js/bk-coretag.js";bk_scripts.parentNode.insertBefore(bk_s,bk_scripts);}());
/*! General Functions */
}function getCookieData(label){var labelLen=label.length;var cLen=document.cookie.length;var i=0;var cEnd;while(i<cLen){var j=i+labelLen;if(document.cookie.substring(i,j)==label){cEnd=document.cookie.indexOf(";",j);if(cEnd==-1){cEnd=document.cookie.length;}j++;return decodeURIComponent(document.cookie.substring(j,cEnd).replace("+","%20"));}i++;}return"";}function setCloudLangCountryGLOBAL(sitePreFix){var mlms="en-us";var locURL=document.location.href.toLowerCase();sitePreFix=((sitePreFix==""||typeof(sitePreFix)=="undefined")?"oracle.com":sitePreFix);var lcpair=new Array();lcpair=[["/de_de/","de-de"],["/es_es/","es-es"],["/fr_fr/","fr-fr"],["/it_it/","it-it"],["/ja_jp/","ja-jp"],["/ko_kr/","ko-kr"],["/pt_br/","pt-BR"],["/zh_cn/","zh-cn"],["/zh_tw/","zh-tw"]];var al=lcpair.length;for(i=0;i<al;i++){if(locURL.indexOf(sitePreFix+lcpair[i][0])!=-1){mlms=lcpair[i][1];i=al+1;}}return mlms;}function s_setConsentLevel(cL){try{cL=truste.cma.callApi("getConsentDecision","oracle.com").consentDecision;if(cL==-1){cL=0;}}catch(err){cL=getCookieData("notice_preferences").split(":")[0];if(cL==""){cL=0;}else{cL=++cL;}}return cL;}function s_checkdev(){var isDev=false;var devSites=new Array();devSites=["-stage","stg-","-dev","-content","localhost","127.0.0.1","sites.oracle.com",".us.oracle.com"];var al=devSites.length;for(i=0;i<al;i++){if(location.href.indexOf(devSites[i])!=-1){isDev=true;i=al+1;}}return(isDev);}
/*! End Tags */

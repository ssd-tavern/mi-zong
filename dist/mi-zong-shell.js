/*! 密宗模拟器 全屏前端 © ssd（类脑 @buyssdcom）保留一切权利。禁止复制、转载、修改、改编、借鉴、模仿、反混淆与任何商业用途，许可条款见仓库 README。All rights reserved. */
(()=>{var m=window.parent.document,T="mz-shell-root",Tt="mz_"+Math.random().toString(36).slice(2)+"_"+Date.now(),vn="密宗模拟器",fi="4.0.8",gi="@fontsource/noto-serif-sc@5.3.0",Oe=[400,600].map(t=>"https://testingcf.jsdelivr.net/npm/"+gi+"/"+t+".css"),je="mz-font-";function ui(){try{if(window.parent.MZ_ASSET_BASE)return String(window.parent.MZ_ASSET_BASE)}catch{}return"https://testingcf.jsdelivr.net/gh/ssd-tavern/mi-zong@"+fi+"/assets/"}var pt=ui(),E=t=>pt+t,Ia=["bg-ink.webp","hanging-fish.webp","incense-coil.webp","icon-redknot.webp","icon-coffer.webp","icon-letterbox.webp","shrine-model.webp","icon-folddoc.webp","icon-ledger.webp","map-panorama.webp","stamp-angelica.webp","stamp-orchid.webp","stamp-peach.webp","stamp-pomegranate.webp","lotus-rank.webp","map-changan.webp","hall-1-hut.webp","hall-2-vihara.webp","hall-3-edict.webp","fac-danfang.webp","fac-xingtang.webp","fac-kefang.webp","fac-huotan.webp","fac-mitan.webp","fac-wentang.webp","fac-jiguan.webp","fac-rongjin.webp","fac-midang.webp","fac-dilao.webp","fac-kufang.webp","fac-guifang.webp","rite-grand.webp","store-drug.webp","store-tool.webp","store-ritual.webp","own-1-rough.webp","own-2-fine.webp","own-3-grand.webp","loan-guifang.webp","banner-handle.webp","banner-steward.webp","banner-consort.webp","banner-order.webp","banner-craft.webp","sect-1-bliss.webp","sect-2-illusion.webp","sect-3-mercy.webp","sect-4-asura.webp","sect-5-strings.webp","letter-envelope.webp","paper-tibet.webp","stamp-gesang.webp","map-road.webp","map-lhasa.webp","scene-xishi.webp","scene-pingkang.webp","scene-dongshi.webp","scene-xiangfu.webp","scene-ximin.webp","scene-tianjie.webp","scene-lengfang.webp","scene-qujiang.webp","scene-huangcheng.webp","scene-hall-1.webp","scene-hall-2.webp","scene-hall-3.webp","scene-longshan.webp","scene-qinzhou.webp","scene-hezhou.webp","scene-shanzhou.webp","scene-chiling.webp","scene-baihai.webp","scene-yushu.webp","scene-naqu.webp","scene-dazhao.webp","scene-xiaozhao.webp","scene-hongshan.webp","scene-yalong.webp","scene-luoxie.webp","scene-luoxie-2.webp","scene-luoxie-3.webp","fest-yuanri.webp","fest-shangyuan.webp","fest-huiri.webp","fest-hanshi.webp","fest-qingming.webp","fest-shangsi.webp","fest-yufo.webp","fest-duanwu.webp","fest-qixi.webp","fest-yulanpen.webp","fest-chongyang.webp","fest-dongzhi.webp","fest-suichu.webp","fest-xue-sagadawa.webp","fest-xue-saima.webp","fest-xue-muyu.webp","fest-xue-wangguo.webp","fest-xue-gutu.webp","fest-xue-xinnian.webp","hall-lx-1-sealed.webp","hall-lx-2-opened.webp","hall-lx-3-court.webp","fac-lx-danfang.webp","fac-lx-yijing.webp","fac-lx-keshe.webp","fac-lx-huotan.webp","fac-lx-yicang.webp","fac-lx-tancheng.webp","fac-lx-wenquan.webp","fac-lx-jiguan.webp","fac-lx-gongfang.webp","fac-lx-mijiao.webp","fac-lx-dilao.webp","fac-lx-kufang.webp","own-lx-1-rough.webp","own-lx-2-fine.webp","own-lx-3-grand.webp"],Aa=6,f={entry:"mz-entry",entryEnter:"mz-entry-enter",shellHideStyle:"mz-shell-hide-style",shellStyle:"mz-shell-style",topbar:"mz-topbar",doom:"mz-doom",minimap:"mz-minimap",paper:"mz-paper",status:"mz-status",writing:"mz-writing",textarea:"mz-textarea",send:"mz-send",regen:"mz-regen",del:"mz-del",delbar:"mz-delbar",delCount:"mz-del-count",delCancel:"mz-del-cancel",delConfirm:"mz-del-confirm",jump:"mz-jump",corner:"mz-corner",lift:"mz-lift",liftTitle:"mz-lift-title",liftBody:"mz-lift-body",mplaque:"mz-mplaque",mscrim:"mz-mscrim"};function y(t,e){try{window.parent.localStorage.getItem("mzDebug")&&console.warn("[密宗dbg]",t,e)}catch{}}var Ca="mzPref:";function He(t,e){try{let n=window.parent.localStorage.getItem(Ca+t);return n??e}catch{return e}}function Vt(t,e){try{window.parent.localStorage.setItem(Ca+t,e)}catch{}}function Re(){try{return String(SillyTavern.getCurrentChatId()||"")}catch{return""}}function C(){try{return getLastMessageId()}catch{return null}}var mt=t=>'<svg viewBox="0 0 24 24">'+t+"</svg>",O={trash:mt('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/>'),regen:mt('<path d="M20 11a8 8 0 0 0-13.7-4.7L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.5"/><path d="M20 20v-4.5h-4.5"/>'),up:mt('<path d="M12 19V5M5 12l7-7 7 7"/>'),down:mt('<path d="M12 5v14M19 12l-7 7-7-7"/>'),menu:mt('<path d="M4 6h16M4 12h16M4 18h10"/>'),close:mt('<path d="M5 5l14 14M19 5L5 19"/>'),back:mt('<path d="M16 5l-8 7 8 7"/>'),chev:mt('<path d="M9 6l6 6-6 6"/>'),lock:mt('<rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>')};var B=["苏白芷","裴清砚","叶玄薇","萧夜沉","赤玛央金"],qa={苏白芷:"药铺医女",裴清砚:"裴府才女",叶玄薇:"玄都女冠",萧夜沉:"西市女商",赤玛央金:"落难蕃女"},ce={苏白芷:"mz-su",裴清砚:"mz-pei",叶玄薇:"mz-ye",萧夜沉:"mz-xiao",赤玛央金:"mz-chi"},Ne=["待度欲种","一灌·瓶灌","二灌·密灌","三灌·慧灌","四灌·大乐"],yt=t=>Math.max(0,Ne.indexOf(String(t||"").trim())),h=t=>"https://i.postimg.cc/"+t,Qn={苏白芷:{work:[["日常药铺",h("PfCzdpVb/su-bai-zhi-ri-chang-yao-pu.png")],["后院药圃",h("NGK7Q9C9/su-bai-zhi-hou-yuan-yao-pu.png")],["高门出诊",h("bNbxtXhb/su-bai-zhi-gao-men-chu-zhen.png")],["灯下私语",h("GhYFy0CH/su-bai-zhi-deng-xia-si-yu.png")]],rite:[["法事佛殿",h("SN86M0hQ/su-bai-zhi-fa-shi-fu-dian.png")],["地宫坛城",h("ryDCq0ZC/su-bai-zhi-de-gong-tan-cheng.png")]],grade:[["一灌瓶灌",h("QCFBs7XJ/su-bai-zhi-yi-guan-ping-guan.png")],["二灌密灌",h("J0symX1x/su-bai-zhi-er-guan-mi-guan.png")],["三灌慧灌",h("8c7FDv1b/su-bai-zhi-san-guan-hui-guan.png")],["四灌大乐",h("8k7BTJX4/su-bai-zhi-si-guan-da-le.png")]]},裴清砚:{work:[["书斋挥毫",h("htd9TkRD/pei-qing-yan-shu-zhai-hui-hao.png")],["上元灯船",h("P5wmYgnd/pei-qing-yan-shang-yuan-deng-chuan.png")],["煮茶失误",h("k41Vksd7/pei-qing-yan-zhu-cha-shi-wu.png")],["风雪庭院",h("90D4V9WP/pei-qing-yan-feng-xue-ting-yuan.png")]],rite:[["法事求道",h("Qt4BRmr8/pei-qing-yan-fa-shi-qiu-dao.png")],["荒野古刹",h("76sCp9yY/pei-qing-yan-huang-ye-gu-sha.png")]],grade:[["一灌瓶灌",h("xT7vk0h2/pei-qing-yan-yi-guan-ping-guan.png")],["二灌密灌",h("XYCwdR6V/pei-qing-yan-er-guan-mi-guan.png")],["三灌慧灌",h("YqV64pZj/pei-qing-yan-san-guan-hui-guan.png")],["四灌大乐",h("V6GS3gcm/pei-qing-yan-si-guan-da-le.png")]]},叶玄薇:{work:[["街头执法",h("3JJhyhpm/ye-xuan-wei-jie-tou-zhi-fa.png")],["校场切磋",h("hv0KkPmd/ye-xuan-wei-xiao-chang-qie-cuo.png")],["西市肉饼",h("m224c4M7/ye-xuan-wei-xi-shi-rou-bing.png")],["丹房格物",h("TPZ2msGq/ye-xuan-wei-dan-fang-ge-wu.png")]],rite:[["斋醮法坛",h("T1cTzYby/ye-xuan-wei-zhai-jiao-fa-tan.png")],["地宫对峙",h("cCcdp43v/ye-xuan-wei-de-gong-dui-zhi.png")]],grade:[["一灌瓶灌",h("SKwQ8Pq9/ye-xuan-wei-yi-guan-ping-guan.png")],["二灌密灌",h("s2tfSLyS/ye-xuan-wei-er-guan-mi-guan.png")],["三灌慧灌",h("TPZ2msG5/ye-xuan-wei-san-guan-hui-guan.png")],["四灌大乐",h("qqGpPMKk/ye-xuan-wei-si-guan-da-le.png")]]},萧夜沉:{work:[["酒肆当垆",h("gkPw1nC6/xiao-ye-chen-jiu-si-dang-lu.png")],["暗市验货",h("zX1L4Vs5/xiao-ye-chen-an-shi-yan-huo.png")],["内室鉴香",h("TwLLvm29/xiao-ye-chen-nei-shi-jian-xiang.png")],["后院听雨",h("MTMMJRZt/xiao-ye-chen-hou-yuan-ting-yu.png")]],rite:[["大寺供香",h("dQCkW8xV/xiao-ye-chen-da-si-gong-xiang.png")],["法事密谋",h("nctsNCyh/xiao-ye-chen-fa-shi-mi-mou.png")]],grade:[["一灌瓶灌",h("gkRVZ9W8/xiao-ye-chen-yi-guan-ping-guan.png")],["二灌密灌",h("0QT6kQrw/xiao-ye-chen-er-guan-mi-guan.png")],["三灌慧灌",h("pThhM8VC/xiao-ye-chen-san-guan-hui-guan.png")],["四灌大乐",h("MZBMsyrm/xiao-ye-chen-si-guan-da-le.png")]]},赤玛央金:{work:[["洁白哈达",h("QC8bq0kY/chi-ma-yang-jin-jie-bai-ha-da.png")],["西市摊头",h("MK47cWNx/chi-ma-yang-jin-xi-shi-tan-tou.png")],["长袖踏歌",h("7Yc3Cxd4/chi-ma-yang-jin-zhang-xiu-ta-ge.png")],["王宫灯影",h("D0vgcBdD/chi-ma-yang-jin-wang-gong-deng-ying.png")]],rite:[["红山回望",h("HsKwJpRC/chi-ma-yang-jin-hong-shan-hui-wang.png")],["圣湖濯足",h("yx1PTvXn/chi-ma-yang-jin-sheng-hu-zhuo-zu.png")]],grade:[["一灌瓶灌",h("Hx4z5f5t/chi-ma-yang-jin-yi-guan-ping-guan.png")],["二灌密灌",h("d1m6dzd5/chi-ma-yang-jin-er-guan-mi-guan.png")],["三灌慧灌",h("FRgpc2cn/chi-ma-yang-jin-san-guan-hui-guan.png")],["四灌大乐",h("RFQdfjfP/chi-ma-yang-jin-si-guan-da-le.png")]]}};function kn(t,e){let n=Qn[t];return n?n.work.concat(n.rite,n.grade.slice(0,yt(e))):[]}function Pa(t,e){let n=Qn[t];return n?n.grade.slice(yt(e)).map((a,o)=>Ne[yt(e)+o+1]):[]}function $a(t,e){let n=Qn[t];if(!n)return null;let a=yt(e);return a>0?n.grade[a-1]:n.work[0]}var pe=["城南道场","西市暗市","平康崇仁","东市宣阳","相国府第","细民坊巷","朱雀天街","西南冷坊","曲江池畔","皇城宫阙"],Be=["陇山关隘","秦州渭谷","河州渡口","鄯州湟谷","赤岭青海","柏海河源","玉树河谷","唐古那曲"],Fa=["大昭惹萨","小昭市坊","红山王宫","雅隆山南","逻些道场"],Ga={陇山关隘:"出唐入蕃",秦州渭谷:"蕃治汉城",河州渡口:"凤林渡河",鄯州湟谷:"东道军镇",赤岭青海:"界碑湖畔",柏海河源:"黄河之源",玉树河谷:"腹地东门",唐古那曲:"雪山绝境"},Qt=t=>["在途","已抵逻些"].includes(t.吐蕃之行.进藏行程),En=t=>t.吐蕃之行.进藏行程==="在途",Sn=t=>t.吐蕃之行.进藏行程==="在途"?"road":t.吐蕃之行.进藏行程==="已抵逻些"?"lhasa":"home",Ln={陇山关隘:[78.5,50],秦州渭谷:[72.5,66],河州渡口:[67,41],鄯州湟谷:[61,12],赤岭青海:[51,12],柏海河源:[34,26],玉树河谷:[38,70],唐古那曲:[20,62]},Va={大昭惹萨:"M370 320 L660 320 L660 540 L370 540 Z",小昭市坊:"M250 160 L760 160 L760 320 L250 320 Z",红山王宫:"M10 270 L250 270 L250 330 L340 330 L340 540 L10 540 Z",雅隆山南:"M240 755 L950 755 L950 920 L240 920 Z",逻些道场:"M760 390 L995 390 L995 545 L760 545 Z"},Za={大昭惹萨:["大昭寺",50,46],小昭市坊:["小昭市坊",50,23],红山王宫:["红山王宫",16,40],雅隆山南:["雅隆山南",58,82],逻些道场:["逻些道场",86,48]},Ua={城南道场:"M440 870 L575 870 L575 985 L440 985 Z",西市暗市:"M100 427 L370 427 L370 597 L100 597 Z",平康崇仁:"M614 359 L708 359 L708 544 L614 544 Z",东市宣阳:"M614 544 L708 544 L708 427 L808 427 L808 544 L905 544 L905 597 L614 597 Z",相国府第:"M614 243 L905 243 L905 544 L808 544 L808 427 L708 427 L708 359 L614 359 Z",细民坊巷:"M100 243 L370 243 L370 427 L100 427 Z",朱雀天街:"M370 497 L614 497 L614 830 L433 830 L433 630 L370 630 Z",西南冷坊:"M100 597 L370 597 L370 630 L433 630 L433 830 L100 830 Z",曲江池畔:"M614 597 L905 597 L905 894 L808 894 L808 830 L614 830 Z",皇城宫阙:"M370 243 L390 243 L390 195 L600 195 L600 17 L772 17 L772 245 L614 245 L614 497 L370 497 Z"},Ka={城南道场:["城南道场",49.6,90.6],西市暗市:["西市",22.9,50],平康崇仁:["平康坊",64.5,44.1],东市宣阳:["东市",74,50],相国府第:["相国府第",74.2,29.4],细民坊巷:["细民坊巷",22.9,32.7],朱雀天街:["朱雀大街",39.2,55],西南冷坊:["西南冷坊",22.9,69.7],曲江池畔:["曲江池",74.2,69.7],皇城宫阙:["皇城",48,36.1]},wn={城南道场:["城南道场",54,85],长安:["长安",55,42],城外:["城外",60,12]},xi={大昭惹萨:[50,46],小昭市坊:[50,23],红山王宫:[16,40],雅隆山南:[58,82],逻些道场:[86,48]},hi={home:"map-panorama.webp",road:"map-road.webp",lhasa:"map-lhasa.webp"};function Wa(t){let e=Sn(t),n=String(t.时空.当前地界||"").split("/")[0].trim(),a=null;if(e==="road"){let o=Ln[n];a=o?[n,o[0],o[1]]:null}else if(e==="lhasa"){let o=xi[n];a=o?[n,o[0],Math.min(96,Math.max(4,Math.round((o[1]-100/6)/(200/3)*1e3)/10))]:null}else a=wn[n]||(n&&!pe.includes(n)?wn.城外:n?wn.长安:null);return{mode:e,src:hi[e],pin:a}}var Oa={会昌:841,大中:847,咸通:860,乾符:874,广明:880,中和:881,光启:885,文德:888,龙纪:889,大顺:890,景福:892,乾宁:894,光化:898,天复:901,天祐:904};function zi(t){let e=/^(..)(元|[一二三四五六七八九十]+)年$/.exec(String(t||"").trim());if(!e||!Oa[e[1]])return-1;let n=0,a=0;for(let o of e[2])o==="元"?n=1:o==="十"?(n+=(a||1)*10,a=0):a="一二三四五六七八九".indexOf(o)+1;return Oa[e[1]]+n+a-1}var ja={841:"赵归真入宫建醮",842:"勒令违戒僧尼还俗",843:"泽潞用兵搜刮铜钱",844:"强拆私刹禁绝俗讲",845:"敕命尽毁天下佛寺",846:"武宗崩 宣宗诛道复寺"},bi=t=>ja[t]||(t>=860?"会昌旧事已远":t>=847?"大中复佛 天下建寺":ja[841]),vi=t=>t.吐蕃之行.赞普遇刺?"赞普遇刺":"灭佛令下",qe=(t,e)=>Qt(t)?{k:"蕃地时局",v:(e.年序号>=0?e.年名:"会昌元年")+" "+vi(t),cls:t.吐蕃之行.赞普遇刺?"mz-red":""}:{k:"灭佛大势",v:(e.年序号>=0?e.年名:"会昌元年")+" "+bi(e.年序号>=0?e.公元:841),cls:""},Ha=["正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],Ra={一月:"正月",腊月:"十二月"};var Da=[[0,1,"元日",0,"官民贺岁饮屠苏，市肆歇业数日"],[0,15,"上元",1,"三日弛禁，满城夜游赏灯"],[0,30,"晦日",0,"士民结伴出城水边送穷"],[1,29,"寒食",0,"家家禁火冷食"],[2,1,"清明",0,"出城上坟踏青，城外秋千蹴鞠"],[2,3,"上巳",0,"士民赴曲江水边祓禊宴饮"],[3,8,"浴佛",0,"诸寺施香汤设法会，百姓进香"],[4,5,"端午",0,"缠五色丝，浐水曲江看竞渡"],[6,7,"七夕",0,"妇人庭中摆瓜果乞巧"],[6,15,"盂兰盆",0,"各处设斋供僧超度，富贵人家出资做法事"],[8,9,"重阳",0,"乐游原登高，佩茱萸饮菊酒"],[10,15,"冬至",0,"官府休假，晚辈献鞋袜，亲友走动"],[11,30,"岁除",0,"傩队沿街驱疫，各家通宵守岁"]],wi=[[3,15,"萨嘎达瓦",0,"佛诞成道日，巡像转经遵令停办，信众暗中绕城"],[5,15,"赛马会",1,"盛夏草滩赛马摔跤射箭，四方牧民聚饮青稞酒"],[6,7,"沐浴节",3,"弃山星现，男女老幼下吉曲河洗浴七日"],[7,1,"望果节",0,"青稞熟前绕田转圈，赛马射箭，庄园宴饮"],[9,30,"古突夜",0,"年尾吃面团驱鬼，全家举火把送鬼出门"],[10,1,"吐蕃新年",1,"部族聚在开阔地煨桑祭天，杀羊祈赞普长寿，互送节礼"]],yi=["破败草庵","庄严精舍","敕赐法堂"],Qi={庄严精舍:200,敕赐法堂:1e3},ki={破败草庵:"殿宇陈旧，泥佛落尘，香客罕至",庄严精舍:"殿阁一新，钟磬有声，香客盈门",敕赐法堂:"朝廷题额高悬，自此有名分在身"},Ei={西市暗市:"scene-xishi.webp",平康崇仁:"scene-pingkang.webp",东市宣阳:"scene-dongshi.webp",相国府第:"scene-xiangfu.webp",细民坊巷:"scene-ximin.webp",朱雀天街:"scene-tianjie.webp",西南冷坊:"scene-lengfang.webp",曲江池畔:"scene-qujiang.webp",皇城宫阙:"scene-huangcheng.webp",陇山关隘:"scene-longshan.webp",秦州渭谷:"scene-qinzhou.webp",河州渡口:"scene-hezhou.webp",鄯州湟谷:"scene-shanzhou.webp",赤岭青海:"scene-chiling.webp",柏海河源:"scene-baihai.webp",玉树河谷:"scene-yushu.webp",唐古那曲:"scene-naqu.webp",大昭惹萨:"scene-dazhao.webp",小昭市坊:"scene-xiaozhao.webp",红山王宫:"scene-hongshan.webp",雅隆山南:"scene-yalong.webp",逻些道场:"scene-luoxie.webp"},Na={破败草庵:"scene-hall-1.webp",庄严精舍:"scene-hall-2.webp",敕赐法堂:"scene-hall-3.webp"},_n=t=>String(t.时空.当前地界||"").split("/")[0].trim(),Ba={钉封家庙:"scene-luoxie.webp",启封经堂:"scene-luoxie-2.webp",王廷供殿:"scene-luoxie-3.webp"};function Tn(t){let e=_n(t);return e==="城南道场"?Na[t.道场.正殿等级]||Na.破败草庵:e==="逻些道场"?Ba[t.道场.正殿等级]||Ba.钉封家庙:Ei[e]||""}var Si={破败草庵:"hall-1-hut.webp",庄严精舍:"hall-2-vihara.webp",敕赐法堂:"hall-3-edict.webp"},Li={破败草庵:["一倍","市井细民","无敕额的私刹，官府清查易拆"],庄严精舍:["二倍","豪商命妇","开无尽藏放贷"],敕赐法堂:["四倍","豪门贵客","敕额官寺，官府清查不拆"]},rt=["粗成","精工","天工"],Xa={粗成:"mz-q1",精工:"mz-q2",天工:"mz-q4"},me={粗成:25,精工:100,天工:200},Pe={精工:75,天工:100},dt=["地面","地下一层","地下二层","地下三层"],$e={地下二层:150,地下三层:300},Zt=t=>Math.min(3,Math.max(1,Number(t.道场.地宫深度)||1)),Mn=t=>dt.slice(0,Zt(t)+1),Fe=(t,e)=>dt.includes(e.层)?e.层:(P(t).蓝图.find(n=>n.名===e.名)||{}).层||"地下一层",In={无:3,粗成:5,精工:8,天工:12},An={教务:10,法事:20,暗账:50},Ya={教务:"信众满十人开启",法事:"信众满二十人开启",暗账:"信众满五十人开启",库藏:"建成库房开启",同心缕:"结识女主开启"},ft=[{kind:"药品",price:15,shop:"丹房",words:["丹房"],ph:["醉仙散","饮之如坠云雾，半个时辰方醒"]},{kind:"道具",price:30,shop:"机关声光室",words:["机关","声光"],ph:["悬丝佛手","暗牵细丝，佛手于香烟中自举"]},{kind:"法器",price:50,shop:"熔金工坊",words:["熔金","工坊","作坊"],ph:["鎏金法铃","灌顶仪轨摇铃，声闻地宫"]}],Ja=["密坛","坛城","坛场"],_i=[{名:"丹房",层:"地面",用途:"煎炼迷香安神散一类药物",说明:"采后院药圃所种曼陀罗、颠茄与诸般草药，煎炼迷香、安神散一类药物。药圃翻土重种，屋内架起药炉、药臼与分馏的铜管蒸器，炉火昼夜不熄。"},{名:"宿曜星堂",层:"地面",用途:"推命断卦，关门私谈攻心",说明:"教主在此为香客推命断卦，也与贵客关起门来私谈，攻其心防。偏殿辟出的静室，墙上张挂二十八宿星图与地狱变相图，一几一灯，门一合便与外间隔绝。"},{名:"居士客房",层:"地面",用途:"留宿香客贵人，受药静养",说明:"留宿远来的香客与贵重客人，受药调理、静养过夜都在此处。后院僧房修葺成几间厢房，素帐矮榻，窗下一炉安神香，白日看是清修所在。"},{名:"护摩火坛",层:"地面",用途:"火祭焚物祈禳，法事压轴",说明:"火祭与大场面法事的压轴之处，焚物祈禳，烈焰冲天时满场信众跪倒。庭前垒石为坛，坛底暗铺松脂与白磷，投物入火便爆出异色火光。"},{名:"曼荼罗密坛",层:"地下一层",用途:"灌顶双修与一切秘密仪轨",说明:"地宫核心，灌顶、双修与一切秘密仪轨皆在此举行。地面铺厚毡软垫，正中一座雕花法座，四角长明灯环列，幔帐低垂，四壁密教画像在灯影里若隐若现。"},{名:"温汤池",层:"地下一层",用途:"受灌者沐浴香汤，净身敷药",说明:"受灌者在此沐浴香汤、净身敷药，而后登坛。引泉修筑的药浴池，池底走火道加温，水面终年浮着一层药气与热雾。"},{名:"机关声光室",层:"地下一层",用途:"操弄灯影佛语造神迹，制机巧道具",说明:"操弄灯影、佛语与钵鸣，在坛场造出种种神迹，也制作诸般机巧道具。法座后方的夹层暗室，内设凹面铜镜、通向正殿佛像腹腔的传声铜管、调光风阀与一槽水银，一人在暗处便可号令满堂。"},{名:"熔金工坊",层:"地下二层",用途:"熔金销赃，铸嘎巴拉碗金刚杵",说明:"将带记号的金银首饰熔成无记号的金条，也铸嘎巴拉碗、金刚杵一类法器。地宫下风处开一座排烟暗窑，炉火与锤声被厚土掩住，烟气顺暗道散入后山。"},{名:"夹壁密档",层:"地下二层",用途:"收存发露状血契与暗账",说明:"收存入教者的发露状与血契、记载外人把柄与债契的簿册，以及伪造的路引文牒。地宫夹墙里凿出的暗阁，一道假壁封门，非教主亲启无人知其所在。"},{名:"暗室地牢",层:"地下二层",用途:"拘禁细作背约者，逼写发露状",说明:"拘禁细作与背约之人，逼其亲笔写下发露状，再以此拿捏。地宫深处一间封闭暗室，铁环锁链嵌在土壁上，一盏孤灯，昼夜不分。"},{名:"库房",层:"地下一层",用途:"收储成药道具法器，分屉存放",说明:"收储制成的药品、道具与法器，分屉存放，随取随用。干燥土窖里搭起木架与屉匣，以石灰防潮，每屉贴签，教主一看便知存余几何。"},{名:"无尽藏柜坊",层:"地下二层",用途:"放贷立契收息，以钱债拴人",说明:"以教团之名向外放贷，立契收息，借钱债将人拴住。账房模样的柜坊，柜内置契匣与算筹，金银另藏暗格，一本账簿记满城欠户。"}],Ti={丹房:"fac-danfang.webp",宿曜星堂:"fac-xingtang.webp",居士客房:"fac-kefang.webp",护摩火坛:"fac-huotan.webp",曼荼罗密坛:"fac-mitan.webp",温汤池:"fac-wentang.webp",机关声光室:"fac-jiguan.webp",熔金工坊:"fac-rongjin.webp",夹壁密档:"fac-midang.webp",暗室地牢:"fac-dilao.webp",库房:"fac-kufang.webp",无尽藏柜坊:"fac-guifang.webp"},Mi={粗成:"own-1-rough.webp",精工:"own-2-fine.webp",天工:"own-3-grand.webp"},to="loan-guifang.webp",Ii=["钉封家庙","启封经堂","王廷供殿"],Ai={启封经堂:200,王廷供殿:1e3},Ci={钉封家庙:"木板横封殿门冷落，唯从后院出入",启封经堂:"封条既除酥油重燃，还俗僧客登门",王廷供殿:"金顶重光宝幢高悬，王廷盟书在案"},Oi={钉封家庙:"hall-lx-1-sealed.webp",启封经堂:"hall-lx-2-opened.webp",王廷供殿:"hall-lx-3-court.webp"},ji={钉封家庙:["一倍","咒师属民","封条未除之私庙，兵差可查可夺"],启封经堂:["二倍","还俗僧与牧户","开青稞义仓放贷"],王廷供殿:["四倍","尚论王妃","王廷盟书在手，兵差不查不夺"]},Hi=[{名:"丹房",层:"地面",用途:"炼制迷香安神散，配红花雪莲",说明:"采高原红花、雪莲与麝香，配以汉地带来的曼陀罗种子，煎炼迷香与安神药散。碉房一角架起药炉药臼，牛粪慢火昼夜不熄，苦涩药气混着酥油香味飘满屋子。"},{名:"译经房",层:"地面",用途:"译校法本，借谱系正名攻心",说明:"教主与赤玛央金在此译校法本，将摩诃瑜伽残卷与汉地密续对勘为完整谱系。房内整齐堆叠贝叶梵本与藏纸卷轴，长案上摆着朱砂墨汁、骨制尺压与两盏酥油铜灯。"},{名:"碉房客舍",层:"地面",用途:"留宿远客贵人，受药静养",说明:"留宿远道而来的咒师、行商与世家贵人，在此受药调理并静养过夜。后院僧房修葺得齐整避风，铺着厚实氆氇与羊毛毡垫，窗下铜炉里常年燃着柏枝桑烟。"},{名:"煨桑火坛",层:"地面",用途:"煨桑火祭祈禳，法事压轴",说明:"主持煨桑火祭与大场面祈禳法事，借冲天烈焰与松柏浓烟聚拢信众敬畏。前院中央以规整乱石砌成方坛，坛底暗设排烟气孔与火道，投掷祭品便能激起阵阵彩色火光。"},{名:"青稞义仓",层:"地面",用途:"贷青稞牲畜立契收息，以债拴人",说明:"借家庙之名向属民与落魄贵族贷放青稞或牛羊，立契收息并拴牢各方人手。粗石砌筑的仓房深处堆满木板粮囤，算筹与借契匣藏在暗柜后，账簿上写满各坊欠户名字。"},{名:"彩砂坛城",层:"地下一层",用途:"灌顶双修与一切秘密仪轨",说明:"地下核心秘所，灌顶受戒、双修调摄与诸般秘密仪轨皆在此处闭门举行。石地中央以五色矿物彩砂铺就繁复坛城，法座四周立着环形铜灯，四壁彩绘本尊在昏暗灯火里隐现。"},{名:"温泉净坛",层:"地下一层",用途:"受灌者沐浴温泉，净身敷药",说明:"受灌信徒在此沐浴温水、敷抹草药膏泥，荡涤身心后方可步入密坛。天然温泉水顺着石渠引入地窖深池，池面蒸腾着草药热雾，四周以整块花岗岩砌出宽阔阶台。"},{名:"机关声光室",层:"地下一层",用途:"操弄灯影佛语造神迹，制机巧道具",说明:"操演光影幻境与浑厚佛音以显现神迹，同时制作各类施法所需的机巧道具。法座后方的石壁夹室内架设凹面铜镜，传声铜管暗通佛像腹腔，几道遮光铁板可随意开合。"},{名:"尼婆罗工坊",层:"地下二层",用途:"熔金销赃，铸嘎巴拉碗金刚杵",说明:"雇佣尼婆罗巧匠熔化来历不明的金银财物，并锤锻打制嘎巴拉碗与金刚铃杵等密教法器。地窖下风处设有隐蔽的小型熔炉与风箱，打铁锤声被厚重石壁隔断，烟道顺着石缝排向深巷。"},{名:"经卷密窖",层:"地下二层",用途:"收存发露状血契与托付的经像",说明:"收存信徒的发露血契、记述外人把柄的密簿，以及世家托付避难的禁毁佛像与梵本。干燥石室由一道暗门假壁封隔，层层柏木架上密密麻麻码放着皮纸封套与漆木经夹。"},{名:"暗室地牢",层:"地下二层",用途:"拘禁细作背约者，逼写发露状",说明:"秘密扣押外来探子与背约之人，对其施加攻心与药理手段，逼其亲笔写下发露状。位于地窖最深处的逼仄石室，粗铁环与锁链深嵌石壁，只点一盏酥油单灯，不见日月晨昏。"},{名:"库房",层:"地下一层",用途:"收储成药道具法器，分屉存放",说明:"集中收储制作妥当的丹药、机巧道具与密宗法器，分门别类以便随取随用。高寒干燥的石壁下立满高大木架与抽屉，每格贴着蕃汉两样签条，各类物件存放得井然有序。"}],Ri={丹房:"fac-lx-danfang.webp",译经房:"fac-lx-yijing.webp",碉房客舍:"fac-lx-keshe.webp",煨桑火坛:"fac-lx-huotan.webp",青稞义仓:"fac-lx-yicang.webp",彩砂坛城:"fac-lx-tancheng.webp",温泉净坛:"fac-lx-wenquan.webp",机关声光室:"fac-lx-jiguan.webp",尼婆罗工坊:"fac-lx-gongfang.webp",经卷密窖:"fac-lx-mijiao.webp",暗室地牢:"fac-lx-dilao.webp",库房:"fac-lx-kufang.webp"},Ni={粗成:"own-lx-1-rough.webp",精工:"own-lx-2-fine.webp",天工:"own-lx-3-grand.webp"},eo={长安:{三阶:yi,价:Qi,看:ki,得:Li,殿图:Si,顶阶条件:"须得敕额",凭据:"敕额",敕字:"敕",蓝图:_i,设施图:Ti,自拟图:Mi,贷:{词:"无尽藏",名:"无尽藏柜坊",契:"无尽藏贷与"},作坊:{药品:"丹房",道具:"机关声光室",法器:"熔金工坊"}},逻些:{三阶:Ii,价:Ai,看:Ci,得:ji,殿图:Oi,顶阶条件:"须立盟书",凭据:"盟书",敕字:"盟",蓝图:Hi,设施图:Ri,自拟图:Ni,贷:{词:"义仓",名:"青稞义仓",契:"义仓贷与"},作坊:{药品:"丹房",道具:"机关声光室",法器:"尼婆罗工坊"}}},Ge=t=>eo[t.道场.所在]?t.道场.所在:"长安",P=t=>eo[Ge(t)],no={把柄:"banner-handle.webp",执事:"banner-steward.webp",明妃:"banner-consort.webp",委托:"banner-order.webp",工坊:"banner-craft.webp"},ao="rite-grand.webp",Cn=["药品","道具","法器"],oo={药品:"store-drug.webp",道具:"store-tool.webp",法器:"store-ritual.webp"},Mt={库藏:12,暗账:5,法事委托:3,执事名册:24,明妃录:12},gt={兴造:(t,e,n,a,o)=>"【兴造】"+t+"（"+e+(o?"，"+o:"")+"）已破土动工，账房已扣"+x(a)+"贯，此笔不再入账。"+(n?"奇效议定："+n:""),开凿:(t,e)=>"【兴造】地宫向下开凿至"+t+"，匠人已趁夜动土，账房已扣"+x(e)+"贯，此笔不再入账。",升殿:(t,e)=>"【兴造】正殿改建"+t+"，匠人已开工动土，账房已扣"+x(e)+"贯，此笔不再入账。",升造:(t,e,n,a,o)=>"【兴造】"+t+"自"+e+"改造为"+n+"，匠人已动工，账房已扣"+x(o)+"贯，此笔不再入账。"+(a?"奇效议定："+a:""),工巧:(t,e,n)=>"【工巧】"+e+"「"+t+"」已拨资开炉，账房已扣"+x(n)+"贯，此笔不再入账。",兴造多:(t,e)=>"【兴造】"+x(t.length)+"事同举："+t.join("、")+"已一并破土动工，账房共扣"+x(e)+"贯，此笔不再入账。",工巧多:(t,e)=>"【工巧】"+x(t.length)+"事同炉："+t.join("、")+"已一并拨资开炉，账房共扣"+x(e)+"贯，此笔不再入账。",放贷:(t,e)=>"【无尽藏】放贷"+x(e)+"贯与"+t+"，立契画押，账房已出"+x(e)+"贯，此笔不再入账。",勒索:t=>"【勒索】凭簿上所记把柄，向"+t+"开口勒索。"},ro="零一二三四五六七八九";function yn(t){if(t===0)return"零";let e=["","十","百","千"],n="",a=!1,o=String(t);for(let r=0;r<o.length;r++){let i=+o[r],s=o.length-1-r;if(i===0){a=!0;continue}a&&(n+="零",a=!1),n+=ro[i]+e[s]}return o.length===2&&n.startsWith("一十")&&(n=n.slice(1)),n}function x(t){if(t=Math.max(0,Math.round(+t||0)),t<1e4)return yn(t);let e=Math.floor(t/1e4),n=t%1e4;return yn(e)+"万"+(n?(n<1e3?"零":"")+yn(n):"")}function U(t){t=Math.max(0,Math.round(+t||0));let e=Math.floor(t/1e3),n=t%1e3;return e?x(e)+"贯"+(n?x(n)+"文":""):n?x(n)+"文":"零贯"}var W=t=>Math.round((Number(_.get(t,"财务.铜钱"))||0)*1e3);function Ut(t){let e=String(t||"").split("/").map(c=>c.trim()),n=zi(e[0]),a=n<0?-1:n-841,o=(e[1]||"").replace(/^闰/,""),r=Ha.concat(Object.keys(Ra)).filter(c=>o.startsWith(c)).sort((c,l)=>l.length-c.length)[0]||null,i=r?o.slice(r.length).replace(/日$/,""):"";r&&(r=Ra[r]||r);let s=Bi(i);return{年序号:a,年名:e[0]||"",公元:n,月序号:r?Ha.indexOf(r):-1,月名:r,日:s,日文:i,时辰:e[2]||"",月标:a>=0&&r?e[0]+"/"+r:""}}function Bi(t){if(t=String(t||"").replace(/^初/,""),!t)return 0;if(/^\d+$/.test(t))return+t;let e=0,n=0;for(let a of t){let o=ro.indexOf(a);o>=0?n=o:a==="十"?(e+=(n||1)*10,n=0):a==="廿"?(e+=20,n=0):a==="卅"&&(e+=30,n=0)}return e+n}var qi=t=>t.月序号*30+t.日;function Pi(t,e=Da){if(t.月序号<0||!t.日)return{今日:null,将至:null};let n=qi(t),a=null,o=null;for(let[r,i,s,c,l]of e){let p=r*30+i,d=p-n;if(Math.abs(d)<=c){a={名:s,氛围:l};break}d>0&&d<=7&&(!o||d<o.余日)&&(o={名:s,余日:d})}return{今日:a,将至:o}}var $i={元日:"fest-yuanri.webp",上元:"fest-shangyuan.webp",晦日:"fest-huiri.webp",寒食:"fest-hanshi.webp",清明:"fest-qingming.webp",上巳:"fest-shangsi.webp",浴佛:"fest-yufo.webp",端午:"fest-duanwu.webp",七夕:"fest-qixi.webp",盂兰盆:"fest-yulanpen.webp",重阳:"fest-chongyang.webp",冬至:"fest-dongzhi.webp",岁除:"fest-suichu.webp"},Fi={萨嘎达瓦:"fest-xue-sagadawa.webp",赛马会:"fest-xue-saima.webp",沐浴节:"fest-xue-muyu.webp",望果节:"fest-xue-wangguo.webp",古突夜:"fest-xue-gutu.webp",吐蕃新年:"fest-xue-xinnian.webp"};function On(t){let e=Qt(t),n=Pi(Ut(t.时空.时间),e?wi:Da).今日;return n?{名:n.名,氛围:n.氛围,src:(e?Fi:$i)[n.名]}:null}var It=t=>/^\s*(?:<StatusPlaceHolderImpl\s*\/?>\s*)*【开场介绍】/.test(String(t||"")),io="雪域佛国",so="央金",lo=["前几天西市来了一队蕃商，我去帮着搬皮货，听他们说了好多逻些的事。商队的人讲，大昭寺的门全被钉上了厚铁板，我母亲家里在惹萨的那座家庙也贴了封条。以前在宫里教过我念经的上师，全被逼着脱了僧袍进山打猎；散在民间的那些咒师没人指点，手里的法本残缺不全，心里全没了着落。那天夜里我坐在窗边想了很久，一直没能睡下。","在城南听你讲法、看你结手印，我才确信自己这一路翻山越岭逃来长安，到底是为了什么。你手里的法，路数同我父亲当年宫里传的一样，却比雪山上那些残卷讲得深得多、全得多。我是赞普的女儿，父亲不在了，法脉不能断在我手里。可凭我一个人护不住它，只有跟着你，这法才能真正在雪域活下去。","翻过赤岭往西，部落和庄园里的老人还认得我的血脉；母亲在惹萨那座被封的家庙地方宽敞、地窖也深，去了能有个落脚立坛的根本。我想请你同我回一趟藏地，去逻些立一座道场。这趟路顺着驿道也要走三个多月，出了关隘全是风雪和大草滩，去了不知何年才能再回长安。这些难处我都反复掂量过，总要先同你把底细说透。","若你愿意同我走这一趟，等你想好了，同我说一声便好。"],Ve="应允央金所请，同去逻些立道场，即日筹备进藏。",de=t=>t.吐蕃之行.进藏行程==="未出发"&&t.吐蕃之行.来信===!0;var jn=null;function H(t){jn=t}function Ze(){if(jn)return jn;try{if(typeof getVariables=="function"){let t=getVariables({type:"message",message_id:"latest"});if(t&&t.stat_data)return t.stat_data}}catch(t){y("stat:latest",t)}try{if(typeof getAllVariables=="function"){let t=getAllVariables();if(t&&t.stat_data)return t.stat_data}}catch(t){y("stat:all",t)}try{if(typeof getLastMessageId=="function"&&getLastMessageId()===0&&typeof getChatMessages=="function"){let t=getChatMessages(0,{include_swipes:!0})[0],e=t&&t.swipes_data&&t.swipes_data[t.swipe_id||0];if(e&&e.stat_data)return e.stat_data}}catch(t){y("stat:swipe0",t)}return null}var ut=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:{},D=t=>t==null?"":String(t),co=t=>Math.max(0,Math.round(Number(t)||0)),Gi=t=>Math.max(0,Math.round((Number(t)||0)*1e3)/1e3);function L(t){let e=t||Ze()||{},n=o=>_.get(e,o),a={};return B.forEach(o=>{let r=ut(n("核心女主."+o));a[o]={灌顶位阶:D(r.灌顶位阶)||"待度欲种",心声:D(r.心声).trim(),回想:ut(r.回想)}}),{时空:{时间:D(n("时空.时间")),当前地界:D(n("时空.当前地界")),已结算至:D(n("时空.已结算至"))},财务:{铜钱:Gi(n("财务.铜钱")),库藏:ut(n("财务.库藏")),暗账:ut(n("财务.暗账"))},道场:{宗风:D(n("道场.宗风")),所在:D(n("道场.所在"))||"长安",正殿等级:D(n("道场.正殿等级"))||"破败草庵",敕额:n("道场.敕额")===!0||n("道场.敕额")==="true",盟书:n("道场.盟书")===!0||n("道场.盟书")==="true",地宫设施:ut(n("道场.地宫设施")),地宫深度:co(n("道场.地宫深度"))},教务:{法事委托:ut(n("教务.法事委托")),信众:co(n("教务.信众")),上次法会:D(n("教务.上次法会"))},核心女主:a,执事名册:ut(n("执事名册")),明妃录:ut(n("明妃录")),系统:{已解锁:(Array.isArray(n("系统.已解锁"))?n("系统.已解锁"):[]).map(D)},吐蕃之行:{进藏行程:D(n("吐蕃之行.进藏行程"))||"未出发",赞普遇刺:n("吐蕃之行.赞普遇刺")===!0||n("吐蕃之行.赞普遇刺")==="true",抵达逻些日期:D(n("吐蕃之行.抵达逻些日期")),来信:n("吐蕃之行.来信")===!0||n("吐蕃之行.来信")==="true",随行:ut(n("吐蕃之行.随行"))},_empty:!t&&!Ze()}}var Vi=pt,po=`
/* ==== 配色（长安炭墨黑金朱为底，藏地换肤见下） ==== */
#mz-shell-root {
  /* 一次切断宿主 body 的继承（投影、字体平滑、字号、color-scheme 都从那来），壳要什么下面重新声明 */
  all: initial;
  /* 字阶九档，见 docs/前端速记.md */
  --fs-title: 28px; --ls-title: 14px;
  --fs-head: 20px; --ls-head: 5px;
  --fs-plaque: 17px; --ls-plaque: 7px;
  --fs-name: 15.5px; --ls-name: 3px;
  --fs-label: 12.5px; --ls-label: 3px;
  /* 正文字号只此一档；窄屏基准另见 phone.js */
  --fs-body: 17.5px;
  --fs-read: 13.5px; --ls-read: .5px;
  --fs-tag: 12px; --ls-tag: 2px;
  --fs-btn: 13.5px; --ls-btn: 2px; --fs-btn-lg: 16px; --ls-btn-lg: 6px;
  /* 三档时长＋两条曲线，全前端不得另写数字 */
  --t-fast: .16s; --t-mid: .28s; --t-slow: .48s;
  --ease-out: cubic-bezier(.22,.61,.36,1);
  --ease-paper: cubic-bezier(.16,.84,.3,1);
  /* ==== 炭墨黑金朱：五层黑（底 < 纸 < 窗 < 卡）／三档字／四档金／一种红，全壳颜色只许引用此处 ==== */
  --bg0: #0f0d0b;
  --bg1: #1c1915;
  --bg2: #211d18;
  --bg3: #25211b;
  --bg4: #2d2822;
  --txt: #e6dcc8;
  --txt-dim: #a89d87;
  --txt-faint: #6f6857;
  --gold-say: #e3c47a;
  --gold-hi: #c4a563;
  --gold: #a68a4d;
  --gold-line: #5e5032;
  --gold-rgb: 166,138,77;
  --red: #e0362a;
  --red-soft: #b5281f;
  --red-rgb: 224,54,42;
  --on-red: #f6ecd8;
  /* 敕字金：敕印上的那一字，炭墨与对白金同色 */
  --chi: #e3c47a;
  /* 字压金：金底钮悬停时钮上的字，取纸或框的底色 */
  --on-gold: #0f0d0b;
  /* 凹面：缩略图下状态整表比底再沉一层 */
  --sunk: color-mix(in srgb, var(--bg0) 60%, #000);
  /* 阴影色：全壳投影只许引用此处，浅底主题换青灰 */
  --sh-rgb: 0,0,0;
  /* 藏纸上的墨：信笺是壳里唯一的亮纸面，纸上字用墨色不用象牙 */
  --paper-ink: #3b2f21;
  --paper-ink-dim: #6e5b43;
  --paper-ink-rgb: 59,47,33;
  /* 藏纸纹框双线：藏青内线、赭石外线，纸不换肤故两主题同色 */
  --paper-line-in: rgba(64,80,110,.34);
  --paper-line-out: rgba(150,90,56,.42);
  /* 雪白只给「雪域佛国」雪幕：字与雪片一色，底压蓝黑 */
  --snow: #eef3f7;
  --snow-rgb: 238,243,247;
  --snow-bg-rgb: 6,10,16;
  /* 积雪到头的色：取藏地图底色，与米纸同系只差一档，散幕时纸区近乎无缝且不闪白，字沉进同一色里 */
  --snow-deep: #e4dccb;
  --line: rgba(var(--gold-rgb), .28);
  --line-soft: rgba(var(--gold-rgb), .14);
  --scrim: rgba(0,0,0,.62);
  /* 底纹只此一种：灰度墨云纹以 overlay 叠在侧栏顶栏，似有似无，两主题同值；浮窗与纸面永不加纹 */
  --tex: url('${Vi}bg-ink.webp');
  --tex-op: .12;
  --read-col: 700px;
  --side-w: clamp(260px, 22vw, 420px);
  --top-h: 64px;
  --bar-tot: calc(60px + env(safe-area-inset-bottom, 0px));
  /* 断点走容器查询：外壳本身即视口，预览页可框定外壳尺寸直接看 */
  container-type: size; container-name: mz;
}

/* ==== 藏地「藏青框＋藏纸面」：进藏在途／久住整壳换肤（09-board.js applyTheme 挂 .mz-xue）。框深纸浅两面：侧栏顶栏藏青深底，正文与浮窗暖米藏纸；纸面令牌在此块，框面令牌在下一块只挂深底容器，靠继承换字色不改结构 ==== */
#mz-shell-root.mz-xue {
  --bg0: #1f2a36;
  --bg1: #f4efe4;
  --bg2: #f9f5ec;
  --bg3: #e4dccb;
  --bg4: #fcf9f2;
  --txt: #2c2620;
  --txt-dim: #5b5142;
  --txt-faint: #8a7f6e;
  --gold-say: #5e4818;
  --gold-hi: #66501a;
  --gold: #9a7f30;
  --gold-line: #cbb97e;
  --gold-rgb: 154,127,48;
  --red: #a3302b;
  --red-soft: #7f2521;
  --red-rgb: 163,48,43;
  --on-red: #f7efe4;
  --chi: #f0d68a;
  --on-gold: #f4efe4;
  --sunk: #161e27;
  --sh-rgb: 31,42,54;
  --line: rgba(var(--gold-rgb), .34);
  --line-soft: rgba(var(--gold-rgb), .18);
  --scrim: rgba(var(--sh-rgb), .62);
}
/* 框面：深底容器（侧栏／顶栏／浮窗题签／图上小签／立绘空格）内字与金翻亮 */
#mz-shell-root.mz-xue :is(.mz-side, .mz-topbar, #mz-lift .mz-held h3, .mz-atlas .mz-lbl, .mz-atlas .mz-stop, .mz-atlas .mz-abroad-mark, .mz-cell.mz-blank i, .mz-cell.mz-lock i) {
  --bg3: #2a3644;
  --txt: #e8e1d3;
  --txt-dim: #aeb4bd;
  --txt-faint: #727d8a;
  --gold-say: #d9bd77;
  --gold-hi: #d9bd77;
  --gold: #b39a5a;
  --gold-line: #5c5a48;
  --gold-rgb: 179,154,90;
  --red: #e4574b;
  --red-soft: #b5281f;
  --red-rgb: 228,87,75;
  --on-gold: #1f2a36;
  --sunk: #161e27;
  --sh-rgb: 0,0,0;
  --line: rgba(var(--gold-rgb), .28);
  --line-soft: rgba(var(--gold-rgb), .14);
}

:where(#mz-shell-root), :where(#mz-shell-root) * { margin: 0; padding: 0; box-sizing: border-box; }
/* revert 把宿主的标签级作者样式整体退回浏览器默认，不枚举属性——枚举漏一条就破一次 */
.mz-shell :where(a,abbr,address,article,aside,b,bdi,bdo,blockquote,br,button,caption,cite,code,col,colgroup,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hr,i,img,input,ins,kbd,label,legend,li,main,mark,menu,meter,nav,ol,optgroup,option,output,p,picture,pre,progress,q,rp,rt,ruby,s,samp,section,select,small,span,strong,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,tr,u,ul,var,video,wbr) { all: revert; margin: 0; padding: 0; box-sizing: border-box; color: inherit; background: none; }
/* SVG 不入清单：x／y／width／d 在 SVG2 也是表现属性，revert 会连图形抹平；子元素只挡宿主的 * 规则 */
.mz-shell :where(svg) { all: revert; display: block; overflow: visible; box-sizing: border-box; }
.mz-shell :where(svg) * { text-shadow: none; -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }
.mz-shell :where(img) { display: block; -webkit-user-drag: none; user-select: none; }

/* ==== 整体两栏 ==== */
/* 酒馆 html 带 transform，fixed 的包含块是 html 而非视口；手机端 body 又 fixed 使 html 高 0，尺寸不能靠 inset 撑 */
#mz-shell-root {
  position: fixed; inset: 0; width: 100vw; width: 100dvw; height: 100vh; height: 100dvh; z-index: 9000; display: flex;
  font-family: 'Noto Serif SC','Source Han Serif SC','Songti SC','SimSun',serif;
  color: var(--txt); font-size: 16px; -webkit-locale: 'zh';
  box-sizing: border-box; direction: ltr; unicode-bidi: isolate;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--bg1);
  transition: background-color var(--t-slow) var(--ease-out), color var(--t-slow) var(--ease-out);
}
.mz-side, .mz-topbar, .mz-main, #mz-lift .mz-held { transition: background-color var(--t-slow) var(--ease-out), color var(--t-slow) var(--ease-out); }
/* 底纹叠层：只挂侧栏顶栏两面（.mz-tex），子元素须提到其上 */
.mz-tex { position: relative; isolation: isolate; }
.mz-tex::before { content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background: var(--tex) 0 0 / 1024px 1024px repeat; mix-blend-mode: overlay; opacity: var(--tex-op); }
.mz-tex > * { position: relative; z-index: 1; }
/* 滚动条：槽宽 9px 占位不变（正文列对齐靠它），槽内不画轨道，只一条 3px 淡金细杆，悬停才亮 */
#mz-shell-root ::-webkit-scrollbar { width: 9px; height: 9px; }
#mz-shell-root ::-webkit-scrollbar-corner, #mz-shell-root ::-webkit-scrollbar-track { background: transparent; }
#mz-shell-root ::-webkit-scrollbar-thumb { min-height: 48px; border: 3px solid transparent;
  background-clip: padding-box; border-radius: 5px;
  background-color: color-mix(in srgb, var(--gold) 38%, transparent); }
#mz-shell-root ::-webkit-scrollbar-thumb:hover { background-color: color-mix(in srgb, var(--gold) 70%, transparent); }
/* 禁用态光标总规则：表单件与钮走原生 disabled，非表单件走 .mz-off（.mz-lock／.mz-locked 同义） */
#mz-shell-root [disabled], #mz-shell-root .mz-off, #mz-shell-root .mz-lock, #mz-shell-root .mz-locked { cursor: not-allowed; }

`;var mo=`
/* ==== 侧栏骨架 ==== */
.mz-side {
  width: var(--side-w); flex: none; display: flex; flex-direction: column;
  /* 栏底留白 16 加目录末条内边距 10，等于题字下缘到舆图上缘那段（间距 12 加匾额半个余量） */
  padding: 8px 11px 16px; gap: 12px; overflow: hidden;
  background: var(--bg0);
  border-right: 1px solid var(--line);
}

/* 栏头题字：不加线（暗底上的横线与界面分隔线撞车），只靠亮金字与字距立住 */
.mz-plaque {
  position: relative;
  flex: none; display: flex; align-items: center; justify-content: center;
  height: 44px; color: var(--gold-hi);
  font-size: var(--fs-plaque); letter-spacing: var(--ls-plaque); text-indent: var(--ls-plaque);   /* 抵消末字字距，题字真居中 */
  font-weight: 600;
}
/* 收起叉只在窄屏抽屉头行出现 */
.mz-side-x { display: none; }

/* ==== 舆图缩略（侧栏舆图一组） ==== */
#mz-minimap { flex: none; cursor: pointer; transition: translate var(--t-fast) var(--ease-out); }
#mz-minimap:hover { translate: 0 -2px; }
#mz-minimap .mz-map-wrap { position: relative; border: 1px solid var(--gold-line); }
#mz-minimap .mz-map-wrap img { width: 100%; display: block; filter: brightness(.86) saturate(.85); }
/* 三态缩略同高：长安全景 3:2 原比例；逻些方图裁中段成 3:2（钉点纵坐标在 minimapView 换算）；驿路长卷 5:2 窄条 */
#mz-minimap .mz-map-wrap img[data-mode="lhasa"] { aspect-ratio: 3 / 2; object-fit: cover; }
/* 图内暗角压边，钉子提到暗角之上 */
#mz-minimap .mz-map-wrap::after { content: ''; position: absolute; inset: 0; pointer-events: none;
  box-shadow: inset 0 0 40px rgba(var(--sh-rgb),.55); }
/* 坐标对应 map-panorama.webp 上的南郊寺庙，换图必须重标 */
#mz-minimap .mz-map-pin { position: absolute; z-index: 1; left: 54%; top: 85%; width: 9px; height: 9px; border-radius: 50%;
  background: var(--red); border: 1.5px solid var(--on-red); box-shadow: 0 0 6px var(--red); }
#mz-minimap .mz-map-pin::after { content: attr(data-label); position: absolute; left: 13px; top: -4px;
  font-size: 10.5px; letter-spacing: 1px; color: var(--txt-dim); white-space: nowrap;
  background: var(--bg3); padding: 1px 5px; }
/* ==== 舆图下状态整表：地界／灭佛大势，行式统一 ==== */
#mz-minimap .mz-doom { background: var(--sunk);
  border: 1px solid var(--gold-line); border-top: 0; padding: 6px 10px 8px; }
.mz-doom .mz-sr-row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  font-size: 12.5px; line-height: 1.9; letter-spacing: 2px; color: var(--txt-dim); white-space: nowrap; }
.mz-doom .mz-sr-row + .mz-sr-row { border-top: 1px solid rgba(var(--gold-rgb), .12); }
.mz-doom .mz-sr-row span { flex: none; }
.mz-doom .mz-sr-row b { min-width: 0; text-align: right; letter-spacing: .5px; font-weight: 500;
  color: var(--txt); overflow: hidden; text-overflow: ellipsis; }
.mz-doom .mz-sr-row b.mz-red { color: var(--red); }
.mz-doom .mz-sr-row b.mz-dim { color: var(--txt-faint); opacity: .6; }
.mz-doom .mz-sr-row b .mz-loc-sub { font-style: normal; margin-left: 8px; }

/* ==== 玩法入口目录（一列六条，条间不画线：图标、名、小字三层加留白已足够分开） ==== */
/* 条高随屏高：目录有余量时六条均分撑高、到 84px 封顶，余量不足时不缩只滚（flex-shrink 0） */
.mz-nav { flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 1px; padding-top: 2px; overflow-y: auto; }
.mz-nav-item { position: relative; flex: 1 0 auto; max-height: 84px; display: flex; align-items: center; gap: 10px; padding: 10px 9px 10px 8px; cursor: pointer;
  border-left: 3px solid transparent;
  transition: background var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out); }
.mz-nav-ico { width: 26px; height: 26px; flex: none; display: flex; align-items: center; justify-content: center; }
.mz-nav-ico img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 2px 3px rgba(var(--sh-rgb),.5)); }
.mz-nav-main { flex: 1; min-width: 0; }
.mz-nav-lab { display: block; font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--gold);
  white-space: nowrap; transition: color var(--t-fast) var(--ease-out); }
.mz-nav-sub { display: block; margin-top: 2px; font-size: 11.5px; letter-spacing: 1px; color: var(--txt-dim);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mz-nav-item:not(.mz-locked):hover { background: linear-gradient(90deg, rgba(var(--red-rgb), .07), transparent 85%); border-left-color: rgba(var(--red-rgb), .5); }
.mz-nav-item:not(.mz-locked):hover .mz-nav-lab { color: var(--gold-hi); }
.mz-nav-item.mz-on { background: linear-gradient(90deg, rgba(var(--red-rgb), .14), transparent 70%);
  border-left-color: var(--red); }
.mz-nav-item.mz-on .mz-nav-lab { color: var(--gold-hi); }

/* 锁条：整行减淡，位置不空出、不重排 */
.mz-nav-item.mz-locked { cursor: not-allowed; }
.mz-nav-item.mz-locked .mz-nav-ico img { filter: grayscale(1) opacity(.4); }
.mz-nav-item.mz-locked .mz-nav-lab { color: var(--txt-faint); }
.mz-nav-item.mz-locked .mz-nav-sub { color: var(--txt-faint); }
.mz-nav-lock:empty { display: none; }
.mz-nav-lock { width: 13px; height: 13px; flex: none; color: var(--txt-faint); }
.mz-nav-lock svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6;
  stroke-linecap: round; stroke-linejoin: round; }
@keyframes mz-unveil { 0% { background: rgba(var(--gold-rgb), 0); }
  25% { background: rgba(var(--gold-rgb), .3); }
  100% { background: rgba(var(--gold-rgb), 0); } }
.mz-nav-item.mz-unveil { animation: mz-unveil 2.4s var(--ease-out); }

/* ==== 工具栏（顶栏右端 flex 项，读数框自动让位） ==== */
#mz-corner { flex: none; display: flex; align-items: center; gap: 4px; }
#mz-corner button { width: 30px; height: 30px; border: none; background: none; cursor: pointer; padding: 6px;
  color: var(--txt-faint); opacity: .7; transition: opacity var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out); }
#mz-corner button:hover { opacity: 1; color: var(--gold-hi); }
#mz-corner button.mz-on { opacity: 1; color: var(--gold-hi); }
#mz-corner button svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }

`;var Kt=pt,fo=`
/* ==== 卷首机件：更早哨兵 ==== */
.mz-earlier { display: block; margin: -8px auto 20px; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12px; letter-spacing: 2px; color: var(--txt-faint); padding: 4px 12px;
  transition: color var(--t-fast) var(--ease-out); }
.mz-earlier:not([disabled]):hover { color: var(--gold-hi); }
.mz-earlier[disabled] { opacity: .5; }

/* ==== 楼首思维链折叠条 ==== */
.mz-thought { margin: -4px 0 14px; }
.mz-th-head { width: 100%; display: flex; align-items: center; gap: 10px; border: none; background: none;
  cursor: pointer; padding: 4px 0; color: var(--txt-faint); opacity: .7; transition: color var(--t-fast) var(--ease-out), opacity var(--t-fast) var(--ease-out); }
.mz-th-head:hover { color: var(--gold-hi); opacity: 1; }
.mz-th-head .mz-rule { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line)); }
.mz-th-head .mz-rule.mz-r { background: linear-gradient(90deg, var(--line), transparent); }
.mz-th-head img { width: 19px; height: 19px; flex: none; opacity: .78; transition: opacity var(--t-fast) var(--ease-out), scale var(--t-fast) var(--ease-out); }
.mz-th-head:hover img, .mz-thought.mz-open .mz-th-head img { opacity: 1; scale: 1.08; }
.mz-th-body { display: none; margin: 4px 20px 2px; padding: 8px 16px; font-size: 13px; line-height: 2;
  letter-spacing: .3px; color: var(--txt-faint); border-left: 2px solid var(--line-soft); }
.mz-thought.mz-open .mz-th-body { display: block; animation: mz-reveal var(--t-mid) var(--ease-out) both; }

/* ==== 章头图（换地那一楼，思维链下正文上，3:1 横幅，地名 HTML 叠左下） ==== */
.mz-scene { margin: 0 0 14px; cursor: pointer; }
/* 节令横幅只看不点，与章头图同幅同注 */
.mz-scene.mz-fest { cursor: default; }
.mz-scene img { display: block; width: 100%; aspect-ratio: 3 / 1; object-fit: cover; background: var(--bg1); opacity: 0; transition: opacity var(--t-slow) var(--ease-out); }
.mz-scene img.mz-loaded { opacity: 1; }
.mz-scene figcaption { margin-top: 5px; text-align: right; font-size: 11px; letter-spacing: 3px; color: var(--txt-faint); transition: color var(--t-fast) var(--ease-out); }
.mz-scene[data-open-atlas]:hover figcaption { color: var(--gold-hi); }

/* ==== 行动选项（末楼下方一列，点击即发送） ==== */
.mz-opts { margin: 2px 0 12px; }
.mz-opt-head { display: flex; align-items: center; gap: 12px; font-size: 11px; letter-spacing: 4px; text-indent: 4px;
  color: var(--txt-faint); margin-bottom: 6px; }
.mz-opt-head i { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line)); }
.mz-opt-head i:last-child { background: linear-gradient(90deg, var(--line), transparent); }
.mz-opt { display: flex; width: 100%; align-items: baseline; gap: 11px; border: none; background: none;
  cursor: pointer; font-family: inherit; text-align: left; padding: 5px 10px; font-size: 14.5px;
  letter-spacing: .5px; color: var(--txt-dim); line-height: 1.8; transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-opt:hover { color: var(--gold-hi); background: rgba(var(--gold-rgb), .06); }
.mz-opt .mz-num { flex: none; width: 19px; height: 19px; display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; color: var(--txt-faint); border: 1px solid var(--line); translate: 0 2px;
  transition: all var(--t-fast) var(--ease-out); }
.mz-opt:hover .mz-num { color: var(--on-gold); background: var(--gold-hi); border-color: var(--gold-hi); }

/* ==== 楼尾静默行（变量牌居左＋心声名签居右） ==== */
.mz-ff { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin: 12px 0 14px; }
/* 基准 0＋min-content 下限：单枚变量牌塞不进名签旁边时右块才整块换行，不叫牌面压到名签上 */
.mz-ff-vars { flex: 1 1 0; min-width: min-content; display: flex; flex-wrap: wrap; align-items: center; gap: 2px 10px; }
.mz-ff-side { flex: none; margin-left: auto; display: flex; align-items: center; gap: 10px; }
.mz-ff .mz-ff-label { font-size: 11px; letter-spacing: 2px; color: var(--txt-faint); }
.mz-ff-var { display: inline-flex; flex: none; white-space: nowrap; align-items: baseline; gap: 5px; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12px; letter-spacing: 1px; color: var(--txt-dim); padding: 3px 4px;
  transition: color var(--t-fast) var(--ease-out); }
.mz-ff-var:hover { color: var(--gold-hi); }
.mz-ff-var .mz-dv { display: inline-flex; align-items: center; gap: 1px; font-weight: 600; }
.mz-ff-var .mz-dv svg { width: 11px; height: 11px; fill: none; stroke: currentColor; stroke-width: 2;
  stroke-linecap: round; stroke-linejoin: round; }
.mz-ff-var .mz-dv.mz-up { color: var(--red); }
.mz-ff-var .mz-dv.mz-down { color: var(--txt-faint); }
.mz-ff-detail { display: none; margin: -8px 0 14px; padding: 5px 14px; font-size: 12.5px; letter-spacing: 1px;
  color: var(--txt-dim); border-left: 2px solid var(--line-soft); }
.mz-ff-detail.mz-show { display: block; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
.mz-ff-detail b { color: var(--gold-hi); font-weight: 600; }
.mz-ff-voice { display: inline-flex; align-items: center; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12.5px; letter-spacing: 1px; color: var(--txt); padding: 3px 4px;
  transition: color var(--t-fast) var(--ease-out); }
/* 新语红点：楼尾整行共用一枚，不逐人配点 */
.mz-ff-side > .mz-dot { width: 7px; height: 7px; border-radius: 50%; flex: none; background: var(--red);
  box-shadow: 0 0 6px var(--red); animation: breathe 2.6s ease-in-out infinite; }
@keyframes breathe { 0%,100% { opacity: .95; } 50% { opacity: .4; } }
.mz-ff-voice:hover, .mz-ff-voice.mz-open { color: var(--gold-hi); }
/* 心声卡：花押叠印右下角 */
.mz-vc { display: none; gap: 14px; padding: 17px 22px 16px; margin: 0 0 22px;
  position: relative; background: var(--bg3); border: 1px solid var(--line);
  filter: drop-shadow(0 5px 14px rgba(var(--sh-rgb),.28)); }
.mz-vc.mz-show { display: flex; animation: mz-reveal var(--t-slow) var(--ease-paper) both; }
/* 花押：白芷＝苏白芷、石榴＝萧夜沉、幽兰＝裴清砚、桃花＝叶玄薇；赤玛央金暂借桃花，专属花押待出 */
.mz-vc::after { content: ''; position: absolute; right: 24px; bottom: 16px; width: 44px; height: 44px;
  background: var(--stamp) center / contain no-repeat;
  opacity: .55; mix-blend-mode: normal; pointer-events: none; }
.mz-vc.mz-su   { --stamp: url('${Kt}stamp-angelica.webp'); }
.mz-vc.mz-xiao { --stamp: url('${Kt}stamp-pomegranate.webp'); }
.mz-vc.mz-pei  { --stamp: url('${Kt}stamp-orchid.webp'); }
.mz-vc.mz-ye   { --stamp: url('${Kt}stamp-peach.webp'); }
.mz-vc.mz-chi  { --stamp: url('${Kt}stamp-gesang.webp'); }
.mz-vc-img { flex: none; width: 118px; aspect-ratio: 832 / 1216; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg3);
  outline: 1px solid var(--line); }
.mz-vc-img span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: var(--txt-faint); }
.mz-vc-main { flex: 1; min-width: 0; }
.mz-vc-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 7px;
  font-size: 14.5px; letter-spacing: 2px; font-weight: 600; color: var(--txt); }
.mz-vc-tabs { display: inline-flex; gap: 10px; font-size: 11.5px; letter-spacing: 2px; color: var(--txt-faint); font-weight: 400; }
.mz-vc-tabs button { border: none; background: none; cursor: pointer; font-family: inherit; font-size: inherit;
  letter-spacing: inherit; color: var(--txt-faint); padding: 2px 3px; transition: color var(--t-fast) var(--ease-out); }
.mz-vc-tabs button.mz-on, .mz-vc-tabs button:hover { color: var(--gold-hi); }
.mz-vc-text { font-size: 13.5px; line-height: 2; color: var(--txt-dim); }
/* 回想页只渲染最近一条回想，旧条目不进此卡 */
.mz-vc.mz-memoir .mz-vc-text { display: none; }
.mz-vc-memos { display: none; }
.mz-vc.mz-memoir .mz-vc-memos { display: block; }
.mz-vc-memo { font-size: 13.5px; line-height: 2; color: var(--txt-dim); }
.mz-vc-memo b { font-weight: 600; letter-spacing: 1px; color: var(--gold-hi); }
.mz-vc-empty { font-size: 13.5px; line-height: 2; color: var(--txt-faint);
  border-left: 2px solid rgba(var(--gold-rgb), .3); padding-left: 12px; }

/* ==== 主区纸面（顶栏一条横边，其下正文列居中；正文与书写区共用同一张纸） ==== */
.mz-main { flex: 1; min-width: 0; display: flex; flex-direction: column; position: relative;
  /* 正文列两侧总留白：宽屏把列锁在 --read-col，窄屏退到左右各 48 */
  --col-side: max(48px, calc((100% - var(--read-col)) / 2));
  color: var(--txt);
  background: var(--bg1); }

/* ==== 顶栏（桌面端三项读数整组居中于整张纸，工具栏绝对定位贴右不占读数框；纸上只此一条横带） ==== */
.mz-topbar { position: relative; flex: none; height: var(--top-h); display: flex; align-items: center; gap: 22px; padding: 0;
  background: var(--bg0); border-bottom: 1px solid var(--line); }
.mz-topbar > #mz-corner { position: absolute; right: 30px; top: 50%; translate: 0 -50%; }
/* 诸务钮：桌面端不存在，窄屏才是落下面板（侧栏）的开关；描线图标，与右侧工具栏同族 */
.mz-tb-plaque { display: none; flex: none; align-items: center; justify-content: center;
  width: 30px; height: 30px; border: none; background: none; cursor: pointer; padding: 6px; }
.mz-tb-plaque svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
/* 读数框铺满顶栏、内容居中；左右留白与滚动条预留槽照抄正文纸（#mz-paper），读数中线才严格落在正文列中线上；overflow:hidden 顺带裁掉溢出读数 */
.mz-tb-face { flex: 1; min-width: 0; display: flex; align-items: center; justify-content: center; gap: 40px;
  overflow: hidden; scrollbar-gutter: stable both-edges; padding: 0 calc(var(--col-side) - 9px); height: 100%; }
.mz-tb-set { display: flex; align-items: center; gap: 40px; min-width: 0; }
/* 一行账头：标签金常规体在前、值象牙粗体在后，桌面 15px（手机 12）、同 .5 字距，标签与值固定隔 5；三项同式；桌面端不画竖线，组间靠 40 空隔开；桌面端值一律象牙不标金 */
.mz-tb-time { position: relative; flex: none; display: flex; flex-direction: row; align-items: baseline; gap: 5px;
  font-size: 15px; line-height: 1.2; letter-spacing: .5px; text-indent: 0; color: var(--gold); font-weight: 400; white-space: nowrap; }
.mz-tb-time b { text-indent: 0; color: var(--txt); font-weight: 700; }
.mz-tb-time.mz-dim { color: var(--txt-faint); font-weight: 500; }
.mz-tb-i { position: relative; flex: none; display: flex; flex-direction: row; align-items: baseline; gap: 5px;
  font-size: 15px; line-height: 1.2; letter-spacing: .5px; text-indent: 0; color: var(--gold); font-weight: 400; white-space: nowrap; }
.mz-tb-i b { text-indent: 0; color: var(--txt); font-weight: 700; }

/* 槽宽 9px（见 tokens.js）两边各占一道，从总留白里扣掉，正文列才与书写区左右对齐 */
#mz-paper { flex: 1; min-height: 0; overflow-y: auto; scrollbar-gutter: stable both-edges;
  padding: 48px calc(var(--col-side) - 9px) 32px; }
.mz-turn { margin-bottom: 22px; }
/* 正文左对齐不两端对齐：汉字等宽，两端对齐会把行尾空隙摊进字距，窄行上下行字距忽宽忽窄；不用 text-wrap: pretty，iOS Safari 会为匀右缘主动让每行少排一两字 */
.mz-turn.mz-gm { line-height: 2.0; font-size: var(--fs-body); letter-spacing: .3px; color: var(--txt); line-break: strict; text-align: start; }
/* 段宽取字宽（字号＋字距）的整数倍并居中：左对齐时不足一字的行尾余量两边各分一半，不在右侧堆成一条空列 */
.mz-turn.mz-gm p { width: round(down, 100%, calc(var(--fs-body) + .3px)); margin-inline: auto; }
.mz-turn.mz-gm p + p { margin-top: .9em; }
.mz-quote { color: var(--gold-say); }
.mz-inner { color: var(--txt-dim); }
/* 谕印随文跟在末行之后（款后钤印），各行右齐纸边不为印让列 */
.mz-turn.mz-zhu { text-align: right; color: var(--txt); font-size: var(--fs-body); line-height: 2.0; letter-spacing: .3px; padding-right: 2px; }
.mz-turn.mz-zhu.mz-editing::after { content: none; }
.mz-turn.mz-zhu::after { content: '谕'; display: inline-block; margin-left: 10px; font-size: 16px; color: var(--on-red);
  width: 24px; height: 24px; line-height: 24px; text-align: center;
  background: var(--red); border-radius: 4px; translate: 0 -2px; opacity: .82; }

/* ==== 卷末机件：状态行／删除模式条／回到最新钮 ==== */
#mz-status { flex: none; text-align: center; font-size: 12px; letter-spacing: 3px; text-indent: 3px;
  color: var(--txt-faint); padding: 3px var(--col-side) 0; }
#mz-status:empty { display: none; }
#mz-delbar { display: none; align-items: center; justify-content: center; gap: 16px; padding: 9px var(--col-side) 13px;
  font-size: 12.5px; letter-spacing: 2px; color: var(--txt-dim); }
#mz-delbar.mz-show { display: flex; }
#mz-delbar button { border: 1px solid var(--line); background: none; cursor: pointer; font-family: inherit;
  font-size: 12px; letter-spacing: 2px; text-indent: 2px; color: var(--txt-dim); padding: 3px 12px;
  transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out); }
#mz-delbar button:not([disabled]):hover { color: var(--on-gold); background: var(--gold-hi); border-color: var(--gold-hi); }
/* 删楼是不可逆的动作，确认钮走朱 */
#mz-delbar button.mz-danger { color: var(--red); border-color: rgba(var(--red-rgb), .55); }
#mz-delbar button.mz-danger:not([disabled]):hover { color: var(--on-red); background: var(--red); border-color: var(--red); }
#mz-delbar button[disabled] { opacity: .45; }
/* 木鱼中心对齐敕印中心：敕印宽 46 右缘贴 col-side，木鱼宽 34，故左移 23+17 */
#mz-jump { position: absolute; z-index: 5; bottom: 84px; left: calc(100% - var(--col-side) - 40px);
  width: 34px; height: 62px; border: none; padding: 0; cursor: pointer; display: none;
  background: url('${Kt}hanging-fish.webp') center / contain no-repeat;
  filter: drop-shadow(0 4px 8px rgba(var(--sh-rgb),.4));
  transform-origin: top center; transition: filter var(--t-fast) var(--ease-out), rotate var(--t-mid) var(--ease-out); }
#mz-jump.mz-show { display: block; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
#mz-jump:hover { filter: drop-shadow(0 6px 12px rgba(var(--sh-rgb),.55)); rotate: 4deg; }

/* ==== 卷末书写区（并进瀑布流，界栏隔开） ==== */
#mz-writing { flex: none; position: relative; display: flex; align-items: flex-end; gap: 10px;
  padding: 12px var(--col-side) 24px; }
#mz-writing::before { content: ''; position: absolute; top: 0; left: var(--col-side); right: var(--col-side); height: 1px;
  background: linear-gradient(90deg, transparent, var(--line), transparent); }
.mz-w-tools { display: flex; gap: 2px; padding-bottom: 4px; }
.mz-w-tools button { width: 28px; height: 28px; border: none; background: none; cursor: pointer; padding: 6px;
  color: var(--txt-faint); opacity: .55; transition: opacity var(--t-fast) var(--ease-out), translate var(--t-fast) var(--ease-out); }
.mz-w-tools button:not([disabled]):hover { opacity: 1; translate: 0 -1px; }
.mz-w-tools button[disabled] { opacity: .22; }
.mz-w-tools button svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
#mz-writing textarea { flex: 1; min-width: 0; resize: none; border: none; outline: none;
  font-family: inherit; font-size: 15px; line-height: 26px; min-height: 36px; max-height: 156px;
  padding: 6px 2px 4px; color: var(--txt); caret-color: var(--gold-hi);
  background: transparent;
  /* 界行线起点须对齐 padding-top，线才落在每行字底 */
  background-image: repeating-linear-gradient(180deg, transparent 0 25px, rgba(var(--gold-rgb), .18) 25px 26px);
  background-position: 0 6px;
  background-attachment: local; }
#mz-writing textarea[disabled] { opacity: .55; }
#mz-writing textarea::placeholder { color: var(--txt-faint); opacity: 1; }
#mz-send {
  width: 46px; height: 48px; flex: none; border: none;
  background: var(--red-soft);
  color: var(--chi); cursor: pointer;
  font-family: inherit; font-size: 20px; font-weight: 600;
  display: flex; align-items: center; justify-content: center;
  box-shadow: inset 0 0 0 2px var(--red-soft), inset 0 0 0 3px var(--gold);
  text-shadow: 0 1px 2px rgba(var(--sh-rgb),.6), 0 0 1px rgba(var(--sh-rgb),.4);
  filter: drop-shadow(0 6px 14px rgba(var(--sh-rgb),.4));
  transition: translate var(--t-fast) var(--ease-out), filter var(--t-fast) var(--ease-out);
}
#mz-send:hover { filter: drop-shadow(0 8px 18px rgba(var(--sh-rgb),.5)); translate: 0 -2px; }
#mz-send:active { translate: 0 2px; }

`;var go=`
/* ==== 浮窗（墨底＋竖排悬签＋内圈暗金细线） ==== */
/* 壳内浮层一律 absolute 以壳根为包含块（fixed 会以酒馆带 transform 的 html 为包含块，手机端高 0） */
#mz-lift { position: absolute; inset: 0; z-index: 40; background: var(--scrim); backdrop-filter: blur(3px);
  display: none; align-items: center; justify-content: center; }
#mz-lift.mz-show { display: flex; }
/* 尺寸走百分比而非 vw／vh：浮窗是壳根 inset:0 的子元素，壳被框小时（预览页 ?vw=）vw 仍按真视口算 */
#mz-lift .mz-held { width: min(1000px, 94%); height: min(720px, 84%);
  position: relative; display: flex; flex-direction: column;
  background-color: var(--bg2);
  filter: drop-shadow(0 3px 5px rgba(var(--sh-rgb),.4)) drop-shadow(0 24px 48px rgba(var(--sh-rgb),.55)); }
#mz-lift .mz-held::before { content: ''; position: absolute; inset: 9px; pointer-events: none; z-index: 1;
  border: 1px solid rgba(var(--gold-rgb),.45); }
/* 题签悬出纸上缘；窗内排版须避让左上题签区（宽约46px、入纸约70px） */
#mz-lift .mz-held h3 { position: absolute; top: -34px; left: 26px; z-index: 2;
  writing-mode: vertical-rl; letter-spacing: 6px; padding: 31px 13px;
  font-size: 15px; font-weight: 600; color: var(--gold-hi);
  background: var(--bg0);
  box-shadow: inset 0 0 0 1px var(--gold-hi), 0 6px 14px rgba(var(--sh-rgb),.6); }
/* 滚动容器缩进内圈金线之内（线在 9px，容器留 10px 外边距），内容滚到头也压不过线；原留白总量不变 */
#mz-lift .mz-held .mz-held-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; margin: 10px; padding: 20px 24px 16px; }
#mz-lift .mz-held .mz-stub { margin: auto; text-align: center; color: var(--txt-faint); font-size: 13.5px; letter-spacing: 4px; }
/* 开窗四层错拍；mz-hide 由 closeLift 挂，动画播完才卸 mz-show */
#mz-lift.mz-show { animation: lift-scrim var(--t-mid) var(--ease-out) both; }
@keyframes lift-scrim { from { background: transparent; backdrop-filter: blur(0); } }
#mz-lift.mz-show .mz-held { animation: lift-settle var(--t-slow) var(--ease-paper) both; }
@keyframes lift-settle { from { opacity: 0; translate: 0 -18px; } }
#mz-lift.mz-show .mz-held h3 { animation: lift-tab var(--t-slow) .1s var(--ease-paper) both; }
@keyframes lift-tab { from { opacity: 0; translate: 0 -16px; } }
#mz-lift.mz-show .mz-held .mz-held-body { animation: lift-body var(--t-slow) .14s var(--ease-out) both; }
@keyframes lift-body { from { opacity: 0; translate: 0 6px; } }
#mz-lift.mz-hide { animation: lift-scrim var(--t-mid) var(--ease-out) reverse both; pointer-events: none; }
#mz-lift.mz-hide .mz-held { animation: lift-leave var(--t-mid) var(--ease-out) both; }
@keyframes lift-leave { to { opacity: 0; translate: 0 -10px; } }
#mz-lift.mz-hide .mz-held h3, #mz-lift.mz-hide .mz-held .mz-held-body { animation: none; }

/* ==== 开坛窗（第 0 楼开局）：题头写在纸面顶端，遮罩点击不关、无关闭钮 ==== */
/* 两步同一尺寸不跳：高定死；宽 1000 与其余浮窗齐 */
#mz-lift.mz-gate .mz-held { width: min(1000px, 94%); height: min(640px, 84%); }
#mz-lift.mz-gate .mz-held h3 { position: static; translate: none; writing-mode: horizontal-tb;
  background: none; box-shadow: none; padding: 34px 44px 0; margin: 0; z-index: 2; text-align: center;
  font-size: var(--fs-title); letter-spacing: var(--ls-title); text-indent: var(--ls-title); font-weight: 600; color: var(--txt); }
#mz-lift.mz-gate.mz-show .mz-held h3 { animation: gate-title var(--t-slow) .12s var(--ease-out) both; }
@keyframes gate-title { from { opacity: 0; translate: 0 -6px; letter-spacing: calc(var(--ls-title) + 6px); } }
#mz-lift.mz-gate .mz-held .mz-held-body { padding: 6px 34px 20px; }
.mz-win.mz-gate-win { gap: 22px; }
.mz-gate-win::before { content: ''; display: block; height: 1px; margin: 0 8% 4px; background: linear-gradient(90deg, transparent, var(--line) 20%, var(--line) 80%, transparent); }
.mz-gate-win h4 { margin: 0 0 12px; font-size: var(--fs-label); font-weight: 400; letter-spacing: var(--ls-label); color: var(--txt-faint); display: flex; align-items: center; gap: 12px; }
.mz-gate-win h4::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--line), transparent); }
/* 两步同一副骨架：左整幅 3:2 图、右文或右格，两列 minmax(0,…) 图的固有宽不许撑列 */
.mz-gate-body { display: flex; flex-direction: column; flex: 1; min-height: 0; overflow-y: auto; }
.mz-gate-two { display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); gap: 24px; align-items: stretch; flex: none; }
/* 空盒子在拉伸对齐的网格里靠 aspect-ratio 撑高，iOS 会算成零高，改用内边距撑出 3:2 */
.mz-gate-img { min-width: 0; height: 0; padding-top: 66.667%; background: var(--bg3) center / cover no-repeat; box-shadow: inset 0 0 0 1px var(--line); }
/* 右列走卷题＋正文两档：题名 20px，简介同正文字号 */
.mz-gate-text { display: flex; flex-direction: column; gap: 12px; min-width: 0; padding-top: 2px; }
.mz-gate-text b { font-size: var(--fs-head); letter-spacing: var(--ls-head); color: var(--txt); font-weight: 600; }
.mz-gate-text p { margin: 0; font-size: var(--fs-body); line-height: 2; color: var(--txt-dim); text-align: start; }
.mz-gate-text .mz-gate-nav { margin-top: auto; }
.mz-gate-nav { display: flex; align-items: center; justify-content: flex-start; gap: 14px; font-size: 12.5px; letter-spacing: 2px; color: var(--txt-faint); margin-top: 2px; }
.mz-gate-nav button { border: none; background: none; cursor: pointer; color: var(--txt-dim); width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; }
.mz-gate-nav button svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.mz-gate-nav button:not([disabled]):hover { color: var(--gold-hi); }
.mz-gate-nav button:first-child svg { rotate: 180deg; }
.mz-gate-nav button[disabled] { opacity: .3; }
/* 双类压过 windows.js 的 4:1 横幅基样 */
.mz-rite-pic.mz-gate-pic { aspect-ratio: 3 / 2; min-width: 0; }
/* 双类压过 windows.js 的三列基样；五格竖排与图等高 */
.mz-picks.mz-gate-picks { grid-template-columns: minmax(0, 1fr); grid-auto-rows: 1fr; gap: 8px; }
.mz-gate-sect { justify-content: center; padding: 8px 14px; }
.mz-gate-sect b { font-size: var(--fs-name); letter-spacing: var(--ls-name); white-space: nowrap; transition: color var(--t-mid) var(--ease-out); }
.mz-gate-sect small { font-size: var(--fs-read); letter-spacing: var(--ls-read); line-height: 1.5; }
.mz-gate-sect:has(input:checked) b { color: var(--gold-hi); }
.mz-gate-foot { flex: none; display: flex; align-items: center; justify-content: center; padding-top: 6px; position: relative; }
.mz-gate-foot .mz-why { position: absolute; left: calc(50% + 70px); top: 50%; translate: 0 -50%; white-space: nowrap; margin: 0; padding-top: 6px; }
.mz-gate-back { position: absolute; right: calc(50% + 70px); top: 50%; translate: 0 -50%; border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: var(--fs-tag); letter-spacing: var(--ls-tag); color: var(--txt-faint); padding: 6px 0 0; transition: color var(--t-fast) var(--ease-out); }
.mz-gate-back:hover { color: var(--gold-hi); }
.mz-gate-foot .mz-seal-btn.mz-lg { padding: 8px 22px; }

/* --i 由 17-gate.js 的 playEntrance 逐块写入 */
.mz-kindle { animation: mz-kindle .55s var(--ease-out) both; animation-delay: calc(var(--i, 0) * .07s + .15s); }
@keyframes mz-kindle { 0% { opacity: 0; translate: 0 8px; filter: brightness(1.5); } 60% { filter: brightness(1.15); } 100% { opacity: 1; translate: 0 0; filter: none; } }
`;var Wt=pt,uo=`
/* ==== 浮窗窗内通用件（页签／经折页／素行／虚位／朱印钮） ==== */
/* 窗内排版须让出左上题签区：列表窗左留边沟，舆图窗图面压在签下无妨 */
/* 去框纪律：浮窗内圈金线是唯一的框，经折页只管滚动，条目走素行（底细线分隔）或图上名下，一页只许契纸一个框；选中态用左侧朱条与朱框，不用容器框 */
.mz-win { display: none; flex: 1; min-height: 0; flex-direction: column; gap: 14px; }
.mz-win.mz-on { display: flex; }
.mz-tabs { display: flex; gap: 22px; margin: -6px 0 8px; padding-left: 48px; flex: none; }
.mz-tabs button { border: none; background: none; cursor: pointer; font-family: inherit; font-size: var(--fs-name);
  letter-spacing: var(--ls-name); color: var(--txt-faint); padding: 4px 2px 6px; position: relative; transition: color var(--t-fast) var(--ease-out); }
.mz-tabs button .mz-n { font-size: 12px; letter-spacing: .5px; margin-left: 4px; opacity: .8; }
.mz-tabs button::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 2px;
  background: var(--red); opacity: 0; transition: opacity var(--t-fast) var(--ease-out); }
.mz-tabs button.mz-on { color: var(--gold-hi); }
.mz-tabs button.mz-on::after { opacity: 1; }
.mz-tabs button:hover { color: var(--gold-hi); }
.mz-tabs button:not(.mz-on):hover::after { opacity: .5; }
.mz-tabs button .mz-red { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--red); margin-left: 5px; translate: 0 -6px; }
.mz-pane { display: none; flex: 1; min-height: 0; flex-direction: column; gap: 12px; }
.mz-pane.mz-on { display: flex; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
@keyframes mz-reveal { from { opacity: 0; translate: 0 4px; } }
.mz-folio { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 16px 10px; }
/* 素行栅格：行距归零让底细线连成账页横线，列间留宽 */
.mz-grid { display: grid; gap: 0 28px; align-content: start; grid-auto-rows: max-content; }
.mz-grid.mz-c2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.mz-grid.mz-c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.mz-grid.mz-c4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.mz-card { position: relative; padding: 13px 0 12px; border-bottom: 1px solid var(--line-soft);
  font-size: 14.5px; line-height: 1.8; color: var(--txt-dim); min-height: 68px; }
.mz-card:has(> .mz-seal-btn) { padding-right: 72px; }
.mz-card b { display: block; font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--txt); font-weight: 600; margin-bottom: 2px; }
.mz-card .mz-k { color: var(--txt-faint); letter-spacing: 1px; margin-right: 6px; }
.mz-card .mz-tag { position: absolute; top: 14px; right: 0; font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); }
.mz-tag.mz-q1 { color: var(--txt-faint); } .mz-tag.mz-q2 { color: var(--gold); } .mz-tag.mz-q4 { color: var(--gold-hi); }
.mz-card .mz-tag.mz-gold { color: var(--gold); }
.mz-card.mz-empty { display: flex; align-items: center; justify-content: center; color: var(--txt-faint); letter-spacing: 4px; text-indent: 4px; font-size: 14px; }
.mz-card .mz-seal-btn { position: absolute; right: 0; bottom: 14px; }
.mz-card.mz-up .mz-seal-btn { position: static; }
.mz-card .mz-up-foot { display: flex; align-items: center; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
.mz-card .mz-up-foot .mz-price { font-size: 12px; margin-left: 6px; opacity: .85; }
/* 设施卡：图上名下不加框，整格可点进详情，悬停图上半强度朱框预告；地宫格两行（图、名与档次标），兴造格三行多脚注；两页都一行四格 */
.mz-cave-grid, .mz-bp-grid { grid-auto-rows: auto; gap: 22px 20px; }
.mz-cave-grid > .mz-empty { grid-column: 1 / -1; }
/* 地宫剖面：一层一条横带不加底色不铺晕；层间一道金线作阶；未凿层不加纹样，只印一行字与开凿钮 */
.mz-cave-sect { display: flex; flex-direction: column; }
.mz-stratum { display: grid; grid-template-columns: 34px minmax(0, 1fr); column-gap: 18px; padding: 14px 14px 14px 0; }
.mz-stratum-name { writing-mode: vertical-rl; align-self: start; justify-self: center; font-size: 13px; letter-spacing: 5px; color: var(--txt-faint); padding-top: 2px; }
.mz-stratum.mz-l0 .mz-stratum-name { color: var(--gold-hi); }
.mz-stair { height: 1px; background: linear-gradient(90deg, rgba(var(--gold-rgb),.45), rgba(var(--gold-rgb),.08)); }
.mz-stratum.mz-undug .mz-stratum-name { opacity: .6; }
.mz-dig { display: flex; align-items: center; gap: 14px; min-height: 40px; }
.mz-dig .mz-why { margin-left: 0; }
.mz-tag.mz-layer { margin-left: 8px; }
.mz-picks.mz-layers { margin-bottom: 10px; }
.mz-card.mz-fac { display: grid; grid-template-rows: subgrid; grid-row: span 2; row-gap: 4px; padding: 0 0 4px; border-bottom: none; }
.mz-bp-grid .mz-card.mz-fac { grid-row: span 3; }
.mz-fac-pic { aspect-ratio: 3 / 2; overflow: hidden; background: rgba(var(--gold-rgb),.08); margin-bottom: 4px; }
.mz-fac-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.mz-fac-top { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.mz-fac-top b { margin-bottom: 0; }
.mz-card.mz-fac .mz-tag { position: static; flex: none; }
.mz-card.mz-fac .mz-up-foot { margin-top: 2px; }
.mz-card.mz-fac.mz-link { cursor: pointer; }
.mz-card.mz-fac.mz-link:hover .mz-fac-pic { outline: 2px solid rgba(var(--red-rgb), .5); outline-offset: -2px; }
.mz-card.mz-fac.mz-queued .mz-fac-pic img { filter: saturate(.7) brightness(.8); }
.mz-fac-act { font-size: 13px; letter-spacing: 2px; color: var(--txt-faint); }
.mz-card.mz-fac.mz-link:hover .mz-fac-act { color: var(--gold-hi); }
/* 待呈行在兴造栅格之下：段题吃满余宽，呈报钮在行尾 */
.mz-basket-bar { display: flex; align-items: center; gap: 14px; margin: 18px 0 0; }
.mz-basket-bar .mz-wh { flex: 1; }
/* 详情页（地宫与兴造共用）：左上返回，图 3:2 不裁靠左占四成六、段题与说明在右，选项与行动通栏在下；自拟态三档殿室图叠放，选哪档亮哪张 */
/* 返回是淡字钮不描印，排在主钮左手，悬停变金 */
.mz-back { border: none; background: none; cursor: pointer; font-family: inherit; padding: 0 6px;
  font-size: 13px; letter-spacing: 2px; color: var(--txt-faint); transition: color var(--t-fast) var(--ease-out); }
.mz-back:hover { color: var(--gold-hi); }
/* 上半（图与说明）与下半（档次、奇效、底行）之间加一指宽留白分段 */
.mz-detail-top { display: grid; grid-template-columns: minmax(0, 23fr) minmax(0, 27fr); gap: 0 24px; align-items: start; margin-bottom: 16px; }
.mz-detail-text { display: flex; flex-direction: column; gap: 11px; min-width: 0; }
.mz-detail-pic { display: grid; width: 100%; aspect-ratio: 3 / 2; overflow: hidden; background: rgba(var(--gold-rgb),.08); }
.mz-detail-pic img { grid-area: 1 / 1; display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; }
.mz-detail-pic img[data-g] { opacity: 0; transition: opacity var(--t-mid) var(--ease-out); }
.mz-detail-pic img[data-g="粗成"], .mz-build:has(input[value="精工"]:checked) .mz-detail-pic img[data-g="精工"], .mz-build:has(input[value="天工"]:checked) .mz-detail-pic img[data-g="天工"] { opacity: 1; }
.mz-detail .mz-wh .mz-tag { font-size: 12px; letter-spacing: 1px; }
.mz-build-note { margin: 0; font-size: 14.5px; line-height: 1.9; letter-spacing: .5px; color: var(--txt-dim); }
.mz-build-note .mz-k { color: var(--txt-faint); letter-spacing: 1px; margin-right: 6px; }
.mz-own-head { display: grid; gap: 11px; }
.mz-own-head textarea { height: auto; }
/* 法会页顶横幅：图按横向长条构图出、入库即 3:1，页顶整条铺开；图边不描线，罪业变体例外（朱线） */
.mz-rite-pic { flex: none; aspect-ratio: 4 / 1; overflow: hidden; }
.mz-rite-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.mz-loan-pic, .mz-page-pic { margin-bottom: 14px; }
.mz-sin .mz-loan-pic, .mz-sin .mz-page-pic { border: 1px solid rgba(var(--red-rgb),.45); }
.mz-folio.mz-fill > .mz-page-pic + .mz-wh { margin-top: 0; }
/* 朱印钮（全局按钮语言） */
.mz-seal-btn { border: none; cursor: pointer; white-space: nowrap; font-family: inherit; font-size: var(--fs-btn); letter-spacing: var(--ls-btn); text-indent: var(--ls-btn);
  color: var(--on-red); background: var(--red); padding: 4px 9px; box-shadow: inset 0 0 0 1px rgba(var(--gold-rgb),.35), 0 2px 4px rgba(var(--sh-rgb),.35);
  transition: filter var(--t-fast) var(--ease-out), translate var(--t-fast) var(--ease-out); }
.mz-seal-btn:hover { filter: brightness(1.12); translate: 0 -1px; }
.mz-seal-btn:active { translate: 0 1px; filter: brightness(.96); transition-duration: .06s; }
.mz-seal-btn.mz-lg { font-size: var(--fs-btn-lg); letter-spacing: var(--ls-btn-lg); text-indent: var(--ls-btn-lg); padding: 6px 16px; }
.mz-seal-btn[disabled] { cursor: not-allowed; background: var(--bg4); color: var(--txt-faint); box-shadow: none; filter: none; translate: none; }
.mz-why { font-size: var(--fs-tag); letter-spacing: var(--ls-tag); color: var(--txt-faint); margin-left: 8px; }
.mz-form { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: flex-end; flex: none; }
.mz-form label { display: flex; flex-direction: column; gap: 2px; font-size: 12.5px; letter-spacing: 2px; color: var(--txt-faint); }
.mz-form input { border: none; border-bottom: 1px solid var(--line); background: transparent; outline: none;
  font-family: inherit; font-size: 15.5px; color: var(--txt); padding: 3px 2px; width: 150px; caret-color: var(--gold-hi); }
.mz-form input.mz-w { width: 260px; }
.mz-form .mz-price { font-size: 12px; letter-spacing: .5px; opacity: .85; margin-left: 3px; }
.mz-form ::placeholder { color: var(--txt-faint); }
/* 契纸：一切记账表单的容器，整列竖排、控件撑满、大号朱印钮收尾；不加框，靠段题横线与留白成段 */
.mz-sheet { flex-direction: column; align-items: stretch; gap: 11px; padding: 0; }
.mz-sheet input, .mz-sheet textarea { width: 100%; box-sizing: border-box; }
.mz-sheet .mz-none { padding: 0; font-size: 13px; }
/* 经折页竖排：行取内容高（两列取高者、契纸尾行沉底），余白留在页底，篮子长起来才由经折页滚 */
.mz-folio.mz-fill { display: flex; flex-direction: column; gap: 12px; }
.mz-folio.mz-fill > .mz-wrow { flex: none; align-items: stretch; }
.mz-folio.mz-fill > .mz-grid { flex: 1; }
.mz-form .mz-grow { flex: 1; min-width: 0; }
/* 债契：放贷契纸是一句填空契文铺顶，三处空自带下划线，句尾库中与放贷钮靠右 */
.mz-loan { flex: none; }
.mz-loan-line { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 6px; font-size: 15px; letter-spacing: 1px; line-height: 2; color: var(--txt-dim); }
.mz-loan-line input { width: 120px; text-align: center; padding: 1px 2px; }
.mz-loan-line input[name="本金"] { width: 64px; }
.mz-loan-line input[name="抵押"] { width: 200px; }
.mz-loan-line .mz-seal-btn { margin-left: 10px; align-self: center; }
/* 钮后的缘由与库中一起落到句下一行：mz-br 占满一行强制折行，库中先、缘由后 */
.mz-loan-line .mz-br { flex-basis: 100%; height: 0; order: 2; }
.mz-loan-line .mz-loan-bal { order: 3; margin-left: 0; }
.mz-loan-line > .mz-why:not(.mz-loan-bal) { order: 4; margin-left: 12px; }
/* 债契行：名、抵押、借、收息四栏对齐，不设表头 */
.mz-debt { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1.6fr); gap: 16px; align-items: baseline; padding: 12px 0 11px;
  border-bottom: 1px solid var(--line-soft); font-size: 14.5px; letter-spacing: .5px; color: var(--txt-dim); }
.mz-debt b { color: var(--txt); font-weight: 600; letter-spacing: 2px; }
.mz-debt .mz-tag { font-style: normal; margin-left: 8px; font-size: 12px; letter-spacing: 1px; }
/* 工坊：页顶横幅之下，左作坊素行竖排＋待呈篮／右契纸撑满，效用框吃满余高 */
.mz-shoplist { flex: none; width: 250px; gap: 6px; }
.mz-picks.mz-col { grid-template-columns: minmax(0, 1fr); gap: 10px; }
/* 作坊行两行：类别与价并排，已备或门槛折到下一行 */
.mz-pick.mz-shop { flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 0 10px; padding: 6px 14px 5px; }
.mz-pick.mz-shop .mz-shopline { flex-basis: 100%; }
.mz-craft { flex: 1; min-width: 0; }
.mz-craft .mz-grow textarea { flex: 1; min-height: 88px; height: auto; }
.mz-form textarea { border: none; border-bottom: 1px solid var(--line); background: transparent; outline: none; resize: none;
  font-family: inherit; font-size: 15.5px; line-height: 1.7; color: var(--txt); padding: 3px 2px; caret-color: var(--gold-hi); }
.mz-sheet .mz-wh { margin-top: 2px; }
/* 选卡不加框：常态左淡金条示可选，悬停半强度朱条，选中朱条＋淡朱底；档次一行三项名价并排，门槛缘由折到下一行 */
.mz-picks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px 16px; }
.mz-picks.mz-row .mz-pick { flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 2px 10px; padding: 7px 14px 6px; }
.mz-picks.mz-row .mz-pick .mz-cond { flex-basis: 100%; }
.mz-pick { position: relative; display: flex; flex-direction: column; gap: 2px; padding: 9px 14px 8px; cursor: pointer; letter-spacing: 1px;
  color: var(--txt-dim); box-shadow: inset 2px 0 0 var(--line); transition: box-shadow var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-pick input { position: absolute; opacity: 0; width: 0; height: 0; }
.mz-pick b { font-size: 16px; letter-spacing: 3px; color: var(--txt); font-weight: 600; }
.mz-pick .mz-price { margin: 0; font-size: 13px; color: var(--gold); }
.mz-pick small { font-size: 12px; letter-spacing: .5px; color: var(--txt-faint); line-height: 1.5; }
.mz-pick:not(.mz-off):hover { box-shadow: inset 2px 0 0 rgba(var(--red-rgb), .5); }
.mz-pick:has(input:checked) { background: rgba(var(--red-rgb),.07); box-shadow: inset 2px 0 0 var(--red); }
/* 门槛句（.mz-cond）不随卡片一起淡，灰卡上最该看见的正是它 */
.mz-pick.mz-off { box-shadow: inset 2px 0 0 var(--line-soft); }
.mz-pick.mz-off > :not(.mz-cond) { opacity: .5; }
.mz-pick .mz-cond { color: var(--gold); }
.mz-pick.mz-off .mz-cond { color: var(--gold-hi); }
/* 奇效栏只属天工：选中天工才展开；升天工契纸（mz-live）常显 */
.mz-form .mz-wonder { display: none; }
.mz-build:has(input[value="天工"]:checked) .mz-wonder, .mz-form .mz-wonder.mz-live { display: flex; }
.mz-wonder small { font-size: 11.5px; letter-spacing: .5px; color: var(--txt-faint); margin-top: 2px; }
.mz-build-foot { display: flex; align-items: center; justify-content: flex-end; gap: 14px; margin-top: auto; }

/* ==== 待呈篮（左列清单之下，段题带件数合计，短钮呈报） ==== */
.mz-basket { flex: none; margin-top: 2px; }
.mz-basket .mz-build-foot { margin-top: 6px; }
.mz-bk-row { display: flex; align-items: baseline; gap: 8px; padding: 4px 2px; font-size: 13px;
  border-bottom: 1px solid var(--line-soft); }
.mz-bk-row b { font-weight: 600; letter-spacing: 1px; color: var(--txt); }
.mz-bk-row .mz-tag { font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); }
.mz-bk-row .mz-price { margin-left: auto; font-size: 12.5px; color: var(--gold); }
.mz-bk-x { flex: none; border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 12px; letter-spacing: 1px; padding: 0 2px; color: var(--txt-faint);
  transition: color var(--t-fast) var(--ease-out); }
.mz-bk-x:hover { color: var(--gold-hi); }
.mz-build-foot > .mz-why:first-child { flex: none; margin: 0 auto 0 0; }
/* 钮旁缘由排在「库中」与钮之间吃余宽，钮位不动 */
.mz-build-foot > .mz-seal-btn { order: 1; }
.mz-build-foot > .mz-seal-btn + .mz-why { flex: 1; margin-left: 0; text-align: right; }
.mz-wh { display: flex; align-items: center; gap: 10px; flex: none; font-size: 13.5px; letter-spacing: 3px; color: var(--txt-faint); }
.mz-wh::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--line), transparent); }
.mz-wh b { color: var(--gold-hi); font-weight: 600; letter-spacing: 1px; }
.mz-folio > .mz-wh:not(:first-child) { margin-top: 16px; }
.mz-store-row { display: grid; grid-template-columns: 104px minmax(0, 1fr); gap: 12px; align-items: start; padding: 14px 0; }
.mz-store-row:first-child { padding-top: 0; }
.mz-store-head { display: flex; flex-direction: column; align-items: center; gap: 4px; padding-top: 2px; font-size: 15px; letter-spacing: 3px; text-indent: 3px; color: var(--txt-dim); }
.mz-store-head b { color: var(--gold-hi); font-weight: 600; font-size: 13px; letter-spacing: 1px; text-indent: 1px; }
.mz-store-pic { width: 72px; height: 72px; object-fit: cover; display: block; margin-bottom: 4px; }
.mz-store-row .mz-card.mz-wide { grid-column: span 2; }
.mz-store-spare { align-items: center; }
.mz-store-spare .mz-store-head { flex-direction: row; justify-content: center; gap: 8px; padding-top: 0; }
.mz-store .mz-card.mz-empty { min-height: 0; padding: 9px 0 8px; }
/* 浮窗定高 620，行撑满余高，回想在列内滚动 */
.mz-wrow { display: flex; gap: 16px; flex: 1; min-height: 0; align-items: flex-start; }
.mz-wrow > .mz-wcol { align-self: stretch; }
.mz-wcol { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
/* 空态短句 */
.mz-none { color: var(--txt-faint); letter-spacing: 3px; font-size: 14px; padding: 6px 2px; }

/* 同心缕：女主切换走顶部页签，位阶作页签小字；左栏只一张主图、按窗高撑满，右栏心声／回想／立绘分页签一次只看一样 */
.mz-bond-win .mz-names { margin-bottom: 16px; }
.mz-bond-win .mz-wrow { gap: 26px; }
.mz-bond-win .mz-wcol { gap: 26px; }
.mz-portrait { flex: none; width: 400px; display: flex; flex-direction: column; }
.mz-portrait .mz-pic { aspect-ratio: 832 / 1216; width: 100%; background: var(--bg3) center / cover no-repeat;
  outline: 1px solid var(--line); outline-offset: -3px; display: flex; align-items: center; justify-content: center; }
.mz-portrait .mz-pic > span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: var(--txt-faint); }
/* 立绘列高＝列宽×1216/832，以行高反解列宽，窗多高画多高，不留底部空白 */
@container mz (width > 900px) {
  .mz-bond-win .mz-wrow { container-type: size; }
  .mz-bond-win .mz-portrait { width: min(400px, calc((100cqh - 4px) / 1.462)); }
}
/* 立绘页：五列格，图上名下，当前格朱框，格多时页内滚动（立绘再加也放得下） */
.mz-gallery { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px 10px; align-content: start; overflow-y: auto; min-height: 0; padding: 2px 2px 8px; }
.mz-cell { display: flex; flex-direction: column; gap: 6px; padding: 0; border: none; background: none; cursor: pointer; font-family: inherit; color: var(--txt-faint); min-width: 0; }
.mz-cell i { display: flex; align-items: center; justify-content: center; aspect-ratio: 832 / 1216; width: 100%; background: var(--bg3) center / cover no-repeat;
  outline: 1px solid var(--line); opacity: .75; transition: opacity var(--t-fast) var(--ease-out), outline-color var(--t-fast) var(--ease-out); }
.mz-cell span { font-size: 12px; letter-spacing: 1px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mz-cell:not([disabled]):hover i { opacity: 1; outline-color: rgba(var(--red-rgb), .5); }
.mz-cell.mz-on i { opacity: 1; outline-color: var(--red); }
.mz-cell.mz-on span { color: var(--gold-hi); }
/* 待补格与锁定格：暗底竖字，DOM 内无图片 URL */
.mz-cell.mz-blank i, .mz-cell.mz-lock i { background: var(--bg0); }
.mz-cell i::after { font-size: 11px; letter-spacing: 3px; writing-mode: vertical-rl; color: var(--txt-faint); }
.mz-cell.mz-blank i::after { content: '待补'; }
.mz-cell.mz-lock i::after { content: '未至'; color: var(--txt-dim); }
.mz-cell.mz-lock { opacity: .55; }
/* 右栏心声／回想页签：不让题签，紧贴页顶三行 */
.mz-tabs.mz-tabs-sub { padding-left: 2px; margin: 4px 0 2px; gap: 18px; }
.mz-tabs.mz-tabs-sub button { font-size: 14.5px; letter-spacing: 3px; padding-bottom: 8px; }
/* 随行行：位阶行下一行素字不加框（页顶只许心声一个框），随行亮金、留守淡字 */
.mz-escort-line { display: flex; align-items: baseline; gap: 12px; flex: none; padding: 0 2px; font-size: 12.5px; letter-spacing: 1px; color: var(--txt-faint); }
.mz-escort-line b { font-weight: 600; letter-spacing: 3px; font-size: 13px; color: var(--txt-dim); }
.mz-escort-line.mz-with b { color: var(--gold-hi); }
/* 位阶莲瓣：四瓣对应一灌至四灌，待度零瓣，未亮去色压淡 */
.mz-lotus-row { display: flex; align-items: center; gap: 10px; font-size: 14.5px; letter-spacing: 1px; color: var(--txt-dim); flex: none; }
.mz-lotus-row i { width: 26px; height: 28px; background: url('${Wt}lotus-rank.webp') center / contain no-repeat;
  filter: grayscale(1) opacity(.32); }
.mz-lotus-row i.mz-lit { filter: none; }
.mz-lotus-row b { color: var(--gold-hi); font-weight: 600; margin-left: auto; }
/* 心声花笺随文自然高，只留花押一角的最小高 */
.mz-voice-sheet { flex: none; position: relative; min-height: 150px; box-sizing: content-box; padding: 18px 22px 22px; background: var(--bg3); border: 1px solid var(--line);
  font-size: 15px; line-height: 2; color: var(--txt-dim); filter: drop-shadow(0 3px 8px rgba(var(--sh-rgb),.22)); }
.mz-voice-sheet::after { content: ''; position: absolute; right: 16px; bottom: 10px; width: 36px; height: 36px;
  background: var(--stamp) center / contain no-repeat; opacity: .55; mix-blend-mode: normal; }
.mz-timeline { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 2px 4px 14px; border-left: 2px solid var(--line-soft); }
.mz-timeline .mz-memo { position: relative; margin-bottom: 18px; font-size: 14.5px; line-height: 1.9; color: var(--txt-dim); }
.mz-timeline .mz-memo::before { content: ''; position: absolute; left: -19px; top: 9px; width: 7px; height: 7px; border-radius: 50%;
  background: var(--gold); box-shadow: 0 0 0 2px var(--bg3); }
.mz-timeline .mz-memo b { color: var(--gold-hi); font-weight: 600; letter-spacing: 1px; margin-right: 8px; }
.mz-timeline .mz-memo small { color: var(--txt-faint); letter-spacing: .5px; }
.mz-su   { --stamp: url('${Wt}stamp-angelica.webp'); }
.mz-xiao { --stamp: url('${Wt}stamp-pomegranate.webp'); }
.mz-pei  { --stamp: url('${Wt}stamp-orchid.webp'); }
.mz-ye   { --stamp: url('${Wt}stamp-peach.webp'); }
.mz-chi  { --stamp: url('${Wt}stamp-gesang.webp'); }

.mz-names button.mz-off { opacity: .45; }
.mz-names button.mz-off:hover { color: inherit; }

/* 营造正殿页：三阶横排一阶一幅画，卡自然高、在栏内竖向居中；格内五行走 subgrid，三格同一行位对齐；未启格压暗；三格不加框，只当下一格朱框 */
.mz-halls { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-rows: auto auto auto auto auto; gap: 14px; flex: none; margin: auto 0; }
.mz-hall { display: grid; grid-template-rows: subgrid; grid-row: span 5; row-gap: 6px; padding-bottom: 12px; color: var(--txt-faint); }
/* 朱框走 outline：inset 阴影画在内容之下，会被整幅殿宇图盖住上半截 */
.mz-hall.mz-cur { background: rgba(var(--red-rgb),.07); outline: 1px solid var(--red); outline-offset: -1px; }
.mz-hall-pic { aspect-ratio: 4 / 3; overflow: hidden; margin-bottom: 4px; }
.mz-hall-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.mz-hall:not(.mz-done):not(.mz-cur) .mz-hall-pic img { filter: saturate(.7) brightness(.8); opacity: .82; }
.mz-hall-top, .mz-hall p, .mz-hall-gain, .mz-hall-act { padding: 0 14px; }
.mz-hall-top { display: flex; align-items: baseline; gap: 12px; }
.mz-hall b { font-size: 17px; letter-spacing: 4px; text-indent: 4px; color: var(--txt-dim); font-weight: 600; }
.mz-hall.mz-cur b { color: var(--gold-hi); }
.mz-hall .mz-tag { font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); }
.mz-hall.mz-cur .mz-tag { color: var(--gold-hi); }
.mz-hall p { font-size: 14px; letter-spacing: 1px; line-height: 1.9; margin: 0; }
.mz-hall-gain { font-size: 13px; letter-spacing: 1px; line-height: 2.4; color: var(--txt-dim); }
.mz-hall-gain .mz-k { color: var(--txt-faint); margin-right: 6px; }
.mz-hall .mz-chi { align-self: center; width: 20px; height: 20px; text-align: center; font-size: 11px; line-height: 20px; color: var(--on-red); background: var(--red); }
.mz-hall-act { display: flex; flex-wrap: wrap; align-items: center; align-self: end; gap: 6px 12px; padding-top: 8px; }
.mz-hall-act small { flex: none; white-space: nowrap; font-size: 13px; letter-spacing: 1px; color: var(--gold); }
.mz-hall-act .mz-why { margin-left: 0; }


/* 教务：法会门槛清单 */
.mz-ticks { display: flex; flex-direction: column; gap: 9px; font-size: 15px; color: var(--txt-dim); letter-spacing: 1px; }
.mz-ticks li { list-style: none; display: flex; align-items: center; gap: 10px; }
.mz-ticks li::before { content: ''; width: 14px; height: 14px; border: 1px solid var(--line); flex: none; }
.mz-ticks li.mz-ok { color: var(--txt); }
.mz-ticks li.mz-ok::before { background: var(--gold); border-color: var(--gold); box-shadow: inset 0 0 0 2px var(--bg3); }

/* 舆图浮窗：SVG overlay 区域面高亮（viewBox 1024） */
.mz-atlas { flex: 1; min-height: 0; display: flex; gap: 16px; }
.mz-atlas .mz-mapbox { position: relative; flex: none; height: min(600px, calc(84vh - 100px)); aspect-ratio: 1; outline: 1px solid var(--gold-line); }
.mz-atlas .mz-mapbox img { width: 100%; height: 100%; }
.mz-atlas .mz-mapbox svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.mz-atlas path { fill: transparent; stroke: transparent; stroke-width: 2; transition: fill var(--t-fast) var(--ease-out), stroke var(--t-fast) var(--ease-out); }
.mz-atlas path:hover { fill: rgba(var(--red-rgb),.10); stroke: rgba(var(--red-rgb),.45); }
.mz-atlas path.mz-cur { fill: rgba(var(--red-rgb),.28); stroke: var(--red); stroke-width: 2.5; animation: region-breathe 1.6s var(--ease-out) 1; }
@keyframes region-breathe { 0% { fill: rgba(var(--red-rgb),.5); } 100% { fill: rgba(var(--red-rgb),.28); } }
.mz-atlas .mz-lbl { position: absolute; translate: -50% -50%; font-size: 12px; letter-spacing: 1px; color: var(--txt-dim); white-space: nowrap;
  background: color-mix(in srgb, var(--bg0) 82%, transparent); padding: 1px 5px; pointer-events: none; }
.mz-atlas .mz-lbl.mz-cur { color: var(--red); font-weight: 600; font-size: 13px; }
.mz-atlas .mz-zones { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
.mz-atlas .mz-zlist { display: flex; flex-direction: column; gap: 2px; font-size: 14.5px; letter-spacing: 1px; color: var(--txt-dim); }
.mz-atlas .mz-zlist li { list-style: none; padding: 4px 8px; display: flex; justify-content: space-between; }
.mz-atlas .mz-zlist li.mz-cur { color: var(--red); font-weight: 600; background: rgba(var(--red-rgb),.07); box-shadow: inset 2px 0 0 var(--red); }
.mz-atlas .mz-zlist li small { color: var(--txt-faint); font-weight: 400; letter-spacing: .5px; }
.mz-atlas .mz-zlist li.mz-abroad:not(.mz-cur) { color: var(--txt-faint); }
.mz-atlas .mz-abroad-mark { position: absolute; left: 10px; bottom: 10px; padding: 4px 10px; font-size: 13px; letter-spacing: 1px; font-weight: 600; color: var(--red);
  background: color-mix(in srgb, var(--bg0) 90%, transparent); outline: 1px solid rgba(var(--red-rgb),.45); }
.mz-atlas .mz-abroad-mark b { font-weight: 400; font-size: 11px; color: var(--txt-dim); margin-right: 6px; }
.mz-doomline { display: flex; flex-direction: column; gap: 5px; font-size: 12.5px; letter-spacing: 1px; color: var(--txt-faint); margin-top: auto; }
.mz-doomline .mz-red { color: var(--red); }
/* 久住遇刺：红山王宫标签与行名加朱记，栏下一行朱字 */
.mz-atlas .mz-lbl.mz-mark { outline: 1px solid var(--red); }
.mz-atlas .mz-zmark { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--red); margin-left: 6px; translate: 0 -3px; }
.mz-atlas-note { font-size: 13px; letter-spacing: 2px; color: var(--red); padding: 4px 8px; border-left: 2px solid var(--red); }
/* 驿路长卷：宽幅上、站表下；八站钉点走过描实（金）、当前点亮（朱）、未到淡显 */
.mz-atlas.mz-atlas-road { flex-direction: column; }
.mz-atlas .mz-roadbox { flex: none; overflow-x: auto; overflow-y: hidden; outline: 1px solid var(--gold-line); }
.mz-atlas .mz-mapbox.mz-road { height: auto; aspect-ratio: 5 / 2; width: 100%; min-width: 720px; outline: 0; }
.mz-atlas .mz-stop { position: absolute; translate: -50% -50%; width: 10px; height: 10px; border-radius: 50%; border: 1.5px solid var(--gold-line); background: var(--bg0); opacity: .55;
  transition: opacity var(--t-fast) var(--ease-out); }
.mz-atlas .mz-stop span { position: absolute; left: 50%; top: 14px; translate: -50% 0; font-size: 12px; letter-spacing: 1px; white-space: nowrap; color: var(--txt-dim);
  background: color-mix(in srgb, var(--bg0) 82%, transparent); padding: 1px 5px; }
.mz-atlas .mz-stop.mz-past { opacity: 1; background: var(--gold); border-color: var(--gold); }
.mz-atlas .mz-stop.mz-cur { opacity: 1; width: 12px; height: 12px; background: var(--red); border-color: var(--on-red); box-shadow: 0 0 8px var(--red); }
.mz-atlas .mz-stop.mz-cur span { color: var(--red); font-weight: 600; font-size: 13px; }
.mz-atlas .mz-zlist-road { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 16px; }
.mz-atlas .mz-zlist-road li.mz-todo { color: var(--txt-faint); }
.mz-atlas .mz-zlist-road li.mz-past { color: var(--txt); }
.mz-atlas .mz-zlist li em { font-style: normal; font-size: 12px; letter-spacing: .5px; color: var(--txt-faint); margin-left: 8px; }
.mz-atlas .mz-zlist-road li.mz-abroad { grid-column: 1 / -1; }

`;var xo=`
/* ==== 正文容器／编辑态／删除态／推演中／入口 ==== */
#mz-shell-root[data-visible="false"] { display: none; }
.mz-turn .mz-text { display: block; }
.mz-turn.mz-gm .mz-text p + p { margin-top: .9em; }
.mz-turn.mz-zhu .mz-text, .mz-turn.mz-zhu .mz-text p { display: inline; }
.mz-turn.mz-selable { cursor: pointer; outline: 1px dashed var(--line); outline-offset: 6px; transition: outline-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-turn.mz-selable:hover { outline-color: var(--gold); }
.mz-turn.mz-delsel { outline: 1px solid var(--red); background: rgba(var(--red-rgb),.07); }
.mz-story-edit { display: flex; flex-direction: column; gap: 8px; }
.mz-story-edit textarea { width: 100%; resize: none; border: none; outline: none; font-family: inherit; font-size: 16px; line-height: 26px;
  color: var(--txt); background: transparent; text-align: right; caret-color: var(--gold-hi);
  background-image: repeating-linear-gradient(180deg, transparent 0 25px, rgba(var(--gold-rgb),.18) 25px 26px); background-attachment: local; }
.mz-story-edit-row { display: flex; justify-content: flex-end; gap: 10px; }
.mz-edit-btn { border: 1px solid var(--line); background: none; cursor: pointer; font-family: inherit; font-size: 12px; letter-spacing: 2px; text-indent: 2px;
  color: var(--txt-dim); padding: 3px 12px; transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-edit-btn.mz-primary { color: var(--gold-hi); border-color: rgba(var(--gold-rgb),.55); }
.mz-edit-btn:hover { color: var(--on-gold); background: var(--gold); border-color: var(--gold); }
.mz-thinking { display: flex; align-items: center; gap: 10px; padding: 6px 0; margin-bottom: 14px; color: var(--txt-faint); opacity: .7; }
.mz-thinking .mz-rule { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line)); }
.mz-thinking .mz-rule.mz-r { background: linear-gradient(90deg, var(--line), transparent); }
.mz-thinking img { width: 19px; height: 19px; animation: mz-smoke 2.4s ease-in-out infinite; }
@keyframes mz-smoke { 0%,100% { opacity: .5; translate: 0 0; rotate: -2deg; } 50% { opacity: 1; translate: 0 -2px; rotate: 2deg; } }
#mz-delbar button.mz-armed { color: var(--on-red); background: var(--red); border-color: var(--red); }
#mz-entry { all: initial; position: fixed; z-index: 8999; display: none; box-sizing: border-box;
  direction: ltr; unicode-bidi: isolate; -webkit-locale: 'zh'; -webkit-tap-highlight-color: transparent;
  --fs-label: 12.5px; --ls-label: 3px; --t-fast: .16s; --ease-out: cubic-bezier(.22,.61,.36,1); }
#mz-entry { --bg0: #0f0d0b; --txt: #e6dcc8; --gold-hi: #c4a563; --gold-rgb: 166,138,77; --red: #e0362a; --on-red: #f6ecd8; --sh-rgb: 0,0,0; }
/* 藏地：题签随壳换肤（09-board.js applyTheme 同时挂在 #mz-entry），题签是深底件，令牌值同 tokens.js 的框面块 */
#mz-entry.mz-xue { --bg0: #1f2a36; --txt: #e8e1d3; --gold-hi: #d9bd77; --gold-rgb: 179,154,90; --red: #e4574b; --on-red: #f7efe4; --sh-rgb: 0,0,0; }
#mz-entry.mz-tab { display: block; }
/* 入卷题签在壳外（all: initial），令牌在上一行自带一份 */
.mz-entry-tab { position: relative; display: flex; align-items: center; gap: 9px; cursor: pointer; padding: 6px 13px 6px 6px;
  font-family: 'Noto Serif SC','Source Han Serif SC','Songti SC','SimSun',serif; font-size: var(--fs-label); letter-spacing: var(--ls-label); text-indent: var(--ls-label);
  color: var(--txt); background: var(--bg0); border: 1px solid rgba(var(--gold-rgb), .5);
  box-shadow: 0 2px 4px rgba(var(--sh-rgb),.35), 0 10px 20px rgba(var(--sh-rgb),.28);
  transition: translate var(--t-fast) var(--ease-out), box-shadow var(--t-fast) var(--ease-out); }
.mz-entry-tab::before { content: ''; position: absolute; inset: 3px; border: 1px solid rgba(var(--gold-rgb), .26); pointer-events: none; }
.mz-entry-tab i { flex: none; width: 24px; height: 24px; display: grid; place-items: center; font-style: normal; font-size: 13.5px; letter-spacing: 0; text-indent: 0;
  color: var(--on-red); background: var(--red); box-shadow: inset 0 0 0 1px rgba(var(--gold-rgb), .5); }
.mz-entry-tab:hover { translate: 0 -1px; box-shadow: 0 3px 6px rgba(var(--sh-rgb),.4), 0 14px 26px rgba(var(--sh-rgb),.32); }
.mz-entry-tab:active { translate: 0 1px; transition-duration: .06s; }
.mz-entry-tab svg { width: 13px; height: 13px; fill: none; stroke: var(--gold-hi); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.mz-vc-img img { width: 100%; height: 100%; object-fit: cover; }
.mz-portrait .mz-pic img { width: 100%; height: 100%; object-fit: cover; cursor: zoom-in; }
/* ==== 暗账黑账变体：朱只在窗内圈线、页顶图边与勒索钮，条目仍素行 ==== */
#mz-lift.mz-sin .mz-held::before { border-color: rgba(var(--red-rgb),.5); }

/* 立绘大图灯箱 */
#mz-viewer { position: absolute; inset: 0; z-index: 60; background: rgba(var(--sh-rgb),.78);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  cursor: zoom-out; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
#mz-viewer img { max-width: 92vw; max-height: 88vh; box-shadow: 0 12px 48px rgba(var(--sh-rgb),.6); }
#mz-viewer span { font-size: var(--fs-read); letter-spacing: 4px; text-indent: 4px; color: var(--txt-dim); }
@keyframes mz-flash { 0% { color: var(--gold-hi); text-shadow: 0 0 10px rgba(var(--gold-rgb),.55); translate: 0 -2px; }
  30% { color: var(--gold-hi); text-shadow: 0 0 0 rgba(var(--gold-rgb),0); translate: 0 0; } }
.mz-flash b, .mz-flash.mz-tb-time { animation: mz-flash 1.4s var(--ease-out); }
@keyframes mz-flash-dark { 0% { color: var(--gold-hi); text-shadow: 0 0 10px rgba(var(--gold-rgb),.7); translate: 0 -2px; }
  30% { color: var(--gold-hi); text-shadow: 0 0 0 rgba(var(--gold-rgb),0); translate: 0 0; } }
#mz-minimap .mz-flash b { animation-name: mz-flash-dark; }
#mz-paper.mz-paper-in { animation: mz-paper-in .8s var(--ease-out) both; }
@keyframes mz-paper-in { from { opacity: 0; translate: 0 10px; } }
#mz-shell-root.mz-shell-in { animation: mz-shell-in .28s var(--ease-out) both; pointer-events: none; }
@keyframes mz-shell-in { from { opacity: 0; scale: 1.01; } }
#mz-shell-root.mz-shell-out { animation: mz-shell-out .28s var(--ease-out) both; pointer-events: none; }
@keyframes mz-shell-out { to { opacity: 0; scale: .985; } }
@media (prefers-reduced-motion: reduce) { #mz-shell-root, #mz-shell-root *, #mz-shell-root *::before, #mz-shell-root *::after, #mz-lift, #mz-lift * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
`;var ho=`
/* 弹字纪律：一律盖满整壳居中，背景短暂压暗并模糊，写完揭幕一起散去 */
/* 发光挂在字上、模糊挂在词上：huo-stamp 关键帧带 filter(blur)，同一元素上的 drop-shadow 会被关键帧顶掉，要到动画收尾才回来 */
.mz-huo-word { --glyph: min(260px, 36cqw); display: flex; gap: calc(var(--glyph) * .08);
  animation: huo-stamp 2.2s var(--ease-paper) both; }
.mz-huo-word svg { width: var(--glyph); height: var(--glyph); fill: var(--red);
  filter: drop-shadow(0 0 calc(var(--glyph) * .15) rgba(var(--red-rgb), .6)); }
.mz-veil { position: absolute; inset: 0; z-index: 50; cursor: pointer;
  background: rgba(var(--sh-rgb),.55); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  animation: veil-in var(--t-mid) var(--ease-out) both; }
@keyframes veil-in { from { opacity: 0; } }
/* 整词一起盖印（huo-stamp：由大缩落、由虚转实），发光仍在字上，随字一起由虚转实 */
.mz-veil .mz-huo-word { --glyph: min(200px, 18cqw); }
.mz-veil.mz-out { animation: veil-out var(--t-slow) var(--ease-out) both; pointer-events: none; }
@keyframes veil-out { to { opacity: 0; } }
@keyframes huo-stamp { 0% { opacity: 0; scale: 1.6; filter: blur(3px); } 14% { opacity: 1; scale: 1; filter: blur(0); }
  72% { opacity: 1; scale: 1; } 100% { opacity: 0; scale: 1.03; } }
`;var Zi=pt,zo=`
/* 正文末信格：末楼楼尾之下、行动选项之上，信封图横放居中带一行字，随正文滚；不画框，悬停只让信封抬起、字转金 */
.mz-letter-strip { display: flex; align-items: center; justify-content: center; gap: 16px; width: 100%; box-sizing: border-box;
  margin: 6px 0 18px; padding: 10px 16px; border: none; background: none; cursor: pointer; font-family: inherit;
  color: var(--txt-dim); font-size: 14px; letter-spacing: 3px; text-indent: 3px; animation: mz-reveal var(--t-slow) var(--ease-paper) both;
  transition: color var(--t-fast) var(--ease-out); }
.mz-letter-strip img { width: 76px; height: 76px; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(var(--sh-rgb),.45));
  transition: translate var(--t-mid) var(--ease-out), filter var(--t-mid) var(--ease-out); }
.mz-letter-strip:hover { color: var(--gold-hi); }
.mz-letter-strip:hover img { translate: 0 -3px; filter: drop-shadow(0 8px 14px rgba(var(--sh-rgb),.55)) drop-shadow(0 0 10px rgba(var(--gold-rgb), .35)); }

/* 信笺弹层：壳根内 absolute 盖满，暗底模糊；藏纸整体 brightness 压暗一档贴近长安主题（叠色层会填掉毛边，故走 filter）；藏纸按 2:3 原比例居中（宽随壳宽与壳高取小），纸只带毛边，纹框是 CSS 双线（赭石外线、藏青内线）避开毛边内嵌，字区再退一步；正文在纸内自滚，钮行常驻 */
.mz-letter-veil { position: absolute; inset: 0; z-index: 45; background: var(--scrim); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; padding: 20px; animation: veil-in var(--t-mid) var(--ease-out) both; }
.mz-letter-veil.mz-out { animation: veil-out var(--t-mid) var(--ease-out) both; pointer-events: none; }
.mz-letter { width: min(640px, 92cqw, calc((100cqh - 40px) * 2 / 3)); aspect-ratio: 2 / 3; position: relative; container-type: size;
  background: url('${Zi}paper-tibet.webp') center / 100% 100% no-repeat;
  filter: brightness(.86) drop-shadow(0 3px 5px rgba(var(--sh-rgb),.4)) drop-shadow(0 24px 48px rgba(var(--sh-rgb),.55)); animation: mz-reveal var(--t-slow) var(--ease-paper) both; }
/* 纹框：毛边约占四边 4%，框退到 7%（cq 单位以 .mz-letter 为容器，横竖换算后等宽）；outline 画外线 */
.mz-letter::before { content: ''; position: absolute; inset: 5cqh 7cqw; pointer-events: none;
  border: 1px solid var(--paper-line-in); outline: 1px solid var(--paper-line-out); outline-offset: 3px; }
/* 字区：框内再退一步 */
.mz-letter-in { position: absolute; inset: 7.5cqh 10cqw 7cqh; display: flex; flex-direction: column; }
.mz-letter-scroll { flex: 1; min-height: 0; overflow-y: auto; padding-right: 4px; scrollbar-width: thin; }
.mz-letter-head { text-align: center; font-size: var(--fs-head); letter-spacing: var(--ls-head); text-indent: var(--ls-head); color: var(--paper-ink); font-weight: 600; margin-bottom: .6em; }
/* 信文与正文同字同号同行距 */
.mz-letter-body p { margin: 0 0 .5em; text-indent: 2em; font-size: var(--fs-body); line-height: 2; letter-spacing: .3px; color: var(--paper-ink); text-align: start; }
.mz-letter-sign { text-align: right; padding-right: 1em; margin-top: .3em; font-size: var(--fs-body); letter-spacing: 4px; color: var(--paper-ink-dim); }
.mz-letter-foot { flex: none; display: flex; justify-content: flex-end; align-items: stretch; gap: 12px; margin-top: 12px; }
.mz-letter-btn { box-sizing: border-box; height: 36px; line-height: 34px; border: 1px solid rgba(var(--paper-ink-rgb), .45); background: none; cursor: pointer; font-family: inherit; color: var(--paper-ink);
  font-size: var(--fs-btn); letter-spacing: var(--ls-btn); text-indent: var(--ls-btn); padding: 0 16px;
  transition: color var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-letter-btn:hover { border-color: var(--paper-ink); background: rgba(var(--paper-ink-rgb), .06); }
.mz-letter-btn.mz-primary { color: var(--on-red); background: var(--red); border-color: var(--red); }
.mz-letter-btn.mz-primary:hover { filter: brightness(1.1); }

/* 公主页顶书信行：素行不加框，信封小图＋题名＋来处＋答复态，悬停小字亮金 */
.mz-letter-row { display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; padding: 0 2px; cursor: pointer; text-align: left;
  border: none; background: none; font-family: inherit; color: var(--txt-dim); flex: none; }
.mz-letter-row img { width: 30px; height: 30px; object-fit: contain; }
.mz-letter-row b { color: var(--gold-hi); font-weight: 600; letter-spacing: 3px; font-size: 13px; }
.mz-letter-row span { font-size: 12.5px; letter-spacing: 1px; transition: color var(--t-fast) var(--ease-out); }
.mz-letter-row small { margin-left: auto; font-size: 12px; letter-spacing: 2px; color: var(--txt-faint); transition: color var(--t-fast) var(--ease-out); }
.mz-letter-row:hover span, .mz-letter-row:hover small { color: var(--gold-hi); }

/* 雪幕：夜色蓝黑六成透明压底，字雪白细笔冷光只盖印不淡出；字一落地挂 .mz-dawn，幕底慢慢积雪到偏暖阴雪色全不透明（暗过藏纸一档免得像闪光，偏暖免得散幕见米纸时冷暖跳），字的填色与冷光同步沉进同一色里算埋掉（换肤藏在这一刻后面），幕散见藏纸 */
.mz-veil.mz-snow { background-color: rgba(var(--snow-bg-rgb), .6); }
.mz-veil.mz-snow .mz-huo-word { --glyph: min(220px, 20cqw); animation: mz-snow-stamp .4s var(--ease-paper) both; }
.mz-veil.mz-snow .mz-huo-word svg { fill: var(--snow); filter: drop-shadow(0 0 calc(var(--glyph) * .12) rgba(var(--snow-rgb), .55)); }
@keyframes mz-snow-stamp { 0% { opacity: 0; scale: 1.6; filter: blur(3px); } 100% { opacity: 1; scale: 1; filter: blur(0); } }
.mz-veil.mz-snow.mz-dawn { animation: mz-dawn 2.2s ease-in-out both; }
.mz-veil.mz-snow.mz-dawn .mz-huo-word svg { animation: mz-snow-sink 2.2s ease-in-out both; }
/* 积雪与散幕两支动画同挂：同名动画换类不重播，雪停在阴雪色，只叠上淡出；散幕放慢到近一秒，露出雪野是慢慢放晴 */
.mz-veil.mz-snow.mz-dawn.mz-out { animation: mz-dawn 2.2s ease-in-out both, veil-out .9s var(--ease-out) both; }
@keyframes mz-dawn { to { background-color: var(--snow-deep); } }
@keyframes mz-snow-sink { to { fill: var(--snow-deep); filter: drop-shadow(0 0 0 rgba(var(--snow-rgb), 0)); } }
/* 雪片层独立于幕、压在幕上不吃点击；幕散后再飘一拍自散，算雪后天晴。雪片带一圈夜色淡晕，转晓后白底上仍可见 */
.mz-snowfall { position: absolute; inset: 0; z-index: 51; pointer-events: none; overflow: hidden; }
.mz-snowfall.mz-out { animation: veil-out 1.5s var(--ease-out) both; }
.mz-flake { position: absolute; top: -4%; left: var(--x); width: var(--s); height: var(--s); border-radius: 50%; pointer-events: none;
  background: var(--snow); box-shadow: 0 0 3px rgba(var(--snow-bg-rgb), .35); opacity: 0; filter: blur(.4px); animation: mz-snow-fall var(--t) linear var(--d) infinite; }
@keyframes mz-snow-fall { 0% { top: -4%; translate: 0 0; opacity: 0; } 8% { opacity: .85; } 92% { opacity: .6; } 100% { top: 104%; translate: var(--sw) 0; opacity: 0; } }
`;var bo=`
/* ==== 遮罩（桌面端不存在） ==== */
#mz-mscrim { display: none; }

/* ==== 窄桌面：侧栏收到 240、两侧留白降到 32，正文列随宽 597～740；读数组间距 40 收到 28 ==== */
@container mz (900px < width <= 1079px) {
  .mz-side { width: 240px; }
  .mz-main { --col-side: max(32px, calc((100% - var(--read-col)) / 2)); }
  .mz-tb-face, .mz-tb-set { gap: 28px; }
}

@container mz (max-width: 900px) {
  /* ==== 主区：正文列封顶 700 居中，宽度不够才退到两侧各 22；底部只剩书写区 ==== */
  .mz-main { --col-side: max(22px, calc((100% - var(--read-col)) / 2)); }
  /* 状态栏留空放在顶栏内，让账头底色一直铺到屏幕顶边，不留一条纸色带 */
  .mz-topbar { height: calc(var(--top-h) + env(safe-area-inset-top, 0px)); padding-top: env(safe-area-inset-top, 0px); }
  /* iOS 滚动条不占位，不再从留白里扣槽宽，正文与书写区仍按 --col-side 对齐 */
  #mz-paper { padding: 22px var(--col-side) 16px; scrollbar-gutter: auto; }
  .mz-turn.mz-gm, .mz-turn.mz-zhu { line-height: 1.95; }
  #mz-writing { padding: 8px var(--col-side) calc(12px + env(safe-area-inset-bottom, 0px)); }
  #mz-send { width: 42px; height: 44px; font-size: 18px; }
  /* 木鱼中心对齐敕印中心：窄屏敕印宽 42，木鱼宽 34，故左移 21+17；抬高到书写区之上一指，随状态栏留空一起抬 */
  #mz-jump { bottom: calc(100px + env(safe-area-inset-bottom, 0px)); left: calc(100% - var(--col-side) - 38px); right: auto; }
  .mz-letter-veil { padding: 10px; }
  .mz-letter { width: min(96cqw, calc((100cqh - 20px) * 2 / 3)); }
  .mz-letter-strip img { width: 60px; height: 60px; }
  /* iOS Safari 聚焦字号 <16px 的输入框会放大页面 */
  #mz-shell-root input, #mz-shell-root textarea { font-size: 16px; }

  /* ==== 顶栏：诸务钮＋时辰／铜钱／信众（居中，手机只时辰去标签），出卷钮（右） ==== */
  /* ==== 顶栏钮一套规格：32 点击区、8 内边距、16 图标；钮与读数隔 12，钮与钮隔 8（中心相距 40）；两端图标边与正文首末字对齐（留白＝正文留白－8） ==== */
  .mz-topbar { --tb-btn: 32px; --tb-pad: 8px; padding-left: calc(var(--col-side) - var(--tb-pad)); padding-right: calc(var(--col-side) - var(--tb-pad)); gap: 12px; }
  /* 只留线稿图标，不加框不填底，与右端工具栏同规格 */
  .mz-tb-plaque { display: flex; color: var(--txt-faint); width: var(--tb-btn); height: var(--tb-btn); padding: var(--tb-pad);
    transition: color var(--t-fast) var(--ease-out); }
  .mz-tb-plaque:active, .mz-tb-plaque:hover, .mz-tb-plaque.mz-on { color: var(--gold-hi); }
  /* 钮里两枚图标：诸务三横／返回箭头，随窗态二选一；开坛窗时置灰 */
  .mz-tb-plaque svg:last-child { display: none; }
  .mz-tb-plaque.mz-ret svg:first-child { display: none; }
  .mz-tb-plaque.mz-ret svg:last-child { display: block; }
  .mz-tb-plaque[disabled] { opacity: .4; }
  /* 窄屏回到一排 flex：诸务钮／读数／工具栏，工具栏不再绝对定位；读数在两端钮之间的空位里居中（不补边，宽度留给读数）；读数字阶字色字重双端同，600～900 只把组间距收到 20 */
  .mz-tb-face { justify-content: center; gap: 20px; padding: 0; scrollbar-gutter: auto; }
  .mz-topbar > #mz-corner { position: static; translate: none; }
  .mz-tb-set { gap: 20px; }
  .mz-tb-time { flex: 0 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
  .mz-tb-time.mz-dim { color: var(--txt-faint); opacity: .6; }
  /* 手机（<600）：时辰去标签只留「日期 时辰」，铜钱（在藏绢帛）与信众的两字标签照留，字色字重同桌面端、字阶降到 12；组间距再收到 12；时辰仍留省略号兜底 */
  @container mz (max-width: 599px) {
    .mz-tb-time > span { display: none; }
    .mz-tb-face, .mz-tb-set { gap: 12px; }
    .mz-tb-time, .mz-tb-i { font-size: 12px; }
  }
  #mz-corner { gap: 8px; }
  #mz-corner button { color: var(--txt-faint); opacity: 1; width: var(--tb-btn); height: var(--tb-btn); padding: var(--tb-pad); }
  #mz-corner button:hover { color: var(--gold-hi); }
  #mz-corner button.mz-on { color: var(--gold-hi); }
  /* 玩法窗开着时收起出卷，免得误触退回酒馆；开坛窗仍留出卷 */
  #mz-corner.mz-away { display: none; }

  /* ==== 侧栏即左抽屉：八成宽整高，自左滑入盖住顶栏与正文，点叉或遮罩收起，不接手势 ==== */
  .mz-side { position: absolute; left: 0; top: 0; bottom: 0; width: min(80cqw, 380px); z-index: 30;
    border-right: 1px solid var(--line); overflow-y: auto; gap: 10px;
    padding: calc(8px + env(safe-area-inset-top, 0px)) 14px calc(14px + env(safe-area-inset-bottom, 0px));
    /* 收起要把阴影一并挪出屏左 */
    translate: calc(-100% - 40px) 0; transition: translate var(--t-slow) var(--ease-paper);
    box-shadow: 12px 0 30px rgba(var(--sh-rgb),.45); }
  .mz-side.mz-open { translate: 0 0; }
  /* 短屏抽屉内容装不下时照滚，但不画桌面浏览器那条占位滚动条（真机本就是浮层细条） */
  .mz-side { scrollbar-width: none; }
  .mz-side::-webkit-scrollbar { display: none; }
  /* iOS 把可滚动面板单独合成一层，层内叠色纹理不混色直接盖上；改成同元素三层背景混色，数值上与原叠色等价 */
  .mz-side.mz-tex::before { display: none; }
  .mz-side { background: linear-gradient(color-mix(in srgb, var(--bg0) calc(100% - var(--tex-op) * 100%), transparent), color-mix(in srgb, var(--bg0) calc(100% - var(--tex-op) * 100%), transparent)),
    var(--tex) 0 0 / 1024px 1024px repeat, var(--bg0);
    background-blend-mode: normal, overlay, normal; }
  /* 抽屉头行：题字居中同桌面端，收起叉绝对定位贴右，不画线 */
  .mz-plaque { height: 44px; }
  .mz-side-x { display: block; position: absolute; right: 0; top: 50%; translate: 0 -50%; width: 32px; height: 32px; border: none; background: none; cursor: pointer; padding: 8px;
    color: var(--txt-faint); transition: color var(--t-fast) var(--ease-out); }
  .mz-side-x:active, .mz-side-x:hover { color: var(--gold-hi); }
  .mz-side-x svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
  /* 整面板一条滚动，目录跟着面板走；有余量时六条同桌面端均分撑高（单条 84 封顶），装不下时不缩、整面板滚 */
  .mz-nav { flex: 1 0 auto; overflow: visible; }
  #mz-mscrim { display: block; position: absolute; inset: 0; z-index: 29;
    background: var(--scrim); opacity: 0; pointer-events: none;
    transition: opacity var(--t-mid) var(--ease-out); }
  #mz-mscrim.mz-open { opacity: 1; pointer-events: auto; }

  /* ==== 楼尾：变量在上自行折行，心声整块在下贴右（同行放不下四名签，不叫牌面与名签互挤） ==== */
  .mz-ff-vars { flex: 1 1 100%; }
  .mz-ff-vars:empty { display: none; }


  /* ==== 浮窗改全屏页：自顶栏下缘铺到底，顶栏活着（左钮变返回箭头），无遮罩无收窗叉，题签贴纸上缘 ==== */
  #mz-lift { top: calc(var(--top-h) + env(safe-area-inset-top, 0px)); background: none; backdrop-filter: none; }
  #mz-lift.mz-show, #mz-lift.mz-hide { animation: none; }
  #mz-lift .mz-held { width: 100%; height: 100%; }
  #mz-lift .mz-held h3 { left: 10px; top: 0; font-size: 13px; letter-spacing: 4px; padding: 16px 10px; }
  /* 窗内两侧留 14：裸文字（区名题、时局行、注）离屏边 14；自带 8 内边距的行表与折页内容落在 22，对齐正文首字 */
  #mz-lift .mz-held .mz-held-body { padding: 14px 14px calc(8px + env(safe-area-inset-bottom, 0px)); }
  .mz-folio { padding: 4px 8px 10px; }
  .mz-card { padding: 12px 0 11px; font-size: 13.5px; }
  .mz-card:has(> .mz-seal-btn) { padding-right: 0; }
  .mz-card b { padding-right: 34px; font-size: 14.5px; letter-spacing: 2px; }
  .mz-card .mz-seal-btn { position: static; display: block; margin: 8px 0 0 auto; }
  .mz-vc { padding: 14px 8px 14px; }
  .mz-atlas { flex-direction: column; overflow-y: auto; }
  .mz-atlas .mz-mapbox { width: 100%; height: auto; }
  /* 驿路长卷手机端横滚：盒宽随幅面，只滚不缩 */
  .mz-atlas .mz-mapbox.mz-road { width: auto; min-width: 720px; height: 288px; }
  .mz-atlas .mz-zlist-road { grid-template-columns: minmax(0, 1fr); }
  /* 页签栏：等宽一行，小字折到名下，尾注独占一行靠右 */
  .mz-tabs { gap: 0; flex-wrap: wrap; margin: -2px 0 0; padding-left: 30px; }
  .mz-tabs button { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 1px; padding: 4px 2px 6px; }
  .mz-tabs button .mz-n { margin-left: 0; font-size: 11px; line-height: 1.3; text-align: center; white-space: normal; }
  .mz-tabs > .mz-why { flex: 0 0 100%; margin: 4px 0 0; text-align: right; }
  .mz-tabs button .mz-red { position: absolute; top: 6px; right: 6px; margin: 0; translate: none; }
  .mz-wrow { flex-direction: column; overflow-y: auto; }
  .mz-wrow > .mz-wcol { align-self: auto; width: 100%; flex: none; }
  .mz-portrait { width: 100%; flex-direction: column; align-items: center; gap: 10px; }
  .mz-portrait .mz-pic { width: 220px; flex: none; }
  .mz-tabs.mz-tabs-sub { padding-left: 0; }
  .mz-gallery { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .mz-bond-win .mz-wcol { gap: 18px; }
  .mz-grid.mz-c3, .mz-grid.mz-c4 { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 16px; }
  .mz-halls { grid-template-columns: minmax(0, 1fr); grid-template-rows: none; margin: 0; }
  .mz-hall { grid-template-rows: auto; grid-row: auto; }
  .mz-hall-act:empty { display: none; }
  .mz-cave-grid, .mz-bp-grid { gap: 18px 12px; }
  .mz-stratum { grid-template-columns: minmax(0, 1fr); row-gap: 8px; padding: 12px 0; }
  .mz-stratum-name { writing-mode: horizontal-tb; justify-self: start; letter-spacing: 3px; padding-top: 0; }
  .mz-store-row { grid-template-columns: minmax(0, 1fr); }
  .mz-store-head { flex-direction: row; justify-content: flex-start; gap: 10px; }
  .mz-store-pic { width: 44px; height: 44px; margin-bottom: 0; }
  .mz-store-row .mz-card.mz-wide { grid-column: 1 / -1; }
  .mz-card.mz-fac { grid-template-rows: auto; grid-row: auto; }
  .mz-detail-top { grid-template-columns: minmax(0, 1fr); gap: 12px 0; }
  .mz-hall-pic { aspect-ratio: 5 / 2; }
  .mz-picks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mz-picks.mz-row { grid-template-columns: minmax(0, 1fr); gap: 2px; }
  .mz-craft .mz-grow textarea { height: 140px; }
  .mz-loan-line input[name="抵押"] { width: 100%; }
  .mz-debt { display: flex; flex-wrap: wrap; gap: 2px 14px; }
  .mz-shoplist { width: 100%; }
  .mz-picks.mz-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .mz-form input.mz-w { width: 100%; }
  #mz-lift.mz-gate .mz-held { width: 100%; height: 100%; max-height: none; }
  .mz-gate-two { grid-template-columns: minmax(0, 1fr); gap: 14px; }
  .mz-picks.mz-gate-picks { grid-template-columns: minmax(0, 1fr); grid-auto-rows: auto; gap: 6px; }
  .mz-gate-sect { padding: 6px 12px 5px; }
  .mz-gate-foot { flex-wrap: wrap; gap: 6px 18px; }
  .mz-gate-foot .mz-why { position: static; translate: none; width: 100%; text-align: center; padding-top: 0; }
  .mz-gate-back { position: static; translate: none; padding: 0; }
  #mz-lift.mz-gate .mz-held h3 { padding: 22px 20px 0; font-size: 22px; letter-spacing: 8px; text-indent: 8px; }
  #mz-lift.mz-gate .mz-held .mz-held-body { padding: 0 8px 10px; }
}

`;var vo=`
#mz-shell-root input, #mz-shell-root textarea {
  background-color: transparent !important; color: var(--txt) !important;
  box-shadow: none !important; border-radius: 0 !important; font-family: inherit !important;
  border: none !important; }
#mz-shell-root input:focus, #mz-shell-root textarea:focus { outline: none !important; }
#mz-writing textarea, #mz-shell-root .mz-story-edit textarea { border: none !important; }
#mz-shell-root .mz-story-edit textarea { color: var(--txt) !important; }
#mz-shell-root .mz-form input, #mz-shell-root .mz-form textarea, #mz-shell-root .mz-build textarea { border: none !important; border-bottom: 1px solid var(--line) !important; }
#mz-shell-root .mz-form ::placeholder { color: var(--txt-faint) !important; opacity: 1 !important; }
#mz-writing textarea::placeholder { color: var(--txt-faint) !important; opacity: .75 !important; }
`;var wo=po+mo+fo+go+uo+xo+ho+zo+bo+vo;var yo={开:{w:1e3,h:1e3,d:"M599 259Q610 261 612 258Q613 254 617 254Q621 254 638 275Q656 296 656 301Q657 307 657 361L658 416H684Q709 415 792 415L875 414L894 424Q921 439 930 449Q939 459 940 478Q944 514 916 532Q894 545 868 532Q852 523 848 523Q843 523 825 515Q797 501 710 498L662 495L656 509Q652 521 648 578Q644 635 644 698Q643 753 640 810Q636 866 633 870Q630 873 627 895Q624 917 617 936Q606 962 589 960Q583 959 580 949Q578 940 569 916Q564 900 562 871Q560 842 559 694Q558 495 557 494Q556 493 510 497Q465 501 454 501Q446 504 444 508Q441 512 435 533Q430 561 430 569Q430 590 411 632Q383 699 340 747L301 790Q262 837 234 856Q212 870 205 877Q198 884 192 884Q186 884 176 890Q167 896 162 892Q156 887 172 860Q205 808 228 783Q252 758 265 734Q277 713 287 701Q304 680 318 643Q333 606 337 579Q340 561 344 542Q348 523 344 520Q341 516 324 522Q306 527 264 534Q195 548 195 560Q195 562 190 562Q185 563 178 562Q170 560 162 557Q137 545 134 516Q131 507 133 503Q135 499 142 493Q152 485 162 485Q172 485 222 474Q271 462 309 455Q347 448 351 446Q355 443 360 395Q366 347 375 332Q384 317 388 317Q395 317 410 326Q424 335 430 342Q435 351 438 372Q442 394 440 407Q435 422 438 428Q442 434 453 432Q466 429 517 424L567 421L566 357L565 295L576 276Q583 265 588 262Q592 258 599 259ZM662 168Q681 163 692 168Q708 176 720 197Q726 206 726 226Q727 246 721 248Q702 255 613 247Q572 243 544 247Q517 251 467 254Q393 260 375 282Q361 299 319 279L297 267Q297 267 295 255Q293 243 289 235Q285 227 297 218Q318 199 435 186Q561 171 621 171Q650 173 662 168Z"},山:{w:1e3,h:1e3,d:"M421 170Q434 160 483 175Q496 179 504 184Q511 189 522 205Q535 222 537 230Q539 237 538 256Q532 310 528 486Q525 663 529 666Q533 670 641 671Q749 672 753 668Q757 665 757 613Q759 548 772 532Q786 517 832 530Q887 544 907 573Q927 602 920 659Q909 749 893 774Q890 780 885 792Q872 821 848 840Q823 859 799 859Q778 859 766 848Q754 837 743 807Q731 776 726 770Q720 764 703 764Q684 764 662 760Q640 757 584 753L527 750L513 775Q499 801 496 814Q494 827 490 830Q486 832 486 841Q486 850 476 868Q467 885 463 886Q456 889 437 880Q418 871 418 860Q418 850 406 849Q394 848 391 837Q388 824 375 798Q362 773 356 768Q351 764 322 771Q294 778 275 787Q259 796 256 796Q246 796 214 816Q181 836 169 848Q150 868 136 871Q125 872 120 870Q114 867 103 856Q92 844 88 836Q85 827 83 803Q78 767 78 760Q78 753 78 736Q79 718 89 703Q103 677 122 625Q141 573 141 554Q141 540 148 524Q154 508 154 496V484L182 487Q229 493 240 511Q246 519 246 531Q245 543 239 551Q227 568 223 620Q221 655 212 686Q202 716 204 718Q205 719 244 710Q271 703 277 700Q283 696 285 687Q287 675 281 664Q275 652 275 646Q275 640 268 634Q262 629 262 612V594L306 640L350 686L375 683Q401 681 406 676Q414 667 418 508Q423 350 417 251Q414 198 414 186Q415 174 421 170Z"},立:{w:1e3,h:1e3,d:"M386 548Q406 533 410 533Q420 533 415 545Q406 559 399 584Q392 608 395 611Q399 617 398 650Q396 683 391 687Q385 694 370 700Q356 706 349 704Q343 701 326 678Q309 656 301 636Q295 622 292 586Q288 549 293 542Q295 536 306 538Q316 541 326 550Q334 557 350 561Q360 562 366 560Q372 559 386 548ZM594 452Q605 429 605 424Q605 419 615 419Q624 419 651 440Q678 461 680 471Q684 480 696 489Q708 498 708 516Q708 535 698 541Q679 552 631 615Q616 635 604 648Q591 660 591 666Q591 673 578 686Q565 699 552 720Q539 742 521 761L503 780L616 777Q728 775 808 773L886 770L901 786Q920 807 930 849Q940 891 928 900Q921 906 886 904Q851 901 837 893Q809 879 760 877Q728 875 705 872Q596 863 489 868Q382 872 308 890Q282 896 257 898Q232 901 230 904Q227 908 212 911Q196 914 180 923Q163 932 159 939Q155 947 140 951Q124 955 112 952Q97 948 80 931Q69 920 66 914Q64 908 65 898Q67 880 75 871Q83 862 105 856Q184 830 324 805Q371 797 384 786Q405 767 438 723Q470 679 494 638Q528 582 534 576Q550 556 573 501ZM533 307Q594 304 598 300Q601 295 632 297Q664 299 673 305Q684 309 694 326Q704 343 705 356Q705 368 694 376Q688 383 680 384Q672 384 644 383Q385 364 316 407L302 416L285 408Q261 396 260 380Q258 363 278 354Q307 340 380 326Q452 313 533 307ZM367 105Q389 94 443 110Q477 121 493 132Q509 144 521 168Q530 184 522 220Q513 256 498 268Q474 290 448 284Q439 282 429 273Q419 264 418 257Q418 252 412 247Q405 242 405 235Q405 225 390 190Q375 154 365 142Q346 115 367 105Z"},坛:{w:1e3,h:1e3,d:"M533 561Q535 551 546 534Q558 516 562 516Q568 516 574 523Q581 530 581 536Q581 544 594 554Q606 565 606 582Q606 613 565 660Q552 675 546 686Q540 698 536 698Q533 698 520 716Q507 735 505 743L502 753L540 750Q604 746 661 716L681 706L669 684Q658 665 656 654Q655 644 664 635Q673 626 673 620Q673 611 712 625Q734 632 766 664Q799 695 807 715Q809 722 818 724Q828 725 832 740Q836 754 839 759Q849 770 841 805Q833 840 819 852Q802 868 779 862Q768 860 754 844Q739 828 736 818Q734 808 729 800Q724 791 721 781Q718 771 709 758L701 743L683 757L635 794Q602 819 580 828Q557 836 502 844Q458 850 442 850Q427 850 420 844Q412 837 407 816Q400 795 404 783Q408 771 435 740Q456 713 465 696Q474 679 482 667Q492 651 512 610Q531 570 533 561ZM600 407Q646 404 768 404Q889 405 907 408Q931 413 938 420Q944 427 944 449Q943 489 916 499Q902 504 890 502Q878 500 857 489Q804 461 689 462Q580 462 508 477Q435 492 415 518Q406 529 383 527Q360 525 355 511Q353 504 358 493Q363 482 372 476Q382 469 382 464Q382 458 444 436Q467 429 515 420Q563 411 600 407ZM618 202Q660 198 678 199Q697 200 720 209L744 217V242Q744 259 737 273Q730 287 721 287Q717 287 709 294Q701 301 691 296Q681 292 644 292Q606 292 571 303Q548 312 541 312Q534 313 529 309Q518 300 504 281Q491 262 491 256Q491 247 508 234Q524 222 546 216Q571 208 618 202ZM236 200Q248 188 262 189Q271 189 274 192Q277 194 279 202Q281 215 293 234Q305 252 306 283V314L325 313Q341 312 358 320Q376 327 382 337Q387 345 387 364Q387 403 348 397Q331 395 313 398Q300 401 296 404Q292 407 289 418Q286 426 284 468Q282 510 282 548Q283 586 286 586Q290 586 351 554Q371 543 378 547Q388 554 381 569Q374 584 355 598Q343 607 294 656Q244 704 233 711Q208 724 180 746Q152 769 147 780Q140 796 123 802Q113 805 108 805Q103 805 94 799Q82 794 69 775Q56 756 56 746Q57 732 82 715Q94 706 136 678Q179 649 185 646Q199 638 199 578Q199 546 203 530Q207 514 211 471Q214 427 206 429Q203 429 195 435Q189 441 182 440Q175 439 145 427Q96 410 120 380Q127 373 160 357Q194 341 204 341Q214 341 216 330Q219 318 223 250Q224 226 226 217Q229 208 236 200Z"},雪:{w:1e3,h:1e3,d:"M600 786Q600 802 560 818Q521 834 413 859Q402 862 382 854Q375 851 372 849Q368 847 366 846Q365 844 366 842Q368 841 371 838Q379 833 379 828Q379 824 410 813Q442 802 470 796Q493 791 523 781Q557 770 578 771Q600 772 600 786ZM703 663Q732 681 736 688Q740 694 735 705Q724 726 708 765Q698 789 696 801Q693 813 684 872Q680 903 676 910Q672 917 659 914Q628 910 465 954Q417 967 400 961Q374 953 374 946Q374 942 381 938Q392 929 535 894Q588 882 593 877Q598 872 618 872Q637 872 638 861Q647 819 644 768Q640 716 627 704Q619 695 609 698Q599 700 553 721Q452 765 409 765Q390 765 370 757Q350 749 350 743Q350 733 361 724Q372 715 381 716Q397 721 525 679L593 656Q658 634 703 663ZM348 453Q355 453 374 462Q392 470 395 474Q399 481 398 500Q397 519 393 522Q389 525 390 552Q390 579 395 579Q399 579 419 566Q439 554 442 550Q444 547 448 546Q451 544 453 545Q455 546 455 548Q455 555 434 583Q414 611 400 623L382 638L369 628L344 610Q337 604 336 600Q334 597 340 589Q346 576 346 546Q346 515 339 497Q332 476 339 464Q346 453 348 453ZM302 406Q302 418 283 449Q267 474 270 484Q273 494 260 499Q248 504 226 529Q203 554 193 551Q183 548 183 554Q183 560 178 560Q173 560 173 547Q173 537 166 522Q158 508 150 502Q144 498 162 482Q179 466 205 450Q231 434 248 428Q266 422 281 411Q302 393 302 406ZM543 323Q564 330 572 330Q581 331 603 326Q627 319 642 320Q656 320 700 327Q735 333 760 336Q810 343 840 371Q851 380 852 392Q852 403 843 408Q826 417 800 422Q775 428 761 425Q742 422 698 428Q666 432 658 436Q651 439 642 452Q634 466 632 485Q630 504 636 517Q641 530 651 527Q662 525 695 536Q728 546 731 553Q733 560 722 570Q710 579 697 579Q672 579 644 556Q616 534 616 513Q616 501 607 454Q598 406 603 399Q612 390 628 395Q644 400 651 413L659 428L679 407Q700 386 710 380Q718 375 705 368Q701 365 693 361Q665 347 642 350Q619 354 612 360Q605 365 581 373L558 380L551 450Q542 564 553 611Q557 624 547 624Q537 624 528 607Q518 590 518 569Q516 540 510 480Q505 421 502 410Q500 399 495 399Q490 399 446 411Q413 421 403 421Q393 421 369 408Q362 404 362 393Q362 382 376 376Q390 371 437 359Q487 348 488 340Q488 338 487 337Q484 331 493 323Q501 313 510 313Q518 313 543 323ZM619 210Q635 229 624 231Q621 231 616 229Q607 226 605 238Q603 247 584 259Q565 271 557 268Q550 266 544 271Q532 280 439 292Q407 296 398 296Q389 295 375 287Q360 278 356 274Q353 270 355 263Q357 260 380 252Q403 245 423 239Q442 235 484 222Q525 210 529 205Q533 203 558 200Q584 198 595 198Q606 197 619 210Z"},域:{w:1e3,h:1e3,d:"M640 700Q651 711 644 718Q638 726 593 750Q558 768 535 786Q512 805 488 819Q463 833 454 839Q446 845 436 836Q425 826 425 812Q425 791 462 775Q479 767 524 741Q570 715 595 704Q617 693 624 692Q631 691 640 700ZM126 231Q145 243 157 247Q179 257 189 337Q194 376 192 410Q190 445 183 452Q179 456 184 465Q189 474 186 486Q183 499 192 499Q200 499 235 490Q290 473 315 490Q329 499 283 522Q269 529 252 536Q248 537 241 540Q206 554 200 564Q193 575 193 625Q193 635 193 639Q193 715 196 720Q200 726 256 698Q311 670 313 672Q315 674 291 695Q267 716 234 742Q201 767 179 782Q57 865 43 862Q35 861 35 849Q35 837 22 824Q4 806 31 789Q43 781 56 786Q68 792 96 776Q123 761 123 750Q123 739 136 714Q150 688 150 645Q151 602 148 599Q145 596 130 600Q116 604 88 596Q61 588 56 578Q52 569 40 565Q31 561 28 554Q26 547 33 541Q40 539 61 540Q102 543 127 526Q134 522 126 466Q117 411 113 394Q109 376 100 334Q92 291 88 270Q84 250 87 235Q89 219 97 218Q105 218 126 231ZM803 210Q810 210 833 222Q854 235 858 248Q862 260 848 267Q830 274 786 264Q742 253 729 236Q717 222 750 214Q759 212 768 212ZM543 138Q570 158 580 182Q591 207 613 298Q633 382 637 386Q641 390 668 382Q698 372 734 366Q771 361 782 365Q792 368 792 370Q792 371 787 375Q778 380 773 392Q768 404 745 407Q684 414 665 427Q654 434 655 450Q663 518 677 544Q687 562 687 570Q687 579 708 628Q729 676 733 676Q742 676 775 620Q808 564 808 548Q808 540 818 532Q829 525 838 527Q847 530 858 542Q869 555 869 562Q869 568 852 593Q836 618 829 636Q822 653 808 670Q795 688 780 718L763 746L782 775Q801 805 819 837Q840 876 897 950Q914 971 922 984Q929 994 934 996Q938 998 952 995Q967 994 970 996Q974 998 978 1009Q987 1033 984 1038Q981 1044 960 1041Q936 1037 924 1028Q911 1019 887 985Q861 947 829 907Q781 848 757 796Q746 772 741 772Q736 772 712 792Q689 812 678 812Q666 812 656 820Q644 831 645 824Q647 816 663 792Q711 722 712 714Q712 707 692 676Q672 645 672 640Q672 634 654 595Q628 541 620 562Q617 571 599 582Q581 592 557 628Q533 663 537 666Q539 667 543 669Q556 672 558 684Q561 695 550 704Q539 712 511 709Q460 704 453 688Q451 679 458 670Q466 662 476 662Q490 662 496 656Q501 649 512 624Q530 586 523 586Q521 586 518 588Q508 592 504 593Q491 596 449 614Q427 624 424 632Q421 639 430 662Q442 693 442 704Q442 714 431 715Q417 715 413 718Q407 721 382 710Q358 698 353 691Q346 683 336 646Q325 610 325 595Q325 555 367 579L390 592L417 579Q442 565 449 565Q456 565 465 561Q563 511 572 509Q579 509 591 499Q600 492 601 488Q602 485 595 473Q589 460 586 458Q582 456 572 459Q558 463 536 474Q515 485 477 492L439 499L416 484Q390 469 390 460Q390 452 398 445Q406 438 413 441Q423 445 487 433Q551 421 565 413Q574 407 522 250Q494 163 491 150Q488 137 494 128Q502 117 510 118Q518 120 543 138Z"},佛:{w:1e3,h:1e3,d:"M271 479Q279 502 282 541Q285 580 286 705Q289 847 295 853Q300 859 298 865Q295 871 288 871Q279 871 266 853Q253 835 244 814Q237 794 236 769Q236 744 237 649Q240 514 242 490Q243 467 250 462Q258 457 261 460Q264 462 271 479ZM361 230Q383 250 384 262Q386 273 369 297Q351 322 290 382Q229 441 207 455Q191 465 159 492Q103 537 104 506Q104 496 110 481Q116 467 160 415Q204 363 256 310Q300 264 307 226Q314 188 361 230ZM673 159Q694 178 701 209Q712 257 699 303Q699 306 699 308Q699 310 705 310Q711 311 718 311Q725 311 740 311Q783 311 803 321Q818 329 836 348Q853 366 853 374Q853 380 840 391Q827 402 821 402Q814 402 798 423Q783 444 785 451Q786 462 770 467Q755 472 736 468Q712 462 699 465Q691 468 690 474Q688 479 688 504V541L765 542Q844 542 856 550Q869 559 876 559Q884 559 892 577Q900 595 894 601Q883 615 874 702Q872 730 864 748Q856 765 846 765Q830 765 803 738Q793 730 781 730Q769 730 764 723Q755 713 775 710Q785 710 799 710Q818 712 824 705Q828 696 831 658Q834 619 831 600L825 576L799 573Q771 570 752 563Q733 556 712 564Q690 572 686 594Q683 616 684 733Q687 882 708 989Q715 1021 704 1020Q698 1020 691 1014Q660 990 656 908Q653 857 648 835Q641 805 634 663Q632 612 626 606Q621 600 594 615Q580 623 576 631Q571 639 564 670Q552 712 552 727Q551 759 528 786Q506 812 474 818L454 822L459 807Q461 793 477 775Q499 744 506 698Q510 667 515 657Q517 649 509 650Q499 651 446 672Q400 689 384 692Q369 695 361 686Q340 668 370 640Q391 622 408 588Q419 563 420 557Q422 551 415 538Q407 521 404 507Q401 496 406 493Q412 490 433 492Q442 493 463 486Q484 479 506 474L527 468L524 436Q520 405 517 402Q515 399 494 402Q474 405 457 411Q446 413 424 390Q398 363 402 356Q407 349 450 349Q496 348 501 345Q506 341 506 324Q505 308 499 297Q492 282 484 262Q477 241 484 236Q491 230 519 234Q544 237 554 249Q564 261 564 293Q565 320 572 326Q578 332 601 329L627 325L628 294Q628 264 628 212Q627 159 635 150Q643 140 650 142Q656 143 673 159ZM772 343Q750 339 718 348Q699 352 694 363Q688 374 688 406V443L702 440Q720 436 725 432Q730 427 739 412Q750 390 763 372Q776 355 781 348Q782 345 772 343ZM594 380 575 385 576 413Q578 440 580 444Q583 448 602 448Q621 447 624 444Q627 440 628 408Q629 380 624 376Q620 371 594 380ZM613 483Q594 483 589 486Q585 489 578 529Q572 569 575 573Q576 574 601 566Q620 560 624 556Q627 552 629 532Q632 506 632 495Q632 488 628 486Q625 483 613 483ZM499 523Q481 528 477 532Q473 537 471 553Q467 576 464 593Q460 607 464 608Q468 608 495 600Q515 594 518 590Q522 587 522 574Q522 556 526 537Q530 518 527 516Q524 514 499 523Z"},国:{w:1e3,h:1e3,d:"M744 581Q761 590 761 603Q761 616 744 643Q742 646 717 634Q692 621 684 612Q665 597 684 574Q688 569 708 572Q728 574 744 581ZM678 352Q695 356 697 364Q699 373 691 390Q685 399 678 404Q670 409 646 415Q616 422 604 432Q591 441 591 458Q591 469 599 474Q607 478 629 478Q650 478 657 485Q664 492 653 502Q643 513 642 524Q640 532 634 534Q629 537 609 539Q580 544 574 548Q570 552 570 585Q570 618 574 630Q579 644 625 633Q692 616 685 635Q684 639 677 646Q663 660 632 674Q602 689 588 689Q572 689 566 698Q563 705 561 705Q559 705 554 698Q548 691 544 691Q541 691 530 696Q510 706 452 724Q394 741 374 744Q356 745 352 744Q349 742 346 730Q343 714 332 706Q313 693 331 668Q350 640 390 651Q441 665 496 632Q527 612 530 605Q532 598 528 581Q527 567 524 566Q520 565 507 566Q488 570 483 574Q478 577 446 584Q413 590 404 594Q395 598 388 584Q380 569 374 569Q369 569 360 558Q350 546 350 539Q350 528 366 521Q383 514 402 516Q423 520 475 502L528 485V460Q528 458 528 455Q528 439 522 438Q516 436 474 444Q464 446 460 447L409 457L390 437Q363 412 374 401Q377 397 377 391Q377 385 392 385Q443 390 483 380Q513 373 528 372Q544 371 588 360Q629 350 644 349Q660 348 678 352ZM192 282Q217 287 234 304Q250 320 251 342Q254 364 259 407Q264 450 265 632L266 812L282 814Q304 817 401 811Q483 805 534 804Q584 804 594 800Q605 796 624 800Q644 805 679 811Q733 819 733 832Q734 839 719 849Q691 867 636 845Q595 829 499 846Q468 850 390 858Q313 866 294 873Q275 880 273 877Q272 877 270 878Q269 878 268 881Q266 884 264 887Q258 898 248 909L237 920L220 899Q206 881 204 870Q203 859 210 839Q219 821 222 743Q224 665 219 632Q213 597 209 503Q205 429 198 398Q192 366 177 339Q159 310 156 303Q153 296 160 287Q168 278 192 282ZM761 208Q817 227 835 248Q843 259 836 270Q828 280 828 318Q828 357 823 367Q818 377 818 534Q818 691 824 745L833 846Q838 894 844 923Q849 952 842 959Q836 965 834 964Q831 962 825 954Q815 941 789 907Q763 873 763 870Q763 867 782 867L800 868V840Q798 812 796 656Q794 500 788 460Q783 420 780 365Q777 310 768 275Q759 251 756 246Q752 240 740 238Q721 234 693 237L614 247Q563 252 526 264Q490 276 420 278Q370 278 356 276Q343 273 325 264Q308 254 300 242Q292 231 299 224Q301 222 367 213L468 202Q509 196 626 199Q742 202 761 208Z"}};function fe(t,e,n){if(!t)return;t.classList.remove(e),t.offsetWidth,t.classList.add(e);let a=()=>t.classList.remove(e);t.addEventListener("animationend",function o(r){r.target===r.currentTarget&&(a(),t.removeEventListener("animationend",o))}),setTimeout(a,n||1200)}function Dt(t,e){if(!t||!e)return null;let n={},a=W(t),o=W(e);return a!==o&&(n.铜钱={from:a,to:o}),t.教务.信众!==e.教务.信众&&(n.信众={from:t.教务.信众,to:e.教务.信众}),[["正殿",t.道场.正殿等级,e.道场.正殿等级],["地界",t.时空.当前地界,e.时空.当前地界],["时间",t.时空.时间,e.时空.时间]].forEach(([r,i,s])=>{i!==s&&s&&(n[r]={text:!0,from:i,to:s})}),ue.forEach(r=>{!ge(t,r.key)&&ge(e,r.key)&&(n["解锁."+r.key]={text:!0})}),B.forEach(r=>{let i=t.核心女主[r],s=e.核心女主[r];i.灌顶位阶!==s.灌顶位阶&&s.灌顶位阶&&(n["位阶."+r]={text:!0,from:i.灌顶位阶,to:s.灌顶位阶}),i.心声!==s.心声&&s.心声&&(n["心声."+r]={text:!0}),Object.keys(i.回想).length!==Object.keys(s.回想).length&&(n["回想."+r]={text:!0})}),Object.keys(n).length?n:null}var Hn=null;function Ue(t){Hn=t}function Ke(){let t=Hn;if(Hn=null,!t||!X())return;let e=m.getElementById(T);e&&Object.keys(t).forEach(n=>{if(n.startsWith("解锁.")){fe(e.querySelector('.mz-nav-item[data-zone="'+n.slice(3)+'"]'),"mz-unveil",2600);return}e.querySelectorAll('[data-stat="'+n+'"]').forEach(a=>fe(a,"mz-flash",1500))})}var Y="开坛",Nn="开山立坛",Qo=t=>"https://i.postimg.cc/"+t,Rn=[{key:"理趣大乐",line:"借香汤声色破戒，以肉身作坛城。"},{key:"造境摄魂",line:"布暗室光影与迷香，造神迹以摄魄。"},{key:"慈悲蛊心",line:"揽万般罪业于己，引信众倾心托付。"},{key:"尸陀修罗",line:"筑修罗黑坛，以严刑骨器降伏恶徒。"},{key:"罪业提线",line:"握满城公卿把柄，借利害掌提线之索。"}],Ui={理趣大乐:"sect-1-bliss.webp",造境摄魂:"sect-2-illusion.webp",慈悲蛊心:"sect-3-mercy.webp",尸陀修罗:"sect-4-asura.webp",罪业提线:"sect-5-strings.webp"},ko=[{title:"破庙开山",blurb:"会昌元年三月，你重回城南荒庙，在断臂佛像下掘开空置的地窖，借满城欲念开坛立教。",img:Qo("0jvwGjx0/ying-xiong-tu-de-gong-da-fa-hui.png")},{title:"雪域缘起",blurb:"会昌元年五月，地宫密坛粗成，四女皆已入坛受灌，西市摆摊的落难蕃女正立于庙门之外，雪域佛国自此起局。",img:Qo("DZTyg3QQ/ying-xiong-tu-xue-yu-fu-guo.png")}],At=null,et=0,Bn=0;var Xt=!1;function We(){try{let t=getChatMessages(0,{include_swipes:!0})[0];return!t||!Array.isArray(t.swipes)?null:{swipes:t.swipes,cur:t.swipe_id||0,data:t.swipes_data||[]}}catch(t){return y("readOpenings",t),null}}function Ki(){try{let t=getChatMessages(0)[0];return!!t&&It(t.message)}catch{return!1}}function kt(){if(C()===0&&Ki())return!0;let t=L();return t._empty&&qn()?!1:!t.道场.宗风}var qn=()=>{let t=C();return t!=null&&t>0};function So(){let t=We();if(!t)return[];let e=[];return t.swipes.forEach((n,a)=>{It(n)||e.push(a)}),e}function Lo(){let t=qn(),e=We(),n=So();n.length&&et>=n.length&&(et=n.length-1);let a=t||Bn===1,o,r;if(a){let i=Rn.find(l=>l.key===At)||Rn[0],s=Rn.map(l=>`<label class="mz-pick mz-gate-sect" data-gate="sect" data-sect="${l.key}"><input type="radio" name="宗风" value="${l.key}"${At===l.key?" checked":""}><b>${l.key}</b><small>${l.line}</small></label>`).join(""),c=!!At&&(t||n.length>0||!e);o=`<div class="mz-gate-body mz-gate-sects">
        <h4>宗风</h4>
        <div class="mz-gate-two">
          <div class="mz-rite-pic mz-gate-pic"><img src="${E(Ui[i.key])}" alt=""></div>
          <div class="mz-picks mz-col mz-gate-picks">${s}</div>
        </div>
      </div>`,r=(t?"":'<button class="mz-gate-back" data-gate="step" data-step="0">上一步</button>')+`<button class="mz-seal-btn mz-lg" data-gate="confirm" ${c?"":"disabled"}>开坛</button>
      <span class="mz-why">${c?"":"请先择定宗风"}</span>`}else{let i=ko[n[et]!=null?n[et]-1:0]||ko[0],c=n.length>1?`<div class="mz-gate-nav"><button data-gate="prev" ${et===0?"disabled":""}>${O.chev}</button><span>${et+1} / ${n.length}</span><button data-gate="next" ${et===n.length-1?"disabled":""}>${O.chev}</button></div>`:"";o=`<div class="mz-gate-body mz-gate-opening">
        <h4>开场白</h4>
        <div class="mz-gate-two mz-gate-card">
          <div class="mz-gate-img"${i.img?` style="background-image:url('${i.img}')"`:""}></div>
          <div class="mz-gate-text">
            <b>${i.title}</b>
            <p>${i.blurb}</p>
            ${c}
          </div>
        </div>
      </div>`,r='<button class="mz-seal-btn mz-lg" data-gate="step" data-step="1">下一步</button>'}return`<section class="mz-win mz-on mz-gate-win">
    ${o}
    <div class="mz-gate-foot">
      ${r}
    </div>
  </section>`}async function Wi(t){let e=We();if(!(!e||t===e.cur||e.swipes[t]==null)){await setChatMessages([{message_id:0,swipe_id:t}]);try{await eventEmit(tavern_events.MESSAGE_SWIPED,0)}catch(n){y("swipeEmit",n)}R(0),H(null)}}function Eo(t){let e=null;try{e=getVariables({type:"message",message_id:t})}catch(n){y("gate:get",n)}if((!e||!e.stat_data)&&t===0){let n=We(),a=n&&n.data[n.cur];e=a&&a.stat_data?{stat_data:a.stat_data}:null}return!e||!e.stat_data?null:_.cloneDeep(_.omit(e.stat_data,["$internal"]))}async function Di(t){if(!(Xt||!At)){Xt=!0,t.disabled=!0;try{let e=qn();if(!e){let o=So()[et];o!=null&&await Wi(o)}let n=Eo(0);if(!n&&!e)throw new Error("开场账目未读到，稍后再试");if(n&&(_.set(n,"道场.宗风",At),await insertOrAssignVariables({stat_data:n},{type:"message",message_id:0}),R(0)),e){let o=C(),r=Eo(o);if(!r)throw new Error("末楼账目未读到，稍后再试");_.set(r,"道场.宗风",At),await insertOrAssignVariables({stat_data:r},{type:"message",message_id:o}),R(o),H(_.cloneDeep(r))}else H(_.cloneDeep(n));let a=Xi();nt(!0),j(!0),q(),await a}catch(e){let n=m.querySelector("#"+f.lift+" .mz-gate-foot .mz-why");n&&(n.textContent="出错: "+(e&&e.message?e.message:e));let a=m.querySelector("#"+f.lift+' .mz-gate-foot button[data-gate="confirm"]');a&&(a.disabled=!1)}finally{Xt=!1}}}function Xi(){let t=m.getElementById("mz-shell-root");return t?new Promise(e=>{let n=m.createElement("div");n.className="mz-veil",n.innerHTML='<span class="mz-huo-word">'+[...Nn].map(i=>De(i)).join("")+"</span>",t.appendChild(n);let a=!1,o=()=>{a||(a=!0,clearTimeout(r),n.classList.add("mz-out"),n.addEventListener("animationend",()=>n.remove(),{once:!0}),e())};n.addEventListener("click",o,{once:!0});let r=setTimeout(o,2200)}):Promise.resolve()}function _o(){fe(m.getElementById(f.paper),"mz-paper-in",900);let t=m.getElementById("mz-shell-root");if(!t)return;[...t.querySelectorAll(".mz-topbar, #mz-minimap, .mz-side .mz-nav-item")].forEach((n,a)=>{n.style.setProperty("--i",a),fe(n,"mz-kindle",1400)})}function To(t){let e=t.target.closest("[data-gate]");if(!e||e.disabled)return;let n=e.dataset.gate;if(n==="sect"){t.target.tagName!=="INPUT"&&(At=e.dataset.sect,it());return}if(n==="step"){Bn=+e.dataset.step,it();return}if(n==="prev"){et=Math.max(0,et-1),it();return}if(n==="next"){et+=1,it();return}n==="confirm"&&Di(e)}function Et(){return Xt?!1:kt()?(Bn=0,xt(Y),!0):!1}function Mo(){let t=m.getElementById("acu-app-v2");t&&t.style.zIndex!=="9200"&&(t.style.setProperty("position","relative","important"),t.style.setProperty("z-index","9200","important")),m.querySelectorAll(".auto-card-updater-popup").forEach(e=>{e.style.zIndex!=="9200"&&e.style.setProperty("z-index","9200","important")})}function Io(){let t=m.getElementById("acu-app-v2");return t&&t.style.display!=="none"?!0:!!m.querySelector(".auto-card-updater-popup")}function Xe(t){let e=String(t),n=e.match(/<本轮用户输入>\s*([\s\S]*?)\s*<\/本轮用户输入>/);if(n)e=n[1];else{let a=e.indexOf("<本轮用户输入>");a>=0&&(e=e.slice(a+8))}return e=e.replace(/\n*\s*(?:以上是用户的本轮输入|以下输入的代码为既定事实记忆|\[时间约束词\])[\s\S]*$/,""),e=e.replace(/^\s*以下是用户的本轮输入[：:]\s*/,""),e=e.replace(/<\/?本轮用户输入>/g,""),e=e.replace(/\s*<UpdateVariable>[\s\S]*?<\/UpdateVariable>\s*/gi,`
`).trim(),e||String(t)}function S(t){let e=m.getElementById(f.status);e&&(e.textContent=t||"")}var k=!1,xe=null,he=!1,Ht=!1,Ot=null;function Rt(t){k=t;let e=m.getElementById(f.textarea),n=m.getElementById(f.send),a=m.getElementById(f.regen),o=m.getElementById(f.del);e&&(e.disabled=t),n&&(n.textContent=t?"止":"敕",n.title=t?"停止":"发送"),a&&(a.disabled=t),o&&(o.disabled=t);let r=m.querySelector("#"+f.paper+" .mz-earlier");r&&(r.disabled=t)}var I=!1,J=new Set,Ye=!1,jt=null,Ao=0;function $n(){Ye=!1,jt&&(clearTimeout(jt),jt=null);let t=J.size,e=m.getElementById(f.delCount),n=m.getElementById(f.delConfirm);e&&(e.textContent=t?"自此以下 "+x(t)+" 则":"点一则，自它起到末尾一并删去"),n&&(n.disabled=!t,n.classList.remove("mz-armed"),n.textContent=t?"删去 "+x(t)+" 则":"删除")}function jo(t){let e=C(),n=J.size?Math.min(...J):null;if(J.clear(),n!==t&&e!=null&&t>=1)for(let o=t;o<=e;o++)J.add(o);let a=m.getElementById(f.paper);a&&a.querySelectorAll(".mz-turn.mz-selable").forEach(o=>o.classList.toggle("mz-delsel",J.has(+o.dataset.mid))),$n()}function ht(t){if(!t){let a=m.getElementById(f.paper);a&&a.querySelectorAll(".mz-turn.mz-selable").forEach(o=>o.classList.remove("mz-selable","mz-delsel"))}I=t,J.clear();let e=m.getElementById(f.writing),n=m.getElementById(f.delbar);e&&(e.style.display=t?"none":""),n&&n.classList.toggle("mz-show",t),$n(),S(""),q()}async function Ho(){if(k)return;if(I){ht(!1);return}if(await ve(),Q)return;let t=C();if(t==null||t<1){S("尚无可删去的记录");return}ht(!0)}async function Ro(){if(!I||!J.size||k)return;let t=m.getElementById(f.delConfirm);if(!Ye){Ye=!0,Ao=Date.now(),t&&(t.classList.add("mz-armed"),t.textContent="再点一次删去 "+x(J.size)+" 则"),jt=setTimeout($n,3e3);return}if(Date.now()-Ao<300)return;jt&&(clearTimeout(jt),jt=null),Ye=!1;let e=Array.from(J).sort((n,a)=>n-a);t&&(t.disabled=!0,t.classList.remove("mz-armed")),S("删去中……");try{if(typeof triggerSlash!="function")throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");let n=[];e.forEach(a=>{let o=n[n.length-1];o&&a===o[1]+1?o[1]=a:n.push([a,a])});for(let[a,o]of n.reverse())await triggerSlash(a===o?"/cut "+a:"/cut "+a+"-"+o)}catch(n){S("出错: "+(n&&n.message?n.message:n))}finally{H(null),R(),ht(!1),j(!0),Et()}}var Q=null;function No(t){Q=t}function Fn(t){if(!Q)return;let e=t.querySelector('.mz-turn.mz-zhu[data-mid="'+Q.mid+'"]');if(!e){Q=null;return}e.classList.add("mz-editing"),e.innerHTML='<div class="mz-story-edit"><textarea title="Ctrl+Enter 存, Esc 弃"></textarea><div class="mz-story-edit-row"><button class="mz-edit-btn mz-edit-cancel">弃</button><button class="mz-edit-btn mz-primary mz-edit-save">存</button></div></div>';let n=e.querySelector("textarea");n.value=Q.draft;let a=()=>{n.style.height="auto",n.style.height=n.scrollHeight+2+"px"};a(),n.addEventListener("input",()=>{Q&&(Q.draft=n.value),a()});let o=!1;n.addEventListener("compositionstart",()=>{o=!0}),n.addEventListener("compositionend",()=>{o=!1}),n.addEventListener("keydown",r=>{r.key==="Enter"&&(r.ctrlKey||r.metaKey)&&!o&&!r.isComposing&&(r.preventDefault(),Nt(!0))}),e.querySelector(".mz-edit-save").addEventListener("click",()=>Nt(!0)),e.querySelector(".mz-edit-cancel").addEventListener("click",()=>Nt(!1)),n.focus(),n.setSelectionRange(n.value.length,n.value.length)}async function Bo(t){if(k||I||Q&&(Q.mid===t||(await Nt(!0),Q)))return;let e=null,n="",a=null;try{let r=getChatMessages(t)[0];if(r&&r.role==="user"){let i=Jt(r);e=Xe(i),n=(i.match(/<UpdateVariable>[\s\S]*?<\/UpdateVariable>/i)||[""])[0],Qe(r)&&(a=r)}}catch(r){y("readUserMsg",r)}if(e==null)return;Q={mid:t,draft:e,block:n,moved:a};let o=m.getElementById(f.paper);o&&Fn(o),S("改写中……")}async function Nt(t){if(!Q)return;let e=Q.mid,n=String(Q.draft==null?"":Q.draft).trim();if(t&&n){try{let r=Q.block?n+`
`+Q.block:n,i=Q.moved?Wo(Q.moved,r):[{message_id:e,message:r}];await setChatMessages(i,{refresh:"affected"}),i.forEach(s=>R(s.message_id))}catch(r){S("出错: "+(r&&r.message?r.message:r));return}try{await eventEmit(tavern_events.MESSAGE_EDITED,e),await eventEmit(tavern_events.MESSAGE_UPDATED,e)}catch(r){console.warn("[密宗前端] 补发编辑事件失败",r)}}Q=null;let a=m.getElementById(f.paper),o=a&&a.querySelector('.mz-turn.mz-editing[data-mid="'+e+'"]');o&&o.remove(),S(t&&!n?"未写一字，照旧":""),q()}function ve(){return Q?Nt(!0):Promise.resolve()}function qo(t){let e=t.target.closest(".mz-turn.mz-zhu");if(!e||e.classList.contains("mz-editing"))return;let n=+e.dataset.mid;Number.isInteger(n)&&Bo(n)}var Pn=null,Ct=null,Co=12,Yi=350,Ji=400,Oo=30;function Po(t){t.pointerType!=="touch"&&t.pointerType!=="pen"||(Pn={x:t.clientX,y:t.clientY,t:Date.now()})}function $o(t){if(t.pointerType!=="touch"&&t.pointerType!=="pen")return;let e=Pn;if(Pn=null,!e||Date.now()-e.t>Yi||Math.abs(t.clientX-e.x)>Co||Math.abs(t.clientY-e.y)>Co){Ct=null;return}let n=t.target.closest(".mz-turn.mz-zhu");if(!n||n.classList.contains("mz-editing")){Ct=null;return}let a=+n.dataset.mid;if(!Number.isInteger(a)){Ct=null;return}let o=Ct;Ct={mid:a,x:t.clientX,y:t.clientY,t:Date.now()},o&&o.mid===a&&Ct.t-o.t<Ji&&Math.abs(t.clientX-o.x)<Oo&&Math.abs(t.clientY-o.y)<Oo&&(Ct=null,Bo(a))}async function Fo(){he=!1;let t="mz_gen_"+Date.now()+"_"+Math.random().toString(36).slice(2);xe=t,Ot=C(),S("续写中……");let e=null,n="",a="",o="none",r=0,i=()=>{e=null;let d=m.getElementById(f.paper);if(!d)return;let g=tn(n,!0,0),u=d.querySelector('[data-stream-genid="'+t+'"]'),b=ye(d);if(!g){let v=a||be(n,!0),N=o!=="none"||!!v;S(N?"推演中……":"构思中……");let Ma=N?Ko():'<div class="mz-text">'+ze("…",!0)+"</div>";u&&u.classList.contains("mz-thinking-turn")===N?N||(u.innerHTML=Ma):(u&&u.remove(),d.insertAdjacentHTML("beforeend",'<div class="mz-turn mz-gm'+(N?" mz-thinking-turn":"")+'" data-stream-genid="'+t+'">'+Ma+"</div>")),b&&(d.scrollTop=d.scrollHeight),zt();return}S("续写中……"),r>g.length&&(r=g.length);let K=g.length-r;K>0&&(r=Math.min(g.length,r+Math.max(1,Math.ceil(K/6))));let w=g.slice(0,r);if(u&&!u.classList.contains("mz-thinking-turn")){let v=u.querySelector(".mz-text");v&&Uo(v,w||"…")}else{u&&u.remove();let v=a||be(n),N=v?Yt(v,null,!1):"";d.insertAdjacentHTML("beforeend",'<div class="mz-turn mz-gm" data-stream-genid="'+t+'">'+N+'<div class="mz-text">'+ze(w||"…",!0)+"</div></div>")}b&&(d.scrollTop=d.scrollHeight),zt(),r<g.length&&(e=requestAnimationFrame(i))},s=d=>{if(xe===t){if(he)try{SillyTavern.stopGeneration()}catch(g){y("stopGen",g)}n=d,e==null&&(e=requestAnimationFrame(i))}},c=null,l=d=>{xe===t&&(c=d)},p=(d,g,u,b)=>{a=d||a,o=b,e==null&&(e=requestAnimationFrame(i))};try{if(eventOn(tavern_events.STREAM_TOKEN_RECEIVED,s),eventOn(tavern_events.MESSAGE_RECEIVED,l),eventOn(tavern_events.STREAM_REASONING_DONE,p),typeof triggerSlash!="function")throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");await triggerSlash("/trigger await=true");let d=C(),g=d!=null&&Ot!=null&&d>Ot&&getChatMessages(d)[0]||null,u=!!(g&&g.role!=="user");S(he?"已停":u?"":"未得回音，可重拟前文")}catch(d){S(he?"已停":"出错: "+(d&&d.message?d.message:d))}finally{eventRemoveListener(tavern_events.STREAM_TOKEN_RECEIVED,s),eventRemoveListener(tavern_events.STREAM_REASONING_DONE,p),eventRemoveListener(tavern_events.MESSAGE_RECEIVED,l),e!=null&&(cancelAnimationFrame(e),e=null);let d=c??C();d!=null&&d>=0&&R(d),Ot=null,xe=null,Rt(!1),q(),j()}}function ts(t){return String(t).replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/\{/g,"\\{").replace(/\}/g,"\\}")}async function es(t,e){try{let n=getVariables({type:"message",message_id:t})||{},a=n.stat_data,o=_.get(e,"系统.扣款记录"),r=null;try{r=t>0?(getVariables({type:"message",message_id:t-1})||{}).stat_data:null}catch(i){y("carryPrev",i)}a&&o&&_.get(a,"系统.扣款记录")===o?H(_.cloneDeep(_.omit(a,["$internal"]))):(y("carryStat","用户楼不见代发印记, 兜底替换"),S("账房补记"),await replaceVariables({...n,stat_data:e},{type:"message",message_id:t}),H(_.cloneDeep(e))),R(t),j(!0),r&&(Ue(Dt(L(r),L(e))),Ke())}catch(n){throw y("carryStat",n),new Error("账目未能记入，请删去这一则重来")}}async function we(t,e){if(k||I||!t||(await ve(),Q))return!1;if(kt())return xt(Y),S("请先开坛"),!1;Rt(!0);try{if(S("记录中……"),typeof triggerSlash!="function")throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");let n=C();await triggerSlash("/send "+ts(t));let a=C(),o=a!=null&&getChatMessages(a)[0]||null;if(a!==(n??-1)+1||!o||o.role!=="user")throw new Error("示下未能入卷");if(e&&e.carryStat&&await es(a,e.carryStat),e&&e.onSent)try{e.onSent(a)}catch(r){y("onSent",r)}q(),Je()}catch(n){return Ht=!1,S("出错: "+(n&&n.message?n.message:n)),Rt(!1),!1}return Ht?(Ht=!1,S("已停"),Rt(!1),!0):(await Fo(),!0)}async function Gn(){let t=m.getElementById(f.textarea);if(!t||k)return;let e=t.value.trim();if(!e)return;t.value="",St(),await we(e)||(t.value=e,St())}function Go(t){if(k)return;let e=m.getElementById(f.textarea);e&&(e.value=t,St(),e.focus())}function Vo(){if(!k){Gn();return}if(xe){he=!0;try{SillyTavern&&typeof SillyTavern.stopGeneration=="function"?SillyTavern.stopGeneration():console.warn("[密宗前端] 环境缺少 SillyTavern.stopGeneration")}catch(t){y("stopGen2",t)}}else Ht=!0;S("停笔中……")}async function Zo(){if(k||I||(await ve(),Q))return;let t=getLastMessageId();if(t==null||t<0)return;let e=getChatMessages(t)[0],n=e&&e.role!=="user";if(n&&t===0){S("开场白不可重写，请先示下");return}Rt(!0);try{if(n){if(typeof triggerSlash!="function")throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");if(await triggerSlash("/cut "+t),C()!==t-1)throw new Error("删去上一条回文未生效");H(null),R(t),q(),j(!0)}}catch(a){Ht=!1,S("出错: "+(a&&a.message?a.message:a)),Rt(!1);return}if(Ht){Ht=!1,S("已停"),Rt(!1);return}await Fo()}var Yo=30,ns=30,Zn=Yo,Vn=!1,Ee=null,te=new Map,Bt=new Map,Se=new Set;function R(t){Number.isInteger(t)?(ee.delete(t),te.delete(t),te.delete(t+1),at.delete(t),at.delete(t+1),Se.delete(t)):(ee.clear(),te.clear(),Bt.clear(),Se.clear(),ne.clear(),at.clear(),Zn=Yo)}function Do(t){try{if(typeof getVariables=="function"&&Number.isInteger(t)&&t>=0){let e=getVariables({type:"message",message_id:t});if(e&&e.stat_data)return e.stat_data}}catch(e){y("msgStat",e)}return null}function st(t){if(te.has(t))return te.get(t);let e=null;try{let n=Do(t);if(n){let a=L(n),o=t>=1?Do(t-1):null;e={delta:o?Dt(L(o),a):null,girls:a.核心女主,D:a}}}catch(n){console.warn("[密宗前端] 逐楼变量读取失败",n)}return te.set(t,e),e}function as(){let t=getLastMessageId();if(t==null||t<0)return null;let e=getChatMessages("0-"+t);return e?e.filter(n=>n.is_hidden!==!0):null}function os(t){let e=t.extra;return e&&(e.reasoning||e.extra&&e.extra.reasoning)||""}function rs(t,e){let n=ee.get(t.message_id);if(t.role==="user"){if(n===void 0){let o=Qe(t),r=Jt(t,e);n={role:"user",text:Xe(r),thought:"",mid:t.message_id},(!o||r!==on)&&ee.set(t.message_id,n)}return n}let a=Kn(t.message_id);return(n===void 0||n.depth!==a)&&(n={role:"assistant",text:tn(t.message,!1,a),thought:os(t)||be(t.message),mid:t.message_id,depth:a},ee.set(t.message_id,n)),n}function is(t,e){if(!t.text)return"";let n=ne.has(t.mid),a=!e&&t.role!=="user"&&Number.isInteger(t.mid);return or(t.role,t.text,t.mid,t.thought,n,a?nn(t.mid):"",a?Un(t.mid):"")}function ss(t){t.querySelectorAll(".mz-turn").forEach(e=>{let n=+e.dataset.mid;n>=1&&(e.classList.add("mz-selable"),J.has(n)&&e.classList.add("mz-delsel"))})}function Xo(t){let e=t.closest(".mz-ff-wrap");e&&(e.innerHTML=Le(+e.dataset.footMid))}function Jo(){m.querySelectorAll("#"+T+" .mz-ff-wrap").forEach(t=>{t.innerHTML=Le(+t.dataset.footMid)})}function ls(t){let e=t.closest(".mz-thought"),n=!e.classList.contains("mz-open");e.classList.toggle("mz-open",n);let a=e.dataset.foldMid;if(a!=null){let o=+a;n?ne.add(o):ne.delete(o)}}function tr(t){if(t.target.closest(".mz-earlier")){t.stopPropagation(),fs();return}let n=t.target.closest(".mz-th-head");if(n){t.stopPropagation(),ls(n);return}if(I){let c=t.target.closest(".mz-turn");if(c){let l=+c.dataset.mid;l>=1&&jo(l)}return}let a=t.target.closest(".mz-opt");if(a){t.stopPropagation();let c=+a.dataset.idx;Ee&&Ee[c]!=null&&Go(Ee[c]);return}if(t.target.closest("[data-open-atlas]")){t.stopPropagation(),xt("舆图");return}let r=t.target.closest("[data-foot-char]");if(r){t.stopPropagation(),Dn(r.dataset.footChar),xt("同心缕");return}let i=t.target.closest("[data-foot-tab]");if(i){t.stopPropagation();let c=i.closest(".mz-ff-wrap");c&&(Bt.set(+c.dataset.footMid,i.dataset.footTab),Xo(i));return}let s=t.target.closest("[data-foot-item]");if(s){t.stopPropagation();let c=s.closest(".mz-ff-wrap");if(c){let l=+c.dataset.footMid,p=s.dataset.footItem,d=String(Bt.get(l)||""),g=p.indexOf("voice:")===0;(g?d.indexOf(p+":")===0:d===p)?Bt.delete(l):Bt.set(l,g?p+":voice":p),g&&Se.add(l),Xo(s)}}}function en(t){if(t=t||m.getElementById(f.paper),!t)return;let e=t.querySelector(".mz-letter-strip");if(e&&e.remove(),k)return;let n=nr(L());if(!n)return;let a=t.querySelector(".mz-opts");a?a.insertAdjacentHTML("beforebegin",n):t.insertAdjacentHTML("beforeend",n)}function cs(t,e){let n=t.querySelector(".mz-opts");n&&n.remove(),Ee=null;let a=e[e.length-1];if(!k&&a&&a.role!=="user"){let o=ir(a.message,Kn(a.message_id));o.length&&(Ee=o,t.insertAdjacentHTML("beforeend",rr(o)))}}function er(t,e){let n=[...t.querySelectorAll(".mz-scene")],a=r=>{let i=n.find(s=>s.classList.contains("mz-fest")===r);return i?i.dataset.scene:""};if(a(!0)+"|"+a(!1)===ar(e))return;n.forEach(r=>r.remove());let o=t.querySelector(".mz-text");o&&o.insertAdjacentHTML("beforebegin",Un(e))}function ps(t,e){if(t.classList.contains("mz-editing"))return;let n=t.querySelector(".mz-text");n&&Wn(n,an(e.text,!1));let a=t.querySelector(".mz-thought");if(e.thought){let o=ne.has(e.mid);if(a){a.classList.toggle("mz-open",o);let r=a.querySelector(".mz-th-body"),i=M(e.thought);r&&r.innerHTML!==i&&(r.innerHTML=i)}else t.insertAdjacentHTML("afterbegin",Yt(e.thought,e.mid,o))}else a&&a.remove();if(e.role!=="user"&&Number.isInteger(e.mid)){er(t,e.mid);let o=t.querySelector(".mz-ff-wrap"),r=nn(e.mid);r?o?o.innerHTML=Le(e.mid):t.insertAdjacentHTML("beforeend",r):o&&o.remove()}}function ms(t,e,n){let a=new Set,o=[],r=null;for(let l of e){let p=rs(l,r);r=l,p.text&&(a.add(l.message_id),o.push({mid:l.message_id,data:p}))}let i=new Map,s=[];for(let l of Array.from(t.children)){let p=l.dataset.mid;if(p!=null){let d=+p;a.has(d)?i.set(d,l):s.push(l)}else s.push(l)}for(let l of s)l.remove();let c=t.firstElementChild;for(let{mid:l,data:p}of o){let d=i.get(l);if(d)d!==c?t.insertBefore(d,c):c=c.nextElementSibling,at.get(l)!==p&&(ps(d,p),at.set(l,p));else{let g=is(p,n);if(g){let u=m.createElement("template");u.innerHTML=g,t.insertBefore(u.content.firstElementChild,c),at.set(l,p)}}}for(let[l]of at)a.has(l)||at.delete(l)}var ke=null;function ds(t){ke!=null&&cancelAnimationFrame(ke);let e=Array.from(t.querySelectorAll(".mz-turn.mz-gm")),n=e.length-1;function a(){ke=null;let o=performance.now()+8;for(;n>=0&&performance.now()<o;){let r=e[n--],i=+r.dataset.mid;if(Number.isInteger(i)&&!r.querySelector(".mz-ff-wrap")){let s=nn(i);s&&r.insertAdjacentHTML("beforeend",s),r.querySelector(".mz-scene")||er(r,i)}}n>=0&&(ke=requestAnimationFrame(a))}ke=requestAnimationFrame(a)}function fs(){I||k||(Vn=!0,Zn+=ns,q(),Vn=!1)}function q(){let t=m.getElementById(f.paper);if(t)try{let e=!t.childElementCount||ye(t),n=t.scrollTop,a=t.scrollHeight,o=as();if(!o){t.innerHTML="",at.clear();return}k&&Ot!=null&&(o=o.filter(g=>g.message_id<=Ot));let r=o.length,i=Math.max(0,r-Zn),s=o.slice(i),c=i>0,l=at.size===0&&s.length>0;l&&(e=!0),ms(t,s,l);let p=t.querySelector(".mz-earlier");if(c){let g="前文尚有 "+x(i)+" 则，展卷";if(p)p.textContent=g,p.disabled=I||k;else{let u=m.createElement("button");u.className="mz-earlier",u.textContent=g,u.disabled=I||k,t.insertBefore(u,t.firstChild)}}else p&&p.remove();I?ss(t):(cs(t,s),en(t),Fn(t)),r<=1&&(l||n===0)?t.scrollTop=0:e?t.scrollTop=t.scrollHeight:Vn?t.scrollTop=n+(t.scrollHeight-a):t.scrollTop=n,zt(),l&&ds(t)}catch(e){console.warn("[密宗前端] 正文渲染失败",e),t.childElementCount||S("卷文未能铺展，请重新入卷")}}var Xn={正殿:"正殿"};function gs(t){let e=[];if(!t||!t.delta)return e;let n=t.delta;if(n.铜钱){let a=n.铜钱.to-n.铜钱.from;e.push({key:"stat:铜钱",html:'<span>铜钱</span><span class="mz-dv '+(a>0?"mz-up":"mz-down")+'">'+(a>0?O.up:O.down)+U(Math.abs(a))+"</span>",line:"铜钱 "+U(n.铜钱.from)+(a>0?" 升至 ":" 降至 ")+"<b>"+U(n.铜钱.to)+"</b>"})}if(n.信众){let a=n.信众.to-n.信众.from;e.push({key:"stat:信众",html:'<span>信众</span><span class="mz-dv '+(a>0?"mz-up":"mz-down")+'">'+(a>0?O.up:O.down)+x(Math.abs(a))+"人</span>",line:"信众 "+x(n.信众.from)+(a>0?" 升至 ":" 降至 ")+"<b>"+x(n.信众.to)+"</b>"})}return Object.keys(Xn).forEach(a=>{n[a]&&e.push({key:"stat:"+a,html:"<span>"+Xn[a]+'</span><span class="mz-dv">'+M(n[a].to)+"</span>",line:Xn[a]+" "+M(n[a].from||"无")+" 改作 <b>"+M(n[a].to)+"</b>"})}),B.forEach(a=>{let o=n["位阶."+a];o&&e.push({key:"stat:位阶."+a,html:"<span>"+a+'</span><span class="mz-dv mz-up">'+M(o.to)+"</span>",line:a+" "+M(o.from)+" 进至 <b>"+M(o.to)+"</b>"})}),e}function us(t){return t&&t.delta?B.filter(e=>t.delta["心声."+e]||t.delta["回想."+e]):[]}var De=t=>{let e=yo[t];return e?'<svg viewBox="0 0 '+e.w+" "+e.h+'"><path d="'+e.d+'"/></svg>':"<b>"+M(t)+"</b>"};function xs(t,e,n){let a=st(t)||{girls:{}},o=a.girls[e]||{心声:"",回想:{}},r=cr(e,a.D),i=Object.entries(o.回想),s=i.length?i[i.length-1]:null,c='<div class="mz-vc-empty">尚无回想</div>';if(s){let p=String(s[1]||"").split("/"),d=p.length>1?p[0].trim():"",g=p.length>1?p.slice(1).join("/").trim():String(s[1]||"");c='<div class="mz-vc-memos"><div class="mz-vc-memo"><b>'+M(s[0])+(d?"（"+M(d)+"）":"")+"</b>　"+M(g)+"</div></div>"}let l=(p,d)=>"<button"+(n===p?' class="mz-on"':"")+' data-foot-tab="voice:'+e+":"+p+'">'+d+"</button>";return'<div class="mz-vc mz-show '+ce[e]+(n==="memoir"?" mz-memoir":"")+'"><div class="mz-vc-img" title="查阅同心缕" data-foot-char="'+e+'">'+(r?'<img src="'+M(r)+'" alt="'+e+'">':"<span>立绘待补</span>")+'</div><div class="mz-vc-main"><div class="mz-vc-head">'+e+'<span class="mz-vc-tabs">'+l("voice","心声")+l("memoir","回想")+"</span></div>"+(o.心声?'<div class="mz-vc-text">'+M(o.心声)+"</div>":'<div class="mz-vc-text mz-vc-empty">此刻未通心曲</div>')+(n==="memoir"?c:'<div class="mz-vc-memos"></div>')+"</div></div>"}function Le(t){let e=st(t);if(!e)return"";let n=gs(e),a=us(e);if(!n.length&&!a.length)return"";let o=String(Bt.get(t)||"").split(":"),r=o[0]==="stat"?o.join(":"):"",i=o[0]==="voice"?o[1]:"",s='<div class="mz-ff"><div class="mz-ff-vars">'+n.map(l=>'<button class="mz-ff-var'+(r===l.key?" mz-open":"")+'" data-foot-item="'+l.key+'">'+l.html+"</button>").join("")+"</div>"+(a.length?'<div class="mz-ff-side"><span class="mz-ff-label">心声</span>'+a.map(l=>'<button class="mz-ff-voice'+(i===l?" mz-open":"")+'" data-foot-item="voice:'+l+'">'+l+"</button>").join("")+(Se.has(t)?"":'<span class="mz-dot"></span>')+"</div>":"")+"</div>",c="";if(r){let l=n.find(p=>p.key===r);l&&(c='<div class="mz-ff-detail mz-show">'+l.line+"</div>")}else i&&B.includes(i)&&(c=xs(t,i,o[2]==="memoir"?"memoir":"voice"));return s+c}function nn(t){let e=Le(t);return e?'<div class="mz-ff-wrap" data-foot-mid="'+t+'">'+e+"</div>":""}function nr(t){return rn(t)?'<button class="mz-letter-strip" data-letter="open"><img src="'+E("letter-envelope.webp")+'" alt="信封"><span>央金留书一封</span></button>':""}function sr(t){let e=st(t),n=e?Tn(e.D):"";if(!n)return"";if(t>0){let a=st(t-1)||(t>1?st(t-2):null);if(!a||Tn(a.D)===n)return""}return n}function lr(t){let e=st(t),n=e?On(e.D):null;if(!n)return null;if(t>0){let a=st(t-1)||(t>1?st(t-2):null),o=a?On(a.D):null;if(o&&o.名===n.名)return null}return n}var ar=t=>{let e=lr(t);return(e?e.src:"")+"|"+sr(t)};function Un(t){let e=lr(t),n=sr(t),a="";if(e&&(a+='<figure class="mz-scene mz-fest" data-scene="'+e.src+'"><img src="'+E(e.src)+'" alt="'+e.名+'"><figcaption>'+e.名+"　"+e.氛围+"</figcaption></figure>"),n){let o=_n(st(t).D);a+='<figure class="mz-scene" data-scene="'+n+'" data-open-atlas title="查阅舆图"><img src="'+E(n)+'" alt="'+o+'"><figcaption>'+o+"</figcaption></figure>"}return a}function or(t,e,n,a,o,r,i){let s=t==="user"?"mz-zhu":"mz-gm",c=n==null?"":' data-mid="'+n+'"',l=t==="user"&&n!=null?' title="双击就地改写"':"",p=a?Yt(a,n,o):"";return'<div class="mz-turn '+s+'"'+c+l+">"+p+(i||"")+'<div class="mz-text">'+ze(e)+"</div>"+(r||"")+"</div>"}function ye(t){return t.scrollHeight-t.scrollTop-t.clientHeight<80}function zt(){let t=m.getElementById(f.paper),e=m.getElementById(f.jump);!t||!e||e.classList.toggle("mz-show",t.scrollHeight>t.clientHeight&&!ye(t))}function Je(t){let e=m.getElementById(f.paper);e&&(t?e.scrollTo({top:e.scrollHeight,behavior:"smooth"}):e.scrollTop=e.scrollHeight,zt())}var ee=new Map,ne=new Set,at=new Map;function M(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Kn(t){let e=C();return Number.isInteger(t)&&Number.isInteger(e)&&e>=t?e-t:0}function Yn(t,e){if(!t)return t;try{if(typeof formatAsTavernRegexedString=="function"){let n=formatAsTavernRegexedString(t,"ai_output","display",Number.isInteger(e)&&e>=0?{depth:e}:void 0);(String(n).trim()||!t.trim())&&(t=String(n))}}catch(n){console.warn("[密宗前端] 应用酒馆显示正则失败, 按原文显示:",n)}return t.replace(/<ruby(?:\s[^>]*)?>([\s\S]*?)<\/ruby\s*>/gi,(n,a)=>{let o=[];return a.replace(/<rp(?:\s[^>]*)?>[\s\S]*?<\/rp\s*>/gi,"").replace(/<rt(?:\s[^>]*)?>([\s\S]*?)<\/rt\s*>/gi,(i,s)=>(o.push(s.trim()),"")).trim()+(o.length?"（"+o.join("")+"）":"")}).replace(/<rt(?:\s[^>]*)?>([\s\S]*?)<\/rt\s*>/gi,"（$1）")}function rr(t){return'<div class="mz-opts"><div class="mz-opt-head"><i></i>行事<i></i></div>'+t.map((e,n)=>'<button class="mz-opt" data-idx="'+n+'"><span class="mz-num">'+x(n+1)+"</span>"+M(e)+"</button>").join("")+"</div>"}function St(){let t=m.getElementById(f.textarea);t&&(t.style.height="auto",t.style.height=t.scrollHeight+2+"px",zt())}function pr(){let t=m.getElementById(f.paper);if(!t||t.dataset.bound)return;t.dataset.bound="1",t.addEventListener("scroll",zt),t.addEventListener("load",a=>{a.target.closest&&a.target.closest(".mz-scene")&&a.target.classList.add("mz-loaded")},!0),t.addEventListener("click",tr),t.addEventListener("dblclick",qo),t.addEventListener("pointerdown",Po),t.addEventListener("pointerup",$o),m.getElementById(f.jump).addEventListener("click",()=>Je(!k)),m.getElementById(f.send).addEventListener("click",Vo),m.getElementById(f.regen).addEventListener("click",Zo),m.getElementById(f.del).addEventListener("click",Ho),m.getElementById(f.delCancel).addEventListener("click",()=>ht(!1)),m.getElementById(f.delConfirm).addEventListener("click",Ro);let e=m.getElementById(f.textarea),n=!1;e.addEventListener("compositionstart",()=>{n=!0}),e.addEventListener("compositionend",()=>{n=!1}),e.addEventListener("keydown",a=>{a.key==="Enter"&&!a.shiftKey&&!n&&!a.isComposing&&(a.preventDefault(),k||Gn())}),e.addEventListener("input",St),St()}function an(t,e){let n=M(t);return(e?n:n.replace(/“([^”\n]*?)”/g,'<span class="mz-quote">“$1”</span>').replace(/「([^」\n]*?)」/g,'<span class="mz-quote">「$1」</span>').replace(/&quot;([^\n]*?)&quot;/g,'<span class="mz-quote">&quot;$1&quot;</span>').replace(/\*\*/g,"").replace(/\*([^*\n]+?)\*/g,'<span class="mz-inner">$1</span>')).split(/\n+/).map(o=>o.trim()).filter(Boolean)}function ze(t,e){return an(t,e).map(n=>"<p>"+n+"</p>").join("")}function Wn(t,e){let n=t.children;for(let a=0;a<e.length;a++){let o=a<n.length?n[a]:null;o||(o=m.createElement("p"),t.appendChild(o)),o.innerHTML!==e[a]&&(o.innerHTML=e[a])}for(;n.length>e.length;)t.removeChild(n[n.length-1])}function Uo(t,e){Wn(t,an(e,!0))}function Yt(t,e,n){let a=e==null?"":' data-fold-mid="'+e+'"';return'<div class="mz-thought'+(n?" mz-open":"")+'"'+a+'><button class="mz-th-head" title="推演"><span class="mz-rule mz-l"></span><img src="'+E("incense-coil.webp")+'" alt="推演"><span class="mz-rule mz-r"></span></button><div class="mz-th-body">'+M(t)+"</div></div>"}function Ko(){return'<div class="mz-thinking"><span class="mz-rule mz-l"></span><img src="'+E("incense-coil.webp")+'" alt="推演中"><span class="mz-rule mz-r"></span></div>'}function mr(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qt(t,e){let n=new RegExp(e.source,e.flags.includes("g")?e.flags:e.flags+"g"),a,o=null;for(;a=n.exec(t);)o=a,a[0].length||n.lastIndex++;return o}var hs=["maintext","content","正文","dream_body","game"],zs=new RegExp("(?:^|\\n)[ \\t]*<("+hs.join("|")+")(?:\\s[^<>]*)?>","gi");function ta(t){let e=qt(t,zs);return e?{index:e.index+e[0].indexOf("<"),end:e.index+e[0].length,tag:e[1].toLowerCase()}:null}function bs(t){let e=ta(t);if(!e)return null;let n=new RegExp("(?:^|\\n)[ \\t]*<"+e.tag+"(?:\\s[^<>]*)?>","gi"),a=[],o;for(;o=n.exec(t);)a.push({start:o.index+o[0].indexOf("<"),end:o.index+o[0].length});let r="</"+e.tag+">",i=t.toLowerCase();return a.map((s,c)=>{let l=c+1<a.length?a[c+1].start:t.length,p=i.indexOf(r,s.end);if(p>=0&&p<l)return t.slice(s.end,p).trim();let d=t.slice(s.end,l);return(c+1<a.length?d:d.replace(ea,"")).trim()})}var vs=/<dream_plot(?:\s[^<>]*)?>/i,ws=/(?:^|\n)[ \t]*<!--\s*\d\.\s*正文前的格式\s*-->/g,dr=/(?:^|\n)[ \t]*<!--\s*\d\.\s*正文\s*-->/g,ys=/(?:^|\n)[ \t]*<!--\s*\d\.\s*正文后的格式\s*-->/;function Qs(t){let e=qt(t,dr),n=qt(e?t.slice(0,e.index):t,ws);return n?n.index:e?e.index:-1}var ks=/<\|im_start\|>\s*gemini[^\n]*\n?[\s\S]*?(?:<\|im_end\|>|$)/gi,Es=/<\|im_start\|>[^\n]*|<\|(?:im_end|pad|pad_end)\|>|<-(?:begin|end)-response->/gi;function Ss(t){return t.indexOf("<|")<0&&t.indexOf("<-")<0?t:t.replace(ks,"").replace(Es,"")}var Ls=["thinking","think","cot","reasoning","meow","think_nya~","konatan_planning~","draft_notes","draft","preparation"],fr=Ls.map(mr).join("|"),na="<(?:"+fr+")(?:\\s[^<>]*)?>",aa="</(?:"+fr+")\\s*>",_s=new RegExp(na+"([\\s\\S]*?)"+aa,"gi"),Ts=new RegExp(na+"([\\s\\S]*)$","i"),Ms=new RegExp("(?:"+aa+"|<!--\\s*(?:end_of_梳理|1·思考结束|end_of_Subtext_think)\\s*-->|<｜end▁of▁thinking｜>|前尘已定，梦境将演。|(?:好的[，,]\\s*)?我将进行符合需求的创作：|#{1,6}[ \\t]*正式创作|#{1,6}[ \\t]*正文[ \\t]*(?=\\r?\\n|$))","i"),gr=new Set(["我think完了。","Thought budget exceeded."]),ur=/^\s*(?:\[(?:metacognition|love_qkll)\]|<｜begin▁of▁thinking｜>|吾有一梦，今方始筑：?)/i,Is=/^\s*<基础确认>/i;function As(t){return t.replace(ur,"").replace(new RegExp(na+"|"+aa,"gi"),"").replace(/<!--[\s\S]*?-->/g,"").replace(/<\/[^<>\n]{1,40}>/g,"").replace(/<([^<>\n]{1,40})>/g,"$1").trim()}function oa(t,e){let n=Ss(String(t)).replace(/<draft_notes>\s*<draft>/gi,"<draft_notes>").replace(/<\/draft>\s*<\/draft_notes>/gi,"</draft_notes>"),a=[],o=Qs(n);if(o>=0)return{thoughts:n.slice(0,o).trim()?[n.slice(0,o)]:[],rest:n.slice(o),closed:!0};let r=()=>{let d=ta(n);return d?d.index:-1};if(Is.test(n)){let d=r();if(d>0)return{thoughts:[n.slice(0,d)],rest:n.slice(d),closed:!0};if(e)return{thoughts:[n],rest:"",closed:!1}}let i=!1;n=n.replace(_s,(d,g)=>(a.push(g),gr.has(g.trim())||(i=!0),""));let s=n.match(Ts);if(s){let d=ta(s[1]);d?(a.push(s[1].slice(0,d.index)),n=n.slice(0,s.index)+s[1].slice(d.index)):(a.push(s[1]),n=n.slice(0,s.index))}if(a.length)return{thoughts:a,rest:n,closed:i};let c=r(),l=n.match(Ms);if(l&&(c<0||l.index<c))return{thoughts:[n.slice(0,l.index)],rest:n.slice(l.index+l[0].length),closed:!0};let p=n.match(vs);return p&&(c<0||p.index<c)?{thoughts:[n.slice(0,p.index)],rest:n.slice(p.index+p[0].length),closed:!0}:ur.test(n)&&c>0?{thoughts:[n.slice(0,c)],rest:n.slice(c),closed:!0}:e&&c<0&&n.trim()?{thoughts:[n],rest:"",closed:!1}:{thoughts:a,rest:n,closed:!1}}function be(t,e){return t?oa(t,e).thoughts.map(As).filter(n=>n&&!gr.has(n)).join(`

`):""}var Cs=["details","summary","tucao","danmu","konatan_chat","progress","current_event","advice","htmlcontent","guifan","done","disclaimer","Reference_Example","w2g","VariableCheck","memo","choice","safe","theater","recap","background","parallel_world","meow_FM","time_format","aftertalk","Shiosai","snow","quote","math","finish","WF","style","script","scene","image","imgthink","options","branches","SUOT","UpdateVariable","状态面板","角色状态面板","dream_scene","dream_option","dream_after_format","dream_parallel_event","simple_thinking","dream_summary","dream_discuss","dream_big_discuss","dream_after_thinking","original","analysis","safety_check","SexualScene"],Os=new RegExp("<("+Cs.map(mr).join("|")+")(?:\\s[^<>]*)?>[\\s\\S]*?(?:<\\/\\1\\s*>[ \\t]*\\r?\\n?|$)","gi"),xr=/<\/?[A-Za-z_一-鿿][\w\-~:.一-鿿]*(?:\s[^<>]*)?\/?>/g,ea=/<(options|branches|choice|dream_option|w2g|SUOT|dream_after_format|UpdateVariable)(?:\s[^<>]*)?>(?:(?!<\/\1)[\s\S])*$|<!--(?:(?!-->)[\s\S])*$|<\/?[^<>\s]*$/i,js=/<details(?:\s[^<>]*)?>\s*<summary(?:\s[^<>]*)?>\s*内心\s*[-－—–:：]\s*([^<>\n]*?)\s*<\/summary\s*>([\s\S]*?)<\/details\s*>[ \t]*\r?\n?/gi;function Hs(t){return t.replace(js,(e,n,a)=>a.split(/\r?\n/).map(o=>o.trim()).filter(Boolean).map(o=>"*"+n+"："+o+"*").join(`
`)+`
`).replace(/<htm1fenge(?:\s[^<>]*)?>([\s\S]*?)(?:<\/htm1fenge\s*>|$)/gi,(e,n)=>{let a=n.match(/<span[^<>]*display:\s*none[^<>]*>([\s\S]*?)<\/span>/i);return a?a[1].trim():""}).replace(Os,"").replace(/<Q>[\s\S]*?(?:<\/WF>|$)/gi,"").replace(/<!--[\s\S]*?-->/g,"").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1").replace(/<br\s*\/?>|<\/paragraph\s*>/gi,`
`).replace(xr,"").replace(/^[ \t]*#{1,6}[ \t]*正文[ \t]*(?:\r?\n|$)/gm,"").replace(/^[ \t]*#{1,6}[ \t]+(?=\S)/gm,"").replace(/([」』])\{([^{}\n]+)\}/g,(e,n,a)=>"（"+a+"）"+n).replace(/^.*[぀-ヿ].*\{[^{}\n]+\}.*$/gm,e=>e.replace(/\{([^{}\n]+)\}/g,"（$1）")).replace(/^([ \t]*「)([^」\n]*[぀-ヿ][^」\n]*)」[ \t]*\r?\n[ \t]*「([^」\n]+)」[ \t]*(?=\r?\n|$)/gm,"$1$2（$3）」").replace(/^[ \t]*>[ \t]*凝嘤嘤[：:].*(?:\r?\n|$)/gm,"").replace(/^[ \t]*现在开始我的konatan_planning思考。[ \t]*(?:\r?\n|$)/gm,"").replace(/《end》/g,"").replace(/\n{3,}/g,`

`)}function Jn(t,e){return Yn(Hs(t),e).trim()}function tn(t,e,n){if(!t||/^\s*(?:<StatusPlaceHolderImpl\s*\/?>\s*)*【开场介绍】/.test(t))return"";let a=oa(t,e),o=a.rest,r=bs(o);if(r)return Jn(r.join(`

`),n);let i=qt(o,dr);if(i){let s=o.slice(i.index+i[0].length),c=s.search(ys);return s=c>=0?s.slice(0,c):s.replace(ea,""),Jn(s,n)}return e&&!a.closed?"":Jn(e?o.replace(ea,""):o,n)}var on="按照advice继续吧。",hr=/<advice\b[^>]*>((?:(?!<advice\b|<\/(?:konatan_planning(?:~[^>]*)?|details|script|think(?:ing)?)\s*>)[\s\S])*?)<\/advice\s*>/gi;function Qe(t){return!!t&&t.role==="user"&&String(t.message).trim()===on}function zr(t){let e=t&&t.extra,n=e&&(e.izumi_advice||e.extra&&e.extra.izumi_advice);return n&&typeof n.text=="string"?n:null}function br(t){for(let e=t-1;e>=0&&e>=t-5;e--){let n=getChatMessages(e)[0];if(n&&n.role!=="user")return n}return null}function Jt(t,e){if(!Qe(t))return String(t.message);let n=zr(t);if(n)return n.text;let a=e===void 0?br(t.message_id):e,o=a&&a.role!=="user"?qt(String(a.message),hr):null;return o?o[1].trim():String(t.message)}function Wo(t,e){let n=br(t.message_id);if(!n)return[{message_id:t.message_id,message:e}];let a=String(n.message),o=qt(a,hr),r="<advice>"+e+"</advice>",i=o?a.slice(0,o.index)+r+a.slice(o.index+o[0].length):a.replace(/\s*$/,"")+`
`+r,s=zr(t),c=Object.assign({},t.extra||{},{izumi_advice:{version:1,text:e,assistantId:n.message_id,revision:(s&&s.revision||0)+1}});return[{message_id:n.message_id,message:i},{message_id:t.message_id,message:on,extra:c}]}var Rs=["options","choice","branches","dream_option","w2g","SUOT"],Ns=/^\s*>?\s*(?:\d+\s*[.、):：]|[A-Za-z]\s*[.、):：]|[-*•]|选项[一二三四五六七八九十\d]+\s*[：:]|[①②③④⑤⑥⑦⑧])?\s*(?:[[【][^\]】\n]{1,12}[\]】])?\s*/;function ir(t,e){if(!t)return[];let n=oa(t,!1).rest,a=null;for(let r of Rs){let i=qt(n,new RegExp("<"+r+"(?:\\s[^<>]*)?>","i"));if(!i)continue;let s=n.slice(i.index+i[0].length),c=s.toLowerCase().indexOf("</"+r.toLowerCase()+">");if(c>=0){a=s.slice(0,c);break}}return a==null?[]:Yn(a,e).replace(/<summary(?:\s[^<>]*)?>[\s\S]*?<\/summary\s*>/gi,"").replace(/<\/option\s*>/gi,`
`).replace(xr,"").split(/\n|\|/).map(r=>r.replace(Ns,"").trim()).filter(Boolean).slice(0,10)}var ot=M,ia=t=>String(t||"").split("/")[0].trim(),Bs=t=>String(t||"").split("/").slice(1).map(e=>e.trim()).filter(Boolean).join(" "),yr=(t,e)=>Object.values(t).filter(n=>n&&n.类别===e).length,bt=t=>Object.entries(t.道场.地宫设施).map(([e,n])=>({名:e,用途:String((n||{}).用途||""),档次:rt.includes((n||{}).档次)?(n||{}).档次:"粗成",奇效:String((n||{}).奇效||""),层:String((n||{}).层||"")})),sa=(t,e)=>bt(t).some(n=>e.words.some(a=>n.名.includes(a)||n.用途.includes(a))),la=t=>Object.entries(t.财务.暗账).filter(([,e])=>e&&e.类别==="债契"),ca=t=>Object.entries(t.财务.暗账).filter(([,e])=>e&&e.类别!=="债契"),pa=t=>Object.entries(t.教务.法事委托).filter(([,e])=>e&&e.状态!=="已完成"),Qr=t=>{let e=Ut(t.时空.时间);return!!e.月标&&t.教务.上次法会.trim()===e.月标},kr=t=>{let e=bt(t).find(n=>n.名.includes("库房"));return e?In[e.档次]?e.档次:"粗成":"无"},sn=t=>In[kr(t)],ae=(t,e)=>t.系统.已解锁.includes("同心缕:"+e)||!!t.核心女主[e].心声;function ge(t,e){let n=t.系统.已解锁;return e==="营造"||n.includes(e)?!0:An[e]?t.教务.信众>=An[e]:e==="库藏"?kr(t)!=="无":e==="同心缕"?B.some(a=>ae(t,a)):!1}var qs=t=>x(Math.floor(Math.max(0,t)/1e3))+"贯",Ps=t=>t>1e4?qs(t):U(t);function Er(t){let e=Ut(t.时空.时间),n=W(t);return{日期:e.年序号>=0?ot(e.月名||"")+ot(e.日文):ot(t.时空.时间.replace(/\//g," ")),时辰:ot(e.时辰),题:ot(t.时空.时间.replace(/\//g," ")),铜钱:{k:Qt(t)?"绢帛":"铜钱",v:Ps(n),stat:"铜钱"},信众:{k:"信众",v:x(t.教务.信众)+"人",stat:"信众"},大势:(()=>{let a=qe(t,e);return{k:a.k,v:ot(a.v),cls:a.cls}})()}}var vr=t=>'<span class="mz-tb-i"'+(t.stat?' data-stat="'+t.stat+'"':"")+"><span>"+t.k+"</span><b"+(t.cls?' class="'+t.cls+'"':"")+">"+t.v+"</b></span>";function $s(){try{let t=getChatMessages(0)[0];return C()>0&&!!t&&It(t.message)}catch{return!1}}function Fs(t){if(t._empty)return'<span class="mz-tb-time mz-dim">'+($s()?"第零楼仍是入口面板，未选开场白，请删至第零楼再入卷":"此则无账目")+"</span>";let e=Er(t);return'<span class="mz-tb-time" data-stat="时间" title="'+e.题+'"><span>时辰</span><b>'+e.日期+" "+e.时辰+'</b></span><span class="mz-tb-set">'+vr(e.铜钱)+vr(e.信众)+"</span>"}var wr=(t,e,n)=>'<div class="mz-sr-row'+(n?" "+n:"")+'"'+(t.stat?' data-stat="'+t.stat+'"':"")+(e?' title="'+e+'"':"")+"><span>"+t.k+"</span><b"+(t.cls?' class="'+t.cls+'"':"")+">"+t.v+"</b></div>";function Gs(t){if(t._empty)return'<div class="mz-sr-row"><b class="mz-dim">此则无账目</b></div>';let e=Er(t),n=t.时空.当前地界,a=ia(n),o=Bs(n),i=(Qt(t)?"蕃地 ":a&&!pe.includes(a)?"城外 ":"")+ot(a)+(o?'<i class="mz-loc-sub">'+ot(o)+"</i>":"");return wr({k:"地界",v:i,stat:"地界"},ot(n.replace(/\//g," ")))+wr(e.大势)}var Vs=t=>String(t||"").split("·")[0];function Zs(t,e){if(!ge(e,t))return Ya[t];switch(t){case"同心缕":{let n=B.filter(o=>ae(e,o)),a=n.reduce((o,r)=>Math.max(o,yt(e.核心女主[r].灌顶位阶)),0);return x(n.length)+"人在册 最高"+ot(Vs(Ne[a]))}case"库藏":return"存"+x(Object.keys(e.财务.库藏).length)+"件 共"+x(sn(e))+"屉";case"教务":return"执事"+x(Object.keys(e.执事名册).length)+"人 明妃"+x(Object.keys(e.明妃录).length)+"位";case"营造":return"正殿"+ot(e.道场.正殿等级)+" 地宫"+x(bt(e).length)+"处";case"法事":return"委托"+x(pa(e).length)+"单";case"暗账":return"把柄"+x(ca(e).length)+"条 债契"+x(la(e).length)+"契"}return""}function Us(t){let e=m.getElementById(f.minimap);if(!e)return;let{mode:n,src:a,pin:o}=Wa(t),r=e.querySelector(".mz-map-wrap img");r&&r.dataset.mode!==n&&(r.dataset.mode=n,r.src=E(a));let i=e.querySelector(".mz-map-pin");i&&(i.style.display=o?"":"none",o&&(i.style.left=o[1]+"%",i.style.top=o[2]+"%",i.dataset.label=o[0]))}function ln(){let t=He("letter:"+Re(),"");if(!t.startsWith("accepted"))return!1;let e=Number(t.split("#")[1]);if(!Number.isInteger(e))return!0;try{let n=getChatMessages(e)[0];return!!n&&n.role==="user"&&Jt(n).includes(Ve)}catch{return!0}}var rn=t=>!t._empty&&de(t)&&!ln(),Ks=t=>Qt(t)||de(t)&&ln(),Sr=!1;function ma(t){Sr=t}var ra=!1,Lr=()=>ra;function da(t){if(Sr)return;let e=Ks(t),n=m.getElementById(T);n&&n.classList.toggle("mz-xue",e);let a=m.getElementById(f.entry);if(a&&a.classList.toggle("mz-xue",e),e!==ra){ra=e;try{window.parent.__MZ_XUE=e,window.parent.dispatchEvent(new CustomEvent("mz-theme",{detail:e}))}catch(o){y("theme:parent",o)}}}function j(t,e){let n=e||L();da(n);let a=m.getElementById(f.topbar);a&&(a.innerHTML=Fs(n));let o=m.getElementById(f.doom);o&&(o.innerHTML=Gs(n)),ue.forEach(r=>{let i=m.querySelector("#"+T+' .mz-nav-item[data-zone="'+r.key+'"]');if(!i)return;let s=ge(n,r.key);i.classList.toggle("mz-locked",!s),i.querySelector(".mz-nav-sub").innerHTML=Zs(r.key,n),i.querySelector(".mz-nav-lock").innerHTML=s?"":O.lock}),Us(n),Pt()&&it(n)}function _r(t){let e=m.getElementById(f.textarea);e&&(e.value=t,St(),nt(),e.focus())}var fa=!1;async function oe({tag:t,mutate:e,message:n,check:a,fail:o,onSent:r}){let i=s=>(o?o(s):S(s),!1);if(fa)return i("账房正在记档，稍待");if(k)return i("续写未毕，稍待再拨");if(I)return i("正在删记，了结再拨");if(Q)return i("改写未了，先存或弃");fa=!0;try{return await Ws({tag:t,mutate:e,message:n,check:a,onSent:r},i)}finally{fa=!1}}async function Ws({tag:t,mutate:e,message:n,check:a,onSent:o},r){let i=C();if(i==null||i<0)return r("卷上尚无记录，无从记账");let s=null;try{s=getVariables({type:"message",message_id:i})}catch(u){y("commit:get",u)}if(!s||!s.stat_data)return r("账目未读到，稍后再试");let c=_.cloneDeep(_.omit(s.stat_data,["$internal"])),l=_.cloneDeep(c);if(a){let u=a(L(l),l);if(u)return r(u)}if(e(l),Number(l.财务&&l.财务.铜钱)<0)return r("铜钱不足");let p=Math.max(0,Math.round((Number(_.get(c,"财务.铜钱"))||0)-(Number(_.get(l,"财务.铜钱"))||0)));_.set(l,"系统.扣款记录",(t||"代发")+"#"+p+"#"+Date.now());let d=Xs(c,l);if(!d)return r("名目里不可含「/」「~」");nt();let g=typeof n=="function"?n(p):n;return we(g+`
`+Ds(d),{carryStat:l,onSent:o})}function Ds(t){return`<UpdateVariable>
<JSONPatch>
`+JSON.stringify(t)+`
</JSONPatch>
</UpdateVariable>`}function Xs(t,e){let n=[],a=!1,o=(r,i,s)=>{let c=new Set([...Object.keys(r||{}),...Object.keys(i||{})]);for(let l of c){if(/[/~]/.test(l)){a=!0;return}let p=s+"/"+l,d=r?r[l]:void 0,g=i?i[l]:void 0;_.isEqual(d,g)||(g===void 0?n.push({op:"remove",path:p}):d===void 0?n.push({op:"insert",path:p,value:g}):_.isPlainObject(d)&&_.isPlainObject(g)?o(d,g,p):typeof d=="number"&&typeof g=="number"?n.push({op:"delta",path:p,value:g-d}):n.push({op:"replace",path:p,value:g}))}};return o(t,e,""),a?null:n}var z=M,pn=t=>'<div class="mz-card">'+t+"</div>",ha=()=>'<div class="mz-card mz-empty"><span>虚位</span></div>',F=(t,e)=>'<span class="mz-k">'+t+"</span>"+z(e),Me=(t,e,n)=>{let a=dn(t,e[0].id);return'<div class="mz-tabs">'+e.map(o=>"<button"+(a===o.id?' class="mz-on"':"")+' data-pane="'+o.id+'">'+o.label+(o.n!=null?'<span class="mz-n">'+o.n+"</span>":"")+(o.red?'<span class="mz-red"></span>':"")+"</button>").join("")+(n?'<span class="mz-why" style="margin-left:auto;align-self:center">'+n+"</span>":"")+"</div>"},Ys=t=>Ge(t)==="逻些"?"长安的人手与家业俱在，归时如旧":t.吐蕃之行.进藏行程==="已回长安"?"逻些的人手与家业俱在，再去如旧":"",Ie=(t,e)=>[e,Ys(t)].filter(Boolean).join("　"),Z=(t,e,n,a)=>'<div class="mz-pane'+(dn(t,a)===e?" mz-on":"")+'" data-pane="'+e+'">'+n+"</div>",_e=t=>'<div class="mz-rite-pic mz-page-pic"><img src="'+E(no[t])+'" alt=""></div>',lt=(t,e)=>'<div class="mz-wh">'+t+(e?" <b>"+e+"</b>":"")+"</div>",_t=(t,e,n,a,o)=>'<button class="mz-seal-btn'+(o||"")+'"'+(e?' data-act="'+e+'"':"")+(n?"":" disabled")+">"+t+"</button>"+(!n&&a?'<span class="mz-why">'+a+"</span>":""),se=(t,e)=>{let n=e*1e3-W(t);return n>0?"铜钱不足，差"+U(n):""},za=(t,e)=>e==="精工"&&!Object.keys(t.执事名册).length?"须执事带工":e==="天工"&&t.教务.信众<50?"须信众五十人":"",Ft=t=>En(t)?["远行途中"]:[],Cr=t=>{let e=P(t),n=Ft(t);t.道场.正殿等级!==e.三阶[0]&&n.push("正殿已改建");let a=se(t,e.价[e.三阶[1]]);return a&&n.push(a),n},Or=(t,e,n,a)=>{let o=Ft(t),r=bt(t).find(c=>c.名===e);r?r.档次!==n&&o.push("此屋已改建"):o.push("此屋已不在");let i=za(t,a);i&&o.push(i);let s=se(t,Pe[a]);return s&&o.push(s),o},ua=(t,e)=>{let n=Ft(t),a=za(t,e);a&&n.push(a);let o=se(t,me[e]);return o&&n.push(o),n},jr=(t,e)=>e&&!Mn(t).includes(e)?["先开凿"+e]:[],Hr=(t,e)=>{let n=Ft(t),a=za(t,e==="地下二层"?"精工":"天工");a&&n.push(a);let o=se(t,$e[e]);return o&&n.push(o),n},Rr=(t,e)=>{let n=Ft(t);sa(t,e)||n.push("须先营造"+P(t).作坊[e.kind]);let a=se(t,e.price);return a&&n.push(a),n},Nr=t=>Object.keys(t.财务.库藏).length>=sn(t)?["屉已满"]:[],Js=(t,e)=>Nr(t).concat(Rr(t,e)),Br=(t,e,n)=>{let a=P(t),o=Ft(t);a.三阶.indexOf(t.道场.正殿等级)>=1||bt(t).some(s=>s.名.includes(a.贷.词)&&s.档次!=="粗成")||o.push("须正殿升"+a.三阶[1]+"，或"+a.贷.名+"达精工"),Object.keys(t.财务.暗账).length>=Mt.暗账&&o.push("簿已满"),n&&t.财务.暗账[n]&&o.push("「"+n+"」已在簿中，另立名目");let i=e>0?se(t,e):"";return i&&o.push(i),o},tt=[],$t=[];function mn(t,e,n){let a=_.cloneDeep(t||Ze()||{}),o=[];return(n?e.concat([n]):e).forEach(r=>{o.push(...r.whys(L(a))),r.mutate(a)}),[...new Set(o)]}var qr=t=>t.reduce((e,n)=>e+n.价,0),Pr=t=>/[/~]/.test(t)?["名目里不可含「/」「~」"]:[];function tl(t,e,n,a,o="地下一层"){return{名:t,副:n,价:me[n],项:t+"（"+n+"，"+o+(a?"，奇效："+a:"")+"）",单句:r=>gt.兴造(t,n,a,r,o),whys:r=>Pr(t).concat(n==="天工"&&!a?["先议定奇效"]:[],ua(r,n),jr(r,o),r.道场.地宫设施[t]?["「"+t+"」已在地宫，另拟名目"]:[]),mutate:r=>{r.财务.铜钱-=me[n],r.道场.地宫设施=r.道场.地宫设施||{},r.道场.地宫设施[t]=Object.assign({用途:e||"",档次:n,层:o},a?{奇效:a}:{})}}}function el(t,e,n){return{名:t,副:n.kind,价:n.price,项:n.kind+"「"+t+"」",单句:a=>gt.工巧(t,n.kind,a),whys:a=>Pr(t).concat(Js(a,n),a.财务.库藏[t]?["「"+t+"」已在库藏，另拟物名"]:[]),mutate:a=>{a.财务.铜钱-=n.price,a.财务.库藏=a.财务.库藏||{},a.财务.库藏[t]={类别:n.kind,效用:e||""}}}}function nl(t,e){if(!e.length)return"";let n=e.map((o,r)=>'<div class="mz-bk-row"><b>'+z(o.名)+'</b><span class="mz-tag">'+z(o.副)+'</span><span class="mz-price">'+x(o.价)+'贯</span><button type="button" class="mz-bk-x" data-drop="'+t+":"+r+'">撤下</button></div>').join(""),a=mn(null,e);return'<div class="mz-basket">'+lt("待呈",x(e.length)+"事 共"+x(qr(e))+"贯")+n+'<div class="mz-build-foot">'+_t("呈报",t+"-send",!a.length,a.join(" ")," mz-lg")+"</div></div>"}function Tr(t,e){let n=e==="build"?tt:$t;if(!n.length)return;let a=n.slice();oe({tag:e==="build"?"兴造":"工巧",check:(o,r)=>mn(r,a).join(" "),mutate:o=>a.forEach(r=>r.mutate(o)),message:o=>a.length===1?a[0].单句(o):gt[e==="build"?"兴造多":"工巧多"](a.map(r=>r.项),o),fail:o=>A(t,o),onSent:()=>{e==="build"?(tt=tt.filter(o=>!a.includes(o)),ct=null):$t=$t.filter(o=>!a.includes(o)),Lt()}}).catch(o=>A(t,"出错: "+(o&&o.message||o)))}function Mr(t,e,n){let a=e==="build"?tt:$t;if(a.some(r=>r.名===n.名)){A(t,"篮中已有同名，换个"+(e==="build"?"名目":"物名"));return}let o=mn(null,a,n);if(o.length){A(t,(a.length?"连同篮中已记，":"")+o.join(" "));return}a.push(n),e==="build"?(ct=null,Te(ba,["名称","用途","档次","奇效","层"])):Te(Zr,["物名","效用"]),Lt()}var $r=t=>{let e=qe(t,Ut(t.时空.时间));return'<div class="mz-doomline"><span'+(e.cls?' class="'+e.cls+'"':"")+">"+e.k+" "+z(e.v)+"</span></div>"};function Ir(t,e,n,a,o,r,i,s,c){let l=!!s&&!a.includes(s);return'<section class="mz-win mz-atlas-win mz-on"><div class="mz-atlas"><div class="mz-mapbox"><img src="'+E(e)+'" alt="'+n+'"><svg viewBox="0 0 1024 1024" preserveAspectRatio="none">'+a.map(p=>'<path data-zone="'+p+'"'+(p===s?' class="mz-cur"':"")+' d="'+o[p]+'"><title>'+p+"</title></path>").join("")+"</svg>"+a.map(p=>{let d=r[p];return'<span class="mz-lbl'+(p===s?" mz-cur":"")+(c&&p===c.zone?" mz-mark":"")+'" style="left:'+d[1]+"%;top:"+d[2]+'%">'+d[0]+"</span>"}).join("")+(l?'<div class="mz-abroad-mark"><b>城外</b>'+z(s)+"</div>":"")+'</div><div class="mz-zones">'+lt(i)+'<ul class="mz-zlist">'+a.map(p=>"<li"+(p===s?' class="mz-cur"':"")+"><span>"+p+(c&&p===c.zone?'<i class="mz-zmark"></i>':"")+"</span><small>"+(p===s?"此刻在此":"")+"</small></li>").join("")+'<li class="mz-abroad'+(l?" mz-cur":"")+'"><span>城外</span><small>'+(l?z(s):"")+"</small></li></ul>"+(c?'<div class="mz-atlas-note">'+c.text+"</div>":"")+$r(t)+"</div></div></section>"}function al(t,e){let n=Be.indexOf(e),a=i=>n<0?"mz-todo":i<n?"mz-past":i===n?"mz-cur":"mz-todo",o=i=>n<0?"":i<n?"已过":i===n?"此刻在此":"未至",r=!!e&&n<0;return'<section class="mz-win mz-atlas-win mz-on"><div class="mz-atlas mz-atlas-road"><div class="mz-roadbox"><div class="mz-mapbox mz-road"><img src="'+E("map-road.webp")+'" alt="唐蕃古道驿路">'+Be.map((i,s)=>{let c=Ln[i];return'<i class="mz-stop '+a(s)+'" data-stop="'+i+'" style="left:'+c[0]+"%;top:"+c[1]+'%"><span>'+i+"</span></i>"}).join("")+(r?'<div class="mz-abroad-mark"><b>驿路之外</b>'+z(e)+"</div>":"")+'</div></div><div class="mz-zones">'+lt("唐蕃古道八站")+'<ul class="mz-zlist mz-zlist-road">'+Be.map((i,s)=>'<li class="'+a(s)+'"><span>'+i+"<em>"+Ga[i]+"</em></span><small>"+o(s)+"</small></li>").join("")+'<li class="mz-abroad'+(r?" mz-cur":"")+'"><span>驿路之外</span><small>'+(r?z(e):"")+"</small></li></ul>"+$r(t)+"</div></div></section>"}function ol(t){let e=ia(t.时空.当前地界),n=Sn(t);if(n==="road")return al(t,e);if(n==="lhasa"){let a=t.吐蕃之行.赞普遇刺?{zone:"红山王宫",text:"赞普遇刺，两系争立"}:null;return Ir(t,"map-lhasa.webp","逻些城内图",Fa,Va,Za,"逻些五区",e,a)}return Ir(t,"map-changan.webp","长安城坊地图",pe,Ua,Ka,"长安十区",e,null)}var V=B[0];function Dn(t){B.includes(t)&&(V=t)}function Fr(t,e){let n=He("bond:"+t,"");return n&&kn(t,e).find(a=>a[0]===n)||$a(t,e)}function cr(t,e){let n=Fr(t,e.核心女主[t].灌顶位阶);return n?n[1]:""}function rl(t){let e=Object.entries(t).reverse();return e.length?'<div class="mz-timeline">'+e.map(([n,a])=>{let o=String(a||"").split("/"),r=o.length>1?o[0].trim():"",i=o.length>1?o.slice(1).join("/").trim():String(a||"").trim();return'<div class="mz-memo"><b>'+z(n)+"</b>"+(r?"<small>"+z(r)+"</small>":"")+"<br>"+z(i)+"</div>"}).join("")+"</div>":'<div class="mz-none">尚无回想</div>'}function il(t){let e=t.吐蕃之行.进藏行程==="已回长安"?"已归长安":de(t)?ln()?"已应允":"尚未答复":"已启程";return'<button class="mz-letter-row" data-letter="open"><img src="'+E("letter-envelope.webp")+'" alt=""><b>进藏书信</b><span>央金手书</span><small>'+e+"</small></button>"}function sl(t,e){if(!Qt(t))return"";let n=e==="赤玛央金"?"领路进藏":String(t.吐蕃之行.随行[e]||"").trim();return n?'<div class="mz-escort-line mz-with"><b>随行</b><span>'+z(n.replace(/\//g," "))+"</span></div>":'<div class="mz-escort-line"><b>留守长安</b><span>'+(t.吐蕃之行.进藏行程==="在途"?"远行途中，音信不通":"道场封存，待归再续")+"</span></div>"}function ll(t,e,n,a){return'<div class="mz-gallery">'+n.map(o=>'<button class="mz-cell'+(a&&o[0]===a[0]?" mz-on":"")+(o[1]?"":" mz-blank")+'" data-theme="'+z(o[0])+'" title="'+z(o[0])+'"><i'+(o[1]?` style="background-image:url('`+z(o[1])+`')"`:"")+"></i><span>"+z(o[0])+"</span></button>").join("")+Pa(t,e).map(o=>'<button class="mz-cell mz-lock" disabled title="'+z(o)+'解锁"><i></i><span>'+z(o)+"</span></button>").join("")+"</div>"}function cl(t){ae(t,V)||(V=B.find(c=>ae(t,c))||V);let e=t.核心女主[V],n=e.灌顶位阶,a=kn(V,n),o=Fr(V,n),r=yt(n),i=Object.keys(e.回想).length,s=dn("同心缕","voice");return'<section class="mz-win mz-bond-win mz-on '+ce[V]+'"><div class="mz-tabs mz-names">'+B.map(c=>ae(t,c)?"<button"+(c===V?' class="mz-on"':"")+' data-bond="'+c+'">'+c+'<span class="mz-n">'+z(t.核心女主[c].灌顶位阶)+"</span></button>":'<button class="mz-off" disabled>'+qa[c]+'<span class="mz-n">未识</span></button>').join("")+'</div><div class="mz-wrow"><div class="mz-portrait"><div class="mz-pic">'+(o&&o[1]?'<img src="'+z(o[1])+'" alt="'+z(o[0])+'">':"<span>立绘待补</span>")+'</div></div><div class="mz-wcol" style="flex:1"><div class="mz-lotus-row">'+[1,2,3,4].map(c=>"<i"+(c<=r?' class="mz-lit"':"")+"></i>").join("")+"<span>灌顶位阶</span><b>"+z(n)+"</b></div>"+sl(t,V)+(V==="赤玛央金"&&(t.吐蕃之行.来信===!0||t.吐蕃之行.进藏行程!=="未出发")?il(t):"")+'<div class="mz-tabs mz-tabs-sub"><button'+(s==="voice"?' class="mz-on"':"")+' data-pane="voice">心声</button><button'+(s==="memoir"?' class="mz-on"':"")+' data-pane="memoir">回想'+(i?'<span class="mz-n">'+x(i)+"则</span>":"")+"</button><button"+(s==="gallery"?' class="mz-on"':"")+' data-pane="gallery">立绘<span class="mz-n">'+x(a.length)+"幅</span></button></div>"+Z("同心缕","voice",e.心声?'<div class="mz-voice-sheet '+ce[V]+'">'+z(e.心声)+"</div>":'<div class="mz-none">尚无心声</div>',"voice")+Z("同心缕","memoir",rl(e.回想),"voice")+Z("同心缕","gallery",ll(V,n,a,o),"voice")+"</div></div></section>"}var ie=null,ct=null,re="自拟";function Gr(){ie=null,ct=null}function pl(t){ct=ct===t?null:t,Te(ba,["层","名称","用途","档次","奇效"])}function ml(t){ie=t,Te(Vr,["奇效"])}var ba="mz-form mz-sheet mz-detail mz-build",Vr="mz-form mz-sheet mz-detail mz-upform",Zr="mz-form mz-sheet mz-craft",Ur="入浴者心防天然松动，灌顶事半功倍",Kr=(t,e)=>P(t).蓝图.some(n=>n.名===e),xa=t=>'<div class="mz-fac-pic"><img src="'+E(t)+'" alt=""></div>',Wr=t=>'<span class="mz-tag '+(Xa[t]||"mz-q1")+'">'+z(t)+"</span>";function dl(t){let e=t.道场.正殿等级,n=bt(t),a=P(t).蓝图.filter(o=>!n.some(r=>r.名===o.名)).length;return'<section class="mz-win mz-on">'+Me("营造",[{id:"hall",label:"正殿",n:e},{id:"cave",label:"地宫",n:dt[Zt(t)]+" "+x(n.length)+"处"},{id:"build",label:"兴造",n:tt.length?"待呈"+x(tt.length)+"事":x(a)+"座未建"}],Ie(t))+Z("营造","hall",fl(t,e),"hall")+Z("营造","cave",gl(t,n),"hall")+Z("营造","build",ul(t,n),"hall")+"</section>"}function fl(t,e){let n=P(t),a=Math.max(0,n.三阶.indexOf(e));return'<div class="mz-folio mz-fill"><div class="mz-halls">'+n.三阶.map((r,i)=>{let s="";if(i>a){let c="<small>"+x(n.价[r])+"贯"+(i===2?"　"+n.顶阶条件:"")+"</small>",l=i===1?Cr(t):[],p=i!==a+1?"":i===1?_t("升 "+r,"hall",!l.length,l.join(" ")):'<span class="mz-why">须教主亲身周旋</span>';s='<div class="mz-hall-act">'+c+p+"</div>"}return'<div class="mz-hall'+(i<a?" mz-done":i===a?" mz-cur":"")+'"><div class="mz-hall-pic"><img src="'+E(n.殿图[r])+'" alt="'+r+'"></div><div class="mz-hall-top"><b>'+r+"</b>"+(i===2&&t.道场[n.凭据]?'<span class="mz-chi">'+n.敕字+"</span>":"")+'<span class="mz-tag">'+(i<a?"已成":i===a?"当下":"未出发")+"</span></div><p>"+n.看[r]+'</p><div class="mz-hall-gain">'+F("香火",n.得[r][0])+"<br>"+F("客源",n.得[r][1])+"<br>"+n.得[r][2]+"</div>"+(s||'<div class="mz-hall-act"></div>')+"</div>"}).join("")+"</div></div>"}function gl(t,e){let n=ie&&e.find(c=>c.名===ie);if(n)return'<div class="mz-folio">'+zl(t,n)+"</div>";let a=P(t),o=Zt(t),r=a.蓝图.map(c=>e.find(l=>l.名===c.名)).filter(Boolean).concat(e.filter(c=>!Kr(t,c.名))),i=c=>'<div class="mz-card mz-fac mz-link" data-fac="'+z(c.名)+'">'+xa(a.设施图[c.名]||a.自拟图[c.档次]||a.自拟图.粗成)+'<div class="mz-fac-top"><b>'+z(c.名)+"</b>"+Wr(c.档次)+"</div></div>";return'<div class="mz-folio"><div class="mz-cave-sect">'+dt.map((c,l)=>{let p='<div class="mz-stratum-name">'+c+"</div>";if(l<=o){let u=r.filter(b=>Fe(t,b)===c).map(i).join("")||'<div class="mz-card mz-empty">虚位</div>';return'<div class="mz-stratum mz-l'+l+'">'+p+'<div class="mz-grid mz-c4 mz-cave-grid">'+u+"</div></div>"}let d=l===o+1?Hr(t,c):null,g=r.filter(u=>Fe(t,u)===c).map(i).join("");return'<div class="mz-stratum mz-undug mz-l'+l+'">'+p+(g?'<div class="mz-grid mz-c4 mz-cave-grid">'+g+"</div>":"")+'<div class="mz-dig"><span class="mz-why">'+(d?"岩层未凿":"未凿")+"</span>"+(d?_t("开凿 "+c+" "+x($e[c])+"贯","dig",!d.length,d.join(" ")):"")+"</div></div>"}).join('<div class="mz-stair"></div>')+"</div></div>"}function ul(t,e){let n=new Set(e.map(l=>l.名)),a=l=>tt.findIndex(p=>p.名===l),o=P(t),r=ct===re?re:o.蓝图.find(l=>l.名===ct&&!n.has(l.名)&&a(l.名)<0)||null;if(r)return'<div class="mz-folio">'+bl(t,r===re?null:r)+"</div>";let i=(l,p,d)=>'<div class="mz-card mz-fac mz-link" data-bp="'+z(l)+'">'+xa(p)+'<div class="mz-fac-top"><b>'+z(l)+'</b><span class="mz-tag">'+d+'</span></div><div class="mz-up-foot"><span class="mz-fac-act">兴造</span></div></div>',s=(l,p,d)=>'<div class="mz-card mz-fac mz-queued">'+xa(d)+'<div class="mz-fac-top"><b>'+z(l.名)+'</b><span class="mz-tag mz-gold">待呈 '+z(l.副)+'</span></div><div class="mz-up-foot"><button type="button" class="mz-bk-x mz-fac-act" data-drop="build:'+p+'">撤下</button></div></div>';return'<div class="mz-folio"><div class="mz-grid mz-c4 mz-bp-grid">'+(o.蓝图.filter(l=>!n.has(l.名)).map(l=>a(l.名)>=0?s(tt[a(l.名)],a(l.名),o.设施图[l.名]):i(l.名,o.设施图[l.名],l.层)).join("")+tt.map((l,p)=>Kr(t,l.名)?"":s(l,p,o.自拟图[l.副]||o.自拟图.粗成)).join("")+i(re,o.自拟图.粗成,"另起名目"))+"</div>"+xl(tt)+"</div>"}function xl(t){if(!t.length)return"";let e=mn(null,t);return'<div class="mz-basket mz-basket-bar">'+lt("待呈",x(t.length)+"事 共"+x(qr(t))+"贯")+_t("呈报","build-send",!e.length,e.join(" ")," mz-lg")+"</div>"}function Dr(t){return'<form class="'+t.form+'" onsubmit="return false"><div class="mz-detail-top"><div class="mz-detail-pic">'+t.pics+'</div><div class="mz-detail-text">'+t.head+t.text+"</div></div>"+(t.below||"")+'<div class="mz-build-foot">'+(t.foot||"")+'<button type="button" class="mz-back" data-back="'+t.back+'">返回</button></div></form>'}var hl='<label class="mz-wonder mz-live">奇效<textarea name="奇效" rows="2" placeholder="'+Ur+'"></textarea><small>升作天工须议定奇效，写入即成定局</small></label>';function zl(t,e){let n=rt[rt.indexOf(e.档次)+1],a=n?Or(t,e.名,e.档次,n).join(" "):"",o=P(t),r=o.蓝图.find(i=>i.名===e.名);return Dr({back:"fac",form:Vr,pics:'<img src="'+E(o.设施图[e.名]||o.自拟图[e.档次]||o.自拟图.粗成)+'" alt="">',head:'<div class="mz-wh">地宫 <b>'+z(e.名)+"</b>"+Wr(e.档次)+'<span class="mz-tag mz-layer">'+Fe(t,e)+"</span></div>",text:'<p class="mz-build-note">'+z(r?r.说明:e.用途)+"</p>"+(e.奇效?'<p class="mz-build-note">'+F("奇效",e.奇效)+"</p>":""),below:n==="天工"?hl:"",foot:n?'<span class="mz-why">库中 '+U(W(t))+"</span>"+_t("升 "+n+" "+x(Pe[n])+"贯","upgrade",!a,a," mz-lg"):""})}function bl(t,e){let n=rt.every(s=>ua(t,s).length),a=e?jr(t,e.层).join(""):"",o=rt.map(s=>{let c=ua(t,s);return'<label class="mz-pick'+(c.length?" mz-off":"")+'"><input type="radio" name="档次" value="'+s+'"'+(c.length?" disabled":"")+"><b>"+s+'</b><span class="mz-price">'+x(me[s])+"贯</span>"+(c.length?'<small class="mz-cond">'+c.join(" ")+"</small>":"")+"</label>"}).join(""),r=e?'<input type="hidden" name="名称" value="'+z(e.名)+'"><input type="hidden" name="用途" value="'+z(e.用途)+'"><input type="hidden" name="层" value="'+e.层+'"><p class="mz-build-note">'+z(e.说明)+"</p>":'<div class="mz-own-head"><label>名称<input name="名称" placeholder="自拟名目"></label><label>用途<textarea name="用途" rows="2" placeholder="自拟用途与陈设"></textarea></label></div><div class="mz-picks mz-row mz-layers">'+Mn(t).map(s=>'<label class="mz-pick"><input type="radio" name="层" value="'+s+'"'+(s==="地下一层"?" checked":"")+"><b>"+s+"</b></label>").join("")+"</div>",i=P(t);return Dr({back:"bp",form:ba,pics:e?'<img src="'+E(i.设施图[e.名])+'" alt="">':rt.map(s=>'<img src="'+E(i.自拟图[s])+'" alt="" data-g="'+s+'">').join(""),head:'<div class="mz-wh">兴造 <b>'+(e?z(e.名):re)+"</b>"+(e?'<span class="mz-tag mz-layer">'+e.层+"</span>":"")+"</div>",text:r,below:'<div class="mz-picks mz-row">'+o+'</div><label class="mz-wonder">奇效<textarea name="奇效" rows="2" placeholder="'+Ur+'"></textarea><small>天工独有：通达造化，立成定局，后效绵延</small></label>',foot:'<span class="mz-why">库中 '+U(W(t))+"</span>"+_t("记下","build",!n&&!a,En(t)?"远行途中":a||"铜钱不足"," mz-lg")})}function vl(t){let e=ca(t),n=la(t),a=e.length+n.length,o=e.length?e.map(([c,l])=>pn("<b>"+z(c)+"</b>"+F("详情",l.详情||"")+"<br>"+F("价值",l.价值||"")+'<button class="mz-seal-btn" data-act="extort" data-name="'+z(c)+'">勒索</button>')).join(""):'<div class="mz-none">簿中无名</div>',r=n.length?n.map(([c,l])=>{let p=Number(l.欠额)||0,d=Number(l.已收息)||0,g=p>0&&d>=p*1e3;return'<div class="mz-debt"><b>'+z(c)+"</b><span>"+z(l.详情||"无抵押")+"</span><span>借"+x(p)+"贯</span><span>收息"+U(d)+(g?'<i class="mz-tag mz-gold">停息</i>':"")+"</span></div>"}).join(""):'<div class="mz-none">簿中无名</div>',i=Br(t,0),s='<form class="mz-form mz-sheet mz-loan" onsubmit="return false"><div class="mz-loan-line"><span>'+P(t).贷.契+'</span><input name="欠户" placeholder="姓名"><span>钱</span><input name="本金" placeholder="几" inputmode="numeric"><span>贯，押</span><input name="抵押" placeholder="田契、宅契或人身"><span>，月息五分，利不过本。</span>'+_t("放贷","loan",!i.length,i.join(" ")," mz-lg")+'<i class="mz-br"></i><span class="mz-why mz-loan-bal">库中 '+U(W(t))+"</span></div></form>";return'<section class="mz-win mz-on">'+Me("暗账",[{id:"handle",label:"把柄",n:x(e.length)},{id:"debt",label:"债契",n:x(n.length)}],Ie(t,"共"+x(a)+"／五条"))+Z("暗账","handle",'<div class="mz-folio mz-fill">'+_e("把柄")+'<div class="mz-grid mz-c2">'+o+"</div></div>","handle")+Z("暗账","debt",'<div class="mz-folio mz-fill"><div class="mz-rite-pic mz-loan-pic"><img src="'+E(to)+'" alt=""></div>'+s+lt("债契",x(n.length)+"契")+r+"</div>","handle")+"</section>"}function wl(t){let n=Object.entries(t.教务.法事委托).map(([o,r])=>pn('<span class="mz-tag'+(r.状态==="已完成"?" mz-gold":"")+'">'+z(r.状态||"待办")+"</span><b>"+z(o)+"</b>"+F("诉求",r.诉求||"")+"<br>"+F("时限",r.时限||"")+"<br>"+F("报酬",r.报酬||"")));for(;n.length<Mt.法事委托;)n.push(ha());let a=pa(t).length;return'<section class="mz-win mz-on">'+Me("法事",[{id:"order",label:"委托",n:x(a)+"／三席"}],Ie(t))+Z("法事","order",'<div class="mz-folio mz-fill">'+_e("委托")+'<div class="mz-grid mz-c3">'+n.join("")+"</div></div>","order")+"</section>"}var Ar=(t,e,n)=>{let a=Math.min(n,Math.ceil(Math.max(t.length,1)/e)*e);for(;t.length<a;)t.push(ha())};function yl(t){let e=Object.entries(t.执事名册),n=e.map(([s,c])=>{let l=String(c||"").split("/");return pn("<b>"+z(s)+"</b>"+F("身份",l[0]||"")+"<br>"+F("位阶",l[1]||"")+"<br>"+F("职能",l.slice(2).join("/")||""))});Ar(n,12,Mt.执事名册);let a=Object.entries(t.明妃录),o=a.map(([s,c])=>{let l=String(c||"").split("/");return pn("<b>"+z(s)+"</b>"+F("出身",l[0]||"")+"<br>"+F("度化",l[1]||"")+"<br>"+F("要点",l.slice(2).join("/")||""))});Ar(o,6,Mt.明妃录);let r=Qr(t),i=[["钱帛五十贯以上",W(t)>=5e4],["库藏有药品",yr(t.财务.库藏,"药品")>0],["精工以上坛场设施",bt(t).some(s=>Ja.some(c=>s.名.includes(c)||s.用途.includes(c))&&s.档次!=="粗成")],["信众五十人以上",t.教务.信众>=50]];return'<section class="mz-win mz-on">'+Me("教务",[{id:"steward",label:"执事",n:x(e.length)+"／二十四席",red:e.length>=Mt.执事名册},{id:"consort",label:"明妃",n:x(a.length)+"／十二席",red:a.length>=Mt.明妃录},{id:"rite",label:"法会",n:r?"暂休":"待办"}],Ie(t))+Z("教务","steward",'<div class="mz-folio mz-fill">'+_e("执事")+'<div class="mz-grid mz-c4">'+n.join("")+"</div></div>","steward")+Z("教务","consort",'<div class="mz-folio mz-fill">'+_e("明妃")+lt("明妃法座",x(a.length)+"位／十二席")+'<div class="mz-grid mz-c3">'+o.join("")+"</div></div>","steward")+Z("教务","rite",'<div class="mz-rite-pic"><img src="'+E(ao)+'" alt=""></div>'+lt("上次法会",t.教务.上次法会?z(t.教务.上次法会.replace("/"," ")):"未曾办过")+'<div class="mz-none">'+(r?"本月已办":"本月可办")+"</div>"+lt("筹办门槛")+'<ul class="mz-ticks">'+i.map(([s,c])=>"<li"+(c?' class="mz-ok"':"")+">"+s+"</li>").join("")+'</ul><div class="mz-none">大法会关涉满城风云，须教主亲自开坛，此处仅照验规制</div>',"steward")+"</section>"}function Ql(t){let e=Object.entries(t.财务.库藏),n=e.length,a=sn(t),o=Math.max(0,a-n),r=([w,v])=>'<div class="mz-card'+(String(v.效用||"").length>28?" mz-wide":"")+'"><b>'+z(w)+"</b>"+F("效用",v.效用||"")+"</div>",s='<div class="mz-folio mz-store">'+(Cn.map(w=>{let v=e.filter(([,N])=>N&&N.类别===w);return'<div class="mz-store-row"><div class="mz-store-head"><img class="mz-store-pic" src="'+E(oo[w])+'" alt=""><span>'+w+"</span><b>"+(v.length?x(v.length)+"件":"无")+'</b></div><div class="mz-grid mz-c4">'+v.map(r).join("")+"</div></div>"}).join("")+(()=>{let w=e.filter(([,v])=>!v||!Cn.includes(v.类别));return w.length?'<div class="mz-store-row"><div class="mz-store-head"><span>杂物</span><b>'+x(w.length)+'件</b></div><div class="mz-grid mz-c4">'+w.map(([v,N])=>r([v,N||{}])).join("")+"</div></div>":""})())+(o?'<div class="mz-store-row mz-store-spare"><div class="mz-store-head"><span>余屉</span><b>'+x(o)+'屉</b></div><div class="mz-grid mz-c4">'+ha().repeat(o)+"</div></div>":"")+"</div>",c=ft.map(w=>sa(t,w)),l=ft.map(w=>Rr(t,w)),p=l.findIndex(w=>!w.length),d=ft.map((w,v)=>'<label class="mz-pick mz-shop'+(l[v].length?" mz-off":"")+'"><input type="radio" name="类别" form="mz-craft-form" value="'+w.kind+'"'+(l[v].length?" disabled":"")+(v===p?" checked":"")+"><b>"+w.kind+'</b><span class="mz-price">'+x(w.price)+'贯</span><small class="mz-shopline mz-cond">'+(l[v].length?l[v].join(" "):P(t).作坊[w.kind]+" 已备")+"</small></label>").join(""),g=Ft(t).concat(Nr(t)),u=ft.filter((w,v)=>c[v]).map(w=>w.kind),b=ft[p>=0?p:0].ph,K='<div class="mz-wrow mz-craftrow"><div class="mz-wcol mz-shoplist">'+lt("作坊")+'<div class="mz-picks mz-col">'+d+"</div>"+nl("craft",$t)+'</div><form id="mz-craft-form" class="'+Zr+'" onsubmit="return false">'+lt("制作")+'<label>物名<input name="物名" placeholder="'+b[0]+'"></label><label class="mz-grow">效用<textarea name="效用" rows="3" placeholder="'+b[1]+'"></textarea></label><div class="mz-build-foot"><span class="mz-why">库中 '+U(W(t))+"</span>"+_t("记下","craft",!g.length&&p>=0,g.length?g.join(" "):"无可用作坊"," mz-lg")+"</div></form></div>";return'<section class="mz-win mz-on">'+Me("库藏",[{id:"store",label:"库藏",n:x(n)+"／"+x(a)+"屉"},{id:"craft",label:"工坊",n:u.length?"可制"+u.join("／"):"无坊"}],Ie(t))+Z("库藏","store",s,"store")+Z("库藏","craft",'<div class="mz-folio mz-fill">'+_e("工坊")+K+"</div>","store")+"</section>"}var ga=null;function kl(t){let e=Ge(t);ga!==null&&ga!==e&&(tt=[],$t=[],ct=null),ga=e}function Xr(t){let e=t.querySelector('input[name="类别"]:checked'),n=t.querySelector("#mz-craft-form"),a=e&&ft.find(o=>o.kind===e.value);a&&n&&(n.elements.物名.placeholder=a.ph[0],n.elements.效用.placeholder=a.ph[1])}function Yr(t,e){switch(kl(e),t){case"舆图":return ol(e);case"同心缕":return cl(e);case"营造":return dl(e);case"暗账":return vl(e);case"法事":return wl(e);case"教务":return yl(e);case"库藏":return Ql(e)}return'<section class="mz-win mz-on"><div class="mz-stub">未辟</div></section>'}function cn(t){let e=t.closest("form"),n={};return e&&Array.from(e.elements).forEach(a=>{!a.name||a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"||(a.type==="radio"?a.checked?n[a.name]=a.value:n[a.name]=n[a.name]||"":n[a.name]=a.value.trim())}),n}function Jr(t,e){let n=t.target.closest(".mz-pic img");if(n){El(n.getAttribute("src"),n.getAttribute("alt")||"");return}let a=t.target.closest(".mz-names button[data-bond]");if(a){Dn(a.dataset.bond),Lt();return}let o=t.target.closest(".mz-gallery .mz-cell[data-theme]");if(o){Vt("bond:"+V,o.dataset.theme),Lt(),Jo();return}let r=t.target.closest(".mz-bk-x[data-drop]");if(r){let[g,u]=r.dataset.drop.split(":");(g==="build"?tt:$t).splice(+u,1),Lt();return}let i=t.target.closest('input[name="类别"]');if(i){let g=ft.find(b=>b.kind===i.value),u=m.getElementById("mz-craft-form");g&&u&&(u.elements.物名.placeholder=g.ph[0],u.elements.效用.placeholder=g.ph[1]);return}let s=t.target.closest(".mz-card[data-bp]");if(s){pl(s.dataset.bp),Lt();return}let c=t.target.closest(".mz-card[data-fac]");if(c){ml(c.dataset.fac),Lt();return}let l=t.target.closest(".mz-back");if(l){l.dataset.back==="fac"?ie=null:ct=null,Lt();return}let p=t.target.closest(".mz-seal-btn[data-act]");if(!p||p.disabled)return;t.preventDefault();let d=p.dataset.act;if(d==="extort"){_r(gt.勒索(p.dataset.name));return}if(d==="hall"){let g=P(L()),u=g.三阶[1];oe({tag:"兴造",check:b=>Cr(b).join(" "),mutate:b=>{b.财务.铜钱-=g.价[u],b.道场.正殿等级=u},message:b=>gt.升殿(u,b),fail:b=>A(p,b)}).catch(b=>A(p,"出错: "+(b&&b.message||b)));return}if(d==="upgrade"){let g=ie,u=L(),b=bt(u).find(v=>v.名===g);if(!b)return;let K=rt[rt.indexOf(b.档次)+1];if(!K)return;let w=K==="天工"&&cn(p).奇效||"";if(K==="天工"&&!w){A(p,"先议定奇效");return}oe({tag:"兴造",check:v=>Or(v,g,b.档次,K).join(" "),mutate:v=>{let N=v.道场.地宫设施&&v.道场.地宫设施[g];N&&(v.财务.铜钱-=Pe[K],N.档次=K,w&&(N.奇效=w))},message:v=>gt.升造(g,b.档次,K,w,v),fail:v=>A(p,v)}).catch(v=>A(p,"出错: "+(v&&v.message||v)));return}if(d==="build"){let g=cn(p),u=g.档次;if(!g.名称){A(p,"先填名称");return}if(ct===re&&!g.用途){A(p,"先填用途");return}if(!u){A(p,"先选档次");return}Mr(p,"build",tl(g.名称,g.用途,u,u==="天工"&&g.奇效||"",dt.includes(g.层)?g.层:"地下一层"));return}if(d==="dig"){let g=dt[Zt(L())+1];if(!g)return;oe({tag:"兴造",check:u=>(dt[Zt(u)+1]!==g?["此层已凿"]:Hr(u,g)).join(" "),mutate:u=>{u.财务.铜钱-=$e[g],u.道场.地宫深度=dt.indexOf(g)},message:u=>gt.开凿(g,u),fail:u=>A(p,u)}).catch(u=>A(p,"出错: "+(u&&u.message||u)));return}if(d==="build-send"){Tr(p,"build");return}if(d==="craft"){let g=cn(p),u=ft.find(b=>b.kind===g.类别);if(!u){A(p,"先选类别");return}if(!g.物名){A(p,"先填物名");return}if(!g.效用){A(p,"先填效用");return}Mr(p,"craft",el(g.物名,g.效用,u));return}if(d==="craft-send"){Tr(p,"craft");return}if(d==="loan"){let g=cn(p),u=Math.round(Number(g.本金));if(!g.欠户){A(p,"先填欠户");return}if(/[/~]/.test(g.欠户)){A(p,"欠户里不可含「/」「~」");return}if(!(u>0)){A(p,"本金须为整数贯");return}oe({tag:"无尽藏",check:b=>Br(b,u,g.欠户).join(" "),mutate:b=>{b.财务.铜钱-=u,b.财务.暗账=b.财务.暗账||{},b.财务.暗账[g.欠户]={类别:"债契",欠额:u,已收息:0,详情:g.抵押?"押 "+g.抵押:"",价值:"月息五分，利不过本"}},message:b=>gt.放贷(g.欠户,b),fail:b=>A(p,b)}).catch(b=>A(p,"出错: "+(b&&b.message||b)))}}function El(t,e){let n=m.getElementById(T);if(!n||m.getElementById("mz-viewer"))return;let a=m.createElement("div");a.id="mz-viewer",a.innerHTML='<img src="'+z(t)+'" alt="'+z(e)+'">'+(e?"<span>"+z(e)+"</span>":""),a.addEventListener("click",()=>a.remove()),n.appendChild(a)}function A(t,e){let n=t.nextElementSibling;(!n||!n.classList.contains("mz-why"))&&(n=m.createElement("span"),n.className="mz-why",t.after(n)),n.textContent=e}function Lt(){it()}var G=null,va=0,wa=!1,ei={},Pt=()=>G,dn=(t,e)=>ei[t]||e;function xt(t){kt()&&(t=Y);let e=m.querySelector(".mz-side");wa=!!(e&&e.classList.contains("mz-open")),vt(null),G!==t&&Ae.clear(),G=t;let n=m.getElementById(f.lift);n&&(m.getElementById(f.liftTitle).textContent=t===Y?Nn:t,n.classList.toggle("mz-gate",t===Y),n.classList.toggle("mz-sin",t==="暗账"),it(),clearTimeout(va),n.classList.remove("mz-hide"),n.classList.add("mz-show"),m.getElementById(f.liftBody).scrollTop=0,ni())}function ni(){let t=m.getElementById(f.mplaque);if(!t)return;let e=!!G&&G!==Y;t.classList.toggle("mz-ret",e),t.disabled=G===Y;let n=m.getElementById(f.corner);n&&n.classList.toggle("mz-away",e)}function ai(){let t=m.getElementById(f.liftBody).querySelector(".mz-back");t?t.click():nt()}function nt(t){if(G===Y&&!t&&kt())return;G=null,Ae.clear(),Gr(),wa&&(wa=!1,vt("l")),ni();let e=m.getElementById(f.lift);e&&(e.classList.add("mz-hide"),clearTimeout(va),va=setTimeout(()=>{if(G)return;e.classList.remove("mz-show","mz-hide","mz-gate","mz-sin");let n=m.getElementById(f.liftBody);n&&(n.innerHTML="")},300))}var Ae=new Set,Qa=t=>{let e=t.name||t.dataset.k||t.id||"";if(!e)return"";let n=t.closest("form");return(n?n.className:"")+"|"+e},ya=t=>t.type==="radio"||t.type==="checkbox";function ti(t){let e=t.target;if(!e||!e.matches||!e.matches("input, textarea, select"))return;let n=Qa(e);n&&Ae.add(n)}function Te(t,e){for(let n of e)Ae.delete(t+"|"+n)}function Sl(t){let e=new Map;return t.querySelectorAll("input, textarea, select").forEach(n=>{let a=Qa(n);!a||!Ae.has(a)||(ya(n)?e.set(a+"="+n.value,n.checked):e.set(a,n.value))}),e}function Ll(t,e){e.size&&t.querySelectorAll("input, textarea, select").forEach(n=>{let a=Qa(n);if(!a||n.disabled)return;let o=e.get(ya(n)?a+"="+n.value:a);o!==void 0&&(ya(n)?n.checked=o:n.value=o)})}var _l=t=>[...t.classList].find(e=>e.startsWith("mz-"))||t.tagName.toLowerCase();function oi(t,e){let n=new Map;t.querySelectorAll("*").forEach(a=>{let o=_l(a),r=n.get(o)||0;n.set(o,r+1),e(a,o+"#"+r)})}function Tl(t){let e=new Map;return oi(t,(n,a)=>{n.scrollTop&&e.set(a,n.scrollTop)}),e}function Ml(t,e){e.size&&oi(t,(n,a)=>{let o=e.get(a);o!==void 0&&(n.scrollTop=o)})}function it(t){if(!G)return;let e=m.getElementById(f.liftBody);if(!e)return;let n=t||L(),a=e.scrollTop,o=Tl(e),r=Sl(e);e.innerHTML=G===Y?Lo():Yr(G,n),Ll(e,r),Xr(e),Ml(e,o),e.scrollTop=a}function Il(t){if(G===Y){t.target!==t.currentTarget&&To(t);return}if(t.target===t.currentTarget){nt();return}let e=t.target.closest(".mz-tabs button[data-pane]");if(e){ei[G]=e.dataset.pane;let n=e.closest(".mz-win");e.parentElement.querySelectorAll("button").forEach(a=>a.classList.toggle("mz-on",a===e)),n.querySelectorAll(".mz-pane").forEach(a=>a.classList.toggle("mz-on",a.dataset.pane===e.dataset.pane));return}Jr(t,G)}function ri(){let t=m.getElementById(f.lift);t&&!t.dataset.bound&&(t.addEventListener("click",Il),t.addEventListener("input",ti),t.addEventListener("change",ti),t.dataset.bound="1")}var ue=[{key:"同心缕",lift:"同心缕",ico:"icon-redknot.webp"},{key:"库藏",lift:"库藏",ico:"icon-coffer.webp"},{key:"教务",lift:"教务",ico:"icon-letterbox.webp"},{key:"营造",lift:"营造",ico:"shrine-model.webp"},{key:"法事",lift:"法事",ico:"icon-folddoc.webp"},{key:"暗账",lift:"暗账",ico:"icon-ledger.webp"}];function Al(t){return`<div class="mz-nav-item" data-lift="${t.lift}" data-zone="${t.key}"><span class="mz-nav-ico"><img src="${E(t.ico)}" alt="${t.key}"></span><span class="mz-nav-main"><span class="mz-nav-lab">${t.key}</span><span class="mz-nav-sub"></span></span><span class="mz-nav-lock"></span></div>`}function Cl(){return`
  <div class="mz-side mz-tex">
    <div class="mz-plaque">密宗模拟器<button class="mz-side-x" title="收起">${O.close}</button></div>
    <div id="${f.minimap}" data-lift="舆图">
      <div class="mz-map-wrap"><img src="${E("map-panorama.webp")}" alt="舆图" data-mode="home"><div class="mz-map-pin"></div></div>
      <div class="mz-doom" id="${f.doom}"></div>
    </div>
    <nav class="mz-nav">${ue.map(Al).join("")}</nav>
  </div>
  <div class="mz-main">
    <div class="mz-topbar mz-tex">
      <button class="mz-tb-plaque" id="${f.mplaque}" title="诸务">${O.menu}${O.back}</button>
      <div class="mz-tb-face" id="${f.topbar}"></div>
      <div id="${f.corner}">
        <button data-corner="exit" title="出卷">${O.close}</button>
      </div>
    </div>
    <div id="${f.paper}"></div>
    <div id="${f.status}"></div>
    <div id="${f.writing}">
      <div class="mz-w-tools">
        <button id="${f.del}" title="删去记录">${O.trash}</button>
        <button id="${f.regen}" title="删除并重写上一条">${O.regen}</button>
      </div>
      <textarea id="${f.textarea}" rows="1" placeholder="教主示下……"></textarea>
      <button id="${f.send}" title="发送">敕</button>
    </div>
    <div id="${f.delbar}"><span id="${f.delCount}">点选要删去的记录</span><button id="${f.delCancel}">取消</button><button class="mz-danger" id="${f.delConfirm}" disabled>删除</button></div>
    <button id="${f.jump}" title="回至卷尾"></button>
  </div>
  <div id="${f.mscrim}"></div>
  <div id="${f.lift}"><div class="mz-held"><h3 id="${f.liftTitle}"></h3><div class="mz-held-body" id="${f.liftBody}"></div></div></div>
  `}var ka=null;function vt(t){ka=t;let e=m.getElementById(T);if(!e)return;let n=e.querySelector(".mz-side");n&&n.classList.toggle("mz-open",t==="l");let a=m.getElementById(f.mplaque);a&&a.classList.toggle("mz-on",t==="l");let o=m.getElementById(f.mscrim);o&&o.classList.toggle("mz-open",!!t)}var Ol=t=>vt(ka===t?null:t);function jl(){Oe.forEach((t,e)=>{let n=je+e;if(m.getElementById(n))return;let a=m.createElement("link");a.id=n,a.rel="stylesheet",a.href=t,m.head.appendChild(a)})}function ii(){if(m.getElementById(T))return;jl();let t=m.getElementById(f.shellStyle);t||(t=m.createElement("style"),t.id=f.shellStyle,m.head.appendChild(t)),t.textContent=wo;let e=m.createElement("div");e.id=T,e.className="mz-shell mz-overlay",e.dataset.owner=Tt,e.innerHTML=Cl(),m.body.appendChild(e);let n=()=>{if(ka){vt(null);return}le()};e.querySelector("#"+f.corner+' button[data-corner="exit"]').addEventListener("click",n),e.querySelectorAll(".mz-side [data-lift]").forEach(a=>{a.addEventListener("click",()=>{a.classList.contains("mz-locked")||xt(a.dataset.lift)})}),m.getElementById(f.mplaque).addEventListener("click",()=>{Pt()?ai():Ol("l")}),m.getElementById(f.mscrim).addEventListener("click",()=>vt(null)),e.querySelector(".mz-side-x").addEventListener("click",()=>vt(null))}function Ea(){let t=m.getElementById(f.shellHideStyle);return t||(t=m.createElement("style"),t.id=f.shellHideStyle,t.textContent="#sheld, #chat, #form_sheld { display: none !important; }",m.head.appendChild(t)),t}function X(){let t=m.getElementById(T);return t?t.dataset.visible!=="false":!1}function Gt(t,e){let n=m.getElementById(T);n&&(n.dataset.visible=t?"true":"false",n.style.display=t?"flex":"none"),Ea().disabled=!t||!!e,t?(Hl(),Mo()):(vt(null),nt(),gn())}var si=!1,fn=!1;function pi(){if(si)return;si=!0;let t=Ia.slice(),e=new Set,n=()=>{if(!t.length)return;if(k||fn||Xt){setTimeout(n,300);return}let a=t.shift(),o=m.createElement("img");o.onload=n,o.onerror=()=>{if(e.has(a)){n();return}e.add(a),setTimeout(()=>{t.push(a),n()},3e3)},o.src=E(a)};for(let a=0;a<Aa;a++)n()}function li(t,e,n){fn=!0,t.classList.add(e);let a=!1,o=()=>{a||(a=!0,t.removeEventListener("animationend",o),t.classList.remove(e),fn=!1,n())};t.addEventListener("animationend",function r(i){i.target===t&&(t.removeEventListener("animationend",r),o())}),setTimeout(o,400)}function ci(){if(fn)return;let t=m.getElementById(T);if(X()){if(ve(),!t){Gt(!1);return}Ea().disabled=!0,li(t,"mz-shell-out",()=>Gt(!1));return}let e=!1;try{H(null),R(),No(null),I&&ht(!1),Gt(!0,!0),j(!0),q(),e=kt(),e||_o()}catch(a){throw Gt(!1),a}let n=m.getElementById(T);n&&li(n,"mz-shell-in",()=>{X()&&(Ea().disabled=!1,e&&Et())})}var le=typeof errorCatched=="function"?errorCatched(ci):ci;function Sa(){try{window.parent.__MZ_ENTER_FLAG=!1}catch{}X()||le()}function La(){let t=m.getElementById(f.entry);return t||(t=m.createElement("div"),t.id=f.entry,t.className="mz-shell",t.dataset.owner=Tt,m.body.appendChild(t)),t}function Hl(){let t=m.getElementById(f.entry);t&&(t.className="mz-shell",t.innerHTML="")}function Rl(){try{let t=getChatMessages(0)[0];return getLastMessageId()===0&&!!t&&It(t.message)}catch{return!1}}function gn(){let t=La();if(Rl()){t.className="mz-shell",t.innerHTML="";return}t.className="mz-shell mz-tab"+(Lr()?" mz-xue":""),t.innerHTML=`<button class="mz-entry-tab" id="${f.entryEnter}" title="入卷 ${vn}"><i>入</i><span>${vn}</span>${O.chev}</button>`,un();let e=m.getElementById(f.entryEnter);e&&e.addEventListener("click",le)}function un(){let t=m.getElementById(f.entry);if(!t||!t.classList.contains("mz-tab"))return;let e=m.getElementById("chat");if(e){let n=e.getBoundingClientRect();t.style.left=n.left+n.width/2+"px",t.style.top=n.top+10+"px"}else t.style.left="50%",t.style.top="calc(14px + env(safe-area-inset-top, 0px))";t.style.transform="translateX(-50%)"}window.parent.addEventListener("resize",un);var xn="mz-letter-veil",hn=()=>!!m.getElementById(xn);function Nl(t){let e=t?'<button class="mz-letter-btn mz-primary" data-letter="accept">应允同行</button><button class="mz-letter-btn" data-letter="close">先收起</button>':'<button class="mz-letter-btn" data-letter="close">收起</button>';return'<div class="mz-letter"><div class="mz-letter-in"><div class="mz-letter-scroll"><div class="mz-letter-head">央金手书</div><div class="mz-letter-body">'+lo.map(n=>"<p>"+M(n)+"</p>").join("")+'</div><div class="mz-letter-sign">'+M(so)+'</div></div><div class="mz-letter-foot">'+e+"</div></div></div>"}function Bl(){if(hn())return;let t=m.getElementById(T);if(!t)return;let e=m.createElement("div");e.id=xn,e.className="mz-letter-veil",e.innerHTML=Nl(rn(L())&&!k),e.addEventListener("click",ql),t.appendChild(e)}function zn(){let t=m.getElementById(xn);t&&(t.classList.add("mz-out"),t.addEventListener("animationend",()=>t.remove(),{once:!0}))}function ql(t){let e=t.target.closest("[data-letter]"),n=e?e.dataset.letter:t.target===t.currentTarget?"close":"";n&&(t.stopPropagation(),n==="close"?zn():n==="accept"&&Pl())}async function Pl(){let t="letter:"+Re();ma(!0),Vt(t,"accepted"),zn(),j(!0),en(),await Gl(()=>{ma(!1),da(L())}),await we(Ve,{onSent:n=>Vt(t,"accepted#"+n)})||(Vt(t,""),j(!0),en())}var $l=48;function Fl(){let t="";for(let e=0;e<$l;e++){let n=a=>(Math.sin(e*12.9898+a*78.233)*43758.5453%1+1)%1;t+='<i class="mz-flake" style="--x:'+(n(1)*100).toFixed(1)+"%;--s:"+(2+n(2)*4).toFixed(1)+"px;--t:"+(4+n(3)*5).toFixed(2)+"s;--d:"+(-n(4)*9).toFixed(2)+"s;--sw:"+((n(5)-.5)*120).toFixed(0)+'px"></i>'}return t}function Gl(t){let e=m.getElementById(T);return e?new Promise(n=>{let a=m.createElement("div");a.className="mz-veil mz-snow",a.innerHTML='<span class="mz-huo-word">'+[...io].map(p=>De(p)).join("")+"</span>";let o=m.createElement("div");o.className="mz-snowfall",o.innerHTML=Fl(),e.appendChild(a),e.appendChild(o);let r=!1,i=()=>a.classList.add("mz-dawn"),s=()=>{r||(r=!0,clearTimeout(c),clearTimeout(l),i(),t&&t(),a.classList.add("mz-out"),a.addEventListener("animationend",p=>{p.target===a&&p.animationName==="veil-out"&&a.remove()}),o.classList.add("mz-out"),o.addEventListener("animationend",p=>{p.target===o&&o.remove()}),n())};a.addEventListener("click",s,{once:!0});let c=setTimeout(i,400),l=setTimeout(s,2600)}):(t&&t(),Promise.resolve())}function mi(){let t=m.getElementById(T);!t||t.dataset.letterBound||(t.addEventListener("click",e=>{let n=e.target.closest('[data-letter="open"]');!n||n.closest("#"+xn)||(e.stopPropagation(),e.preventDefault(),Bl())},!0),t.dataset.letterBound="1")}var Ta=[];function wt(t,e){Ta.push([t,e]),eventOn(t,e)}var Vl=(t,e)=>{try{if(!t||!t.stat_data)return;if(!e||!_.isEqual(t.stat_data,e.stat_data)){H(_.cloneDeep(_.omit(t.stat_data,["$internal"])));let n=C();R(n);let a=L(t.stat_data);Ue(e&&e.stat_data?Dt(L(e.stat_data),a):null),j(!1,a),Ke(),X()&&!k&&!I&&!Q&&q()}}catch(n){console.warn("[密宗前端] 变量更新渲染失败",n)}};wt("mag_variable_update_ended",(t,e)=>setTimeout(()=>Vl(t,e),0));var Zl=t=>{try{t&&t.stat_data&&H(_.cloneDeep(_.omit(t.stat_data,["$internal"]))),j(!0)}catch(e){console.warn("[密宗前端] 变量初始化渲染失败",e)}};wt("mag_variable_initialized",Zl);var bn=null;try{bn=SillyTavern.getCurrentChatId()}catch(t){y("getChatId",t)}var Ul=t=>{if(bn!==null&&bn!==t){try{reloadIframe()}catch(e){y("reloadIframe",e)}return}bn=t};wt(tavern_events.CHAT_CHANGED,Ul);var Ce=t=>{R(Number(t)),X()&&!k&&!I&&!Q&&q()};wt(tavern_events.MESSAGE_EDITED,Ce);wt(tavern_events.MESSAGE_UPDATED,Ce);wt(tavern_events.CHARACTER_MESSAGE_RENDERED,Ce);wt(tavern_events.USER_MESSAGE_RENDERED,Ce);wt(tavern_events.MESSAGE_SWIPED,t=>{Ce(t),H(null),j(!0),X()?Et():gn()});wt(tavern_events.MESSAGE_DELETED,()=>{R(),H(null),X()&&!k&&!I&&!Q&&(j(!0),q(),Et())});async function _a(){try{typeof waitGlobalInitialized=="function"&&await waitGlobalInitialized("Mvu")}catch(n){y("waitMvu",n)}H(null),R();let t=X();[T,f.entry].forEach(n=>{let a=m.getElementById(n);a&&a.remove()}),ii(),pi(),La(),pr(),ri(),mi(),Gt(t);try{m.addEventListener("keydown",di)}catch(n){y("docKeydown",n)}try{window.parent.addEventListener("mz-shell-enter",Sa)}catch(n){y("parentEnterEvt",n)}let e=!1;try{e=!!window.parent.__MZ_ENTER_FLAG,window.parent.__MZ_ENTER_FLAG=!1}catch(n){y("enterFlag",n)}try{j(!0),q(),e&&!t?le():t?Et():gn()}catch(n){throw Gt(!1),n}}var Kl=[{isOpen:hn,close:zn},{isOpen:()=>!!Pt(),close:()=>nt()},{isOpen:()=>!!Q,close:()=>Nt(!1)},{isOpen:()=>I,close:()=>ht(!1)}];function di(t){try{if(!X()||Io())return;if(t.key==="Escape"){let o=Kl.find(r=>r.isOpen());o&&(t.preventDefault(),o.close());return}if(k||I||Pt()||hn()||t.ctrlKey||t.metaKey||t.altKey)return;let e=t.target;if(e&&(e.tagName==="TEXTAREA"||e.tagName==="INPUT"||e.isContentEditable))return;let n=+t.key;if(!(n>=1&&n<=9))return;let a=m.querySelectorAll("#"+f.paper+" .mz-opt");a[n-1]&&(t.preventDefault(),a[n-1].click())}catch{}}window.addEventListener("pagehide",()=>{try{window.parent.removeEventListener("resize",un),window.parent.removeEventListener("mz-shell-enter",Sa),m.removeEventListener("keydown",di),Ta.forEach(([e,n])=>{try{eventRemoveListener(e,n)}catch(a){y("unbind:"+e,a)}}),Ta.length=0;let t=m.getElementById(T);if(!t||t.dataset.owner===Tt){t&&t.remove();let e=m.getElementById(f.entry);e&&e.dataset.owner===Tt&&e.remove();let n=m.getElementById(f.shellStyle);n&&n.remove();let a=m.getElementById(f.shellHideStyle);a&&a.remove(),Oe.forEach((o,r)=>{let i=m.getElementById(je+r);i&&i.remove()})}}catch(t){y("pagehide",t)}});typeof $=="function"&&typeof errorCatched=="function"?$(errorCatched(_a)):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_a):_a();})();

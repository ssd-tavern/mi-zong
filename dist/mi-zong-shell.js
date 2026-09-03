(() => {
  // src/01-constants.js
  var doc = window.parent.document;
  var SHELL_ID = "mz-shell-root";
  var SHELL_TOKEN = "mz_" + Math.random().toString(36).slice(2) + "_" + Date.now();
  var CARD_TITLE = "密宗模拟器";
  var CDN_TAG = "3.0.1";
  var FONT_PKG = "@fontsource/noto-serif-sc@5.3.0";
  var FONT_CSS = [400, 600].map((w) => "https://testingcf.jsdelivr.net/npm/" + FONT_PKG + "/" + w + ".css");
  var FONT_LINK_ID = "mz-font-";
  function resolveAssetBase() {
    try {
      if (window.parent.MZ_ASSET_BASE) return String(window.parent.MZ_ASSET_BASE);
    } catch (e) {
    }
    return "https://testingcf.jsdelivr.net/gh/ssd-tavern/mi-zong@" + CDN_TAG + "/assets/";
  }
  var ASSET_BASE = resolveAssetBase();
  var asset = (name) => ASSET_BASE + name;
  var PRELOAD_ASSETS = ["bg-ink.webp", "hanging-fish.webp", "incense-coil.webp", "icon-redknot.webp", "icon-coffer.webp", "icon-letterbox.webp", "shrine-model.webp", "icon-folddoc.webp", "icon-ledger.webp", "map-panorama.webp", "stamp-angelica.webp", "stamp-orchid.webp", "stamp-peach.webp", "stamp-pomegranate.webp", "icon-lotus.webp", "lotus-rank.webp", "map-changan.webp", "hall-1-hut.webp", "hall-2-vihara.webp", "hall-3-edict.webp", "fac-danfang.webp", "fac-xingtang.webp", "fac-kefang.webp", "fac-huotan.webp", "fac-mitan.webp", "fac-wentang.webp", "fac-jiguan.webp", "fac-rongjin.webp", "fac-midang.webp", "fac-dilao.webp", "fac-kufang.webp", "fac-guifang.webp", "rite-grand.webp", "store-drug.webp", "store-tool.webp", "store-ritual.webp", "own-1-rough.webp", "own-2-fine.webp", "own-3-grand.webp", "loan-guifang.webp", "banner-handle.webp", "banner-steward.webp", "banner-consort.webp", "banner-order.webp", "sect-1-bliss.webp", "sect-2-illusion.webp", "sect-3-mercy.webp", "sect-4-asura.webp", "sect-5-strings.webp"];
  var PRELOAD_LANES = 3;
  var SEL = {
    entry: "mz-entry",
    entryEnter: "mz-entry-enter",
    shellHideStyle: "mz-shell-hide-style",
    shellStyle: "mz-shell-style",
    topbar: "mz-topbar",
    doom: "mz-doom",
    minimap: "mz-minimap",
    paper: "mz-paper",
    status: "mz-status",
    writing: "mz-writing",
    textarea: "mz-textarea",
    send: "mz-send",
    regen: "mz-regen",
    del: "mz-del",
    delbar: "mz-delbar",
    delCount: "mz-del-count",
    delCancel: "mz-del-cancel",
    delConfirm: "mz-del-confirm",
    jump: "mz-jump",
    corner: "mz-corner",
    lift: "mz-lift",
    liftTitle: "mz-lift-title",
    liftBody: "mz-lift-body",
    mplaque: "mz-mplaque",
    mscrim: "mz-mscrim"
  };
  function dbg(tag, e) {
    try {
      if (window.parent.localStorage.getItem("mzDebug")) console.warn("[密宗dbg]", tag, e);
    } catch (err) {
    }
  }
  var FS_SCALES = [["1", "适中"], ["1.08", "大"], ["1.16", "特大"]];
  var PREF_NS = "mzPref:";
  function getPref(k, def) {
    try {
      const v = window.parent.localStorage.getItem(PREF_NS + k);
      return v == null ? def : v;
    } catch (e) {
      return def;
    }
  }
  function setPref(k, v) {
    try {
      window.parent.localStorage.setItem(PREF_NS + k, v);
    } catch (e) {
    }
  }
  function safeLastMessageId() {
    try {
      return getLastMessageId();
    } catch (e) {
      return null;
    }
  }

  // src/04-icons.js
  var svg = (inner) => '<svg viewBox="0 0 24 24">' + inner + "</svg>";
  var ICO = {
    trash: svg('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/>'),
    regen: svg('<path d="M20 11a8 8 0 0 0-13.7-4.7L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.5"/><path d="M20 20v-4.5h-4.5"/>'),
    up: svg('<path d="M12 19V5M5 12l7-7 7 7"/>'),
    down: svg('<path d="M12 5v14M19 12l-7 7-7-7"/>'),
    menu: svg('<path d="M4 6h16M4 12h16M4 18h10"/>'),
    close: svg('<path d="M5 5l14 14M19 5L5 19"/>'),
    settings: svg('<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>'),
    chev: svg('<path d="M9 6l6 6-6 6"/>'),
    lock: svg('<rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>')
  };

  // src/05-data.js
  var CAST = ["苏白芷", "裴清砚", "叶玄薇", "萧夜沉"];
  var CAST_HINT = { 苏白芷: "药铺医女", 裴清砚: "裴府才女", 叶玄薇: "玄都女冠", 萧夜沉: "西市女商" };
  var STAMP = { 苏白芷: "mz-su", 裴清砚: "mz-pei", 叶玄薇: "mz-ye", 萧夜沉: "mz-xiao" };
  var RANKS = ["待度欲种", "一灌·瓶灌", "二灌·密灌", "三灌·慧灌", "四灌·大乐"];
  var rankIdx = (r) => Math.max(0, RANKS.indexOf(String(r || "").trim()));
  var CB = (id) => "https://files.catbox.moe/" + id + ".png";
  var GAL = {
    苏白芷: {
      work: [["日常药铺", CB("s00gej")], ["后院药圃", CB("d89n9l")], ["高门出诊", CB("iosk7b")], ["灯下私语", CB("8hrc60")]],
      rite: [["法事佛殿", CB("1v4vc6")], ["地宫坛城", CB("ym6sho")]],
      grade: [["一灌瓶灌", CB("eueumq")], ["二灌密灌", CB("ltzlih")], ["三灌慧灌", CB("alancw")], ["四灌大乐", CB("nxejmb")]]
    },
    裴清砚: {
      work: [["书斋挥毫", CB("3j73il")], ["上元灯船", CB("xthmz4")], ["煮茶失误", CB("bhv9nz")], ["风雪庭院", CB("s2kylc")]],
      rite: [["法事求道", CB("5bfwfo")], ["荒野古刹", CB("f7a50t")]],
      grade: [["一灌瓶灌", CB("6fyn2u")], ["二灌密灌", CB("aszq05")], ["三灌慧灌", CB("eb6z4u")], ["四灌大乐", CB("y11fwk")]]
    },
    叶玄薇: {
      work: [["街头执法", CB("qmblzw")], ["校场切磋", CB("szlrfw")], ["西市肉饼", CB("ap762h")], ["丹房格物", CB("0m8xyn")]],
      rite: [["斋醮法坛", CB("ufmtsy")], ["地宫对峙", CB("ooeomu")]],
      grade: [["一灌瓶灌", CB("pwwlih")], ["二灌密灌", CB("uzopeb")], ["三灌慧灌", CB("41vm4u")], ["四灌大乐", CB("d8hgib")]]
    },
    萧夜沉: {
      work: [["酒肆当垆", CB("edctyi")], ["暗市验货", CB("stieeb")], ["内室鉴香", CB("o302a6")], ["后院听雨", CB("f7ay4l")]],
      rite: [["大寺供香", CB("11zlk1")], ["法事密谋", CB("v1th0q")]],
      grade: [["一灌瓶灌", CB("utqt5v")], ["二灌密灌", CB("kovkxr")], ["三灌慧灌", CB("nq0q5n")], ["四灌大乐", CB("9ced93")]]
    }
  };
  function unlockedThemes(name, rank) {
    const g = GAL[name];
    if (!g) return [];
    return g.work.concat(g.rite, g.grade.slice(0, rankIdx(rank)));
  }
  function lockedGrades(name, rank) {
    const g = GAL[name];
    if (!g) return [];
    return g.grade.slice(rankIdx(rank)).map((_2, i) => RANKS[rankIdx(rank) + i + 1]);
  }
  function mainTheme(name, rank) {
    const g = GAL[name];
    if (!g) return null;
    const n = rankIdx(rank);
    return n > 0 ? g.grade[n - 1] : g.work[0];
  }
  var ZONES = ["城南道场", "西市暗市", "平康崇仁", "东市宣阳", "相国府第", "细民坊巷", "朱雀天街", "西南冷坊", "曲江池畔", "皇城宫阙"];
  var ZONE_PATHS = {
    城南道场: "M440 870 L575 870 L575 985 L440 985 Z",
    西市暗市: "M100 427 L370 427 L370 597 L100 597 Z",
    平康崇仁: "M614 359 L708 359 L708 544 L614 544 Z",
    东市宣阳: "M614 544 L708 544 L708 427 L808 427 L808 544 L905 544 L905 597 L614 597 Z",
    相国府第: "M614 243 L905 243 L905 544 L808 544 L808 427 L708 427 L708 359 L614 359 Z",
    细民坊巷: "M100 243 L370 243 L370 427 L100 427 Z",
    朱雀天街: "M370 497 L614 497 L614 830 L433 830 L433 630 L370 630 Z",
    西南冷坊: "M100 597 L370 597 L370 630 L433 630 L433 830 L100 830 Z",
    曲江池畔: "M614 597 L905 597 L905 894 L808 894 L808 830 L614 830 Z",
    皇城宫阙: "M370 243 L390 243 L390 195 L600 195 L600 17 L772 17 L772 245 L614 245 L614 497 L370 497 Z"
  };
  var ZONE_LABELS = {
    城南道场: ["城南道场", 49.6, 90.6],
    西市暗市: ["西市", 22.9, 50],
    平康崇仁: ["平康坊", 64.5, 44.1],
    东市宣阳: ["东市", 74, 50],
    相国府第: ["相国府第", 74.2, 29.4],
    细民坊巷: ["细民坊巷", 22.9, 32.7],
    朱雀天街: ["朱雀大街", 39.2, 55],
    西南冷坊: ["西南冷坊", 22.9, 69.7],
    曲江池畔: ["曲江池", 74.2, 69.7],
    皇城宫阙: ["皇城", 48, 36.1]
  };
  var MINIMAP_PIN = { 城南道场: ["城南道场", 54, 85], 长安: ["长安", 55, 42], 城外: ["城外", 60, 12] };
  var YEARS = ["会昌元年", "会昌二年", "会昌三年", "会昌四年", "会昌五年"];
  var YEAR_SHORT = ["元年", "二年", "三年", "四年", "五年"];
  var DOOM = ["赵归真入宫建醮", "勒令违戒僧尼还俗", "泽潞用兵搜刮铜钱", "强拆私刹禁绝俗讲", "敕命尽毁天下佛寺"];
  var MONTHS = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
  var MONTH_ALIAS = { 一月: "正月", 腊月: "十二月" };
  var GATE = { 开: "卯辰巳午未申", 暮鼓: "酉", 闭: "戌亥子丑寅" };
  var FESTIVALS = [
    [0, 1, "元日", 0, "官民贺岁饮屠苏，市肆歇业数日"],
    [0, 15, "上元", 1, "三日弛禁，满城夜游赏灯"],
    [0, 30, "晦日", 0, "士民结伴出城水边送穷"],
    [1, 29, "寒食", 0, "家家禁火冷食"],
    [2, 1, "清明", 0, "出城上坟踏青，城外秋千蹴鞠"],
    [2, 3, "上巳", 0, "士民赴曲江水边祓禊宴饮"],
    [3, 8, "浴佛", 0, "诸寺施香汤设法会，百姓进香"],
    [4, 5, "端午", 0, "缠五色丝，浐水曲江看竞渡"],
    [6, 7, "七夕", 0, "妇人庭中摆瓜果乞巧"],
    [6, 15, "盂兰盆", 0, "各处设斋供僧超度，富贵人家出资做法事"],
    [8, 9, "重阳", 0, "乐游原登高，佩茱萸饮菊酒"],
    [10, 15, "冬至", 0, "官府休假，晚辈献鞋袜，亲友走动"],
    [11, 30, "岁除", 0, "傩队沿街驱疫，各家通宵守岁"]
  ];
  var STORM_CLS = { 低: "mz-dim", 中: "", 高: "mz-red" };
  var HALLS = ["破败草庵", "庄严精舍", "敕赐法堂"];
  var HALL_PRICE = { 庄严精舍: 200, 敕赐法堂: 1e3 };
  var HALL_LOOK = { 破败草庵: "殿宇陈旧，泥佛落尘，香客罕至", 庄严精舍: "殿阁一新，钟磬有声，香客盈门", 敕赐法堂: "朝廷题额高悬，自此有名分在身" };
  var HALL_PIC = { 破败草庵: "hall-1-hut.webp", 庄严精舍: "hall-2-vihara.webp", 敕赐法堂: "hall-3-edict.webp" };
  var HALL_GAIN = { 破败草庵: ["一倍", "市井细民", "无敕额的私刹，官府清查易拆"], 庄严精舍: ["二倍", "豪商命妇", "开无尽藏放贷"], 敕赐法堂: ["四倍", "豪门贵客", "敕额官寺，官府清查不拆"] };
  var HALL_NOTE = "地面愈清贫，地下愈安稳。表面殿宇若修得金碧辉煌，反而引来大寺与官府的眼睛。";
  var GRADES = ["粗成", "精工", "天工"];
  var GRADE_Q = { 粗成: "mz-q1", 精工: "mz-q2", 天工: "mz-q4" };
  var GRADE_PRICE = { 粗成: 25, 精工: 100, 天工: 200 };
  var UPGRADE_PRICE = { 精工: 75, 天工: 100 };
  var STORE_CAP = { 无: 3, 粗成: 5, 精工: 8, 天工: 12 };
  var UNLOCK_FANS = { 教务: 10, 法事: 20, 罪业: 50 };
  var UNLOCK_COND = { 教务: "信众满十人开启", 法事: "信众满二十人开启", 罪业: "信众满五十人开启", 库藏: "建成库房开启", 同心缕: "结识女主开启" };
  var CRAFT = [
    { kind: "药品", price: 15, shop: "丹房", words: ["丹房"], note: "一料一用，一炉多份在效用里注份数" },
    { kind: "道具", price: 30, shop: "机关声光室", words: ["机关", "声光"], note: "造神机关，常驻不耗" },
    { kind: "法器", price: 50, shop: "熔金工坊", words: ["熔金", "工坊", "作坊"], note: "仪轨用具，常驻不耗" }
  ];
  var ALTAR_WORDS = ["密坛", "坛城", "坛场"];
  var BLUEPRINTS = [
    { 名: "丹房", 区: "地面", 用途: "采后院药圃所种曼陀罗、颠茄与诸般草药，煎炼迷香、安神散一类药物。药圃翻土重种，屋内架起药炉、药臼与分馏的铜管蒸器，炉火昼夜不熄。" },
    { 名: "宿曜星堂", 区: "地面", 用途: "教主在此为香客推命断卦，也与贵客关起门来私谈，攻其心防。偏殿辟出的静室，墙上张挂二十八宿星图与地狱变相图，一几一灯，门一合便与外间隔绝。" },
    { 名: "居士客房", 区: "地面", 用途: "留宿远来的香客与贵重客人，受药调理、静养过夜都在此处。后院僧房修葺成几间厢房，素帐矮榻，窗下一炉安神香，白日看是清修所在。" },
    { 名: "护摩火坛", 区: "地面", 用途: "火祭与大场面法事的压轴之处，焚物祈禳，烈焰冲天时满场信众跪倒。庭前垒石为坛，坛底暗铺松脂与白磷，投物入火便爆出异色火光。" },
    { 名: "曼荼罗密坛", 区: "地下", 用途: "地宫核心，灌顶、双修与一切秘密仪轨皆在此举行。地面铺厚毡软垫，正中一座雕花法座，四角长明灯环列，幔帐低垂，四壁密教画像在灯影里若隐若现。" },
    { 名: "温汤池", 区: "地下", 用途: "受灌者在此沐浴香汤、净身敷药，而后登坛。引泉修筑的药浴池，池底走火道加温，水面终年浮着一层药气与热雾。" },
    { 名: "机关声光室", 区: "地下", 用途: "操弄灯影、佛语与钵鸣，在坛场造出种种神迹，也制作诸般机巧道具。法座后方的夹层暗室，内设凹面铜镜、通向正殿佛像腹腔的传声铜管、调光风阀与一槽水银，一人在暗处便可号令满堂。" },
    { 名: "熔金工坊", 区: "地下", 用途: "将带记号的金银首饰熔成无记号的金条，也铸嘎巴拉碗、金刚杵一类法器。地宫下风处开一座排烟暗窑，炉火与锤声被厚土掩住，烟气顺暗道散入后山。" },
    { 名: "夹壁密档", 区: "地下", 用途: "收存入教者的发露状与血契、记载外人把柄的罪业密簿，以及伪造的路引文牒。地宫夹墙里凿出的暗阁，一道假壁封门，非教主亲启无人知其所在。" },
    { 名: "暗室地牢", 区: "地下", 用途: "拘禁细作与背约之人，逼其亲笔写下发露状，再以此拿捏。地宫深处一间封闭暗室，铁环锁链嵌在土壁上，一盏孤灯，昼夜不分。" },
    { 名: "库房", 区: "地下", 用途: "收储制成的药品、道具与法器，分屉存放，随取随用。干燥土窖里搭起木架与屉匣，以石灰防潮，每屉贴签，教主一看便知存余几何。" },
    { 名: "无尽藏柜坊", 区: "地下", 用途: "以教团之名向外放贷，立契收息，借钱债将人拴住。账房模样的柜坊，柜内置契匣与算筹，金银另藏暗格，一本账簿记满城欠户。" }
  ];
  var FAC_PIC = { 丹房: "fac-danfang.webp", 宿曜星堂: "fac-xingtang.webp", 居士客房: "fac-kefang.webp", 护摩火坛: "fac-huotan.webp", 曼荼罗密坛: "fac-mitan.webp", 温汤池: "fac-wentang.webp", 机关声光室: "fac-jiguan.webp", 熔金工坊: "fac-rongjin.webp", 夹壁密档: "fac-midang.webp", 暗室地牢: "fac-dilao.webp", 库房: "fac-kufang.webp", 无尽藏柜坊: "fac-guifang.webp" };
  var OWN_PIC = { 粗成: "own-1-rough.webp", 精工: "own-2-fine.webp", 天工: "own-3-grand.webp" };
  var CRISIS_NOTE = {
    不良人索贿敲诈: "京兆府不良人借查案为由闯入破庙搜查，借机坐索大笔常例钱。",
    金吾卫夜查突袭: "金吾卫巡夜搜捕逃犯或查抄私铸钱，无预警围封城南荒野，盘查出入车马与僧道。",
    城门香药查扣: "城门守卒根据密报突击开箱，查扣了教团通过暗市采购的西域曼陀罗等原料，押货牙人连人带货被扣。",
    道门细作暗探: "玄都观或道门派遣的细作伪装求法入寺，暗中打探地宫入口与药炉线索。",
    官寺恶僧寻衅: "官寺指使的市井泼皮在教团法会前夕砸毁坛场、泼洒污物，试图破坏声誉。",
    贵妇夫家围门索人: "某位出入内坛的贵妇夜不归宿，其夫家带人围堵城南破庙索要女眷。",
    千金神思恍惚露馅: "受灌千金归家后受药力影响言语恍惚，提及地宫秘仪，家族长辈已生疑并严加盘问。",
    西域商道截杀断供: "边关战乱截断商道，西域香药原料断供，暗市药价大涨，已受药信徒渐显戒断焦躁。",
    外围牙人卷款背叛: "负责引荐香客的居士私吞供养款项，备妥假户籍正欲潜逃外州。",
    常例拖欠: "本月常例钱拖欠未交，不良人上门坐索、扬言查封，索要数额远超欠额。",
    道门细作混入信众: "新入教香客举止殷勤但频频打听地宫路径与药方，来历形迹可疑。",
    信众受审告发地宫: "一名信徒因他事被官府拘捕受审，受刑不过供出城南破庙深夜聚众与地下室之事；差役正核查口供。"
  };
  var LOAN_PIC = "loan-guifang.webp";
  var PAGE_PIC = { 把柄: "banner-handle.webp", 执事: "banner-steward.webp", 明妃: "banner-consort.webp", 委托: "banner-order.webp" };
  var RITE_PIC = "rite-grand.webp";
  var STORE_KINDS = ["药品", "道具", "法器"];
  var STORE_PIC = { 药品: "store-drug.webp", 道具: "store-tool.webp", 法器: "store-ritual.webp" };
  var LIMITS = { 库藏: 12, 罪业密簿: 5, 法事委托: 3, 执事名册: 12, 明妃录: 6 };
  var FORM_MSG = {
    兴造: (名, 档, 奇效, 贯2) => "【兴造】" + 名 + "（" + 档 + "）已破土动工，账房已扣" + cn(贯2) + "贯，此笔不再入账。" + (奇效 ? "奇效议定：" + 奇效 : ""),
    升殿: (殿, 贯2) => "【兴造】表殿改建" + 殿 + "，匠人已开工动土，账房已扣" + cn(贯2) + "贯，此笔不再入账。",
    升造: (名, 旧, 新, 奇效, 贯2) => "【兴造】" + 名 + "自" + 旧 + "改造为" + 新 + "，匠人已动工，账房已扣" + cn(贯2) + "贯，此笔不再入账。" + (奇效 ? "奇效议定：" + 奇效 : ""),
    工巧: (名, 类, 贯2) => "【工巧】" + 类 + "「" + 名 + "」已拨资开炉，账房已扣" + cn(贯2) + "贯，此笔不再入账。",
    兴造多: (项, 贯2) => "【兴造】" + cn(项.length) + "事同举：" + 项.join("、") + "已一并破土动工，账房共扣" + cn(贯2) + "贯，此笔不再入账。",
    工巧多: (项, 贯2) => "【工巧】" + cn(项.length) + "事同炉：" + 项.join("、") + "已一并拨资开炉，账房共扣" + cn(贯2) + "贯，此笔不再入账。",
    放贷: (户, 贯2) => "【无尽藏】放贷" + cn(贯2) + "贯与" + 户 + "，立契画押，账房已出" + cn(贯2) + "贯，此笔不再入账。",
    勒索: (名) => "【勒索】以罪业密簿所载把柄，向" + 名 + "开口勒索。",
    朱票副题: "祸事临门 须教主亲周旋"
  };
  var DIG = "零一二三四五六七八九";
  function cnBelow10k(n) {
    if (n === 0) return "零";
    const u = ["", "十", "百", "千"];
    let s = "", zero = false;
    const str2 = String(n);
    for (let i = 0; i < str2.length; i++) {
      const d = +str2[i], p = str2.length - 1 - i;
      if (d === 0) {
        zero = true;
        continue;
      }
      if (zero) {
        s += "零";
        zero = false;
      }
      s += DIG[d] + u[p];
    }
    if (str2.length === 2 && s.startsWith("一十")) s = s.slice(1);
    return s;
  }
  function cn(n) {
    n = Math.max(0, Math.round(+n || 0));
    if (n < 1e4) return cnBelow10k(n);
    const w = Math.floor(n / 1e4), r = n % 1e4;
    return cnBelow10k(w) + "万" + (r ? (r < 1e3 ? "零" : "") + cnBelow10k(r) : "");
  }
  function money(文) {
    文 = Math.max(0, Math.round(+文 || 0));
    const 贯2 = Math.floor(文 / 1e3), 零 = 文 % 1e3;
    if (!贯2) return 零 ? cn(零) + "文" : "零贯";
    return cn(贯2) + "贯" + (零 ? cn(零) + "文" : "");
  }
  var 总文 = (sd) => Math.round((Number(_.get(sd, "资粮.铜钱")) || 0) * 1e3);
  function parseTime(s) {
    const seg = String(s || "").split("/").map((x) => x.trim());
    const y = YEARS.indexOf(seg[0]);
    const md = seg[1] || "";
    let mName = MONTHS.concat(Object.keys(MONTH_ALIAS)).filter((m) => md.startsWith(m)).sort((a, b) => b.length - a.length)[0] || null;
    const dayStr = mName ? md.slice(mName.length).replace(/日$/, "") : "";
    if (mName) mName = MONTH_ALIAS[mName] || mName;
    const day = cnToInt(dayStr);
    return { 年序号: y, 月序号: mName ? MONTHS.indexOf(mName) : -1, 月名: mName, 日: day, 日文: dayStr, 时辰: seg[2] || "", 月标: y >= 0 && mName ? seg[0] + "/" + mName : "" };
  }
  function cnToInt(s) {
    s = String(s || "").replace(/^初/, "");
    if (!s) return 0;
    if (/^\d+$/.test(s)) return +s;
    let n = 0, cur = 0;
    for (const ch of s) {
      const d = DIG.indexOf(ch);
      if (d >= 0) cur = d;
      else if (ch === "十") {
        n += (cur || 1) * 10;
        cur = 0;
      } else if (ch === "廿") {
        n += 20;
        cur = 0;
      } else if (ch === "卅") {
        n += 30;
        cur = 0;
      }
    }
    return n + cur;
  }
  var dayOfYear = (t) => t.月序号 * 30 + t.日;
  function festivalState(t) {
    if (t.月序号 < 0 || !t.日) return { 今日: null, 将至: null };
    const d = dayOfYear(t);
    let 今日 = null, 将至 = null;
    for (const [m, day, 名, win, 氛围] of FESTIVALS) {
      const fd = m * 30 + day, diff = fd - d;
      if (Math.abs(diff) <= win) {
        今日 = { 名, 氛围 };
        break;
      }
      if (diff > 0 && diff <= 7 && (!将至 || diff < 将至.余日)) 将至 = { 名, 余日: diff };
    }
    return { 今日, 将至 };
  }
  function gateState(t, fest) {
    const h = t.时辰.replace(/时$/, "")[0] || "";
    if (!h) return { 文: "未知", cls: "" };
    if (GATE.开.includes(h)) return { 文: "坊门已开", cls: "" };
    if (fest && fest.今日 && fest.今日.名 === "上元") return { 文: "上元弛禁", cls: "mz-gain" };
    if (GATE.暮鼓.includes(h)) return { 文: "暮鼓将响", cls: "mz-red" };
    return { 文: "坊门已闭", cls: "mz-red" };
  }

  // src/06-state-mvu.js
  var lastStat = null;
  function setLastStat(v) {
    lastStat = v;
  }
  function currentStat() {
    if (lastStat) return lastStat;
    try {
      if (typeof getVariables === "function") {
        const v = getVariables({ type: "message", message_id: "latest" });
        if (v && v.stat_data) return v.stat_data;
      }
    } catch (e) {
      dbg("stat:latest", e);
    }
    try {
      if (typeof getAllVariables === "function") {
        const v = getAllVariables();
        if (v && v.stat_data) return v.stat_data;
      }
    } catch (e) {
      dbg("stat:all", e);
    }
    try {
      if (typeof getLastMessageId === "function" && getLastMessageId() === 0 && typeof getChatMessages === "function") {
        const m0 = getChatMessages(0, { include_swipes: true })[0];
        const sd = m0 && m0.swipes_data && m0.swipes_data[m0.swipe_id || 0];
        if (sd && sd.stat_data) return sd.stat_data;
      }
    } catch (e) {
      dbg("stat:swipe0", e);
    }
    return null;
  }
  var obj = (v) => v && typeof v === "object" && !Array.isArray(v) ? v : {};
  var str = (v) => v == null ? "" : String(v);
  var num = (v) => Math.max(0, Math.round(Number(v) || 0));
  var 贯 = (v) => Math.max(0, Math.round((Number(v) || 0) * 1e3) / 1e3);
  function readMVU(sdArg) {
    const sd = sdArg || currentStat() || {};
    const g = (p) => _.get(sd, p);
    const girls = {};
    CAST.forEach((n) => {
      const x = obj(g("核心女主." + n));
      girls[n] = { 灌顶位阶: str(x.灌顶位阶) || "待度欲种", 心声: str(x.心声).trim(), 回想: obj(x.回想) };
    });
    return {
      时空: { 时间: str(g("时空.时间")), 当前地界: str(g("时空.当前地界")), 已结算至: str(g("时空.已结算至")) },
      资粮: { 铜钱: 贯(g("资粮.铜钱")), 库藏: obj(g("资粮.库藏")), 罪业密簿: obj(g("资粮.罪业密簿")) },
      道场: { 宗风: str(g("道场.宗风")), 表殿等级: str(g("道场.表殿等级")) || "破败草庵", 敕额: g("道场.敕额") === true || g("道场.敕额") === "true", 地宫设施: obj(g("道场.地宫设施")) },
      教务: { 法事委托: obj(g("教务.法事委托")), 信众: num(g("教务.信众")), 上次法会: str(g("教务.上次法会")) },
      核心女主: girls,
      执事名册: obj(g("执事名册")),
      明妃录: obj(g("明妃录")),
      暗流: { 风波: str(g("暗流.风波")) || "低", 本月危机: str(g("暗流.本月危机")).trim() },
      系统: { 已解锁: (Array.isArray(g("系统.已解锁")) ? g("系统.已解锁") : []).map(str) },
      _empty: !sdArg && !currentStat()
    };
  }

  // src/css/tokens.js
  var A = ASSET_BASE;
  var tokens_default = `
/* ==== 配色（单主题：炭墨底＋象牙字＋界面旧金＋妖朱） ==== */
#mz-shell-root {
  /* 一次切断宿主 body 的继承（投影、字体平滑、字号、color-scheme 都从那来），壳要什么下面重新声明 */
  all: initial;
  /* 字阶九档，见 前端信息架构.md「字体与字阶」 */
  --fs-title: 28px; --ls-title: 14px;
  --fs-head: 20px; --ls-head: 5px;
  --fs-plaque: 14px; --ls-plaque: 6px;
  --fs-name: 15.5px; --ls-name: 3px;
  --fs-label: 12.5px; --ls-label: 3px;
  /* 正文字号＝断点基准×设置里的倍数；窄屏基准另见 phone.js */
  --fs-scale: 1;
  --fs-body: calc(17.5px * var(--fs-scale));
  --fs-read: 13.5px; --ls-read: .5px;
  --fs-tag: 12px; --ls-tag: 2px;
  --fs-btn: 13.5px; --ls-btn: 2px; --fs-btn-lg: 16px; --ls-btn-lg: 6px;
  /* 三档时长＋两条曲线，全前端不得另写数字，见 前端信息架构.md「动效」 */
  --t-fast: .16s; --t-mid: .28s; --t-slow: .48s;
  --ease-out: cubic-bezier(.22,.61,.36,1);
  --ease-paper: cubic-bezier(.16,.84,.3,1);
  /* ==== 炭墨黑金朱：四层黑／三档字／四档金／一种红，全壳颜色只许引用此处 ==== */
  --bg0: #0e0e0e;
  --bg1: #171716;
  --bg2: #0b0b0b;
  --bg3: #1c1c1a;
  --bg4: #232320;
  --txt: #e6dfcf;
  --txt-dim: #a39c8a;
  --txt-faint: #6b665a;
  --gold-say: #e3c47a;
  --gold-hi: #c4a563;
  --gold: #a68a4d;
  --gold-line: #5e5032;
  --gold-rgb: 166,138,77;
  --red: #e0362a;
  --red-soft: #b5281f;
  --red-rgb: 224,54,42;
  --on-red: #f6ecd8;
  --line: rgba(var(--gold-rgb), .28);
  --line-soft: rgba(var(--gold-rgb), .14);
  --scrim: rgba(0,0,0,.62);
  /* 底纹：灰度墨色云纹，只以 overlay 叠在底面（侧栏／顶栏／窗），纸面永不加 */
  --tex: url('${A}bg-ink.webp');
  --tex-op: .5;
  --read-col: 700px;
  --side-w: clamp(260px, 22vw, 420px);
  --top-h: 64px;
  --bar-tot: calc(60px + env(safe-area-inset-bottom, 0px));
  /* 断点走容器查询：外壳本身即视口，预览页可框定外壳尺寸直接看 */
  container-type: size; container-name: mz;
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
}
/* 底纹叠层：挂在带 .mz-tex 的面上，子元素须提到其上 */
.mz-tex { position: relative; isolation: isolate; }
.mz-tex::before { content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background: var(--tex) 0 0 / 1024px 1024px repeat; mix-blend-mode: overlay; opacity: var(--tex-op); }
.mz-tex > * { position: relative; z-index: 1; }
#mz-shell-root ::-webkit-scrollbar { width: 9px; height: 9px; }
#mz-shell-root ::-webkit-scrollbar-corner { background: transparent; }
#mz-shell-root ::-webkit-scrollbar-track { background: linear-gradient(90deg,
  transparent calc(50% - .5px), rgba(var(--gold-rgb), .25) calc(50% - .5px),
  rgba(var(--gold-rgb), .25) calc(50% + .5px), transparent calc(50% + .5px)); }
#mz-shell-root ::-webkit-scrollbar-thumb { min-height: 48px; border: 2px solid transparent;
  background-clip: border-box; border-radius: 5px;
  background-color: color-mix(in srgb, var(--gold) 62%, transparent); }
#mz-shell-root ::-webkit-scrollbar-thumb:hover { background-color: var(--gold); }
/* 禁用态光标总规则：表单件与钮走原生 disabled，非表单件走 .mz-off（.mz-lock／.mz-locked 同义） */
#mz-shell-root [disabled], #mz-shell-root .mz-off, #mz-shell-root .mz-lock, #mz-shell-root .mz-locked { cursor: not-allowed; }

`;

  // src/css/sides.js
  var sides_default = `
/* ==== 侧栏骨架 ==== */
.mz-side {
  width: var(--side-w); flex: none; display: flex; flex-direction: column;
  padding: 8px 11px 8px; gap: 12px; overflow: hidden;
  background: var(--bg0);
  border-right: 1px solid var(--line);
}

/* 栏头匾额（上下各一道金线，线内 3px 再各一道细金线） */
.mz-plaque {
  position: relative;
  flex: none; display: flex; align-items: center; justify-content: center;
  height: 44px; color: var(--gold-hi);
  font-size: var(--fs-plaque); letter-spacing: var(--ls-plaque); text-indent: var(--ls-plaque);   /* 抵消末字字距，题字真居中 */
  font-weight: 600;
  border-style: solid; border-color: var(--gold-line); border-width: 1px 0;
}
.mz-plaque::before, .mz-plaque::after { content: ''; position: absolute; left: 0; right: 0; height: 1px;
  background: rgba(var(--gold-rgb), .35); }
.mz-plaque::before { top: 3px; }
.mz-plaque::after { bottom: 3px; }

/* ==== 舆图缩略（侧栏舆图一组） ==== */
#mz-minimap { flex: none; cursor: pointer; transition: translate var(--t-fast) var(--ease-out); }
#mz-minimap:hover { translate: 0 -2px; }
#mz-minimap .mz-map-wrap { position: relative; border: 1px solid var(--gold-line); }
#mz-minimap .mz-map-wrap img { width: 100%; filter: brightness(.86) saturate(.85); }
/* 图内暗角压边，钉子提到暗角之上 */
#mz-minimap .mz-map-wrap::after { content: ''; position: absolute; inset: 0; pointer-events: none;
  box-shadow: inset 0 0 40px rgba(0,0,0,.55); }
/* 坐标对应 map-panorama.webp 上的南郊寺庙，换图必须重标 */
#mz-minimap .mz-map-pin { position: absolute; z-index: 1; left: 54%; top: 85%; width: 9px; height: 9px; border-radius: 50%;
  background: var(--red); border: 1.5px solid var(--on-red); box-shadow: 0 0 6px var(--red); }
#mz-minimap .mz-map-pin::after { content: attr(data-label); position: absolute; left: 13px; top: -4px;
  font-size: 10.5px; letter-spacing: 1px; color: var(--txt-dim); white-space: nowrap;
  background: var(--bg3); padding: 1px 5px; }
/* ==== 舆图下状态整表：地界／(五读数 dup)／风波／灭佛大势带进度条，行式统一 ==== */
#mz-minimap .mz-doom { background: color-mix(in srgb, var(--bg0) 60%, #000);
  border: 1px solid var(--gold-line); border-top: 0; padding: 6px 10px 8px; }
.mz-doom .mz-sr-row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  font-size: 12.5px; line-height: 1.9; letter-spacing: 2px; color: var(--txt-dim); white-space: nowrap; }
.mz-doom .mz-sr-row + .mz-sr-row { border-top: 1px solid rgba(var(--gold-rgb), .12); }
.mz-doom .mz-sr-row span { flex: none; }
.mz-doom .mz-sr-row b { min-width: 0; text-align: right; letter-spacing: .5px; font-weight: 500;
  color: var(--txt); overflow: hidden; text-overflow: ellipsis; }
.mz-doom .mz-sr-row b.mz-gain { color: var(--gold-hi); }
.mz-doom .mz-sr-row b.mz-red { color: var(--red); }
.mz-doom .mz-sr-row b.mz-dim { color: var(--txt-faint); opacity: .6; }
/* dup：顶栏已有的五项，桌面隐藏、仅手机端补显 */
.mz-doom .mz-sr-dup { display: none; }
/* 灭佛大势：一行「名／年号」＋当年国策小字＋通栏进度条 */
.mz-doom .mz-doom-row { margin-top: 3px; padding-top: 5px; border-top: 1px solid rgba(var(--gold-rgb), .12); }
.mz-doom-evt { font-size: 11.5px; letter-spacing: 1px; color: var(--gold); margin: 1px 0 5px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mz-doom .mz-bar { height: 5px; background: rgba(var(--gold-rgb), .15); }
.mz-doom .mz-bar i { display: block; height: 100%; background: var(--gold); }

/* ==== 玩法入口目录（一列六条，条间一道自左向右淡出的金线） ==== */
.mz-nav { flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 1px; padding-top: 2px; overflow-y: auto; }
.mz-nav-item { position: relative; display: flex; align-items: center; gap: 10px; padding: 10px 9px 10px 8px; cursor: pointer;
  border-left: 3px solid transparent;
  transition: background var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out); }
.mz-nav-item + .mz-nav-item::before { content: ''; position: absolute; left: 8px; right: 6px; top: 0; height: 1px;
  background: linear-gradient(90deg, rgba(var(--gold-rgb), .22), transparent 88%); }
.mz-nav-ico { width: 26px; height: 26px; flex: none; display: flex; align-items: center; justify-content: center; }
.mz-nav-ico img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 2px 3px rgba(0,0,0,.5)); }
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

`;

  // src/css/story.js
  var A2 = ASSET_BASE;
  var story_default = `
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
.mz-opt:hover .mz-num { color: var(--bg0); background: var(--gold-hi); border-color: var(--gold-hi); }

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
  font-family: inherit; font-size: 12.5px; letter-spacing: 1px; color: var(--gold-hi); padding: 3px 4px;
  transition: color var(--t-fast) var(--ease-out); }
/* 新语红点：楼尾整行共用一枚，不逐人配点 */
.mz-ff-side > .mz-dot { width: 7px; height: 7px; border-radius: 50%; flex: none; background: var(--red);
  box-shadow: 0 0 6px var(--red); animation: breathe 2.6s ease-in-out infinite; }
@keyframes breathe { 0%,100% { opacity: .95; } 50% { opacity: .4; } }
.mz-ff-voice:hover, .mz-ff-voice.mz-open { color: var(--txt); }
/* 心声卡：花押叠印右下角 */
.mz-vc { display: none; gap: 14px; padding: 17px 22px 16px; margin: 0 0 22px;
  position: relative; background: var(--bg3); border: 1px solid var(--line);
  filter: drop-shadow(0 5px 14px rgba(0,0,0,.28)); }
.mz-vc.mz-show { display: flex; animation: mz-reveal var(--t-slow) var(--ease-paper) both; }
/* 花押：白芷＝苏白芷、石榴＝萧夜沉、幽兰＝裴清砚、桃花＝叶玄薇 */
.mz-vc::after { content: ''; position: absolute; right: 24px; bottom: 16px; width: 44px; height: 44px;
  background: var(--stamp) center / contain no-repeat;
  opacity: .55; mix-blend-mode: normal; pointer-events: none; }
.mz-vc.mz-su   { --stamp: url('${A2}stamp-angelica.webp'); }
.mz-vc.mz-xiao { --stamp: url('${A2}stamp-pomegranate.webp'); }
.mz-vc.mz-pei  { --stamp: url('${A2}stamp-orchid.webp'); }
.mz-vc.mz-ye   { --stamp: url('${A2}stamp-peach.webp'); }
.mz-vc-img { flex: none; width: 118px; aspect-ratio: 832 / 1216; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg3);
  outline: 1px solid var(--line); }
.mz-vc-img span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: var(--txt-faint); }
.mz-vc-main { flex: 1; min-width: 0; }
.mz-vc-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 7px;
  font-size: 14.5px; letter-spacing: 2px; font-weight: 600; color: var(--txt); }
.mz-vc-tabs { font-size: 11.5px; letter-spacing: 2px; color: var(--txt-faint); font-weight: 400; }
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

/* ==== 顶栏（账头：整条对齐正文列——时辰左缘落在列左缘，六项读数跟在后面；纸上只此一条横带） ==== */
/* 顶栏本身不留左内边距：读数框的百分比按顶栏内容盒算，--col-side 里的 100% 才等于整张纸宽 */
.mz-topbar { flex: none; height: var(--top-h); display: flex; align-items: center; gap: 22px; padding: 0;
  background: var(--bg0); border-bottom: 1px solid var(--line); }
/* 工具栏是顶栏末子项，右留 30 顶替顶栏右内边距 */
.mz-topbar > :last-child { margin-right: 30px; }
/* 诸务钮：桌面端不存在，窄屏才是落下面板（侧栏）的开关；描线图标，与右侧工具栏同族 */
.mz-tb-plaque { display: none; flex: none; align-items: center; justify-content: center;
  width: 30px; height: 30px; border: none; background: none; cursor: pointer; padding: 6px; }
.mz-tb-plaque svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
/* overflow:hidden 把溢出读数裁在读数框内；工具栏是同排 flex 项，读数够不到图标（margin 只留一道间隙） */
.mz-tb-face { flex: 1; min-width: 0; display: flex; align-items: center; gap: 22px;
  padding-left: var(--col-side); margin-right: 16px; overflow: hidden; height: 100%; }
.mz-tb-set { display: flex; align-items: center; gap: 22px; min-width: 0; }
/* 时辰与六项同式同字阶（上「时辰」标签，下「日期 时辰」） */
.mz-tb-time { position: relative; flex: none; display: flex; flex-direction: column; align-items: center; gap: 3px;
  font-size: 11px; line-height: 1.2; letter-spacing: 2px; text-indent: 2px; color: var(--gold); white-space: nowrap; }
.mz-tb-time b { font-size: 14px; letter-spacing: .5px; text-indent: 0; color: var(--txt); font-weight: 600; }
.mz-tb-time.mz-dim { color: var(--txt-faint); font-weight: 500; }
.mz-tb-i { position: relative; flex: none; display: flex; flex-direction: column; align-items: center; gap: 3px;
  font-size: 11px; line-height: 1.2; letter-spacing: 2px; text-indent: 2px; color: var(--gold); white-space: nowrap; }
/* 分隔竖线挂在项自己身上，项一隐线也跟着走 */
.mz-tb-i::before { content: ''; position: absolute; left: -11px; top: 50%; translate: 0 -50%;
  width: 1px; height: 26px; background: rgba(var(--gold-rgb), .22); }
/* 读数三态：平象牙／利金（钱、人、节令当日、弛禁）／危红（宵禁、常例临期、风波高），灰是无 */
.mz-tb-i b { font-size: 14px; letter-spacing: .5px; text-indent: 0; color: var(--txt); font-weight: 600; }
.mz-tb-i b.mz-gain { color: var(--gold-hi); }
.mz-tb-i b.mz-red { color: var(--red); }
.mz-tb-i b.mz-dim { color: var(--txt-faint); font-weight: 500; }
/* 顶栏瘦身档：读数挤到工具栏前，舍常例与节令（更新最少），保住时辰／宵禁／铜钱／信众／风波 */
@container mz (max-width: 1300px) { .mz-tb-thin { display: none; } }

/* 槽宽 9px（见 tokens.js）两边各占一道，从总留白里扣掉，正文列才与书写区左右对齐 */
#mz-paper { flex: 1; min-height: 0; overflow-y: auto; scrollbar-gutter: stable both-edges;
  padding: 48px calc(var(--col-side) - 9px) 32px; }
.mz-turn { margin-bottom: 22px; }
.mz-turn.mz-gm { line-height: 2.0; font-size: var(--fs-body); letter-spacing: .3px; color: var(--txt); line-break: strict; text-wrap: pretty; text-align: justify; }
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
#mz-delbar button:not([disabled]):hover { color: var(--bg0); background: var(--gold-hi); border-color: var(--gold-hi); }
/* 删楼是不可逆的动作，确认钮走朱 */
#mz-delbar button.mz-danger { color: var(--red); border-color: rgba(var(--red-rgb), .55); }
#mz-delbar button.mz-danger:not([disabled]):hover { color: var(--on-red); background: var(--red); border-color: var(--red); }
#mz-delbar button[disabled] { opacity: .45; }
/* 木鱼中心对齐敕印中心：敕印宽 46 右缘贴 col-side，木鱼宽 34，故左移 23+17 */
#mz-jump { position: absolute; z-index: 5; bottom: 84px; left: calc(100% - var(--col-side) - 40px);
  width: 34px; height: 62px; border: none; padding: 0; cursor: pointer; display: none;
  background: url('${A2}hanging-fish.webp') center / contain no-repeat;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,.4));
  transform-origin: top center; transition: filter var(--t-fast) var(--ease-out), rotate var(--t-mid) var(--ease-out); }
#mz-jump.mz-show { display: block; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
#mz-jump:hover { filter: drop-shadow(0 6px 12px rgba(0,0,0,.55)); rotate: 4deg; }

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
  background: var(--red);
  color: var(--gold-say); cursor: pointer;
  font-family: inherit; font-size: 20px; font-weight: 600;
  display: flex; align-items: center; justify-content: center;
  box-shadow: inset 0 0 0 2px var(--red-soft), inset 0 0 0 3px var(--gold), 0 0 24px rgba(var(--red-rgb), .45);
  text-shadow: 0 1px 2px rgba(0,0,0,.6), 0 0 1px rgba(0,0,0,.4);
  filter: drop-shadow(0 8px 18px rgba(0,0,0,.45));
  transition: translate var(--t-fast) var(--ease-out), filter var(--t-fast) var(--ease-out);
}
#mz-send:hover { filter: drop-shadow(0 12px 24px rgba(0,0,0,.6)); translate: 0 -2px; }
#mz-send:active { translate: 0 2px; }

/* ==== 危机小字：脚行右块与心声同行，朱字；展开行走 mz-ff-detail ==== */
.mz-ff-cbtn { color: var(--red); }
.mz-ff-cbtn.mz-open { text-decoration: underline; text-underline-offset: 5px; text-decoration-color: rgba(var(--red-rgb), .5); }

`;

  // src/css/lift.js
  var lift_default = `
/* ==== 浮窗（墨底＋竖排悬签＋内圈暗金细线） ==== */
/* 壳内浮层一律 absolute 以壳根为包含块（fixed 会以酒馆带 transform 的 html 为包含块，手机端高 0） */
#mz-lift { position: absolute; inset: 0; z-index: 40; background: var(--scrim); backdrop-filter: blur(3px);
  display: none; align-items: center; justify-content: center; }
#mz-lift.mz-show { display: flex; }
/* 尺寸走百分比而非 vw／vh：浮窗是壳根 inset:0 的子元素，壳被框小时（预览页 ?vw=）vw 仍按真视口算 */
#mz-lift .mz-held { width: min(1000px, 94%); height: min(720px, 84%);
  position: relative; display: flex; flex-direction: column;
  background-color: var(--bg2);
  filter: drop-shadow(0 3px 5px rgba(0,0,0,.4)) drop-shadow(0 24px 48px rgba(0,0,0,.55)); }
#mz-lift .mz-held::before { content: ''; position: absolute; inset: 9px; pointer-events: none; z-index: 1;
  border: 1px solid rgba(var(--gold-rgb),.45); }
/* 题签悬出纸上缘；窗内排版须避让左上题签区（宽约46px、入纸约70px） */
#mz-lift .mz-held h3 { position: absolute; top: -34px; left: 26px; z-index: 2;
  writing-mode: vertical-rl; letter-spacing: 6px; padding: 31px 13px;
  font-size: 15px; font-weight: 600; color: var(--gold-hi);
  background: var(--bg0);
  box-shadow: inset 0 0 0 1px var(--gold-hi), 0 6px 14px rgba(0,0,0,.6); }
#mz-lift .mz-held .mz-held-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; padding: 30px 34px 26px; }
/* 收窗叉桌面端不显（点遮罩即关），手机端与开坛窗的显隐见 phone.js */
#mz-lift .mz-lift-x { display: none; position: absolute; top: 10px; right: 10px; z-index: 3; width: 34px; height: 34px; padding: 8px;
  border: none; background: none; cursor: pointer; color: var(--txt-faint); opacity: .55; transition: opacity var(--t-fast) var(--ease-out); }
#mz-lift .mz-lift-x:hover { opacity: .95; }
#mz-lift .mz-lift-x svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
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
#mz-lift.mz-gate .mz-held .mz-held-body { padding: 16px 44px 30px; }
.mz-win.mz-gate-win { gap: 22px; }
.mz-gate-win::before { content: ''; display: block; height: 1px; margin: 0 8% 4px; background: linear-gradient(90deg, transparent, var(--line) 20%, var(--line) 80%, transparent); }
.mz-gate-win h4 { margin: 0 0 12px; font-size: var(--fs-label); font-weight: 400; letter-spacing: var(--ls-label); color: var(--txt-faint); display: flex; align-items: center; gap: 12px; }
.mz-gate-win h4::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--line), transparent); }
/* 两步同一副骨架：左整幅 3:2 图、右文或右格，两列 minmax(0,…) 图的固有宽不许撑列 */
.mz-gate-body { display: flex; flex-direction: column; flex: 1; min-height: 0; overflow-y: auto; }
.mz-gate-two { display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); gap: 24px; align-items: stretch; flex: none; }
.mz-gate-img { min-width: 0; aspect-ratio: 3 / 2; background: var(--bg3) center / cover no-repeat; box-shadow: inset 0 0 0 1px var(--line); }
/* 右列走卷题＋正文两档：题名 20px，简介同正文字号 */
.mz-gate-text { display: flex; flex-direction: column; gap: 12px; min-width: 0; padding-top: 2px; }
.mz-gate-text b { font-size: var(--fs-head); letter-spacing: var(--ls-head); color: var(--txt); font-weight: 600; }
.mz-gate-text p { margin: 0; font-size: var(--fs-body); line-height: 2; color: var(--txt-dim); text-align: justify; }
.mz-gate-text .mz-gate-nav { margin-top: auto; }
.mz-gate-nav { display: flex; align-items: center; justify-content: flex-start; gap: 14px; font-size: 12.5px; letter-spacing: 2px; color: var(--txt-faint); margin-top: 2px; }
.mz-gate-nav button { border: none; background: none; cursor: pointer; color: var(--txt-dim); width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; }
.mz-gate-nav button svg { width: 16px; height: 16px; }
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
`;

  // src/css/windows.js
  var A3 = ASSET_BASE;
  var windows_default = `
/* ==== 浮窗窗内通用件（页签／经折页／拜帖卡／虚位／朱印钮） ==== */
/* 窗内排版须让出左上题签区：列表窗左留边沟，舆图窗图面压在签下无妨 */
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
.mz-folio { flex: 1; min-height: 0; overflow-y: auto; padding: 14px 16px;
  background: var(--bg3); border: 1px solid var(--line); }
.mz-grid { display: grid; gap: 12px; align-content: start; grid-auto-rows: max-content; }
.mz-grid.mz-c2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.mz-grid.mz-c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.mz-grid.mz-c4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.mz-card { position: relative; padding: 21px 23px 20px;
  border: 1px solid var(--line); background: var(--bg3); box-shadow: 0 1px 2px rgba(0,0,0,.12);
  font-size: 14.5px; line-height: 1.8; color: var(--txt-dim); min-height: 68px; }
.mz-card b { display: block; font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--txt); font-weight: 600; margin-bottom: 2px; }
.mz-card .mz-k { color: var(--txt-faint); letter-spacing: 1px; margin-right: 6px; }
.mz-card .mz-tag { position: absolute; top: 9px; right: 12px; font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); }
.mz-card .mz-tag.mz-q1 { color: var(--txt-faint); } .mz-card .mz-tag.mz-q2 { color: var(--gold); } .mz-card .mz-tag.mz-q4 { color: var(--gold-hi); }
.mz-card .mz-tag.mz-gold { color: var(--gold); }
.mz-card.mz-empty { display: flex; align-items: center; justify-content: center; background: none; box-shadow: none;
  border: 1px dashed var(--line); padding: 21px 23px 20px; color: var(--txt-faint); letter-spacing: 4px; text-indent: 4px; font-size: 14px; }
.mz-card.mz-empty.mz-lotus { background: url('${A3}icon-lotus.webp') center / 34px no-repeat; background-color: transparent; }
.mz-card.mz-empty.mz-lotus::before { content: ''; position: absolute; inset: 0; background: color-mix(in srgb, var(--bg3) 55%, transparent); }
.mz-card.mz-empty.mz-lotus span { position: relative; }
.mz-card.mz-empty.mz-lotus span { opacity: .9; background: color-mix(in srgb, var(--bg3) 80%, transparent); padding: 0 4px; }
.mz-card .mz-seal-btn { position: absolute; right: 12px; bottom: 10px; }
.mz-card.mz-up .mz-seal-btn { position: static; }
.mz-card .mz-up-foot { display: flex; align-items: center; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
.mz-card .mz-up-foot .mz-price { font-size: 12px; margin-left: 6px; opacity: .85; }
.mz-card.mz-up.mz-on { border-color: var(--red); box-shadow: inset 0 0 0 1px var(--red), 0 1px 2px rgba(0,0,0,.12); }
/* 设施卡：图在上（整幅 3:2，自拟名留素纸底）、名行／用途／奇效／升级底行，同行五行 subgrid 对齐 */
.mz-cave-grid { grid-auto-rows: auto; }
.mz-card.mz-fac { display: grid; grid-template-rows: subgrid; grid-row: span 5; row-gap: 4px; }
.mz-fac-pic { aspect-ratio: 3 / 2; overflow: hidden; border: 1px solid var(--line-soft); background: rgba(var(--gold-rgb),.08); margin-bottom: 4px; }
.mz-fac-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.mz-fac-top { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.mz-fac-top b { margin-bottom: 0; }
.mz-card.mz-fac .mz-tag { position: static; flex: none; }
.mz-card.mz-fac .mz-up-foot { align-self: end; margin-top: 4px; }
/* 兴造契纸头：名称通栏；选中蓝图时下一行左整幅图、右用途框撑到与图齐高 */
.mz-build-head { display: grid; grid-template-columns: minmax(0, 1fr); gap: 11px 16px; }
.mz-build-head > label:first-child { grid-column: 1 / -1; }
.mz-build-head.mz-has-pic { grid-template-columns: 320px minmax(0, 1fr); }
.mz-build-pic { aspect-ratio: 3 / 2; overflow: hidden; border: 1px solid var(--line-soft); align-self: start; }
.mz-build-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.mz-build-pic img[data-g] { display: none; }
.mz-build:not(:has(input[name="档次"]:checked)) .mz-build-pic img[data-g="粗成"],
.mz-build:has(input[name="档次"][value="粗成"]:checked) .mz-build-pic img[data-g="粗成"],
.mz-build:has(input[name="档次"][value="精工"]:checked) .mz-build-pic img[data-g="精工"],
.mz-build:has(input[name="档次"][value="天工"]:checked) .mz-build-pic img[data-g="天工"] { display: block; }
.mz-build-head.mz-has-pic .mz-build-use { min-width: 0; }
.mz-build-head.mz-has-pic .mz-build-use textarea { flex: 1; height: auto; }
/* 法会页顶横幅：图按横向长条构图出、入库即 3:1，页顶整条铺开 */
.mz-rite-pic { flex: none; aspect-ratio: 4 / 1; overflow: hidden; border: 1px solid var(--line-soft); }
.mz-rite-pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.mz-loan-pic, .mz-page-pic { margin-bottom: 14px; }
.mz-sin .mz-loan-pic, .mz-sin .mz-page-pic { border-color: rgba(var(--red-rgb),.45); }
.mz-folio.mz-fill > .mz-page-pic + .mz-wh { margin-top: 0; }
/* 兴造：左蓝图清单／右表单，点清单一行右侧即填 */
.mz-bplist { flex: none; width: 212px; gap: 6px; }
.mz-bps { display: flex; flex-direction: column; gap: 3px; }
.mz-bp { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 4px 10px; font-family: inherit; text-align: left; cursor: pointer;
  border: 1px solid var(--line); background: var(--bg3); transition: border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-bp b { font-size: 14.5px; letter-spacing: 2px; color: var(--txt); font-weight: 600; }
.mz-bp .mz-tag { font-size: 12px; letter-spacing: 1px; color: var(--txt-faint); white-space: nowrap; }
.mz-bp .mz-tag.mz-q1 { color: var(--txt-faint); } .mz-bp .mz-tag.mz-q2 { color: var(--gold); } .mz-bp .mz-tag.mz-q4 { color: var(--gold-hi); }
.mz-bp:not(.mz-off):hover { border-color: rgba(var(--red-rgb), .5); }
.mz-bp.mz-on { border-color: var(--red); background: rgba(var(--red-rgb),.07); box-shadow: inset 0 0 0 1px var(--red); }
.mz-bp.mz-off { opacity: .55; }
.mz-bp.mz-off.mz-in { opacity: 1; border-style: dashed; border-color: rgba(var(--gold-rgb),.45); }
.mz-bp.mz-in b { color: var(--txt-dim); }
.mz-bp.mz-in .mz-tag { color: var(--gold); }
/* 朱印钮（全局按钮语言） */
.mz-seal-btn { border: none; cursor: pointer; white-space: nowrap; font-family: inherit; font-size: var(--fs-btn); letter-spacing: var(--ls-btn); text-indent: var(--ls-btn);
  color: var(--on-red); background: var(--red); padding: 4px 9px; box-shadow: inset 0 0 0 1px rgba(var(--gold-rgb),.35), 0 2px 4px rgba(0,0,0,.35);
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
.mz-form .mz-choices { display: flex; gap: 8px; align-items: center; }
.mz-form .mz-price { font-size: 12px; letter-spacing: .5px; opacity: .85; margin-left: 3px; }
.mz-form ::placeholder { color: var(--txt-faint); }
/* 契纸：一切记账表单的容器，整列竖排、控件撑满、大号朱印钮收尾 */
.mz-sheet { flex-direction: column; align-items: stretch; gap: 11px; padding: 12px 18px 12px;
  border: 1px solid var(--line); background: var(--bg3); }
.mz-sheet input, .mz-sheet textarea { width: 100%; box-sizing: border-box; }
.mz-sheet .mz-none { padding: 0; font-size: 13px; }
.mz-build { flex: 1; min-width: 0; }
/* 经折页竖排：行取内容高（两列取高者、契纸尾行沉底），余白留在页底，篮子长起来才由经折页滚 */
.mz-folio.mz-fill { display: flex; flex-direction: column; gap: 12px; }
.mz-folio.mz-fill > .mz-wrow { flex: none; align-items: stretch; }
.mz-folio.mz-fill > .mz-grid { flex: 1; }
.mz-form .mz-grow { flex: 1; min-width: 0; }
/* 债契：放贷契纸横排一行铺顶 */
.mz-loan { flex: none; }
.mz-loan-row { display: flex; align-items: flex-end; gap: 18px; }
.mz-loan-row label:not(.mz-grow) input { width: 130px; }
.mz-loan-row .mz-build-foot { margin: 0; }
/* 工坊：左作坊选卡竖排／右契纸撑满 */
.mz-shoplist { flex: none; width: 250px; gap: 8px; }
.mz-picks.mz-col { grid-template-columns: minmax(0, 1fr); }
/* 作坊卡：左侧作坊小图占满四行 */
.mz-pick.mz-shop { display: grid; grid-template-columns: 72px minmax(0, 1fr); column-gap: 12px; row-gap: 2px; align-content: start; }
.mz-shop-pic { grid-row: 1 / span 4; width: 72px; aspect-ratio: 1; object-fit: cover; display: block; border: 1px solid var(--line-soft); align-self: start; }
.mz-craft { flex: 1; min-width: 0; }
/* 效用框定高三行：效用文案一两句即止，不吃剩余高度（弹性高会被长起来的篮子先压） */
.mz-craft .mz-grow { flex: none; }
.mz-craft .mz-grow textarea { height: 88px; }
.mz-form textarea { border: none; border-bottom: 1px solid var(--line); background: transparent; outline: none; resize: none;
  font-family: inherit; font-size: 15.5px; line-height: 1.7; color: var(--txt); padding: 3px 2px; caret-color: var(--gold-hi); }
.mz-sheet .mz-wh { margin-top: 2px; }
.mz-picks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.mz-pick { position: relative; display: flex; flex-direction: column; gap: 2px; padding: 9px 14px 8px; cursor: pointer; letter-spacing: 1px;
  border: 1px solid var(--line); background: var(--bg3); color: var(--txt-dim); transition: border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-pick input { position: absolute; opacity: 0; width: 0; height: 0; }
.mz-pick b { font-size: 16px; letter-spacing: 3px; color: var(--txt); font-weight: 600; }
.mz-pick .mz-price { margin: 0; font-size: 13px; color: var(--gold); }
.mz-pick small { font-size: 12px; letter-spacing: .5px; color: var(--txt-faint); line-height: 1.5; }
.mz-pick:not(.mz-off):hover { border-color: rgba(var(--red-rgb), .5); }
.mz-pick:has(input:checked) { border-color: var(--red); background: rgba(var(--red-rgb),.07); box-shadow: inset 0 0 0 1px var(--red); }
/* 门槛句（.mz-cond）不随卡片一起淡，灰卡上最该看见的正是它 */
.mz-pick.mz-off { border-color: var(--line-soft); }
.mz-pick.mz-off > :not(.mz-cond) { opacity: .5; }
.mz-pick .mz-cond { color: var(--gold); }
.mz-pick.mz-off .mz-cond { color: var(--gold-hi); }
/* 奇效栏只属天工：选中天工才展开；升天工契纸（mz-live）常显 */
.mz-form .mz-wonder { display: none; }
.mz-build:has(input[value="天工"]:checked) .mz-wonder, .mz-form .mz-wonder.mz-live { display: flex; }
.mz-wonder small { font-size: 11.5px; letter-spacing: .5px; color: var(--txt-faint); margin-top: 2px; }
.mz-build-foot { display: flex; align-items: center; justify-content: flex-end; gap: 14px; margin-top: auto; }

/* ==== 待呈之事（表单底下的篮） ==== */
.mz-basket { flex: none; padding-top: 10px; border-top: 1px dashed var(--line); }
.mz-basket .mz-build-foot { margin-top: 10px; }
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
.mz-store-row { display: grid; grid-template-columns: 104px minmax(0, 1fr); gap: 12px; align-items: start; padding: 12px 0; }
.mz-store-row + .mz-store-row { border-top: 1px solid var(--line-soft); }
.mz-store-row:first-child { padding-top: 0; }
.mz-store-head { display: flex; flex-direction: column; align-items: center; gap: 4px; padding-top: 2px; font-size: 15px; letter-spacing: 3px; text-indent: 3px; color: var(--txt-dim); }
.mz-store-head b { color: var(--gold-hi); font-weight: 600; font-size: 13px; letter-spacing: 1px; text-indent: 1px; }
.mz-store-pic { width: 72px; height: 72px; object-fit: cover; display: block; border: 1px solid var(--line-soft); margin-bottom: 4px; }
.mz-store-row .mz-card.mz-wide { grid-column: span 2; }
.mz-store-spare { align-items: center; }
.mz-store-spare .mz-store-head { flex-direction: row; justify-content: center; gap: 8px; padding-top: 0; }
.mz-store .mz-card.mz-empty { min-height: 0; padding: 9px 23px 8px; }
/* 浮窗定高 620，行撑满余高，回想在列内滚动 */
.mz-wrow { display: flex; gap: 16px; flex: 1; min-height: 0; align-items: flex-start; }
.mz-wrow > .mz-wcol { align-self: stretch; }
.mz-wcol { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
/* 空态短句 */
.mz-none { color: var(--txt-faint); letter-spacing: 3px; font-size: 14px; padding: 6px 2px; }

/* 同心缕：女主切换走顶部页签，位阶作页签小字 */
.mz-portrait { flex: none; width: 290px; display: flex; flex-direction: column; gap: 8px; }
.mz-portrait .mz-pic { aspect-ratio: 832 / 1216; width: 100%; background: var(--bg3) center / cover no-repeat;
  outline: 1px solid var(--line); outline-offset: -3px; display: flex; align-items: center; justify-content: center; }
.mz-portrait .mz-pic span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: var(--txt-faint); }
/* 立绘列总高＝列宽×(1216/832)×7/5＋1.3px（主图＋恒两行缩略），浮窗随壳缩矮时以行高反解列宽 */
@container mz (width > 900px) {
  .mz-bond-win .mz-wrow { container-type: size; }
  .mz-bond-win .mz-portrait { width: min(290px, calc((100cqh - 4px) / 2.047)); }
}
.mz-thumbs { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 5px; }
.mz-thumbs i { width: auto; aspect-ratio: 832 / 1216; background: var(--bg3); outline: 1px solid var(--line); cursor: pointer; opacity: .7; }
.mz-thumbs i.mz-on { opacity: 1; outline-color: var(--red); }
.mz-thumbs i:hover { opacity: 1; outline-color: rgba(var(--red-rgb), .5); }
/* 锁定格：暗底居中位阶二字，DOM 内无图片 URL */
.mz-thumbs i.mz-lock { opacity: 1; background: var(--bg0); outline-color: var(--line-soft);
  display: flex; align-items: center; justify-content: center; }
.mz-thumbs i.mz-lock span { font-size: 11px; letter-spacing: 2px; color: var(--txt-dim); writing-mode: vertical-rl; }
.mz-thumbs i.mz-lock:hover { opacity: 1; }
/* 位阶莲瓣：四瓣对应一灌至四灌，待度零瓣，未亮去色压淡 */
.mz-lotus-row { display: flex; align-items: center; gap: 10px; font-size: 14.5px; letter-spacing: 1px; color: var(--txt-dim); flex: none; }
.mz-lotus-row i { width: 26px; height: 28px; background: url('${A3}lotus-rank.webp') center / contain no-repeat;
  filter: grayscale(1) opacity(.32); }
.mz-lotus-row i.mz-lit { filter: none; }
.mz-lotus-row b { color: var(--gold-hi); font-weight: 600; margin-left: auto; }
.mz-voice-sheet { flex: none; position: relative; min-height: 180px; box-sizing: content-box; padding: 14px 18px 16px; background: var(--bg3); border: 1px solid var(--line);
  font-size: 15px; line-height: 2; color: var(--txt-dim); filter: drop-shadow(0 3px 8px rgba(0,0,0,.22)); }
.mz-voice-sheet::after { content: ''; position: absolute; right: 16px; bottom: 10px; width: 36px; height: 36px;
  background: var(--stamp) center / contain no-repeat; opacity: .55; mix-blend-mode: normal; }
.mz-timeline { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 2px 4px 14px; border-left: 2px solid var(--line-soft); }
.mz-timeline .mz-memo { position: relative; margin-bottom: 12px; font-size: 14.5px; line-height: 1.85; color: var(--txt-dim); }
.mz-timeline .mz-memo::before { content: ''; position: absolute; left: -19px; top: 9px; width: 7px; height: 7px; border-radius: 50%;
  background: var(--gold); box-shadow: 0 0 0 2px var(--bg3); }
.mz-timeline .mz-memo b { color: var(--gold-hi); font-weight: 600; letter-spacing: 1px; margin-right: 8px; }
.mz-timeline .mz-memo small { color: var(--txt-faint); letter-spacing: .5px; }
.mz-su   { --stamp: url('${A3}stamp-angelica.webp'); }
.mz-xiao { --stamp: url('${A3}stamp-pomegranate.webp'); }
.mz-pei  { --stamp: url('${A3}stamp-orchid.webp'); }
.mz-ye   { --stamp: url('${A3}stamp-peach.webp'); }

.mz-names button.mz-off { opacity: .45; }
.mz-names button.mz-off:hover { color: inherit; }

/* 营造表殿页：三阶横排一阶一幅画，格撑满余高；格内五行走 subgrid，三格同一行位对齐；未启格压暗 */
.mz-halls { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-rows: auto auto auto auto 1fr; gap: 14px; flex: 1; min-height: 0; }
.mz-hall { display: grid; grid-template-rows: subgrid; grid-row: span 5; row-gap: 6px; padding-bottom: 12px; color: var(--txt-faint);
  border: 1px solid var(--line); background: var(--bg3); }
.mz-hall.mz-cur { border-color: var(--red); background: rgba(var(--red-rgb),.07); box-shadow: inset 0 0 0 1px var(--red); }
.mz-hall-pic { aspect-ratio: 3 / 2; overflow: hidden; border-bottom: 1px solid var(--line-soft); margin-bottom: 4px; }
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
.mz-hall-note { margin-top: auto; padding-top: 12px; border-top: 1px dashed var(--line-soft);
  font-size: 13px; letter-spacing: 1px; line-height: 1.9; color: var(--txt-faint); }

/* 罪业：放贷注释行，规则左、账目右 */
.mz-loan-note { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 16px; font-size: 13px; letter-spacing: 1px; color: var(--txt-faint); }
.mz-loan-note span:last-child { flex: none; color: var(--txt-dim); }

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
/* 风波印：方框＋三档字色 */
.mz-atlas .mz-storm { position: absolute; top: 8px; right: 8px; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--gold-line);
  font-size: 16px; letter-spacing: 0; font-weight: 700; color: var(--txt-dim); }
.mz-atlas .mz-storm.mz-low { color: var(--txt-dim); } .mz-atlas .mz-storm.mz-mid { color: var(--gold-hi); } .mz-atlas .mz-storm.mz-high { color: var(--red); }
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
.mz-doomline .mz-yrs { display: flex; gap: 4px; }
.mz-doomline .mz-yrs span { flex: 1; text-align: center; padding: 4px 0; border: 1px solid var(--line-soft); }
.mz-doomline .mz-yrs span.mz-cur { color: var(--gold-hi); border-color: var(--gold); background: rgba(var(--gold-rgb),.12); font-weight: 600; }
.mz-doomline .mz-yrs span.mz-past { background: var(--bg4); }

/* ==== 设置窗 ==== */
.mz-set-group { display: flex; flex-direction: column; gap: 10px; }
.mz-set-lab { font-size: 13px; letter-spacing: 2px; color: var(--txt-faint); }
.mz-set-opt { position: relative; display: flex; align-items: center; padding: 11px 16px; cursor: pointer;
  font-size: 14.5px; letter-spacing: 1px; color: var(--txt-dim);
  border: 1px solid var(--line); background: var(--bg3);
  transition: border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-set-opt input { position: absolute; opacity: 0; width: 0; height: 0; }
.mz-set-opt:hover { border-color: rgba(var(--red-rgb), .5); }
.mz-set-opt:has(input:checked) { border-color: var(--red); background: rgba(var(--red-rgb),.07);
  box-shadow: inset 0 0 0 1px var(--red); color: var(--txt); }

`;

  // src/css/extras.js
  var extras_default = `
/* ==== 正文容器／编辑态／删除态／推演中／入口／变量树 ==== */
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
.mz-edit-btn:hover { color: var(--bg0); background: var(--gold); border-color: var(--gold); }
.mz-thinking { display: flex; align-items: center; gap: 10px; padding: 6px 0; margin-bottom: 14px; color: var(--txt-faint); opacity: .7; }
.mz-thinking .mz-rule { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--line)); }
.mz-thinking .mz-rule.mz-r { background: linear-gradient(90deg, var(--line), transparent); }
.mz-thinking img { width: 19px; height: 19px; animation: mz-smoke 2.4s ease-in-out infinite; }
@keyframes mz-smoke { 0%,100% { opacity: .5; translate: 0 0; rotate: -2deg; } 50% { opacity: 1; translate: 0 -2px; rotate: 2deg; } }
.mz-cursor::after { content: '▍'; color: var(--gold-hi); opacity: .6; animation: mz-blink 1s steps(2, jump-none) infinite; }
@keyframes mz-blink { 0% { opacity: .6; } 100% { opacity: 0; } }
#mz-delbar button.mz-armed { color: var(--on-red); background: var(--red); border-color: var(--red); }
#mz-entry { all: initial; position: fixed; z-index: 8999; display: none; box-sizing: border-box;
  direction: ltr; unicode-bidi: isolate; -webkit-locale: 'zh'; -webkit-tap-highlight-color: transparent;
  --fs-label: 12.5px; --ls-label: 3px; --t-fast: .16s; --ease-out: cubic-bezier(.22,.61,.36,1); }
#mz-entry { --bg0: #0e0e0e; --txt: #e6dfcf; --gold-hi: #c4a563; --gold-rgb: 166,138,77; --red: #e0362a; --on-red: #f6ecd8; }
#mz-entry.mz-tab { display: block; }
/* 入卷题签在壳外（all: initial），令牌在上一行自带一份 */
.mz-entry-tab { position: relative; display: flex; align-items: center; gap: 9px; cursor: pointer; padding: 6px 13px 6px 6px;
  font-family: 'Noto Serif SC','Source Han Serif SC','Songti SC','SimSun',serif; font-size: var(--fs-label); letter-spacing: var(--ls-label); text-indent: var(--ls-label);
  color: var(--txt); background: var(--bg0); border: 1px solid rgba(var(--gold-rgb), .5);
  box-shadow: 0 2px 4px rgba(0,0,0,.35), 0 10px 20px rgba(0,0,0,.28);
  transition: translate var(--t-fast) var(--ease-out), box-shadow var(--t-fast) var(--ease-out); }
.mz-entry-tab::before { content: ''; position: absolute; inset: 3px; border: 1px solid rgba(var(--gold-rgb), .26); pointer-events: none; }
.mz-entry-tab i { flex: none; width: 24px; height: 24px; display: grid; place-items: center; font-style: normal; font-size: 13.5px; letter-spacing: 0; text-indent: 0;
  color: var(--on-red); background: var(--red); box-shadow: inset 0 0 0 1px rgba(var(--gold-rgb), .5); }
.mz-entry-tab:hover { translate: 0 -1px; box-shadow: 0 3px 6px rgba(0,0,0,.4), 0 14px 26px rgba(0,0,0,.32); }
.mz-entry-tab:active { translate: 0 1px; transition-duration: .06s; }
.mz-entry-tab svg { width: 13px; height: 13px; fill: none; stroke: var(--gold-hi); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.mz-vartree { flex: 1; min-height: 0; overflow: auto; font-size: 13.5px; line-height: 1.9; color: var(--txt-dim); padding: 8px 12px;
  background: var(--bg3); border: 1px solid var(--line-soft); }
.mz-vartree details { padding-left: 14px; }
.mz-vartree summary { cursor: pointer; color: var(--txt); letter-spacing: 1px; list-style: none; }
.mz-vartree summary::before { content: '▸'; display: inline-block; width: 14px; color: var(--txt-faint); transition: rotate var(--t-fast) var(--ease-out); }
.mz-vartree details[open] > summary::before { rotate: 90deg; }
.mz-vartree .mz-kv { padding-left: 14px; white-space: pre-wrap; word-break: break-all; }
.mz-vartree .mz-kv .mz-k { margin-right: 6px; }
.mz-vartree .mz-kv b { color: var(--gold-hi); font-weight: 500; }
.mz-vc-img img { width: 100%; height: 100%; object-fit: cover; }
.mz-portrait .mz-pic img { width: 100%; height: 100%; object-fit: cover; cursor: zoom-in; }
/* ==== 罪业密簿黑账变体：只以朱线框与七窗相别 ==== */
#mz-lift.mz-sin .mz-held::before { border-color: rgba(var(--red-rgb),.5); }
#mz-lift.mz-sin .mz-folio { border-color: rgba(var(--red-rgb),.4); }
#mz-lift.mz-sin .mz-card { border-color: rgba(var(--red-rgb),.4); }

/* 立绘大图灯箱 */
#mz-viewer { position: absolute; inset: 0; z-index: 60; background: rgba(0,0,0,.78);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  cursor: zoom-out; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
#mz-viewer img { max-width: 92vw; max-height: 88vh; box-shadow: 0 12px 48px rgba(0,0,0,.6); }
#mz-viewer span { font-size: var(--fs-read); letter-spacing: 4px; text-indent: 4px; color: var(--txt-dim); }
.mz-thumbs i { background-size: cover; background-position: center; }
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
`;

  // src/css/crisis.js
  var crisis_default = `
/* 弹字纪律：一律盖满整壳居中，背景短暂压暗并模糊，字印播完一起散去 */
.mz-huo { position: absolute; inset: 0; z-index: 50; pointer-events: none;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px;
  background: rgba(0,0,0,.45); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  animation: huo-veil 2.6s var(--ease-out) both; }
@keyframes huo-veil { 0% { opacity: 0; } 15% { opacity: 1; } 75% { opacity: 1; } 100% { opacity: 0; } }
/* 发光挂在字上、模糊挂在词上：关键帧的 filter 会整个替换同元素的 filter，两者同层就会互相盖掉 */
.mz-huo-word { --glyph: min(260px, 36cqw); display: flex; gap: calc(var(--glyph) * .08);
  animation: huo-stamp 2.6s var(--ease-paper) both; }
.mz-huo-word svg { width: var(--glyph); height: var(--glyph); fill: var(--red);
  filter: drop-shadow(0 0 calc(var(--glyph) * .15) rgba(var(--red-rgb), .6)); }
.mz-veil { position: absolute; inset: 0; z-index: 50; cursor: pointer;
  background: rgba(0,0,0,.55); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  animation: veil-in var(--t-mid) var(--ease-out) both; }
@keyframes veil-in { from { opacity: 0; } }
/* 开坛四字逐字题写：遮罩从左上扫到右下，一字 .38s，字间错 .3s；--i 由 17-gate.js 按字写入 */
/* 题写遮罩会把字自身的发光裁成方块：发光改挂在词上，按裁完的形状算 */
.mz-veil .mz-huo-word { --glyph: min(200px, 18cqw); filter: drop-shadow(0 0 calc(var(--glyph) * .15) rgba(var(--red-rgb), .6)); }
.mz-veil .mz-huo-word svg { filter: none; -webkit-mask-image: linear-gradient(135deg, #000 45%, transparent 55%); mask-image: linear-gradient(135deg, #000 45%, transparent 55%);
  -webkit-mask-size: 300% 300%; mask-size: 300% 300%; animation: huo-write .38s linear both; animation-delay: calc(var(--i, 0) * .3s); }
@keyframes huo-write { from { -webkit-mask-position: 100% 100%; mask-position: 100% 100%; } to { -webkit-mask-position: 0 0; mask-position: 0 0; } }
.mz-veil.mz-out { animation: veil-out var(--t-slow) var(--ease-out) both; pointer-events: none; }
@keyframes veil-out { to { opacity: 0; } }
@keyframes huo-stamp { 0% { opacity: 0; scale: 1.6; filter: blur(3px); } 14% { opacity: 1; scale: 1; filter: blur(0); }
  72% { opacity: 1; scale: 1; } 100% { opacity: 0; scale: 1.03; } }
.mz-huo small { font-size: var(--fs-read); letter-spacing: 6px; text-indent: 6px; color: var(--gold-hi);
  animation: huo-name 2.6s var(--ease-out) both; }
@keyframes huo-name { 0%, 18% { opacity: 0; translate: 0 6px; } 32% { opacity: 1; translate: 0 0; } 72% { opacity: 1; } 100% { opacity: 0; } }
`;

  // src/css/phone.js
  var phone_default = `
/* ==== 遮罩（桌面端不存在） ==== */
#mz-mscrim { display: none; }

@container mz (max-width: 900px) {
  #mz-shell-root { --top-h: 52px; --fs-body: calc(16px * var(--fs-scale)); }
  /* ==== 主区：正文列铺满，底部只剩书写区 ==== */
  .mz-main { --col-side: 14px; padding-top: env(safe-area-inset-top, 0px); }
  #mz-paper { padding: 22px 5px 16px; }
  .mz-turn.mz-gm, .mz-turn.mz-zhu { line-height: 1.95; }
  #mz-writing { padding: 8px var(--col-side) calc(12px + env(safe-area-inset-bottom, 0px)); }
  #mz-send { width: 42px; height: 44px; font-size: 18px; }
  /* 木鱼中心对齐敕印中心：窄屏敕印宽 42，木鱼宽 34，故左移 21+17 */
  #mz-jump { bottom: 76px; left: calc(100% - var(--col-side) - 38px); right: auto; }
  /* iOS Safari 聚焦字号 <16px 的输入框会放大页面 */
  #mz-shell-root input, #mz-shell-root textarea { font-size: 16px; }

  /* ==== 顶栏：诸务钮＋时辰＋铜钱（左），工具栏（右，走基样）；其余五项读数下沉抽屉 ==== */
  .mz-topbar { padding: 0 12px; gap: 12px; }
  /* 落单在 logo 角，纯图标像装饰：加一圈金线＋淡填底，收成一枚可点小牌 */
  .mz-tb-plaque { display: flex; color: var(--txt-dim);
    border: 1px solid rgba(var(--gold-rgb), .38); border-radius: 7px;
    background: rgba(var(--gold-rgb), .07);
    transition: color var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
  .mz-tb-plaque:active, .mz-tb-plaque:hover { color: var(--gold-hi);
    border-color: rgba(var(--gold-rgb), .65); background: rgba(var(--gold-rgb), .14); }
  .mz-tb-plaque.mz-on { color: var(--bg0); border-color: var(--gold-hi);
    background: var(--gold-hi); }
  .mz-tb-i.mz-tb-hide { display: none; }
  /* 窄屏顶栏一行式：时辰只留「日期 时辰」，标签不显 */
  .mz-tb-time > span { display: none; }
  .mz-tb-time { flex-direction: row; align-items: baseline; gap: 6px; text-indent: 0;
    font-size: 13.5px; letter-spacing: 2px; color: var(--gold-hi); flex: 0 1 auto; min-width: 0;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mz-tb-time b { font-size: 13.5px; color: var(--txt); }
  .mz-tb-time.mz-dim { color: var(--txt-faint); opacity: .6; }
  .mz-tb-face { padding-left: 0; gap: 14px; }
  .mz-topbar > :last-child { margin-right: 0; }
  .mz-tb-set { gap: 14px; }
  .mz-tb-i { flex-direction: row; align-items: baseline; gap: 6px; font-size: 12px; text-indent: 0; color: var(--gold); }
  .mz-tb-i::before { height: 15px; background: rgba(var(--gold-rgb), .22); }
  .mz-tb-i b { font-size: 13px; color: var(--txt); }
  .mz-tb-i b.mz-gain { color: var(--gold-hi); }
  .mz-tb-i b.mz-red { color: var(--red); }
  .mz-tb-i b.mz-dim { color: var(--txt-faint); opacity: .6; }
  #mz-corner button { color: var(--txt-faint); }
  #mz-corner button:hover { color: var(--gold-hi); }
  #mz-corner button.mz-on { color: var(--gold-hi); }

  /* ==== 侧栏即落下面板：自顶栏下方落下覆盖正文，正文位置不动 ==== */
  .mz-side { position: absolute; left: 0; right: 0; top: var(--top-h); bottom: 0; width: auto; z-index: 30;
    border-right: none; overflow-y: auto; gap: 10px;
    padding: 12px 14px calc(14px + env(safe-area-inset-bottom, 0px));
    translate: 0 -110%; transition: translate var(--t-slow) var(--ease-paper);
    box-shadow: 0 12px 30px rgba(0,0,0,.45); }
  .mz-side.mz-open { translate: 0 0; }
  /* 匾额缩成顶栏那枚钮，题头与开关是同一块牌子 */
  .mz-plaque { display: none; }
  /* 顶栏舍下的五项在手机端补显进状态表 */
  .mz-doom .mz-sr-dup { display: flex; }
  /* 整面板一条滚动，目录跟着面板走 */
  .mz-nav { flex: none; overflow: visible; }
  #mz-mscrim { display: block; position: absolute; left: 0; right: 0; top: var(--top-h); bottom: 0; z-index: 29;
    background: var(--scrim); opacity: 0; pointer-events: none;
    transition: opacity var(--t-mid) var(--ease-out); }
  #mz-mscrim.mz-open { opacity: 1; pointer-events: auto; }

  /* ==== 楼尾：变量在上自行折行，心声整块在下贴右（同行放不下四名签，不叫牌面与名签互挤） ==== */
  .mz-ff-vars { flex: 1 1 100%; }
  .mz-ff-vars:empty { display: none; }


  /* ==== 浮窗：贴底整幅纸，上留一指宽遮罩可点关，题签仍悬出纸上缘 ==== */
  #mz-lift { align-items: flex-end; }
  #mz-lift .mz-held { width: 100%; height: calc(100% - 56px); }
  #mz-lift .mz-held h3 { left: 10px; top: -22px; font-size: 13px; letter-spacing: 4px; padding: 27px 10px; }
  #mz-lift .mz-lift-x { display: block; }
  #mz-lift.mz-gate .mz-lift-x { display: none; }
  #mz-lift .mz-held .mz-held-body { padding: 24px 14px calc(18px + env(safe-area-inset-bottom, 0px)); }
  .mz-card { padding: 20px 21px 19px; font-size: 13.5px; }
  .mz-card b { padding-right: 34px; font-size: 14.5px; letter-spacing: 2px; }
  .mz-card .mz-seal-btn { position: static; display: block; margin: 8px 0 0 auto; }
  .mz-vc { padding: 14px 14px 14px; }
  .mz-atlas { flex-direction: column; overflow-y: auto; }
  .mz-atlas .mz-mapbox { width: 100%; height: auto; }
  /* 页签栏：等宽一行，小字折到名下，尾注独占一行靠右 */
  .mz-tabs { gap: 0; flex-wrap: wrap; margin: -2px 0 0; padding-left: 40px; }
  .mz-tabs button { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 1px; padding: 4px 2px 6px; }
  .mz-tabs button .mz-n { margin-left: 0; font-size: 11px; line-height: 1.3; text-align: center; white-space: normal; }
  .mz-tabs > .mz-why { flex: 0 0 100%; margin: 4px 0 0; text-align: right; }
  .mz-tabs button .mz-red { position: absolute; top: 6px; right: 6px; margin: 0; translate: none; }
  .mz-wrow { flex-direction: column; overflow-y: auto; }
  .mz-wrow > .mz-wcol { align-self: auto; width: 100%; flex: none; }
  .mz-portrait { width: 100%; flex-direction: column; align-items: center; gap: 10px; }
  .mz-portrait .mz-pic { width: 220px; flex: none; }
  .mz-thumbs { width: 100%; gap: 6px; }
  .mz-grid.mz-c3, .mz-grid.mz-c4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mz-halls { grid-template-columns: minmax(0, 1fr); grid-template-rows: none; flex: none; }
  .mz-hall { grid-template-rows: auto; grid-row: auto; }
  .mz-hall-act:empty { display: none; }
  .mz-grid.mz-c3.mz-cave-grid { grid-template-columns: minmax(0, 1fr); }
  .mz-store-row { grid-template-columns: minmax(0, 1fr); }
  .mz-store-head { flex-direction: row; justify-content: flex-start; gap: 10px; }
  .mz-store-pic { width: 44px; height: 44px; margin-bottom: 0; }
  .mz-store-row .mz-card.mz-wide { grid-column: 1 / -1; }
  .mz-card.mz-fac { grid-template-rows: auto; grid-row: auto; }
  .mz-fac-pic { aspect-ratio: 2 / 1; }
  .mz-pick.mz-shop { display: flex; }
  .mz-shop-pic { display: none; }
  .mz-build-head.mz-has-pic { grid-template-columns: minmax(0, 1fr); }
  .mz-hall-pic { aspect-ratio: 5 / 2; }
  .mz-hall-note { margin-top: 0; }
  .mz-picks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mz-bplist { width: 100%; }
  .mz-bps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mz-loan-row { flex-wrap: wrap; }
  .mz-craft .mz-grow textarea { height: 140px; }
  .mz-loan-row label:not(.mz-grow) input { width: 100%; }
  .mz-loan-row label { flex: 1 1 40%; }
  .mz-loan-row .mz-grow { flex: 1 1 100%; }
  .mz-loan-row .mz-build-foot { flex: 1 1 100%; }
  .mz-shoplist { width: 100%; }
  .mz-picks.mz-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .mz-form input.mz-w { width: 100%; }
  #mz-lift.mz-gate .mz-held { width: 100%; height: calc(100% - 56px); max-height: none; }
  .mz-gate-two { grid-template-columns: minmax(0, 1fr); gap: 14px; }
  .mz-picks.mz-gate-picks { grid-template-columns: minmax(0, 1fr); grid-auto-rows: auto; gap: 6px; }
  .mz-gate-sect { padding: 6px 12px 5px; }
  .mz-gate-foot { flex-wrap: wrap; gap: 6px 18px; }
  .mz-gate-foot .mz-why { position: static; translate: none; width: 100%; text-align: center; padding-top: 0; }
  .mz-gate-back { position: static; translate: none; padding: 0; }
  #mz-lift.mz-gate .mz-held h3 { padding: 22px 20px 0; font-size: 22px; letter-spacing: 8px; text-indent: 8px; }
  #mz-lift.mz-gate .mz-held .mz-held-body { padding: 10px 18px 20px; }
}

`;

  // src/css/armor.js
  var armor_default = `
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
`;

  // src/03-theme.js
  var SHELL_CSS = tokens_default + sides_default + story_default + lift_default + windows_default + extras_default + crisis_default + phone_default + armor_default;

  // src/glyphs.js
  var GLYPH_H = 1e3;
  var GLYPHS = {
    "祸": { w: 1e3, d: "M663 593Q676 585 723 602Q770 619 785 638Q792 648 794 656Q795 663 794 686Q794 719 788 726Q782 734 758 731Q737 730 732 722Q727 715 712 699Q698 683 686 666Q673 650 670 650Q667 650 664 636Q661 622 657 622Q655 621 655 616Q655 610 658 602Q660 595 663 593ZM585 133Q660 119 755 140Q799 149 810 154Q821 159 831 170Q841 181 841 191Q841 201 833 217Q825 233 816 240Q809 248 802 264Q794 280 777 294Q741 323 753 334Q765 346 749 371Q735 394 709 385Q697 380 683 380Q673 380 672 382Q671 383 675 387Q682 394 690 415L699 435L724 437Q765 440 832 453Q898 466 923 476Q951 485 961 514Q965 527 964 542Q963 557 955 594Q951 613 948 644Q945 676 940 692Q935 708 935 722Q935 737 932 739Q928 741 926 759Q921 795 912 818Q902 841 882 868Q838 927 797 933Q784 935 780 932Q775 930 762 919Q746 903 746 896Q746 889 734 880Q721 870 721 865Q721 861 704 839Q688 817 670 799Q655 783 646 762Q636 742 630 737Q623 732 623 729Q623 726 630 726Q637 725 644 726Q652 728 653 730Q655 738 676 748Q697 757 714 760Q735 765 759 771Q779 777 784 774Q789 771 796 747Q808 710 822 636Q836 562 837 531Q837 518 825 512Q813 506 775 497Q773 497 768 496Q716 485 706 486Q697 487 691 506Q691 507 690 507Q678 548 671 556Q667 560 667 565Q667 570 654 588Q642 605 642 610Q642 614 638 614Q634 614 632 621Q629 631 592 668Q555 704 536 714Q524 722 524 733Q523 744 532 773Q546 820 525 834Q514 842 506 839Q498 836 487 822Q475 805 472 790Q468 776 466 737Q460 615 458 603L456 594L441 603Q426 610 415 609Q404 608 389 597Q357 571 357 553Q357 543 352 543Q343 543 339 586Q335 629 332 742Q330 801 328 804Q325 806 330 823Q335 844 324 860Q313 875 293 876Q277 878 272 876Q266 873 264 863Q262 850 256 844Q249 837 249 810Q249 782 255 772Q260 762 262 714Q264 667 270 633Q275 599 272 595Q271 594 258 606Q244 619 231 634Q218 648 218 650Q218 652 196 670Q174 688 160 700Q145 713 121 730Q97 746 95 749Q89 756 74 765Q58 774 50 775Q35 777 36 772Q36 765 55 746Q74 727 90 708Q122 668 136 653Q143 646 143 644Q143 643 161 624Q179 604 179 599Q179 594 182 594Q184 594 199 575Q214 556 214 553Q214 551 224 538Q231 528 258 474Q284 421 288 408Q290 402 288 402Q286 402 263 417Q246 428 242 428Q239 428 232 437Q225 446 220 449Q215 452 201 446Q187 439 175 429Q166 421 164 417Q163 413 165 399Q167 379 168 378Q169 378 195 369Q234 356 284 333Q333 310 335 303Q337 296 344 298Q351 301 376 304Q402 306 415 317L428 330L422 348Q415 367 407 376Q371 416 368 424Q365 430 355 446Q345 463 346 470Q347 476 359 476Q372 476 398 481Q424 486 438 492Q448 496 457 488Q466 480 478 475Q488 469 526 459Q563 449 586 445Q599 442 602 439Q606 436 610 424Q614 406 627 393Q642 378 631 381Q626 383 612 390Q594 400 586 400Q579 400 570 388Q560 377 556 367Q554 355 546 337Q525 297 512 254Q500 211 500 186Q500 162 511 159Q518 159 536 149Q553 139 585 133ZM717 180Q704 175 662 173Q621 171 598 179Q575 187 571 196Q567 206 563 206Q560 206 560 212Q559 218 560 224Q562 231 565 233Q571 235 571 240Q571 246 574 253Q578 260 586 288Q595 313 602 318Q610 322 645 318Q678 316 678 310Q678 303 688 287Q710 249 718 222Q722 204 725 197Q730 190 729 188Q728 186 717 180ZM595 498Q595 491 593 489Q591 487 582 487Q540 490 518 505Q508 511 504 511Q501 511 499 520Q495 530 498 579Q502 628 506 651L514 681L524 669Q535 658 535 656Q535 654 548 636Q560 619 560 612Q560 606 563 604Q566 602 576 574L590 527Q595 510 595 498ZM351 260Q336 255 328 240Q319 224 296 189Q273 154 276 142Q278 130 282 124Q287 118 297 120Q307 123 330 127Q384 135 395 161Q403 180 403 201Q403 222 395 236Q378 266 351 260Z" },
    "开": { w: 1e3, d: "M599 259Q610 261 612 258Q613 254 617 254Q621 254 638 275Q656 296 656 301Q657 307 657 361L658 416H684Q709 415 792 415L875 414L894 424Q921 439 930 449Q939 459 940 478Q944 514 916 532Q894 545 868 532Q852 523 848 523Q843 523 825 515Q797 501 710 498L662 495L656 509Q652 521 648 578Q644 635 644 698Q643 753 640 810Q636 866 633 870Q630 873 627 895Q624 917 617 936Q606 962 589 960Q583 959 580 949Q578 940 569 916Q564 900 562 871Q560 842 559 694Q558 495 557 494Q556 493 510 497Q465 501 454 501Q446 504 444 508Q441 512 435 533Q430 561 430 569Q430 590 411 632Q383 699 340 747L301 790Q262 837 234 856Q212 870 205 877Q198 884 192 884Q186 884 176 890Q167 896 162 892Q156 887 172 860Q205 808 228 783Q252 758 265 734Q277 713 287 701Q304 680 318 643Q333 606 337 579Q340 561 344 542Q348 523 344 520Q341 516 324 522Q306 527 264 534Q195 548 195 560Q195 562 190 562Q185 563 178 562Q170 560 162 557Q137 545 134 516Q131 507 133 503Q135 499 142 493Q152 485 162 485Q172 485 222 474Q271 462 309 455Q347 448 351 446Q355 443 360 395Q366 347 375 332Q384 317 388 317Q395 317 410 326Q424 335 430 342Q435 351 438 372Q442 394 440 407Q435 422 438 428Q442 434 453 432Q466 429 517 424L567 421L566 357L565 295L576 276Q583 265 588 262Q592 258 599 259ZM662 168Q681 163 692 168Q708 176 720 197Q726 206 726 226Q727 246 721 248Q702 255 613 247Q572 243 544 247Q517 251 467 254Q393 260 375 282Q361 299 319 279L297 267Q297 267 295 255Q293 243 289 235Q285 227 297 218Q318 199 435 186Q561 171 621 171Q650 173 662 168Z" },
    "山": { w: 1e3, d: "M421 170Q434 160 483 175Q496 179 504 184Q511 189 522 205Q535 222 537 230Q539 237 538 256Q532 310 528 486Q525 663 529 666Q533 670 641 671Q749 672 753 668Q757 665 757 613Q759 548 772 532Q786 517 832 530Q887 544 907 573Q927 602 920 659Q909 749 893 774Q890 780 885 792Q872 821 848 840Q823 859 799 859Q778 859 766 848Q754 837 743 807Q731 776 726 770Q720 764 703 764Q684 764 662 760Q640 757 584 753L527 750L513 775Q499 801 496 814Q494 827 490 830Q486 832 486 841Q486 850 476 868Q467 885 463 886Q456 889 437 880Q418 871 418 860Q418 850 406 849Q394 848 391 837Q388 824 375 798Q362 773 356 768Q351 764 322 771Q294 778 275 787Q259 796 256 796Q246 796 214 816Q181 836 169 848Q150 868 136 871Q125 872 120 870Q114 867 103 856Q92 844 88 836Q85 827 83 803Q78 767 78 760Q78 753 78 736Q79 718 89 703Q103 677 122 625Q141 573 141 554Q141 540 148 524Q154 508 154 496V484L182 487Q229 493 240 511Q246 519 246 531Q245 543 239 551Q227 568 223 620Q221 655 212 686Q202 716 204 718Q205 719 244 710Q271 703 277 700Q283 696 285 687Q287 675 281 664Q275 652 275 646Q275 640 268 634Q262 629 262 612V594L306 640L350 686L375 683Q401 681 406 676Q414 667 418 508Q423 350 417 251Q414 198 414 186Q415 174 421 170Z" },
    "立": { w: 1e3, d: "M386 548Q406 533 410 533Q420 533 415 545Q406 559 399 584Q392 608 395 611Q399 617 398 650Q396 683 391 687Q385 694 370 700Q356 706 349 704Q343 701 326 678Q309 656 301 636Q295 622 292 586Q288 549 293 542Q295 536 306 538Q316 541 326 550Q334 557 350 561Q360 562 366 560Q372 559 386 548ZM594 452Q605 429 605 424Q605 419 615 419Q624 419 651 440Q678 461 680 471Q684 480 696 489Q708 498 708 516Q708 535 698 541Q679 552 631 615Q616 635 604 648Q591 660 591 666Q591 673 578 686Q565 699 552 720Q539 742 521 761L503 780L616 777Q728 775 808 773L886 770L901 786Q920 807 930 849Q940 891 928 900Q921 906 886 904Q851 901 837 893Q809 879 760 877Q728 875 705 872Q596 863 489 868Q382 872 308 890Q282 896 257 898Q232 901 230 904Q227 908 212 911Q196 914 180 923Q163 932 159 939Q155 947 140 951Q124 955 112 952Q97 948 80 931Q69 920 66 914Q64 908 65 898Q67 880 75 871Q83 862 105 856Q184 830 324 805Q371 797 384 786Q405 767 438 723Q470 679 494 638Q528 582 534 576Q550 556 573 501ZM533 307Q594 304 598 300Q601 295 632 297Q664 299 673 305Q684 309 694 326Q704 343 705 356Q705 368 694 376Q688 383 680 384Q672 384 644 383Q385 364 316 407L302 416L285 408Q261 396 260 380Q258 363 278 354Q307 340 380 326Q452 313 533 307ZM367 105Q389 94 443 110Q477 121 493 132Q509 144 521 168Q530 184 522 220Q513 256 498 268Q474 290 448 284Q439 282 429 273Q419 264 418 257Q418 252 412 247Q405 242 405 235Q405 225 390 190Q375 154 365 142Q346 115 367 105Z" },
    "坛": { w: 1e3, d: "M533 561Q535 551 546 534Q558 516 562 516Q568 516 574 523Q581 530 581 536Q581 544 594 554Q606 565 606 582Q606 613 565 660Q552 675 546 686Q540 698 536 698Q533 698 520 716Q507 735 505 743L502 753L540 750Q604 746 661 716L681 706L669 684Q658 665 656 654Q655 644 664 635Q673 626 673 620Q673 611 712 625Q734 632 766 664Q799 695 807 715Q809 722 818 724Q828 725 832 740Q836 754 839 759Q849 770 841 805Q833 840 819 852Q802 868 779 862Q768 860 754 844Q739 828 736 818Q734 808 729 800Q724 791 721 781Q718 771 709 758L701 743L683 757L635 794Q602 819 580 828Q557 836 502 844Q458 850 442 850Q427 850 420 844Q412 837 407 816Q400 795 404 783Q408 771 435 740Q456 713 465 696Q474 679 482 667Q492 651 512 610Q531 570 533 561ZM600 407Q646 404 768 404Q889 405 907 408Q931 413 938 420Q944 427 944 449Q943 489 916 499Q902 504 890 502Q878 500 857 489Q804 461 689 462Q580 462 508 477Q435 492 415 518Q406 529 383 527Q360 525 355 511Q353 504 358 493Q363 482 372 476Q382 469 382 464Q382 458 444 436Q467 429 515 420Q563 411 600 407ZM618 202Q660 198 678 199Q697 200 720 209L744 217V242Q744 259 737 273Q730 287 721 287Q717 287 709 294Q701 301 691 296Q681 292 644 292Q606 292 571 303Q548 312 541 312Q534 313 529 309Q518 300 504 281Q491 262 491 256Q491 247 508 234Q524 222 546 216Q571 208 618 202ZM236 200Q248 188 262 189Q271 189 274 192Q277 194 279 202Q281 215 293 234Q305 252 306 283V314L325 313Q341 312 358 320Q376 327 382 337Q387 345 387 364Q387 403 348 397Q331 395 313 398Q300 401 296 404Q292 407 289 418Q286 426 284 468Q282 510 282 548Q283 586 286 586Q290 586 351 554Q371 543 378 547Q388 554 381 569Q374 584 355 598Q343 607 294 656Q244 704 233 711Q208 724 180 746Q152 769 147 780Q140 796 123 802Q113 805 108 805Q103 805 94 799Q82 794 69 775Q56 756 56 746Q57 732 82 715Q94 706 136 678Q179 649 185 646Q199 638 199 578Q199 546 203 530Q207 514 211 471Q214 427 206 429Q203 429 195 435Q189 441 182 440Q175 439 145 427Q96 410 120 380Q127 373 160 357Q194 341 204 341Q214 341 216 330Q219 318 223 250Q224 226 226 217Q229 208 236 200Z" }
  };

  // src/08-animation.js
  function animateOnce(el, cls, timeout) {
    if (!el) return;
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    const clear = () => el.classList.remove(cls);
    el.addEventListener("animationend", function h(e) {
      if (e.target !== e.currentTarget) return;
      clear();
      el.removeEventListener("animationend", h);
    });
    setTimeout(clear, timeout || 1200);
  }
  function diffStat(prevD, curD) {
    if (!prevD || !curD) return null;
    const out = {};
    const a文 = 总文(prevD), b文 = 总文(curD);
    if (a文 !== b文) out["铜钱"] = { from: a文, to: b文 };
    if (prevD.教务.信众 !== curD.教务.信众) out["信众"] = { from: prevD.教务.信众, to: curD.教务.信众 };
    [["风波", prevD.暗流.风波, curD.暗流.风波], ["表殿", prevD.道场.表殿等级, curD.道场.表殿等级], ["地界", prevD.时空.当前地界, curD.时空.当前地界], ["时间", prevD.时空.时间, curD.时空.时间]].forEach(([k, a, b]) => {
      if (a !== b && b) out[k] = { text: true, from: a, to: b };
    });
    ZONE_DEFS.forEach((z) => {
      if (!unlocked(prevD, z.key) && unlocked(curD, z.key)) out["解锁." + z.key] = { text: true };
    });
    CAST.forEach((n) => {
      const pa = prevD.核心女主[n], ca = curD.核心女主[n];
      if (pa.灌顶位阶 !== ca.灌顶位阶 && ca.灌顶位阶) out["位阶." + n] = { text: true, from: pa.灌顶位阶, to: ca.灌顶位阶 };
      if (pa.心声 !== ca.心声 && ca.心声) out["心声." + n] = { text: true };
      if (Object.keys(pa.回想).length !== Object.keys(ca.回想).length) out["回想." + n] = { text: true };
    });
    return Object.keys(out).length ? out : null;
  }
  var statDelta = null;
  function setStatDelta(v) {
    statDelta = v;
  }
  function playStatFx() {
    const d = statDelta;
    statDelta = null;
    if (!d || !isShellVisible()) return;
    const root = doc.getElementById(SHELL_ID);
    if (!root) return;
    Object.keys(d).forEach((key) => {
      if (key.startsWith("解锁.")) {
        animateOnce(root.querySelector('.mz-nav-item[data-zone="' + key.slice(3) + '"]'), "mz-unveil", 2600);
        return;
      }
      root.querySelectorAll('[data-stat="' + key + '"]').forEach((box) => animateOnce(box, "mz-flash", 1500));
    });
  }

  // src/17-gate.js
  var GATE_WIN = "开坛";
  var GATE_TITLE = "开山立坛";
  var CB2 = (id) => "https://files.catbox.moe/" + id + ".png";
  var SECTS = [
    { key: "理趣大乐", line: "借香汤声色破戒，以肉身作坛城。" },
    { key: "造境摄魂", line: "布暗室光影与迷香，造神迹以摄魄。" },
    { key: "慈悲蛊心", line: "揽万般罪业于己，引信众倾心托付。" },
    { key: "尸陀修罗", line: "筑修罗黑坛，以严刑骨器降伏恶徒。" },
    { key: "罪业提线", line: "握满城公卿把柄，借利害掌提线之索。" }
  ];
  var SECT_PIC = { 理趣大乐: "sect-1-bliss.webp", 造境摄魂: "sect-2-illusion.webp", 慈悲蛊心: "sect-3-mercy.webp", 尸陀修罗: "sect-4-asura.webp", 罪业提线: "sect-5-strings.webp" };
  var OPENINGS_META = [
    { title: "破庙开山", blurb: "会昌元年三月，你重回城南荒庙，在断臂佛像下掘开空置的地窖，借满城欲念开坛立教。", img: CB2("lsgkeh") }
  ];
  var chosenSect = null;
  var page = 0;
  var step = 0;
  var gateBusy = false;
  function isPanelText(text) {
    return /^\s*(?:<StatusPlaceHolderImpl\s*\/?>\s*)*【开场介绍】/.test(String(text || ""));
  }
  function readOpenings() {
    try {
      const m0 = getChatMessages(0, { include_swipes: true })[0];
      if (!m0 || !Array.isArray(m0.swipes)) return null;
      return { swipes: m0.swipes, cur: m0.swipe_id || 0, data: m0.swipes_data || [] };
    } catch (e) {
      dbg("readOpenings", e);
      return null;
    }
  }
  function onPanelSwipe() {
    try {
      const m0 = getChatMessages(0)[0];
      return !!m0 && isPanelText(m0.message);
    } catch (e) {
      return false;
    }
  }
  function gateNeeded() {
    if (safeLastMessageId() === 0 && onPanelSwipe()) return true;
    const D = readMVU();
    if (D._empty && gateLate()) return false;
    return !D.道场.宗风;
  }
  var gateLate = () => {
    const id = safeLastMessageId();
    return id != null && id > 0;
  };
  function openingSwipes() {
    const info = readOpenings();
    if (!info) return [];
    const out = [];
    info.swipes.forEach((t, i) => {
      if (!isPanelText(t)) out.push(i);
    });
    return out;
  }
  function gateHtml() {
    const late = gateLate();
    const info = readOpenings();
    const swipes = openingSwipes();
    if (swipes.length && page >= swipes.length) page = swipes.length - 1;
    const onSect = late || step === 1;
    let body, foot;
    if (!onSect) {
      const meta = OPENINGS_META[swipes[page] != null ? swipes[page] - 1 : 0] || OPENINGS_META[0];
      const multi = swipes.length > 1;
      const nav = multi ? `<div class="mz-gate-nav"><button data-gate="prev" ${page === 0 ? "disabled" : ""}>${ICO.chev}</button><span>${page + 1} / ${swipes.length}</span><button data-gate="next" ${page === swipes.length - 1 ? "disabled" : ""}>${ICO.chev}</button></div>` : "";
      body = `<div class="mz-gate-body mz-gate-opening">
        <h4>开场白</h4>
        <div class="mz-gate-two mz-gate-card">
          <div class="mz-gate-img"${meta.img ? ` style="background-image:url('${meta.img}')"` : ""}></div>
          <div class="mz-gate-text">
            <b>${meta.title}</b>
            <p>${meta.blurb}</p>
            ${nav}
          </div>
        </div>
      </div>`;
      foot = `<button class="mz-seal-btn mz-lg" data-gate="step" data-step="1">下一步</button>`;
    } else {
      const shown = SECTS.find((x) => x.key === chosenSect) || SECTS[0];
      const picks = SECTS.map((x) => `<label class="mz-pick mz-gate-sect" data-gate="sect" data-sect="${x.key}"><input type="radio" name="宗风" value="${x.key}"${chosenSect === x.key ? " checked" : ""}><b>${x.key}</b><small>${x.line}</small></label>`).join("");
      const ready = !!chosenSect && (late || swipes.length > 0 || !info);
      body = `<div class="mz-gate-body mz-gate-sects">
        <h4>宗风</h4>
        <div class="mz-gate-two">
          <div class="mz-rite-pic mz-gate-pic"><img src="${asset(SECT_PIC[shown.key])}" alt=""></div>
          <div class="mz-picks mz-col mz-gate-picks">${picks}</div>
        </div>
      </div>`;
      foot = (late ? "" : `<button class="mz-gate-back" data-gate="step" data-step="0">上一步</button>`) + `<button class="mz-seal-btn mz-lg" data-gate="confirm" ${ready ? "" : "disabled"}>开坛</button>
      <span class="mz-why">${ready ? "" : "请先择定宗风"}</span>`;
    }
    return `<section class="mz-win mz-on mz-gate-win">
    ${body}
    <div class="mz-gate-foot">
      ${foot}
    </div>
  </section>`;
  }
  async function switchOpening(n) {
    const info = readOpenings();
    if (!info || n === info.cur || info.swipes[n] == null) return;
    await setChatMessages([{ message_id: 0, swipe_id: n }]);
    try {
      await eventEmit(tavern_events.MESSAGE_SWIPED, 0);
    } catch (e) {
      dbg("swipeEmit", e);
    }
    storyCacheDrop(0);
    setLastStat(null);
  }
  function floorStat(mid) {
    let v = null;
    try {
      v = getVariables({ type: "message", message_id: mid });
    } catch (e) {
      dbg("gate:get", e);
    }
    if ((!v || !v.stat_data) && mid === 0) {
      const info = readOpenings();
      const sd = info && info.data[info.cur];
      v = sd && sd.stat_data ? { stat_data: sd.stat_data } : null;
    }
    if (!v || !v.stat_data) return null;
    return _.cloneDeep(_.omit(v.stat_data, ["$internal"]));
  }
  async function confirmGate(btn) {
    if (gateBusy || !chosenSect) return;
    gateBusy = true;
    btn.disabled = true;
    try {
      const late = gateLate();
      if (!late) {
        const target = openingSwipes()[page];
        if (target != null) await switchOpening(target);
      }
      const stat = floorStat(0);
      if (!stat && !late) throw new Error("读不到开场变量, 请稍后再试");
      if (stat) {
        _.set(stat, "道场.宗风", chosenSect);
        await insertOrAssignVariables({ stat_data: stat }, { type: "message", message_id: 0 });
        storyCacheDrop(0);
      }
      if (late) {
        const lastId = safeLastMessageId();
        const cur = floorStat(lastId);
        if (!cur) throw new Error("读不到最新一楼的账目, 请稍后再试");
        _.set(cur, "道场.宗风", chosenSect);
        await insertOrAssignVariables({ stat_data: cur }, { type: "message", message_id: lastId });
        storyCacheDrop(lastId);
        setLastStat(_.cloneDeep(cur));
      } else {
        setLastStat(_.cloneDeep(stat));
      }
      const veil = playGateVeil();
      closeLift(true);
      renderAll(true);
      renderStoryLog();
      await veil;
      playEntrance();
    } catch (e) {
      const why = doc.querySelector("#" + SEL.lift + " .mz-gate-foot .mz-why");
      if (why) why.textContent = "出错: " + (e && e.message ? e.message : e);
      const again = doc.querySelector("#" + SEL.lift + ' .mz-gate-foot button[data-gate="confirm"]');
      if (again) again.disabled = false;
    } finally {
      gateBusy = false;
    }
  }
  function playGateVeil() {
    const root = doc.getElementById("mz-shell-root");
    if (!root) return Promise.resolve();
    return new Promise((resolve) => {
      const veil = doc.createElement("div");
      veil.className = "mz-veil";
      veil.innerHTML = '<span class="mz-huo-word">' + [...GATE_TITLE].map((c, i) => glyphSvg(c).replace("<svg ", '<svg style="--i:' + i + '" ')).join("") + "</span>";
      root.appendChild(veil);
      let done = false;
      const lift = () => {
        if (done) return;
        done = true;
        clearTimeout(t);
        veil.classList.add("mz-out");
        veil.addEventListener("animationend", () => veil.remove(), { once: true });
        resolve();
      };
      veil.addEventListener("click", lift, { once: true });
      const t = setTimeout(lift, 2600);
    });
  }
  function playEntrance() {
    animateOnce(doc.getElementById(SEL.paper), "mz-paper-in", 900);
    const root = doc.getElementById("mz-shell-root");
    if (!root) return;
    const els = [...root.querySelectorAll(".mz-topbar, #mz-minimap, .mz-side .mz-nav-item")];
    els.forEach((el, i) => {
      el.style.setProperty("--i", i);
      animateOnce(el, "mz-kindle", 1400);
    });
  }
  function onGateClick(e) {
    const el = e.target.closest("[data-gate]");
    if (!el || el.disabled) return;
    const act = el.dataset.gate;
    if (act === "sect") {
      if (e.target.tagName !== "INPUT") {
        chosenSect = el.dataset.sect;
        refreshLift();
      }
      return;
    }
    if (act === "step") {
      step = +el.dataset.step;
      refreshLift();
      return;
    }
    if (act === "prev") {
      page = Math.max(0, page - 1);
      refreshLift();
      return;
    }
    if (act === "next") {
      page += 1;
      refreshLift();
      return;
    }
    if (act === "confirm") confirmGate(el);
  }
  function ensureGate() {
    if (gateNeeded()) {
      step = 0;
      openLift(GATE_WIN);
      return true;
    }
    return false;
  }

  // src/adapters/db-plugin.js
  function raiseAcuUi() {
    const v2 = doc.getElementById("acu-app-v2");
    if (v2 && v2.style.zIndex !== "9200") {
      v2.style.setProperty("position", "relative", "important");
      v2.style.setProperty("z-index", "9200", "important");
    }
    doc.querySelectorAll(".auto-card-updater-popup").forEach((el) => {
      if (el.style.zIndex !== "9200") el.style.setProperty("z-index", "9200", "important");
    });
  }
  function acuUiOpen() {
    const v2 = doc.getElementById("acu-app-v2");
    if (v2 && v2.style.display !== "none") return true;
    return !!doc.querySelector(".auto-card-updater-popup");
  }
  function userDisplayText(raw) {
    let s = String(raw);
    const m = s.match(/<本轮用户输入>\s*([\s\S]*?)\s*<\/本轮用户输入>/);
    if (m) {
      s = m[1];
    } else {
      const i = s.indexOf("<本轮用户输入>");
      if (i >= 0) s = s.slice(i + "<本轮用户输入>".length);
    }
    s = s.replace(/\n*\s*(?:以上是用户的本轮输入|以下输入的代码为既定事实记忆|\[时间约束词\])[\s\S]*$/, "");
    s = s.replace(/^\s*以下是用户的本轮输入[：:]\s*/, "");
    s = s.replace(/<\/?本轮用户输入>/g, "");
    s = s.replace(/\s*<UpdateVariable>[\s\S]*?<\/UpdateVariable>\s*/gi, "\n").trim();
    return s || String(raw);
  }

  // src/adapters/presets.js
  function esc(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function lastMatch(s, re) {
    const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    let m, last = null;
    while (m = g.exec(s)) {
      last = m;
      if (!m[0].length) g.lastIndex++;
    }
    return last;
  }
  var MAIN_TAGS = ["maintext", "content", "正文", "dream_body", "game"];
  var MAIN_OPEN_RE = new RegExp("(?:^|\\n)[ \\t]*<(" + MAIN_TAGS.join("|") + ")(?:\\s[^<>]*)?>", "gi");
  function lastMainOpen(s) {
    const m = lastMatch(s, MAIN_OPEN_RE);
    if (!m) return null;
    const index = m.index + m[0].indexOf("<");
    return { index, end: m.index + m[0].length, tag: m[1].toLowerCase() };
  }
  function mainBlocks(s) {
    const last = lastMainOpen(s);
    if (!last) return null;
    const re = new RegExp("(?:^|\\n)[ \\t]*<" + last.tag + "(?:\\s[^<>]*)?>", "gi");
    const opens = [];
    let m;
    while (m = re.exec(s)) opens.push({ start: m.index + m[0].indexOf("<"), end: m.index + m[0].length });
    const close = "</" + last.tag + ">";
    const lower = s.toLowerCase();
    return opens.map((o, i) => {
      const limit = i + 1 < opens.length ? opens[i + 1].start : s.length;
      const j = lower.indexOf(close, o.end);
      if (j >= 0 && j < limit) return s.slice(o.end, j).trim();
      const body = s.slice(o.end, limit);
      return (i + 1 < opens.length ? body : body.replace(TAIL_CUT_RE, "")).trim();
    });
  }
  var DOC_ROOT_RE = /<dream_plot(?:\s[^<>]*)?>/i;
  var TG_PRE_RE = /(?:^|\n)[ \t]*<!--\s*\d\.\s*正文前的格式\s*-->/g;
  var TG_BODY_RE = /(?:^|\n)[ \t]*<!--\s*\d\.\s*正文\s*-->/g;
  var TG_AFTER_RE = /(?:^|\n)[ \t]*<!--\s*\d\.\s*正文后的格式\s*-->/;
  function tgCut(s) {
    const b = lastMatch(s, TG_BODY_RE);
    const pre = lastMatch(b ? s.slice(0, b.index) : s, TG_PRE_RE);
    return pre ? pre.index : b ? b.index : -1;
  }
  var GEMINI_TURN_RE = /<\|im_start\|>\s*gemini[^\n]*\n?[\s\S]*?(?:<\|im_end\|>|$)/gi;
  var CONTROL_TOKEN_RE = /<\|im_start\|>[^\n]*|<\|(?:im_end|pad|pad_end)\|>|<-(?:begin|end)-response->/gi;
  function stripControlTurns(s) {
    if (s.indexOf("<|") < 0 && s.indexOf("<-") < 0) return s;
    return s.replace(GEMINI_TURN_RE, "").replace(CONTROL_TOKEN_RE, "");
  }
  var THOUGHT_TAGS = ["thinking", "think", "cot", "reasoning", "meow", "think_nya~", "konatan_planning~", "draft_notes", "draft", "preparation"];
  var THOUGHT_NAMES = THOUGHT_TAGS.map(esc).join("|");
  var THOUGHT_OPEN = "<(?:" + THOUGHT_NAMES + ")(?:\\s[^<>]*)?>";
  var THOUGHT_CLOSE = "</(?:" + THOUGHT_NAMES + ")\\s*>";
  var THOUGHT_BLOCK_RE = new RegExp(THOUGHT_OPEN + "([\\s\\S]*?)" + THOUGHT_CLOSE, "gi");
  var THOUGHT_TAIL_RE = new RegExp(THOUGHT_OPEN + "([\\s\\S]*)$", "i");
  var BARE_CLOSE_RE = new RegExp("(?:" + THOUGHT_CLOSE + "|<!--\\s*(?:end_of_梳理|1·思考结束|end_of_Subtext_think)\\s*-->|<｜end▁of▁thinking｜>|前尘已定，梦境将演。|(?:好的[，,]\\s*)?我将进行符合需求的创作：|#{1,6}[ \\t]*正式创作|#{1,6}[ \\t]*正文[ \\t]*(?=\\r?\\n|$))", "i");
  var HEAD_MARK_RE = /^\s*(?:\[(?:metacognition|love_qkll)\]|<｜begin▁of▁thinking｜>|吾有一梦，今方始筑：?)/i;
  var TIDE_HEAD_RE = /^\s*<基础确认>/i;
  function cleanThought(s) {
    return s.replace(HEAD_MARK_RE, "").replace(new RegExp(THOUGHT_OPEN + "|" + THOUGHT_CLOSE, "gi"), "").replace(/<!--[\s\S]*?-->/g, "").replace(/<\/[^<>\n]{1,40}>/g, "").replace(/<([^<>\n]{1,40})>/g, "$1").trim();
  }
  function splitThought(raw, streaming) {
    let rest = stripControlTurns(String(raw)).replace(/<draft_notes>\s*<draft>/gi, "<draft_notes>").replace(/<\/draft>\s*<\/draft_notes>/gi, "</draft_notes>");
    const thoughts = [];
    const tg = tgCut(rest);
    if (tg >= 0) return { thoughts: rest.slice(0, tg).trim() ? [rest.slice(0, tg)] : [], rest: rest.slice(tg), closed: true };
    const mainAt = () => {
      const m = lastMainOpen(rest);
      return m ? m.index : -1;
    };
    if (TIDE_HEAD_RE.test(rest)) {
      const i2 = mainAt();
      if (i2 > 0) return { thoughts: [rest.slice(0, i2)], rest: rest.slice(i2), closed: true };
      if (streaming) return { thoughts: [rest], rest: "", closed: false };
    }
    let closed = false;
    rest = rest.replace(THOUGHT_BLOCK_RE, (m, body) => {
      thoughts.push(body);
      if (body.trim() !== "我think完了。") closed = true;
      return "";
    });
    const tail = rest.match(THOUGHT_TAIL_RE);
    if (tail) {
      const m = lastMainOpen(tail[1]);
      if (m) {
        thoughts.push(tail[1].slice(0, m.index));
        rest = rest.slice(0, tail.index) + tail[1].slice(m.index);
      } else {
        thoughts.push(tail[1]);
        rest = rest.slice(0, tail.index);
      }
    }
    if (thoughts.length) return { thoughts, rest, closed };
    const i = mainAt();
    const c = rest.match(BARE_CLOSE_RE);
    if (c && (i < 0 || c.index < i)) return { thoughts: [rest.slice(0, c.index)], rest: rest.slice(c.index + c[0].length), closed: true };
    const r = rest.match(DOC_ROOT_RE);
    if (r && (i < 0 || r.index < i)) return { thoughts: [rest.slice(0, r.index)], rest: rest.slice(r.index + r[0].length), closed: true };
    if (HEAD_MARK_RE.test(rest) && i > 0) return { thoughts: [rest.slice(0, i)], rest: rest.slice(i), closed: true };
    if (streaming && i < 0 && rest.trim()) return { thoughts: [rest], rest: "", closed: false };
    return { thoughts, rest, closed: false };
  }
  function extractThought(raw, streaming) {
    if (!raw) return "";
    return splitThought(raw, streaming).thoughts.map(cleanThought).filter((t) => t && t !== "我think完了。").join("\n\n");
  }
  var STRIP_TAGS = [
    "details",
    "summary",
    "tucao",
    "danmu",
    "konatan_chat",
    "progress",
    "current_event",
    "htmlcontent",
    "guifan",
    "done",
    "disclaimer",
    "Reference_Example",
    "w2g",
    "VariableCheck",
    "memo",
    "choice",
    "safe",
    "theater",
    "recap",
    "background",
    "parallel_world",
    "meow_FM",
    "time_format",
    "aftertalk",
    "Shiosai",
    "snow",
    "quote",
    "math",
    "finish",
    "WF",
    "style",
    "script",
    "scene",
    "image",
    "imgthink",
    "options",
    "branches",
    "SUOT",
    "UpdateVariable",
    "状态面板",
    "角色状态面板",
    "dream_scene",
    "dream_option",
    "dream_after_format",
    "dream_parallel_event",
    "simple_thinking",
    "dream_summary",
    "dream_discuss",
    "dream_big_discuss",
    "dream_after_thinking",
    "original",
    "analysis",
    "safety_check",
    "SexualScene"
  ];
  var STRIP_RE = new RegExp("<(" + STRIP_TAGS.map(esc).join("|") + ")(?:\\s[^<>]*)?>[\\s\\S]*?(?:<\\/\\1\\s*>[ \\t]*\\r?\\n?|$)", "gi");
  var ANY_TAG_RE = /<\/?[A-Za-z_一-鿿][\w\-~:.一-鿿]*(?:\s[^<>]*)?\/?>/g;
  var TAIL_CUT_RE = /<(options|branches|choice|dream_option|w2g|SUOT|dream_after_format|UpdateVariable)(?:\s[^<>]*)?>(?:(?!<\/\1)[\s\S])*$|<!--(?:(?!-->)[\s\S])*$|<\/?[^<>\s]*$/i;
  function stripNoise(text) {
    return text.replace(/<htm1fenge(?:\s[^<>]*)?>([\s\S]*?)(?:<\/htm1fenge\s*>|$)/gi, (m, inner) => {
      const d = inner.match(/<span[^<>]*display:\s*none[^<>]*>([\s\S]*?)<\/span>/i);
      return d ? d[1].trim() : "";
    }).replace(STRIP_RE, "").replace(/<Q>[\s\S]*?(?:<\/WF>|$)/gi, "").replace(/<!--[\s\S]*?-->/g, "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/<br\s*\/?>|<\/paragraph\s*>/gi, "\n").replace(ANY_TAG_RE, "").replace(/^[ \t]*#{1,6}[ \t]*正文[ \t]*(?:\r?\n|$)/gm, "").replace(/^[ \t]*#{1,6}[ \t]+(?=\S)/gm, "").replace(/([」』])\{([^{}\n]+)\}/g, (m, q, t) => "（" + t + "）" + q).replace(/^.*[぀-ヿ].*\{[^{}\n]+\}.*$/gm, (line) => line.replace(/\{([^{}\n]+)\}/g, "（$1）")).replace(/^([ \t]*「)([^」\n]*[぀-ヿ][^」\n]*)」[ \t]*\r?\n[ \t]*「([^」\n]+)」[ \t]*(?=\r?\n|$)/gm, "$1$2（$3）」").replace(/^[ \t]*>[ \t]*凝嘤嘤[：:].*(?:\r?\n|$)/gm, "").replace(/^[ \t]*现在开始我的konatan_planning思考。[ \t]*(?:\r?\n|$)/gm, "").replace(/《end》/g, "").replace(/\n{3,}/g, "\n\n");
  }
  function finish(body, depth) {
    return applyDisplayRegexes(stripNoise(body), depth).trim();
  }
  function extractMainText(raw, streaming, depth) {
    if (!raw) return "";
    if (/^\s*(?:<StatusPlaceHolderImpl\s*\/?>\s*)*【开场介绍】/.test(raw)) return "";
    const split = splitThought(raw, streaming);
    const rest = split.rest;
    const blocks = mainBlocks(rest);
    if (blocks) return finish(blocks.join("\n\n"), depth);
    const tg = lastMatch(rest, TG_BODY_RE);
    if (tg) {
      let body = rest.slice(tg.index + tg[0].length);
      const e = body.search(TG_AFTER_RE);
      body = e >= 0 ? body.slice(0, e) : body.replace(TAIL_CUT_RE, "");
      return finish(body, depth);
    }
    if (streaming && !split.closed) return "";
    return finish(streaming ? rest.replace(TAIL_CUT_RE, "") : rest, depth);
  }
  var OPTION_TAGS = ["options", "choice", "branches", "dream_option", "w2g", "SUOT"];
  var OPTION_PREFIX_RE = /^\s*>?\s*(?:\d+\s*[.、):：]|[A-Za-z]\s*[.、):：]|[-*•]|选项[一二三四五六七八九十\d]+\s*[：:]|[①②③④⑤⑥⑦⑧])?\s*(?:[[【][^\]】\n]{1,12}[\]】])?\s*/;
  function extractOptions(raw, depth) {
    if (!raw) return [];
    const s = splitThought(raw, false).rest;
    let inner = null;
    for (const tag of OPTION_TAGS) {
      const m = lastMatch(s, new RegExp("<" + tag + "(?:\\s[^<>]*)?>", "i"));
      if (!m) continue;
      const body = s.slice(m.index + m[0].length);
      const j = body.toLowerCase().indexOf("</" + tag.toLowerCase() + ">");
      if (j >= 0) {
        inner = body.slice(0, j);
        break;
      }
    }
    if (inner == null) return [];
    const text = applyDisplayRegexes(inner, depth).replace(/<summary(?:\s[^<>]*)?>[\s\S]*?<\/summary\s*>/gi, "").replace(/<\/option\s*>/gi, "\n").replace(ANY_TAG_RE, "");
    return text.split(/\n|\|/).map((l) => l.replace(OPTION_PREFIX_RE, "").trim()).filter(Boolean).slice(0, 10);
  }

  // src/16-story-actions.js
  function setStoryStatus(text) {
    const el = doc.getElementById(SEL.status);
    if (el) el.textContent = text || "";
  }
  var sending = false;
  var currentGenId = null;
  var stopped = false;
  var pendingStop = false;
  var genBaselineId = null;
  function setGenerating(on) {
    sending = on;
    const ta = doc.getElementById(SEL.textarea);
    const send = doc.getElementById(SEL.send);
    const regen = doc.getElementById(SEL.regen);
    const del = doc.getElementById(SEL.del);
    if (ta) ta.disabled = on;
    if (send) {
      send.textContent = on ? "止" : "敕";
      send.title = on ? "停止" : "发送";
    }
    if (regen) regen.disabled = on;
    if (del) del.disabled = on;
    const early = doc.querySelector("#" + SEL.paper + " .mz-earlier");
    if (early) early.disabled = on;
  }
  var delMode = false;
  var delSel = /* @__PURE__ */ new Set();
  var delArmed = false;
  var delArmTimer = null;
  var delArmedAt = 0;
  function updateDelBar() {
    delArmed = false;
    if (delArmTimer) {
      clearTimeout(delArmTimer);
      delArmTimer = null;
    }
    const n = delSel.size;
    const count = doc.getElementById(SEL.delCount);
    const btn = doc.getElementById(SEL.delConfirm);
    if (count) count.textContent = n ? "自此以下 " + cn(n) + " 则" : "点一则，自它起到末尾一并删去";
    if (btn) {
      btn.disabled = !n;
      btn.classList.remove("mz-armed");
      btn.textContent = n ? "删去 " + cn(n) + " 则" : "删除";
    }
  }
  function selectDelFrom(mid) {
    const lastId = safeLastMessageId();
    const from = delSel.size ? Math.min(...delSel) : null;
    delSel.clear();
    if (from !== mid && lastId != null && mid >= 1) for (let i = mid; i <= lastId; i++) delSel.add(i);
    const log = doc.getElementById(SEL.paper);
    if (log) log.querySelectorAll(".mz-turn.mz-selable").forEach((t) => t.classList.toggle("mz-delsel", delSel.has(+t.dataset.mid)));
    updateDelBar();
  }
  function setDelMode(on) {
    if (!on) {
      const log = doc.getElementById(SEL.paper);
      if (log) log.querySelectorAll(".mz-turn.mz-selable").forEach((t) => t.classList.remove("mz-selable", "mz-delsel"));
    }
    delMode = on;
    delSel.clear();
    const row = doc.getElementById(SEL.writing);
    const bar = doc.getElementById(SEL.delbar);
    if (row) row.style.display = on ? "none" : "";
    if (bar) bar.classList.toggle("mz-show", on);
    updateDelBar();
    setStoryStatus("");
    renderStoryLog();
  }
  async function onDelToggle() {
    if (sending) return;
    if (delMode) {
      setDelMode(false);
      return;
    }
    await commitUserEditIfOpen();
    if (editState) return;
    const lastId = safeLastMessageId();
    if (lastId == null || lastId < 1) {
      setStoryStatus("尚无可删去的记录");
      return;
    }
    setDelMode(true);
  }
  async function onDelConfirm() {
    if (!delMode || !delSel.size || sending) return;
    const btn = doc.getElementById(SEL.delConfirm);
    if (!delArmed) {
      delArmed = true;
      delArmedAt = Date.now();
      if (btn) {
        btn.classList.add("mz-armed");
        btn.textContent = "再点一次删去 " + cn(delSel.size) + " 则";
      }
      delArmTimer = setTimeout(updateDelBar, 3e3);
      return;
    }
    if (Date.now() - delArmedAt < 300) return;
    if (delArmTimer) {
      clearTimeout(delArmTimer);
      delArmTimer = null;
    }
    delArmed = false;
    const ids = Array.from(delSel).sort((a, b) => a - b);
    if (btn) {
      btn.disabled = true;
      btn.classList.remove("mz-armed");
    }
    setStoryStatus("删去中……");
    try {
      if (typeof triggerSlash !== "function") throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");
      const segs = [];
      ids.forEach((id) => {
        const cur = segs[segs.length - 1];
        if (cur && id === cur[1] + 1) cur[1] = id;
        else segs.push([id, id]);
      });
      for (const [a, b] of segs.reverse()) {
        await triggerSlash(a === b ? "/cut " + a : "/cut " + a + "-" + b);
      }
    } catch (e) {
      setStoryStatus("出错: " + (e && e.message ? e.message : e));
    } finally {
      setLastStat(null);
      storyCacheDrop();
      setDelMode(false);
      renderAll(true);
      ensureGate();
    }
  }
  var editState = null;
  function setEditState(v) {
    editState = v;
  }
  function applyUserEdit(log) {
    if (!editState) return;
    const turn = log.querySelector('.mz-turn.mz-zhu[data-mid="' + editState.mid + '"]');
    if (!turn) {
      editState = null;
      return;
    }
    turn.classList.add("mz-editing");
    turn.innerHTML = '<div class="mz-story-edit"><textarea title="Ctrl+Enter 存, Esc 弃"></textarea><div class="mz-story-edit-row"><button class="mz-edit-btn mz-edit-cancel">弃</button><button class="mz-edit-btn mz-primary mz-edit-save">存</button></div></div>';
    const ta = turn.querySelector("textarea");
    ta.value = editState.draft;
    const grow = () => {
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + 2 + "px";
    };
    grow();
    ta.addEventListener("input", () => {
      if (editState) editState.draft = ta.value;
      grow();
    });
    let editComposing = false;
    ta.addEventListener("compositionstart", () => {
      editComposing = true;
    });
    ta.addEventListener("compositionend", () => {
      editComposing = false;
    });
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && !editComposing && !e.isComposing) {
        e.preventDefault();
        closeUserEdit(true);
      }
    });
    turn.querySelector(".mz-edit-save").addEventListener("click", () => closeUserEdit(true));
    turn.querySelector(".mz-edit-cancel").addEventListener("click", () => closeUserEdit(false));
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
  }
  async function openUserEdit(mid) {
    if (sending || delMode) return;
    if (editState) {
      if (editState.mid === mid) return;
      await closeUserEdit(true);
      if (editState) return;
    }
    let raw = null, block = "";
    try {
      const m = getChatMessages(mid)[0];
      if (m && m.role === "user") {
        raw = userDisplayText(m.message);
        block = (String(m.message).match(/<UpdateVariable>[\s\S]*?<\/UpdateVariable>/i) || [""])[0];
      }
    } catch (e) {
      dbg("readUserMsg", e);
    }
    if (raw == null) return;
    editState = { mid, draft: raw, block };
    const log = doc.getElementById(SEL.paper);
    if (log) applyUserEdit(log);
    setStoryStatus("改写中……");
  }
  async function closeUserEdit(save) {
    if (!editState) return;
    const mid = editState.mid;
    const text = String(editState.draft == null ? "" : editState.draft).trim();
    if (save && text) {
      try {
        await setChatMessages([{ message_id: mid, message: editState.block ? text + "\n" + editState.block : text }], { refresh: "affected" });
        storyCacheDrop(mid);
      } catch (e) {
        setStoryStatus("出错: " + (e && e.message ? e.message : e));
        return;
      }
      try {
        await eventEmit(tavern_events.MESSAGE_EDITED, mid);
        await eventEmit(tavern_events.MESSAGE_UPDATED, mid);
      } catch (e) {
        console.warn("[密宗前端] 补发编辑事件失败", e);
      }
    }
    editState = null;
    const log = doc.getElementById(SEL.paper);
    const editingTurn = log && log.querySelector('.mz-turn.mz-editing[data-mid="' + mid + '"]');
    if (editingTurn) editingTurn.remove();
    setStoryStatus(save && !text ? "未写一字，照旧" : "");
    renderStoryLog();
  }
  function commitUserEditIfOpen() {
    return editState ? closeUserEdit(true) : Promise.resolve();
  }
  function onStoryLogDblclick(e) {
    const turn = e.target.closest(".mz-turn.mz-zhu");
    if (!turn || turn.classList.contains("mz-editing")) return;
    const mid = +turn.dataset.mid;
    if (!Number.isInteger(mid)) return;
    openUserEdit(mid);
  }
  var tapDown = null;
  var lastTap = null;
  var TAP_MOVE_TOL = 12;
  var TAP_HOLD_MS = 350;
  var TAP_GAP_MS = 400;
  var TAP_RADIUS = 30;
  function onStoryTapDown(e) {
    if (e.pointerType !== "touch" && e.pointerType !== "pen") return;
    tapDown = { x: e.clientX, y: e.clientY, t: Date.now() };
  }
  function onStoryTapUp(e) {
    if (e.pointerType !== "touch" && e.pointerType !== "pen") return;
    const down = tapDown;
    tapDown = null;
    if (!down || Date.now() - down.t > TAP_HOLD_MS || Math.abs(e.clientX - down.x) > TAP_MOVE_TOL || Math.abs(e.clientY - down.y) > TAP_MOVE_TOL) {
      lastTap = null;
      return;
    }
    const turn = e.target.closest(".mz-turn.mz-zhu");
    if (!turn || turn.classList.contains("mz-editing")) {
      lastTap = null;
      return;
    }
    const mid = +turn.dataset.mid;
    if (!Number.isInteger(mid)) {
      lastTap = null;
      return;
    }
    const prev = lastTap;
    lastTap = { mid, x: e.clientX, y: e.clientY, t: Date.now() };
    const isDouble = prev && prev.mid === mid && lastTap.t - prev.t < TAP_GAP_MS && Math.abs(e.clientX - prev.x) < TAP_RADIUS && Math.abs(e.clientY - prev.y) < TAP_RADIUS;
    if (!isDouble) return;
    lastTap = null;
    openUserEdit(mid);
  }
  async function runGeneration() {
    stopped = false;
    const genId = "mz_gen_" + Date.now() + "_" + Math.random().toString(36).slice(2);
    currentGenId = genId;
    genBaselineId = safeLastMessageId();
    setStoryStatus("续写中……");
    let streamRAF = null;
    let latestFullText = "";
    let liveReasoning = "";
    let reasoningState = "none";
    let revealedLen = 0;
    const flushStream = () => {
      streamRAF = null;
      const log = doc.getElementById(SEL.paper);
      if (!log) return;
      const target = extractMainText(latestFullText, true, 0);
      const existing = log.querySelector('[data-stream-genid="' + genId + '"]');
      const stick = nearBottom(log);
      if (!target) {
        const liveThought = liveReasoning || extractThought(latestFullText, true);
        const wantThinking = reasoningState !== "none" || !!liveThought;
        setStoryStatus(wantThinking ? "推演中……" : "构思中……");
        const html = wantThinking ? thinkingHtml() : '<div class="mz-text">' + storyTextHtml("…", true) + "</div>";
        if (existing && existing.classList.contains("mz-thinking-turn") === wantThinking) {
          if (!wantThinking) existing.innerHTML = html;
        } else {
          if (existing) existing.remove();
          log.insertAdjacentHTML("beforeend", '<div class="mz-turn mz-gm' + (wantThinking ? " mz-thinking-turn" : "") + '" data-stream-genid="' + genId + '">' + html + "</div>");
        }
        if (stick) log.scrollTop = log.scrollHeight;
        updateJumpBtn();
        return;
      }
      setStoryStatus("续写中……");
      if (revealedLen > target.length) revealedLen = target.length;
      const gap = target.length - revealedLen;
      if (gap > 0) revealedLen = Math.min(target.length, revealedLen + Math.max(1, Math.ceil(gap / 6)));
      const text = target.slice(0, revealedLen);
      if (existing && !existing.classList.contains("mz-thinking-turn")) {
        const body = existing.querySelector(".mz-text");
        if (body) paintStoryText(body, text || "…");
      } else {
        if (existing) existing.remove();
        const thought = liveReasoning || extractThought(latestFullText);
        const foldHtml = thought ? thoughtFoldHtml(thought, null, false) : "";
        log.insertAdjacentHTML("beforeend", '<div class="mz-turn mz-gm" data-stream-genid="' + genId + '">' + foldHtml + '<div class="mz-text">' + storyTextHtml(text || "…", true) + "</div></div>");
      }
      if (stick) log.scrollTop = log.scrollHeight;
      updateJumpBtn();
      if (revealedLen < target.length) streamRAF = requestAnimationFrame(flushStream);
    };
    const onStream = (fullText) => {
      if (currentGenId !== genId) return;
      if (stopped) {
        try {
          SillyTavern.stopGeneration();
        } catch (e) {
          dbg("stopGen", e);
        }
      }
      latestFullText = fullText;
      if (streamRAF == null) streamRAF = requestAnimationFrame(flushStream);
    };
    let receivedId = null;
    const onReceived = (mid) => {
      if (currentGenId === genId) receivedId = mid;
    };
    const onReasoning = (reasoning, duration, mid, state) => {
      liveReasoning = reasoning || liveReasoning;
      reasoningState = state;
      if (streamRAF == null) streamRAF = requestAnimationFrame(flushStream);
    };
    try {
      eventOn(tavern_events.STREAM_TOKEN_RECEIVED, onStream);
      eventOn(tavern_events.MESSAGE_RECEIVED, onReceived);
      eventOn(tavern_events.STREAM_REASONING_DONE, onReasoning);
      if (typeof triggerSlash !== "function") throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");
      await triggerSlash("/trigger await=true");
      const after = safeLastMessageId();
      const newFloor = after != null && genBaselineId != null && after > genBaselineId ? getChatMessages(after)[0] || null : null;
      const gotReply = !!(newFloor && newFloor.role !== "user");
      if (stopped) setStoryStatus("已停");
      else if (gotReply) setStoryStatus("");
      else setStoryStatus("未得回音，可重拟前文");
    } catch (e) {
      setStoryStatus(stopped ? "已停" : "出错: " + (e && e.message ? e.message : e));
    } finally {
      eventRemoveListener(tavern_events.STREAM_TOKEN_RECEIVED, onStream);
      eventRemoveListener(tavern_events.STREAM_REASONING_DONE, onReasoning);
      eventRemoveListener(tavern_events.MESSAGE_RECEIVED, onReceived);
      if (streamRAF != null) {
        cancelAnimationFrame(streamRAF);
        streamRAF = null;
      }
      const rid = receivedId != null ? receivedId : safeLastMessageId();
      if (rid != null && rid >= 0) storyCacheDrop(rid);
      genBaselineId = null;
      currentGenId = null;
      setGenerating(false);
      renderStoryLog();
      renderAll();
    }
  }
  function escapeSlashText(s) {
    return String(s).replace(/\\/g, "\\\\").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}");
  }
  async function ensureCarried(afterSend, stat) {
    try {
      const all = getVariables({ type: "message", message_id: afterSend }) || {};
      const cur = all.stat_data;
      const 印 = _.get(stat, "系统.代发");
      if (cur && 印 && _.get(cur, "系统.代发") === 印) {
        setLastStat(_.cloneDeep(_.omit(cur, ["$internal"])));
      } else {
        dbg("carryStat", "用户楼不见代发印记, 兜底替换");
        setStoryStatus("账房补记");
        await replaceVariables({ ...all, stat_data: stat }, { type: "message", message_id: afterSend });
        setLastStat(_.cloneDeep(stat));
      }
      storyCacheDrop(afterSend);
      renderAll(true);
    } catch (e) {
      dbg("carryStat", e);
      throw new Error("账目未能记入，请删去这一则重来");
    }
  }
  async function sendText(text, opts) {
    if (sending || delMode || !text) return false;
    await commitUserEditIfOpen();
    if (editState) return false;
    if (gateNeeded()) {
      openLift(GATE_WIN);
      setStoryStatus("请先开坛");
      return false;
    }
    setGenerating(true);
    try {
      setStoryStatus("记录中……");
      if (typeof triggerSlash !== "function") throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");
      const beforeSend = safeLastMessageId();
      await triggerSlash("/send " + escapeSlashText(text));
      const afterSend = safeLastMessageId();
      const sentFloor = afterSend != null ? getChatMessages(afterSend)[0] || null : null;
      if (afterSend !== (beforeSend == null ? -1 : beforeSend) + 1 || !sentFloor || sentFloor.role !== "user") {
        throw new Error("用户消息未能入楼");
      }
      if (opts && opts.carryStat) await ensureCarried(afterSend, opts.carryStat);
      renderStoryLog();
      scrollStoryToEnd();
    } catch (e) {
      pendingStop = false;
      setStoryStatus("出错: " + (e && e.message ? e.message : e));
      setGenerating(false);
      return false;
    }
    if (pendingStop) {
      pendingStop = false;
      setStoryStatus("已停");
      setGenerating(false);
      return true;
    }
    await runGeneration();
    return true;
  }
  async function onSend() {
    const ta = doc.getElementById(SEL.textarea);
    if (!ta || sending) return;
    const text = ta.value.trim();
    if (!text) return;
    ta.value = "";
    autogrowTA();
    const ok = await sendText(text);
    if (!ok) {
      ta.value = text;
      autogrowTA();
    }
  }
  function onOptionClick(text) {
    if (sending) return;
    if (getPref("optSend", "now") === "fill") {
      const ta = doc.getElementById(SEL.textarea);
      if (ta) {
        ta.value = text;
        autogrowTA();
        ta.focus();
      }
      return;
    }
    sendText(text);
  }
  function onSendButton() {
    if (!sending) {
      onSend();
      return;
    }
    if (currentGenId) {
      stopped = true;
      try {
        if (SillyTavern && typeof SillyTavern.stopGeneration === "function") SillyTavern.stopGeneration();
        else console.warn("[密宗前端] 环境缺少 SillyTavern.stopGeneration");
      } catch (e) {
        dbg("stopGen2", e);
      }
    } else {
      pendingStop = true;
    }
    setStoryStatus("停笔中……");
  }
  async function onRegenerate() {
    if (sending || delMode) return;
    await commitUserEditIfOpen();
    if (editState) return;
    const lastId = getLastMessageId();
    if (lastId == null || lastId < 0) return;
    const last = getChatMessages(lastId)[0];
    const isReply = last && last.role !== "user";
    if (isReply && lastId === 0) return;
    setGenerating(true);
    try {
      if (isReply) {
        if (typeof triggerSlash !== "function") throw new Error("环境缺少 triggerSlash, 请更新酒馆助手");
        await triggerSlash("/cut " + lastId);
        if (safeLastMessageId() !== lastId - 1) throw new Error("删去上一条回文未生效");
        setLastStat(null);
        storyCacheDrop(lastId);
        renderStoryLog();
        renderAll(true);
      }
    } catch (e) {
      pendingStop = false;
      setStoryStatus("出错: " + (e && e.message ? e.message : e));
      setGenerating(false);
      return;
    }
    if (pendingStop) {
      pendingStop = false;
      setStoryStatus("已停");
      setGenerating(false);
      return;
    }
    await runGeneration();
  }

  // src/14-story-log.js
  var WINDOW_SIZE = 30;
  var WINDOW_STEP = 30;
  var windowCount = WINDOW_SIZE;
  var loadingEarlier = false;
  var currentOptions = null;
  var floorCache = /* @__PURE__ */ new Map();
  var footOpen = /* @__PURE__ */ new Map();
  var voiceSeen = /* @__PURE__ */ new Set();
  function storyCacheDrop(id) {
    if (Number.isInteger(id)) {
      storyHtmlCache.delete(id);
      floorCache.delete(id);
      floorCache.delete(id + 1);
      lastRenderedRef.delete(id);
      lastRenderedRef.delete(id + 1);
      voiceSeen.delete(id);
    } else {
      storyHtmlCache.clear();
      floorCache.clear();
      footOpen.clear();
      voiceSeen.clear();
      thoughtFoldOpen.clear();
      lastRenderedRef.clear();
      windowCount = WINDOW_SIZE;
    }
  }
  function msgStat(mid) {
    try {
      if (typeof getVariables === "function" && Number.isInteger(mid) && mid >= 0) {
        const v = getVariables({ type: "message", message_id: mid });
        if (v && v.stat_data) return v.stat_data;
      }
    } catch (e) {
      dbg("msgStat", e);
    }
    return null;
  }
  function floorData(mid) {
    if (floorCache.has(mid)) return floorCache.get(mid);
    let out = null;
    try {
      const cur = msgStat(mid);
      if (cur) {
        const curD = readMVU(cur);
        const prev = mid >= 1 ? msgStat(mid - 1) : null;
        const delta = prev ? diffStat(readMVU(prev), curD) : null;
        out = { delta, girls: curD.核心女主, D: curD };
      }
    } catch (e) {
      console.warn("[密宗前端] 逐楼变量读取失败", e);
    }
    floorCache.set(mid, out);
    return out;
  }
  function fetchStoryMessages() {
    const lastId = getLastMessageId();
    if (lastId == null || lastId < 0) return null;
    const msgs = getChatMessages("0-" + lastId);
    return msgs ? msgs.filter((m) => m.is_hidden !== true) : null;
  }
  function nativeReasoning(m) {
    const ex = m.extra;
    if (!ex) return "";
    return ex.reasoning || ex.extra && ex.extra.reasoning || "";
  }
  function cachedTurnData(m) {
    let data = storyHtmlCache.get(m.message_id);
    if (m.role === "user") {
      if (data === void 0) {
        data = { role: "user", text: userDisplayText(m.message), thought: "", mid: m.message_id };
        storyHtmlCache.set(m.message_id, data);
      }
      return data;
    }
    const depth = msgDepth(m.message_id);
    if (data === void 0 || data.depth !== depth) {
      data = { role: "assistant", text: extractMainText(m.message, false, depth), thought: nativeReasoning(m) || extractThought(m.message), mid: m.message_id, depth };
      storyHtmlCache.set(m.message_id, data);
    }
    return data;
  }
  function turnHtml(data, skipFoot) {
    if (!data.text) return "";
    const open = thoughtFoldOpen.has(data.mid);
    const foot = !skipFoot && data.role !== "user" && Number.isInteger(data.mid) ? floorFootHtml(data.mid) : "";
    return storyTurnHtml(data.role, data.text, data.mid, data.thought, open, foot);
  }
  function applyDelModeClasses(log) {
    log.querySelectorAll(".mz-turn").forEach((t) => {
      const mid = +t.dataset.mid;
      if (!(mid >= 1)) return;
      t.classList.add("mz-selable");
      if (delSel.has(mid)) t.classList.add("mz-delsel");
    });
  }
  function refreshFoot(el) {
    const wrap = el.closest(".mz-ff-wrap");
    if (!wrap) return;
    wrap.innerHTML = floorFootInner(+wrap.dataset.footMid);
  }
  function refreshAllFeet() {
    doc.querySelectorAll("#" + SHELL_ID + " .mz-ff-wrap").forEach((w) => {
      w.innerHTML = floorFootInner(+w.dataset.footMid);
    });
  }
  function toggleFold(head) {
    const fold = head.closest(".mz-thought");
    const open = !fold.classList.contains("mz-open");
    fold.classList.toggle("mz-open", open);
    const midAttr = fold.dataset.foldMid;
    if (midAttr != null) {
      const mid = +midAttr;
      if (open) thoughtFoldOpen.add(mid);
      else thoughtFoldOpen.delete(mid);
    }
  }
  function onStoryLogClick(e) {
    const sentinel = e.target.closest(".mz-earlier");
    if (sentinel) {
      e.stopPropagation();
      loadEarlier();
      return;
    }
    const head = e.target.closest(".mz-th-head");
    if (head) {
      e.stopPropagation();
      toggleFold(head);
      return;
    }
    if (delMode) {
      const turn = e.target.closest(".mz-turn");
      if (turn) {
        const mid = +turn.dataset.mid;
        if (mid >= 1) selectDelFrom(mid);
      }
      return;
    }
    const optBtn = e.target.closest(".mz-opt");
    if (optBtn) {
      e.stopPropagation();
      const idx = +optBtn.dataset.idx;
      if (currentOptions && currentOptions[idx] != null) onOptionClick(currentOptions[idx]);
      return;
    }
    const charBtn = e.target.closest("[data-foot-char]");
    if (charBtn) {
      e.stopPropagation();
      selectBond(charBtn.dataset.footChar);
      openLift("同心缕");
      return;
    }
    const tabBtn = e.target.closest("[data-foot-tab]");
    if (tabBtn) {
      e.stopPropagation();
      const wrap = tabBtn.closest(".mz-ff-wrap");
      if (wrap) {
        footOpen.set(+wrap.dataset.footMid, tabBtn.dataset.footTab);
        refreshFoot(tabBtn);
      }
      return;
    }
    const item = e.target.closest("[data-foot-item]");
    if (item) {
      e.stopPropagation();
      const wrap = item.closest(".mz-ff-wrap");
      if (wrap) {
        const mid = +wrap.dataset.footMid;
        const key = item.dataset.footItem;
        const cur = String(footOpen.get(mid) || "");
        const isVoice = key.indexOf("voice:") === 0;
        const same = isVoice ? cur.indexOf(key + ":") === 0 : cur === key;
        if (same) footOpen.delete(mid);
        else footOpen.set(mid, isVoice ? key + ":voice" : key);
        if (isVoice) voiceSeen.add(mid);
        refreshFoot(item);
      }
    }
  }
  function patchOptionsStrip(log, messages) {
    const existing = log.querySelector(".mz-opts");
    if (existing) existing.remove();
    currentOptions = null;
    const last = messages[messages.length - 1];
    if (!sending && last && last.role !== "user") {
      const opts = extractOptions(last.message, msgDepth(last.message_id));
      if (opts.length) {
        currentOptions = opts;
        log.insertAdjacentHTML("beforeend", optionsHtml(opts));
      }
    }
    syncCrisisFoot(log);
  }
  function updateTurnContent(el, data) {
    if (el.classList.contains("mz-editing")) return;
    const textEl = el.querySelector(".mz-text");
    if (textEl) syncStoryParas(textEl, storyParas(data.text, false));
    const existingThought = el.querySelector(".mz-thought");
    if (data.thought) {
      const open = thoughtFoldOpen.has(data.mid);
      if (existingThought) {
        existingThought.classList.toggle("mz-open", open);
        const body = existingThought.querySelector(".mz-th-body");
        const newBody = escapeHtml(data.thought);
        if (body && body.innerHTML !== newBody) body.innerHTML = newBody;
      } else {
        el.insertAdjacentHTML("afterbegin", thoughtFoldHtml(data.thought, data.mid, open));
      }
    } else if (existingThought) {
      existingThought.remove();
    }
    if (data.role !== "user" && Number.isInteger(data.mid)) {
      const existingFoot = el.querySelector(".mz-ff-wrap");
      const newFootHtml = floorFootHtml(data.mid);
      if (newFootHtml) {
        if (existingFoot) existingFoot.innerHTML = floorFootInner(data.mid);
        else el.insertAdjacentHTML("beforeend", newFootHtml);
      } else if (existingFoot) {
        existingFoot.remove();
      }
    }
  }
  function patchStoryLog(log, messages, coldStart) {
    const desiredMids = /* @__PURE__ */ new Set();
    const desiredData = [];
    for (const m of messages) {
      const data = cachedTurnData(m);
      if (!data.text) continue;
      desiredMids.add(m.message_id);
      desiredData.push({ mid: m.message_id, data });
    }
    const existingByMid = /* @__PURE__ */ new Map();
    const toRemove = [];
    for (const child of Array.from(log.children)) {
      const midAttr = child.dataset.mid;
      if (midAttr != null) {
        const mid = +midAttr;
        if (desiredMids.has(mid)) existingByMid.set(mid, child);
        else toRemove.push(child);
      } else {
        toRemove.push(child);
      }
    }
    for (const el of toRemove) el.remove();
    let cursor = log.firstElementChild;
    for (const { mid, data } of desiredData) {
      const existing = existingByMid.get(mid);
      if (existing) {
        if (existing !== cursor) log.insertBefore(existing, cursor);
        else cursor = cursor.nextElementSibling;
        if (lastRenderedRef.get(mid) !== data) {
          updateTurnContent(existing, data);
          lastRenderedRef.set(mid, data);
        }
      } else {
        const html = turnHtml(data, coldStart);
        if (html) {
          const tpl = doc.createElement("template");
          tpl.innerHTML = html;
          log.insertBefore(tpl.content.firstElementChild, cursor);
          lastRenderedRef.set(mid, data);
        }
      }
    }
    for (const [mid] of lastRenderedRef) {
      if (!desiredMids.has(mid)) lastRenderedRef.delete(mid);
    }
  }
  var footerBackfillRAF = null;
  function scheduleFooterBackfill(log) {
    if (footerBackfillRAF != null) cancelAnimationFrame(footerBackfillRAF);
    const turns = Array.from(log.querySelectorAll(".mz-turn.mz-gm"));
    let i = turns.length - 1;
    function chunk() {
      footerBackfillRAF = null;
      const deadline = performance.now() + 8;
      while (i >= 0 && performance.now() < deadline) {
        const t = turns[i--];
        const mid = +t.dataset.mid;
        if (Number.isInteger(mid) && !t.querySelector(".mz-ff-wrap")) {
          const footHtml = floorFootHtml(mid);
          if (footHtml) t.insertAdjacentHTML("beforeend", footHtml);
        }
      }
      if (i >= 0) footerBackfillRAF = requestAnimationFrame(chunk);
    }
    footerBackfillRAF = requestAnimationFrame(chunk);
  }
  function loadEarlier() {
    if (delMode || sending) return;
    loadingEarlier = true;
    windowCount += WINDOW_STEP;
    renderStoryLog();
    loadingEarlier = false;
  }
  function renderStoryLog() {
    const log = doc.getElementById(SEL.paper);
    if (!log) return;
    try {
      let stick = !log.childElementCount || nearBottom(log);
      const prevTop = log.scrollTop;
      const prevHeight = log.scrollHeight;
      let messages = fetchStoryMessages();
      if (!messages) {
        log.innerHTML = "";
        lastRenderedRef.clear();
        return;
      }
      if (sending && genBaselineId != null) messages = messages.filter((m) => m.message_id <= genBaselineId);
      const totalCount = messages.length;
      const wStart = Math.max(0, totalCount - windowCount);
      const windowed = messages.slice(wStart);
      const hasEarlier = wStart > 0;
      const coldStart = lastRenderedRef.size === 0 && windowed.length > 0;
      if (coldStart) stick = true;
      patchStoryLog(log, windowed, coldStart);
      const existingSentinel = log.querySelector(".mz-earlier");
      if (hasEarlier) {
        const label = "前文尚有 " + cn(wStart) + " 则，展卷";
        if (existingSentinel) {
          existingSentinel.textContent = label;
          existingSentinel.disabled = delMode || sending;
        } else {
          const el = doc.createElement("button");
          el.className = "mz-earlier";
          el.textContent = label;
          el.disabled = delMode || sending;
          log.insertBefore(el, log.firstChild);
        }
      } else if (existingSentinel) {
        existingSentinel.remove();
      }
      if (delMode) {
        applyDelModeClasses(log);
      } else {
        patchOptionsStrip(log, windowed);
        applyUserEdit(log);
      }
      if (stick) {
        log.scrollTop = log.scrollHeight;
      } else if (loadingEarlier) {
        log.scrollTop = prevTop + (log.scrollHeight - prevHeight);
      } else {
        log.scrollTop = prevTop;
      }
      updateJumpBtn();
      if (coldStart) scheduleFooterBackfill(log);
    } catch (e) {
      console.warn("[密宗前端] 正文渲染失败", e);
      if (!log.childElementCount) setStoryStatus("卷文未能铺展，请重新入卷");
    }
  }

  // src/13-floor.js
  var TEXT_LABEL = { 风波: "风波", 表殿: "表殿" };
  function footItems(d) {
    const items = [];
    if (!d || !d.delta) return items;
    const dl = d.delta;
    if (dl.铜钱) {
      const dv = dl.铜钱.to - dl.铜钱.from;
      items.push({
        key: "stat:铜钱",
        html: '<span>铜钱</span><span class="mz-dv ' + (dv > 0 ? "mz-up" : "mz-down") + '">' + (dv > 0 ? ICO.up : ICO.down) + money(Math.abs(dv)) + "</span>",
        line: "铜钱 " + money(dl.铜钱.from) + (dv > 0 ? " 升至 " : " 降至 ") + "<b>" + money(dl.铜钱.to) + "</b>"
      });
    }
    if (dl.信众) {
      const dv = dl.信众.to - dl.信众.from;
      items.push({
        key: "stat:信众",
        html: '<span>信众</span><span class="mz-dv ' + (dv > 0 ? "mz-up" : "mz-down") + '">' + (dv > 0 ? ICO.up : ICO.down) + cn(Math.abs(dv)) + "人</span>",
        line: "信众 " + cn(dl.信众.from) + (dv > 0 ? " 升至 " : " 降至 ") + "<b>" + cn(dl.信众.to) + "</b>"
      });
    }
    Object.keys(TEXT_LABEL).forEach((k) => {
      if (!dl[k]) return;
      items.push({
        key: "stat:" + k,
        html: "<span>" + TEXT_LABEL[k] + '</span><span class="mz-dv">' + escapeHtml(dl[k].to) + "</span>",
        line: TEXT_LABEL[k] + " " + escapeHtml(dl[k].from || "无") + " 改作 <b>" + escapeHtml(dl[k].to) + "</b>"
      });
    });
    CAST.forEach((n) => {
      const ch = dl["位阶." + n];
      if (!ch) return;
      items.push({
        key: "stat:位阶." + n,
        html: "<span>" + n + '</span><span class="mz-dv mz-up">' + escapeHtml(ch.to) + "</span>",
        line: n + " " + escapeHtml(ch.from) + " 进至 <b>" + escapeHtml(ch.to) + "</b>"
      });
    });
    return items;
  }
  function footVoices(d) {
    return d && d.delta ? CAST.filter((n) => d.delta["心声." + n] || d.delta["回想." + n]) : [];
  }
  var crisisMid = null;
  function crisisNow() {
    const a = readMVU().暗流 || {};
    return { name: String(a.本月危机 || "") };
  }
  function crisisGroupHtml(name, isOpen) {
    return '<span class="mz-ff-label">危机</span><button class="mz-ff-voice mz-ff-cbtn' + (isOpen ? " mz-open" : "") + '" data-foot-item="crisis">' + escapeHtml(name) + "</button>";
  }
  function crisisPanelHtml(name) {
    return '<div class="mz-ff-detail mz-ff-cpanel mz-show">' + escapeHtml(CRISIS_NOTE[name] || FORM_MSG.朱票副题) + "</div>";
  }
  var glyphSvg = (ch) => {
    const g = GLYPHS[ch];
    return g ? '<svg viewBox="0 0 ' + g.w + " " + GLYPH_H + '"><path d="' + g.d + '"/></svg>' : "<b>" + escapeHtml(ch) + "</b>";
  };
  function stampBig(text, caption, cls) {
    const root = doc.getElementById(SHELL_ID);
    if (!root) return;
    root.querySelectorAll(".mz-huo").forEach((el2) => el2.remove());
    const el = doc.createElement("div");
    el.className = "mz-huo" + (cls ? " " + cls : "");
    el.innerHTML = '<span class="mz-huo-word">' + [...text].map(glyphSvg).join("") + "</span>" + (caption ? "<small>" + escapeHtml(caption) + "</small>" : "");
    el.addEventListener("animationend", (e) => {
      if (e.target === el) el.remove();
    });
    root.appendChild(el);
  }
  var crisisSeen = null;
  function syncCrisisFoot(log) {
    const name = crisisNow().name;
    if (crisisSeen === null) crisisSeen = name;
    else if (name !== crisisSeen) {
      crisisSeen = name;
      if (name && isShellVisible()) stampBig("祸", name);
    }
    if (!log) return;
    const turns = log.querySelectorAll(".mz-turn.mz-gm");
    const last = turns.length ? turns[turns.length - 1] : null;
    const mid = last ? +last.dataset.mid : NaN;
    const prev = crisisMid;
    crisisMid = Number.isInteger(mid) ? mid : null;
    const redo = /* @__PURE__ */ new Set();
    if (prev != null && prev !== crisisMid) redo.add(prev);
    if (crisisMid != null) redo.add(crisisMid);
    redo.forEach((m) => {
      const t = log.querySelector('.mz-turn.mz-gm[data-mid="' + m + '"]');
      if (!t) return;
      const wrap = t.querySelector(":scope > .mz-ff-wrap");
      const inner = floorFootInner(m);
      if (wrap) {
        if (inner) wrap.innerHTML = inner;
        else wrap.remove();
      } else if (inner) t.insertAdjacentHTML("beforeend", '<div class="mz-ff-wrap" data-foot-mid="' + m + '">' + inner + "</div>");
    });
  }
  function voiceCardHtml(mid, name, tab) {
    const d = floorData(mid) || { girls: {} };
    const g = d.girls[name] || { 心声: "", 回想: {} };
    const img = portraitOf(name, d.D);
    const memos = Object.entries(g.回想);
    const last = memos.length ? memos[memos.length - 1] : null;
    let memoHtml2 = '<div class="mz-vc-empty">尚无回想</div>';
    if (last) {
      const seg = String(last[1] || "").split("/");
      const when = seg.length > 1 ? seg[0].trim() : "";
      const body = seg.length > 1 ? seg.slice(1).join("/").trim() : String(last[1] || "");
      memoHtml2 = '<div class="mz-vc-memos"><div class="mz-vc-memo"><b>' + escapeHtml(last[0]) + (when ? "（" + escapeHtml(when) + "）" : "") + "</b>　" + escapeHtml(body) + "</div></div>";
    }
    const tabBtn = (k, label) => "<button" + (tab === k ? ' class="mz-on"' : "") + ' data-foot-tab="voice:' + name + ":" + k + '">' + label + "</button>";
    return '<div class="mz-vc mz-show ' + STAMP[name] + (tab === "memoir" ? " mz-memoir" : "") + '"><div class="mz-vc-img" title="查阅同心缕" data-foot-char="' + name + '">' + (img ? '<img src="' + escapeHtml(img) + '" alt="' + name + '">' : "<span>立绘待补</span>") + '</div><div class="mz-vc-main"><div class="mz-vc-head">' + name + '<span class="mz-vc-tabs">' + tabBtn("voice", "心声") + "｜" + tabBtn("memoir", "回想") + "</span></div>" + (g.心声 ? '<div class="mz-vc-text">' + escapeHtml(g.心声) + "</div>" : '<div class="mz-vc-text mz-vc-empty">此刻未通心曲</div>') + (tab === "memoir" ? memoHtml2 : '<div class="mz-vc-memos"></div>') + "</div></div>";
  }
  function floorFootInner(mid) {
    const d = floorData(mid);
    if (!d) return "";
    const items = footItems(d), voices = footVoices(d);
    const crisis = mid === crisisMid ? crisisNow() : null;
    const cname = crisis ? crisis.name : "";
    if (!items.length && !voices.length && !cname) return "";
    const open = String(footOpen.get(mid) || "").split(":");
    const openKey = open[0] === "stat" ? open.join(":") : "";
    const openName2 = open[0] === "voice" ? open[1] : "";
    const openCrisis = open[0] === "crisis" && !!cname;
    const row = '<div class="mz-ff"><div class="mz-ff-vars">' + items.map((it) => '<button class="mz-ff-var' + (openKey === it.key ? " mz-open" : "") + '" data-foot-item="' + it.key + '">' + it.html + "</button>").join("") + "</div>" + (voices.length || cname ? '<div class="mz-ff-side">' + (cname ? crisisGroupHtml(cname, openCrisis) : "") + (voices.length ? '<span class="mz-ff-label">心声</span>' + voices.map((n) => '<button class="mz-ff-voice' + (openName2 === n ? " mz-open" : "") + '" data-foot-item="voice:' + n + '">' + n + "</button>").join("") + (voiceSeen.has(mid) ? "" : '<span class="mz-dot"></span>') : "") + "</div>" : "") + "</div>";
    let panel = "";
    if (openCrisis) {
      panel = crisisPanelHtml(cname);
    } else if (openKey) {
      const it = items.find((x) => x.key === openKey);
      if (it) panel = '<div class="mz-ff-detail mz-show">' + it.line + "</div>";
    } else if (openName2 && CAST.includes(openName2)) {
      panel = voiceCardHtml(mid, openName2, open[2] === "memoir" ? "memoir" : "voice");
    }
    return row + panel;
  }
  function floorFootHtml(mid) {
    const inner = floorFootInner(mid);
    return inner ? '<div class="mz-ff-wrap" data-foot-mid="' + mid + '">' + inner + "</div>" : "";
  }
  function storyTurnHtml(role, text, mid, thought, open, foot) {
    const cls = role === "user" ? "mz-zhu" : "mz-gm";
    const midAttr = mid == null ? "" : ' data-mid="' + mid + '"';
    const titleAttr = role === "user" && mid != null ? ' title="双击就地改写"' : "";
    const foldHtml = thought ? thoughtFoldHtml(thought, mid, open) : "";
    return '<div class="mz-turn ' + cls + '"' + midAttr + titleAttr + ">" + foldHtml + '<div class="mz-text">' + storyTextHtml(text) + "</div>" + (foot || "") + "</div>";
  }
  function nearBottom(log) {
    return log.scrollHeight - log.scrollTop - log.clientHeight < 80;
  }
  function updateJumpBtn() {
    const log = doc.getElementById(SEL.paper);
    const btn = doc.getElementById(SEL.jump);
    if (!log || !btn) return;
    btn.classList.toggle("mz-show", log.scrollHeight > log.clientHeight && !nearBottom(log));
  }
  function scrollStoryToEnd(smooth) {
    const log = doc.getElementById(SEL.paper);
    if (!log) return;
    if (smooth) log.scrollTo({ top: log.scrollHeight, behavior: "smooth" });
    else log.scrollTop = log.scrollHeight;
    updateJumpBtn();
  }
  var storyHtmlCache = /* @__PURE__ */ new Map();
  var thoughtFoldOpen = /* @__PURE__ */ new Set();
  var lastRenderedRef = /* @__PURE__ */ new Map();

  // src/12-text.js
  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function msgDepth(mid) {
    const last = safeLastMessageId();
    return Number.isInteger(mid) && Number.isInteger(last) && last >= mid ? last - mid : 0;
  }
  function applyDisplayRegexes(text, depth) {
    if (!text) return text;
    try {
      if (typeof formatAsTavernRegexedString === "function") {
        const out = formatAsTavernRegexedString(
          text,
          "ai_output",
          "display",
          Number.isInteger(depth) && depth >= 0 ? { depth } : void 0
        );
        if (String(out).trim() || !text.trim()) text = String(out);
      }
    } catch (e) {
      console.warn("[密宗前端] 应用酒馆显示正则失败, 按原文显示:", e);
    }
    return text.replace(/<ruby(?:\s[^>]*)?>([\s\S]*?)<\/ruby\s*>/gi, (m, inner) => {
      const rt = [];
      const base = inner.replace(/<rp(?:\s[^>]*)?>[\s\S]*?<\/rp\s*>/gi, "").replace(/<rt(?:\s[^>]*)?>([\s\S]*?)<\/rt\s*>/gi, (x, t) => {
        rt.push(t.trim());
        return "";
      });
      return base.trim() + (rt.length ? "（" + rt.join("") + "）" : "");
    }).replace(/<rt(?:\s[^>]*)?>([\s\S]*?)<\/rt\s*>/gi, "（$1）");
  }
  function optionsHtml(opts) {
    return '<div class="mz-opts"><div class="mz-opt-head"><i></i>行事<i></i></div>' + opts.map(
      (t, i) => '<button class="mz-opt" data-idx="' + i + '"><span class="mz-num">' + cn(i + 1) + "</span>" + escapeHtml(t) + "</button>"
    ).join("") + "</div>";
  }
  function autogrowTA() {
    const ta = doc.getElementById(SEL.textarea);
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + 2 + "px";
    updateJumpBtn();
  }
  function ensureStoryDom() {
    const log = doc.getElementById(SEL.paper);
    if (!log || log.dataset.bound) return;
    log.dataset.bound = "1";
    log.addEventListener("scroll", updateJumpBtn);
    log.addEventListener("click", onStoryLogClick);
    log.addEventListener("dblclick", onStoryLogDblclick);
    log.addEventListener("pointerdown", onStoryTapDown);
    log.addEventListener("pointerup", onStoryTapUp);
    doc.getElementById(SEL.jump).addEventListener("click", () => scrollStoryToEnd(!sending));
    doc.getElementById(SEL.send).addEventListener("click", onSendButton);
    doc.getElementById(SEL.regen).addEventListener("click", onRegenerate);
    doc.getElementById(SEL.del).addEventListener("click", onDelToggle);
    doc.getElementById(SEL.delCancel).addEventListener("click", () => setDelMode(false));
    doc.getElementById(SEL.delConfirm).addEventListener("click", onDelConfirm);
    const ta = doc.getElementById(SEL.textarea);
    let composing = false;
    ta.addEventListener("compositionstart", () => {
      composing = true;
    });
    ta.addEventListener("compositionend", () => {
      composing = false;
    });
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey && !composing && !e.isComposing) {
        e.preventDefault();
        if (!sending) onSend();
      }
    });
    ta.addEventListener("input", autogrowTA);
    autogrowTA();
  }
  function storyParas(text, streaming) {
    const escaped = escapeHtml(text);
    const marked = streaming ? escaped : escaped.replace(/“([^”\n]*?)”/g, '<span class="mz-quote">“$1”</span>').replace(/「([^」\n]*?)」/g, '<span class="mz-quote">「$1」</span>').replace(/&quot;([^\n]*?)&quot;/g, '<span class="mz-quote">&quot;$1&quot;</span>').replace(/\*\*/g, "").replace(/\*([^*\n]+?)\*/g, '<span class="mz-inner">$1</span>');
    return marked.split(/\n+/).map((s) => s.trim()).filter(Boolean);
  }
  function storyTextHtml(text, streaming) {
    return storyParas(text, streaming).map((s) => "<p>" + s + "</p>").join("");
  }
  function syncStoryParas(body, parts) {
    const kids = body.children;
    for (let i = 0; i < parts.length; i++) {
      let el = i < kids.length ? kids[i] : null;
      if (!el) {
        el = doc.createElement("p");
        body.appendChild(el);
      }
      if (el.innerHTML !== parts[i]) el.innerHTML = parts[i];
    }
    while (kids.length > parts.length) body.removeChild(kids[kids.length - 1]);
  }
  function paintStoryText(body, text) {
    syncStoryParas(body, storyParas(text, true));
  }
  function thoughtFoldHtml(thought, mid, open) {
    const midAttr = mid == null ? "" : ' data-fold-mid="' + mid + '"';
    return '<div class="mz-thought' + (open ? " mz-open" : "") + '"' + midAttr + '><button class="mz-th-head" title="推演"><span class="mz-rule mz-l"></span><img src="' + asset("incense-coil.webp") + '" alt="推演"><span class="mz-rule mz-r"></span></button><div class="mz-th-body">' + escapeHtml(thought) + "</div></div>";
  }
  function thinkingHtml() {
    return '<div class="mz-thinking"><span class="mz-rule mz-l"></span><img src="' + asset("incense-coil.webp") + '" alt="推演中"><span class="mz-rule mz-r"></span></div>';
  }

  // src/09-board.js
  var esc2 = escapeHtml;
  var zoneName = (loc) => String(loc || "").split("/")[0].trim();
  var zoneSub = (loc) => String(loc || "").split("/").slice(1).map((s) => s.trim()).filter(Boolean).join(" ");
  var kindCount = (库藏, kind) => Object.values(库藏).filter((x) => x && x.类别 === kind).length;
  var facilities = (D) => Object.entries(D.道场.地宫设施).map(([名, v]) => ({ 名, 用途: String((v || {}).用途 || ""), 档次: String((v || {}).档次 || "粗成"), 奇效: String((v || {}).奇效 || "") }));
  var shopReady = (D, c) => facilities(D).some((f) => c.words.some((w) => f.名.includes(w) || f.用途.includes(w)));
  var debts = (D) => Object.entries(D.资粮.罪业密簿).filter(([, v]) => v && v.类别 === "债契");
  var handles = (D) => Object.entries(D.资粮.罪业密簿).filter(([, v]) => v && v.类别 !== "债契");
  var pendingOrders = (D) => Object.entries(D.教务.法事委托).filter(([, v]) => v && v.状态 !== "已完成");
  var riteCooling = (D) => {
    const t = parseTime(D.时空.时间);
    return !!t.月标 && D.教务.上次法会.trim() === t.月标;
  };
  var storeGrade = (D) => {
    const f = facilities(D).find((x) => x.名.includes("库房"));
    return f ? STORE_CAP[f.档次] ? f.档次 : "粗成" : "无";
  };
  var storeCap = (D) => STORE_CAP[storeGrade(D)];
  var girlUnlocked = (D, n) => D.系统.已解锁.includes("同心缕:" + n) || !!D.核心女主[n].心声;
  function unlocked(D, key) {
    const set = D.系统.已解锁;
    if (key === "营造" || set.includes(key)) return true;
    if (UNLOCK_FANS[key]) return D.教务.信众 >= UNLOCK_FANS[key];
    if (key === "库藏") return storeGrade(D) !== "无";
    if (key === "同心缕") return CAST.some((n) => girlUnlocked(D, n));
    return false;
  }
  var money贯 = (文) => cn(Math.floor(Math.max(0, 文) / 1e3)) + "贯";
  var moneyTop = (文) => 文 > 1e4 ? money贯(文) : money(文);
  function readings(D) {
    const t = parseTime(D.时空.时间);
    const fest = festivalState(t);
    const gate = gateState(t, fest);
    let festTxt, festCls;
    if (fest.今日) {
      festTxt = fest.今日.名;
      festCls = "mz-gain";
    } else if (fest.将至) {
      festTxt = cn(fest.将至.余日) + "日后" + fest.将至.名;
      festCls = "";
    } else {
      festTxt = "无";
      festCls = "mz-dim";
    }
    let levy, levyCls;
    if (D.暗流.本月危机 === "常例拖欠") {
      levy = "拖欠未清";
      levyCls = "mz-red";
    } else if (t.年序号 === 4) {
      levy = "常例失效";
      levyCls = "mz-dim";
    } else if (t.年序号 < 0 || !t.日) {
      levy = "未知";
      levyCls = "";
    } else {
      const left = Math.max(0, 30 - t.日);
      levy = left ? "还剩" + cn(left) + "日" : "今日当缴";
      levyCls = left <= 6 ? "mz-red" : "";
    }
    const 文 = 总文(D);
    return {
      日期: t.年序号 >= 0 ? esc2(t.月名 || "") + esc2(t.日文) : esc2(D.时空.时间.replace(/\//g, " ")),
      时辰: esc2(t.时辰),
      题: esc2(D.时空.时间.replace(/\//g, " ")),
      宵禁: { k: "宵禁", v: gate.文, cls: gate.cls },
      常例: { k: "常例", v: levy, cls: levyCls },
      节令: { k: "节令", v: esc2(festTxt), cls: festCls },
      铜钱: { k: "铜钱", v: moneyTop(文), cls: "mz-gain", stat: "铜钱" },
      信众: { k: "信众", v: cn(D.教务.信众) + "人", cls: "mz-gain", stat: "信众" },
      风波: { k: "风波", v: esc2(D.暗流.风波), cls: STORM_CLS[D.暗流.风波] || "", stat: "风波" }
    };
  }
  var tbItem = (r, hide, extra) => '<span class="mz-tb-i' + (hide ? " mz-tb-hide" : "") + (extra ? " " + extra : "") + '"' + (r.stat ? ' data-stat="' + r.stat + '"' : "") + "><span>" + r.k + "</span><b" + (r.cls ? ' class="' + r.cls + '"' : "") + ">" + r.v + "</b></span>";
  function topbarHtml(D) {
    if (D._empty) return '<span class="mz-tb-time mz-dim">此则无账目</span>';
    const r = readings(D);
    return '<span class="mz-tb-time" data-stat="时间" title="' + r.题 + '"><span>时辰</span><b>' + r.日期 + " " + r.时辰 + '</b></span><span class="mz-tb-set">' + tbItem(r.宵禁, true) + tbItem(r.常例, true, "mz-tb-thin") + tbItem(r.节令, true, "mz-tb-thin") + tbItem(r.铜钱) + tbItem(r.信众, true) + tbItem(r.风波, true) + "</span>";
  }
  var srRow = (r, title, extra) => '<div class="mz-sr-row' + (extra ? " " + extra : "") + '"' + (r.stat ? ' data-stat="' + r.stat + '"' : "") + (title ? ' title="' + title + '"' : "") + "><span>" + r.k + "</span><b" + (r.cls ? ' class="' + r.cls + '"' : "") + ">" + r.v + "</b></div>";
  function statusBoxHtml(D) {
    if (D._empty) return '<div class="mz-sr-row"><b class="mz-dim">此则无账目</b></div>';
    const r = readings(D);
    const loc = D.时空.当前地界;
    const zone = zoneName(loc), sub = zoneSub(loc);
    const abroad = !!zone && !ZONES.includes(zone);
    const locVal = (abroad ? "城外 " : "") + esc2(zone) + (sub ? "｜" + esc2(sub) : "");
    const y = Math.max(0, parseTime(D.时空.时间).年序号);
    return srRow({ k: "地界", v: locVal, stat: "地界" }, esc2(loc.replace(/\//g, " "))) + srRow(r.节令, "", "mz-sr-dup") + srRow(r.宵禁, "", "mz-sr-dup") + srRow(r.常例, "", "mz-sr-dup") + srRow(r.信众, "", "mz-sr-dup") + srRow(r.风波, "", "mz-sr-dup") + '<div class="mz-doom-row"><div class="mz-sr-row"><span>灭佛大势</span><b>' + YEAR_SHORT[y] + '</b></div><div class="mz-doom-evt">' + esc2(DOOM[y]) + '</div><div class="mz-bar"><i style="width:' + (y * 20 + 10) + '%"></i></div></div>';
  }
  var rankShort = (r) => String(r || "").split("·")[0];
  function navSubHtml(key, D) {
    if (!unlocked(D, key)) return UNLOCK_COND[key];
    switch (key) {
      case "同心缕": {
        const known = CAST.filter((n) => girlUnlocked(D, n));
        const top = known.reduce((m, n) => Math.max(m, rankIdx(D.核心女主[n].灌顶位阶)), 0);
        return cn(known.length) + "人在册 最高" + esc2(rankShort(RANKS[top]));
      }
      case "库藏":
        return "存" + cn(Object.keys(D.资粮.库藏).length) + "件 共" + cn(storeCap(D)) + "屉";
      case "教务":
        return "执事" + cn(Object.keys(D.执事名册).length) + "人 明妃" + cn(Object.keys(D.明妃录).length) + "位";
      case "营造":
        return "表殿" + esc2(D.道场.表殿等级) + " 地宫" + cn(facilities(D).length) + "处";
      case "法事":
        return "委托 " + cn(pendingOrders(D).length) + "单／三席";
      case "罪业":
        return "把柄" + cn(handles(D).length) + "条 债契" + cn(debts(D).length) + "契";
    }
    return "";
  }
  function renderMinimap(D) {
    const mm = doc.getElementById(SEL.minimap);
    if (!mm) return;
    const z = zoneName(D.时空.当前地界);
    const abroad = !!z && !ZONES.includes(z);
    const pin = MINIMAP_PIN[z] || (abroad ? MINIMAP_PIN.城外 : z ? MINIMAP_PIN.长安 : null);
    const pinEl = mm.querySelector(".mz-map-pin");
    if (pinEl) {
      pinEl.style.display = pin ? "" : "none";
      if (pin) {
        pinEl.style.left = pin[1] + "%";
        pinEl.style.top = pin[2] + "%";
        pinEl.dataset.label = pin[0];
      }
    }
  }
  function renderCrisis(D) {
    syncCrisisFoot(doc.getElementById(SEL.paper));
  }
  function renderAll(force, Darg) {
    const D = Darg || readMVU();
    const top = doc.getElementById(SEL.topbar);
    if (top) top.innerHTML = topbarHtml(D);
    const doom = doc.getElementById(SEL.doom);
    if (doom) doom.innerHTML = statusBoxHtml(D);
    ZONE_DEFS.forEach((z) => {
      const item = doc.querySelector("#" + SHELL_ID + ' .mz-nav-item[data-zone="' + z.key + '"]');
      if (!item) return;
      const open = unlocked(D, z.key);
      item.classList.toggle("mz-locked", !open);
      item.querySelector(".mz-nav-sub").innerHTML = navSubHtml(z.key, D);
      item.querySelector(".mz-nav-lock").innerHTML = open ? "" : ICO.lock;
    });
    renderMinimap(D);
    renderCrisis(D);
    if (liftOpenName()) refreshLift(D);
  }

  // src/11-forms.js
  function fillWriting(text) {
    const ta = doc.getElementById(SEL.textarea);
    if (!ta) return;
    ta.value = text;
    autogrowTA();
    closeLift();
    ta.focus();
  }
  var committing = false;
  async function commitForm({ tag, mutate, message, check, fail }) {
    const deny = (why) => {
      if (fail) fail(why);
      else setStoryStatus(why);
      return false;
    };
    if (committing) return deny("账房正在记档，稍待");
    if (sending) return deny("续写未毕，稍待再拨");
    if (delMode) return deny("正在删记，了结了再拨款");
    if (editState) return deny("改写未了，先存或弃");
    committing = true;
    try {
      return await commitFormImpl({ tag, mutate, message, check }, deny);
    } finally {
      committing = false;
    }
  }
  async function commitFormImpl({ tag, mutate, message, check }, deny) {
    const lastId = safeLastMessageId();
    if (lastId == null || lastId < 0) return deny("卷上尚无记录，无从记账");
    let v = null;
    try {
      v = getVariables({ type: "message", message_id: lastId });
    } catch (e) {
      dbg("commit:get", e);
    }
    if (!v || !v.stat_data) return deny("眼下读不到账目，稍后再试");
    const before = _.cloneDeep(_.omit(v.stat_data, ["$internal"]));
    const stat = _.cloneDeep(before);
    if (check) {
      const why = check(readMVU(stat), stat);
      if (why) return deny(why);
    }
    mutate(stat);
    if (Number(stat.资粮 && stat.资粮.铜钱) < 0) return deny("钱不足");
    const 扣款 = Math.max(0, Math.round((Number(_.get(before, "资粮.铜钱")) || 0) - (Number(_.get(stat, "资粮.铜钱")) || 0)));
    _.set(stat, "系统.代发", (tag || "代发") + "#" + 扣款 + "#" + Date.now());
    const ops = diffPatch(before, stat);
    if (!ops) return deny("名目里不可含「/」「~」");
    closeLift();
    const text = typeof message === "function" ? message(扣款) : message;
    return sendText(text + "\n" + patchBlock(ops), { carryStat: stat });
  }
  function patchBlock(ops) {
    return "<UpdateVariable>\n<JSONPatch>\n" + JSON.stringify(ops) + "\n</JSONPatch>\n</UpdateVariable>";
  }
  function diffPatch(before, after) {
    const ops = [];
    let bad = false;
    const walk = (b, a, path) => {
      const keys = /* @__PURE__ */ new Set([...Object.keys(b || {}), ...Object.keys(a || {})]);
      for (const k of keys) {
        if (/[/~]/.test(k)) {
          bad = true;
          return;
        }
        const p = path + "/" + k;
        const bv = b ? b[k] : void 0, av = a ? a[k] : void 0;
        if (_.isEqual(bv, av)) continue;
        if (av === void 0) ops.push({ op: "remove", path: p });
        else if (bv === void 0) ops.push({ op: "insert", path: p, value: av });
        else if (_.isPlainObject(bv) && _.isPlainObject(av)) walk(bv, av, p);
        else if (typeof bv === "number" && typeof av === "number") ops.push({ op: "delta", path: p, value: av - bv });
        else ops.push({ op: "replace", path: p, value: av });
      }
    };
    walk(before, after, "");
    return bad ? null : ops;
  }

  // src/15-var-tree.js
  function node(key, val, depth) {
    if (val && typeof val === "object") {
      const entries = Array.isArray(val) ? val.map((v, i) => [i, v]) : Object.entries(val);
      const inner = entries.length ? entries.map(([k, v]) => node(k, v, depth + 1)).join("") : '<div class="mz-kv mz-k">空</div>';
      return "<details" + (depth < 1 ? " open" : "") + "><summary>" + escapeHtml(key) + "</summary>" + inner + "</details>";
    }
    return '<div class="mz-kv"><span class="mz-k">' + escapeHtml(key) + "</span><b>" + escapeHtml(String(val)) + "</b></div>";
  }
  function varTreeInner() {
    let sd = null;
    const lid = safeLastMessageId();
    try {
      const v = getVariables({ type: "message", message_id: lid });
      sd = v && v.stat_data;
    } catch (e) {
      dbg("vartree", e);
    }
    if (!sd) return '<div class="mz-stub">眼下读不到账目</div>';
    return '<div class="mz-vartree">' + Object.entries(sd).filter(([k]) => k !== "$internal").map(([k, v]) => node(k, v, 0)).join("") + "</div>";
  }

  // src/10-windows.js
  var esc3 = escapeHtml;
  var card = (inner) => '<div class="mz-card">' + inner + "</div>";
  var empty = (cls) => '<div class="mz-card mz-empty' + (cls ? " " + cls : "") + '"><span>虚位</span></div>';
  var kv = (k, v) => '<span class="mz-k">' + k + "</span>" + esc3(v);
  var tabs = (win, items, tail) => {
    const cur = tabOf(win, items[0].id);
    return '<div class="mz-tabs">' + items.map((t) => "<button" + (cur === t.id ? ' class="mz-on"' : "") + ' data-pane="' + t.id + '">' + t.label + (t.n != null ? '<span class="mz-n">' + t.n + "</span>" : "") + (t.red ? '<span class="mz-red"></span>' : "") + "</button>").join("") + (tail ? '<span class="mz-why" style="margin-left:auto;align-self:center">' + tail + "</span>" : "") + "</div>";
  };
  var pane = (win, id, inner, first) => '<div class="mz-pane' + (tabOf(win, first) === id ? " mz-on" : "") + '" data-pane="' + id + '">' + inner + "</div>";
  var pagePic = (name) => '<div class="mz-rite-pic mz-page-pic"><img src="' + asset(PAGE_PIC[name]) + '" alt=""></div>';
  var wh = (t, b) => '<div class="mz-wh">' + t + (b ? " <b>" + b + "</b>" : "") + "</div>";
  var sealBtn = (label, act, ok, why, extra) => '<button class="mz-seal-btn' + (extra || "") + '"' + (act ? ' data-act="' + act + '"' : "") + (ok ? "" : " disabled") + ">" + label + "</button>" + (!ok && why ? '<span class="mz-why">' + why + "</span>" : "");
  var lack = (D, 贯2) => {
    const diff = 贯2 * 1e3 - 总文(D);
    return diff > 0 ? "钱不足，差" + money(diff) : "";
  };
  var gradeWhy = (D, g) => g === "精工" && !Object.keys(D.执事名册).length ? "须执事带工" : g === "天工" && D.教务.信众 < 50 ? "须信众五十人" : "";
  var hallWhys = (D) => {
    const w = [];
    if (D.道场.表殿等级 !== "破败草庵") w.push("表殿已改建");
    const l = lack(D, HALL_PRICE.庄严精舍);
    if (l) w.push(l);
    return w;
  };
  var upgradeWhys = (D, 名, 旧档, 新) => {
    const w = [];
    const f = facilities(D).find((x) => x.名 === 名);
    if (!f) w.push("此屋已不在");
    else if (f.档次 !== 旧档) w.push("此屋已改建");
    const g = gradeWhy(D, 新);
    if (g) w.push(g);
    const l = lack(D, UPGRADE_PRICE[新]);
    if (l) w.push(l);
    return w;
  };
  var buildWhys = (D, 档) => {
    const w = [];
    const g = gradeWhy(D, 档);
    if (g) w.push(g);
    const l = lack(D, GRADE_PRICE[档]);
    if (l) w.push(l);
    return w;
  };
  var craftPickWhys = (D, c) => {
    const w = [];
    if (!shopReady(D, c)) w.push("须先营造" + c.shop);
    const l = lack(D, c.price);
    if (l) w.push(l);
    return w;
  };
  var craftGateWhys = (D) => Object.keys(D.资粮.库藏).length >= storeCap(D) ? ["屉已满"] : [];
  var craftWhys = (D, c) => craftGateWhys(D).concat(craftPickWhys(D, c));
  var loanWhys = (D, 贯2) => {
    const w = [];
    const unlocked2 = HALLS.indexOf(D.道场.表殿等级) >= 1 || facilities(D).some((f) => f.名.includes("无尽藏") && f.档次 !== "粗成");
    if (!unlocked2) w.push("须表殿达庄严精舍，或地宫有精工以上无尽藏柜坊");
    if (Object.keys(D.资粮.罪业密簿).length >= LIMITS.罪业密簿) w.push("簿已满");
    const l = 贯2 > 0 ? lack(D, 贯2) : "";
    if (l) w.push(l);
    return w;
  };
  var buildBasket = [];
  var craftBasket = [];
  function basketWhys(sd0, list, extra) {
    const sd = _.cloneDeep(sd0 || currentStat() || {});
    const w = [];
    (extra ? list.concat([extra]) : list).forEach((it) => {
      w.push(...it.whys(readMVU(sd)));
      it.mutate(sd);
    });
    return [...new Set(w)];
  }
  var basketSum = (list) => list.reduce((n, it) => n + it.价, 0);
  var badChar = (名) => /[/~]/.test(名) ? ["名目里不可含「/」「~」"] : [];
  function buildItem(名称, 用途, 档, 奇效) {
    return {
      名: 名称,
      副: 档,
      价: GRADE_PRICE[档],
      项: 名称 + "（" + 档 + (奇效 ? "，奇效：" + 奇效 : "") + "）",
      单句: (贯2) => FORM_MSG.兴造(名称, 档, 奇效, 贯2),
      whys: (D) => badChar(名称).concat(档 === "天工" && !奇效 ? ["先议定奇效"] : [], buildWhys(D, 档), D.道场.地宫设施[名称] ? ["「" + 名称 + "」已在地宫，换个名目"] : []),
      mutate: (sd) => {
        sd.资粮.铜钱 -= GRADE_PRICE[档];
        sd.道场.地宫设施 = sd.道场.地宫设施 || {};
        sd.道场.地宫设施[名称] = Object.assign({ 用途: 用途 || "", 档次: 档 }, 奇效 ? { 奇效 } : {});
      }
    };
  }
  function craftItem(物名, 效用, c) {
    return {
      名: 物名,
      副: c.kind,
      价: c.price,
      项: c.kind + "「" + 物名 + "」",
      单句: (贯2) => FORM_MSG.工巧(物名, c.kind, 贯2),
      whys: (D) => badChar(物名).concat(craftWhys(D, c), D.资粮.库藏[物名] ? ["「" + 物名 + "」已在库藏，换个物名"] : []),
      mutate: (sd) => {
        sd.资粮.铜钱 -= c.price;
        sd.资粮.库藏 = sd.资粮.库藏 || {};
        sd.资粮.库藏[物名] = { 类别: c.kind, 效用: 效用 || "" };
      }
    };
  }
  function basketHtml(kind, list) {
    if (!list.length) return "";
    const rows = list.map((it, i) => '<div class="mz-bk-row"><b>' + esc3(it.名) + '</b><span class="mz-tag">' + esc3(it.副) + '</span><span class="mz-price">' + cn(it.价) + '贯</span><button type="button" class="mz-bk-x" data-drop="' + kind + ":" + i + '">撤下</button></div>').join("");
    const whys = basketWhys(null, list);
    const label = "一并呈报（" + cn(list.length) + "事，共" + cn(basketSum(list)) + "贯）";
    return '<div class="mz-basket">' + wh("待呈之事") + rows + '<div class="mz-build-foot">' + sealBtn(label, kind + "-send", !whys.length, whys.join(" "), " mz-lg") + "</div></div>";
  }
  function submitBasket(btn, kind) {
    const list = kind === "build" ? buildBasket : craftBasket;
    if (!list.length) return;
    const 条 = list.slice();
    commitForm({
      tag: kind === "build" ? "兴造" : "工巧",
      check: (D, sd) => basketWhys(sd, 条).join(" "),
      mutate: (sd) => 条.forEach((it) => it.mutate(sd)),
      message: (贯2) => 条.length === 1 ? 条[0].单句(贯2) : FORM_MSG[kind === "build" ? "兴造多" : "工巧多"](条.map((it) => it.项), 贯2),
      fail: (why) => hint(btn, why)
    }).then((ok) => {
      if (!ok) return;
      if (kind === "build") {
        buildBasket = buildBasket.filter((x) => !条.includes(x));
        bpSel = null;
      } else craftBasket = craftBasket.filter((x) => !条.includes(x));
      rerender();
    }).catch((e) => hint(btn, "出错: " + (e && e.message || e)));
  }
  function addToBasket(btn, kind, it) {
    const list = kind === "build" ? buildBasket : craftBasket;
    if (list.some((x) => x.名 === it.名)) {
      hint(btn, "篮中已有同名，换个" + (kind === "build" ? "名目" : "物名"));
      return;
    }
    const whys = basketWhys(null, list, it);
    if (whys.length) {
      hint(btn, (list.length ? "连同篮中已记，" : "") + whys.join(" "));
      return;
    }
    list.push(it);
    if (kind === "build") {
      bpSel = null;
      forgetFields(BUILD_FORM, ["名称", "用途", "档次", "奇效"]);
    } else forgetFields(CRAFT_FORM, ["物名", "效用"]);
    rerender();
  }
  function atlasHtml(D) {
    const cur = zoneName(D.时空.当前地界);
    const abroad = !!cur && !ZONES.includes(cur);
    const t = parseTime(D.时空.时间);
    const y = Math.max(0, t.年序号);
    return '<section class="mz-win mz-atlas-win mz-on"><div class="mz-atlas"><div class="mz-mapbox"><img src="' + asset("map-changan.webp") + '" alt="长安城坊地图"><svg viewBox="0 0 1024 1024" preserveAspectRatio="none">' + ZONES.map((z) => '<path data-zone="' + z + '"' + (z === cur ? ' class="mz-cur"' : "") + ' d="' + ZONE_PATHS[z] + '"><title>' + z + "</title></path>").join("") + "</svg>" + ZONES.map((z) => {
      const l = ZONE_LABELS[z];
      return '<span class="mz-lbl' + (z === cur ? " mz-cur" : "") + '" style="left:' + l[1] + "%;top:" + l[2] + '%">' + l[0] + "</span>";
    }).join("") + (abroad ? '<div class="mz-abroad-mark"><b>城外</b>' + esc3(cur) + "</div>" : "") + '</div><div class="mz-zones">' + wh("长安十区") + '<ul class="mz-zlist">' + ZONES.map((z) => "<li" + (z === cur ? ' class="mz-cur"' : "") + "><span>" + z + "</span><small>" + (z === cur ? "此刻在此" : "") + "</small></li>").join("") + '<li class="mz-abroad' + (abroad ? " mz-cur" : "") + '"><span>城外</span><small>' + (abroad ? esc3(cur) : "") + '</small></li></ul><div class="mz-doomline"><span>灭佛大势 ' + YEARS[y] + " " + DOOM[y] + '</span><div class="mz-yrs">' + YEAR_SHORT.map((s, i) => '<span class="' + (i === y ? "mz-cur" : i < y ? "mz-past" : "") + '">' + s + "</span>").join("") + "</div></div></div></div></section>";
  }
  var bondSel = CAST[0];
  function selectBond(name) {
    if (CAST.includes(name)) bondSel = name;
  }
  function pickedTheme(name, rank) {
    const picked = getPref("bond:" + name, "");
    return picked && unlockedThemes(name, rank).find((t) => t[0] === picked) || mainTheme(name, rank);
  }
  function portraitOf(name, D) {
    const t = pickedTheme(name, D.核心女主[name].灌顶位阶);
    return t ? t[1] : "";
  }
  function memoHtml(回想) {
    const list = Object.entries(回想).reverse();
    if (!list.length) return '<div class="mz-none">尚无回想</div>';
    return '<div class="mz-timeline">' + list.map(([title, v]) => {
      const seg = String(v || "").split("/");
      const when = seg.length > 1 ? seg[0].trim() : "";
      const body = seg.length > 1 ? seg.slice(1).join("/").trim() : String(v || "").trim();
      return '<div class="mz-memo"><b>' + esc3(title) + "</b>" + (when ? "<small>" + esc3(when) + "</small>" : "") + "<br>" + esc3(body) + "</div>";
    }).join("") + "</div>";
  }
  function bondHtml(D) {
    if (!girlUnlocked(D, bondSel)) bondSel = CAST.find((n) => girlUnlocked(D, n)) || bondSel;
    const g = D.核心女主[bondSel];
    const rank = g.灌顶位阶;
    const themes = unlockedThemes(bondSel, rank);
    const curTheme = pickedTheme(bondSel, rank);
    const lit = rankIdx(rank);
    return '<section class="mz-win mz-bond-win mz-on ' + STAMP[bondSel] + '"><div class="mz-tabs mz-names">' + CAST.map((n) => girlUnlocked(D, n) ? "<button" + (n === bondSel ? ' class="mz-on"' : "") + ' data-bond="' + n + '">' + n + '<span class="mz-n">' + esc3(D.核心女主[n].灌顶位阶) + "</span></button>" : '<button class="mz-off" disabled>' + CAST_HINT[n] + '<span class="mz-n">未识</span></button>').join("") + '</div><div class="mz-wrow"><div class="mz-portrait"><div class="mz-pic">' + (curTheme ? '<img src="' + esc3(curTheme[1]) + '" alt="' + esc3(curTheme[0]) + '">' : "<span>立绘待补</span>") + '</div><div class="mz-thumbs">' + themes.map((t) => "<i" + (curTheme && t[0] === curTheme[0] ? ' class="mz-on"' : "") + ' title="' + esc3(t[0]) + '" data-theme="' + esc3(t[0]) + `" style="background-image:url('` + esc3(t[1]) + `')"></i>`).join("") + lockedGrades(bondSel, rank).map((r) => '<i class="mz-lock" title="' + esc3(r) + '解锁"><span>' + esc3(r.slice(0, 2)) + "</span></i>").join("") + '</div></div><div class="mz-wcol" style="flex:1"><div class="mz-lotus-row">' + [1, 2, 3, 4].map((i) => "<i" + (i <= lit ? ' class="mz-lit"' : "") + "></i>").join("") + "<span>灌顶位阶</span><b>" + esc3(rank) + "</b></div>" + wh("心声") + (g.心声 ? '<div class="mz-voice-sheet ' + STAMP[bondSel] + '">' + esc3(g.心声) + "</div>" : '<div class="mz-none">尚无心声</div>') + wh("回想") + memoHtml(g.回想) + "</div></div></section>";
  }
  var upgradeSel = null;
  var bpSel = null;
  function resetWinState() {
    upgradeSel = null;
    bpSel = null;
  }
  var BUILD_FORM = "mz-form mz-sheet mz-build";
  var CRAFT_FORM = "mz-form mz-sheet mz-craft";
  var WONDER_PH = "入浴者心防天然松动，灌顶事半功倍";
  function buildHtml(D) {
    const hall = D.道场.表殿等级;
    const fs = facilities(D);
    return '<section class="mz-win mz-on">' + tabs("营造", [{ id: "hall", label: "表殿", n: hall }, { id: "cave", label: "地宫", n: cn(fs.length) + "处" }, { id: "build", label: "兴造" }]) + pane("营造", "hall", hallPane(D, hall), "hall") + pane("营造", "cave", cavePane(D, fs), "hall") + pane("营造", "build", buildPane(D, fs), "hall") + "</section>";
  }
  function hallPane(D, hall) {
    const hi = Math.max(0, HALLS.indexOf(hall));
    const rows = HALLS.map((h, i) => {
      let act = "";
      if (i > hi) {
        const price = "<small>" + (i === 1 ? "二百贯" : "一千贯　须得敕额") + "</small>";
        const whys = i === 1 ? hallWhys(D) : [];
        const tail = i !== hi + 1 ? "" : i === 1 ? sealBtn("升 庄严精舍", "hall", !whys.length, whys.join(" ")) : '<span class="mz-why">须教主亲身周旋</span>';
        act = '<div class="mz-hall-act">' + price + tail + "</div>";
      }
      return '<div class="mz-hall' + (i < hi ? " mz-done" : i === hi ? " mz-cur" : "") + '"><div class="mz-hall-pic"><img src="' + asset(HALL_PIC[h]) + '" alt="' + h + '"></div><div class="mz-hall-top"><b>' + h + "</b>" + (h === "敕赐法堂" && D.道场.敕额 ? '<span class="mz-chi">敕</span>' : "") + '<span class="mz-tag">' + (i < hi ? "已成" : i === hi ? "当下" : "未启") + "</span></div><p>" + HALL_LOOK[h] + '</p><div class="mz-hall-gain">' + kv("香火", HALL_GAIN[h][0]) + "<br>" + kv("客源", HALL_GAIN[h][1]) + "<br>" + HALL_GAIN[h][2] + "</div>" + (act || '<div class="mz-hall-act"></div>') + "</div>";
    }).join("");
    return '<div class="mz-folio mz-fill"><div class="mz-halls">' + rows + '</div><div class="mz-hall-note">' + HALL_NOTE + "</div></div>";
  }
  function cavePane(D, fs) {
    const upSel = upgradeSel && fs.find((x) => x.名 === upgradeSel);
    const upNext = upSel ? GRADES[GRADES.indexOf(upSel.档次) + 1] : null;
    const upBar = upSel && upNext ? '<form class="mz-form mz-sheet mz-upform" onsubmit="return false">' + wh("改造", esc3(upSel.名) + " " + esc3(upSel.档次) + " 升 " + upNext + " " + cn(UPGRADE_PRICE[upNext]) + "贯") + '<label class="mz-wonder mz-live">奇效<textarea name="奇效" rows="2" placeholder="' + WONDER_PH + '"></textarea><small>升作天工须议定奇效，写入即成定局</small></label><div class="mz-build-foot">' + sealBtn("罢", "upgrade-cancel", true) + sealBtn("议定改造", "upgrade-go", true, "", " mz-lg") + "</div></form>" : "";
    const cards = fs.length ? fs.map((f) => {
      const pic = '<div class="mz-fac-pic"><img src="' + asset(FAC_PIC[f.名] || OWN_PIC[f.档次] || OWN_PIC.粗成) + '" alt=""></div>';
      const body = '<div class="mz-fac-top"><b>' + esc3(f.名) + '</b><span class="mz-tag ' + (GRADE_Q[f.档次] || "mz-q1") + '">' + esc3(f.档次) + '</span></div><div class="mz-fac-use">' + kv("用途", f.用途) + '</div><div class="mz-fac-wonder">' + (f.奇效 ? kv("奇效", f.奇效) : "") + "</div>";
      const next = GRADES[GRADES.indexOf(f.档次) + 1];
      if (!next) return '<div class="mz-card mz-fac">' + pic + body + '<div class="mz-up-foot"></div></div>';
      const why = upgradeWhys(D, f.名, f.档次, next).join(" ");
      return '<div class="mz-card mz-fac mz-up' + (upgradeSel === f.名 ? " mz-on" : "") + '">' + pic + body + '<div class="mz-up-foot"><button class="mz-seal-btn" data-act="upgrade" data-name="' + esc3(f.名) + '"' + (why ? " disabled" : "") + ">升 " + next + '<span class="mz-price">' + cn(UPGRADE_PRICE[next]) + "贯</span></button>" + (why ? '<span class="mz-why">' + why + "</span>" : "") + "</div></div>";
    }).join("") : '<div class="mz-none">未辟</div>';
    return '<div class="mz-folio">' + upBar + '<div class="mz-grid mz-c3 mz-cave-grid">' + cards + "</div></div>";
  }
  function buildPane(D, fs) {
    const NOTE = { 粗成: "草创堪用，暗藏破绽", 精工: "坚实可靠，无虞", 天工: "鬼斧神工，议定奇效" };
    const offAll = GRADES.every((g) => buildWhys(D, g).length);
    const picks = GRADES.map((g) => {
      const whys = buildWhys(D, g);
      return '<label class="mz-pick' + (whys.length ? " mz-off" : "") + '"><input type="radio" name="档次" value="' + g + '"' + (whys.length ? " disabled" : "") + "><b>" + g + '</b><span class="mz-price">' + cn(GRADE_PRICE[g]) + "贯</span>" + (whys.length ? '<small class="mz-cond">' + whys.join(" ") + "</small>" : "<small>" + NOTE[g] + "</small>") + "</label>";
    }).join("");
    const built = Object.fromEntries(fs.map((f) => [f.名, f.档次]));
    const inBasket = (名) => buildBasket.some((x) => x.名 === 名);
    const bpRows = (区) => BLUEPRINTS.filter((b) => b.区 === 区).map((b) => built[b.名] ? '<div class="mz-bp mz-off"><b>' + esc3(b.名) + '</b><span class="mz-tag ' + (GRADE_Q[built[b.名]] || "mz-q1") + '">已建 ' + esc3(built[b.名]) + "</span></div>" : inBasket(b.名) ? '<div class="mz-bp mz-off mz-in"><b>' + esc3(b.名) + '</b><span class="mz-tag">已入篮</span></div>' : '<button type="button" class="mz-bp' + (bpSel === b.名 ? " mz-on" : "") + '" data-bp="' + esc3(b.名) + '"><b>' + esc3(b.名) + '</b><span class="mz-tag">未建</span></button>').join("");
    const bpList = '<div class="mz-wcol mz-bplist">' + wh("蓝图", "地面") + '<div class="mz-bps">' + bpRows("地面") + "</div>" + wh("蓝图", "地下") + '<div class="mz-bps">' + bpRows("地下") + "</div></div>";
    const bp = BLUEPRINTS.find((b) => b.名 === bpSel && !built[b.名] && !inBasket(b.名));
    const buildForm = '<form class="' + BUILD_FORM + '" onsubmit="return false">' + wh("兴造", bp ? esc3(bp.名) : "自拟") + '<div class="mz-build-head mz-has-pic"><label>名称<input name="名称" placeholder="自拟名目" value="' + (bp ? esc3(bp.名) : "") + '"></label><div class="mz-build-pic">' + (bp && FAC_PIC[bp.名] ? '<img src="' + asset(FAC_PIC[bp.名]) + '" alt="">' : GRADES.map((g) => '<img data-g="' + g + '" src="' + asset(OWN_PIC[g]) + '" alt="">').join("")) + '</div><label class="mz-build-use">用途<textarea name="用途" rows="2" placeholder="自拟用途与陈设">' + (bp ? esc3(bp.用途) : "") + '</textarea></label></div><div class="mz-wh">档次</div><div class="mz-picks">' + picks + '</div><label class="mz-wonder">奇效<textarea name="奇效" rows="2" placeholder="' + WONDER_PH + '"></textarea><small>天工独有：通达造化，立成定局，后效绵延</small></label><div class="mz-build-foot"><span class="mz-why">库中 ' + money(总文(D)) + "</span>" + sealBtn("记下", "build", !offAll, "钱不足", " mz-lg") + "</div></form>";
    return '<div class="mz-folio mz-fill"><div class="mz-wrow mz-buildrow">' + bpList + buildForm + "</div>" + basketHtml("build", buildBasket) + "</div>";
  }
  function sinHtml(D) {
    const hs = handles(D), ds = debts(D);
    const total = hs.length + ds.length;
    const hCards = hs.length ? hs.map(([名, v]) => card("<b>" + esc3(名) + "</b>" + kv("详情", v.详情 || "") + "<br>" + kv("价值", v.价值 || "") + '<button class="mz-seal-btn" data-act="extort" data-name="' + esc3(名) + '">勒索</button>')).join("") : '<div class="mz-none">簿中无名</div>';
    const dCards = ds.length ? ds.map(([名, v]) => {
      const 本 = (Number(v.欠额) || 0) * 1e3, 已 = Number(v.已收息) || 0;
      const stopped2 = 本 > 0 && 已 >= 本;
      return card((stopped2 ? '<span class="mz-tag mz-gold">已停息</span>' : "") + "<b>" + esc3(名) + "</b>" + kv("欠额", cn(Number(v.欠额) || 0) + "贯") + "<br>" + kv("已收息", money(已) + "／" + cn(Number(v.欠额) || 0) + "贯") + (v.详情 ? "<br>" + kv("详情", v.详情) : ""));
    }).join("") : '<div class="mz-none">簿中无名</div>';
    const whys = loanWhys(D, 0);
    const loanForm = '<form class="mz-form mz-sheet mz-loan" onsubmit="return false">' + wh("无尽藏放贷") + '<div class="mz-loan-row"><label>欠户<input name="欠户" placeholder="姓名"></label><label>本金<input name="本金" placeholder="整数贯" inputmode="numeric"></label><label class="mz-grow">抵押<input name="抵押" placeholder="田契、宅契或人身"></label><div class="mz-build-foot">' + sealBtn("放贷", "loan", !whys.length, whys.join(" "), " mz-lg") + '</div></div><div class="mz-loan-note"><span>月息五分，利不过本，按月自动入账</span><span>库中 ' + money(总文(D)) + "　簿共 " + cn(total) + "／五条</span></div></form>";
    return '<section class="mz-win mz-on">' + tabs("罪业", [{ id: "handle", label: "把柄", n: cn(hs.length) }, { id: "debt", label: "债契", n: cn(ds.length) }], "共" + cn(total) + "／五条") + pane("罪业", "handle", '<div class="mz-folio mz-fill">' + pagePic("把柄") + '<div class="mz-grid mz-c2">' + hCards + "</div></div>", "handle") + pane("罪业", "debt", '<div class="mz-folio mz-fill"><div class="mz-rite-pic mz-loan-pic"><img src="' + asset(LOAN_PIC) + '" alt=""></div>' + loanForm + wh("债契", cn(ds.length) + "契") + '<div class="mz-grid mz-c3">' + dCards + "</div></div>", "handle") + "</section>";
  }
  function riteHtml(D) {
    const orders = Object.entries(D.教务.法事委托);
    const cards = orders.map(([客, v]) => card('<span class="mz-tag' + (v.状态 === "已完成" ? " mz-gold" : "") + '">' + esc3(v.状态 || "待办") + "</span><b>" + esc3(客) + "</b>" + kv("诉求", v.诉求 || "") + "<br>" + kv("时限", v.时限 || "") + "<br>" + kv("报酬", v.报酬 || "")));
    while (cards.length < LIMITS.法事委托) cards.push(empty());
    const pend = pendingOrders(D).length;
    return '<section class="mz-win mz-on">' + tabs("法事", [{ id: "order", label: "委托", n: cn(pend) + "／三席" }]) + pane("法事", "order", '<div class="mz-folio mz-fill">' + pagePic("委托") + '<div class="mz-grid mz-c3">' + cards.join("") + "</div></div>", "order") + "</section>";
  }
  function affairsHtml(D) {
    const st = Object.entries(D.执事名册);
    const sCards = st.map(([名, v]) => {
      const s = String(v || "").split("/");
      return card("<b>" + esc3(名) + "</b>" + kv("身份", s[0] || "") + "<br>" + kv("位阶", s[1] || "") + "<br>" + kv("职能", s.slice(2).join("/") || ""));
    });
    while (sCards.length < LIMITS.执事名册) sCards.push(empty());
    const cs = Object.entries(D.明妃录);
    const cCards = cs.map(([名, v]) => {
      const s = String(v || "").split("/");
      return card("<b>" + esc3(名) + "</b>" + kv("出身", s[0] || "") + "<br>" + kv("度化", s[1] || "") + "<br>" + kv("要点", s.slice(2).join("/") || ""));
    });
    while (cCards.length < LIMITS.明妃录) cCards.push(empty("mz-lotus"));
    const cooling = riteCooling(D);
    const ticks = [
      ["钱帛五十贯以上", 总文(D) >= 5e4],
      ["库藏有药品", kindCount(D.资粮.库藏, "药品") > 0],
      ["精工以上坛场设施", facilities(D).some((f) => ALTAR_WORDS.some((w) => f.名.includes(w) || f.用途.includes(w)) && f.档次 !== "粗成")],
      ["信众五十人以上", D.教务.信众 >= 50]
    ];
    return '<section class="mz-win mz-on">' + tabs("教务", [{ id: "steward", label: "执事", n: cn(st.length) + "／十二席", red: st.length >= LIMITS.执事名册 }, { id: "consort", label: "明妃", n: cn(cs.length) + "／六席", red: cs.length >= LIMITS.明妃录 }, { id: "rite", label: "法会", n: cooling ? "暂休" : "待办" }]) + pane("教务", "steward", '<div class="mz-folio mz-fill">' + pagePic("执事") + '<div class="mz-grid mz-c4">' + sCards.join("") + "</div></div>", "steward") + pane("教务", "consort", '<div class="mz-folio mz-fill">' + pagePic("明妃") + wh("明妃法座", cn(cs.length) + "位／六席") + '<div class="mz-grid mz-c3">' + cCards.join("") + "</div></div>", "steward") + pane("教务", "rite", '<div class="mz-rite-pic"><img src="' + asset(RITE_PIC) + '" alt=""></div>' + wh("上次法会", D.教务.上次法会 ? esc3(D.教务.上次法会.replace("/", " ")) : "未曾办过") + '<div class="mz-none">' + (cooling ? "本月已办" : "本月可办") + "</div>" + wh("筹办门槛") + '<ul class="mz-ticks">' + ticks.map(([t, ok]) => "<li" + (ok ? ' class="mz-ok"' : "") + ">" + t + "</li>").join("") + '</ul><div class="mz-none">大法会关涉满城风云，须教主亲自开坛，此处仅照验规制</div>', "steward") + "</section>";
  }
  function cofferHtml(D) {
    const items = Object.entries(D.资粮.库藏);
    const total = items.length;
    const cap = storeCap(D);
    const free = Math.max(0, cap - total);
    const rows = STORE_KINDS.map((kind) => {
      const mine = items.filter(([, v]) => v && v.类别 === kind);
      return '<div class="mz-store-row"><div class="mz-store-head"><img class="mz-store-pic" src="' + asset(STORE_PIC[kind]) + '" alt=""><span>' + kind + "</span><b>" + (mine.length ? cn(mine.length) + "件" : "无") + '</b></div><div class="mz-grid mz-c4">' + mine.map(([名, v]) => '<div class="mz-card' + (String(v.效用 || "").length > 28 ? " mz-wide" : "") + '"><b>' + esc3(名) + "</b>" + kv("效用", v.效用 || "") + "</div>").join("") + "</div></div>";
    }).join("");
    const storePane = '<div class="mz-folio mz-store">' + rows + (free ? '<div class="mz-store-row mz-store-spare"><div class="mz-store-head"><span>余屉</span><b>' + cn(free) + '屉</b></div><div class="mz-grid mz-c4">' + empty().repeat(free) + "</div></div>" : "") + "</div>";
    const ready = CRAFT.map((c) => shopReady(D, c));
    const pickWhys = CRAFT.map((c) => craftPickWhys(D, c));
    const firstOk = pickWhys.findIndex((w) => !w.length);
    const shops = CRAFT.map((c, i) => '<label class="mz-pick mz-shop' + (pickWhys[i].length ? " mz-off" : "") + '"><input type="radio" name="类别" form="mz-craft-form" value="' + c.kind + '"' + (pickWhys[i].length ? " disabled" : "") + (i === firstOk ? " checked" : "") + ">" + (FAC_PIC[c.shop] ? '<img class="mz-shop-pic" src="' + asset(FAC_PIC[c.shop]) + '" alt="">' : "") + "<b>" + c.kind + '</b><span class="mz-price">' + cn(c.price) + "贯</span><small>" + c.note + '</small><small class="mz-shopline mz-cond">' + (pickWhys[i].length ? pickWhys[i].join(" ") : c.shop + " 已备") + "</small></label>").join("");
    const gate = craftGateWhys(D);
    const crList = CRAFT.filter((c, i) => ready[i]).map((c) => c.kind);
    const craftForm = '<div class="mz-wrow mz-craftrow"><div class="mz-wcol mz-shoplist">' + wh("作坊") + '<div class="mz-picks mz-col">' + shops + '</div></div><form id="mz-craft-form" class="' + CRAFT_FORM + '" onsubmit="return false">' + wh("制作") + '<label>物名<input name="物名" placeholder="醉仙散"></label><label class="mz-grow">效用<textarea name="效用" rows="3" placeholder="饮之如坠云雾，半个时辰方醒"></textarea></label><div class="mz-none">拨资开炉，片刻功成，归入库藏</div><div class="mz-build-foot"><span class="mz-why">库中 ' + money(总文(D)) + "</span>" + sealBtn("记下", "craft", !gate.length && firstOk >= 0, gate.length ? gate.join(" ") : "无可用作坊", " mz-lg") + "</div></form></div>" + basketHtml("craft", craftBasket);
    return '<section class="mz-win mz-on">' + tabs("库藏", [
      { id: "store", label: "库藏", n: cn(total) + "／" + cn(cap) + "屉" },
      { id: "craft", label: "工坊", n: crList.length ? "可制" + crList.join("／") : "无坊" }
    ]) + pane("库藏", "store", storePane, "store") + pane("库藏", "craft", '<div class="mz-folio mz-fill">' + craftForm + "</div>", "store") + "</section>";
  }
  function settingsHtml() {
    const mode = getPref("optSend", "now");
    const opt = (v, lab) => '<label class="mz-set-opt"><input type="radio" name="mz-opt-send" value="' + v + '"' + (mode === v ? " checked" : "") + "><span>" + lab + "</span></label>";
    const fs = FS_SCALES.some((x) => x[0] === getPref("fsScale", "1")) ? getPref("fsScale", "1") : "1";
    const fsOpt = ([v, lab]) => '<label class="mz-set-opt"><input type="radio" name="mz-opt-fs" value="' + v + '"' + (fs === v ? " checked" : "") + "><span>" + lab + "</span></label>";
    return '<section class="mz-win mz-set-win mz-on"><div class="mz-set-group"><div class="mz-set-lab">点选一条行事后</div>' + opt("now", "直接发送") + opt("fill", "只填入输入框，自己改完再发") + '</div><div class="mz-set-group"><div class="mz-set-lab">正文字号</div>' + FS_SCALES.map(fsOpt).join("") + '</div><div class="mz-set-group mz-set-vars"><div class="mz-set-lab">变量</div>' + varTreeInner() + "</div></section>";
  }
  function winHtml(name, D) {
    switch (name) {
      case "舆图":
        return atlasHtml(D);
      case "同心缕":
        return bondHtml(D);
      case "营造":
        return buildHtml(D);
      case "罪业":
        return sinHtml(D);
      case "法事":
        return riteHtml(D);
      case "教务":
        return affairsHtml(D);
      case "库藏":
        return cofferHtml(D);
      case "设置":
        return settingsHtml();
    }
    return '<section class="mz-win mz-on"><div class="mz-stub">未辟</div></section>';
  }
  function formVals(el) {
    const form = el.closest("form");
    const out = {};
    if (form) Array.from(form.elements).forEach((i) => {
      if (!i.name || i.tagName !== "INPUT" && i.tagName !== "TEXTAREA") return;
      if (i.type === "radio") {
        if (i.checked) out[i.name] = i.value;
        else out[i.name] = out[i.name] || "";
      } else out[i.name] = i.value.trim();
    });
    return out;
  }
  function onWindowClick(e, win) {
    const optSend = e.target.closest('input[name="mz-opt-send"]');
    if (optSend) {
      setPref("optSend", optSend.value);
      return;
    }
    const optFs = e.target.closest('input[name="mz-opt-fs"]');
    if (optFs) {
      setPref("fsScale", optFs.value);
      applyFontScale();
      return;
    }
    const pic = e.target.closest(".mz-pic img");
    if (pic) {
      openViewer(pic.getAttribute("src"), pic.getAttribute("alt") || "");
      return;
    }
    const nameBtn = e.target.closest(".mz-names button[data-bond]");
    if (nameBtn) {
      selectBond(nameBtn.dataset.bond);
      rerender();
      return;
    }
    const thumb = e.target.closest(".mz-thumbs i[data-theme]");
    if (thumb) {
      setPref("bond:" + bondSel, thumb.dataset.theme);
      rerender();
      refreshAllFeet();
      return;
    }
    const drop = e.target.closest(".mz-bk-x[data-drop]");
    if (drop) {
      const [kind, i] = drop.dataset.drop.split(":");
      (kind === "build" ? buildBasket : craftBasket).splice(+i, 1);
      rerender();
      return;
    }
    const bpCard = e.target.closest(".mz-bp[data-bp]");
    if (bpCard) {
      bpSel = bpSel === bpCard.dataset.bp ? null : bpCard.dataset.bp;
      forgetFields(BUILD_FORM, ["名称", "用途"]);
      rerender();
      return;
    }
    const btn = e.target.closest(".mz-seal-btn[data-act]");
    if (!btn || btn.disabled) return;
    e.preventDefault();
    const act = btn.dataset.act;
    if (act === "extort") {
      fillWriting(FORM_MSG.勒索(btn.dataset.name));
      return;
    }
    if (act === "hall") {
      commitForm({ tag: "兴造", check: (D) => hallWhys(D).join(" "), mutate: (sd) => {
        sd.资粮.铜钱 -= HALL_PRICE.庄严精舍;
        sd.道场.表殿等级 = "庄严精舍";
      }, message: (贯2) => FORM_MSG.升殿("庄严精舍", 贯2), fail: (why) => hint(btn, why) }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
      return;
    }
    if (act === "upgrade" || act === "upgrade-go" || act === "upgrade-cancel") {
      if (act === "upgrade-cancel") {
        upgradeSel = null;
        rerender();
        return;
      }
      const 名 = act === "upgrade" ? btn.dataset.name : upgradeSel;
      const D = readMVU();
      const f = facilities(D).find((x) => x.名 === 名);
      if (!f) return;
      const 新 = GRADES[GRADES.indexOf(f.档次) + 1];
      if (!新) return;
      if (新 === "天工" && act === "upgrade") {
        upgradeSel = 名;
        rerender();
        return;
      }
      const 奇效 = 新 === "天工" ? formVals(btn).奇效 || "" : "";
      if (新 === "天工" && !奇效) {
        hint(btn, "先议定奇效");
        return;
      }
      upgradeSel = null;
      commitForm({ tag: "兴造", check: (D2) => upgradeWhys(D2, 名, f.档次, 新).join(" "), mutate: (sd) => {
        const cur = sd.道场.地宫设施 && sd.道场.地宫设施[名];
        if (!cur) return;
        sd.资粮.铜钱 -= UPGRADE_PRICE[新];
        cur.档次 = 新;
        if (奇效) cur.奇效 = 奇效;
      }, message: (贯2) => FORM_MSG.升造(名, f.档次, 新, 奇效, 贯2), fail: (why) => hint(btn, why) }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
      return;
    }
    if (act === "build") {
      const v = formVals(btn);
      const 档 = v.档次;
      if (!v.名称) {
        hint(btn, "先填名称");
        return;
      }
      if (!档) {
        hint(btn, "先选档次");
        return;
      }
      addToBasket(btn, "build", buildItem(v.名称, v.用途, 档, 档 === "天工" ? v.奇效 || "" : ""));
      return;
    }
    if (act === "build-send") {
      submitBasket(btn, "build");
      return;
    }
    if (act === "craft") {
      const v = formVals(btn);
      const c = CRAFT.find((x) => x.kind === v.类别);
      if (!c) {
        hint(btn, "先选类别");
        return;
      }
      if (!v.物名) {
        hint(btn, "先填物名");
        return;
      }
      addToBasket(btn, "craft", craftItem(v.物名, v.效用, c));
      return;
    }
    if (act === "craft-send") {
      submitBasket(btn, "craft");
      return;
    }
    if (act === "loan") {
      const v = formVals(btn);
      const 贯2 = Math.round(Number(v.本金));
      if (!v.欠户) {
        hint(btn, "先填欠户");
        return;
      }
      if (/[/~]/.test(v.欠户)) {
        hint(btn, "欠户里不可含「/」「~」");
        return;
      }
      if (!(贯2 > 0)) {
        hint(btn, "本金须为整数贯");
        return;
      }
      commitForm({ tag: "无尽藏", check: (D) => loanWhys(D, 贯2).join(" "), mutate: (sd) => {
        sd.资粮.铜钱 -= 贯2;
        sd.资粮.罪业密簿 = sd.资粮.罪业密簿 || {};
        sd.资粮.罪业密簿[v.欠户] = { 类别: "债契", 欠额: 贯2, 已收息: 0, 详情: v.抵押 ? "押 " + v.抵押 : "", 价值: "月息五分，利不过本" };
      }, message: (扣) => FORM_MSG.放贷(v.欠户, 扣), fail: (why) => hint(btn, why) }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
    }
  }
  function openViewer(src, title) {
    const root = doc.getElementById(SHELL_ID);
    if (!root || doc.getElementById("mz-viewer")) return;
    const v = doc.createElement("div");
    v.id = "mz-viewer";
    v.innerHTML = '<img src="' + esc3(src) + '" alt="' + esc3(title) + '">' + (title ? "<span>" + esc3(title) + "</span>" : "");
    v.addEventListener("click", () => v.remove());
    root.appendChild(v);
  }
  function hint(btn, text) {
    let w = btn.nextElementSibling;
    if (!w || !w.classList.contains("mz-why")) {
      w = doc.createElement("span");
      w.className = "mz-why";
      btn.after(w);
    }
    w.textContent = text;
  }
  function rerender() {
    refreshLift();
  }

  // src/10-lift.js
  var openName = null;
  var hideTimer = 0;
  var reopenDrawer = false;
  var tabState = {};
  var liftOpenName = () => openName;
  var tabOf = (win, def) => tabState[win] || def;
  function openLift(name) {
    if (gateNeeded()) name = GATE_WIN;
    const side = doc.querySelector(".mz-side");
    reopenDrawer = !!(side && side.classList.contains("mz-open"));
    setDrawer(null);
    if (openName !== name) dirty.clear();
    openName = name;
    const lift = doc.getElementById(SEL.lift);
    if (!lift) return;
    doc.getElementById(SEL.liftTitle).textContent = name === GATE_WIN ? GATE_TITLE : name;
    lift.classList.toggle("mz-gate", name === GATE_WIN);
    lift.classList.toggle("mz-sin", name === "罪业");
    refreshLift();
    clearTimeout(hideTimer);
    lift.classList.remove("mz-hide");
    lift.classList.add("mz-show");
    doc.getElementById(SEL.liftBody).scrollTop = 0;
  }
  function closeLift(force) {
    if (openName === GATE_WIN && !force && gateNeeded()) return;
    openName = null;
    dirty.clear();
    resetWinState();
    if (reopenDrawer) {
      reopenDrawer = false;
      setDrawer("l");
    }
    const lift = doc.getElementById(SEL.lift);
    if (!lift) return;
    lift.classList.add("mz-hide");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (openName) return;
      lift.classList.remove("mz-show", "mz-hide", "mz-gate", "mz-sin");
      const body = doc.getElementById(SEL.liftBody);
      if (body) body.innerHTML = "";
    }, 300);
  }
  var dirty = /* @__PURE__ */ new Set();
  var fieldKey = (el) => {
    const k = el.name || el.dataset.k || el.id || "";
    if (!k) return "";
    const form = el.closest("form");
    return (form ? form.className : "") + "|" + k;
  };
  var isPick = (el) => el.type === "radio" || el.type === "checkbox";
  function onFieldInput(e) {
    const el = e.target;
    if (!el || !el.matches || !el.matches("input, textarea, select")) return;
    const k = fieldKey(el);
    if (k) dirty.add(k);
  }
  function forgetFields(formClass, names) {
    for (const n of names) dirty.delete(formClass + "|" + n);
  }
  function grabFields(root) {
    const out = /* @__PURE__ */ new Map();
    root.querySelectorAll("input, textarea, select").forEach((el) => {
      const k = fieldKey(el);
      if (!k || !dirty.has(k)) return;
      if (isPick(el)) out.set(k + "=" + el.value, el.checked);
      else out.set(k, el.value);
    });
    return out;
  }
  function restoreFields(root, vals) {
    if (!vals.size) return;
    root.querySelectorAll("input, textarea, select").forEach((el) => {
      const k = fieldKey(el);
      if (!k || el.disabled) return;
      const v = vals.get(isPick(el) ? k + "=" + el.value : k);
      if (v === void 0) return;
      if (isPick(el)) el.checked = v;
      else el.value = v;
    });
  }
  var scrollKey = (el) => [...el.classList].find((c) => c.startsWith("mz-")) || el.tagName.toLowerCase();
  function eachScrollable(root, fn) {
    const seen = /* @__PURE__ */ new Map();
    root.querySelectorAll("*").forEach((el) => {
      const k = scrollKey(el);
      const n = seen.get(k) || 0;
      seen.set(k, n + 1);
      fn(el, k + "#" + n);
    });
  }
  function grabScrolls(root) {
    const out = /* @__PURE__ */ new Map();
    eachScrollable(root, (el, k) => {
      if (el.scrollTop) out.set(k, el.scrollTop);
    });
    return out;
  }
  function restoreScrolls(root, vals) {
    if (!vals.size) return;
    eachScrollable(root, (el, k) => {
      const v = vals.get(k);
      if (v !== void 0) el.scrollTop = v;
    });
  }
  function refreshLift(Darg) {
    if (!openName) return;
    const body = doc.getElementById(SEL.liftBody);
    if (!body) return;
    const D = Darg || readMVU();
    const bodySt = body.scrollTop;
    const tops = grabScrolls(body);
    const vals = grabFields(body);
    body.innerHTML = openName === GATE_WIN ? gateHtml() : winHtml(openName, D);
    restoreFields(body, vals);
    restoreScrolls(body, tops);
    body.scrollTop = bodySt;
  }
  function onLiftClick(e) {
    if (e.target.closest(".mz-lift-x")) {
      closeLift();
      return;
    }
    if (openName === GATE_WIN) {
      if (e.target !== e.currentTarget) onGateClick(e);
      return;
    }
    if (e.target === e.currentTarget) {
      closeLift();
      return;
    }
    const tab = e.target.closest(".mz-tabs button[data-pane]");
    if (tab) {
      tabState[openName] = tab.dataset.pane;
      const win = tab.closest(".mz-win");
      tab.parentElement.querySelectorAll("button").forEach((x) => x.classList.toggle("mz-on", x === tab));
      win.querySelectorAll(".mz-pane").forEach((p) => p.classList.toggle("mz-on", p.dataset.pane === tab.dataset.pane));
      return;
    }
    onWindowClick(e, openName);
  }
  function bindLift() {
    const lift = doc.getElementById(SEL.lift);
    if (lift && !lift.dataset.bound) {
      lift.addEventListener("click", onLiftClick);
      lift.addEventListener("input", onFieldInput);
      lift.addEventListener("change", onFieldInput);
      lift.dataset.bound = "1";
    }
  }

  // src/07-shell.js
  var ZONE_DEFS = [
    { key: "同心缕", lift: "同心缕", ico: "icon-redknot.webp" },
    { key: "库藏", lift: "库藏", ico: "icon-coffer.webp" },
    { key: "教务", lift: "教务", ico: "icon-letterbox.webp" },
    { key: "营造", lift: "营造", ico: "shrine-model.webp" },
    { key: "法事", lift: "法事", ico: "icon-folddoc.webp" },
    { key: "罪业", lift: "罪业", ico: "icon-ledger.webp" }
  ];
  function navItem(z) {
    return `<div class="mz-nav-item" data-lift="${z.lift}" data-zone="${z.key}"><span class="mz-nav-ico"><img src="${asset(z.ico)}" alt="${z.key}"></span><span class="mz-nav-main"><span class="mz-nav-lab">${z.key}</span><span class="mz-nav-sub"></span></span><span class="mz-nav-lock"></span></div>`;
  }
  function skeletonHtml() {
    return `
  <div class="mz-side mz-tex">
    <div class="mz-plaque">密宗模拟器</div>
    <div id="${SEL.minimap}" data-lift="舆图">
      <div class="mz-map-wrap"><img src="${asset("map-panorama.webp")}" alt="长安舆图"><div class="mz-map-pin"></div></div>
      <div class="mz-doom" id="${SEL.doom}"></div>
    </div>
    <nav class="mz-nav">${ZONE_DEFS.map(navItem).join("")}</nav>
  </div>
  <div class="mz-main">
    <div class="mz-topbar mz-tex">
      <button class="mz-tb-plaque" id="${SEL.mplaque}" title="诸务">${ICO.menu}</button>
      <div class="mz-tb-face" id="${SEL.topbar}"></div>
      <div id="${SEL.corner}">
        <button data-corner="set" title="设置">${ICO.settings}</button>
        <button data-corner="exit" title="退出到原生">${ICO.close}</button>
      </div>
    </div>
    <div id="${SEL.paper}"></div>
    <div id="${SEL.status}"></div>
    <div id="${SEL.writing}">
      <div class="mz-w-tools">
        <button id="${SEL.del}" title="删去记录">${ICO.trash}</button>
        <button id="${SEL.regen}" title="删除并重写上一条">${ICO.regen}</button>
      </div>
      <textarea id="${SEL.textarea}" rows="1" placeholder="教主示下……"></textarea>
      <button id="${SEL.send}" title="发送">敕</button>
    </div>
    <div id="${SEL.delbar}"><span id="${SEL.delCount}">点选要删去的记录</span><button id="${SEL.delCancel}">取消</button><button class="mz-danger" id="${SEL.delConfirm}" disabled>删除</button></div>
    <button id="${SEL.jump}" title="回至卷尾"></button>
  </div>
  <div id="${SEL.mscrim}"></div>
  <div id="${SEL.lift}"><div class="mz-held mz-tex"><h3 id="${SEL.liftTitle}"></h3><button class="mz-lift-x" title="收窗">${ICO.close}</button><div class="mz-held-body" id="${SEL.liftBody}"></div></div></div>
  `;
  }
  var drawerOpen = null;
  function setDrawer(k) {
    drawerOpen = k;
    const root = doc.getElementById(SHELL_ID);
    if (!root) return;
    const side = root.querySelector(".mz-side");
    if (side) side.classList.toggle("mz-open", k === "l");
    const plaque = doc.getElementById(SEL.mplaque);
    if (plaque) plaque.classList.toggle("mz-on", k === "l");
    const scrim = doc.getElementById(SEL.mscrim);
    if (scrim) scrim.classList.toggle("mz-open", !!k);
  }
  var toggleDrawer = (k) => setDrawer(drawerOpen === k ? null : k);
  function ensureFonts() {
    FONT_CSS.forEach((href, i) => {
      const id = FONT_LINK_ID + i;
      if (doc.getElementById(id)) return;
      const link = doc.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      doc.head.appendChild(link);
    });
  }
  function applyFontScale() {
    const root = doc.getElementById(SHELL_ID);
    if (!root) return;
    const v = getPref("fsScale", "1");
    root.style.setProperty("--fs-scale", FS_SCALES.some((x) => x[0] === v) ? v : "1");
  }
  function ensureShell() {
    if (doc.getElementById(SHELL_ID)) return;
    ensureFonts();
    let style = doc.getElementById(SEL.shellStyle);
    if (!style) {
      style = doc.createElement("style");
      style.id = SEL.shellStyle;
      doc.head.appendChild(style);
    }
    style.textContent = SHELL_CSS;
    const root = doc.createElement("div");
    root.id = SHELL_ID;
    root.className = "mz-shell";
    root.dataset.owner = SHELL_TOKEN;
    root.innerHTML = skeletonHtml();
    doc.body.appendChild(root);
    applyFontScale();
    const exit = () => {
      if (drawerOpen) {
        setDrawer(null);
        return;
      }
      toggleShell();
    };
    root.querySelectorAll("#" + SEL.corner + " button").forEach((b) => {
      const k = b.dataset.corner;
      if (k === "set") b.addEventListener("click", () => openLift("设置"));
      else if (k === "exit") b.addEventListener("click", exit);
    });
    root.querySelectorAll(".mz-side [data-lift]").forEach((el) => {
      el.addEventListener("click", () => {
        if (!el.classList.contains("mz-locked")) openLift(el.dataset.lift);
      });
    });
    doc.getElementById(SEL.mplaque).addEventListener("click", () => toggleDrawer("l"));
    doc.getElementById(SEL.mscrim).addEventListener("click", () => setDrawer(null));
  }

  // src/02-visibility.js
  function ensureHideStyle() {
    let style = doc.getElementById(SEL.shellHideStyle);
    if (!style) {
      style = doc.createElement("style");
      style.id = SEL.shellHideStyle;
      style.textContent = "#sheld, #chat, #form_sheld { display: none !important; }";
      doc.head.appendChild(style);
    }
    return style;
  }
  function isShellVisible() {
    const root = doc.getElementById(SHELL_ID);
    return root ? root.dataset.visible !== "false" : false;
  }
  function applyVisibility(visible, nativeShown) {
    const root = doc.getElementById(SHELL_ID);
    if (root) {
      root.dataset.visible = visible ? "true" : "false";
      root.style.display = visible ? "flex" : "none";
    }
    ensureHideStyle().disabled = !visible || !!nativeShown;
    if (visible) {
      hideEntry();
      raiseAcuUi();
    } else {
      setDrawer(null);
      closeLift();
      renderEntry();
    }
  }
  var warmed = false;
  var busy = false;
  function warmAssets() {
    if (warmed) return;
    warmed = true;
    const queue = PRELOAD_ASSETS.slice();
    const retried = /* @__PURE__ */ new Set();
    const lane = () => {
      if (!queue.length) return;
      if (sending || busy || gateBusy) {
        setTimeout(lane, 300);
        return;
      }
      const name = queue.shift();
      const img = doc.createElement("img");
      img.onload = lane;
      img.onerror = () => {
        if (retried.has(name)) {
          lane();
          return;
        }
        retried.add(name);
        setTimeout(() => {
          queue.push(name);
          lane();
        }, 3e3);
      };
      img.src = asset(name);
    };
    for (let n = 0; n < PRELOAD_LANES; n++) lane();
  }
  function fade(root, cls, then) {
    busy = true;
    root.classList.add(cls);
    let fired = false;
    const go = () => {
      if (fired) return;
      fired = true;
      root.removeEventListener("animationend", go);
      root.classList.remove(cls);
      busy = false;
      then();
    };
    root.addEventListener("animationend", function h(e) {
      if (e.target !== root) return;
      root.removeEventListener("animationend", h);
      go();
    });
    setTimeout(go, 400);
  }
  function toggleShellImpl() {
    if (busy) return;
    const root = doc.getElementById(SHELL_ID);
    if (isShellVisible()) {
      commitUserEditIfOpen();
      if (!root) {
        applyVisibility(false);
        return;
      }
      ensureHideStyle().disabled = true;
      fade(root, "mz-shell-out", () => applyVisibility(false));
      return;
    }
    let needGate = false;
    try {
      setLastStat(null);
      storyCacheDrop();
      setEditState(null);
      if (delMode) setDelMode(false);
      applyVisibility(true, true);
      renderAll(true);
      renderStoryLog();
      needGate = gateNeeded();
      if (!needGate) playEntrance();
    } catch (e) {
      applyVisibility(false);
      throw e;
    }
    const shown = doc.getElementById(SHELL_ID);
    if (!shown) return;
    fade(shown, "mz-shell-in", () => {
      if (!isShellVisible()) return;
      ensureHideStyle().disabled = false;
      if (needGate) ensureGate();
    });
  }
  var toggleShell = typeof errorCatched === "function" ? errorCatched(toggleShellImpl) : toggleShellImpl;
  function onShellEnter() {
    try {
      window.parent.__MZ_ENTER_FLAG = false;
    } catch (err) {
    }
    if (!isShellVisible()) toggleShell();
  }
  function ensureEntry() {
    let el = doc.getElementById(SEL.entry);
    if (!el) {
      el = doc.createElement("div");
      el.id = SEL.entry;
      el.className = "mz-shell";
      el.dataset.owner = SHELL_TOKEN;
      doc.body.appendChild(el);
    }
    return el;
  }
  function hideEntry() {
    const el = doc.getElementById(SEL.entry);
    if (el) {
      el.className = "mz-shell";
      el.innerHTML = "";
    }
  }
  function onPanelFloor() {
    try {
      const m0 = getChatMessages(0)[0];
      return getLastMessageId() === 0 && !!m0 && isPanelText(m0.message);
    } catch (e) {
      return false;
    }
  }
  function renderEntry() {
    const el = ensureEntry();
    if (onPanelFloor()) {
      el.className = "mz-shell";
      el.innerHTML = "";
      return;
    }
    el.className = "mz-shell mz-tab";
    el.innerHTML = `<button class="mz-entry-tab" id="${SEL.entryEnter}" title="入卷 ${CARD_TITLE}"><i>入</i><span>${CARD_TITLE}</span>${ICO.chev}</button>`;
    positionPill();
    const enter = doc.getElementById(SEL.entryEnter);
    if (enter) enter.addEventListener("click", toggleShell);
  }
  function positionPill() {
    const el = doc.getElementById(SEL.entry);
    if (!el || !el.classList.contains("mz-tab")) return;
    const chat = doc.getElementById("chat");
    if (chat) {
      const r = chat.getBoundingClientRect();
      el.style.left = r.left + r.width / 2 + "px";
      el.style.top = r.top + 10 + "px";
    } else {
      el.style.left = "50%";
      el.style.top = "calc(14px + env(safe-area-inset-top, 0px))";
    }
    el.style.transform = "translateX(-50%)";
  }
  window.parent.addEventListener("resize", positionPill);

  // src/18-lifecycle.js
  var boundEvents = [];
  function onEvent(name, fn) {
    boundEvents.push([name, fn]);
    eventOn(name, fn);
  }
  var onVarUpdateEnded = (variables, variables_before_update) => {
    try {
      if (!variables || !variables.stat_data) return;
      if (!variables_before_update || !_.isEqual(variables.stat_data, variables_before_update.stat_data)) {
        setLastStat(_.cloneDeep(_.omit(variables.stat_data, ["$internal"])));
        const lid = safeLastMessageId();
        storyCacheDrop(lid);
        const afterD = readMVU(variables.stat_data);
        setStatDelta(variables_before_update && variables_before_update.stat_data ? diffStat(readMVU(variables_before_update.stat_data), afterD) : null);
        renderAll(false, afterD);
        playStatFx();
        if (isShellVisible() && !sending && !delMode && !editState) renderStoryLog();
      }
    } catch (e) {
      console.warn("[密宗前端] 变量更新渲染失败", e);
    }
  };
  onEvent("mag_variable_update_ended", (v, b) => setTimeout(() => onVarUpdateEnded(v, b), 0));
  var onVarInitialized = (variables) => {
    try {
      if (variables && variables.stat_data) setLastStat(_.cloneDeep(_.omit(variables.stat_data, ["$internal"])));
      renderAll(true);
    } catch (e) {
      console.warn("[密宗前端] 变量初始化渲染失败", e);
    }
  };
  onEvent("mag_variable_initialized", onVarInitialized);
  var lastKnownChatId = null;
  try {
    lastKnownChatId = SillyTavern.getCurrentChatId();
  } catch (e) {
    dbg("getChatId", e);
  }
  var onChatChanged = (chatId) => {
    if (lastKnownChatId !== null && lastKnownChatId !== chatId) {
      try {
        reloadIframe();
      } catch (e) {
        dbg("reloadIframe", e);
      }
      return;
    }
    lastKnownChatId = chatId;
  };
  onEvent(tavern_events.CHAT_CHANGED, onChatChanged);
  var onMsgMutated = (mid) => {
    storyCacheDrop(Number(mid));
    if (isShellVisible() && !sending && !delMode && !editState) renderStoryLog();
  };
  onEvent(tavern_events.MESSAGE_EDITED, onMsgMutated);
  onEvent(tavern_events.MESSAGE_UPDATED, onMsgMutated);
  onEvent(tavern_events.CHARACTER_MESSAGE_RENDERED, onMsgMutated);
  onEvent(tavern_events.USER_MESSAGE_RENDERED, onMsgMutated);
  onEvent(tavern_events.MESSAGE_SWIPED, (mid) => {
    onMsgMutated(mid);
    setLastStat(null);
    renderAll(true);
    if (isShellVisible()) ensureGate();
    else renderEntry();
  });
  onEvent(tavern_events.MESSAGE_DELETED, () => {
    storyCacheDrop();
    setLastStat(null);
    if (isShellVisible() && !sending && !delMode && !editState) {
      renderAll(true);
      renderStoryLog();
      ensureGate();
    }
  });
  async function init() {
    try {
      if (typeof waitGlobalInitialized === "function") await waitGlobalInitialized("Mvu");
    } catch (e) {
      dbg("waitMvu", e);
    }
    setLastStat(null);
    storyCacheDrop();
    const prevVisible = isShellVisible();
    [SHELL_ID, SEL.entry].forEach((id) => {
      const el = doc.getElementById(id);
      if (el) el.remove();
    });
    ensureShell();
    warmAssets();
    ensureEntry();
    ensureStoryDom();
    bindLift();
    applyVisibility(prevVisible);
    try {
      doc.addEventListener("keydown", onDocKey);
    } catch (e) {
      dbg("docKeydown", e);
    }
    try {
      window.parent.addEventListener("mz-shell-enter", onShellEnter);
    } catch (e) {
      dbg("parentEnterEvt", e);
    }
    let enterFlag = false;
    try {
      enterFlag = !!window.parent.__MZ_ENTER_FLAG;
      window.parent.__MZ_ENTER_FLAG = false;
    } catch (e) {
      dbg("enterFlag", e);
    }
    try {
      renderAll(true);
      renderStoryLog();
      if (enterFlag && !prevVisible) toggleShell();
      else if (!prevVisible) renderEntry();
      else ensureGate();
    } catch (e) {
      applyVisibility(false);
      throw e;
    }
  }
  var ESC_CLOSERS = [
    { isOpen: () => !!liftOpenName(), close: () => closeLift() },
    { isOpen: () => !!editState, close: () => closeUserEdit(false) },
    { isOpen: () => delMode, close: () => setDelMode(false) }
  ];
  function onDocKey(e) {
    try {
      if (!isShellVisible()) return;
      if (acuUiOpen()) return;
      if (e.key === "Escape") {
        const hit = ESC_CLOSERS.find((c) => c.isOpen());
        if (hit) {
          e.preventDefault();
          hit.close();
        }
        return;
      }
      if (sending || delMode || liftOpenName()) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target;
      if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT" || t.isContentEditable)) return;
      const n = +e.key;
      if (!(n >= 1 && n <= 9)) return;
      const opts = doc.querySelectorAll("#" + SEL.paper + " .mz-opt");
      if (opts[n - 1]) {
        e.preventDefault();
        opts[n - 1].click();
      }
    } catch (err) {
    }
  }
  window.addEventListener("pagehide", () => {
    try {
      window.parent.removeEventListener("resize", positionPill);
      window.parent.removeEventListener("mz-shell-enter", onShellEnter);
      doc.removeEventListener("keydown", onDocKey);
      boundEvents.forEach(([name, fn]) => {
        try {
          eventRemoveListener(name, fn);
        } catch (e) {
          dbg("unbind:" + name, e);
        }
      });
      boundEvents.length = 0;
      const root = doc.getElementById(SHELL_ID);
      if (!root || root.dataset.owner === SHELL_TOKEN) {
        if (root) root.remove();
        const entry = doc.getElementById(SEL.entry);
        if (entry && entry.dataset.owner === SHELL_TOKEN) entry.remove();
        const style = doc.getElementById(SEL.shellStyle);
        if (style) style.remove();
        const hideStyle = doc.getElementById(SEL.shellHideStyle);
        if (hideStyle) hideStyle.remove();
        FONT_CSS.forEach((h, i) => {
          const l = doc.getElementById(FONT_LINK_ID + i);
          if (l) l.remove();
        });
      }
    } catch (e) {
      dbg("pagehide", e);
    }
  });
  if (typeof $ === "function" && typeof errorCatched === "function") {
    $(errorCatched(init));
  } else {
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
  }
})();

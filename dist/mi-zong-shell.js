(() => {
  // src/01-constants.js
  var doc = window.parent.document;
  var SHELL_ID = "mz-shell-root";
  var SHELL_TOKEN = "mz_" + Math.random().toString(36).slice(2) + "_" + Date.now();
  var CARD_TITLE = "密宗模拟器";
  var CDN_TAG = "1.0.51";
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
  var PRELOAD_ASSETS = ["card-calling.webp", "card-ledger.webp", "icon-coffer.webp", "icon-folddoc.webp", "icon-ledger.webp", "icon-letterbox.webp", "icon-lotus.webp", "icon-redknot.webp", "incense-coil.webp", "lotus-rank.webp", "map-changan.webp", "map-panorama.webp", "paper-folded.webp", "paper-ledger.webp", "paper-scroll.webp", "paper-whisper.webp", "seal-chi.webp", "seal-storm.webp", "shrine-model.webp", "slip-ledger.webp", "slip-title.webp", "stamp-angelica.webp", "stamp-orchid.webp", "stamp-peach.webp", "stamp-pomegranate.webp", "ticket-notice.webp", "axle-plain.webp", "bg-lacquer-red.webp", "bg-silk-aged.webp", "board-temple.webp", "brocade-band.webp", "hanging-fish.webp", "plaque-entry.webp", "plaque-header.webp", "ribbon-knot.webp", "silk-board-core.webp"];
  var SEL = {
    entry: "mz-entry",
    entryEnter: "mz-entry-enter",
    shellHideStyle: "mz-shell-hide-style",
    shellStyle: "mz-shell-style",
    board: "mz-board",
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
    crisis: "mz-crisis",
    corner: "mz-corner",
    acuBtn: "mz-corner-acu",
    lift: "mz-lift",
    liftTitle: "mz-lift-title",
    liftBody: "mz-lift-body",
    mbar: "mz-mbar",
    mscrim: "mz-mscrim",
    mmenu: "mz-mmenu"
  };
  function dbg(tag, e) {
    try {
      if (window.parent.localStorage.getItem("mzDebug")) console.warn("[密宗dbg]", tag, e);
    } catch (err) {
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
    vars: svg('<path d="M4 6h16M4 12h16M4 18h10"/>'),
    close: svg('<path d="M5 5l14 14M19 5L5 19"/>'),
    db: svg('<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13"/><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>'),
    chev: svg('<path d="M9 6l6 6-6 6"/>'),
    lock: svg('<rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>')
  };

  // src/05-data.js
  var CAST = ["苏白芷", "裴清砚", "叶玄薇", "萧夜沉"];
  var CAST_HINT = { 苏白芷: "药铺医女", 裴清砚: "裴府才女", 叶玄薇: "玄都女冠", 萧夜沉: "西市胡姬" };
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
  var MINIMAP_PIN = { 城南道场: ["城南道场", 54, 85], 长安: ["长安", 55, 42] };
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
  var STORM_CLS = { 低: "mz-good", 中: "mz-warn", 高: "mz-red" };
  var HALLS = ["破败草庵", "庄严精舍", "敕赐法堂"];
  var HALL_Q = { 破败草庵: "mz-q1", 庄严精舍: "mz-q2", 敕赐法堂: "mz-q4" };
  var HALL_PRICE = { 庄严精舍: 200, 敕赐法堂: 1e3 };
  var GRADES = ["粗成", "精工", "天工"];
  var GRADE_Q = { 粗成: "mz-q1", 精工: "mz-q2", 天工: "mz-q4" };
  var GRADE_PRICE = { 粗成: 25, 精工: 100, 天工: 200 };
  var UPGRADE_PRICE = { 精工: 75, 天工: 100 };
  var STORE_CAP = { 无: 3, 粗成: 5, 精工: 8, 天工: 12 };
  var UNLOCK_FANS = { 教务: 10, 法事: 20, 罪业: 50 };
  var ZONE_ROWS = { 同心缕: 4, 库藏: 2, 教务: 3, 营造: 2, 法事: 3, 罪业: 3 };
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
  var KIND_SHORT = { 药品: "药", 道具: "具", 法器: "器" };
  var LIMITS = { 库藏: 12, 罪业密簿: 5, 法事委托: 3, 神迹传闻: 3, 执事名册: 12, 明妃录: 6 };
  var FORM_MSG = {
    兴造: (名, 档, 奇效) => "【兴造】" + 名 + "（" + 档 + "）已破土动工。" + (奇效 ? "奇效议定：" + 奇效 : ""),
    升殿: (殿) => "【兴造】表殿改建" + 殿 + "，匠人已开工动土。",
    升造: (名, 旧, 新, 奇效) => "【兴造】" + 名 + "自" + 旧 + "改造为" + 新 + "，匠人已动工。" + (奇效 ? "奇效议定：" + 奇效 : ""),
    工巧: (名, 类) => "【工巧】" + 类 + "「" + 名 + "」已拨资开炉。",
    放贷: (户, 贯2) => "【无尽藏】放贷" + 贯2 + "贯与" + 户 + "，立契画押。",
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
    if (GATE.开.includes(h)) return { 文: "坊门已开", cls: "mz-good" };
    if (fest && fest.今日 && fest.今日.名 === "上元") return { 文: "上元弛禁", cls: "mz-good" };
    if (GATE.暮鼓.includes(h)) return { 文: "暮鼓将响", cls: "mz-warn" };
    return { 文: "坊门已闭", cls: "mz-warn" };
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
      教务: { 法事委托: obj(g("教务.法事委托")), 神迹传闻: obj(g("教务.神迹传闻")), 信众: num(g("教务.信众")), 上次法会: str(g("教务.上次法会")) },
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
/* ==== 配色（单主题：漆黑鎏金＋旧纸中栏） ==== */
#mz-shell-root {
  /* 字阶八档，见 前端信息架构.md「字体与字阶」 */
  --fs-title: 28px; --ls-title: 14px;
  --fs-plaque: 14px; --ls-plaque: 6px;
  --fs-name: 15.5px; --ls-name: 3px;
  --fs-label: 12.5px; --ls-label: 3px;
  --fs-body: 17.5px;
  --fs-read: 13.5px; --ls-read: .5px;
  --fs-tag: 12px; --ls-tag: 2px;
  --fs-btn: 13.5px; --ls-btn: 2px; --fs-btn-lg: 16px; --ls-btn-lg: 6px;
  /* 三档时长＋两条曲线，全前端不得另写数字，见 前端信息架构.md「动效」 */
  --t-fast: .16s; --t-mid: .28s; --t-slow: .48s;
  --ease-out: cubic-bezier(.22,.61,.36,1);
  --ease-paper: cubic-bezier(.16,.84,.3,1);
  --lacquer: #171008;
  --paper: #e0d4b4;
  --paper-hi: #eadfc2;
  --paper-dim: #d3c5a2;
  --ink: #2f2718;
  --ink-dim: #5c5138;
  --ink-faint: #837455;
  --cinnabar: #a03426;
  --cinnabar-soft: #b04a38;
  --gold: #d9b45f;
  --gold-rgb: 217,180,95;
  --gold-dim: #c9a04e;
  --side-text: #dcb490;
  --side-text-hi: #f6e7c8;
  --side-title: #eecd8a;
  --warn: #96500f;
  --good: #4a6926;
  --dim-rgb: 255,236,210;
  --scrim: rgba(30,22,10,.55);
  --scroll-w: clamp(620px, 46vw, 700px);
  --side-w: clamp(240px, 18vw, 320px);
  --bar-tot: calc(60px + env(safe-area-inset-bottom, 0px));
  /* 断点走容器查询：外壳本身即视口，预览页可框定外壳尺寸直接看 */
  container-type: size; container-name: mz;
}

:where(#mz-shell-root), :where(#mz-shell-root) * { margin: 0; padding: 0; box-sizing: border-box; }
:where(#mz-shell-root) svg { display: block; overflow: visible; }
:where(#mz-shell-root) img { display: block; -webkit-user-drag: none; user-select: none; }

/* ==== 整体三栏 ==== */
/* 酒馆 html 带 transform，fixed 的包含块是 html 而非视口；手机端 body 又 fixed 使 html 高 0，尺寸不能靠 inset 撑 */
#mz-shell-root {
  position: fixed; inset: 0; width: 100vw; width: 100dvw; height: 100vh; height: 100dvh; z-index: 9000; display: flex;
  font-family: 'Noto Serif SC','Source Han Serif SC','Songti SC','SimSun',serif;
  color: var(--ink);
  background-color: #cfc0a0;
  background-image:
    radial-gradient(120% 105% at 50% 42%, rgba(60,42,18,0) 45%, rgba(60,42,18,.24) 100%),
    linear-gradient(rgba(207,192,160,.42), rgba(207,192,160,.42)),
    url('${A}bg-silk-aged.webp');
  background-repeat: no-repeat, no-repeat, repeat;
  background-size: 100% 100%, 100% 100%, 512px 512px;
}
#mz-shell-root ::-webkit-scrollbar { width: 9px; }
#mz-shell-root ::-webkit-scrollbar-track { background: linear-gradient(90deg,
  transparent calc(50% - .5px), rgba(var(--gold-rgb), .25) calc(50% - .5px),
  rgba(var(--gold-rgb), .25) calc(50% + .5px), transparent calc(50% + .5px)); }
#mz-shell-root ::-webkit-scrollbar-thumb { min-height: 48px; border: 2px solid transparent;
  background-clip: border-box; border-radius: 5px;
  background-color: color-mix(in srgb, var(--gold-dim) 62%, transparent); }
#mz-shell-root ::-webkit-scrollbar-thumb:hover { background-color: var(--gold-dim); }
/* 禁用态光标总规则：表单件与钮走原生 disabled，非表单件走 .mz-off（.mz-lock／.mz-locked 同义） */
#mz-shell-root [disabled], #mz-shell-root .mz-off, #mz-shell-root .mz-lock, #mz-shell-root .mz-locked { cursor: not-allowed; }

`;

  // src/css/sides.js
  var A2 = ASSET_BASE;
  var sides_default = `
/* ==== 侧栏骨架 ==== */
.mz-side, .mz-rside {
  width: var(--side-w); flex: none; display: flex; flex-direction: column;
  padding: 8px 13px 6px; gap: clamp(4px, 1.5vh, 22px); overflow-y: auto;
  background-image:
    linear-gradient(180deg, rgba(50,22,8,.10), rgba(28,12,4,.30)),
    linear-gradient(rgba(106,56,30,.32), rgba(106,56,30,.32)),
    url('${A2}bg-lacquer-red.webp');
  background-repeat: no-repeat, no-repeat, repeat;
  background-size: 100% 100%, 100% 100%, 512px 512px;
  box-shadow: inset 0 0 30px rgba(40,18,6,.3);
}
.mz-side { border-right: 1px solid rgba(240,200,140,.25); }
.mz-rside { border-left: 1px solid rgba(240,200,140,.25); }

/* 栏头匾额（横向三切片：两端框角固定，中段匾心拉伸） */
.mz-plaque {
  flex: none; display: flex; align-items: center; justify-content: center;
  height: 44px; color: #e4c479;
  font-size: var(--fs-plaque); letter-spacing: var(--ls-plaque); text-indent: var(--ls-plaque);   /* 抵消末字字距，题字真居中 */
  font-weight: 600;
  border-style: solid; border-color: transparent; border-width: 0 6px;
  border-image: url('${A2}plaque-header.webp') 0 60 fill / 0 6px stretch;
  filter: drop-shadow(0 3px 7px rgba(0,0,0,.5));
}

/* ==== 信息榜（九宫 fill 切片，框条与榜芯随行数拉伸） ==== */
#mz-board { flex: none;
  border-style: solid; border-color: transparent; border-width: 23px 24px 23px;
  border-image: url('${A2}board-temple.webp') 60 64 60 fill / 23px 24px 23px stretch;
  filter: drop-shadow(0 2px 3px rgba(70,50,20,.4)) drop-shadow(0 8px 16px rgba(70,50,20,.28)); }
#mz-board .mz-face { padding: 7px 10px 5px; }
#mz-board .mz-grp + .mz-grp { margin-top: 7px; padding-top: 7px; border-top: 1px solid rgba(120,96,54,.3); }
#mz-board .mz-row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  font-size: 12.5px; line-height: 1.7; color: var(--ink-dim); white-space: nowrap; }
#mz-board .mz-row span { letter-spacing: 2px; }
#mz-board .mz-row b { color: var(--ink); font-weight: 600; font-size: 14px; letter-spacing: .5px; }
#mz-board .mz-row b.mz-warn { color: #96500f; }
#mz-board .mz-row b.mz-good { color: #4a6926; }
#mz-board .mz-row b.mz-fest { color: var(--cinnabar); }
#mz-board .mz-row b.mz-dim { color: var(--ink-faint); font-weight: 500; }
#mz-board .mz-solo { font-size: 13.5px; letter-spacing: 2px; color: var(--ink); line-height: 1.75; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#mz-board .mz-solo b { font-size: 15px; font-weight: 700; }
#mz-board .mz-solo.mz-dim { font-size: 12px; letter-spacing: 1.5px; color: var(--ink-faint); }

/* ==== 舆图缩略（右栏顶部常驻） ==== */
#mz-minimap { flex: none; cursor: pointer; border: 1px solid rgba(50,24,10,.5);
  filter: drop-shadow(0 2px 3px rgba(70,50,20,.35)) drop-shadow(0 8px 16px rgba(70,50,20,.25)); transition: translate var(--t-fast) var(--ease-out); }
#mz-minimap:hover { translate: 0 -2px; }
#mz-minimap .mz-map-wrap { position: relative; }
#mz-minimap .mz-map-wrap img { width: 100%; }
/* 坐标对应 map-panorama.webp 上的南郊寺庙，换图必须重标 */
#mz-minimap .mz-map-pin { position: absolute; left: 54%; top: 85%; width: 9px; height: 9px; border-radius: 50%;
  background: var(--cinnabar); border: 1.5px solid var(--paper-hi); box-shadow: 0 0 6px var(--cinnabar); }
#mz-minimap .mz-map-pin::after { content: attr(data-label); position: absolute; left: 13px; top: -4px;
  font-size: 10.5px; letter-spacing: 1px; color: var(--ink-dim); white-space: nowrap;
  background: rgba(234,223,194,.82); padding: 1px 5px; }
/* 灭佛进度带 */
#mz-minimap .mz-doom { background: #241a0d; border-top: 1px solid rgba(var(--gold-rgb), .3); padding: 7px 10px 8px; }
#mz-minimap .mz-doom .mz-lbl { display: flex; justify-content: space-between; font-size: 11.5px; letter-spacing: 2px;
  color: #b39a7e; margin-bottom: 5px; }
#mz-minimap .mz-doom .mz-lbl b { color: #d89a56; font-weight: 500; }
#mz-minimap .mz-doom .mz-bar { height: 5px; background: rgba(255,240,214,.10); }
#mz-minimap .mz-doom .mz-bar i { display: block; height: 100%; width: 18%; background: linear-gradient(90deg, #7a4a20, #a4623a); }
/* 地界／风波 */
#mz-minimap .mz-where, #mz-minimap .mz-storm { display: flex; justify-content: space-between; align-items: baseline; gap: 10px;
  font-size: 11.5px; letter-spacing: 2px; color: #b39a7e; white-space: nowrap; }
#mz-minimap .mz-where { margin-top: 8px; padding-top: 7px; border-top: 1px solid rgba(255,240,214,.12); }
#mz-minimap .mz-storm { margin-top: 3px; }
#mz-minimap .mz-w-zone { flex: none; }
#mz-minimap .mz-w-sub, #mz-minimap .mz-storm b { font-size: 13px; letter-spacing: 1px; font-weight: 500; color: #efe3c8; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
#mz-minimap .mz-storm b.mz-warn { color: #f0b072; }
#mz-minimap .mz-storm b.mz-good { color: #b9cc8a; }
#mz-minimap .mz-storm b.mz-red { color: #f09a7e; }

/* ==== 玩法入口条（小匾：浅楠木芯细朱框九宫切片） ==== */
.mz-zone { position: relative; padding: 3px 6px 4px; margin: 0; cursor: pointer;
  border-style: solid; border-color: transparent; border-width: 14px;
  border-image: url('${A2}plaque-entry.webp') 160 / 14px stretch;
  background: url('${A2}silk-board-core.webp') center / cover; background-clip: border-box;
  filter: drop-shadow(0 3px 5px rgba(0,0,0,.4));
  transition: transform var(--t-fast) var(--ease-out), filter var(--t-fast) var(--ease-out); }
.mz-zone:hover { transform: translateY(-2px); filter: drop-shadow(0 5px 8px rgba(0,0,0,.45)); }
.mz-zone h5 { display: flex; align-items: center; gap: 9px; font-size: var(--fs-label); letter-spacing: var(--ls-label); font-weight: 400; white-space: nowrap;
  letter-spacing: 3px; color: var(--side-text); margin-bottom: 4px; transition: color var(--t-fast) var(--ease-out); }
.mz-zone h5:last-child { margin-bottom: 0; }
.mz-zone h5::after { content: ''; flex: 1; height: 1px;
  background: linear-gradient(90deg, rgba(var(--gold-rgb), .3), transparent); transition: background var(--t-fast) var(--ease-out); }
.mz-z-ico { width: 30px; height: 30px; flex: none; display: flex; align-items: center; justify-content: center; }
.mz-z-ico img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 2px 3px rgba(0,0,0,.5)); }
.mz-z-ico.mz-stub { border: 1px dashed rgba(var(--gold-rgb), .4); color: var(--gold-dim); }
.mz-z-ico.mz-stub svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.mz-zone:not(.mz-locked):hover h5::after { background: linear-gradient(90deg, rgba(var(--gold-rgb), .6), transparent); }
/* 状态行纪律：每条入口必须挂中频读数，只挂名字的入口条不许存在 */
.mz-r-row { display: flex; justify-content: space-between; gap: 10px; font-size: 12.5px;
  color: var(--side-text); line-height: 1.78; white-space: nowrap; }
.mz-r-row b { color: var(--side-text-hi); font-weight: 500; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.mz-r-row .mz-r-warn { color: #f0b072; }
.mz-r-row .mz-r-good { color: #b9cc8a; }
.mz-r-row .mz-r-red { color: #f09a7e; }
/* 档次色递进 绿 蓝 紫 金；三档系统取 q1/q2/q4，q3 留扩档 */
.mz-r-row .mz-q1 { color: #a8c47f; }
.mz-r-row .mz-q2 { color: #8fb5d4; }
.mz-r-row .mz-q3 { color: #b79bd4; }
.mz-r-row .mz-q4 { color: #e6c36a; }
.mz-r-row .mz-r-dim { color: var(--side-text); opacity: .6; }
/* 匾面为浅木，面上一律墨色字；档次色与告警色换深调 */
.mz-zone h5, .mz-zone .mz-r-row { color: var(--ink-dim); }
.mz-zone .mz-r-row b { color: var(--ink); }
.mz-zone .mz-r-row .mz-r-warn { color: #9a5416; }
.mz-zone .mz-r-row .mz-r-good { color: #587426; }
.mz-zone .mz-r-row .mz-r-red { color: var(--cinnabar); }
.mz-zone .mz-r-row .mz-q1 { color: #587426; }
.mz-zone .mz-r-row .mz-q2 { color: #2e6484; }
.mz-zone .mz-r-row .mz-q3 { color: #684688; }
.mz-zone .mz-r-row .mz-q4 { color: #8a6610; }
.mz-zone .mz-r-row .mz-r-dim { color: var(--ink-faint); opacity: 1; }
.mz-zone h5::after { background: linear-gradient(90deg, rgba(139,103,42,.55), transparent); }
.mz-zone:hover h5 { color: var(--cinnabar); }
.mz-zone .mz-z-ico img { filter: drop-shadow(0 1px 2px rgba(0,0,0,.3)); }

/* 锁匾 */
.mz-zone.mz-locked { filter: drop-shadow(0 3px 5px rgba(0,0,0,.4)) saturate(.55); }
.mz-zone.mz-locked:hover { transform: none; }
.mz-zone.mz-locked h5, .mz-zone.mz-locked:hover h5 { color: var(--ink-faint); }
.mz-zone.mz-locked .mz-z-ico img { filter: grayscale(1) opacity(.55); }
.mz-r-row.mz-r-blank { visibility: hidden; }
.mz-r-row.mz-r-lock { justify-content: flex-start; gap: 6px; align-items: center; color: var(--ink-faint); letter-spacing: 1.5px; }
.mz-r-row.mz-r-lock svg { width: 13px; height: 13px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
@keyframes mz-unveil { 0% { filter: drop-shadow(0 0 0 rgba(216,164,68,0)); transform: translateY(0); }
  25% { filter: drop-shadow(0 0 14px rgba(216,164,68,.95)) drop-shadow(0 3px 5px rgba(0,0,0,.4)); transform: translateY(-4px); }
  100% { filter: drop-shadow(0 3px 5px rgba(0,0,0,.4)); transform: translateY(0); } }
.mz-zone.mz-unveil { animation: mz-unveil 2.4s var(--ease-out); }

/* ==== 角落细务钮（右栏底部） ==== */
#mz-corner { flex: none; margin-top: auto; display: flex; justify-content: flex-end; gap: 4px; padding-top: 10px; }
#mz-corner button { width: 30px; height: 30px; border: none; background: none; cursor: pointer; padding: 6px;
  color: #e8cfa8; opacity: .5; transition: opacity var(--t-fast) var(--ease-out); }
#mz-corner button:hover { opacity: .95; }
#mz-corner button.mz-on { opacity: .95; color: var(--gold); }
#mz-corner button svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }

`;

  // src/css/story.js
  var A3 = ASSET_BASE;
  var story_default = `
/* ==== 卷首机件：更早哨兵 ==== */
.mz-earlier { display: block; margin: -8px auto 20px; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12px; letter-spacing: 2px; color: var(--ink-faint); padding: 4px 12px;
  transition: color var(--t-fast) var(--ease-out); }
.mz-earlier:not([disabled]):hover { color: var(--cinnabar); }
.mz-earlier[disabled] { opacity: .5; }

/* ==== 楼首思维链折叠条 ==== */
.mz-thought { margin: -4px 0 14px; }
.mz-th-head { width: 100%; display: flex; align-items: center; gap: 10px; border: none; background: none;
  cursor: pointer; padding: 4px 0; color: var(--ink-faint); opacity: .7; transition: color var(--t-fast) var(--ease-out), opacity var(--t-fast) var(--ease-out); }
.mz-th-head:hover { color: var(--cinnabar); opacity: 1; }
.mz-th-head .mz-rule { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(139,103,42,.5)); }
.mz-th-head .mz-rule.mz-r { background: linear-gradient(90deg, rgba(139,103,42,.5), transparent); }
.mz-th-head img { width: 19px; height: 19px; flex: none; opacity: .78; transition: opacity var(--t-fast) var(--ease-out), scale var(--t-fast) var(--ease-out); }
.mz-th-head:hover img, .mz-thought.mz-open .mz-th-head img { opacity: 1; scale: 1.08; }
.mz-th-body { display: none; margin: 4px 20px 2px; padding: 8px 16px; font-size: 13px; line-height: 2;
  letter-spacing: .3px; color: var(--ink-faint); border-left: 2px solid rgba(139,103,42,.38); }
.mz-thought.mz-open .mz-th-body { display: block; animation: mz-reveal var(--t-mid) var(--ease-out) both; }

/* ==== 行动选项（末楼下方一列，点击即发送） ==== */
.mz-opts { margin: 2px 0 12px; }
.mz-opt-head { display: flex; align-items: center; gap: 12px; font-size: 11px; letter-spacing: 4px; text-indent: 4px;
  color: var(--ink-faint); margin-bottom: 6px; }
.mz-opt-head i { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(139,103,42,.45)); }
.mz-opt-head i:last-child { background: linear-gradient(90deg, rgba(139,103,42,.45), transparent); }
.mz-opt { display: flex; width: 100%; align-items: baseline; gap: 11px; border: none; background: none;
  cursor: pointer; font-family: inherit; text-align: left; padding: 5px 10px; font-size: 14.5px;
  letter-spacing: .5px; color: var(--ink-dim); line-height: 1.8; transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-opt:hover { color: var(--cinnabar); background: rgba(160,52,38,.06); }
.mz-opt .mz-num { flex: none; width: 19px; height: 19px; display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; color: var(--ink-faint); border: 1px solid rgba(139,103,42,.5); translate: 0 2px;
  transition: all var(--t-fast) var(--ease-out); }
.mz-opt:hover .mz-num { color: var(--paper-hi); background: var(--cinnabar); border-color: var(--cinnabar); }

/* ==== 楼尾静默行（变量牌居左＋心声名签居右） ==== */
.mz-ff { display: flex; align-items: center; gap: 10px; margin: 12px 0 14px; }
.mz-ff-gap { flex: 1; }
.mz-ff .mz-ff-label { font-size: 11px; letter-spacing: 2px; color: var(--ink-faint); }
.mz-ff-var { display: inline-flex; align-items: baseline; gap: 5px; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12px; letter-spacing: 1px; color: var(--ink-faint); padding: 3px 4px;
  transition: color var(--t-fast) var(--ease-out); }
.mz-ff-var:hover { color: var(--ink-dim); }
.mz-ff-var .mz-dv { display: inline-flex; align-items: center; gap: 1px; font-weight: 600; }
.mz-ff-var .mz-dv svg { width: 11px; height: 11px; fill: none; stroke: currentColor; stroke-width: 2;
  stroke-linecap: round; stroke-linejoin: round; }
/* 涨跌色从中国习惯：红涨绿跌 */
.mz-ff-var .mz-dv.mz-up { color: var(--cinnabar); }
.mz-ff-var .mz-dv.mz-down { color: var(--good); }
.mz-ff-detail { display: none; margin: -8px 0 14px; padding: 5px 14px; font-size: 12.5px; letter-spacing: 1px;
  color: var(--ink-dim); border-left: 2px solid rgba(139,103,42,.38); }
.mz-ff-detail.mz-show { display: block; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
.mz-ff-detail b { color: var(--cinnabar); font-weight: 600; }
.mz-ff-voice { display: inline-flex; align-items: center; gap: 7px; border: none; background: none; cursor: pointer;
  font-family: inherit; font-size: 12.5px; letter-spacing: 1px; color: var(--ink-dim); padding: 3px 4px;
  transition: color var(--t-fast) var(--ease-out); }
.mz-ff-voice .mz-ava { width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center;
  justify-content: center; font-size: 11px; color: var(--paper-hi); background: linear-gradient(160deg, #7a5a35, #4a3821);
  box-shadow: 0 0 0 1px rgba(120,96,54,.5); }
/* 新语红点：楼尾整行共用一枚，不逐人配点 */
.mz-ff > .mz-dot { width: 7px; height: 7px; border-radius: 50%; flex: none; background: var(--cinnabar);
  box-shadow: 0 0 6px var(--cinnabar); animation: breathe 2.6s ease-in-out infinite; }
@keyframes breathe { 0%,100% { opacity: .95; } 50% { opacity: .4; } }
.mz-ff-voice:hover, .mz-ff-voice.mz-open { color: var(--cinnabar); }
/* 心声卡：素花笺纸底＋花押叠印右下角 */
.mz-vc { display: none; gap: 14px; padding: 17px 22px 16px; margin: 0 0 22px;
  position: relative; background: url('${A3}paper-whisper.webp');
  background-size: 100% 100%;
  filter: drop-shadow(0 5px 14px rgba(60,40,15,.28)); }
.mz-vc.mz-show { display: flex; animation: mz-reveal var(--t-slow) var(--ease-paper) both; }
/* 花押：白芷＝苏白芷、石榴＝萧夜沉、幽兰＝裴清砚、桃花＝叶玄薇 */
.mz-vc::after { content: ''; position: absolute; right: 24px; bottom: 16px; width: 44px; height: 44px;
  background: var(--stamp) center / contain no-repeat;
  opacity: .5; mix-blend-mode: multiply; pointer-events: none; }
.mz-vc.mz-su   { --stamp: url('${A3}stamp-angelica.webp'); }
.mz-vc.mz-xiao { --stamp: url('${A3}stamp-pomegranate.webp'); }
.mz-vc.mz-pei  { --stamp: url('${A3}stamp-orchid.webp'); }
.mz-vc.mz-ye   { --stamp: url('${A3}stamp-peach.webp'); }
.mz-vc-img { flex: none; width: 118px; aspect-ratio: 832 / 1216; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(165deg, #4a3626, #2b1d13 60%, #1d130c);
  outline: 1px solid rgba(120,96,54,.45); }
.mz-vc-img span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: rgba(216,204,178,.4); }
.mz-vc-main { flex: 1; min-width: 0; }
.mz-vc-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 7px;
  font-size: 14.5px; letter-spacing: 2px; font-weight: 600; color: var(--ink); }
.mz-vc-tabs { font-size: 11.5px; letter-spacing: 2px; color: var(--ink-faint); font-weight: 400; }
.mz-vc-tabs button { border: none; background: none; cursor: pointer; font-family: inherit; font-size: inherit;
  letter-spacing: inherit; color: var(--ink-faint); padding: 2px 3px; transition: color var(--t-fast) var(--ease-out); }
.mz-vc-tabs button.mz-on, .mz-vc-tabs button:hover { color: var(--cinnabar); }
.mz-vc-text { font-size: 13.5px; line-height: 2; color: var(--ink-dim); }
/* 回想页只渲染最近一条回想，旧条目不进此卡 */
.mz-vc.mz-memoir .mz-vc-text { display: none; }
.mz-vc-memos { display: none; }
.mz-vc.mz-memoir .mz-vc-memos { display: block; }
.mz-vc-memo { font-size: 13.5px; line-height: 2; color: var(--ink-dim); }
.mz-vc-memo b { font-weight: 600; letter-spacing: 1px; color: var(--cinnabar); }
.mz-vc-empty { font-size: 13.5px; line-height: 2; color: var(--ink-faint);
  border-left: 2px solid rgba(160,52,38,.3); padding-left: 12px; }

/* ==== 中栏挂轴瀑布流（天杆压卷首，输入区并进纸尾） ==== */
.mz-main { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; position: relative; }
#mz-scroll {
  width: var(--scroll-w); flex: 1; min-height: 0; margin-top: 2px;
  display: flex; flex-direction: column;
  filter: drop-shadow(0 12px 26px rgba(70,50,20,.35));
}
/* 卷首天杆三切片：铜箍固定，杆身拉伸 */
.mz-axle { position: relative; flex: none; margin: 0 -14px -6px; z-index: 2; }
.mz-axle .mz-rod {
  display: block; height: 22px;
  border-style: solid; border-color: transparent; border-width: 0 10px;
  border-image: url('${A3}axle-plain.webp') 0 50 fill / 0 10px stretch;
  filter: drop-shadow(0 3px 6px rgba(0,0,0,.45));
}
.mz-axle .mz-band {
  display: block; height: 22px; margin: -5px 14px 0;
  background: #5c2b22 url('${A3}brocade-band.webp') 0 0 / 128px 128px repeat;
  box-shadow: inset 0 -4px 6px rgba(0,0,0,.22), inset 0 4px 6px rgba(0,0,0,.25);
}
.mz-axle .mz-knot {
  position: absolute; left: 50%; top: 9px; width: 26px; height: 38px; transform: translateX(-50%);
  background: url('${A3}ribbon-knot.webp') center top / contain no-repeat;
  filter: drop-shadow(0 2px 3px rgba(0,0,0,.4));
}
/* 正文与书写区共用同一张纸 */
#mz-sheet {
  flex: 1; min-height: 0; display: flex; flex-direction: column;
  background-color: #dfd4b8;
  background-image:
    linear-gradient(180deg, rgba(80,55,20,.12), rgba(80,55,20,0) 28px),
    url('${A3}paper-scroll.webp');
  background-size: 100% 28px, 512px 512px;
  background-repeat: no-repeat, repeat;
  background-position: top, 0 0;
}
#mz-paper { flex: 1; overflow-y: auto; scrollbar-gutter: stable both-edges; padding: 32px 44px 22px; }
.mz-turn { margin-bottom: 22px; }
.mz-turn.mz-gm { line-height: 2.08; font-size: var(--fs-body); letter-spacing: .3px; line-break: strict; text-wrap: pretty; text-align: justify; }
.mz-turn.mz-gm p + p { margin-top: .9em; }
.mz-quote { color: var(--cinnabar); }
/* 谕印随文跟在末行之后（款后钤印），各行右齐纸边不为印让列 */
.mz-turn.mz-zhu { text-align: right; color: var(--cinnabar); font-size: var(--fs-body); line-height: 2.08; letter-spacing: .3px; padding-right: 2px; }
.mz-turn.mz-zhu.mz-editing::after { content: none; }
.mz-turn.mz-zhu::after { content: '谕'; display: inline-block; margin-left: 10px; font-size: 16px; color: var(--paper-hi);
  width: 24px; height: 24px; line-height: 24px; text-align: center;
  background: var(--cinnabar); border-radius: 4px; translate: 0 -2px; opacity: .82; }

/* ==== 卷末机件：状态行／删除模式条／回到最新钮 ==== */
#mz-status { flex: none; text-align: center; font-size: 12px; letter-spacing: 3px; text-indent: 3px;
  color: var(--ink-faint); padding: 3px 0 0; }
#mz-status:empty { display: none; }
#mz-delbar { display: none; align-items: center; justify-content: center; gap: 16px; padding: 9px 0 13px;
  font-size: 12.5px; letter-spacing: 2px; color: var(--ink-dim); }
#mz-delbar.mz-show { display: flex; }
#mz-delbar button { border: 1px solid rgba(139,103,42,.55); background: none; cursor: pointer; font-family: inherit;
  font-size: 12px; letter-spacing: 2px; text-indent: 2px; color: var(--ink-dim); padding: 3px 12px;
  transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out); }
#mz-delbar button.mz-danger { color: var(--cinnabar); border-color: rgba(160,52,38,.55); }
#mz-delbar button:not([disabled]):hover { color: var(--paper-hi); background: var(--cinnabar); border-color: var(--cinnabar); }
#mz-delbar button[disabled] { opacity: .45; }
#mz-jump { position: absolute; z-index: 5; bottom: 84px; left: calc(50% + var(--scroll-w) / 2 - 62px);
  width: 34px; height: 62px; border: none; padding: 0; cursor: pointer; display: none;
  background: url('${A3}hanging-fish.webp') center / contain no-repeat;
  filter: drop-shadow(0 4px 8px rgba(60,40,15,.4));
  transform-origin: top center; transition: filter var(--t-fast) var(--ease-out), rotate var(--t-mid) var(--ease-out); }
#mz-jump.mz-show { display: block; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
#mz-jump:hover { filter: drop-shadow(0 6px 12px rgba(60,40,15,.55)); rotate: 4deg; }

/* ==== 卷末书写区（并进瀑布流，界栏隔开） ==== */
#mz-writing { flex: none; position: relative; display: flex; align-items: flex-end; gap: 10px;
  padding: 9px 26px 11px; }
#mz-writing::before { content: ''; position: absolute; top: 0; left: 30px; right: 30px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139,103,42,.85) 10%, rgba(139,103,42,.85) 90%, transparent); }
.mz-w-tools { display: flex; gap: 2px; padding-bottom: 4px; }
.mz-w-tools button { width: 28px; height: 28px; border: none; background: none; cursor: pointer; padding: 6px;
  color: var(--ink-dim); opacity: .45; transition: opacity var(--t-fast) var(--ease-out), translate var(--t-fast) var(--ease-out); }
.mz-w-tools button:not([disabled]):hover { opacity: 1; translate: 0 -1px; }
.mz-w-tools button[disabled] { opacity: .22; }
.mz-w-tools button svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
#mz-writing textarea { flex: 1; min-width: 0; resize: none; border: none; outline: none;
  font-family: inherit; font-size: 15px; line-height: 26px; min-height: 36px; max-height: 156px;
  padding: 6px 2px 4px; color: var(--ink); caret-color: var(--cinnabar);
  background: transparent;
  /* 界行线起点须对齐 padding-top，线才落在每行字底 */
  background-image: repeating-linear-gradient(180deg, transparent 0 25px, rgba(118,94,56,.28) 25px 26px);
  background-position: 0 6px;
  background-attachment: local; }
#mz-writing textarea[disabled] { opacity: .55; }
#mz-writing textarea::placeholder { color: var(--ink-faint); opacity: .75; }
#mz-send {
  width: 46px; height: 48px; flex: none; border: none;
  background: url('${A3}seal-chi.webp') center/contain no-repeat;
  color: #fff4dc; cursor: pointer;
  font-family: inherit; font-size: 20px; font-weight: 600;
  display: flex; align-items: center; justify-content: center;
  text-shadow: 0 1px 2px rgba(90,10,0,.6), 0 0 1px rgba(0,0,0,.4);
  filter: drop-shadow(0 8px 18px rgba(0,0,0,.45));
  transition: translate var(--t-fast) var(--ease-out), filter var(--t-fast) var(--ease-out);
}
#mz-send:hover { filter: drop-shadow(0 12px 24px rgba(0,0,0,.6)); translate: 0 -2px; }
#mz-send:active { translate: 0 2px; }

/* ==== 危机段（桌面端不显，手机端替代悬浮朱票，见 phone.js） ==== */
.mz-crisis-line { display: none; position: relative; width: 196px; margin: 8px auto 22px;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,.5)) drop-shadow(0 8px 14px rgba(0,0,0,.28)); }
.mz-crisis-line img { width: 100%; }
.mz-crisis-line .mz-ticket-text { position: absolute; top: 12%; left: 10%; right: 19%; bottom: 12%;
  display: flex; flex-direction: column; justify-content: center; }
.mz-crisis-line .mz-ticket-text b { font-size: 12.5px; letter-spacing: 1.5px; color: var(--cinnabar); font-weight: 600; }
.mz-crisis-line .mz-ticket-text .mz-sub { font-size: 9px; color: var(--ink-dim); margin-top: 3px; letter-spacing: .3px; line-height: 1.5; }

/* ==== 朱票事件层（本月危机非空时骑钉在卷轴右肩） ==== */
#mz-crisis { display: none; position: absolute; z-index: 9; top: 30px;
  /* 卷外空隙不够时向纸内让位，不压侧栏 */
  left: min(calc(50% + var(--scroll-w) / 2 - 100px), calc(100% - 204px));
  width: 212px; rotate: 4deg; cursor: grab; touch-action: none;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,.7)) drop-shadow(0 12px 22px rgba(0,0,0,.5)); }
#mz-shell-root[data-crisis] #mz-crisis { display: block; animation: stamp var(--t-slow) var(--ease-paper); }
@keyframes stamp {
  0% { opacity: 0; scale: 1.1; translate: 0 -10px; filter: drop-shadow(0 6px 4px rgba(0,0,0,.5)) drop-shadow(0 28px 40px rgba(0,0,0,.35)); }
  55% { opacity: 1; scale: .985; translate: 0 0; filter: drop-shadow(0 1px 1px rgba(0,0,0,.7)) drop-shadow(0 6px 12px rgba(0,0,0,.5)); }
  100% { scale: 1; } }
#mz-crisis img { width: 100%; }
#mz-crisis .mz-ticket-text { position: absolute; top: 12%; left: 10%; right: 19%; bottom: 12%;
  display: flex; flex-direction: column; justify-content: center; }
#mz-crisis .mz-ticket-text b { font-size: 13.5px; letter-spacing: 2px; color: var(--cinnabar); font-weight: 600; }
#mz-crisis .mz-ticket-text .mz-sub { font-size: 9.5px; color: var(--ink-dim); margin-top: 3px; letter-spacing: .3px; line-height: 1.5; }

`;

  // src/css/lift.js
  var A4 = ASSET_BASE;
  var lift_default = `
/* ==== 浮窗（无框素纸＋竖排朱漆悬签＋内圈暗金细线） ==== */
/* 壳内浮层一律 absolute 以壳根为包含块（fixed 会以酒馆带 transform 的 html 为包含块，手机端高 0） */
#mz-lift { position: absolute; inset: 0; z-index: 40; background: var(--scrim); backdrop-filter: blur(3px);
  display: none; align-items: center; justify-content: center; }
#mz-lift.mz-show { display: flex; }
#mz-lift .mz-held { width: min(940px, 94vw); height: min(620px, 84vh);
  position: relative; display: flex; flex-direction: column;
  background-color: #dfd4b8; background-image: url('${A4}paper-scroll.webp'); background-size: 512px 512px;
  filter: drop-shadow(0 3px 5px rgba(0,0,0,.4)) drop-shadow(0 24px 48px rgba(0,0,0,.55)); }
#mz-lift .mz-held::before { content: ''; position: absolute; inset: 9px; pointer-events: none; z-index: 1;
  border: 1px solid rgba(139,103,42,.5); }
/* 题签 slip-title.webp 竖三切片：签头签尾固定、签身拉伸；窗内排版须避让左上题签区（宽约46px、入纸约70px） */
#mz-lift .mz-held h3 { position: absolute; top: -34px; left: 26px; z-index: 2;
  writing-mode: vertical-rl; letter-spacing: 6px; padding: 16px 13px 18px;
  font-size: 15px; font-weight: 600; color: var(--side-title);
  border-style: solid; border-color: transparent; border-width: 15px 0 13px;
  border-image: url('${A4}slip-title.webp') 140 0 120 fill / 15px 0 13px stretch;
  filter: drop-shadow(0 3px 6px rgba(0,0,0,.4)); }
#mz-lift .mz-held .mz-held-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; padding: 30px 34px 26px; }
/* 收窗叉桌面端不显（点遮罩即关），手机端与开坛窗的显隐见 phone.js */
#mz-lift .mz-lift-x { display: none; position: absolute; top: 10px; right: 10px; z-index: 3; width: 34px; height: 34px; padding: 8px;
  border: none; background: none; cursor: pointer; color: var(--ink-faint); opacity: .55; transition: opacity var(--t-fast) var(--ease-out); }
#mz-lift .mz-lift-x:hover { opacity: .95; }
#mz-lift .mz-lift-x svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
#mz-lift .mz-held .mz-stub { margin: auto; text-align: center; color: var(--ink-faint); font-size: 13.5px; letter-spacing: 4px; }
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
#mz-lift.mz-gate .mz-held { width: min(1100px, 94vw); height: auto; min-height: min(600px, 72vh); max-height: 84vh; }
#mz-lift.mz-gate .mz-held h3 { position: static; translate: none; writing-mode: horizontal-tb; filter: none;
  border: none; border-image: none; padding: 34px 44px 0; margin: 0; z-index: 2; text-align: center;
  font-size: var(--fs-title); letter-spacing: var(--ls-title); text-indent: var(--ls-title); font-weight: 600; color: var(--ink); }
#mz-lift.mz-gate.mz-show .mz-held h3 { animation: gate-title var(--t-slow) .12s var(--ease-out) both; }
@keyframes gate-title { from { opacity: 0; translate: 0 -6px; letter-spacing: calc(var(--ls-title) + 6px); } }
#mz-lift.mz-gate .mz-held .mz-held-body { padding: 16px 44px 30px; }
.mz-win.mz-gate-win { gap: 22px; }
.mz-gate-win::before { content: ''; display: block; height: 1px; margin: 0 8% 4px; background: linear-gradient(90deg, transparent, rgba(139,103,42,.6) 20%, rgba(139,103,42,.6) 80%, transparent); }
.mz-gate-win h4 { margin: 0 0 12px; font-size: var(--fs-label); font-weight: 400; letter-spacing: var(--ls-label); color: var(--ink-faint); display: flex; align-items: center; gap: 12px; }
.mz-gate-win h4::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, rgba(139,103,42,.55), transparent); }
.mz-gate-cols { display: grid; grid-template-columns: 1.15fr 1fr; gap: 36px; flex: 1; min-height: 0; }
.mz-gate-opening { display: flex; flex-direction: column; min-height: 0; }
.mz-gate-card { position: relative; padding: 14px 16px 12px; flex: 1; min-height: 0;
  border-style: solid; border-color: transparent; border-width: 11px;
  border-image: url('${A4}card-calling.webp') 52 fill / 11px stretch; box-shadow: 0 1px 2px rgba(60,40,15,.12);
  display: flex; flex-direction: column; gap: 8px; }
.mz-gate-img { flex: 1; min-height: 160px; aspect-ratio: 16 / 7; background: #cbbc98 center / cover no-repeat; box-shadow: inset 0 0 0 1px rgba(139,103,42,.45); }
.mz-gate-card b { font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--ink); font-weight: 600; }
.mz-gate-card p { margin: 0; font-size: var(--fs-read); line-height: 1.8; color: var(--ink-dim); }
.mz-gate-nav { display: flex; align-items: center; justify-content: center; gap: 14px; font-size: 12.5px; letter-spacing: 2px; color: var(--ink-faint); margin-top: 2px; }
.mz-gate-nav button { border: none; background: none; cursor: pointer; color: var(--ink-dim); width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; }
.mz-gate-nav button svg { width: 16px; height: 16px; }
.mz-gate-nav button:first-child svg { rotate: 180deg; }
.mz-gate-nav button[disabled] { opacity: .3; }
.mz-gate-sects { display: flex; flex-direction: column; }
.mz-gate-sect:last-child { margin-bottom: 0; }
.mz-gate-sect { position: relative; display: flex; align-items: baseline; gap: 14px; text-align: left; cursor: pointer; font-family: inherit;
  padding: 9px 16px; margin-bottom: 8px; border-style: solid; border-color: transparent; border-width: 16px;
  border-image: url('${A4}plaque-entry.webp') 160 / 16px stretch; background: url('${A4}silk-board-core.webp') center / cover; background-clip: border-box;
  color: var(--ink-dim); transition: filter var(--t-mid) var(--ease-out), translate var(--t-fast) var(--ease-out); }
.mz-gate-sect:hover { filter: brightness(1.04); translate: 0 -1px; }
.mz-gate-sect:active { translate: 0 1px; transition-duration: .06s; }
.mz-gate-sect b { font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--ink); font-weight: 600; white-space: nowrap; transition: color var(--t-mid) var(--ease-out); }
.mz-gate-sect span { font-size: var(--fs-read); letter-spacing: var(--ls-read); color: var(--ink-faint); }
.mz-gate-sect:not(.mz-on) { filter: saturate(.85) opacity(.9); }
.mz-gate-sect.mz-on::before, .mz-gate-sect.mz-on::after { content: ''; position: absolute; width: 14px; height: 14px; border: 2px solid #b8902e;
  animation: bracket-in var(--t-mid) var(--ease-paper) both; }
@keyframes bracket-in { from { opacity: 0; translate: var(--bx) var(--by); } }
.mz-gate-sect.mz-on::before { --bx: -6px; --by: -6px; }
.mz-gate-sect.mz-on::after { --bx: 6px; --by: 6px; }
.mz-gate-sect.mz-on::before { left: -8px; top: -8px; border-right: none; border-bottom: none; }
.mz-gate-sect.mz-on::after { right: -8px; bottom: -8px; border-left: none; border-top: none; }
.mz-gate-sect.mz-on b { color: var(--cinnabar); }
.mz-gate-foot { flex: none; display: flex; align-items: center; justify-content: center; padding-top: 6px; position: relative; }
.mz-gate-foot .mz-why { position: absolute; left: calc(50% + 70px); top: 50%; translate: 0 -50%; white-space: nowrap; margin: 0; padding-top: 6px; }
.mz-gate-foot .mz-seal-btn.mz-lg { padding: 8px 22px; }

/* ==== 开坛礼（仅开坛那一次） ==== */
#mz-lift.mz-rite .mz-held-body, #mz-lift.mz-rite .mz-held h3 { transition: opacity var(--t-mid) var(--ease-out); opacity: .1; }
#mz-lift.mz-rite .mz-held::before { transition: opacity var(--t-mid); opacity: .35; }
.mz-rite { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; cursor: pointer; overflow: hidden; }
.mz-rite-bloom { position: absolute; width: 420px; height: 420px; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(160,52,38,.28), rgba(160,52,38,.08) 45%, transparent 70%);
  animation: rite-bloom 1.4s .38s var(--ease-out) both; }
@keyframes rite-bloom { 0% { opacity: 0; scale: .3; } 30% { opacity: 1; } 100% { opacity: 0; scale: 1.6; } }
.mz-rite-ring { position: absolute; width: 170px; height: 170px; border: 1px solid rgba(184,144,46,.9); pointer-events: none; rotate: -3deg;
  animation: rite-ring 1.1s var(--ease-out) both; }
.mz-rite-ring:nth-child(2) { animation-delay: .42s; }
.mz-rite-ring:nth-child(3) { animation-delay: .58s; border-color: rgba(160,52,38,.7); }
@keyframes rite-ring { 0% { opacity: 0; scale: 1; } 15% { opacity: 1; } 100% { opacity: 0; scale: 3.4; } }
.mz-rite-seal { position: relative; width: 164px; height: 164px; rotate: -3deg; padding: 14px; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
  background: var(--cinnabar) url('${A4}paper-scroll.webp') center / 256px; background-blend-mode: multiply;
  box-shadow: inset 0 0 0 3px rgba(255,240,214,.92), inset 0 0 0 7px var(--cinnabar), 0 0 0 1px rgba(160,52,38,.35), 0 10px 24px rgba(60,10,0,.35);
  animation: rite-stamp .62s var(--ease-paper) both; }
.mz-rite-seal span { writing-mode: vertical-rl; font-size: 52px; line-height: 62px; font-weight: 600; letter-spacing: 6px;
  color: #fff0d6; text-shadow: 0 0 1px rgba(255,240,214,.6); height: 124px; }
@keyframes rite-stamp { 0% { opacity: 0; scale: 2.1; translate: 0 -20px; filter: blur(2px) drop-shadow(0 40px 30px rgba(0,0,0,.5)); }
  55% { opacity: 1; scale: .95; translate: 0 0; filter: blur(0) drop-shadow(0 0 0 rgba(0,0,0,0)); }
  75% { scale: 1.015; } 100% { scale: 1; } }
.mz-rite-skip { position: absolute; right: 22px; bottom: 16px; font-size: var(--fs-tag); letter-spacing: var(--ls-tag); color: var(--ink-faint); opacity: 0;
  animation: mz-reveal var(--t-mid) .9s var(--ease-out) forwards; }
#mz-lift.mz-rite-out .mz-held { animation: rite-lift .6s cubic-bezier(.5,0,.8,.4) both; }
@keyframes rite-lift { to { opacity: 0; translate: 0 -90px; } }
/* --i 由 17-gate.js 的 playEntrance 逐块写入 */
.mz-kindle { animation: mz-kindle .55s var(--ease-out) both; animation-delay: calc(var(--i, 0) * .07s + .15s); }
@keyframes mz-kindle { 0% { opacity: 0; translate: 0 8px; filter: brightness(1.5); } 60% { filter: brightness(1.15); } 100% { opacity: 1; translate: 0 0; filter: none; } }
`;

  // src/css/windows.js
  var A5 = ASSET_BASE;
  var windows_default = `
/* ==== 浮窗窗内通用件（页签／经折页／拜帖卡／虚位／朱印钮） ==== */
/* 窗内排版须让出左上题签区：列表窗左留边沟，舆图窗图面压在签下无妨 */
.mz-win { display: none; flex: 1; min-height: 0; flex-direction: column; gap: 14px; }
.mz-win.mz-on { display: flex; }
.mz-tabs { display: flex; gap: 22px; margin: -6px 0 8px; padding-left: 48px; flex: none; }
.mz-tabs button { border: none; background: none; cursor: pointer; font-family: inherit; font-size: var(--fs-name);
  letter-spacing: var(--ls-name); color: var(--ink-faint); padding: 4px 2px 6px; position: relative; transition: color var(--t-fast) var(--ease-out); }
.mz-tabs button .mz-n { font-size: 12px; letter-spacing: .5px; margin-left: 4px; opacity: .8; }
.mz-tabs button::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 2px;
  background: var(--gold-dim); opacity: 0; transition: opacity var(--t-fast) var(--ease-out); }
.mz-tabs button.mz-on { color: var(--cinnabar); }
.mz-tabs button.mz-on::after { opacity: 1; }
.mz-tabs button:hover { color: var(--cinnabar); }
.mz-tabs button .mz-red { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--cinnabar); margin-left: 5px; translate: 0 -6px; }
.mz-pane { display: none; flex: 1; min-height: 0; flex-direction: column; gap: 12px; }
.mz-pane.mz-on { display: flex; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
@keyframes mz-reveal { from { opacity: 0; translate: 0 4px; } }
.mz-folio { flex: 1; min-height: 0; overflow-y: auto; padding: 14px 16px;
  background: #f4efe0 url('${A5}paper-folded.webp') 0 0 / 512px 512px repeat; border: 1px solid rgba(139,103,42,.32);
  box-shadow: inset 0 0 0 4px rgba(255,252,244,.35); }
.mz-grid { display: grid; gap: 12px; align-content: start; grid-auto-rows: max-content; }
.mz-grid.mz-c2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.mz-grid.mz-c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.mz-grid.mz-c4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.mz-card { position: relative; padding: 11px 13px 10px;
  border-style: solid; border-color: transparent; border-width: 11px;
  border-image: url('${A5}card-calling.webp') 52 fill / 11px stretch; box-shadow: 0 1px 2px rgba(60,40,15,.12);
  font-size: 14.5px; line-height: 1.8; color: var(--ink-dim); min-height: 68px; }
.mz-card b { display: block; font-size: var(--fs-name); letter-spacing: var(--ls-name); color: var(--ink); font-weight: 600; margin-bottom: 2px; }
.mz-card .mz-k { color: var(--ink-faint); letter-spacing: 1px; margin-right: 6px; }
.mz-card .mz-tag { position: absolute; top: 9px; right: 12px; font-size: 12px; letter-spacing: 1px; color: var(--ink-faint); }
.mz-card .mz-tag.mz-q1 { color: #5f7d36; } .mz-card .mz-tag.mz-q2 { color: #3f6d95; } .mz-card .mz-tag.mz-q4 { color: #9a7420; }
.mz-card .mz-tag.mz-gold { color: #9a7420; }
.mz-card.mz-empty { display: flex; align-items: center; justify-content: center; background: none; box-shadow: none;
  border-image: none; border: 1px dashed rgba(139,103,42,.4); padding: 21px 23px 20px; color: var(--ink-faint); letter-spacing: 4px; text-indent: 4px; font-size: 14px; }
.mz-card.mz-empty.mz-lotus { background: url('${A5}icon-lotus.webp') center / 34px no-repeat; background-color: transparent; }
.mz-card.mz-empty.mz-lotus::before { content: ''; position: absolute; inset: 0; background: rgba(255,250,238,.55); }
.mz-card.mz-empty.mz-lotus span { position: relative; }
.mz-card.mz-empty.mz-lotus span { opacity: .9; background: rgba(255,252,244,.8); padding: 0 4px; }
.mz-card .mz-seal-btn { position: absolute; right: 12px; bottom: 10px; }
.mz-card.mz-up .mz-seal-btn { position: static; }
.mz-card .mz-up-foot { display: flex; align-items: center; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
.mz-card .mz-up-foot .mz-price { font-size: 12px; margin-left: 6px; opacity: .85; }
.mz-card.mz-up.mz-on { box-shadow: inset 0 0 0 1px var(--cinnabar), 0 1px 2px rgba(60,40,15,.12); }
/* 兴造：左蓝图清单／右表单，点清单一行右侧即填 */
.mz-buildrow { align-items: stretch; }
.mz-bplist { flex: none; width: 212px; gap: 6px; }
.mz-bps { display: flex; flex-direction: column; gap: 3px; }
.mz-bp { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 4px 10px; font-family: inherit; text-align: left; cursor: pointer;
  border: 1px solid rgba(139,103,42,.3); background: rgba(255,252,244,.5); transition: border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-bp b { font-size: 14.5px; letter-spacing: 2px; color: var(--ink); font-weight: 600; }
.mz-bp .mz-tag { font-size: 12px; letter-spacing: 1px; color: var(--ink-faint); white-space: nowrap; }
.mz-bp .mz-tag.mz-q1 { color: #5f7d36; } .mz-bp .mz-tag.mz-q2 { color: #3f6d95; } .mz-bp .mz-tag.mz-q4 { color: #9a7420; }
.mz-bp:not(.mz-off):hover { border-color: rgba(160,52,38,.5); }
.mz-bp.mz-on { border-color: var(--cinnabar); background: rgba(160,52,38,.07); box-shadow: inset 0 0 0 1px var(--cinnabar); }
.mz-bp.mz-off { opacity: .55; }
/* 朱印钮（全局按钮语言） */
.mz-seal-btn { border: none; cursor: pointer; white-space: nowrap; font-family: inherit; font-size: var(--fs-btn); letter-spacing: var(--ls-btn); text-indent: var(--ls-btn);
  color: #fff4dc; background: var(--cinnabar); padding: 4px 9px; box-shadow: inset 0 0 0 1px rgba(255,236,200,.35), 0 2px 4px rgba(60,20,10,.35);
  transition: filter var(--t-fast) var(--ease-out), translate var(--t-fast) var(--ease-out); }
.mz-seal-btn:hover { filter: brightness(1.12); translate: 0 -1px; }
.mz-seal-btn:active { translate: 0 1px; filter: brightness(.96); transition-duration: .06s; }
.mz-seal-btn.mz-lg { font-size: var(--fs-btn-lg); letter-spacing: var(--ls-btn-lg); text-indent: var(--ls-btn-lg); padding: 6px 16px; }
.mz-seal-btn[disabled] { cursor: not-allowed; background: #8d8271; color: rgba(255,244,220,.7); box-shadow: none; filter: none; translate: none; }
.mz-why { font-size: var(--fs-tag); letter-spacing: var(--ls-tag); color: var(--ink-faint); margin-left: 8px; }
.mz-form { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: flex-end; flex: none; }
.mz-form label { display: flex; flex-direction: column; gap: 2px; font-size: 12.5px; letter-spacing: 2px; color: var(--ink-faint); }
.mz-form input { border: none; border-bottom: 1px solid rgba(118,94,56,.5); background: transparent; outline: none;
  font-family: inherit; font-size: 15.5px; color: var(--ink); padding: 3px 2px; width: 150px; caret-color: var(--cinnabar); }
.mz-form input.mz-w { width: 260px; }
.mz-form .mz-choices { display: flex; gap: 8px; align-items: center; }
.mz-form .mz-price { font-size: 12px; letter-spacing: .5px; opacity: .85; margin-left: 3px; }
.mz-form ::placeholder { color: rgba(118,94,56,.42); }
/* 契纸：一切记账表单的容器，整列竖排、控件撑满、大号朱印钮收尾 */
.mz-sheet { flex-direction: column; align-items: stretch; gap: 11px; padding: 12px 18px 12px;
  border: 1px solid rgba(139,103,42,.35); background: rgba(255,252,244,.55); box-shadow: inset 0 0 0 3px rgba(255,252,244,.5); }
.mz-sheet input, .mz-sheet textarea { width: 100%; box-sizing: border-box; }
.mz-sheet .mz-none { padding: 0; font-size: 13px; }
.mz-build { flex: 1; min-width: 0; }
/* 撑满型经折页：内容纵向铺满余高 */
.mz-folio.mz-fill { display: flex; flex-direction: column; gap: 12px; }
.mz-folio.mz-fill > .mz-wrow { flex: 1; min-height: 0; align-items: stretch; }
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
.mz-pick .mz-shopline { color: #9a7420; }
.mz-pick.mz-off .mz-shopline { color: #96500f; }
.mz-craft { flex: 1; min-width: 0; }
.mz-craft .mz-grow textarea { height: 100%; }
.mz-form textarea { border: none; border-bottom: 1px solid rgba(118,94,56,.5); background: transparent; outline: none; resize: none;
  font-family: inherit; font-size: 15.5px; line-height: 1.7; color: var(--ink); padding: 3px 2px; caret-color: var(--cinnabar); }
.mz-sheet .mz-wh { margin-top: 2px; }
.mz-picks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.mz-pick { position: relative; display: flex; flex-direction: column; gap: 2px; padding: 9px 14px 8px; cursor: pointer; letter-spacing: 1px;
  border: 1px solid rgba(139,103,42,.35); background: rgba(255,252,244,.55); color: var(--ink-dim); transition: border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-pick input { position: absolute; opacity: 0; width: 0; height: 0; }
.mz-pick b { font-size: 16px; letter-spacing: 3px; color: var(--ink); font-weight: 600; }
.mz-pick .mz-price { margin: 0; font-size: 13px; color: #9a7420; }
.mz-pick small { font-size: 12px; letter-spacing: .5px; color: var(--ink-faint); line-height: 1.5; }
.mz-pick:not(.mz-off):hover { border-color: rgba(160,52,38,.5); }
.mz-pick:has(input:checked) { border-color: var(--cinnabar); background: rgba(160,52,38,.07); box-shadow: inset 0 0 0 1px var(--cinnabar); }
.mz-pick.mz-off { opacity: .55; }
.mz-pick.mz-off small { color: #96500f; }
/* 奇效栏常显，仅天工选中时解锁输入；textarea 穿透事件，禁用光标挂在 label 上 */
.mz-wonder { cursor: not-allowed; }
.mz-wonder textarea { pointer-events: none; opacity: .45; }
.mz-build:has(input[value="天工"]:checked) .mz-wonder { cursor: auto; }
.mz-build:has(input[value="天工"]:checked) .mz-wonder textarea { pointer-events: auto; opacity: 1; }
.mz-wonder small::before { content: '选天工后可议定。'; }
.mz-build:has(input[value="天工"]:checked) .mz-wonder small::before { content: ''; }
.mz-wonder.mz-live { cursor: auto; }
.mz-wonder.mz-live textarea { pointer-events: auto; opacity: 1; }
.mz-wonder.mz-live small::before { content: ''; }
.mz-wonder small { font-size: 11.5px; letter-spacing: .5px; color: var(--ink-faint); margin-top: 2px; }
.mz-build-foot { display: flex; align-items: center; justify-content: flex-end; gap: 14px; margin-top: auto; }
.mz-build-foot > .mz-why:first-child { flex: 1; margin-left: 0; }
.mz-wh { display: flex; align-items: center; gap: 10px; flex: none; font-size: 13.5px; letter-spacing: 3px; color: var(--ink-faint); }
.mz-wh::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, rgba(139,103,42,.5), transparent); }
.mz-wh b { color: var(--cinnabar); font-weight: 600; letter-spacing: 1px; }
.mz-folio > .mz-wh:not(:first-child) { margin-top: 16px; }
/* 浮窗定高 620，行撑满余高，回想在列内滚动 */
.mz-wrow { display: flex; gap: 16px; flex: 1; min-height: 0; align-items: flex-start; }
.mz-wrow > .mz-wcol { align-self: stretch; }
.mz-wcol { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
/* 空态短句 */
.mz-none { color: var(--ink-faint); letter-spacing: 3px; font-size: 14px; padding: 6px 2px; }

/* 同心缕：女主切换走顶部页签，位阶作页签小字 */
.mz-portrait { flex: none; width: 252px; display: flex; flex-direction: column; gap: 8px; }
.mz-portrait .mz-pic { aspect-ratio: 832 / 1216; width: 100%; background: linear-gradient(165deg, #4a3626, #2b1d13 60%, #1d130c) center / cover no-repeat;
  outline: 1px solid rgba(120,96,54,.5); outline-offset: -3px; display: flex; align-items: center; justify-content: center; }
.mz-portrait .mz-pic span { writing-mode: vertical-rl; font-size: 11px; letter-spacing: 4px; color: rgba(216,204,178,.45); }
/* 252 列宽＝立绘加两行缩略恰填 620 窗高 */
.mz-thumbs { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 5px; }
.mz-thumbs i { width: auto; aspect-ratio: 832 / 1216; background: #3a2a1c; outline: 1px solid rgba(120,96,54,.4); cursor: pointer; opacity: .7; }
.mz-thumbs i.mz-on { opacity: 1; outline-color: var(--cinnabar); }
.mz-thumbs i:hover { opacity: 1; }
/* 锁定格：暗底居中位阶二字，DOM 内无图片 URL */
.mz-thumbs i.mz-lock { opacity: 1; background: #2a1d12; outline-color: rgba(120,96,54,.25);
  display: flex; align-items: center; justify-content: center; }
.mz-thumbs i.mz-lock span { font-size: 11px; letter-spacing: 2px; color: rgba(216,204,178,.6); writing-mode: vertical-rl; }
.mz-thumbs i.mz-lock:hover { opacity: 1; }
/* 位阶莲瓣：四瓣对应一灌至四灌，待度零瓣，未亮去色压淡 */
.mz-lotus-row { display: flex; align-items: center; gap: 10px; font-size: 14.5px; letter-spacing: 1px; color: var(--ink-dim); flex: none; }
.mz-lotus-row i { width: 26px; height: 28px; background: url('${A5}lotus-rank.webp') center / contain no-repeat;
  filter: grayscale(1) opacity(.32); }
.mz-lotus-row i.mz-lit { filter: none; }
.mz-lotus-row b { color: var(--cinnabar); font-weight: 600; margin-left: auto; }
.mz-voice-sheet { flex: none; position: relative; min-height: 180px; box-sizing: content-box; padding: 14px 18px 16px; background: url('${A5}paper-whisper.webp') center / 100% 100% no-repeat;
  font-size: 15px; line-height: 2; color: var(--ink-dim); filter: drop-shadow(0 3px 8px rgba(60,40,15,.22)); }
.mz-voice-sheet::after { content: ''; position: absolute; right: 16px; bottom: 10px; width: 36px; height: 36px;
  background: var(--stamp) center / contain no-repeat; opacity: .5; mix-blend-mode: multiply; }
.mz-timeline { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 2px 4px 14px; border-left: 2px solid rgba(139,103,42,.3); }
.mz-timeline .mz-memo { position: relative; margin-bottom: 12px; font-size: 14.5px; line-height: 1.85; color: var(--ink-dim); }
.mz-timeline .mz-memo::before { content: ''; position: absolute; left: -19px; top: 9px; width: 7px; height: 7px; border-radius: 50%;
  background: var(--cinnabar); box-shadow: 0 0 0 2px rgba(255,252,244,.9); }
.mz-timeline .mz-memo b { color: var(--cinnabar); font-weight: 600; letter-spacing: 1px; margin-right: 8px; }
.mz-timeline .mz-memo small { color: var(--ink-faint); letter-spacing: .5px; }
.mz-su   { --stamp: url('${A5}stamp-angelica.webp'); }
.mz-xiao { --stamp: url('${A5}stamp-pomegranate.webp'); }
.mz-pei  { --stamp: url('${A5}stamp-orchid.webp'); }
.mz-ye   { --stamp: url('${A5}stamp-peach.webp'); }

.mz-names button.mz-off { opacity: .45; }
.mz-names button.mz-off:hover { color: inherit; }

/* 营造：表殿三级阶梯 */
.mz-steps { display: flex; align-items: stretch; gap: 0; flex: none; }
.mz-step { flex: 1; position: relative; padding: 11px 14px 10px; text-align: center; font-size: 15px; letter-spacing: 2px; color: var(--ink-faint);
  border: 1px dashed rgba(139,103,42,.4); }
.mz-step + .mz-step { margin-left: 26px; }
.mz-step + .mz-step::before { content: ''; position: absolute; left: -20px; top: 50%; width: 14px; height: 1px; background: rgba(139,103,42,.5); }
.mz-step small { display: block; font-size: 12px; letter-spacing: .5px; margin-top: 2px; opacity: .85; }
.mz-step.mz-done { border-style: solid; color: var(--ink-dim); background: rgba(139,103,42,.08); }
.mz-step.mz-cur { border: 1px solid #9a7420; color: #9a7420; background: rgba(216,164,68,.12); box-shadow: inset 0 0 0 1px rgba(216,164,68,.35); font-weight: 600; }
.mz-step .mz-chi { position: absolute; top: -9px; right: -9px; width: 22px; height: 22px; font-size: 11px; line-height: 22px; color: #fff4dc; background: var(--cinnabar); }
.mz-step-act { display: flex; align-items: center; gap: 6px; flex: none; font-size: 12px; color: var(--ink-faint); letter-spacing: 1px; }

/* 罪业：利不过本进度条 */
.mz-bar-line { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--ink-faint); letter-spacing: .5px; margin-top: 4px; }
.mz-bar-line .mz-bar { flex: 1; height: 5px; background: rgba(139,103,42,.18); }
.mz-bar-line .mz-bar i { display: block; height: 100%; background: linear-gradient(90deg, #b78a3a, #d8a444); }

/* 法事：街谈条幅（横排逐条，最新在上）／教务：法会门槛清单 */
.mz-banners { display: flex; flex-direction: column; gap: 10px; }
.mz-banner { font-size: 15.5px; letter-spacing: 2px; line-height: 1.9; color: var(--ink-dim); padding: 10px 18px;
  background: rgba(255,252,244,.72); outline: 1px solid rgba(139,103,42,.45); outline-offset: -4px; }
.mz-banner::before { content: '市井传言'; font-size: 11.5px; letter-spacing: 2px; color: var(--ink-faint); margin-right: 14px; }
.mz-banner.mz-empty { color: var(--ink-faint); background: none; outline-style: dashed; text-align: center; letter-spacing: 4px; }
.mz-banner.mz-empty::before { content: none; }
.mz-ticks { display: flex; flex-direction: column; gap: 9px; font-size: 15px; color: var(--ink-dim); letter-spacing: 1px; }
.mz-ticks li { list-style: none; display: flex; align-items: center; gap: 10px; }
.mz-ticks li::before { content: ''; width: 14px; height: 14px; border: 1px solid rgba(139,103,42,.55); flex: none; }
.mz-ticks li.mz-ok { color: var(--ink); }
.mz-ticks li.mz-ok::before { background: var(--good); border-color: var(--good); box-shadow: inset 0 0 0 2px rgba(255,252,244,.9); }

/* 舆图浮窗：SVG overlay 区域面高亮（viewBox 1024） */
.mz-atlas { flex: 1; min-height: 0; display: flex; gap: 16px; }
.mz-atlas .mz-mapbox { position: relative; flex: none; height: min(600px, calc(84vh - 100px)); aspect-ratio: 1; outline: 1px solid rgba(50,24,10,.4); }
.mz-atlas .mz-mapbox img { width: 100%; height: 100%; }
.mz-atlas .mz-mapbox svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.mz-atlas path { fill: transparent; stroke: transparent; stroke-width: 2; transition: fill var(--t-fast) var(--ease-out), stroke var(--t-fast) var(--ease-out); }
.mz-atlas path:hover { fill: rgba(160,52,38,.10); stroke: rgba(160,52,38,.45); }
.mz-atlas path.mz-cur { fill: rgba(160,52,38,.28); stroke: var(--cinnabar); stroke-width: 2.5; animation: region-breathe 1.6s var(--ease-out) 1; }
@keyframes region-breathe { 0% { fill: rgba(160,52,38,.5); } 100% { fill: rgba(160,52,38,.28); } }
.mz-atlas .mz-lbl { position: absolute; translate: -50% -50%; font-size: 12px; letter-spacing: 1px; color: var(--ink-dim); white-space: nowrap;
  background: rgba(244,238,220,.82); padding: 1px 5px; pointer-events: none; }
.mz-atlas .mz-lbl.mz-cur { color: var(--cinnabar); font-weight: 600; font-size: 13px; }
/* 风波印章三档色靠 hue-rotate 偏移朱砂本色 */
.mz-atlas .mz-storm { position: absolute; top: 8px; right: 8px; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center;
  background: url('${A5}seal-storm.webp') center / contain no-repeat;
  font-size: 16px; letter-spacing: 0; font-weight: 700; color: var(--cinnabar); }
.mz-atlas .mz-storm.mz-low { filter: hue-rotate(120deg) saturate(.7); } .mz-atlas .mz-storm.mz-mid { filter: hue-rotate(-25deg); } .mz-atlas .mz-storm.mz-high { filter: none; }
.mz-atlas .mz-zones { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
.mz-atlas .mz-zlist { display: flex; flex-direction: column; gap: 2px; font-size: 14.5px; letter-spacing: 1px; color: var(--ink-dim); }
.mz-atlas .mz-zlist li { list-style: none; padding: 4px 8px; display: flex; justify-content: space-between; }
.mz-atlas .mz-zlist li.mz-cur { color: var(--cinnabar); font-weight: 600; background: rgba(160,52,38,.07); box-shadow: inset 2px 0 0 var(--cinnabar); }
.mz-atlas .mz-zlist li small { color: var(--ink-faint); font-weight: 400; letter-spacing: .5px; }
.mz-doomline { display: flex; flex-direction: column; gap: 5px; font-size: 12.5px; letter-spacing: 1px; color: var(--ink-faint); margin-top: auto; }
.mz-doomline .mz-yrs { display: flex; gap: 4px; }
.mz-doomline .mz-yrs span { flex: 1; text-align: center; padding: 4px 0; border: 1px solid rgba(139,103,42,.35); }
.mz-doomline .mz-yrs span.mz-cur { color: #9a7420; border-color: #9a7420; background: rgba(216,164,68,.12); font-weight: 600; }
.mz-doomline .mz-yrs span.mz-past { background: rgba(139,103,42,.12); }

`;

  // src/css/extras.js
  var A6 = ASSET_BASE;
  var extras_default = `
/* ==== 正文容器／编辑态／删除态／推演中／入口／变量树／数据库钮 ==== */
#mz-shell-root[data-visible="false"] { display: none; }
.mz-turn .mz-text { display: block; }
.mz-turn.mz-gm .mz-text p + p { margin-top: .9em; }
.mz-turn.mz-zhu .mz-text, .mz-turn.mz-zhu .mz-text p { display: inline; }
.mz-turn.mz-selable { cursor: pointer; outline: 1px dashed rgba(139,103,42,.45); outline-offset: 6px; transition: outline-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-turn.mz-selable:hover { outline-color: var(--cinnabar); }
.mz-turn.mz-delsel { outline: 1px solid var(--cinnabar); background: rgba(160,52,38,.07); }
.mz-story-edit { display: flex; flex-direction: column; gap: 8px; }
.mz-story-edit textarea { width: 100%; resize: none; border: none; outline: none; font-family: inherit; font-size: 16px; line-height: 26px;
  color: var(--cinnabar); background: transparent; text-align: right; caret-color: var(--cinnabar);
  background-image: repeating-linear-gradient(180deg, transparent 0 25px, rgba(118,94,56,.28) 25px 26px); background-attachment: local; }
.mz-story-edit-row { display: flex; justify-content: flex-end; gap: 10px; }
.mz-edit-btn { border: 1px solid rgba(139,103,42,.55); background: none; cursor: pointer; font-family: inherit; font-size: 12px; letter-spacing: 2px; text-indent: 2px;
  color: var(--ink-dim); padding: 3px 12px; transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out); }
.mz-edit-btn.mz-primary { color: var(--cinnabar); border-color: rgba(160,52,38,.55); }
.mz-edit-btn:hover { color: var(--paper-hi); background: var(--cinnabar); border-color: var(--cinnabar); }
.mz-thinking { display: flex; align-items: center; gap: 10px; padding: 6px 0; margin-bottom: 14px; color: var(--ink-faint); opacity: .7; }
.mz-thinking .mz-rule { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(139,103,42,.5)); }
.mz-thinking .mz-rule.mz-r { background: linear-gradient(90deg, rgba(139,103,42,.5), transparent); }
.mz-thinking img { width: 19px; height: 19px; animation: mz-smoke 2.4s ease-in-out infinite; }
@keyframes mz-smoke { 0%,100% { opacity: .5; translate: 0 0; rotate: -2deg; } 50% { opacity: 1; translate: 0 -2px; rotate: 2deg; } }
.mz-cursor::after { content: '▍'; color: var(--cinnabar); opacity: .6; animation: mz-blink 1s steps(2, jump-none) infinite; }
@keyframes mz-blink { 0% { opacity: .6; } 100% { opacity: 0; } }
#mz-delbar button.mz-armed { color: var(--paper-hi); background: var(--cinnabar); border-color: var(--cinnabar); }
#mz-corner button[data-corner="acu"] { display: none; }
#mz-shell-root[data-acu] #mz-corner button[data-corner="acu"] { display: block; }
#mz-entry { position: fixed; z-index: 8999; display: none; --fs-label: 12.5px; --ls-label: 3px; }
#mz-entry.mz-tab { display: block; }
/* 入卷题签配色对齐酒馆内入口面板（绢纸 #f3ead2／入卷红 #9b2f22） */
.mz-entry-tab { position: relative; display: flex; align-items: center; gap: 9px; cursor: pointer; padding: 6px 13px 6px 6px;
  font-family: 'Noto Serif SC','Source Han Serif SC','Songti SC','SimSun',serif; font-size: var(--fs-label); letter-spacing: var(--ls-label); text-indent: var(--ls-label);
  color: #3a2c1a; background: #f3ead2 url('${A6}paper-scroll.webp') center / 512px; border: 1px solid rgba(139,103,42,.5);
  box-shadow: 0 2px 4px rgba(0,0,0,.35), 0 10px 20px rgba(0,0,0,.28);
  transition: translate var(--t-fast) var(--ease-out), box-shadow var(--t-fast) var(--ease-out); }
.mz-entry-tab::before { content: ''; position: absolute; inset: 3px; border: 1px solid rgba(139,103,42,.26); pointer-events: none; }
.mz-entry-tab i { flex: none; width: 24px; height: 24px; display: grid; place-items: center; font-style: normal; font-size: 13.5px; letter-spacing: 0; text-indent: 0;
  color: #fff4dc; background: #9b2f22; box-shadow: inset 0 0 0 1px rgba(255,236,200,.35); }
.mz-entry-tab:hover { translate: 0 -1px; box-shadow: 0 3px 6px rgba(0,0,0,.4), 0 14px 26px rgba(0,0,0,.32); }
.mz-entry-tab:active { translate: 0 1px; transition-duration: .06s; }
.mz-entry-tab svg { width: 13px; height: 13px; fill: none; stroke: #9b2f22; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.mz-vartree { flex: 1; min-height: 0; overflow: auto; font-size: 13.5px; line-height: 1.9; color: var(--ink-dim); padding: 8px 12px;
  background: #f4efe0 url('${A6}paper-folded.webp') 0 0 / 512px 512px repeat; border: 1px solid rgba(139,103,42,.32); }
.mz-vartree details { padding-left: 14px; }
.mz-vartree summary { cursor: pointer; color: var(--ink); letter-spacing: 1px; list-style: none; }
.mz-vartree summary::before { content: '▸'; display: inline-block; width: 14px; color: var(--ink-faint); transition: rotate var(--t-fast) var(--ease-out); }
.mz-vartree details[open] > summary::before { rotate: 90deg; }
.mz-vartree .mz-kv { padding-left: 14px; white-space: pre-wrap; word-break: break-all; }
.mz-vartree .mz-kv .mz-k { margin-right: 6px; }
.mz-vartree .mz-kv b { color: var(--cinnabar); font-weight: 500; }
.mz-vc-img img { width: 100%; height: 100%; object-fit: cover; }
.mz-portrait .mz-pic img { width: 100%; height: 100%; object-fit: cover; cursor: zoom-in; }
/* ==== 罪业密簿黑账变体（七窗唯此一扇走暗面） ==== */
#mz-lift.mz-sin { --ink: #e3d4ac; --ink-dim: #c3b28a; --ink-faint: #94845f; }
#mz-lift.mz-sin .mz-held { background-color: #151515; background-image: url('${A6}paper-ledger.webp'); }
#mz-lift.mz-sin .mz-held h3 { border-image-source: url('${A6}slip-ledger.webp'); }
#mz-lift.mz-sin .mz-held::before { border-color: rgba(176,74,56,.5); }
#mz-lift.mz-sin .mz-folio { background: #151515 url('${A6}paper-ledger.webp') 0 0 / 512px 512px repeat; border-color: rgba(176,74,56,.4); box-shadow: inset 0 0 0 4px rgba(0,0,0,.22); }
#mz-lift.mz-sin .mz-card { border-image: url('${A6}card-ledger.webp') 52 fill / 11px stretch; box-shadow: 0 1px 3px rgba(0,0,0,.35); }
#mz-lift.mz-sin .mz-card.mz-empty { border-image: none; border: 1px dashed rgba(176,74,56,.35); background: none; box-shadow: none; }
#mz-lift.mz-sin .mz-form input { border-bottom-color: rgba(227,212,172,.4); }
#mz-lift.mz-sin .mz-form input::placeholder { color: rgba(227,212,172,.35); }
#mz-lift.mz-sin .mz-bar-line .mz-bar { background: rgba(0,0,0,.35); }
#mz-lift.mz-sin .mz-sheet { background: rgba(0,0,0,.28); border-color: rgba(176,74,56,.4); box-shadow: inset 0 0 0 3px rgba(0,0,0,.2); }

/* 立绘大图灯箱 */
#mz-viewer { position: absolute; inset: 0; z-index: 60; background: rgba(0,0,0,.78);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  cursor: zoom-out; animation: mz-reveal var(--t-mid) var(--ease-out) both; }
#mz-viewer img { max-width: 92vw; max-height: 88vh; box-shadow: 0 12px 48px rgba(0,0,0,.6); }
#mz-viewer span { font-size: var(--fs-read); letter-spacing: 4px; text-indent: 4px; color: rgba(240,230,205,.85); }
.mz-thumbs i { background-size: cover; background-position: center; }
#mz-crisis.mz-moved { left: var(--cx); top: var(--cy); }
@keyframes mz-flash { 0% { color: var(--cinnabar); text-shadow: 0 0 10px rgba(160,52,38,.55); translate: 0 -2px; }
  30% { color: var(--cinnabar); text-shadow: 0 0 0 rgba(160,52,38,0); translate: 0 0; } }
.mz-flash b, .mz-flash .mz-w-sub, .mz-flash.mz-solo { animation: mz-flash 1.4s var(--ease-out); }
@keyframes mz-flash-dark { 0% { color: #f6c083; text-shadow: 0 0 10px rgba(240,176,114,.7); translate: 0 -2px; }
  30% { color: #f6c083; text-shadow: 0 0 0 rgba(240,176,114,0); translate: 0 0; } }
#mz-minimap .mz-flash b, #mz-minimap .mz-flash .mz-w-sub { animation-name: mz-flash-dark; }
#mz-paper.mz-paper-in { animation: mz-paper-in .8s var(--ease-out) both; }
@keyframes mz-paper-in { from { opacity: 0; translate: 0 10px; } }
#mz-shell-root.mz-shell-in { animation: mz-shell-in .28s var(--ease-out) both; pointer-events: none; }
@keyframes mz-shell-in { from { opacity: 0; scale: 1.01; } }
#mz-shell-root.mz-shell-out { animation: mz-shell-out .28s var(--ease-out) both; pointer-events: none; }
@keyframes mz-shell-out { to { opacity: 0; scale: .985; } }
@media (prefers-reduced-motion: reduce) { #mz-shell-root, #mz-shell-root *, #mz-shell-root *::before, #mz-shell-root *::after, #mz-lift, #mz-lift * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
`;

  // src/css/phone.js
  var A7 = ASSET_BASE;
  var phone_default = `
/* ==== 底栏与遮罩（桌面端不存在） ==== */
#mz-mbar, #mz-mscrim, #mz-mmenu { display: none; }

@container mz (max-width: 920px) {
  /* ==== 中栏：挂轴铺满，天杆收进纸内，底部让出底栏 ==== */
  .mz-main { --scroll-w: 100%; padding-top: env(safe-area-inset-top, 0px); padding-bottom: var(--bar-tot); }
  #mz-scroll { width: 100%; margin-top: 0; filter: none; }
  .mz-axle { margin: 0 0 -6px; }
  .mz-axle .mz-band { margin: -5px 10px 0; height: 18px; }
  .mz-axle .mz-knot { top: 6px; width: 22px; height: 32px; }
  #mz-paper { padding: 22px 18px 16px; }
  .mz-turn.mz-gm, .mz-turn.mz-zhu { font-size: 16px; line-height: 1.95; }
  #mz-writing { padding: 8px 10px 10px; }
  #mz-writing::before { left: 14px; right: 14px; }
  #mz-send { width: 42px; height: 44px; font-size: 18px; }
  /* 回底木鱼水平对齐敕印中心（敕印宽 42 贴右 10，木鱼宽 34） */
  #mz-jump { bottom: calc(var(--bar-tot) + 62px); left: auto; right: 14px; }
  /* iOS Safari 聚焦字号 <16px 的输入框会放大页面 */
  #mz-shell-root input, #mz-shell-root textarea { font-size: 16px; }
  /* 手机端撤悬浮朱票，换卷末危机段 */
  #mz-shell-root[data-crisis] #mz-crisis { display: none; }
  .mz-crisis-line { display: block; }

  /* ==== 底栏：寺况／行事／天机三钮，只挂名字，读数进屉里看 ==== */
  #mz-mbar { position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; height: var(--bar-tot);
    padding-bottom: env(safe-area-inset-bottom, 0px); display: flex; align-items: stretch;
    background-image:
      linear-gradient(180deg, rgba(50,22,8,.10), rgba(28,12,4,.30)),
      linear-gradient(rgba(106,56,30,.32), rgba(106,56,30,.32)),
      url('${A7}bg-lacquer-red.webp');
    background-repeat: no-repeat, no-repeat, repeat; background-size: 100% 100%, 100% 100%, 512px 512px;
    border-top: 1px solid rgba(240,200,140,.3); box-shadow: 0 -4px 14px rgba(0,0,0,.35); }
  #mz-mbar button { flex: 1; min-width: 0; border: none; background: none; cursor: pointer; font-family: inherit;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: var(--side-title);
    transition: color var(--t-fast) var(--ease-out); }
  #mz-mbar button b { font-size: 14px; letter-spacing: 5px; text-indent: 5px; font-weight: 600; }
  #mz-mbar button.mz-on { color: var(--gold); }
  #mz-mbar button[data-drawer="more"] { flex: 0 0 88px; }
  #mz-mbar .mz-sep { width: 1px; margin: 14px 0; background: rgba(240,200,140,.22); }
  /* 天机菜单：低频钮（变量／数据库／退出）都在这，退出两步远不误触 */
  #mz-mmenu { display: flex; flex-direction: column; position: absolute; right: 8px; bottom: calc(var(--bar-tot) + 10px); z-index: 30; min-width: 150px;
    padding: 4px 6px; border-style: solid; border-color: transparent; border-width: 14px;
    border-image: url('${A7}plaque-entry.webp') 160 / 14px stretch; background: url('${A7}silk-board-core.webp') center / cover; background-clip: border-box;
    filter: drop-shadow(0 6px 14px rgba(0,0,0,.45)); opacity: 0; pointer-events: none; translate: 0 8px;
    transition: opacity var(--t-mid) var(--ease-out), translate var(--t-mid) var(--ease-out); }
  #mz-mmenu.mz-open { opacity: 1; pointer-events: auto; translate: 0 0; }
  #mz-mmenu button { border: none; background: none; cursor: pointer; font-family: inherit; text-align: left;
    display: flex; align-items: center; gap: 10px; font-size: 13.5px; letter-spacing: 3px; color: var(--ink-dim); padding: 8px 8px; }
  #mz-mmenu button svg { width: 16px; height: 16px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; opacity: .7; }
  #mz-mmenu button + button { border-top: 1px solid rgba(139,103,42,.3); }
  #mz-mmenu button.mz-danger { color: var(--cinnabar); }
  #mz-mmenu button[data-menu="acu"] { display: none; }
  #mz-shell-root[data-acu] #mz-mmenu button[data-menu="acu"] { display: block; }
  #mz-mscrim { display: block; position: absolute; inset: 0; bottom: var(--bar-tot); z-index: 29; background: var(--scrim);
    opacity: 0; pointer-events: none; transition: opacity var(--t-mid) var(--ease-out); }
  #mz-mscrim.mz-open { opacity: 1; pointer-events: auto; }

  /* ==== 两侧栏原封变抽屉：内容超高在屉内滚动（一屏收齐手机端豁免） ==== */
  .mz-side, .mz-rside { position: absolute; left: 0; right: 0; bottom: var(--bar-tot); top: auto; width: auto; max-height: 76%; z-index: 30;
    border: none; border-top: 1px solid rgba(240,200,140,.35); padding: 10px 14px 14px; gap: 12px;
    translate: 0 110%; transition: translate var(--t-slow) var(--ease-paper); box-shadow: 0 -12px 30px rgba(0,0,0,.45); }
  .mz-side.mz-open, .mz-rside.mz-open { translate: 0 0; }
  /* 低频钮已入天机菜单，抽屉里的角落钮整排撤 */
  #mz-corner { display: none; }

  /* ==== 浮窗：贴底整幅纸，上留一指宽遮罩可点关，题签仍悬出纸上缘 ==== */
  #mz-lift { align-items: flex-end; }
  #mz-lift .mz-held { width: 100%; height: calc(100% - 56px); }
  #mz-lift .mz-held h3 { left: 10px; top: -22px; font-size: 13px; letter-spacing: 4px; padding: 12px 10px 14px; }
  #mz-lift .mz-lift-x { display: block; }
  #mz-lift.mz-gate .mz-lift-x { display: none; }
  #mz-lift .mz-held .mz-held-body { padding: 24px 14px calc(18px + env(safe-area-inset-bottom, 0px)); }
  .mz-card { padding: 9px 10px 8px; font-size: 13.5px; }
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
  .mz-picks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mz-bplist { width: 100%; }
  .mz-bps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mz-loan-row { flex-wrap: wrap; }
  .mz-loan-row label:not(.mz-grow) input { width: 100%; }
  .mz-loan-row label { flex: 1 1 40%; }
  .mz-loan-row .mz-grow { flex: 1 1 100%; }
  .mz-loan-row .mz-build-foot { flex: 1 1 100%; }
  .mz-shoplist { width: 100%; }
  .mz-picks.mz-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .mz-form input.mz-w { width: 100%; }
  #mz-lift.mz-gate .mz-held { width: 100%; height: calc(100% - 56px); max-height: none; }
  .mz-gate-cols { display: flex; flex-direction: column; gap: 18px; overflow-y: auto; }
  .mz-gate-opening, .mz-gate-card, .mz-gate-sects { flex: none; }
  .mz-gate-img { flex: none; min-height: 0; }
  .mz-gate-foot { flex-wrap: wrap; gap: 6px; }
  .mz-gate-foot .mz-why { position: static; translate: none; width: 100%; text-align: center; padding-top: 0; }
  #mz-lift.mz-gate .mz-held h3 { padding: 22px 20px 0; font-size: 22px; letter-spacing: 8px; text-indent: 8px; }
  #mz-lift.mz-gate .mz-held .mz-held-body { padding: 10px 18px 20px; }
}

`;

  // src/css/armor.js
  var armor_default = `
#mz-shell-root input, #mz-shell-root textarea {
  background-color: transparent !important; color: var(--ink) !important;
  box-shadow: none !important; border-radius: 0 !important; font-family: inherit !important; }
#mz-shell-root input:focus, #mz-shell-root textarea:focus { outline: none !important; }
#mz-writing textarea, #mz-shell-root .mz-story-edit textarea { border: none !important; }
#mz-shell-root .mz-story-edit textarea { color: var(--cinnabar) !important; }
#mz-shell-root .mz-form input, #mz-shell-root .mz-build textarea { border: none !important; border-bottom: 1px solid rgba(118,94,56,.5) !important; }
#mz-lift.mz-sin .mz-form input { border-bottom-color: rgba(227,212,172,.4) !important; }
`;

  // src/03-theme.js
  var SHELL_CSS = tokens_default + sides_default + story_default + lift_default + windows_default + extras_default + phone_default + armor_default;

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
        animateOnce(root.querySelector('.mz-zone[data-zone="' + key.slice(3) + '"]'), "mz-unveil", 2600);
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
  var OPENINGS_META = [
    { title: "破庙开山", blurb: "会昌元年三月，你重回城南荒庙，在断臂佛像下掘开空置的地窖，借满城欲念开坛立教。", img: CB2("lsgkeh") }
  ];
  var chosenSect = null;
  var page = 0;
  var busy = false;
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
    return !readMVU().道场.宗风;
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
    const swipes = late ? info && !isPanelText(info.swipes[info.cur]) ? [info.cur] : [] : openingSwipes();
    if (swipes.length && page >= swipes.length) page = swipes.length - 1;
    const curSwipe = late ? swipes[0] : swipes[page];
    const meta = OPENINGS_META[curSwipe != null ? curSwipe - 1 : 0] || OPENINGS_META[0];
    const multi = !late && swipes.length > 1;
    const nav = multi ? `<div class="mz-gate-nav"><button data-gate="prev" ${page === 0 ? "disabled" : ""}>${ICO.chev}</button><span>${page + 1} / ${swipes.length}</span><button data-gate="next" ${page === swipes.length - 1 ? "disabled" : ""}>${ICO.chev}</button></div>` : "";
    const opening = `<div class="mz-gate-opening">
        <h4>开场白</h4>
        <div class="mz-gate-card">
          <div class="mz-gate-img"${meta.img ? ` style="background-image:url('${meta.img}')"` : ""}></div>
          <b>${meta.title}</b>
          <p>${meta.blurb}</p>
          ${nav}
        </div>
      </div>`;
    const sects = SECTS.map((s) => `<button class="mz-gate-sect${chosenSect === s.key ? " mz-on" : ""}" data-gate="sect" data-sect="${s.key}"><b>${s.key}</b><span>${s.line}</span></button>`).join("");
    const ready = !!chosenSect && (late || swipes.length > 0 || !info);
    return `<section class="mz-win mz-on mz-gate-win">
    <div class="mz-gate-cols">
      ${opening}
      <div class="mz-gate-sects">
        <h4>宗风</h4>
        ${sects}
      </div>
    </div>
    <div class="mz-gate-foot">
      <button class="mz-seal-btn mz-lg" data-gate="confirm" ${ready ? "" : "disabled"}>开坛</button>
      <span class="mz-why">${ready ? "" : "请先择定宗风"}</span>
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
    if (busy || !chosenSect) return;
    busy = true;
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
      await playRite();
      closeLift(true);
      renderAll(true);
      renderStoryLog();
      playEntrance();
    } catch (e) {
      const why = doc.querySelector("#" + SEL.lift + " .mz-gate-foot .mz-why");
      if (why) why.textContent = "出错: " + (e && e.message ? e.message : e);
      const again = doc.querySelector("#" + SEL.lift + ' .mz-gate-foot button[data-gate="confirm"]');
      if (again) again.disabled = false;
    } finally {
      busy = false;
    }
  }
  function playRite() {
    const lift = doc.getElementById(SEL.lift);
    const held = lift && lift.querySelector(".mz-held");
    if (!held) return Promise.resolve();
    return new Promise((resolve) => {
      const rite = doc.createElement("div");
      rite.className = "mz-rite";
      rite.innerHTML = '<div class="mz-rite-bloom"></div><i class="mz-rite-ring"></i><i class="mz-rite-ring"></i><i class="mz-rite-ring"></i><div class="mz-rite-seal"><span>' + GATE_TITLE + '</span></div><span class="mz-rite-skip">轻触跳过</span>';
      held.appendChild(rite);
      lift.classList.add("mz-rite");
      let t1 = 0, t2 = 0, done = false;
      const finish2 = () => {
        if (done) return;
        done = true;
        clearTimeout(t1);
        clearTimeout(t2);
        rite.remove();
        lift.classList.remove("mz-rite", "mz-rite-out");
        resolve();
      };
      rite.addEventListener("click", finish2, { once: true });
      t1 = setTimeout(() => lift.classList.add("mz-rite-out"), 1500);
      t2 = setTimeout(finish2, 2100);
    });
  }
  function playEntrance() {
    animateOnce(doc.getElementById(SEL.paper), "mz-paper-in", 900);
    const root = doc.getElementById("mz-shell-root");
    if (!root) return;
    const els = [...root.querySelectorAll(".mz-side #mz-board, .mz-side .mz-zone, #mz-minimap, .mz-rside .mz-zone")];
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
      chosenSect = el.dataset.sect;
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
      openLift(GATE_WIN);
      return true;
    }
    return false;
  }

  // src/adapters/db-plugin.js
  function acuApi() {
    try {
      return window.parent.AutoCardUpdaterAPI || null;
    } catch (e) {
      return null;
    }
  }
  function acuPresent() {
    return !!(acuApi() || doc.getElementById("acu-v2-menu-item"));
  }
  function updateAcuNav() {
    const root = doc.getElementById(SHELL_ID);
    if (!root) return;
    if (acuPresent()) root.setAttribute("data-acu", "");
    else root.removeAttribute("data-acu");
  }
  var acuPollLeft = 30;
  var acuPollTimer = null;
  function pollAcu() {
    updateAcuNav();
    if (!acuPresent() && --acuPollLeft > 0) acuPollTimer = setTimeout(pollAcu, 2e3);
  }
  function stopAcuTimers() {
    if (acuPollTimer) {
      clearTimeout(acuPollTimer);
      acuPollTimer = null;
    }
    if (acuHiTimer) {
      clearInterval(acuHiTimer);
      acuHiTimer = null;
    }
  }
  var acuHiTimer = null;
  function setAcuNavActive(on) {
    const acuBtn = doc.getElementById(SEL.acuBtn);
    if (acuBtn) acuBtn.classList.toggle("mz-on", !!on);
  }
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
  function watchAcuClose() {
    if (acuHiTimer) clearInterval(acuHiTimer);
    let seen = false, tries = 0;
    acuHiTimer = setInterval(() => {
      if (acuUiOpen()) {
        seen = true;
        raiseAcuUi();
        return;
      }
      if (seen || ++tries > 25) {
        clearInterval(acuHiTimer);
        acuHiTimer = null;
        setAcuNavActive(false);
      }
    }, 400);
  }
  function openAcuUI() {
    try {
      const v2 = doc.getElementById("acu-v2-menu-item");
      if (v2) {
        v2.click();
      } else {
        const api = acuApi();
        if (api && typeof api.openSettings === "function") api.openSettings();
        else return;
      }
      raiseAcuUi();
      setAcuNavActive(true);
      watchAcuClose();
    } catch (e) {
      console.warn("[密宗前端] 打开数据库插件界面失败", e);
    }
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
    if (tg >= 0) return { thoughts: rest.slice(0, tg).trim() ? [rest.slice(0, tg)] : [], rest: rest.slice(tg) };
    const mainAt = () => {
      const m = lastMainOpen(rest);
      return m ? m.index : -1;
    };
    if (TIDE_HEAD_RE.test(rest)) {
      const i2 = mainAt();
      if (i2 > 0) return { thoughts: [rest.slice(0, i2)], rest: rest.slice(i2) };
      if (streaming) return { thoughts: [rest], rest: "" };
    }
    rest = rest.replace(THOUGHT_BLOCK_RE, (m, body) => {
      thoughts.push(body);
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
    if (thoughts.length) return { thoughts, rest };
    const i = mainAt();
    const c = rest.match(BARE_CLOSE_RE);
    if (c && (i < 0 || c.index < i)) return { thoughts: [rest.slice(0, c.index)], rest: rest.slice(c.index + c[0].length) };
    const r = rest.match(DOC_ROOT_RE);
    if (r && (i < 0 || r.index < i)) return { thoughts: [rest.slice(0, r.index)], rest: rest.slice(r.index + r[0].length) };
    if (HEAD_MARK_RE.test(rest) && i > 0) return { thoughts: [rest.slice(0, i)], rest: rest.slice(i) };
    if (streaming && i < 0 && rest.trim()) return { thoughts: [rest], rest: "" };
    return { thoughts, rest };
  }
  function extractThought(raw, streaming) {
    if (!raw) return "";
    return splitThought(raw, streaming).thoughts.map(cleanThought).filter(Boolean).join("\n\n");
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
  var STRIP_RE = new RegExp("<(" + STRIP_TAGS.map(esc).join("|") + ")(?:\\s[^<>]*)?>[\\s\\S]*?(?:<\\/\\1\\s*>|$)", "gi");
  var ANY_TAG_RE = /<\/?[A-Za-z_一-鿿][\w\-~:.一-鿿]*(?:\s[^<>]*)?\/?>/g;
  var TAIL_CUT_RE = /<(options|branches|choice|dream_option|w2g|dream_after_format|UpdateVariable)(?:\s[^<>]*)?>(?:(?!<\/\1)[\s\S])*$|<!--(?:(?!-->)[\s\S])*$|<\/?[^<>\s]*$/i;
  function stripNoise(text) {
    return text.replace(/<htm1fenge(?:\s[^<>]*)?>([\s\S]*?)(?:<\/htm1fenge\s*>|$)/gi, (m, inner) => {
      const d = inner.match(/<span[^<>]*display:\s*none[^<>]*>([\s\S]*?)<\/span>/i);
      return d ? d[1].trim() : "";
    }).replace(STRIP_RE, "").replace(/<Q>[\s\S]*?(?:<\/WF>|$)/gi, "").replace(/<!--[\s\S]*?-->/g, "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/<br\s*\/?>|<\/paragraph\s*>/gi, "\n").replace(ANY_TAG_RE, "").replace(/^[ \t]*#{1,6}[ \t]*正文[ \t]*(?:\r?\n|$)/gm, "").replace(/^[ \t]*>[ \t]*凝嘤嘤[：:].*(?:\r?\n|$)/gm, "").replace(/《end》/g, "");
  }
  function finish(body, depth) {
    return applyDisplayRegexes(stripNoise(body), depth).trim();
  }
  function extractMainText(raw, streaming, depth) {
    if (!raw) return "";
    if (/^\s*(?:<StatusPlaceHolderImpl\s*\/?>\s*)*【开场介绍】/.test(raw)) return "";
    const rest = splitThought(raw, streaming).rest;
    const main = lastMainOpen(rest);
    if (main) {
      let body = rest.slice(main.end);
      const j = body.toLowerCase().indexOf("</" + main.tag + ">");
      body = j >= 0 ? body.slice(0, j) : body.replace(TAIL_CUT_RE, "");
      return finish(body, depth);
    }
    const tg = lastMatch(rest, TG_BODY_RE);
    if (tg) {
      let body = rest.slice(tg.index + tg[0].length);
      const e = body.search(TG_AFTER_RE);
      body = e >= 0 ? body.slice(0, e) : body.replace(TAIL_CUT_RE, "");
      return finish(body, depth);
    }
    if (streaming) return "";
    return finish(rest, depth);
  }
  var OPTION_TAGS = ["options", "choice", "branches", "dream_option", "w2g"];
  var OPTION_PREFIX_RE = /^\s*>?\s*(?:\d+\s*[.、):：]|[A-Za-z]\s*[.、):：]|[-*•]|选项[一二三四五六七八九十\d]+\s*[：:]|[①②③④⑤⑥⑦⑧])?\s*(?:[[【][^\]】\n]{1,12}[\]】])?\s*/;
  function extractOptions(raw, depth) {
    if (!raw) return [];
    const s = splitThought(raw, false).rest;
    let inner = null;
    for (const tag of OPTION_TAGS) {
      const m = lastMatch(s, new RegExp("<" + tag + "(?:\\s[^<>]*)?>", "i"));
      if (!m) continue;
      const body = s.slice(m.index + m[0].length);
      const j = body.toLowerCase().indexOf("</" + tag + ">");
      if (j >= 0) {
        inner = body.slice(0, j);
        break;
      }
    }
    if (inner == null) return [];
    const text = applyDisplayRegexes(inner, depth).replace(/<summary(?:\s[^<>]*)?>[\s\S]*?<\/summary\s*>/gi, "").replace(ANY_TAG_RE, "");
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
    if (on) {
      const cl = doc.querySelector("#" + SEL.paper + " .mz-crisis-line");
      if (cl) cl.remove();
    }
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
    const row2 = doc.getElementById(SEL.writing);
    const bar = doc.getElementById(SEL.delbar);
    if (row2) row2.style.display = on ? "none" : "";
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
    syncCrisisLine(log, sending ? "" : readMVU().暗流.本月危机);
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
    if (!items.length && !voices.length) return "";
    const open = String(footOpen.get(mid) || "").split(":");
    const openKey = open[0] === "stat" ? open.join(":") : "";
    const openName2 = open[0] === "voice" ? open[1] : "";
    const row2 = '<div class="mz-ff">' + items.map((it) => '<button class="mz-ff-var' + (openKey === it.key ? " mz-open" : "") + '" data-foot-item="' + it.key + '">' + it.html + "</button>").join("") + '<span class="mz-ff-gap"></span>' + (voices.length ? '<span class="mz-ff-label">心声</span>' + voices.map((n) => '<button class="mz-ff-voice' + (openName2 === n ? " mz-open" : "") + '" data-foot-item="voice:' + n + '"><span class="mz-ava">' + n[0] + "</span>" + n + "</button>").join("") + (voiceSeen.has(mid) ? "" : '<span class="mz-dot"></span>') : "") + "</div>";
    let panel = "";
    if (openKey) {
      const it = items.find((x) => x.key === openKey);
      if (it) panel = '<div class="mz-ff-detail mz-show">' + it.line + "</div>";
    } else if (openName2 && CAST.includes(openName2)) {
      panel = voiceCardHtml(mid, openName2, open[2] === "memoir" ? "memoir" : "voice");
    }
    return row2 + panel;
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
  function crisisLineHtml(name) {
    return '<div class="mz-crisis-line"><img src="' + asset("ticket-notice.webp") + '" alt="官府朱票"><div class="mz-ticket-text"><b>' + escapeHtml(name) + '</b><div class="mz-sub">' + FORM_MSG.朱票副题 + "</div></div></div>";
  }
  function syncCrisisLine(log, name) {
    if (!log) return;
    const cur = log.querySelector(".mz-crisis-line");
    if (!name) {
      if (cur) cur.remove();
      return;
    }
    if (cur && !cur.nextElementSibling && cur.querySelector("b").textContent === name) return;
    if (cur) cur.remove();
    log.insertAdjacentHTML("beforeend", crisisLineHtml(name));
  }

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
    const marked = streaming ? escaped : escaped.replace(/“([^”\n]*?)”/g, '<span class="mz-quote">“$1”</span>').replace(/「([^」\n]*?)」/g, '<span class="mz-quote">「$1」</span>').replace(/&quot;([^\n]*?)&quot;/g, '<span class="mz-quote">&quot;$1&quot;</span>');
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
  var craftable = (D) => CRAFT.filter((c) => shopReady(D, c));
  var debts = (D) => Object.entries(D.资粮.罪业密簿).filter(([, v]) => v && v.类别 === "债契");
  var handles = (D) => Object.entries(D.资粮.罪业密簿).filter(([, v]) => v && v.类别 !== "债契");
  var monthInterest = (D) => debts(D).reduce((s, [, v]) => {
    const 本 = (Number(v.欠额) || 0) * 1e3, 已 = Number(v.已收息) || 0;
    return s + (本 > 0 && 已 < 本 ? Math.min(Math.round(本 * 0.05), 本 - 已) : 0);
  }, 0);
  var pendingOrders = (D) => Object.entries(D.教务.法事委托).filter(([, v]) => v && v.状态 !== "已完成");
  var latestRumor = (D) => {
    const v = Object.values(D.教务.神迹传闻);
    return v.length ? String(v[v.length - 1]) : "";
  };
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
  function boardHtml(D) {
    if (D._empty) return '<div class="mz-grp"><div class="mz-solo mz-dim">此则无账目</div></div>';
    const t = parseTime(D.时空.时间);
    const dateTxt = t.年序号 >= 0 ? esc2(t.月名 || "") + esc2(t.日文) : esc2(D.时空.时间.replace(/\//g, " "));
    const fest = festivalState(t);
    const gate = gateState(t, fest);
    let festTxt, festCls;
    if (fest.今日) {
      festTxt = fest.今日.名;
      festCls = "mz-fest";
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
      levyCls = "mz-warn";
    } else if (t.年序号 === 4) {
      levy = "常例失效";
      levyCls = "";
    } else if (t.年序号 < 0 || !t.日) {
      levy = "未知";
      levyCls = "";
    } else {
      const left = Math.max(0, 30 - t.日);
      levy = left ? "还剩" + cn(left) + "日" : "今日当缴";
      levyCls = left <= 6 ? "mz-warn" : "";
    }
    return '<div class="mz-grp"><div class="mz-solo" data-stat="时间" title="' + esc2(D.时空.时间.replace(/\//g, " ")) + '">' + dateTxt + " <b>" + esc2(t.时辰) + '</b></div><div class="mz-row"><span>宵禁</span><b class="' + gate.cls + '">' + gate.文 + '</b></div><div class="mz-row"><span>常例</span><b class="' + levyCls + '">' + levy + '</b></div><div class="mz-row"><span>节令</span><b class="' + festCls + '">' + esc2(festTxt) + '</b></div></div><div class="mz-grp"><div class="mz-row" data-stat="铜钱"><span>铜钱</span><b>' + money(总文(D)) + '</b></div><div class="mz-row" data-stat="信众"><span>信众</span><b>' + cn(D.教务.信众) + "人</b></div></div>";
  }
  var row = (k, v, cls) => '<div class="mz-r-row"><span>' + k + "</span><b" + (cls ? ' class="' + cls + '"' : "") + ">" + v + "</b></div>";
  function zoneRowsHtml(key, D) {
    if (!unlocked(D, key)) return '<div class="mz-r-row mz-r-lock">' + ICO.lock + "<span>" + UNLOCK_COND[key] + "</span></div>" + '<div class="mz-r-row mz-r-blank">&nbsp;</div>'.repeat(ZONE_ROWS[key] - 1);
    switch (key) {
      case "同心缕":
        return CAST.map((n) => girlUnlocked(D, n) ? row(n, esc2(D.核心女主[n].灌顶位阶)) : row(CAST_HINT[n], "未识", "mz-r-dim")).join("");
      case "库藏": {
        const 库 = D.资粮.库藏;
        const stock = ["药品", "道具", "法器"].map((k) => KIND_SHORT[k] + cn(kindCount(库, k))).join("／");
        const cr = craftable(D);
        return row("存货", stock) + row("工坊", cr.length ? "可制" + cr.map((c) => c.kind).join("／") : "无坊", cr.length ? "" : "mz-r-dim");
      }
      case "教务": {
        const n1 = Object.keys(D.执事名册).length, n2 = Object.keys(D.明妃录).length;
        return row("执事", cn(n1) + "人／十二席", n1 ? "" : "mz-r-dim") + row("明妃", cn(n2) + "位／六席", n2 ? "" : "mz-r-dim") + (riteCooling(D) ? row("法会", "暂休", "mz-r-dim") : row("法会", "待办", "mz-r-good"));
      }
      case "营造":
        return row("表殿", esc2(D.道场.表殿等级), HALL_Q[D.道场.表殿等级] || "") + row("地宫", cn(facilities(D).length) + "处");
      case "法事": {
        const po = pendingOrders(D);
        const first = po[0];
        const rumor = latestRumor(D);
        return row("委托", cn(po.length) + "单／三席", po.length ? "" : "mz-r-dim") + row("时限", first ? esc2(first[0]) + " " + esc2(String(first[1].时限 || "")) : "无", first ? "" : "mz-r-dim") + row("传闻", rumor ? esc2(rumor) : "未闻", "mz-r-dim");
      }
      case "罪业": {
        const h = handles(D).length, d = debts(D).length, mi = monthInterest(D);
        return row("把柄", cn(h) + "条", h ? "" : "mz-r-dim") + row("债契", cn(d) + "契", d ? "" : "mz-r-dim") + row("月息", mi ? money(mi) : "无", mi ? "" : "mz-r-dim");
      }
    }
    return "";
  }
  function renderMinimap(D) {
    const mm = doc.getElementById(SEL.minimap);
    if (!mm) return;
    const z = zoneName(D.时空.当前地界);
    const pin = MINIMAP_PIN[z] || (ZONES.includes(z) ? MINIMAP_PIN.长安 : null);
    const pinEl = mm.querySelector(".mz-map-pin");
    if (pinEl) {
      pinEl.style.display = pin ? "" : "none";
      if (pin) {
        pinEl.style.left = pin[1] + "%";
        pinEl.style.top = pin[2] + "%";
        pinEl.dataset.label = pin[0];
      }
    }
    const t = parseTime(D.时空.时间);
    const y = Math.max(0, t.年序号);
    const lbl = mm.querySelector(".mz-doom .mz-lbl b");
    if (lbl) lbl.textContent = YEAR_SHORT[y] + " " + DOOM[y];
    const bar = mm.querySelector(".mz-doom .mz-bar i");
    if (bar) bar.style.width = y * 20 + 10 + "%";
    const wz = mm.querySelector(".mz-w-zone"), ws = mm.querySelector(".mz-w-sub");
    const sub = zoneSub(D.时空.当前地界);
    if (wz) wz.textContent = z;
    if (ws) {
      ws.textContent = sub;
      ws.style.display = sub ? "" : "none";
    }
    const where = mm.querySelector(".mz-where");
    if (where) where.title = D.时空.当前地界.replace(/\//g, " ");
    const storm = D.暗流.风波;
    const sb = mm.querySelector(".mz-storm b");
    if (sb) {
      sb.textContent = storm;
      sb.className = STORM_CLS[storm] || "";
    }
  }
  function renderCrisis(D) {
    const root = doc.getElementById(SHELL_ID);
    const c = doc.getElementById(SEL.crisis);
    if (!root || !c) return;
    const name = D.暗流.本月危机;
    if (name) {
      root.setAttribute("data-crisis", "");
      c.querySelector(".mz-ticket-text b").textContent = name;
      c.querySelector(".mz-ticket-text .mz-sub").textContent = FORM_MSG.朱票副题;
    } else {
      root.removeAttribute("data-crisis");
      c.classList.remove("mz-moved");
    }
    syncCrisisLine(doc.getElementById(SEL.paper), name);
  }
  function renderAll(force, Darg) {
    const D = Darg || readMVU();
    const board = doc.querySelector("#" + SEL.board + " .mz-face");
    if (board) board.innerHTML = boardHtml(D);
    ZONE_DEFS.forEach((z) => {
      const zone = doc.querySelector("#" + SHELL_ID + ' .mz-zone[data-zone="' + z.key + '"]');
      if (!zone) return;
      zone.classList.toggle("mz-locked", !unlocked(D, z.key));
      zone.querySelector(".mz-zone-rows").innerHTML = zoneRowsHtml(z.key, D);
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
  async function commitForm({ tag, mutate, message, check }) {
    if (committing) {
      setStoryStatus("账房正在记档，稍待");
      return false;
    }
    if (sending) {
      setStoryStatus("续写未毕，稍待再拨");
      return false;
    }
    if (delMode) {
      setStoryStatus("正在删记，了结了再拨款");
      return false;
    }
    if (editState) {
      setStoryStatus("改写未了，先存或弃");
      return false;
    }
    committing = true;
    try {
      return await commitFormImpl({ tag, mutate, message, check });
    } finally {
      committing = false;
    }
  }
  async function commitFormImpl({ tag, mutate, message, check }) {
    const lastId = safeLastMessageId();
    if (lastId == null || lastId < 0) {
      setStoryStatus("卷上尚无记录，无从记账");
      return false;
    }
    let v = null;
    try {
      v = getVariables({ type: "message", message_id: lastId });
    } catch (e) {
      dbg("commit:get", e);
    }
    if (!v || !v.stat_data) {
      setStoryStatus("眼下读不到账目，稍后再试");
      return false;
    }
    const before = _.cloneDeep(_.omit(v.stat_data, ["$internal"]));
    const stat = _.cloneDeep(before);
    if (check) {
      const why = check(readMVU(stat));
      if (why) {
        setStoryStatus(why);
        return false;
      }
    }
    mutate(stat);
    if (Number(stat.资粮 && stat.资粮.铜钱) < 0) {
      setStoryStatus("钱不足");
      return false;
    }
    const 扣款 = Math.max(0, Math.round((Number(_.get(before, "资粮.铜钱")) || 0) - (Number(_.get(stat, "资粮.铜钱")) || 0)));
    _.set(stat, "系统.代发", (tag || "代发") + "#" + 扣款 + "#" + Date.now());
    const ops = diffPatch(before, stat);
    if (!ops) {
      setStoryStatus("名目里不可含「/」「~」");
      return false;
    }
    closeLift();
    return sendText(message + "\n" + patchBlock(ops), { carryStat: stat });
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
  function varTreeHtml() {
    let sd = null;
    const lid = safeLastMessageId();
    try {
      const v = getVariables({ type: "message", message_id: lid });
      sd = v && v.stat_data;
    } catch (e) {
      dbg("vartree", e);
    }
    if (!sd) return '<section class="mz-win mz-on"><div class="mz-stub">眼下读不到账目</div></section>';
    return '<section class="mz-win mz-on"><div class="mz-vartree">' + Object.entries(sd).filter(([k]) => k !== "$internal").map(([k, v]) => node(k, v, 0)).join("") + "</div></section>";
  }
  function openVarTree() {
    openLift("变量");
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
  function atlasHtml(D) {
    const cur = zoneName(D.时空.当前地界);
    const t = parseTime(D.时空.时间);
    const y = Math.max(0, t.年序号);
    return '<section class="mz-win mz-atlas-win mz-on"><div class="mz-atlas"><div class="mz-mapbox"><img src="' + asset("map-changan.webp") + '" alt="长安城坊地图"><svg viewBox="0 0 1024 1024" preserveAspectRatio="none">' + ZONES.map((z) => '<path data-zone="' + z + '"' + (z === cur ? ' class="mz-cur"' : "") + ' d="' + ZONE_PATHS[z] + '"><title>' + z + "</title></path>").join("") + "</svg>" + ZONES.map((z) => {
      const l = ZONE_LABELS[z];
      return '<span class="mz-lbl' + (z === cur ? " mz-cur" : "") + '" style="left:' + l[1] + "%;top:" + l[2] + '%">' + l[0] + "</span>";
    }).join("") + '</div><div class="mz-zones">' + wh("长安十区") + '<ul class="mz-zlist">' + ZONES.map((z) => "<li" + (z === cur ? ' class="mz-cur"' : "") + "><span>" + z + "</span><small>" + (z === cur ? "此刻在此" : "") + "</small></li>").join("") + '</ul><div class="mz-doomline"><span>灭佛大势 ' + YEARS[y] + " " + DOOM[y] + '</span><div class="mz-yrs">' + YEAR_SHORT.map((s, i) => '<span class="' + (i === y ? "mz-cur" : i < y ? "mz-past" : "") + '">' + s + "</span>").join("") + "</div></div></div></div></section>";
  }
  var bondSel = CAST[0];
  var bondTheme = null;
  function selectBond(name) {
    if (CAST.includes(name)) {
      bondSel = name;
      bondTheme = null;
    }
  }
  function portraitOf(name, D) {
    const t = mainTheme(name, D.核心女主[name].灌顶位阶);
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
    const main = mainTheme(bondSel, rank);
    const curTheme = bondTheme && themes.find((t) => t[0] === bondTheme) || main;
    const lit = rankIdx(rank);
    return '<section class="mz-win mz-on ' + STAMP[bondSel] + '"><div class="mz-tabs mz-names">' + CAST.map((n) => girlUnlocked(D, n) ? "<button" + (n === bondSel ? ' class="mz-on"' : "") + ' data-bond="' + n + '">' + n + '<span class="mz-n">' + esc3(D.核心女主[n].灌顶位阶) + "</span></button>" : '<button class="mz-off" disabled>' + CAST_HINT[n] + '<span class="mz-n">未识</span></button>').join("") + '</div><div class="mz-wrow"><div class="mz-portrait"><div class="mz-pic">' + (curTheme ? '<img src="' + esc3(curTheme[1]) + '" alt="' + esc3(curTheme[0]) + '">' : "<span>立绘待补</span>") + '</div><div class="mz-thumbs">' + themes.map((t) => "<i" + (curTheme && t[0] === curTheme[0] ? ' class="mz-on"' : "") + ' title="' + esc3(t[0]) + '" data-theme="' + esc3(t[0]) + `" style="background-image:url('` + esc3(t[1]) + `')"></i>`).join("") + lockedGrades(bondSel, rank).map((r) => '<i class="mz-lock" title="' + esc3(r) + '解锁"><span>' + esc3(r.slice(0, 2)) + "</span></i>").join("") + '</div></div><div class="mz-wcol" style="flex:1"><div class="mz-lotus-row">' + [1, 2, 3, 4].map((i) => "<i" + (i <= lit ? ' class="mz-lit"' : "") + "></i>").join("") + "<span>灌顶位阶</span><b>" + esc3(rank) + "</b></div>" + wh("心声") + (g.心声 ? '<div class="mz-voice-sheet ' + STAMP[bondSel] + '">' + esc3(g.心声) + "</div>" : '<div class="mz-none">尚无心声</div>') + wh("回想") + memoHtml(g.回想) + "</div></div></section>";
  }
  var upgradeSel = null;
  var bpSel = null;
  function resetWinState() {
    upgradeSel = null;
    bpSel = null;
  }
  var BUILD_FORM = "mz-form mz-sheet mz-build";
  var WONDER_PH = "入浴者心防天然松动，灌顶事半功倍";
  function buildHtml(D) {
    const hall = D.道场.表殿等级;
    const hi = Math.max(0, HALLS.indexOf(hall));
    const steps = HALLS.map((h, i) => '<div class="mz-step ' + (i < hi ? "mz-done" : i === hi ? "mz-cur" : "") + '">' + h + "<small>" + (i === hi ? "当下" : i < hi ? "已成" : i === 1 ? "二百贯" : "一千贯 须得敕额") + "</small>" + (h === "敕赐法堂" && D.道场.敕额 ? '<span class="mz-chi">敕</span>' : "") + "</div>").join("");
    let act = "";
    if (hi === 0) {
      const whys = hallWhys(D);
      act = '<div class="mz-step-act">' + sealBtn("升 庄严精舍", "hall", !whys.length, whys.join(" ")) + "</div>";
    } else if (hi === 1) {
      act = '<div class="mz-step-act"><span class="mz-why">升敕赐法堂须得敕额，须教主亲身周旋</span></div>';
    }
    const fs = facilities(D);
    const upSel = upgradeSel && fs.find((x) => x.名 === upgradeSel);
    const upNext = upSel ? GRADES[GRADES.indexOf(upSel.档次) + 1] : null;
    const upBar = upSel && upNext ? '<form class="mz-form mz-sheet mz-upform" onsubmit="return false">' + wh("改造", esc3(upSel.名) + " " + esc3(upSel.档次) + " 升 " + upNext + " " + cn(UPGRADE_PRICE[upNext]) + "贯") + '<label class="mz-wonder mz-live">奇效<textarea name="奇效" rows="2" placeholder="' + WONDER_PH + '"></textarea><small>升作天工须议定奇效，写入即成定局</small></label><div class="mz-build-foot">' + sealBtn("罢", "upgrade-cancel", true) + sealBtn("议定改造", "upgrade-go", true, "", " mz-lg") + "</div></form>" : "";
    const cards = fs.length ? fs.map((f) => {
      const body = '<span class="mz-tag ' + (GRADE_Q[f.档次] || "mz-q1") + '">' + esc3(f.档次) + "</span><b>" + esc3(f.名) + "</b>" + kv("用途", f.用途) + (f.奇效 ? "<br>" + kv("奇效", f.奇效) : "");
      const next = GRADES[GRADES.indexOf(f.档次) + 1];
      if (!next) return card(body);
      const why = upgradeWhys(D, f.名, f.档次, next).join(" ");
      return '<div class="mz-card mz-up' + (upgradeSel === f.名 ? " mz-on" : "") + '">' + body + '<div class="mz-up-foot"><button class="mz-seal-btn" data-act="upgrade" data-name="' + esc3(f.名) + '"' + (why ? " disabled" : "") + ">升 " + next + '<span class="mz-price">' + cn(UPGRADE_PRICE[next]) + "贯</span></button>" + (why ? '<span class="mz-why">' + why + "</span>" : "") + "</div></div>";
    }).join("") : '<div class="mz-none">未辟</div>';
    const NOTE = { 粗成: "草创堪用，暗藏破绽", 精工: "坚实可靠，无虞", 天工: "鬼斧神工，议定奇效" };
    const picks = GRADES.map((g) => {
      const whys = buildWhys(D, g);
      return '<label class="mz-pick' + (whys.length ? " mz-off" : "") + '"><input type="radio" name="档次" value="' + g + '"' + (whys.length ? " disabled" : "") + "><b>" + g + '</b><span class="mz-price">' + cn(GRADE_PRICE[g]) + "贯</span><small>" + (whys.length ? whys.join(" ") : NOTE[g]) + "</small></label>";
    }).join("");
    const built = Object.fromEntries(fs.map((f) => [f.名, f.档次]));
    const bpRows = (区) => BLUEPRINTS.filter((b) => b.区 === 区).map((b) => built[b.名] ? '<div class="mz-bp mz-off"><b>' + esc3(b.名) + '</b><span class="mz-tag ' + (GRADE_Q[built[b.名]] || "mz-q1") + '">已建 ' + esc3(built[b.名]) + "</span></div>" : '<button type="button" class="mz-bp' + (bpSel === b.名 ? " mz-on" : "") + '" data-bp="' + esc3(b.名) + '"><b>' + esc3(b.名) + '</b><span class="mz-tag">未建</span></button>').join("");
    const bpList = '<div class="mz-wcol mz-bplist">' + wh("蓝图", "地面") + '<div class="mz-bps">' + bpRows("地面") + "</div>" + wh("蓝图", "地下") + '<div class="mz-bps">' + bpRows("地下") + "</div></div>";
    const bp = BLUEPRINTS.find((b) => b.名 === bpSel && !built[b.名]);
    const buildForm = '<form class="' + BUILD_FORM + '" onsubmit="return false">' + wh("兴造", bp ? esc3(bp.名) : "自拟") + '<label>名称<input name="名称" placeholder="自拟名目" value="' + (bp ? esc3(bp.名) : "") + '"></label><label>用途<textarea name="用途" rows="2" placeholder="自拟用途与陈设">' + (bp ? esc3(bp.用途) : "") + '</textarea></label><div class="mz-wh">档次</div><div class="mz-picks">' + picks + '</div><label class="mz-wonder">奇效<textarea name="奇效" rows="2" tabindex="-1" placeholder="' + WONDER_PH + '"></textarea><small>天工独有：通达造化，立成定局，后效绵延</small></label><div class="mz-build-foot"><span class="mz-why">库中 ' + money(总文(D)) + "</span>" + sealBtn("破土", "build", true, "", " mz-lg") + "</div></form>";
    return '<section class="mz-win mz-on">' + tabs("营造", [{ id: "cave", label: "道场", n: hall + "／地宫" + cn(fs.length) + "处" }, { id: "build", label: "兴造" }]) + pane("营造", "cave", wh("表殿") + '<div class="mz-steps">' + steps + "</div>" + act + wh("地宫设施", cn(fs.length) + "处") + '<div class="mz-folio">' + upBar + '<div class="mz-grid mz-c3">' + cards + "</div></div>", "cave") + pane("营造", "build", '<div class="mz-folio"><div class="mz-wrow mz-buildrow">' + bpList + buildForm + "</div></div>", "cave") + "</section>";
  }
  function sinHtml(D) {
    const hs = handles(D), ds = debts(D);
    const total = hs.length + ds.length;
    const hCards = hs.length ? hs.map(([名, v]) => card("<b>" + esc3(名) + "</b>" + kv("详情", v.详情 || "") + "<br>" + kv("价值", v.价值 || "") + '<button class="mz-seal-btn" data-act="extort" data-name="' + esc3(名) + '">勒索</button>')).join("") : '<div class="mz-none">簿中无名</div>';
    const dCards = ds.length ? ds.map(([名, v]) => {
      const 本 = (Number(v.欠额) || 0) * 1e3, 已 = Number(v.已收息) || 0;
      const pct = 本 > 0 ? Math.min(100, Math.round(已 / 本 * 100)) : 0;
      return card("<b>" + esc3(名) + "</b>" + kv("欠额", cn(Number(v.欠额) || 0) + "贯") + "<br>" + kv("已收息", money(已)) + (v.详情 ? "<br>" + kv("详情", v.详情) : "") + '<div class="mz-bar-line"><span>利不过本</span><div class="mz-bar"><i style="width:' + pct + '%"></i></div><span>' + (pct >= 100 ? "已停息" : cn(pct) + "分") + "</span></div>");
    }).join("") : '<div class="mz-none">簿中无名</div>';
    const whys = loanWhys(D, 0);
    const loanForm = '<form class="mz-form mz-sheet mz-loan" onsubmit="return false">' + wh("无尽藏放贷") + '<div class="mz-loan-row"><label>欠户<input name="欠户" placeholder="姓名"></label><label>本金<input name="本金" placeholder="整数贯" inputmode="numeric"></label><label class="mz-grow">抵押<input name="抵押" placeholder="田契、宅契或人身"></label><div class="mz-build-foot">' + sealBtn("放贷", "loan", !whys.length, whys.join(" "), " mz-lg") + '</div></div><div class="mz-none">月息五分，利不过本，按月自动入账　库中 ' + money(总文(D)) + "　簿共" + cn(total) + "／五条</div></form>";
    return '<section class="mz-win mz-on">' + tabs("罪业", [{ id: "handle", label: "把柄", n: cn(hs.length) }, { id: "debt", label: "债契", n: cn(ds.length) }], "共" + cn(total) + "／五条") + pane("罪业", "handle", '<div class="mz-folio mz-grid mz-c2">' + hCards + "</div>", "handle") + pane("罪业", "debt", '<div class="mz-folio mz-fill">' + loanForm + wh("债契", cn(ds.length) + "契") + '<div class="mz-grid mz-c3">' + dCards + "</div></div>", "handle") + "</section>";
  }
  function riteHtml(D) {
    const orders = Object.entries(D.教务.法事委托);
    const cards = orders.map(([客, v]) => card('<span class="mz-tag' + (v.状态 === "已完成" ? " mz-gold" : "") + '">' + esc3(v.状态 || "待办") + "</span><b>" + esc3(客) + "</b>" + kv("诉求", v.诉求 || "") + "<br>" + kv("时限", v.时限 || "") + "<br>" + kv("报酬", v.报酬 || "")));
    while (cards.length < LIMITS.法事委托) cards.push(empty());
    const rumors = Object.values(D.教务.神迹传闻).reverse().map((r) => '<div class="mz-banner">' + esc3(String(r)) + "</div>");
    while (rumors.length < LIMITS.神迹传闻) rumors.push('<div class="mz-banner mz-empty">未闻</div>');
    const pend = pendingOrders(D).length;
    return '<section class="mz-win mz-on">' + tabs("法事", [{ id: "order", label: "委托", n: cn(pend) + "／三席" }, { id: "rumor", label: "传闻", n: cn(Object.keys(D.教务.神迹传闻).length) }]) + pane("法事", "order", '<div class="mz-folio mz-grid mz-c3">' + cards.join("") + "</div>", "order") + pane("法事", "rumor", '<div class="mz-folio"><div class="mz-banners">' + rumors.join("") + "</div></div>", "order") + "</section>";
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
    return '<section class="mz-win mz-on">' + tabs("教务", [{ id: "steward", label: "执事", n: cn(st.length) + "／十二席", red: st.length >= LIMITS.执事名册 }, { id: "consort", label: "明妃", n: cn(cs.length) + "／六席", red: cs.length >= LIMITS.明妃录 }, { id: "rite", label: "法会", n: cooling ? "暂休" : "待办" }]) + pane("教务", "steward", '<div class="mz-folio mz-grid mz-c4">' + sCards.join("") + "</div>", "steward") + pane("教务", "consort", wh("明妃法座", cn(cs.length) + "位／六席") + '<div class="mz-folio mz-grid mz-c3">' + cCards.join("") + "</div>", "steward") + pane("教务", "rite", wh("上次法会", D.教务.上次法会 ? esc3(D.教务.上次法会.replace("/", " ")) : "未曾办过") + '<div class="mz-none">' + (cooling ? "本月已办" : "本月可办") + "</div>" + wh("筹办门槛") + '<ul class="mz-ticks">' + ticks.map(([t, ok]) => "<li" + (ok ? ' class="mz-ok"' : "") + ">" + t + "</li>").join("") + '</ul><div class="mz-none">大法会关涉满城风云，须教主亲自开坛，此处仅照验规制</div>', "steward") + "</section>";
  }
  function cofferHtml(D) {
    const items = Object.entries(D.资粮.库藏);
    const total = items.length;
    const cap = storeCap(D);
    const paneOf = (kind) => {
      const mine = items.filter(([, v]) => v && v.类别 === kind);
      const cards = mine.map(([名, v]) => card('<span class="mz-tag">' + esc3(kind) + "</span><b>" + esc3(名) + "</b>" + kv("效用", v.效用 || "")));
      const free = cap - total;
      let empties = free > 0 ? Math.max(1, (4 - mine.length % 4) % 4) : 0;
      empties = Math.min(empties, free);
      for (let i = 0; i < empties; i++) cards.push(empty());
      return '<div class="mz-folio mz-grid mz-c4">' + (cards.length ? cards.join("") : '<div class="mz-none">屉中无物</div>') + "</div>";
    };
    const ready = CRAFT.map((c) => shopReady(D, c));
    const pickWhys = CRAFT.map((c) => craftPickWhys(D, c));
    const firstOk = pickWhys.findIndex((w) => !w.length);
    const shops = CRAFT.map((c, i) => '<label class="mz-pick mz-shop' + (pickWhys[i].length ? " mz-off" : "") + '"><input type="radio" name="类别" value="' + c.kind + '"' + (pickWhys[i].length ? " disabled" : "") + (i === firstOk ? " checked" : "") + "><b>" + c.kind + '</b><span class="mz-price">' + cn(c.price) + "贯</span><small>" + c.note + '</small><small class="mz-shopline">' + (pickWhys[i].length ? pickWhys[i].join(" ") : c.shop + " 已备") + "</small></label>").join("");
    const gate = craftGateWhys(D);
    const crList = CRAFT.filter((c, i) => ready[i]).map((c) => c.kind);
    const craftForm = '<div class="mz-wrow mz-craftrow"><div class="mz-wcol mz-shoplist">' + wh("作坊") + '<div class="mz-picks mz-col">' + shops + '</div></div><form class="mz-form mz-sheet mz-craft" onsubmit="return false">' + wh("制作") + '<label>物名<input name="物名" placeholder="醉仙散"></label><label class="mz-grow">效用<textarea name="效用" rows="3" placeholder="饮之如坠云雾，半个时辰方醒"></textarea></label><div class="mz-none">拨资开炉，片刻功成，归入库藏</div><div class="mz-build-foot"><span class="mz-why">库中 ' + money(总文(D)) + "</span>" + sealBtn("开炉", "craft", !gate.length && firstOk >= 0, gate.length ? gate.join(" ") : "无可用作坊", " mz-lg") + "</div></form></div>";
    return '<section class="mz-win mz-on">' + tabs("库藏", [
      { id: "drug", label: "药品", n: cn(kindCount(D.资粮.库藏, "药品")) },
      { id: "tool", label: "道具", n: cn(kindCount(D.资粮.库藏, "道具")) },
      { id: "ritual", label: "法器", n: cn(kindCount(D.资粮.库藏, "法器")) },
      { id: "craft", label: "工坊", n: crList.length ? "可制" + crList.join("／") : "无坊" }
    ], "共" + cn(total) + "／" + cn(cap) + "屉") + pane("库藏", "drug", paneOf("药品"), "drug") + pane("库藏", "tool", paneOf("道具"), "drug") + pane("库藏", "ritual", paneOf("法器"), "drug") + pane("库藏", "craft", '<div class="mz-folio mz-fill">' + craftForm + "</div>", "drug") + "</section>";
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
      case "变量":
        return varTreeHtml();
    }
    return '<section class="mz-win mz-on"><div class="mz-stub">未辟</div></section>';
  }
  function formVals(el) {
    const form = el.closest("form");
    const out = {};
    if (form) form.querySelectorAll("input[name], textarea[name]").forEach((i) => {
      if (i.type === "radio") {
        if (i.checked) out[i.name] = i.value;
        else out[i.name] = out[i.name] || "";
      } else out[i.name] = i.value.trim();
    });
    return out;
  }
  function onWindowClick(e, win) {
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
      bondTheme = thumb.dataset.theme;
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
      }, message: FORM_MSG.升殿("庄严精舍") }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
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
      }, message: FORM_MSG.升造(名, f.档次, 新, 奇效) }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
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
      const 奇效 = 档 === "天工" ? v.奇效 || "" : "";
      commitForm({ tag: "兴造", check: (D) => buildWhys(D, 档).join(" "), mutate: (sd) => {
        sd.资粮.铜钱 -= GRADE_PRICE[档];
        sd.道场.地宫设施 = sd.道场.地宫设施 || {};
        sd.道场.地宫设施[v.名称] = Object.assign({ 用途: v.用途 || "", 档次: 档 }, 奇效 ? { 奇效 } : {});
      }, message: FORM_MSG.兴造(v.名称, 档, 奇效) }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
      bpSel = null;
      return;
    }
    if (act === "craft") {
      const v = formVals(btn);
      const 类 = v.类别;
      const c = CRAFT.find((x) => x.kind === 类);
      if (!c) {
        hint(btn, "先选类别");
        return;
      }
      if (!v.物名) {
        hint(btn, "先填物名");
        return;
      }
      commitForm({ tag: "工巧", check: (D) => craftWhys(D, c).join(" "), mutate: (sd) => {
        sd.资粮.铜钱 -= c.price;
        sd.资粮.库藏 = sd.资粮.库藏 || {};
        sd.资粮.库藏[v.物名] = { 类别: 类, 效用: v.效用 || "" };
      }, message: FORM_MSG.工巧(v.物名, 类) }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
      return;
    }
    if (act === "loan") {
      const v = formVals(btn);
      const 贯2 = Math.round(Number(v.本金));
      if (!v.欠户) {
        hint(btn, "先填欠户");
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
      }, message: FORM_MSG.放贷(v.欠户, cn(贯2)) }).catch((e2) => hint(btn, "出错: " + (e2 && e2.message || e2)));
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
  var tabState = {};
  var liftOpenName = () => openName;
  var tabOf = (win, def) => tabState[win] || def;
  function openLift(name) {
    if (gateNeeded()) name = GATE_WIN;
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
  function refreshLift(Darg) {
    if (!openName) return;
    const body = doc.getElementById(SEL.liftBody);
    if (!body) return;
    const D = Darg || readMVU();
    const keep = body.querySelector(".mz-folio, .mz-timeline, .mz-vartree");
    const st = keep ? keep.scrollTop : 0;
    const vals = grabFields(body);
    body.innerHTML = openName === GATE_WIN ? gateHtml() : winHtml(openName, D);
    restoreFields(body, vals);
    const again = body.querySelector(".mz-folio, .mz-timeline, .mz-vartree");
    if (again) again.scrollTop = st;
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
    { side: "l", key: "同心缕", lift: "同心缕", ico: "icon-redknot.webp" },
    { side: "l", key: "库藏", lift: "库藏", ico: "icon-coffer.webp" },
    { side: "l", key: "教务", lift: "教务", ico: "icon-letterbox.webp" },
    { side: "r", key: "营造", lift: "营造", ico: "shrine-model.webp" },
    { side: "r", key: "法事", lift: "法事", ico: "icon-folddoc.webp" },
    { side: "r", key: "罪业", lift: "罪业", ico: "icon-ledger.webp" }
  ];
  function zoneShell(z) {
    return `<div class="mz-zone" data-lift="${z.lift}" data-zone="${z.key}"><h5><span class="mz-z-ico"><img src="${asset(z.ico)}" alt="${z.key}"></span>${z.key}</h5><div class="mz-zone-rows"></div></div>`;
  }
  function skeletonHtml() {
    return `
  <div class="mz-side">
    <div class="mz-plaque">寺况</div>
    <div id="${SEL.board}"><div class="mz-face"></div></div>
    ${ZONE_DEFS.filter((z) => z.side === "l").map(zoneShell).join("")}
  </div>
  <div class="mz-main">
    <div id="mz-scroll">
      <div class="mz-axle"><i class="mz-rod"></i><i class="mz-band"></i><i class="mz-knot"></i></div>
      <div id="mz-sheet">
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
      </div>
    </div>
    <button id="${SEL.jump}" title="回至卷尾"></button>
    <div id="${SEL.crisis}">
      <img src="${asset("ticket-notice.webp")}" alt="官府朱票">
      <div class="mz-ticket-text"><b></b><div class="mz-sub"></div></div>
    </div>
  </div>
  <div class="mz-rside">
    <div class="mz-plaque">行事</div>
    <div id="${SEL.minimap}" data-lift="舆图">
      <div class="mz-map-wrap"><img src="${asset("map-panorama.webp")}" alt="长安舆图"><div class="mz-map-pin"></div></div>
      <div class="mz-doom"><div class="mz-lbl"><span>灭佛大势</span><b></b></div><div class="mz-bar"><i></i></div>
        <div class="mz-where" data-stat="地界"><span class="mz-w-zone"></span><span class="mz-w-sub"></span></div>
        <div class="mz-storm" data-stat="风波"><span>风波</span><b></b></div></div>
    </div>
    ${ZONE_DEFS.filter((z) => z.side === "r").map(zoneShell).join("")}
    <div id="${SEL.corner}">
      <button data-corner="acu" id="${SEL.acuBtn}" title="数据库">${ICO.db}</button>
      <button data-corner="vars" title="变量">${ICO.vars}</button>
      <button data-corner="exit" title="退出到原生">${ICO.close}</button>
    </div>
  </div>
  <div id="${SEL.mscrim}"></div>
  <div id="${SEL.mbar}">
    <button data-drawer="l"><b>寺况</b></button><i class="mz-sep"></i>
    <button data-drawer="r"><b>行事</b></button><i class="mz-sep"></i>
    <button data-drawer="more"><b>天机</b></button>
  </div>
  <div id="${SEL.mmenu}">
    <button data-menu="vars">${ICO.vars}变量</button>
    <button data-menu="acu">${ICO.db}数据库</button>
    <button data-menu="exit" class="mz-danger">${ICO.close}退出</button>
  </div>
  <div id="${SEL.lift}"><div class="mz-held"><h3 id="${SEL.liftTitle}"></h3><button class="mz-lift-x" title="收窗">${ICO.close}</button><div class="mz-held-body" id="${SEL.liftBody}"></div></div></div>
  `;
  }
  var drawerOpen = null;
  function setDrawer(k) {
    drawerOpen = k;
    const root = doc.getElementById(SHELL_ID);
    if (!root) return;
    const side = root.querySelector(".mz-side"), rside = root.querySelector(".mz-rside");
    if (side) side.classList.toggle("mz-open", k === "l");
    if (rside) rside.classList.toggle("mz-open", k === "r");
    const menu = doc.getElementById(SEL.mmenu);
    if (menu) menu.classList.toggle("mz-open", k === "more");
    root.querySelectorAll("#" + SEL.mbar + " [data-drawer]").forEach((b) => b.classList.toggle("mz-on", b.dataset.drawer === k));
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
    root.dataset.owner = SHELL_TOKEN;
    root.innerHTML = skeletonHtml();
    doc.body.appendChild(root);
    const exit = () => {
      setDrawer(null);
      toggleShell();
    };
    root.querySelectorAll("#" + SEL.corner + " button").forEach((b) => {
      const k = b.dataset.corner;
      if (k === "acu") b.addEventListener("click", () => {
        setDrawer(null);
        openAcuUI();
      });
      else if (k === "vars") b.addEventListener("click", () => {
        setDrawer(null);
        openVarTree();
      });
      else if (k === "exit") b.addEventListener("click", exit);
    });
    root.querySelectorAll(".mz-side [data-lift], .mz-rside [data-lift]").forEach((el) => {
      el.addEventListener("click", () => {
        if (!el.classList.contains("mz-locked")) openLift(el.dataset.lift);
      });
    });
    root.querySelectorAll("#" + SEL.mbar + " [data-drawer]").forEach((b) => {
      b.addEventListener("click", () => toggleDrawer(b.dataset.drawer));
    });
    root.querySelectorAll("#" + SEL.mmenu + " [data-menu]").forEach((b) => {
      const k = b.dataset.menu;
      b.addEventListener("click", () => {
        setDrawer(null);
        if (k === "acu") openAcuUI();
        else if (k === "vars") openVarTree();
        else if (k === "exit") toggleShell();
      });
    });
    doc.getElementById(SEL.mscrim).addEventListener("click", () => setDrawer(null));
    updateAcuNav();
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
  function warmAssets() {
    if (warmed) return;
    warmed = true;
    const w = doc.defaultView;
    const idle = (fn) => w && typeof w.requestIdleCallback === "function" ? w.requestIdleCallback(fn, { timeout: 2e3 }) : setTimeout(fn, 200);
    let i = 0;
    const next = () => {
      if (i >= PRELOAD_ASSETS.length) return;
      const img = doc.createElement("img");
      img.onload = img.onerror = () => idle(next);
      img.src = asset(PRELOAD_ASSETS[i++]);
    };
    idle(next);
  }
  var busy2 = false;
  function fade(root, cls, then) {
    busy2 = true;
    root.classList.add(cls);
    let fired = false;
    const go = () => {
      if (fired) return;
      fired = true;
      root.removeEventListener("animationend", go);
      root.classList.remove(cls);
      busy2 = false;
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
    if (busy2) return;
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
      updateAcuNav();
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
      el.dataset.owner = SHELL_TOKEN;
      doc.body.appendChild(el);
    }
    return el;
  }
  function hideEntry() {
    const el = doc.getElementById(SEL.entry);
    if (el) {
      el.className = "";
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
      el.className = "";
      el.innerHTML = "";
      return;
    }
    el.className = "mz-tab";
    el.innerHTML = `<button class="mz-entry-tab" id="${SEL.entryEnter}" title="入卷 ${CARD_TITLE}"><i>入</i><span>${CARD_TITLE}</span>${ICO.chev}</button>`;
    positionPill();
    const enter = doc.getElementById(SEL.entryEnter);
    if (enter) enter.addEventListener("click", toggleShell);
  }
  function positionPill() {
    const el = doc.getElementById(SEL.entry);
    if (!el || el.className !== "mz-tab") return;
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
  onEvent("mag_variable_update_ended", onVarUpdateEnded);
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
  function clampCrisis(c, left, top) {
    const off = c.parentElement.getBoundingClientRect();
    const w = window.parent.innerWidth, h = window.parent.innerHeight;
    c.style.setProperty("--cx", Math.min(Math.max(left, 4 - off.left), w - off.left - c.offsetWidth - 4) + "px");
    c.style.setProperty("--cy", Math.min(Math.max(top, 4 - off.top), h - off.top - c.offsetHeight - 4) + "px");
  }
  function onCrisisResize() {
    const c = doc.getElementById(SEL.crisis);
    if (!c || !c.classList.contains("mz-moved")) return;
    clampCrisis(c, c.offsetLeft, c.offsetTop);
  }
  function bindCrisisDrag() {
    const c = doc.getElementById(SEL.crisis);
    if (!c || c.dataset.bound) return;
    c.dataset.bound = "1";
    let drag = null;
    const endDrag = () => {
      drag = null;
      c.style.cursor = "";
    };
    c.addEventListener("pointerdown", (e) => {
      drag = { x: e.clientX, y: e.clientY, left: c.offsetLeft, top: c.offsetTop, moved: false };
      c.setPointerCapture(e.pointerId);
    });
    c.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.abs(dx) + Math.abs(dy) <= 4) return;
      drag.moved = true;
      clampCrisis(c, drag.left + dx, drag.top + dy);
      c.classList.add("mz-moved");
      c.style.cursor = "grabbing";
    });
    c.addEventListener("pointerup", endDrag);
    c.addEventListener("pointercancel", endDrag);
    c.addEventListener("lostpointercapture", endDrag);
    try {
      window.parent.addEventListener("resize", onCrisisResize);
    } catch (e) {
      dbg("crisisResize", e);
    }
  }
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
    bindCrisisDrag();
    applyVisibility(prevVisible);
    pollAcu();
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
      window.parent.removeEventListener("resize", onCrisisResize);
      window.parent.removeEventListener("mz-shell-enter", onShellEnter);
      doc.removeEventListener("keydown", onDocKey);
      stopAcuTimers();
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

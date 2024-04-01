let classes = [
    ["10015312", "Interactive English A", 4, 2],
    ["10015313", "Interactive English A", 4, 2],
    ["10015307", "Interactive English A", 4, 2],
    ["10015308", "Interactive English A", 4, 2],
    ["10013414", "Career English Basic", 2, 3],
    ["10013401", "Career English Basic", 2, 3],
    ["10014401", "Career English Basic", 3, 3],
    ["10111504", "アジアの歴史と文化", 0, 4],
    ["10111404", "京都の文学Ⅰ", 0, 3],
    ["10111305", "京都の歴史Ⅰ", 0, 2],
    ["10111409", "医療人類学", 0, 3],
    ["10111403", "日本近代精神史", 0, 3],
    ["10111502", "比較宗教学", 0, 4],
    ["10114501", "禅と世界文化", 3, 4],
    ["10111309", "美と芸術", 0, 2],
    ["10111503", "西洋文学論", 0, 4],
    ["10111311", "認知心理学", 0, 2],
    ["10111507", "こころの科学", 0, 4],
    ["10111412", "プレゼンテーション力とは<br>（リベラルアーツ・ゼミナール）", 0, 3],
    ["10111402", "京の産業技術史", 0, 3],
    ["10311401", "京都学講座（人間と社会）", 0, 3],
    ["10111410", "医療と社会", 0, 3],
    ["10111511", "国際政治", 0, 4],
    ["10111306", "現代京都論", 0, 2],
    ["10111307", "現代教育論", 0, 2],
    ["10111508", "現代社会とジェンダー", 0, 4],
    ["10111501", "現代社会に学ぶ問う力・書く力<br>（リベラルアーツ・ゼミナール）", 0, 4],
    ["10111310", "社会学Ⅰ", 0, 2],
    ["10111513", "食経営学", 0, 4],
    ["10111505", "エネルギー科学", 0, 4],
    ["10111401", "キャンパスヘルス概論", 0, 3],
    ["10111408", "レーザで測る、創る、楽しむ<br>（リベラルアーツ・ゼミナール）", 0, 3],
    ["10111506", "京都の自然", 0, 4],
    ["10311402", "光と色彩のサイエンス", 0, 3],
    ["10111308", "化学概論Ⅰ", 0, 2],
    ["10111304", "物理学Ⅰ", 0, 2],
    ["10111512", "現代科学と倫理", 0, 4],
    ["10111301", "環境問題と持続可能な社会", 0, 2],
    ["10111510", "生物学概論Ⅰ", 0, 4],
    ["10111405", "生物学的人間学", 0, 3],
    ["10111303", "製品の機能から科学を学ぶ<br>（リベラルアーツ・ゼミナール）", 0, 2],
    ["10111407", "食と健康の科学", 0, 3],
    ["10111411", "人と自然と数学αⅠ（1Q）", 0, 3],
    ["10111101", "工芸科学基礎", 0, 0],
    ["10115502", "人権教育", 4, 4],
    ["10113501", "地球環境論", 2, 4],
    ["10115503", "企業金融入門", 4, 4],
    ["10115501", "知的財産経営論(aクラス)", 4, 4],
    ["10113502", "知的財産経営論(bクラス)", 2, 4],
    ["10113202", "スポーツ科学Ⅰ(dクラス)", 2, 1],
    ["10114401", "健康体力科学", 3, 3],
    ["10413306", "ドイツ語ⅠA（初級）", 2, 2],
    ["10413405", "ドイツ語ⅠA（初級）", 2, 3],
    ["10413308", "ドイツ語ⅠA（初級）", 2, 2],
    ["10413406", "ドイツ語ⅠA（初級）", 2, 3],
    ["10414302", "ドイツ語ⅠA（初級）", 3, 2],
    ["10414402", "ドイツ語ⅠA（初級）", 3, 3],
    ["10414501", "ドイツ語ⅠA（初級）", 3, 4],
    ["10415403", "ドイツ語ⅠA（初級）", 4, 3],
    ["10413307", "フランス語ⅠA（初級）", 2, 2],
    ["10413404", "フランス語ⅠA（初級）", 2, 3],
    ["10414401", "フランス語ⅠA（初級）", 3, 3],
    ["10413302", "中国語ⅠA（初級）", 2, 2],
    ["12012101", "情報工学セミナー", 1, 0],
    ["12012301", "情報工学概論", 1, 2],
    ["12015103", "基礎解析Ⅰ", 4, 0],
    ["12013101", "線形代数学Ⅰ", 2, 0],
    ["12015203", "数学演習Ⅰ", 4, 1],
    ["12012501", "物理学Ⅰ", 1, 4],
    ["12015204", "生物学Ⅰ", 4, 1],
    ["12012401", "情報・データリテラシー概論", 1, 3],
]

let timetable = [[[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []]];
let temp = "";

function create_q(data) {
    temp = data.q;
    document.querySelector(".quiz-question").innerHTML = data.title;
    let html = "";
    for (let i = 0; i < data.q.length; i++) {
        if (data.q[i].length == 3) html += '<li><label class="quiz-button"><input onclick="cl2(' + i + ')"><span>' + data.q[i][0] + '</span></label><a href="https://www.syllabus.kit.ac.jp/?c=detail&schedule_code=' + classes[data.q[i][2]][0] + '" target="_blank">↳シラバス</a></li>';
        else html += '<li><label class="quiz-button"><input onclick="cl(' + i + ')"><span>' + data.q[i][0] + '</span></label></li>';
    }
    document.querySelector(".quiz-answer").innerHTML = html;
}

function cl(i) {
    temp[i][1](i);
}

function cl2(i) {
    add(temp[i][2])
    temp[i][1](i);
}

function add(i) {
    let _ = classes[i];
    timetable[_[2]][_[3]] = [_[0], _[1]];
}

function a() {
    let data = {
        title: "情報工学課程B1の時間割の<br>雰囲気を楽しむサイトです",
        q:
            [
                ["OK", b],
            ]
    }
    create_q(data)
}

add(63);
add(64);
add(65);
add(66);
add(67);
add(70);
a();


function b() {
    let data = {
        title: "第二外国語を選択してください",
        q:
            [
                ["中国語", f, 62],
                ["ドイツ語", d],
                ["フランス語", e],
            ]
    }
    create_q(data)
}

function d() {
    let data = {
        title: "ドイツ語の<br>クラス？を選択してください<br>（勝手に振られる？？）<br>（曜日時間はほぼ同じ）",
        q:
            [
                ["e", f, 51],
                ["f", f, 52],
                ["g", f, 53],
                ["h", f, 54],
                ["i", f, 55],
                ["j", f, 56],
                ["k", f, 57],
                ["m", f, 58],
            ]
    }
    create_q(data)
}

function e() {
    let data = {
        title: "フランス語の<br>クラス？を選択してください<br>（勝手に振られる？？）<br>（曜日時間はほぼ同じ）",
        q:
            [
                ["b", f, 59],
                ["c", f, 60],
                ["d", f, 61],
            ]
    }
    create_q(data)
}

function f() {
    let data = {
        title: "Interactive English A<br>のクラス？を選択してください<br>（勝手に振られる？？）<br>（曜日時間はほぼ同じ）",
        q:
            [
                ["p", g, 0],
                ["q", g, 1],
                ["r", g, 2],
                ["s", g, 3],
            ]
    }
    create_q(data)
}

function g() {
    let data = {
        title: "Career English Basic<br>のクラス？を選択してください<br>（勝手に振られる？？）<br>（曜日時間はほぼ同じ）",
        q:
            [
                ["l", h, 4],
                ["m", h, 5],
                ["n", h, 6],
            ]
    }
    create_q(data)
}

function h() {
    let data = {
        title: "月曜3限の基盤教養科目<br>を選択してください",
        q: []
    }
    for (let i = 0; i < classes.length; i++) {
        if (classes[i][2] == 0 && classes[i][3] == 2) data.q.push([classes[i][1], j, i]);
    }
    data.q.push(["選択しない", j])
    create_q(data)
}

function j() {
    let data = {
        title: "月曜4限の基盤教養科目<br>を選択してください",
        q: []
    }
    for (let i = 0; i < classes.length; i++) {
        if (classes[i][2] == 0 && classes[i][3] == 3) data.q.push([classes[i][1], k, i]);
    }
    data.q.push(["選択しない", k])
    create_q(data)
}

function k() {
    let data = {
        title: "月曜5限の基盤教養科目<br>を選択してください",
        q: []
    }
    for (let i = 0; i < classes.length; i++) {
        if (classes[i][2] == 0 && classes[i][3] == 4) data.q.push([classes[i][1], l, i]);
    }
    data.q.push(["選択しない", l])
    create_q(data)
}

function l() {
    let data = {
        title: "専門基礎科目の選択科目？<br>を選択してください<br>（仕組みがわからない）",
        q:
            [
                ["物理学Ⅰ", m, 68],
                ["生物学Ⅰ", m, 69],
                ["選択しない", m]
            ]
    }
    create_q(data)
}

let m_data = [
    ["工芸科学基礎", m2, 43],
    ["人権教育", m2, 44],
    ["地球環境論", m2, 45],
    ["企業金融入門", m2, 46],
    ["知的財産経営論", m3],
    ["スポーツ科学Ⅰ(dクラス)", m2, 49],
    ["健康体力科学", m2, 50],
    ["選択を終了する", n]
]

function m() {
    let data = {
        title: "実践教養科目<br>を選択してください<br>（おそらく目安は2コマ程度）",
        q: m_data
    }
    create_q(data)
}

function m2(i) {
    m_data.splice(i, 1);
    m();
}

function m3() {
    for (let i = 0; i < m_data.length; i++) {
        if (m_data[i][0] == "知的財産経営論") m_data.splice(i, 1)
    }
    let data = {
        title: "クラスを選択してください",
        q:
            [
                ["a", m, 47],
                ["b", m, 48],
            ]
    }
    create_q(data)
}

function n() {
    let data = {
        title: "時間割が完成しました()",
        q:
            [
                ["OK", o],
            ]
    }
    create_q(data)
}

function o() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("table").style.display = "block";
    let new_time = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            new_time.push(timetable[j][i]);
        }
    }
    let td = document.getElementsByTagName("td");
    for (let i = 0; i < td.length; i++) {
        if (new_time[i].length > 0) td[i].innerHTML = '<a href="https://www.syllabus.kit.ac.jp/?c=detail&schedule_code=' + new_time[i][0] + '" target="_blank">' + new_time[i][1] + '</a>';
    }
}
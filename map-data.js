// --- 村莊資料 ---
const rawData = [
    { prov: "中京", pref: "大成", county: "南安", dist: "東樹", id: 1, name: "東田", x: -751, y: -172 },
	{ prov: "中京", pref: "大成", county: "南安", dist: "東樹", id: 2, name: "赤樹", x: -131, y: -254, mapUrl: "maps/TshiahTshiu-map.html" }
	{ prov: "中京", pref: "大成", county: "南安", dist: "東樹", id: 3, name: "中島", x: -1307, y: -343 },
        { prov: "中京", pref: "大成", county: "南安", dist: "澳口", id: 4, name: "中澳", x: -1531, y: -1010 },
        { prov: "中京", pref: "大成", county: "南安", dist: "東樹", id: 5, name: "大田", x: 148, y: 175 },
        { prov: "中京", pref: "大成", county: "南安", dist: "東樹", id: 6, name: "東湖", x: 52, y: 30 },
        { prov: "中京", pref: "大成", county: "南安", dist: "東樹", id: 7, name: "東仁", x: -16, y: 73 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 8, name: "灣內", x: 6259, y: -9041 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 9, name: "埔里", x: 6702, y: -8123 },
        { prov: "中京", pref: "大成", county: "外埔", dist: "大寮", id: 10, name: "劉厝", x: 2792, y: -3493 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 11, name: "島田", x: 8873, y: -9132 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 12, name: "雪田", x: 7533, y: -8616 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 13, name: "白溪", x: 6337, y: -8051 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 14, name: "南圍", x: 5220, y: -7424 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "大豐", id: 15, name: "中港", x: 3275, y: -6124 },
        { prov: "中京", pref: "大成", county: "外埔", dist: "大寮", id: 16, name: "頂庄", x: 2123, y: -3258 },
        { prov: "中京", pref: "大成", county: "外埔", dist: "大寮", id: 17, name: "崎底寮", x: 1068, y: -2705 },
        { prov: "中京", pref: "大成", county: "南安", dist: "海陽", id: 18, name: "中沙", x: 206, y: -1529 },
        { prov: "中京", pref: "大成", county: "南安", dist: "海陽", id: 19, name: "船頭", x: 523, y: -1691 },
        { prov: "中京", pref: "大成", county: "港南", dist: "赤島", id: 20, name: "赤港", x: 5173, y: -3848 },
        { prov: "中京", pref: "大成", county: "港南", dist: "赤島", id: 21, name: "海頭", x: 5012, y: -3851 },
        { prov: "中京", pref: "大成", county: "港南", dist: "赤島", id: 22, name: "山崁", x: 5198, y: -3754 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "海嶼", id: 23, name: "淡海", x: 2021, y: -5127 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "海嶼", id: 24, name: "淡水", x: 1763, y: -5207 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "海嶼", id: 25, name: "高崎", x: 1096, y: -4776 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "海嶼", id: 26, name: "三洲", x: 2104, y: -5737 },
        { prov: "中京", pref: "大成", county: "南安", dist: "海陽", id: 27, name: "山埔", x: -82, y: -1005 },
        { prov: "中京", pref: "大成", county: "南安", dist: "澳口", id: 28, name: "海原", x: -799, y: -1174 },
        { prov: "中京", pref: "大成", county: "南安", dist: "海陽", id: 29, name: "例村", x: 135, y: -1068 },
        { prov: "中京", pref: "大成", county: "外埔", dist: "大寮", id: 30, name: "四合院", x: 2263, y: -3315 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 31, name: "雪頭", x: 5984, y: -7511 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "大豐", id: 32, name: "三明", x: 2114, y: -6354 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "大豐", id: 33, name: "永豐", x: 3162, y: -6582 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "大豐", id: 34, name: "城南", x: 3165, y: -6379 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "大豐", id: 35, name: "新山", x: 3108, y: -6262 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 36, name: "雪原", x: 7002, y: -7587 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "大豐", id: 37, name: "新社", x: 4929, y: -6485 },
        { prov: "中京", pref: "大成", county: "南安", dist: "東樹", id: 38, name: "大樹", x: 13, y: 589 },
        { prov: "中京", pref: "大成", county: "舟山", dist: "大豐", id: 39, name: "郭溪", x: 5298, y: -6043 },
        { prov: "中京", pref: "大成", county: "雪川", dist: "", id: 40, name: "大坑", x: 5412, y: -6864 },
		{ prov: "中京", pref: "大成", county: "雪川", dist: "", id: 41, name: "湖頭", x: 9069, y: -9578 },
		{ prov: "中京", pref: "大成", county: "雪川", dist: "", id: 42, name: "內山", x: 9308, y: -9559 }
        
];

// --- 額外站點 (如轉運站) ---
const extraStations = [
    { name: "漳江轉運站", x: 5650, y: -7480 },
    { name: "大興轉運站", x: 5250, y: -6750 } 
];

// --- 鐵路路線 ---
const railwayRoutesData = {
    completed: [
        "中澳-海原", "中澳-中島", "海原-山埔", "山埔-赤樹", "赤樹-東田", "中島-東田", "東田-赤樹", "赤樹-東湖", "東湖-大田", "大田-大樹",
        "山埔-中沙", "中沙-船頭-崎底寮-頂庄-四合院-劉厝", "劉厝-海頭", "劉厝-淡海-淡水-高崎",
        "淡水-三洲-三明-城南-永豐-新社-南圍-漳江轉運站-雪頭-白溪-埔里-雪田-島田",
        "永豐-城南-新山-中港", "永豐-城南",
        "新社-大興轉運站-漳江轉運站", "大興轉運站-大坑",
        "白溪-灣內", "埔里-雪原"
    ],
    construction: [
        "新社-郭溪"
    ]
};

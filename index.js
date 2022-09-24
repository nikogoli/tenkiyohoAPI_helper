// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const PREFECTURES = [
    "道北",
    "道東",
    "道央",
    "道南",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県"
];
const PREFECTURES_CITIS_IDS = {
    "道北": [
        {
            name: "稚内",
            id: "011000"
        },
        {
            name: "旭川",
            id: "012010"
        },
        {
            name: "留萌",
            id: "012020"
        }
    ],
    "道東": [
        {
            name: "網走",
            id: "013010"
        },
        {
            name: "北見",
            id: "013020"
        },
        {
            name: "紋別",
            id: "013030"
        },
        {
            name: "根室",
            id: "014010"
        },
        {
            name: "釧路",
            id: "014020"
        },
        {
            name: "帯広",
            id: "014030"
        }
    ],
    "道央": [
        {
            name: "札幌",
            id: "016010"
        },
        {
            name: "岩見沢",
            id: "016020"
        },
        {
            name: "倶知安",
            id: "016030"
        }
    ],
    "道南": [
        {
            name: "室蘭",
            id: "015010"
        },
        {
            name: "浦河",
            id: "015020"
        },
        {
            name: "函館",
            id: "017010"
        },
        {
            name: "江差",
            id: "017020"
        }
    ],
    "青森県": [
        {
            name: "青森",
            id: "020010"
        },
        {
            name: "むつ",
            id: "020020"
        },
        {
            name: "八戸",
            id: "020030"
        }
    ],
    "岩手県": [
        {
            name: "盛岡",
            id: "030010"
        },
        {
            name: "宮古",
            id: "030020"
        },
        {
            name: "大船渡",
            id: "030030"
        }
    ],
    "宮城県": [
        {
            name: "仙台",
            id: "040010"
        },
        {
            name: "白石",
            id: "040020"
        }
    ],
    "秋田県": [
        {
            name: "秋田",
            id: "050010"
        },
        {
            name: "横手",
            id: "050020"
        }
    ],
    "山形県": [
        {
            name: "山形",
            id: "060010"
        },
        {
            name: "米沢",
            id: "060020"
        },
        {
            name: "酒田",
            id: "060030"
        },
        {
            name: "新庄",
            id: "060040"
        }
    ],
    "福島県": [
        {
            name: "福島",
            id: "070010"
        },
        {
            name: "小名浜",
            id: "070020"
        },
        {
            name: "若松",
            id: "070030"
        }
    ],
    "茨城県": [
        {
            name: "水戸",
            id: "080010"
        },
        {
            name: "土浦",
            id: "080020"
        }
    ],
    "栃木県": [
        {
            name: "宇都宮",
            id: "090010"
        },
        {
            name: "大田原",
            id: "090020"
        }
    ],
    "群馬県": [
        {
            name: "前橋",
            id: "100010"
        },
        {
            name: "みなかみ",
            id: "100020"
        }
    ],
    "埼玉県": [
        {
            name: "さいたま",
            id: "110010"
        },
        {
            name: "熊谷",
            id: "110020"
        },
        {
            name: "秩父",
            id: "110030"
        }
    ],
    "千葉県": [
        {
            name: "千葉",
            id: "120010"
        },
        {
            name: "銚子",
            id: "120020"
        },
        {
            name: "館山",
            id: "120030"
        }
    ],
    "東京都": [
        {
            name: "東京",
            id: "130010"
        },
        {
            name: "大島",
            id: "130020"
        },
        {
            name: "八丈島",
            id: "130030"
        },
        {
            name: "父島",
            id: "130040"
        }
    ],
    "神奈川県": [
        {
            name: "横浜",
            id: "140010"
        },
        {
            name: "小田原",
            id: "140020"
        }
    ],
    "新潟県": [
        {
            name: "新潟",
            id: "150010"
        },
        {
            name: "長岡",
            id: "150020"
        },
        {
            name: "高田",
            id: "150030"
        },
        {
            name: "相川",
            id: "150040"
        }
    ],
    "富山県": [
        {
            name: "富山",
            id: "160010"
        },
        {
            name: "伏木",
            id: "160020"
        }
    ],
    "石川県": [
        {
            name: "金沢",
            id: "170010"
        },
        {
            name: "輪島",
            id: "170020"
        }
    ],
    "福井県": [
        {
            name: "福井",
            id: "180010"
        },
        {
            name: "敦賀",
            id: "180020"
        }
    ],
    "山梨県": [
        {
            name: "甲府",
            id: "190010"
        },
        {
            name: "河口湖",
            id: "190020"
        }
    ],
    "長野県": [
        {
            name: "長野",
            id: "200010"
        },
        {
            name: "松本",
            id: "200020"
        },
        {
            name: "飯田",
            id: "200030"
        }
    ],
    "岐阜県": [
        {
            name: "岐阜",
            id: "210010"
        },
        {
            name: "高山",
            id: "210020"
        }
    ],
    "静岡県": [
        {
            name: "静岡",
            id: "220010"
        },
        {
            name: "網代",
            id: "220020"
        },
        {
            name: "三島",
            id: "220030"
        },
        {
            name: "浜松",
            id: "220040"
        }
    ],
    "愛知県": [
        {
            name: "名古屋",
            id: "230010"
        },
        {
            name: "豊橋",
            id: "230020"
        }
    ],
    "三重県": [
        {
            name: "津",
            id: "240010"
        },
        {
            name: "尾鷲",
            id: "240020"
        }
    ],
    "滋賀県": [
        {
            name: "大津",
            id: "250010"
        },
        {
            name: "彦根",
            id: "250020"
        }
    ],
    "京都府": [
        {
            name: "京都",
            id: "260010"
        },
        {
            name: "舞鶴",
            id: "260020"
        }
    ],
    "大阪府": [
        {
            name: "大阪",
            id: "270000"
        }
    ],
    "兵庫県": [
        {
            name: "神戸",
            id: "280010"
        },
        {
            name: "豊岡",
            id: "280020"
        }
    ],
    "奈良県": [
        {
            name: "奈良",
            id: "290010"
        },
        {
            name: "風屋",
            id: "290020"
        }
    ],
    "和歌山県": [
        {
            name: "和歌山",
            id: "300010"
        },
        {
            name: "潮岬",
            id: "300020"
        }
    ],
    "鳥取県": [
        {
            name: "鳥取",
            id: "310010"
        },
        {
            name: "米子",
            id: "310020"
        }
    ],
    "島根県": [
        {
            name: "松江",
            id: "320010"
        },
        {
            name: "浜田",
            id: "320020"
        },
        {
            name: "西郷",
            id: "320030"
        }
    ],
    "岡山県": [
        {
            name: "岡山",
            id: "330010"
        },
        {
            name: "津山",
            id: "330020"
        }
    ],
    "広島県": [
        {
            name: "広島",
            id: "340010"
        },
        {
            name: "庄原",
            id: "340020"
        }
    ],
    "山口県": [
        {
            name: "下関",
            id: "350010"
        },
        {
            name: "山口",
            id: "350020"
        },
        {
            name: "柳井",
            id: "350030"
        },
        {
            name: "萩",
            id: "350040"
        }
    ],
    "徳島県": [
        {
            name: "徳島",
            id: "360010"
        },
        {
            name: "日和佐",
            id: "360020"
        }
    ],
    "香川県": [
        {
            name: "高松",
            id: "370000"
        }
    ],
    "愛媛県": [
        {
            name: "松山",
            id: "380010"
        },
        {
            name: "新居浜",
            id: "380020"
        },
        {
            name: "宇和島",
            id: "380030"
        }
    ],
    "高知県": [
        {
            name: "高知",
            id: "390010"
        },
        {
            name: "室戸岬",
            id: "390020"
        },
        {
            name: "清水",
            id: "390030"
        }
    ],
    "福岡県": [
        {
            name: "福岡",
            id: "400010"
        },
        {
            name: "八幡",
            id: "400020"
        },
        {
            name: "飯塚",
            id: "400030"
        },
        {
            name: "久留米",
            id: "400040"
        }
    ],
    "佐賀県": [
        {
            name: "佐賀",
            id: "410010"
        },
        {
            name: "伊万里",
            id: "410020"
        }
    ],
    "長崎県": [
        {
            name: "長崎",
            id: "420010"
        },
        {
            name: "佐世保",
            id: "420020"
        },
        {
            name: "厳原",
            id: "420030"
        },
        {
            name: "福江",
            id: "420040"
        }
    ],
    "熊本県": [
        {
            name: "熊本",
            id: "430010"
        },
        {
            name: "阿蘇乙姫",
            id: "430020"
        },
        {
            name: "牛深",
            id: "430030"
        },
        {
            name: "人吉",
            id: "430040"
        }
    ],
    "大分県": [
        {
            name: "大分",
            id: "440010"
        },
        {
            name: "中津",
            id: "440020"
        },
        {
            name: "日田",
            id: "440030"
        },
        {
            name: "佐伯",
            id: "440040"
        }
    ],
    "宮崎県": [
        {
            name: "宮崎",
            id: "450010"
        },
        {
            name: "延岡",
            id: "450020"
        },
        {
            name: "都城",
            id: "450030"
        },
        {
            name: "高千穂",
            id: "450040"
        }
    ],
    "鹿児島県": [
        {
            name: "鹿児島",
            id: "460010"
        },
        {
            name: "鹿屋",
            id: "460020"
        },
        {
            name: "種子島",
            id: "460030"
        },
        {
            name: "名瀬",
            id: "460040"
        }
    ],
    "沖縄県": [
        {
            name: "那覇",
            id: "471010"
        },
        {
            name: "名護",
            id: "471020"
        },
        {
            name: "久米島",
            id: "471030"
        },
        {
            name: "南大東",
            id: "472000"
        },
        {
            name: "宮古島",
            id: "473000"
        },
        {
            name: "石垣島",
            id: "474010"
        },
        {
            name: "与那国島",
            id: "474020"
        }
    ]
};
const BASE_URL = "https://weather.tsukumijima.net/api/forecast";
const COPYRIGHT = {
    title: " (C) 天気予報 API（livedoor 天気互換）",
    link: "https://weather.tsukumijima.net/",
    image: {
        title: "天気予報 API（livedoor 天気互換）",
        link: "https://weather.tsukumijima.net/",
        url: "https://weather.tsukumijima.net/logo.png",
        width: 120,
        height: 120
    },
    provider: {
        link: "https://www.jma.go.jp/jma/",
        name: "気象庁 Japan Meteorological Agency",
        note: "気象庁 HP にて配信されている天気予報を JSON データへ編集しています。"
    }
};
export { BASE_URL as BASE_URL, COPYRIGHT as COPYRIGHT, PREFECTURES as PREFECTURES, PREFECTURES_CITIS_IDS as PREFECTURES_CITIS_IDS,  };
function isProfecture(name) {
    return PREFECTURES.find((p)=>p == name) !== undefined;
}
function Convert_data(data) {
    const { forecasts , publicTime , publicTimeFormatted , publishingOffice , title , link , description , location , copyright  } = data;
    const today = forecasts.find((dat)=>dat.dateLabel == "今日") ?? forecasts[0];
    const tomorrow = forecasts.find((dat)=>dat.dateLabel == "明日") ?? forecasts[1];
    const dayAfterTomorrow = forecasts.find((dat)=>dat.dateLabel == "明後日") ?? forecasts[2];
    return {
        publicTime,
        publicTimeFormatted,
        publishingOffice,
        title,
        link,
        description,
        location,
        copyright,
        today: today,
        tomorrow: tomorrow,
        dayAfterTomorrow: dayAfterTomorrow
    };
}
function Arrange_data(data) {
    const { publicTimeFormatted , publishingOffice , title , link , location  } = data;
    const { text  } = data.description;
    const forecastedTimeFormatted = data.description.publicTimeFormatted;
    const [publicTimeData, forecastedTimeData] = [
        publicTimeFormatted,
        forecastedTimeFormatted
    ].map((tx)=>{
        const [date, time] = tx.split(" ");
        const [year, month, day] = date.split("/").map((t)=>Number(t));
        const [hour, minute, second] = time.split(":").map((t)=>Number(t));
        return {
            year,
            month,
            day,
            hour,
            minute,
            second
        };
    });
    const named = {
        today: undefined,
        tomorrow: undefined,
        dayAfterTomorrow: undefined
    };
    data.forecasts.forEach((dat)=>{
        const label = dat.dateLabel == "今日" ? "today" : dat.dateLabel == "明日" ? "tomorrow" : "dayAfterTomorrow";
        const [year, month, day] = dat.date.split("-").map((t)=>Number(t));
        const date = {
            year,
            month,
            day
        };
        const temperature = {
            min: Number(dat.temperature.min.celsius),
            max: Number(dat.temperature.max.celsius)
        };
        const [T00_06, T06_12, T12_18, T18_24] = [
            ...Object.keys(dat.chanceOfRain)
        ].map((v)=>v == "--%" ? null : Number(v.slice(0, -1)));
        const chanceOfRain = {
            T00_06,
            T06_12,
            T12_18,
            T18_24
        };
        named[label] = {
            ...dat,
            date,
            temperature,
            chanceOfRain
        };
    });
    const today = named.today ?? named.dayAfterTomorrow;
    const tomorrow = named.tomorrow ?? named.dayAfterTomorrow;
    const dayAfterTomorrow = named.dayAfterTomorrow;
    return {
        publicTimeFormatted,
        publicTimeData,
        publishingOffice,
        forecastedTimeFormatted,
        forecastedTimeData,
        title,
        link,
        text,
        location,
        today: today,
        tomorrow: tomorrow,
        dayAfterTomorrow: dayAfterTomorrow
    };
}
function Minify_data(data) {
    const { title , link , location  } = data;
    const [raw_date, raw_time] = data.publicTimeFormatted.split(" ");
    const [year, month, day] = raw_date.split("/").map((t)=>Number(t));
    const [hour, minute, second] = raw_time.split(":").map((t)=>Number(t));
    const date = `${year}年${month}月${day}日`;
    const time = `${hour}時${String(minute).length > 1 ? minute : +"0" + String(minute)}分`;
    const dateData = {
        year,
        month,
        day,
        hour,
        minute,
        second
    };
    const named = {
        today: undefined,
        tomorrow: undefined,
        dayAfterTomorrow: undefined
    };
    data.forecasts.forEach((dat)=>{
        const label = dat.dateLabel == "今日" ? "today" : dat.dateLabel == "明日" ? "tomorrow" : "dayAfterTomorrow";
        const [year, month, day] = dat.date.split("-").map((t)=>Number(t));
        const { dateLabel , telop  } = dat;
        const detail_weather = dat.detail.weather;
        const [raw_min, raw_max] = [
            dat.temperature.min.celsius,
            dat.temperature.max.celsius
        ];
        const temperature_min = raw_min === null ? null : Number(raw_min);
        const temperature_max = raw_max === null ? null : Number(raw_max);
        const [raw_rain_bf, raw_rain_af] = [
            dat.chanceOfRain.T06_12,
            dat.chanceOfRain.T12_18
        ];
        const chanceOfRain_beforenoon = raw_rain_bf == "--%" ? null : Number(raw_rain_bf.slice(0, -1));
        const chanceOfRain_afternoon = raw_rain_af == "--%" ? null : Number(raw_rain_bf.slice(0, -1));
        const [image_title, image_url] = [
            dat.image.title,
            dat.image.url
        ];
        named[label] = {
            year,
            month,
            day,
            dateLabel,
            telop,
            detail_weather,
            temperature_min,
            temperature_max,
            chanceOfRain_beforenoon,
            chanceOfRain_afternoon,
            image_title,
            image_url
        };
    });
    const today = named.today ?? named.dayAfterTomorrow;
    const tomorrow = named.tomorrow ?? named.dayAfterTomorrow;
    const dayAfterTomorrow = named.dayAfterTomorrow;
    return {
        date,
        time,
        dateData,
        title,
        link,
        location,
        today: today,
        tomorrow: tomorrow,
        dayAfterTomorrow: dayAfterTomorrow
    };
}
async function Wrapped_fetch(url) {
    return await fetch(url).then((res)=>res.json()).then((j_data)=>{
        return {
            ok: true,
            data: j_data
        };
    }).catch((_er)=>{
        return {
            ok: false,
            message: "fetch failed"
        };
    });
}
async function Fetch_data(city_data, list, type) {
    const fetched = await Wrapped_fetch(`${BASE_URL}?city=${city_data.id}`);
    if (fetched.ok) {
        const data = type == "arranged" ? Arrange_data(fetched.data) : type == "minified" ? Minify_data(fetched.data) : Convert_data(fetched.data);
        list.push({
            city_name: city_data.name,
            ok: true,
            result: data
        });
    } else {
        list.push({
            city_name: city_data.name,
            ...fetched
        });
    }
}
async function Get_weather_forecast(props) {
    const { name , data_type , only_main  } = props;
    if (isProfecture(name)) {
        const cities = only_main == true ? [
            PREFECTURES_CITIS_IDS[name][0]
        ] : [
            ...PREFECTURES_CITIS_IDS[name]
        ];
        const output = [];
        await cities.reduce((pre, dat)=>{
            return pre.then(async ()=>await Fetch_data(dat, output, data_type ?? "arranged"));
        }, Promise.resolve());
        return {
            data: output,
            copyright: COPYRIGHT
        };
    } else {
        throw new Error("invalid prefecture name");
    }
}
export { Convert_data as Convert_data, Arrange_data as Arrange_data, Minify_data as Minify_data, Wrapped_fetch as Wrapped_fetch, Fetch_data as Fetch_data, Get_weather_forecast as Get_weather_forecast };

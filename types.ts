import {
  PREFECTURES,
  PREFECTURES_CITIS_IDS,
  COPYRIGHT,
} from "./mod.ts"


type DateLabelDic =  {today:"今日", tomorrow:"明日", dayAfterTomorrow:"明後日"}
export type DateLabel = keyof DateLabelDic


export type RawAPIReturn = {
  publicTime: string | "yyyy-mm-ddThh:mm:ss+09:00", // yyyy-mm-ddThh:mm:ss+09:00
  publicTimeFormatted: string | "yyyy/mm/dd hh:mm:ss", // yyyy/mm/dd hh:mm:ss
  publishingOffice: string, // 気象台名
  title: string | "〇〇県 ◇◇ の天気", // "〇〇県 ◇◇ の天気"
  link: string, // "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=****"
  description:{
    publicTime: string | "yyyy-mm-ddThh:mm:ss+09:00", // yyyy-mm-ddThh:mm:ss+09:00
    publicTimeFormatted: string | "yyyy/mm/dd hh:mm:ss", // yyyy/mm/dd hh:mm:ss
    headlineText: string | "", // "" (警報用？)
    bodyText: string, // 予報の内容
    text: string // 予報の内容(同上？)
  },
  forecasts: Array<{
    date: string | "yyyy-mm-dd", // yyyy-mm-dd
    dateLabel: "今日" | "明日" | "明後日",
    telop: string, // 一言天気 (晴れ、曇のち雨 など)
    detail:{
      weather: string, // 一言+α天気 (くもり　所により　雨 など)
      wind: string, // 風向き
      wave: string | null // 波 (３メートル　後　２．５メートル など) 内陸では null
    },
    temperature:{
      min:{ // 最低気温 「今日」の場合は null がありうる
        celsius: null | string,
        fahrenheit: null | string
      },
      max:{ // 最高気温 「今日」の場合は null がありうる
        celsius: null | string,
        fahrenheit: null | string
      }
    },
    chanceOfRain:{ // 降水確率 "\d\d%"形式 経過分は "--%"
      T00_06: string,
      T06_12: string,
      T12_18: string,
      T18_24: string
    },
    image:{
      title: string, // telop と同じ？
      url: string, // "https://www.jma.go.jp/bosai/forecast/img/*****.svg" ファイル名は3桁数字？
      width: 80, // 固定？
      height: 60 // 固定？
    }
  }>,
  location: {
    area: string, // 地方名
    prefecture: string, // 都道府県名
    district: string, // 都道府県内での都市の位置 (南部、西部 など)
    city: string // 都市名
  },
  copyright: {
    title:" (C) 天気予報 API（livedoor 天気互換）",
    link: "https://weather.tsukumijima.net/",
    image:{
      title: "天気予報 API（livedoor 天気互換）",
      link: "https://weather.tsukumijima.net/",
      url: "https://weather.tsukumijima.net/logo.png",
      width: 120,
      height: 120
    },
    provider: Array<
      {
        link: "https://www.jma.go.jp/jma/",
        name: "気象庁 Japan Meteorological Agency",
        note: "気象庁 HP にて配信されている天気予報を JSON データへ編集しています。"
      }
    >
  }
}


export type BaseAPIReturn = {
  publicTime: string | "yyyy-mm-ddThh:mm:ss+09:00", // yyyy-mm-ddThh:mm:ss+09:00
  publicTimeFormatted: string | "yyyy/mm/dd hh:mm:ss", // yyyy/mm/dd hh:mm:ss
  publishingOffice: string, // 気象台名
  title: string | "〇〇県 ◇◇ の天気", // "〇〇県 ◇◇ の天気"
  link: string, // "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=****"
  description:{
    publicTime: string | "yyyy-mm-ddThh:mm:ss+09:00", // yyyy-mm-ddThh:mm:ss+09:00
    publicTimeFormatted: string | "yyyy/mm/dd hh:mm:ss", // yyyy/mm/dd hh:mm:ss
    headlineText: string | "", // "" (警報用？)
    bodyText: string, // 予報の内容
    text: string // 予報の内容(同上？)
  },
  location: {
    area: string, // 地方名
    prefecture: string, // 都道府県名
    district: string, // 都道府県内での都市の位置 (南部、西部 など)
    city: string // 都市名
  },
  copyright: {
    title:" (C) 天気予報 API（livedoor 天気互換）",
    link: "https://weather.tsukumijima.net/",
    image:{
      title: "天気予報 API（livedoor 天気互換）",
      link: "https://weather.tsukumijima.net/",
      url: "https://weather.tsukumijima.net/logo.png",
      width: 120,
      height: 120
    },
    provider: Array<
      {
        link: "https://www.jma.go.jp/jma/",
        name: "気象庁 Japan Meteorological Agency",
        note: "気象庁 HP にて配信されている天気予報を JSON データへ編集しています。"
      }
    >
  }
} & {
  [label in DateLabel]: {
    date: string | "yyyy-mm-dd", // yyyy-mm-dd
    dateLabel: DateLabelDic[label],
    telop: string, // 一言天気 (晴れ、曇のち雨 など)
    detail:{
      weather: string, // 一言+α天気 (くもり　所により　雨 など)
      wind: string, // 風向き
      wave: string | null // 波 (３メートル　後　２．５メートル など) 内陸では null
    },
    temperature:{
      min:{ // 最低気温 「今日」の場合は null がありうる
        celsius: null | string,
        fahrenheit: null | string
      },
      max:{ // 最高気温 「今日」の場合は null がありうる
        celsius: null | string,
        fahrenheit: null | string
      }
    },
    chanceOfRain:{ // 降水確率 "\d\d%"形式 経過分は "--%"
      T00_06: string,
      T06_12: string,
      T12_18: string,
      T18_24: string
    },
    image:{
      title: string, // telop と同じ？
      url: string, // "https://www.jma.go.jp/bosai/forecast/img/*****.svg" ファイル名は3桁数字？
      width: 80, // 固定？
      height: 60 // 固定？
    }
  }
}


export type ArrangedAPIReturn = {
    publicTimeFormatted: string | "yyyy/mm/dd hh:mm:ss", // yyyy/mm/dd hh:mm:ss
    publicTimeData: { // 発表年月日時刻
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        second: number
    },
    forecastedTimeFormatted: string | "yyyy/mm/dd hh:mm:ss", // yyyy/mm/dd hh:mm:ss
    forecastedTimeData: { // 予報作成年月日時刻
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        second: number
    },
    publishingOffice: string, // 気象台名
    title: string | "〇〇県 ◇◇ の天気", // "〇〇県 ◇◇ の天気"
    link: string, // "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=****"
    text: string, // 予報の内容
    location: {
        area: string, // 地方名
        prefecture: string, // 都道府県名
        district: string, // 都道府県内での都市の位置 (南部、西部 など)
        city: string // 都市名
    },
} & {
  [label in DateLabel]: {
    date: {
        year: number,
        month: number,
        day: number
    }
    dateLabel: DateLabelDic[label],
    telop: string, // 一言天気 (晴れ、曇のち雨 など)
    detail: {
        weather: string, // 一言+α天気 (くもり　所により　雨 など)
        wind: string, // 風向き
        wave: string | null // 波 (３メートル　後　２．５メートル など) 内陸では null,
    },
    temperature: { // 最低・最高気温 「今日」の場合は null の可能性あり
        min: number | null,
        max: number | null
    },
    chanceOfRain:{ // 降水確率 経過分は null
        T00_06: number | null,
        T06_12: number | null,
        T12_18: number | null,
        T18_24: number | null
    },
    image:{
        title: string, // telop と同じ？
        url: string, // "https://www.jma.go.jp/bosai/forecast/img/*****.svg"
        width: 80,
        height: 60
    }
  }
}


export type MinifiedAPIReturn = {
    date: string | "yyyy年mm月dd日", // 発表年月日
    time: string | "hh時mm分", // 発表時刻
    dateData: { // 発表年月日時刻
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        second: number
    },
    title: string| "〇〇県 ◇◇ の天気", //
    link: string, // "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=****"
    location: {
      area: string, // 地方名
      prefecture: string, // 都道府県名
      district: string, // 都道府県内での都市の位置 (南部、西部 など)
      city: string // 都市名
    },
} & {
  [label in DateLabel]: {
    year: number,
    month: number,
    day: number
    dateLabel: DateLabelDic[label],
    telop: string, // 一言天気 (晴れ、曇のち雨 など)
    detail_weather: string, // 一言+α天気 (くもり　所により　雨 など)
    temperature_min: number | null, // 最低気温 「今日」の場合は null の可能性あり
    temperature_max: number | null, // 最高気温 同上
    chanceOfRain_beforenoon: number | null, // 6時から12時までの降水確率 経過済みなら null
    chanceOfRain_afternoon: number | null, // 12時から18時までの降水確率 経過済みなら null
    image_title: string, // telop と同じ？
    image_url: string // "https://www.jma.go.jp/bosai/forecast/img/*****.svg"
  }
}


export type ResultType<T> = {
    ok: true,
    data: T
} | {
    ok: false,
    message: string
}


export type FetchedDataList = Array<{
  city_name: string,
  ok: true,
  result: BaseAPIReturn|ArrangedAPIReturn|MinifiedAPIReturn,
} | {
  city_name: string,
  ok: false,
  message: string,
}>


export type ProfectureNames = typeof PREFECTURES[number]


export type CityNames<T extends ProfectureNames> = typeof PREFECTURES_CITIS_IDS[T][number]["name"]
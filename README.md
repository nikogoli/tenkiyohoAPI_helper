# 天気予報 API（livedoor 天気互換）ヘルパー (typescript)
fetch で 天気予報 API（livedoor 天気互換）からデータを取得するためのヘルパー
 
## usage
```ts
import { Get_weather_forecast } from "https://pax.deno.dev/nikogoli/tenkiyohoAPI_helper/mod.ts"

const { data, copyright } = await Get_weather_forecast({
  name: "神奈川県",
  data_type: "minified", // "arranged" (default) | "minified" | "original"
  only_main: false // true の場合、主要都市(≒県庁所在地) のデータのみ取得
})

/*
data = [
  {"city_name":"横浜", "ok":true, "result":{
    "date":"2022年9月23日",
    "time":"17時00分",
    "dateData":{
      "year":2022, "month":9, "day":23,
      "hour":17, "minute":0, "second":0
    },
    "title":"神奈川県 横浜 の天気",
    "link":"https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=140000",
    "location":{
      "area":"関東",
      "prefecture":"神奈川県",
      "district":"東部",
      "city":"横浜"
    },
    "today":{
      "year":2022, "month":9, "day":23,
      "dateLabel":"今日",
      "telop":"雨",
      "detail_weather":"雨　所により　夜遅く　雷を伴い　激しく　降る",
      "temperature_min":null,
      "temperature_max":null,
      "chanceOfRain_beforenoon":null,
      "chanceOfRain_afternoon":null,
      "image_title":"雨",
      "image_url":"https://www.jma.go.jp/bosai/forecast/img/300.svg"
	},
	"tomorrow":{
      "year":2022, "month":9, "day":24,
      "dateLabel":"明日",
      "telop":"雨時々止む",
      "detail_weather":"雨　昼過ぎ　から　時々　くもり　所により　昼過ぎ　まで　雷を伴い　激しく　降る",
      "temperature_min":23,
      "temperature_max":28,
      "chanceOfRain_beforenoon":60,
      "chanceOfRain_afternoon":60,
      "image_title":"雨時々止む",
      "image_url":"https://www.jma.go.jp/bosai/forecast/img/302.svg"
    },
	"dayAfterTomorrow":{
      "year":2022, "month":9, "day":25,
      "dateLabel":"明後日",
      ...
	}
  }},
  {"city_name":"小田原", "ok":true, "result":{
    ...
  }}
] */
```

API から取得されたデータの権利は全て 天気予報 API（livedoor 天気互換）に帰属する

[(C) 天気予報 API（livedoor 天気互換）](https://weather.tsukumijima.net/)
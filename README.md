# 天気予報 API（livedoor 天気互換）ヘルパー
fetch で 天気予報 API（livedoor 天気互換）からデータを取得するためのヘルパー (typescript)
 
## Usage
```ts
import { Get_weather_forecast } from "https://pax.deno.dev/nikogoli/tenkiyohoAPI_helper/mod.ts"

const { data, copyright } = await Get_weather_forecast({
  name: "神奈川県",
  data_type: "minified", // "arranged" (default) | "minified" | "original"
  only_main: false // true の場合、主要都市(≒県庁所在地) のデータのみ取得
})
```
あるいは
```ts
import {
  BASE_URL,
  COPYRIGHT,
  PREFECTURES_CITIS_IDS,
  Minify_data,
  type RawAPIReturn,
  type MinifiedAPIReturn
} from "https://pax.deno.dev/nikogoli/tenkiyohoAPI_helper/mod.ts"

const name = "神奈川県"
const cities = PREFECTURES_CITIS_IDS[name]

const data: Array<{city_name:string, result:MinifiedAPIReturn} | typeof COPYRIGHT> = [ COPYRIGHT ]

await cities.reduce( (pre, {name, id}) => {
  return pre.then( async () => {
    await fetch(`${BASE_URL}?city=${id}`)
    .then( res => res.json() )
    .then( jdata => Minify_data(jdata as RawAPIReturn) )
    .then( minified => data.push({city_name: name, result: minified}) )
  })
}, Promise.resolve() ) 

console.log(data)
```


<details>
<summary>結果</summary>

```ts
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
]
```
</details>

## Functions
```ts
// data.forecasts を today, tomorrow, dayAfterTomorrow に分解して flat 化する
Convert_data: (data: RawAPIReturn) => BaseAPIReturn

// Convert_data() + 華氏気温の省略などデータを扱いやすいように少し調整する
Arrange_data: (data: RawAPIReturn) => ArrangedAPIReturn

// Convert_data() + 風向き・波高・深夜の降水確率など一部のデータを省略して簡素化する
Minify_data: (data: RawAPIReturn) =>  MinifiedAPIReturn

//fetch の wrapperで、fetch の結果に型を付けるだけ
Wrapped_fetch: (url: string) => Promise<ResultType<RawAPIReturn>>

// 本体。 URL作成 → Wrapped_fetch → データ変換 → 引数で渡した list に結果を追加
Fetch_data: (city_data: { name: string, id: string}, list: FetchedDataList, type: "arranged" | "original" | "minified") => Promise<void>

// name が適切かどうか判定 → 都市データ取得 → list 作成 → 都市データごとに Fetch_data
Get_weather_forecast: ({ name: string, data_type?: "arranged" | "original" | "minified", only_main?: boolean }) => Promise<{data: FetchedDataList, copyright: typeof COPYRIGHT}>
````

----

API から取得されたデータの権利は全て 天気予報 API（livedoor 天気互換）に帰属する

[(C) 天気予報 API（livedoor 天気互換）](https://weather.tsukumijima.net/)
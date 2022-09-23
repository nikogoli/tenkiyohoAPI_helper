import {
    BASE_URL,
    COPYRIGHT,
    PREFECTURES,
    PREFECTURES_CITIS_IDS,

    ArrangedAPIReturn,
    BaseAPIReturn,
    FetchedDataList,
    MinifiedAPIReturn,
    ProfectureNames,
    RawAPIReturn,
} from "./mod.ts"
import {
    DateLabel,
    ResultType,
} from "./types.ts"


function isProfecture(name: string): name is ProfectureNames {
    return PREFECTURES.find( p => p == name) !== undefined
}


function Convert_data(
    data: RawAPIReturn
): BaseAPIReturn{
    const {
        forecasts, publicTime, publicTimeFormatted, publishingOffice,
        title, link, description, location, copyright
    } = data
    const today = forecasts.find( dat => dat.dateLabel == "今日") ?? forecasts[0]
    const tomorrow = forecasts.find( dat => dat.dateLabel == "明日") ?? forecasts[1]
    const dayAfterTomorrow = forecasts.find( dat => dat.dateLabel == "明後日") ?? forecasts[2]
    return {
        publicTime, publicTimeFormatted, publishingOffice,
        title, link, description, location, copyright,
        today: today as BaseAPIReturn["today"],
        tomorrow: tomorrow as BaseAPIReturn["tomorrow"],
        dayAfterTomorrow: dayAfterTomorrow as BaseAPIReturn["dayAfterTomorrow"]
    }
}


function Arrange_data(
    data: RawAPIReturn
): ArrangedAPIReturn{
    const { publicTimeFormatted,
        publishingOffice,
        title,
        link,
        location
     } = data
    const { text } = data.description
    const forecastedTimeFormatted = data.description.publicTimeFormatted
    const [ publicTimeData, forecastedTimeData ] = [publicTimeFormatted, forecastedTimeFormatted].map(tx => {
        const [date, time] = tx.split(" ")
        const [ year, month, day ] = date.split("/").map(t => Number(t))
        const [ hour, minute, second ] = time.split(":").map(t => Number(t))
        return { year, month, day, hour, minute, second }
    })
    const named: Record<DateLabel, undefined|ArrangedAPIReturn[DateLabel]> = {today: undefined, tomorrow: undefined, dayAfterTomorrow: undefined}
    data.forecasts.forEach(dat => {
        const label = (dat.dateLabel == "今日") ? "today"
            :  (dat.dateLabel == "明日") ? "tomorrow" : "dayAfterTomorrow"
        const [year, month, day] = dat.date.split("-").map(t => Number(t))
        const date = { year, month, day }
        const temperature = {
            min: Number(dat.temperature.min.celsius),
            max: Number(dat.temperature.max.celsius)
        }
        const [ T00_06, T06_12, T12_18, T18_24 ] = [...Object.keys(dat.chanceOfRain)]
                .map(v => (v == "--%") ? null : Number(v.slice(0,-1)))
        const chanceOfRain = { T00_06, T06_12, T12_18, T18_24 }
        named[label] = { ...dat, date, temperature, chanceOfRain }
    })
    const today = named.today ?? named.dayAfterTomorrow
    const tomorrow = named.tomorrow ?? named.dayAfterTomorrow
    const dayAfterTomorrow = named.dayAfterTomorrow
    return {
        publicTimeFormatted,
        publicTimeData,
        publishingOffice,
        forecastedTimeFormatted,
        forecastedTimeData,
        title, link, text, location,
        today: today as ArrangedAPIReturn["today"],
        tomorrow: tomorrow as ArrangedAPIReturn["tomorrow"],
        dayAfterTomorrow: dayAfterTomorrow as ArrangedAPIReturn["dayAfterTomorrow"]
    }
}


function Minify_data(
    data: RawAPIReturn
): MinifiedAPIReturn {
    const { title, link, location } = data
    const [ raw_date, raw_time] = data.publicTimeFormatted.split(" ")
    const [ year, month, day ] = raw_date.split("/").map(t => Number(t))
    const [ hour, minute, second ] = raw_time.split(":").map(t => Number(t))
    const date = `${year}年${month}月${day}日`
    const time = `${hour}時${(String(minute).length > 1) ? minute : +"0"+String(minute)}分`
    const dateData = { year, month, day, hour, minute, second }

    const named: Record<DateLabel, undefined|MinifiedAPIReturn[DateLabel]> = {today: undefined, tomorrow: undefined, dayAfterTomorrow: undefined}
    data.forecasts.forEach( dat => {
        const label = (dat.dateLabel == "今日") ? "today"
            :  (dat.dateLabel == "明日") ? "tomorrow" : "dayAfterTomorrow"
        const [year, month, day] = dat.date.split("-").map(t => Number(t))
        const { dateLabel, telop } = dat
        const detail_weather = dat.detail.weather
        const [raw_min, raw_max] = [dat.temperature.min.celsius, dat.temperature.max.celsius]
        const temperature_min = (raw_min === null) ? null : Number(raw_min)
        const temperature_max = (raw_max === null) ? null : Number(raw_max)
        const [ raw_rain_bf, raw_rain_af ] = [ dat.chanceOfRain.T06_12, dat.chanceOfRain.T12_18 ]
        const chanceOfRain_beforenoon = (raw_rain_bf == "--%") ? null : Number(raw_rain_bf.slice(0,-1))
        const chanceOfRain_afternoon = (raw_rain_af == "--%") ? null : Number(raw_rain_bf.slice(0,-1))
        const [ image_title, image_url ] = [dat.image.title, dat.image.url]
        named[label] = {  year, month, day, dateLabel, telop, detail_weather, temperature_min, temperature_max, chanceOfRain_beforenoon, chanceOfRain_afternoon, image_title, image_url }
    } )
    const today = named.today ?? named.dayAfterTomorrow
    const tomorrow = named.tomorrow ?? named.dayAfterTomorrow
    const dayAfterTomorrow = named.dayAfterTomorrow
    return {
        date, time, dateData, title, link, location,
        today: today as MinifiedAPIReturn["today"],
        tomorrow: tomorrow as MinifiedAPIReturn["tomorrow"],
        dayAfterTomorrow: dayAfterTomorrow as MinifiedAPIReturn["dayAfterTomorrow"]
    }
}


async function Wrapped_fetch(
    url:string,
):Promise<ResultType<RawAPIReturn>> {
    return await fetch(url).then( res => res.json() )
    .then( j_data => { return {ok: true as const, data: j_data} })
    .catch( _er => { return { ok: false, message: "fetch failed" } } )
}


async function Fetch_data(
    city_data: { name: string, id: string },
    list: FetchedDataList,
    type: "arranged" | "original" | "minified",
):Promise<void> {
    const fetched = await Wrapped_fetch(`${BASE_URL}?city=${city_data.id}`)
    if (fetched.ok){
        const data = (type == "arranged") ? Arrange_data(fetched.data)
            : (type == "minified") ? Minify_data(fetched.data)
            : Convert_data(fetched.data)
        list.push( {city_name: city_data.name, ok: true, result: data } )
    } else {
        list.push( {city_name: city_data.name, ...fetched} )
    }
}


export async function Get_weather_forecast(props: {
    name: string,
    data_type?: "arranged" | "original" | "minified",
    only_main?: boolean
}): Promise<{data: FetchedDataList, copyright: typeof COPYRIGHT}>{
    const { name, data_type, only_main } = props
    if (isProfecture(name)){
        const cities = (only_main == true) ? [PREFECTURES_CITIS_IDS[name][0]] : [...PREFECTURES_CITIS_IDS[name]]
        const output:FetchedDataList = []
        await cities.reduce( (pre, dat) => {
            return pre.then( async () => await Fetch_data(dat, output, data_type ?? "arranged") )
        }, Promise.resolve() )    
        return {data: output, copyright: COPYRIGHT}
    } else {
        throw new Error("invalid prefecture name")
    }
}
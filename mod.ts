import type {
    ArrangedAPIReturn,
    BaseAPIReturn,
    CityNames,
    FetchedDataList,
    MinifiedAPIReturn,
    ProfectureNames,
    RawAPIReturn,
} from "./types.ts"

import {
    BASE_URL,
    COPYRIGHT,
    PREFECTURES,
    PREFECTURES_CITIS_IDS,
} from "./data.ts"

import {
    Convert_data,
    Arrange_data,
    Minify_data,
    Wrapped_fetch,
    Fetch_data,
    Get_weather_forecast,
} from "./funcs.ts"

export type {
    ArrangedAPIReturn,
    BaseAPIReturn,
    CityNames,
    FetchedDataList,
    MinifiedAPIReturn,
    ProfectureNames,
    RawAPIReturn,
}

export {
    BASE_URL,
    COPYRIGHT,
    PREFECTURES,
    PREFECTURES_CITIS_IDS,
}

export {
    Convert_data,
    Arrange_data,
    Minify_data,
    Wrapped_fetch,
    Fetch_data,
    Get_weather_forecast
}
import * as myTypes from "./globalTypes.js";
export async function props(promisesObj: {
    [k: string]: Promise<any>;
}): Promise<myTypes.Iobj> {
    const results: myTypes.Iobj = {};
    for (const key in promisesObj) {
        results[key] = await promisesObj[key];
    }
    return results;
}

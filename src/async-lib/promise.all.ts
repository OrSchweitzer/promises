//--------------------------------------------------

import * as myTypes from "./globalTypes.js";
export async function all(
    promises: myTypes.PromisesArr
): Promise<any[]> {
    const results: myTypes.PromisesArr = [];
    for (const p of promises) {
        results.push(await p);
    }
    return results;
}

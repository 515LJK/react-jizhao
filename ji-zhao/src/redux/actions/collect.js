export const COLLECT = "COLLECT";

export function collect(obj) {
    return {
    	type: COLLECT,
    	options:obj
    }
}

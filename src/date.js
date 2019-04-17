const OriginalDate = Date;

// undefined means unmock.
const DEFAULT = undefined;

// current Date of timestamp
let nowDate = DEFAULT;

/**
 * move date by offset `ms`
 * @param ms
 */
export const advanceBy = ms => nowDate = (nowDate === undefined ? +new OriginalDate() : nowDate) + (ms || 0);

/**
 * reset Date
 * if no parameter, then set to 0
 * @param ms
 * @returns {*}
 */
export const advanceTo = ms => nowDate = ms ? +new OriginalDate(ms) : 0;

/**
 * clear mock
 * @returns {undefined}
 */
export const clear = () => nowDate = DEFAULT;

/**
 * current
 * @returns {number}
 */
export const now = () => nowDate;

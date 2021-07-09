import localforage from 'localforage'
import { config } from '../../utils'

let _db: LocalForage

export type DbDateType = {
	beginDate: string
	endDate: string
}
export type DbCellType = {
	date: string
	stack: number
}
export type DbActivityType = string[]
export type DbRecordType = DbDateType | DbCellType[] | DbActivityType | null

/**
 * Create localForae instance
 * @returns localForage instance
 */
const create = (): LocalForage => {
	return localforage.createInstance({
		name: config.NAME,
	})
}

/**
 * Initialize db
 */
const init = () => {
	if (_db !== undefined) {
		return
	}

	// create new instance if current db is empty
	_db = create()
}

/**
 * Get value from db
 * @param {string} key key
 * @returns item
 */
const get = (key: string): Promise<DbRecordType> => {
	// Init if db is empty
	init()
	return _db.getItem(key)
}

/**
 * Set value to db with key
 * @param {string} key key
 * @param {unknown} value stored value
 */
const put = (key: string, value: DbRecordType) => {
	// Init if db is empty
	init()
	_db.setItem(key, value)
}

/**
 * Read value from db
 * @param {string} key key
 * @returns value
 */
export const read = async (key: string): Promise<DbRecordType> => {
	try {
		const value = await get(key)
		console.debug('db.read | key', key, '| value', value)
		return value
	} catch (error) {
		console.error('Error: db.read | ', error)
		return null
	}
}

/**
 * Use to check whether the item is DbActivityType or not
 * @param {DbRecordType} item db value
 * @returns true if item is DbActivityType
 */
const isActivity = (item: DbRecordType): item is DbActivityType =>
	item !== null &&
	item instanceof Array &&
	item.length > 0 &&
	typeof item[0] === 'string'

/**
 * Use to check whether the item is DbCellType or not
 * @param {DbRecordType} item db value
 * @returns true if item is DbCellType
 */
const isCell = (item: DbRecordType): item is DbCellType[] =>
	item !== null &&
	item instanceof Array &&
	item.length > 0 &&
	typeof item[0] === 'object' &&
	typeof (item[0] as DbCellType).date === 'string' &&
	typeof (item[0] as DbCellType).stack === 'number'

/**
 * Get activity list from db
 * @param {string} key key
 * @returns activities
 */
export const readActivity = async (
	key: string,
): Promise<DbActivityType | null> => {
	const value = await read(key)
	if (isActivity(value)) {
		return value
	}

	return null
}

/**
 * Get cell from db
 * @param {string} key key
 * @returns list of cells
 */
export const readCellList = async (): Promise<DbCellType[] | null> => {
	const value = await read(config.CELL_KEY)
	if (isCell(value)) {
		return value
	}

	return null
}

/**
 * Write value to db for key
 * @param {string} key key
 * @param {unknown} value stored value
 */
export const write = async (
	key: string,
	value: DbRecordType,
): Promise<void> => {
	try {
		await put(key, value)
		console.debug('db.write | key', key, '| value', value)
	} catch (error) {
		console.error('Error: db.write | ', error)
	}
}

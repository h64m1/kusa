import localforage from 'localforage'
import * as config from '../../utils/config'

let _db: LocalForage

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
const get = (key: string): Promise<unknown> => {
	// Init if db is empty
	init()
	return _db.getItem(key)
}

/**
 * Set value to db with key
 * @param {string} key key
 * @param {unknown} value stored value
 */
const put = (key: string, value: unknown) => {
	// Init if db is empty
	init()
	_db.setItem(key, value)
}

/**
 * Read value from db
 * @param {string} key key
 * @returns value
 */
export const read = async (key: string): Promise<unknown> => {
	try {
		const value = await get(key)
		console.debug('db.read | key', key, '| value', value)
		return value
	} catch (error) {
		console.error('Error: db.read | ', error)
	}
}

/**
 * Write value to db for key
 * @param {string} key key
 * @param {unknown} value stored value
 */
export const write = async (key: string, value: unknown): Promise<void> => {
	try {
		await put(key, value)
		console.debug('db.write | key', key, '| value', value)
	} catch (error) {
		console.error('Error: db.write | ', error)
	}
}
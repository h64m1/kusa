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
export const get = (key: string): Promise<unknown> => {
	// Init if db is empty
	init()
	return _db.getItem(key)
}

/**
 * Set value to db with key
 * @param {string} key key
 * @param {unknown} value stored value
 */
export const put = (key: string, value: unknown) => {
	// Init if db is empty
	init()
	_db.setItem(key, value)
}


import localforage from "localforage"
import * as config from '../../utils/config'

let _db: LocalForage

/**
 * Create localForae instance
 * @returns localForage instance
 */
const create = (): LocalForage => {
	return localforage.createInstance({
		name: config.NAME
	})
}

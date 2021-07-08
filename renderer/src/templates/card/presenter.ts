import React from 'react'
import { db } from '../../../lib/db'

export type UseActivitiesReturnType = {
	activities: db.DbActivityType
	pushActivity: () => void
	removeActivity: (index: number) => void
	changeActivity: (index: number, value: string) => void
}

export const useActivities = (date: string): UseActivitiesReturnType => {
	const initialValue: db.DbActivityType = []
	const [activities, setActivities] = React.useState(initialValue)

	// Get activities from db
	React.useEffect(() => {
		let didRead = false
		;(async () => {
			const record = await db.readActivity(date)

			if (!didRead) {
				const values = record === null ? [] : record

				// init default value
				console.debug('init default activities')
				setActivities(() => [...values])
			}
		})()

		return () => {
			didRead = true
		}
	}, [date])

	// push new activity
	const pushActivity = () => {
		const newActivities = [...activities, '']
		setActivities(() => newActivities)
		db.write(date, newActivities)
	}

	// remove specified element from activities
	const removeActivity = (index: number) => {
		if (activities.length > 1) {
			// do not remove last element
			const newActivities = [...activities.filter((_, j) => j !== index)]
			setActivities(newActivities)
			db.write(date, newActivities)
		}
	}

	// change specified activity contents
	const changeActivity = (index: number, value: string) => {
		activities[index] = value
		setActivities(() => [...activities])
		db.write(date, activities)
	}

	return { activities, pushActivity, removeActivity, changeActivity }
}

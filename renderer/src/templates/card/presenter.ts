import React from 'react'
import { db } from '../../../lib/db'

type RecordType = string[]

export type UseActivitiesReturnType = {
	activities: string[]
	pushActivity: () => void
	removeActivity: (index: number) => void
	changeActivity: (index: number, value: string) => void
}

export const useActivities = (date: string): UseActivitiesReturnType => {
	const initialValue: string[] = []
	const [activities, setActivities] = React.useState(initialValue)

	// Get activities from db
	React.useEffect(() => {
		let didRead = false
		;(async () => {
			const record = (await db.read(date)) as RecordType

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
		setActivities(() => [...activities, ''])
	}

	// remove specified element from activities
	const removeActivity = (index: number) => {
		if (activities.length > 1) {
			// do not remove last element
			setActivities([...activities.filter((_, j) => j !== index)])
		}
	}

	// change specified activity contents
	const changeActivity = (index: number, value: string) => {
		activities[index] = value
		setActivities(() => [...activities])
	}

	return { activities, pushActivity, removeActivity, changeActivity }
}

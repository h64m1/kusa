import React from 'react'

export type UseActivitiesReturnType = {
	activities: string[]
	pushActivity: () => void
	removeActivity: (index: number) => void
	changeActivity: (index: number, value: string) => void
}

export const useActivities = (
	initialValue: string[],
): UseActivitiesReturnType => {
	const [activities, setActivities] = React.useState(initialValue)

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

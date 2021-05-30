import React from 'react'

type UseActivitiesReturnType = {
	activities: string[]
	pushActivity: () => void
    removeActivity: (i: number) => void
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
	const removeActivity = (i: number) => {
		if (activities.length > 1) {
			// do not remove last element
			setActivities([...activities.filter((_, j) => j !== i)])
		}
	}

	return { activities, pushActivity, removeActivity }
}

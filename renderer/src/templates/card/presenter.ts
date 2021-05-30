import React from 'react'

type UseActivitiesReturnType = {
	activities: string[]
	pushActivity: () => void
}

export const useActivities = (
	initialValue: string[],
): UseActivitiesReturnType => {
	const [activities, setActivities] = React.useState(initialValue)

	// push new activity
	const pushActivity = () => {
		setActivities(() => [...activities, ''])
	}

	return { activities, pushActivity }
}

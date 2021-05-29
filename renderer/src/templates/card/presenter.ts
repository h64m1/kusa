import React from 'react'

export const useActivities = (initialValue: string[]) => {
	const [activities, setActivities] = React.useState(initialValue)

	// push new activity
	const pushActivity = () => {
		setActivities(() => [...activities, ''])
	}

	return [activities, { setActivities, pushActivity }] as const
}

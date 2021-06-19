import { useEffect } from 'react'
import Layout from '../components/Layout'
import { day } from '../lib/day'
import { ActivityContainer } from '../src/templates/activity'
import { CardContainer } from '../src/templates/card'

const IndexPage = () => {
	useEffect(() => {
		// add a listener to 'message' channel
		global.ipcRenderer.addListener('message', (_event, args) => {
			alert(args)
		})
	}, [])

	const onSayHiClick = () => {
		global.ipcRenderer.send('message', 'hi from next')
	}

	const endDate = day.today()
	const beginDate = day.add(endDate, -1, 'year')

	return (
		<Layout title="Activity list" className="ml-8 flex flex-row space-x-4">
			<ActivityContainer
				beginDate={beginDate}
				endDate={endDate}
				stacks={[]}
			/>
			<CardContainer date={endDate} />
		</Layout>
	)
}

export default IndexPage

import { useEffect } from 'react'
import { ActivityContainer } from '../src/templates/activity'
import Layout from '../components/Layout'
import { day } from '../lib/day'

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
		<Layout title="Home | Next.js + TypeScript + Electron Example">
			<ActivityContainer
				beginDate={beginDate}
				endDate={endDate}
				stacks={[]}
			/>
		</Layout>
	)
}

export default IndexPage

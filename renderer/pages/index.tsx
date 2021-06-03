import { useEffect } from 'react'
import { ActivityContainer } from '../src/templates/activity'
import Layout from '../components/Layout'

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

	return (
		<Layout title="Home | Next.js + TypeScript + Electron Example">
			<ActivityContainer
				beginDate='2021-05-02'
				endDate='2021-06-02'
				stacks={[]}
			/>
		</Layout>
	)
}

export default IndexPage

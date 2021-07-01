import React from 'react'
import Layout from '../components/Layout'
import { day } from '../lib/day'
import { KusaContainer } from '../src/templates/kusa'

const IndexPage = () => {
	React.useEffect(() => {
		// add a listener to 'message' channel
		global.ipcRenderer.addListener('message', (_event, args) => {
			alert(args)
		})
	}, [])

	const onSayHiClick = () => {
		global.ipcRenderer.send('message', 'hi from next')
	}

	// TODO: create state for stacks
	const endDate = day.today()
	const beginDate = day.add(endDate, -1, 'year')

	return (
		<Layout title="Activity list">
			<KusaContainer
				beginDate={beginDate}
				endDate={endDate}
				stacks={[]}
				onChangeStacks={(stacks) => {
					console.debug('onChangeStacks', stacks)
				}}
			/>
		</Layout>
	)
}

export default IndexPage

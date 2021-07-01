import React from 'react'
import Layout from '../components/Layout'
import { day } from '../lib/day'
import { KusaContainer } from '../src/templates/kusa'
import * as Mock from './mock'

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

	const endDate = day.today()
	const beginDate = day.add(endDate, -1, 'year')
	// show mock stacks
	// TODO: implement actual input data
	const stacks = Mock.stacks(beginDate, endDate)

	return (
		<Layout title="Activity list">
			<KusaContainer
				beginDate={beginDate}
				endDate={endDate}
				stacks={stacks}
				onChangeStacks={(stacks) => {
					console.debug('onChangeStacks', stacks)
				}}
			/>
		</Layout>
	)
}

export default IndexPage

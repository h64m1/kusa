import React from 'react'
import Layout from '../components/Layout'
import { day } from '../lib/day'
import { KusaContainer } from '../src/templates/kusa'
import * as GridPresenter from '../src/templates/grid/presenter'
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
				onChangeStacks={(stack: GridPresenter.GridCell) => {
					// TODO: change stack for the target date
					const index = stacks.findIndex(e => e.date === stack.date)

					console.debug('onChangeStacks', stack, 'find index', index)
				}}
			/>
		</Layout>
	)
}

export default IndexPage

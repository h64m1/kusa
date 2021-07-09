import React from 'react'
import Layout from '../components/Layout'
import { day } from '../lib/day'
import { db } from '../lib/db'
import { GridPresenter } from '../src/templates/grid'
import { KusaContainer } from '../src/templates/kusa'
import { config } from '../utils'

const IndexPage = () => {
	const initStacks: db.DbCellType[] = []
	const [stacks, setStacks] = React.useState(initStacks)

	// TODO: implement search options to select begin, end date
	const endDate = day.today()
	const beginDate = day.add(endDate, -1, 'year')

	React.useEffect(() => {
		// add a listener to 'message' channel
		global.ipcRenderer.addListener('message', (_event, args) => {
			alert(args)
		})

		// TODO: need initialization of cell stacks
		let didRead = false
		;(async () => {
			const record = await db.readCellList()

			if (!didRead) {
				const values = record === null ? [] : record

				// init default value
				console.debug('init default cell list', values)
				setStacks(() => [...values])
			}
		})()

		return () => {
			didRead = true
		}
	}, [])

	// const onSayHiClick = () => {
	// 	global.ipcRenderer.send('message', 'hi from next')
	// }

	// TODO: implement actual input data
	// const stacks = [{
	// 	date: '2021-07-01',
	// 	stack: 1,
	// }]

	return (
		<Layout title="Activity list">
			<KusaContainer
				beginDate={beginDate}
				endDate={endDate}
				stacks={stacks}
				onChangeStacks={(stack: GridPresenter.GridCell) => {
					// TODO: change stack for the target date
					const index = stacks.findIndex(e => e.date === stack.date)
					stacks[index] = stack
					setStacks(() => [...stacks])
					db.write(config.CELL_KEY, stacks)

					console.debug('onChangeStacks', stack, 'find index', index)
				}}
			/>
		</Layout>
	)
}

export default IndexPage

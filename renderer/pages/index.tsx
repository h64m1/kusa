import React from 'react'
import Layout from '../components/Layout'
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

	return (
		<Layout title="Activity list">
			<KusaContainer
				stacks={[]}
				onChangeStacks={(stacks) => {
					console.debug('onChangeStacks', stacks)
				}}
			/>
		</Layout>
	)
}

export default IndexPage

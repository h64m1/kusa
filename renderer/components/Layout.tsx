import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
	children: ReactNode
	title?: string
	className?: string
}

const Layout = ({
	children,
	title = 'This is the default title',
	className = '',
}: Props): JSX.Element  => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<header>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>{' '}
				|{' '}
				<Link href="/about">
					<a>About</a>
				</Link>{' '}
				|{' '}
				<Link href="/initial-props">
					<a>With Initial Props</a>
				</Link>
			</nav>
		</header>
		<main className={className}>{children}</main>
		<footer>
			<hr />
			<Link href="/">
				<a>Home</a>
			</Link>
		</footer>
	</div>
)

export default Layout

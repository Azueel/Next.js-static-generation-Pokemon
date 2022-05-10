import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar } from '../ui';

interface Props {
	children: JSX.Element;
	title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'PokemonApp'}</title>
				<meta name="author" content="Alejo Calandra" />
				<meta name="description" content="informacion sobre pokemon" />
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />
			</Head>
			<Navbar />
			<main
				style={{
					padding: '0px 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};

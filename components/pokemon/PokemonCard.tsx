import { Card, Grid, Row, Text } from '@nextui-org/react';
import React, { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
	console.log(pokemon);
	const router = useRouter();
	const onclick = () => {
		router.push(`/pokemon/${pokemon.id}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1}>
			<Card hoverable clickable onClick={onclick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={pokemon.img} width="100%" height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{pokemon.name}</Text>
						<Text>{pokemon.id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};

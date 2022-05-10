import {
	Button,
	Card,
	Container,
	Grid,
	Image,
	Text,
} from '@nextui-org/react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import React, { FC, useEffect, useState } from 'react';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts/Layout';
import { Pokemon } from '../../interfaces';
import heart from '../../assets/img/heart.png';
import sword from '../../assets/img/sword.png';
import shield from '../../assets/img/shield.png';
import speed from '../../assets/img/speed.png';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	const [pokemonType, setPokemonType] = useState('');

	useEffect(() => {
		const pokemonTypeImg = (pokemon) => {
			console.log(pokemon[0].type.name);
			if (pokemon[0].type.name === 'fire') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15327_Pokemon_Fire_Type.png'
				);
			} else if (pokemon[0].type.name === 'grass') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15338_pokemon_grass_type.png'
				);
			} else if (pokemon[0].type.name === 'dark') {
				setPokemonType(
					'https://i.pinimg.com/originals/a2/1c/4a/a21c4a4659cb7c08c4de89c66c4c05f6.png'
				);
			} else if (pokemon[0].type.name === 'ghost') {
				setPokemonType(
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHNXP0qc_aU3MedHmemiINly1sPle9lv6kH_-BUgj73QAtHkQ39OwISjgpNlRdY0iiqc&usqp=CAU'
				);
			} else if (pokemon[0].type.name === 'poison') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15330_Pokemon_Poison_Energy.png'
				);
			} else if (pokemon[0].type.name === 'psychic') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15336_Pokemon_Psychic_Type.png'
				);
			} else if (pokemon[0].type.name === 'water') {
				setPokemonType(
					'https://i.pinimg.com/originals/0b/60/11/0b60116bc382b1c62a9fe41a61916828.png'
				);
			} else if (pokemon[0].type.name === 'rock') {
				setPokemonType(
					'https://i.pinimg.com/originals/c0/73/d6/c073d68f7d521480004bf067eb970aed.png'
				);
			} else if (pokemon[0].type.name === 'ice') {
				setPokemonType(
					'https://i.pinimg.com/originals/4a/ec/66/4aec6668f1dcb76b4d7732a512fd5f59.png'
				);
			} else if (pokemon[0].type.name === 'electric') {
				setPokemonType(
					'https://i.pinimg.com/originals/ae/99/f0/ae99f036a053d152be94b9a825a3c412.png'
				);
			} else if (pokemon[0].type.name === 'steel') {
				setPokemonType(
					'https://i.pinimg.com/originals/02/d4/44/02d4448150935c6d6c3bc65298dbd5ed.png'
				);
			} else if (pokemon[0].type.name === 'fighting') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15325_Pokemon_Fighting_Type.png'
				);
			} else if (pokemon[0].type.name === 'flying') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15329_Pokemon_Flying_Type.png'
				);
			} else if (pokemon[0].type.name === 'bug') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15335_pokemon_bug_type.png'
				);
			} else if (pokemon[0].type.name === 'normal') {
				setPokemonType(
					'https://s3.amazonaws.com/kandipatternspatterns/misc/15328_Pokemon_Normal_Type.png'
				);
			} else if (pokemon[0].type.name === 'fairy') {
				setPokemonType(
					'https://i.pinimg.com/originals/80/18/4b/80184bc7a5688df0b568529579fb4661.png'
				);
			} else if (pokemon[0].type.name === 'ground') {
				setPokemonType(
					'https://1.bp.blogspot.com/-0-2_7l6XiY8/WGOgGEy0GrI/AAAAAAAABIY/_ZU_uO0RBcAkBVpOPn6iAT_Y2mg8k26NwCPcB/s320/ENG-05-02-02-Big-size_Pok%25C3%25A9mon-Type_Ground.png'
				);
			} else if (pokemon[0].type.name === 'dragon') {
				setPokemonType('https://logodix.com/logo/1913971.jpg');
			}
		};

		pokemonTypeImg(pokemon.types);
	}, []);

	return (
		<Layout title="algun pokemon">
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									'no-image.png'
								}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header
							css={{ display: 'flex', justifyContent: 'space-between' }}
						>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>
							<Button color="gradient" ghost>
								Guardar en Favoritos
							</Button>
						</Card.Header>

						<Card.Body>
							<Text size={30}>Sprites</Text>
							<Container direction="row" display="flex" gap={0}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>

			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable>
						<Card.Body>
							<Text h1 css={{ paddingBottom: '20px' }}>
								Type
							</Text>
							<Image
								src={pokemonType}
								alt={pokemon.name}
								width={200}
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={4}>
					<Card>
						<Card.Header
							css={{ display: 'flex', justifyContent: 'space-between' }}
						>
							<Text h1 transform="capitalize">
								basic statistics
							</Text>
						</Card.Header>
						<Card.Body>
							<Container>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div style={{ display: 'flex' }}>
										<Image
											src={sword.src}
											alt="sword"
											width={100}
											height={100}
										/>

										<Text h2 style={{ marginTop: '12px' }}>
											{pokemon.stats[1].base_stat}
										</Text>
									</div>

									<div style={{ display: 'flex' }}>
										<Image
											src={heart.src}
											alt="heart"
											width={100}
											height={100}
										/>

										<Text h2 style={{ marginTop: '12px' }}>
											{pokemon.stats[0].base_stat}
										</Text>
									</div>
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div style={{ display: 'flex' }}>
										<Image
											src={shield.src}
											alt="shield"
											width={100}
											height={100}
										/>

										<Text h2 style={{ marginTop: '12px' }}>
											{pokemon.stats[2].base_stat}
										</Text>
									</div>
									<div style={{ display: 'flex' }}>
										<Image
											src={speed.src}
											alt="shield"
											width={100}
											height={100}
										/>

										<Text h2 style={{ marginTop: '12px' }}>
											{pokemon.stats[5].base_stat}
										</Text>
									</div>
								</div>
							</Container>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={4}>
					<Card>
						<Card.Header
							css={{ display: 'flex', justifyContent: 'space-between' }}
						>
							<Text h1 transform="capitalize">
								Skills
							</Text>
						</Card.Header>
						<Card.Body>
							<Container>
								<ul
									style={{
										display: 'flex',
										flexWrap: 'wrap',
									}}
								>
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<li style={{ fontSize: '30px', padding: '20px' }}>
											- {pokemon.moves[0].move.name}
										</li>
										<li
											style={{
												fontSize: '30px',
												padding: '10px',
												marginLeft: '10px',
												marginTop: '10px',
											}}
										>
											- {pokemon.moves[1].move.name}
										</li>
									</div>

									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<li style={{ fontSize: '30px', padding: '10px' }}>
											- {pokemon.moves[2].move.name}
										</li>
										<li
											style={{
												fontSize: '30px',
												padding: '10px',
												marginLeft: '20px',
											}}
										>
											- {pokemon.moves[3].move.name}
										</li>
									</div>
								</ul>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemon302 = [...Array(302)].map((value, index) => `${index + 1}`);

	return {
		paths: pokemon302.map((id) => ({
			params: { id },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

	return {
		props: {
			pokemon: data,
		},
	};
};

export default PokemonPage;

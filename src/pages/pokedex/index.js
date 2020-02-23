import React, { useState, useEffect } from 'react';
import { colors } from '../../assets/values'

import {
    StatusBar,
    Background,
    Container,
    Pokeball,
    MenuIcon,
    Title,
    PokemonsList,
    PokemonsListItem,
    ListItemTextName,
    ListItemTypeContainer,
    ListItemTextType,
    ListItemImage,
    ListItemPokeball,
    FilterButton,
    FilterIcon
} from './styles'

export default function Pokedex(props) {

    const [pokemons, setPokemons] = useState([
        {
            id: 0,
            name: 'Bulbassour',
            types: ['Grass', 'Poison'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest/scale-to-width-down/310?cb=20141002083518&path-prefix=en'
        },
        {
            id: 1,
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en'
        },
        {
            id: 2,
            name: 'Venusaur',
            types: ['Grass', 'Poison'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en'
        },
        {
            id: 3,
            name: 'Charmander',
            types: ['Fire'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/56/Charmander.png/revision/latest?cb=20141002083351&path-prefix=en'
        },
        {
            id: 4,
            name: 'Charmeleon',
            types: ['Fire'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fb/Charmeleon.png/revision/latest?cb=20141002083329&path-prefix=en'
        },
        {
            id: 5,
            name: 'Charizard',
            types: ['Fire', 'Flying'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/95/Charizard.png/revision/latest?cb=20141002083306&path-prefix=en'
        },
        {
            id: 6,
            name: 'Squirtle',
            types: ['Water'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e3/Squirtle.png/revision/latest?cb=20141002083243&path-prefix=en'
        },
        {
            id: 7,
            name: 'Wartortle',
            types: ['Water'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d7/Wartortle.png/revision/latest?cb=20141002083217&path-prefix=en'
        },
        {
            id: 8,
            name: 'Blastoise',
            types: ['Water'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/41/Blastoise.png/revision/latest?cb=20141002083147&path-prefix=en'
        },
        {
            id: 9,
            name: 'Pikachu',
            types: ['Electric'],
            image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/77/Pikachu.png/revision/latest?cb=20141002082401&path-prefix=en'
        },
    ])

    return (
        <>
        <Background/>
        <Container>
            <StatusBar/>
            <Pokeball/>
            <Title>Pokedex</Title>
            <PokemonsList
                data={pokemons}
                keyExtractor={item => '' + item.id}
                renderItem={({item}) =>
                    <PokemonsListItem types={item.types}>
                        <ListItemPokeball/>
                        <ListItemTextName>{item.name}</ListItemTextName>
                        <ListItemTypeContainer>
                            {item.types.map((type) => <ListItemTextType>{type}</ListItemTextType>)}
                        </ListItemTypeContainer>
                        <ListItemImage source={{uri: item.image}}/>
                    </PokemonsListItem>
                }
            />
            <FilterButton>
                <FilterIcon/>
            </FilterButton>
        </Container>
        </>
    );
}

Pokedex.navigationOptions = {
    headerTitle: () => null,
    headerBackTitleVisible: false,
    headerStyle: {
        backgroundColor: 'none',
        elevation: 0,
        shadowColor: 'none'
    },
    headerRight: () => {
        return <MenuIcon/>
    }
}
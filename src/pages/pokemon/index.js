import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native';

import { colors } from '../../assets/values'
import { formatPokemonId } from '../../utils/utils'
import { SceneMap } from 'react-native-tab-view'

import {
    StatusBar,
    Button,
    FavoriteIcon,
    Background,
    Container,
    ContainerTitleId,
    Title,
    PokemonTypeContainer,
    TextPokemonType,
    PokemonIdText,
    PokemonImage,
    InfoContainer,
    InfoTabView,
    InfoPageContainer,
    //About page
    AboutText,
    AboutBasicInfoContainer,
    AboutBasicInfoSubContainer,
    AboutSubTitleText,
    AboutBasicInfoText,
    AboutTitleText,
    AboutBreedingContainer,
    AboutBreedingSubContainer,
    AboutBreedingGenderInfoContainer,
    AboutBreedingSubTitleText,
    AboutBreedingText,
    //Basic Stats page
    BaseStatsContainer,
    BaseStatsSubContainer,
    BaseStatsSubTitleText,
    BaseStatsProgressBarContainer,
    BasicStatsProgressText,
    BasicStatsProgressBar,
    BaseStatsTitleText,
    BasicStatsText,
    //Failure screen
    ContainerFailure,
    TryAgainText,
    TryAgainButton,
    TryAgainButtonText
} from './styles'

export default function Pokemon({ navigation }) {

    // const [position] = useState(() => new Animated.Value(0))

    const [pageSelected, setPageSelected] = useState(0)
    const [routes] = React.useState([
        { key: 'about', title: 'About' },
        { key: 'basestats', title: 'Base Stats' },
        { key: 'evolution', title: 'Evolution' },
        { key: 'moves', title: 'Moves' }
    ]);
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const AboutPage = () => (
        <InfoPageContainer>
            <AboutText>
                It can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
            </AboutText>
            <AboutBasicInfoContainer>
                <AboutBasicInfoSubContainer>
                    <AboutSubTitleText>Height</AboutSubTitleText>
                    <AboutBasicInfoText>2´3.6" (0.70 cm)</AboutBasicInfoText>
                </AboutBasicInfoSubContainer>
                
                <AboutBasicInfoSubContainer last>
                    <AboutSubTitleText>Weight</AboutSubTitleText>
                    <AboutBasicInfoText>15.2 lbs (6.9 kg)</AboutBasicInfoText>
                </AboutBasicInfoSubContainer>
            </AboutBasicInfoContainer>

            <AboutTitleText>Breeding</AboutTitleText>
            <AboutBreedingContainer>

                <AboutBreedingSubContainer>
                    <AboutBreedingSubTitleText>Gender</AboutBreedingSubTitleText>
                    <AboutBreedingGenderInfoContainer>
                        <AboutText>87.5%</AboutText>
                        <AboutText>12.5%</AboutText>
                    </AboutBreedingGenderInfoContainer>
                </AboutBreedingSubContainer>

                <AboutBreedingSubContainer>
                    <AboutBreedingSubTitleText>Egg Groups</AboutBreedingSubTitleText>
                    <AboutBreedingText>Monster</AboutBreedingText>
                </AboutBreedingSubContainer>

                <AboutBreedingSubContainer>
                    <AboutBreedingSubTitleText>Egg Cycle</AboutBreedingSubTitleText>
                    <AboutBreedingText>Grass</AboutBreedingText>
                </AboutBreedingSubContainer>

            </AboutBreedingContainer>
        </InfoPageContainer>
      );
      
    const BaseStatsPage = () => (
        <InfoPageContainer>
            <BaseStatsContainer>
                <BaseStatsSubContainer>
                    <BaseStatsSubTitleText>HP</BaseStatsSubTitleText>
                    <BaseStatsProgressBarContainer>
                        <BasicStatsProgressText>45</BasicStatsProgressText>
                        <BasicStatsProgressBar progress={45/100}/>
                    </BaseStatsProgressBarContainer>
                </BaseStatsSubContainer>

                <BaseStatsSubContainer>
                    <BaseStatsSubTitleText>Attack</BaseStatsSubTitleText>
                    <BaseStatsProgressBarContainer>
                        <BasicStatsProgressText>60</BasicStatsProgressText>
                        <BasicStatsProgressBar progress={60/100}/>
                    </BaseStatsProgressBarContainer>
                </BaseStatsSubContainer>

                <BaseStatsSubContainer>
                    <BaseStatsSubTitleText>Defense</BaseStatsSubTitleText>
                    <BaseStatsProgressBarContainer>
                        <BasicStatsProgressText>48</BasicStatsProgressText>
                        <BasicStatsProgressBar progress={48/100}/>
                    </BaseStatsProgressBarContainer>
                </BaseStatsSubContainer>

                <BaseStatsSubContainer>
                    <BaseStatsSubTitleText>Sp. Attack</BaseStatsSubTitleText>
                    <BaseStatsProgressBarContainer>
                        <BasicStatsProgressText>65</BasicStatsProgressText>
                        <BasicStatsProgressBar progress={65/100}/>
                    </BaseStatsProgressBarContainer>
                </BaseStatsSubContainer>

                <BaseStatsSubContainer>
                    <BaseStatsSubTitleText>Sp. Def</BaseStatsSubTitleText>
                    <BaseStatsProgressBarContainer>
                        <BasicStatsProgressText>65</BasicStatsProgressText>
                        <BasicStatsProgressBar progress={65/100}/>
                    </BaseStatsProgressBarContainer>
                </BaseStatsSubContainer>

                <BaseStatsSubContainer>
                    <BaseStatsSubTitleText>Speed</BaseStatsSubTitleText>
                    <BaseStatsProgressBarContainer>
                        <BasicStatsProgressText>45</BasicStatsProgressText>
                        <BasicStatsProgressBar progress={45/100}/>
                    </BaseStatsProgressBarContainer>
                </BaseStatsSubContainer>

                <BaseStatsSubContainer>
                    <BaseStatsSubTitleText>Total</BaseStatsSubTitleText>
                    <BaseStatsProgressBarContainer>
                        <BasicStatsProgressText>317</BasicStatsProgressText>
                        <BasicStatsProgressBar progress={317/600}/>
                    </BaseStatsProgressBarContainer>
                </BaseStatsSubContainer>
            </BaseStatsContainer>
            <BaseStatsTitleText>Type defenses</BaseStatsTitleText>
            <BasicStatsText>The effectiveness of each type of this Pokémon!</BasicStatsText>
        </InfoPageContainer>
    );

    const EvolutionPage = () => (
        <InfoPageContainer>

        </InfoPageContainer>
      );
      
    const MovesPage = () => (
        <InfoPageContainer>

        </InfoPageContainer>
    );

    async function fetchPokemons() {
        setPokemons([
            {
                id: 1,
                name: 'Bulbassour',
                types: ['Grass', 'Poison'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest/scale-to-width-down/310?cb=20141002083518&path-prefix=en'
            },
            {
                id: 2,
                name: 'Ivysaur',
                types: ['Grass', 'Poison'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en'
            },
            {
                id: 3,
                name: 'Venusaur',
                types: ['Grass', 'Poison'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en'
            },
            {
                id: 4,
                name: 'Charmander',
                types: ['Fire'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/56/Charmander.png/revision/latest?cb=20141002083351&path-prefix=en'
            },
            {
                id: 5,
                name: 'Charmeleon',
                types: ['Fire'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fb/Charmeleon.png/revision/latest?cb=20141002083329&path-prefix=en'
            },
            {
                id: 6,
                name: 'Charizard',
                types: ['Fire', 'Flying'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/95/Charizard.png/revision/latest?cb=20141002083306&path-prefix=en'
            },
            {
                id: 7,
                name: 'Squirtle',
                types: ['Water'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e3/Squirtle.png/revision/latest?cb=20141002083243&path-prefix=en'
            },
            {
                id: 8,
                name: 'Wartortle',
                types: ['Water'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d7/Wartortle.png/revision/latest?cb=20141002083217&path-prefix=en'
            },
            {
                id: 9,
                name: 'Blastoise',
                types: ['Water'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/41/Blastoise.png/revision/latest?cb=20141002083147&path-prefix=en'
            },
            {
                id: 10,
                name: 'Pikachu',
                types: ['Electric'],
                image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/77/Pikachu.png/revision/latest?cb=20141002082401&path-prefix=en'
            }
        ])

        let selectedPokemon = navigation.state.params.pokemonId
        setSelectedPokemon(selectedPokemon ? selectedPokemon-1 : 0)
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    // const marginLeft = Animated.interpolate(position, {
    //     inputRange: [0, 1],
    //     outputRange: [16, (Dimensions.get('window').width - 32)/3]
    // });

    return (
        <>
        <StatusBar/>
        <Background types={pokemons[selectedPokemon] ? pokemons[selectedPokemon].types : null}/>
        {
            pokemons[selectedPokemon] ?
                <Container>
                    <ContainerTitleId>
                        <Title>{pokemons[selectedPokemon].name}</Title>
                        <PokemonIdText>{formatPokemonId(pokemons[selectedPokemon].id)}</PokemonIdText>
                    </ContainerTitleId>
                    <PokemonTypeContainer>
                        {
                            pokemons[selectedPokemon].types.map((type) => 
                                <TextPokemonType>{type}</TextPokemonType>
                            )
                        }
                    </PokemonTypeContainer>

                    <PokemonImage source={{ uri: pokemons[selectedPokemon].image}}/>

                    <InfoContainer>
                        <InfoTabView
                            // position={position}
                            navigationState={{ index: pageSelected, routes }}
                            onIndexChange={setPageSelected}
                            renderScene={SceneMap({
                                about: AboutPage,
                                basestats: BaseStatsPage,
                                evolution: EvolutionPage,
                                moves: MovesPage,
                            })}
                        />
                    </InfoContainer>
                </Container> 
            :
                <ContainerFailure>
                    <TryAgainText>Erro ao carregar os dados, por favor tente novamente!</TryAgainText>
                    <TryAgainButton onPress={fetchPokemons}>
                        <TryAgainButtonText>Tentar Novamente</TryAgainButtonText>
                    </TryAgainButton>
                </ContainerFailure>
        }       
        </>
    );
}

Pokemon.navigationOptions = {
    headerTitle: () => null,
    headerBackTitleVisible: false,
    headerTintColor: colors.textSecondaryLight,
    headerStyle: {
        backgroundColor: 'none',
        elevation: 0,
        shadowColor: 'none'
    },
    headerRight: () => {
        return (
            <Button>
                <FavoriteIcon/>
            </Button>
        )
    }
}
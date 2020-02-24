import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../assets/values'
import { formatDate } from '../../utils/utils'

import {
  Container,
  Pokeball,
  Title,
  SearchContainer,
  SearchCategoriesContainer,
  PokemonNewsContainer,
  SearchBar,
  SearchIcon,
  SearchBarInput,
  SearchCategorie,
  SecondaryTitle,
  PokemonNewsList,
  PokemonNewsListItemContainer,
  PokemonNewsListItemTextContainer,
  ListItemTextTitle,
  ListItemTextDate,
  ListItemImage,
} from './styles'

export default function App({ navigation }) {

  const [news, setNews] = useState([
    {
      id: 0,
      title: 'Pokémon Rumble Rush Arrives Soon',
      date: new Date('2019/05/15'),
      image: 'https://img.ibxk.com.br/2019/05/15/15092809596367.jpg?w=1120&h=420&mode=crop&scale=both'
    },
    {
      id: 1,
      title: 'Detective Pikachu Sleuths into Pokémon GO',
      date: new Date('2019/09/18'),
      image: 'https://poltronanerd.com.br/wp-content/uploads/2018/11/detective-pikachu-trailer.jpg'
    }
  ])

  async function onPokedexClicked() {
    navigation.navigate('Pokedex')
  }

  async function onNewsClicked(news) {
    navigation.navigate('News', { news })
  }

  return (
    <Container>
      <SearchContainer>
        <Pokeball/>
        <Title>What Pokémon are you looking for?</Title>
        <SearchBar>
          <SearchIcon/>
          <SearchBarInput placeholder={'Search Pokémon, Move, Ability etc'}/>
        </SearchBar>
        <SearchCategoriesContainer>

          <SearchCategorie 
            color={colors.green}
            text={'Pokedex'}
            onPress={onPokedexClicked}
          />
          
          <SearchCategorie 
            color={colors.red}
            text={'Moves'}
          />
          
          <SearchCategorie 
            color={colors.blue}
            text={'Abilities'}
          />
          
          <SearchCategorie 
            color={colors.yellow}
            text={'Items'}
          />
          
          <SearchCategorie 
            color={colors.purple}
            text={'Locations'}
          />
          
          <SearchCategorie 
            color={colors.brawn}
            text={'Type Charts'}
          />
        </SearchCategoriesContainer>    
      </SearchContainer>
      <PokemonNewsContainer>
        <SecondaryTitle>Pokémon News</SecondaryTitle>
        <PokemonNewsList
          data={news}
          keyExtractor={item => '' + item.id}
          renderItem={({item}) => {
            return(
              <PokemonNewsListItemContainer onPress={() => onNewsClicked(item)}>
                <PokemonNewsListItemTextContainer>
                  <ListItemTextTitle>{item.title}</ListItemTextTitle>
                  <ListItemTextDate>{formatDate(item.date)}</ListItemTextDate>
                </PokemonNewsListItemTextContainer>
                <ListItemImage source={{uri: item.image}}/>
              </PokemonNewsListItemContainer>
            )
          }}
        />
      </PokemonNewsContainer>
    </Container>
  );
}

App.navigationOptions = {
  headerShown: false
}
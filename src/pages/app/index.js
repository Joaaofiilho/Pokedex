import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../assets/values'
import { formatDate } from '../../utils/utils'

import {
  Container,
  Title,
  SearchContainer,
  SearchCategoriesContainer,
  SearchCategorie,
  SearchCategorieText,
  PokemonNewsContainer,
  SearchBar,
  SearchIcon,
  SearchBarInput,
  SecondaryTitle,
  PokemonNewsList,
  PokemonNewsListItemContainer,
  PokemonNewsListItemTextContainer,
  ListItemTextTitle,
  ListItemTextDate,
  ListItemImage,
} from './styles'

export default function App(props) {

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

  return (
    <Container nestedScrollEnabled>
      <SearchContainer>
        <Title>What Pokémon{"\n"}are you looking for?</Title>
        <SearchBar>
          <SearchIcon/>
          <SearchBarInput placeholder={'Search Pokémon, Move, Ability etc'}/>
        </SearchBar>
        <SearchCategoriesContainer>

          <SearchCategorie color={colors.green}>
            <SearchCategorieText>Pokedex</SearchCategorieText>
          </SearchCategorie>

          <SearchCategorie color={colors.red}>
            <SearchCategorieText>Moves</SearchCategorieText>
          </SearchCategorie>

          <SearchCategorie color={colors.blue}>
            <SearchCategorieText>Abilities</SearchCategorieText>
          </SearchCategorie>

          <SearchCategorie color={colors.yellow}>
            <SearchCategorieText>Items</SearchCategorieText>
          </SearchCategorie>

          <SearchCategorie color={colors.purple} last>
            <SearchCategorieText>Locations</SearchCategorieText>
          </SearchCategorie>
          
          <SearchCategorie color={colors.brawn} last>
            <SearchCategorieText>Type Charts</SearchCategorieText>
          </SearchCategorie>
        </SearchCategoriesContainer>    
      </SearchContainer>
      <PokemonNewsContainer>
        <SecondaryTitle>Pokémon News</SecondaryTitle>
        <PokemonNewsList
          nestedScrollEnabled
          data={news}
          keyExtractor={item => '' + item.id}
          renderItem={({item}) => {
            return(
              <PokemonNewsListItemContainer>
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
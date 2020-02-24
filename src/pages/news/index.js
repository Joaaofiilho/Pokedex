import React, { useState, useEffect } from 'react';
import { formatDate } from '../../utils/utils'

import {
    Background,
    Container,
    Image,
    Title,
    DateText,
    NewsContainer,
    ContainerFailure,
    TryAgainButton,
    TryAgainText,
    NewsText
} from './styles'

export default function News({ navigation }) {

    const [news, setNews] = useState(null)
    
    useEffect(() => {
        let news = navigation.state.params.news
        news.text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at pulvinar eros, quis molestie orci. Nulla at volutpat ligula. Nullam sit amet lorem nec urna convallis porta. In laoreet massa vulputate, laoreet dui sed, dapibus nibh. Ut quis dui porta, ullamcorper augue vel, commodo mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec quis enim massa. Praesent interdum quam sit amet porta hendrerit. Aenean imperdiet nibh a tortor dapibus, at pretium magna convallis. Curabitur ac augue aliquam, ultrices ex sit amet, gravida dui. Nulla neque massa, scelerisque nec augue blandit, porttitor luctus mi.

        In mattis orci vel leo consequat faucibus. Suspendisse potenti. Etiam id ex enim. Sed vel semper ante, ut varius quam. Fusce vitae consequat lacus. Sed gravida, velit ut luctus posuere, lectus sapien sagittis dui, a gravida purus sem a orci. Fusce ac posuere diam. In vel ornare enim, eu imperdiet magna.
        
        Fusce nec consequat felis. Donec sagittis lobortis mi eget porttitor. Aenean bibendum magna at nunc egestas, quis interdum dui elementum. Pellentesque at diam turpis. Duis at risus vel lacus rutrum gravida. Curabitur vitae varius nulla. Integer ornare sollicitudin lorem ac consequat. Praesent velit neque, pellentesque at commodo ut, dignissim a est. Nam sodales magna eget ligula faucibus iaculis. Proin interdum et dui sed volutpat. Vestibulum at felis sit amet erat aliquet malesuada eget sit amet nisi. Aenean auctor enim congue, venenatis nisl at, gravida dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam accumsan urna enim, a interdum erat efficitur eu.`
        setNews(news)
    }, [])

    async function fetchNews(newsId) {
        //Fetch the news here
    }

    return (
        <>
        <Background/>
        {
            news ?
            <Container>
                <Image source={{uri: news.image}}/>
                <Title>{news.title}</Title>
                <DateText>{formatDate(news.date)}</DateText>
                <NewsContainer>
                    <NewsText>{news.text}</NewsText>
                </NewsContainer>
            </Container>
            :
            <ContainerFailure>
                <TryAgainButton onPress={() => fetchNews(news)}>
                    <TryAgainText>Tentar Novamente</TryAgainText>
                </TryAgainButton>
            </ContainerFailure>
        }
        
        </>
    );
}

News.navigationOptions = {
    headerTitle: () => null,
    headerBackTitleVisible: false,
    headerStyle: {
        backgroundColor: 'none',
        elevation: 0,
        shadowColor: 'none'
    },
}
import React from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import TopHeader from './components/topHeader/topHeader';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
// import { useState } from 'react';

// Roboto Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainHeader from './components/mainHeader/mainHeader';


const APP_QUERY = gql`
    query {
        homePageCollection(limit: 20) {
            items {
            ... on HomePage {
                title
                topHeader {
                ... on TopMenu {
                    logo {
                    url
                    }
                    title
                }
                }
                mainHeader {
                ... on NavigationMenu {
                    title
                    menuDataCollection(limit: 10) {
                    items {
                            ... on MainMenu {
                        menuName
                        menuId
                        }
                    }
                    }
                }
                }
                bannerContent {
                ... on Banner {
                    bannerImage {
                    url
                    }
                    bannerText1
                    bannerText2
                    bannerButton
                }
                }
                unforgettableContent {
                ... on UnforgettableCard {
                    title
                    cardContentCollection(limit: 4) {
                    items {
                        ... on Cards {
                        title
                        subTitle
                        image {
                            url
                        }
                        button
                        orderBy
                        }
                    }
                    }
                }
                }
                escapeContent {
                ... on NextEscapeCard {
                    title
                    cardContentCollection(limit: 5) {
                    items {
                        ... on Cards {
                        title
                        subTitle
                        image {
                            url
                        }
                        button
                        orderBy
                        }
                    }
                    }
                }
                }
                twoColumnContent {
                ... on TwoColumnCard {
                    title
                    cardContentCollection(limit: 2) {
                    items {
                        ... on Cards {
                        title
                        subTitle
                        image {
                            url
                        }
                        button
                        orderBy
                        }
                    }
                    }
                }
                }
            }
            }
        }
    }`;

export interface topHeaderProps {
    dd: {
        logo: {
            url: string
        },
        title: string
    }
}

function App() {
    // const [mainData, setMainData] = useState(null);
    let mainMenuData = [];
    let bannerData: any;
    let topHeader: any;
    let unforgettableContentData: any;
    let escapeContentData: any;
    let twoColumnContentData: any;

    let { loading, error, data } = useQuery(APP_QUERY);

    if (loading) {
        return <p>Loading ...</p>;
    } else if (error) {
        return <p>Error!</p>;
    } else {
        console.log(data);
        mainMenuData = data.homePageCollection.items[0].mainHeader.menuDataCollection.items;
        bannerData = data.homePageCollection.items[0].bannerContent;
        topHeader = data.homePageCollection.items[0].topHeader;
        unforgettableContentData = data.homePageCollection.items[0].unforgettableContent;
        escapeContentData = data.homePageCollection.items[0].escapeContent;
        twoColumnContentData = data.homePageCollection.items[0].twoColumnContent;
        // Object.assign(data.homePageCollection.items[0].topHeader);
        // console.log(topHeader, mainMenuData, bannerData);

        // setMainData(data.homePageCollection.items[0].mainHeader.menuDataCollection.items);
    }
    return (
        <>
            <TopHeader topHeaderObj={topHeader} />
            <MainHeader mainHeaderArray={mainMenuData} />
            <HomePage bannerObj={bannerData} unforgettableContentObj={unforgettableContentData} escapeContentObj={escapeContentData} twoColumnContentObj={twoColumnContentData} />
            <Footer />
        </>
    );
}

export default App;

/*
<p>{topHeader.title}</p>
<img src={topHeader.logo.url=undefined ? '#' : topHeader.logo.url} alt=''/>
{mainMenuData.map((resp: any) => {
    return <p key={resp.menuId}>{resp.menuName}</p>
})}
<p>{bannerData.bannerText1}</p>
<p>{bannerData.bannerText2}</p>
<p>{bannerData.bannerButton}</p>
<img src={topHeader.bannerImage.url=undefined ? '#' : topHeader.bannerImage.url} alt=''/>
 */

/*client.query({
        query: gql`
            query {
      homePageCollection {
        items {
          ... on HomePage {
            title
            topHeader {
              ... on TopMenu {
                logo {
                  url
                }
                title
              }
            }
            mainHeader {
              ... on NavigationMenu {
                title
                menuDataCollection {
                  items {
                        ... on MainMenu {
                      menuName
                      menuId
                    }
                  }
                }
              }
            }
            bannerContent {
              ... on Banner {
                bannerImage {
                  url
                }
                bannerText1
                bannerText2
                bannerButton
              }
            }
          }
        }
      }
    }`,
    })
    .then((result) => {
        console.log(result.data.homePageCollection.items[0].mainHeader.menuDataCollection.items);
        setMainData(result.data.homePageCollection.items[0].mainHeader.menuDataCollection.items);
    })
    .catch((err) => console.log(err));*/

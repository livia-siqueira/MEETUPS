import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (newMeetup) => {},
    removeFavorites: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});


export const FavoritesContextProvider = ({children}) => {
    const [userFavorites, setUserFavorites] = useState([]);


    const addFavoritesHandler = (favoriteMeetup) =>{
        setUserFavorites((itensPrev) =>  {
            return itensPrev.concat(favoriteMeetup);
        });
    }

    const removeFovariteHandler = (meetupId) => {
        setUserFavorites((itens) => {
            return itens.filter(({id}) => id != meetupId)
        })
    }

    const itemIsFavorite = (meetupId) => {
        return userFavorites.some(({id}) => id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFovariteHandler,
        itemIsFavorite: itemIsFavorite
    };


    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>
}       






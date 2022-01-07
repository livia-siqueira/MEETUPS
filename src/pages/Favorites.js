import { useContext } from "react";
import { MeetupList } from "../components/MeetupList/MeetupList";
import { Card } from "../components/ui/Card";
import { FavoritesContext } from "../store/favorites.context";

export const FavoritesMeetup = () => {
  const contextFav = useContext(FavoritesContext);
  const favorites = contextFav.favorites;

  return (
    <Card>
      {favorites.length > 0 ? (
        <MeetupList data={favorites} />
      ) : (
        <h1>Não há favoritos</h1>
      )}
    </Card>
  );
};

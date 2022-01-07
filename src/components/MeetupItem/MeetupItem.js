import styles from "./Meetup.module.css";
import { Card } from "../ui/Card";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites.context";

export const MeetUpItem = (props) => {
  const { image, description, address, title, id } = props.data;

  const contextFav = useContext(FavoritesContext);
  const isFavorites = contextFav.itemIsFavorite(id);

  const toggleFavorites = () => {
    if (isFavorites) {
      contextFav.removeFavorites(id);
    } else {
      contextFav.addFavorites({
        id: id,
        image: image,
        description: description,
        address: address,
      });
    }
  };
  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={image} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavorites}>
            {isFavorites ? "Remove to favorites" : "To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

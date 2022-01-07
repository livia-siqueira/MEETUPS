import { MeetUpItem } from "../MeetupItem/MeetupItem"
import styles from './MeetupList.module.css'

export const MeetupList = (props) => {
    console.log(props.data)
    return(
        <ul className={styles.list}>
        {props.data.map((item, index) => (
           <MeetUpItem key={item.id} data={item} />
        ))}
        </ul>
    )
}
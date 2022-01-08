import { NewMeetupForm } from "../components/NewMeetupForm/NewMeetupForm"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const NewMeetup = () => {

   const history = useHistory();
    
    const addMeetupHandler = (newMeetup) => {
        fetch('https://allmetups-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(newMeetup),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/')
        }).catch((error) => {throw new Error(error)});
    }
    
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm AddMeetup={addMeetupHandler}/>
        </section>
    )
}
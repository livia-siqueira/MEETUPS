import { useEffect, useState } from "react";
import { MeetUpItem } from "../components/MeetupItem/MeetupItem";
import { MeetupList } from "../components/MeetupList/MeetupList";

export const AllMeetup = () => {

    const [loading, setLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch("https://course-next-default-rtdb.firebaseio.com/meetups.json")
            .then((res) => {
                return res.json();
            }).then(data => {
                const meetups = [];

                for(const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                }
                setMeetups(meetups);
                setLoading(false);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, []);

    /*fetch("https://course-next-default-rtdb.firebaseio.com/meetups.json")
        .then((res) => {
            return res.json();
        }).then(data => {
            setLoading(false);
            setMeetups(data)
        })
        .catch((error) => {
            throw new Error(error);
        });

       entra em looping*/

       if(loading){
        return(
            <section>
                <p>Loading</p>
            </section>
        )
    }
    console.log(meetups)
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList data={meetups} />
        </div>
    );
};

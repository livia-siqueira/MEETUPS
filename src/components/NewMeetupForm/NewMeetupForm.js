import styles from './NewMeetupForm.module.css'
import { Card } from '../ui/Card'
import { useRef } from 'react'

export const NewMeetupForm = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();



    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        
       const newMeetup = {
           title: enteredTitle,
           image: enteredImage,
           description: enteredDescription,
           address: enteredAddress
       }
       props.AddMeetup(newMeetup);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input placeholder='Title' ref={titleInputRef} type="text" id="title" />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup image</label>
                    <input placeholder='Image' ref={imageInputRef} type="url" id="image" />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Meetup description</label>
                    <textarea rows={5} required ref={descriptionInputRef} placeholder='Description' type="text" id="description" />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input placeholder='Address' ref={addressInputRef} type="text" id="address" />
                </div>
                <div className={styles.actions}>
                    <button type="submit">Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}
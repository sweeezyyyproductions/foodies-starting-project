"use client"
import { useRef } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
import { useState } from 'react';   

export default function ImagePicker ({ label, name }) {
    const  [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();


    function handlePickClick() {
        imageInput.current.click();
    }

       
    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            setPickedImage(null);
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPickedImage(fileReader.result);
            }

            

            fileReader.readAsDataURL(file);
        }
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>    
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage}
                 alt="Preview"
                 fill 
                  />
                  }
            </div>
            <input 
            className={classes.input}
            type="file" 
            id={name} 
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
            accept="image/jpg,image/jpeg,image/png" />
            <button className={classes.button} type="button" onClick={handlePickClick}>Pick Image</button>
        </div>    
       </div>     
        
    
}

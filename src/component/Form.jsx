import React, { useState } from 'react';
import '../stylescss/form.css';
import Header from './PostViewComponents/Header';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {apiBaseUrl} from './PostViewComponents/BaseApiUrl'
const Form = () => {
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()
    const upload = async () => {
        const date = new Date();
        let fullDate = date.toString();
        fullDate = fullDate.slice(4, 15);
        await axios.post(apiBaseUrl+'/postview', {
            name: author,
            location: location,
            likes: 30,
            description: description,
            PostImage: image,
            date: fullDate
        }).then(() => {
            alert('Success')
        },navigate('/postview'),window.location.reload())
        .catch((error) => {
            alert('failed')
        }).finally(()=>{
            
        })
    };
    const takeImageFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const imageUrl = event.target.result;
            setImage(imageUrl);
        };
        reader.readAsDataURL(file);
    };

    const takeAuthor = (e) => {
        setAuthor(e.target.value);
    };

    const takeLocation = (e) => {
        setLocation(e.target.value);
    };

    const takeDescription = (e) => {
        setDescription(e.target.value);
    };


  return (
    <div>
      <Header />

      <div className="form">
        <form encType="multipart/form-data">
          <input type="file" name="imageFile" onChange={takeImageFile} placeholder="Insert an image or drag" />
          <input type="text" placeholder="Author" onChange={takeAuthor} value={author} />
          <input type="text" placeholder="Location" onChange={takeLocation} value={location} />
          <textarea cols="30" rows="2" placeholder="Description" onChange={takeDescription} value={description} />

          <button className="btn" onClick={upload}>
            Post
          </button>

          <button onClick={() => navigate("/postview")}>CANCEL</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

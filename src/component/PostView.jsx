import React, { useEffect, useState } from 'react';
import Header from './PostViewComponents/Header'
import Posts from './PostViewComponents/Posts'
import axios from 'axios';
import projectListData from './PostViewComponents/StaticData'
import {apiBaseUrl} from './PostViewComponents/BaseApiUrl'
import '../stylescss/PostView.css'


const PostView = () => {
  const [allData, setAllData] = useState(projectListData());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiBaseUrl+'/postview');
        setAllData(prevData => [...prevData, ...res.data]);
        console.log('hello', res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    
        <Header/>
        {
          allData.map((user) => {
            return (<Posts data={user}/>);
          })
        }
    
    </div>
  )
}

export default PostView;
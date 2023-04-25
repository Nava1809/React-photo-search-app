import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Gallery from './gallery';
import "./App.css"

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(()=>{
    },[])
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })

  }
  return (
    <div>
      <center>
        <br/>
        <h2>React Photo Search <span className='span1'><input type="button" value="Bookmarks" className='input1' /></span></h2><br></br>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" onChange={changeHandler} value={search} className='input2'/>
          <input type="submit" value="Search" className='submit1' />
        </form>
        <br />
        {data.length>=1?<Gallery data={data}/>:<h4></h4>}
      </center>
    </div>
  )
}

export default App

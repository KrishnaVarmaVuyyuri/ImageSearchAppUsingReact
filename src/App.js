
import './App.css';
import React,{useState} from 'react'
import axios from 'axios'
import Images from './components/Images';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
    const[search,setSearch]=useState("")
    const[data,setData]=useState([]);
    const handler =e=>
    {
        setSearch(e.target.value)
    }
    const submitHandler = e =>
    {
        e.preventDefault();
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(response=>setData(response.data.photos.photo)).catch(error=>{console.log("unable to reach the api ",error);});
        console.log(search);
    }




  return (
    <div>
           <h1>Image Seacher</h1>
    <form onSubmit={submitHandler}>
   
    <div class='mb-3'>
    <input type="text" onChange={handler} value={search} class="form-control" id="exampleInputEmail1" placeholder='    Enter text to search for images'/> 
    </div>
   
   <center><button type="submit" class="btn btn-primary" name="Search">Search</button></center> 
    </form>
    <br />
        {data.length>=1?<Images data={data}/>:<h4>No Image Loaded</h4>}
        </div>
  );
}

export default App;

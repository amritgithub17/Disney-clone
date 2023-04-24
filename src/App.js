
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import {   Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import { movies } from './components/fakeData';
import { addMovie } from './features/movies';
// import Admin from './components/Admin';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Detail from './components/Detail';


function App() {
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  const dispatch = useDispatch();
  const data = useSelector((state) =>state.user.value)
  useEffect(() =>{
    movies.map((movie) =>{
      console.log(recommends)
      switch(movie.type){
        case 'recommend':
          // console.log(recommends)
          recommends=[...recommends,{id:movie.id,...movie}] 
          break;
        case 'new':
          // console.log(newDisney)
          newDisney=[...newDisney,{id:movie.id,...movie}] 
          break;
        case 'original':
          originals=[...originals,{id:movie.id,...movie}] 
          break;
        case 'trending':
          trending=[...trending,{id:movie.id,...movie}] 
          break;
        
      
      }
    },[data.name])

    dispatch(addMovie({
      recommend : recommends,
      newDisney : newDisney,
      trending : trending,
      original : originals,
    }))
  })
  return (
    <Router>
      <Header />
      <Routes>
        <Route path ="/" element={<Login />} />
        <Route path ="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

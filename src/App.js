
import './App.css';
import AddAlbum from './components/AddAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import ViewAlbum from './components/ViewAlbum';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      <Route path='/search' element={<SearchAlbum/>}/>
      <Route path='/delete' element={<DeleteAlbum/>}/>
      <Route path='/viewall' element={<ViewAlbum/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;

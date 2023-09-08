
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AppContext } from './Context/contextAPI';
import Feed from "./Component/Feed";
import SearchResult from './Component/SearchResult';
import VideoDetails from './Component/VideoDetails';
import Header from './Component/Header';
function App() {
return(
    <AppContext>
        <BrowserRouter>
        <div className='flex flex-col h-full'>
            <Header></Header>
            <Routes>
                <Route path='/' exact element={<Feed></Feed>}/>
                <Route path='/searchresult/:searchQuery' element={<SearchResult></SearchResult>}/>
                <Route path='/video/:id' element={<VideoDetails></VideoDetails>}/>
            </Routes>
        </div>
        </BrowserRouter>
    </AppContext>
    
)
}

export default App;

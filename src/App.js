import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Box">
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/video/:id"  element={<VideoDetail/>}/>
            <Route path="/channel/:id"  element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

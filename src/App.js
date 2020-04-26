import React, { useState } from 'react';
import { searchReddit } from './api';
import Posts from './components/Posts';
import Search from './components/Search';

function App() {
  const [posts, setPosts] = useState(null);

  const search = async (data) => {
    let result = await searchReddit(data);
    setPosts(result['data']['children']);
  };

  return (
    <React.Fragment>
      <div className="container">
        <Search search={search} />
        <Posts posts={posts} />
      </div>
    </React.Fragment>
  );
}

export default App;

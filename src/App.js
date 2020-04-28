import React, { useEffect, useState } from 'react';
import { getSavedPosts, getToken, redditOAuth, searchReddit } from './api';
import Navbar from './components/navbar/Navbar';
import Posts from './components/Posts';
import Search from './components/Search';

function App() {
  const [posts, setPosts] = useState(null);

  const search = async (data) => {
    let result = await searchReddit(data);
    setPosts(result['data']['children']);
  };

  const login = () => {
    redditOAuth();
  };

  const loadPosts = async () => {
    const result = await getSavedPosts();
    setPosts(result['data']['children']);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      getToken(code);
    }
  });

  return (
    <React.Fragment>
      <Navbar loadPosts={loadPosts} login={login} />
      <div className="container">
        <Search search={search} />
        <Posts posts={posts} />
      </div>
    </React.Fragment>
  );
}

export default App;

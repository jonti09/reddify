import React from 'react';

function Posts(props) {
  const { posts } = props;
  const redditBaseUrl = 'https://reddit.com';

  const getDisplayText = (text) => {
    if (text.length > 255) {
      return `${text.substr(0, 253)} ...`;
    } else {
      return text;
    }
  };

  return posts ? (
    <React.Fragment>
      <div className="card-columns">
        {posts.map((post) => {
          let content = post['data'];
          return (
            <div class="card">
              <img src={content['url']} class="card-img-top" alt="" />
              <div class="card-body ">
                <h5 class="card-title">
                  <a href={`${redditBaseUrl}${content['permalink']}`}>{content['title']}</a>
                </h5>
                <p class="card-text">{getDisplayText(content['selftext'])}</p>
              </div>
              <footer class="card-footer">
                <a
                  class="btn btn-outline-primary btn-sm"
                  href={`${redditBaseUrl}/${content['subreddit_name_prefixed']}`}
                >
                  {content['subreddit_name_prefixed']}
                </a>
                <button className="btn btn-outline-warning btn-sm float-right">
                  <span className="fas fa-arrow-up"></span>
                  <span className="ml-1">{content['ups']}</span>
                </button>
              </footer>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  ) : (
    ''
  );
}

export default Posts;

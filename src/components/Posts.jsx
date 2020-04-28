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
            <div className="card" key={content['id']}>
              <img src={content['url']} className="card-img-top" alt="" />
              <div className="card-body ">
                <h5 className="card-title">
                  <a href={`${redditBaseUrl}${content['permalink']}`}>{content['title']}</a>
                </h5>
                <p className="card-text">{getDisplayText(content['selftext'])}</p>
              </div>
              <footer className="card-footer">
                <a
                  className="btn btn-outline-primary btn-sm"
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

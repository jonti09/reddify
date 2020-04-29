const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-mixed-operators
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const getEnvVar = (key) => {
  let modeString = {
    development: {
      REACT_APP_REDDIT_REDIRECT: process.env.REACT_APP_REDDIT_DEV_REDIRECT,
      REACT_APP_REDDIT_CLIENT_ID: process.env.REACT_APP_REDDIT_DEV_CLIENT_ID,
      REACT_APP_REDDIT_CLIENT_SECRET: process.env.REACT_APP_REDDIT_DEV_CLIENT_SECRET,
    },
    production: {
      REACT_APP_REDDIT_REDIRECT: process.env.REACT_APP_REDDIT_PROD_REDIRECT,
      REACT_APP_REDDIT_CLIENT_ID: process.env.REACT_APP_REDDIT_PROD_CLIENT_ID,
      REACT_APP_REDDIT_CLIENT_SECRET: process.env.REACT_APP_REDDIT_PROD_CLIENT_SECRET,
    },
  };

  return modeString[process.env.NODE_ENV][key];
};

export const redditConfig = {
  SCOPE: `identity,edit,flair,history,modconfig,modflair,modlog,modposts,modwiki,mysubreddits,privatemessages,read,report,save,submit,subscribe,vote,wikiedit,wikiread`,
  REDIRECT_URI: getEnvVar('REACT_APP_REDDIT_REDIRECT'),
  CLIENT_ID: getEnvVar('REACT_APP_REDDIT_CLIENT_ID'),
  RESPONSE_TYPE: 'code',
  STATE: getUUID(),
  DURATION: 'permanent',
  CLIENT_SECRET: getEnvVar('REACT_APP_REDDIT_CLIENT_SECRET'),
};

console.log(redditConfig)

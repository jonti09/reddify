const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-mixed-operators
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const redditConfig = {
  SCOPE: `identity,edit,flair,history,modconfig,modflair,modlog,modposts,modwiki,mysubreddits,privatemessages,read,report,save,submit,subscribe,vote,wikiedit,wikiread`,
  REDIRECT_URI: 'http://localhost:3000',
  CLIENT_ID: process.env.REACT_APP_REDDIT_CLIENT_ID,
  RESPONSE_TYPE: 'code',
  STATE: getUUID(),
  DURATION: 'permanent',
  CLIENT_SECRET: process.env.REACT_APP_REDDIT_CLIENT_SECRET,
};

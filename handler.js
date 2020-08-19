'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=i67qnj61hami3bb3q1c50vkai2'
    + '&client_secret=e4e6v78cpm12ial54qhvlqrekf'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://dmrapuano1.github.io/meetup_application/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=i67qnj61hami3bb3q1c50vkai2'
    + '&client_secret=e4e6v78cpm12ial54qhvlqrekf'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.code

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

// https://secure.meetup.com/oauth2/authorize?client_id=i67qnj61hami3bb3q1c50vkai2&response_type=code&redirect_uri=https://dmrapuano1.github.io/meetup/

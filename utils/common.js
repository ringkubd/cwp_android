import EncryptedStorage from 'react-native-encrypted-storage';

const isValidUrl = url => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};

async function retrieveServer() {
  try {
    const session = await EncryptedStorage.getItem('server_list');

    if (session) {
      return session;
    } else {
      return [];
    }
  } catch (error) {
    // There was an error on the native side
  }
}

const isServerExist = server => {
  let exist = false;
  retrieveServer().then(serverList => {
    const isExist = serverList.filter(s => {
      return s.base_url === server;
    }).length;
    console.log(isExist);
    if (isExist !== 0) {
      exist = true;
    }
  });
  return exist;
};

export {isValidUrl, retrieveServer, isServerExist};

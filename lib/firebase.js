import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: 'thien-io'
    }),
<<<<<<< HEAD
    databaseURL: 'https://thien-io-default-rtdb.firebaseio.com'
=======
    databaseURL: 'https://thien-io-default-rtdb.firebaseio.com/'
>>>>>>> e48f8b11b380c530c30812e41924095171d61585
  });
}

export default admin.database();

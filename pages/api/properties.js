import {connectToDatabase} from 'lib/mongodb'

export default async function handler (req, res) {
  res.json({hello: 'world'});
  
}
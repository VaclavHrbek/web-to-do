import connectDatabase from '../database/connect.js';


export default defineNitroPlugin((nitroApp) => {
  connectDatabase();
  })
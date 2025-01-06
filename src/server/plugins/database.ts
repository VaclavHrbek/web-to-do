import connect_database from '../database/connect.js';


export default defineNitroPlugin((nitroApp) => {
  connect_database();
  })
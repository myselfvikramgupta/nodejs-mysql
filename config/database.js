import knex from 'knex';
import {DB_CONNECTION,DB_HOST,DB_USERNAME,DB_PASSWORD,DB_DATABASE} from './index';
const mySqlCon = knex({
    client: DB_CONNECTION,
    connection: {
      host : DB_HOST,
      user : DB_USERNAME,
      password : DB_PASSWORD,
      database : DB_DATABASE
    }
  });
  //check connection
  mySqlCon.raw('select 1+1 as result').catch(err => {
  console.log(err);
  process.exit(1);
});
export default  mySqlCon;
import knex from 'knex';

const mySqlCon = knex({
    client: process.env.DB_CONNECTION,
    useNullAsDefault: true,
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    }
  });
  //check connection
  mySqlCon.raw('select 1+1 as result').catch(err => {
  console.log(err);
  process.exit(1);
});
export default  mySqlCon;
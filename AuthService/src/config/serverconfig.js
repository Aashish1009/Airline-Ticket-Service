require("dotenv").config();

const PORT = process.env.PORT;
const DB_SYNC = process.env.DB_SYNC;

module.exports ={
    PORT,
    DB_SYNC
}
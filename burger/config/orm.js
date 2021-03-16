const connection = require('./connection.js');

// Object Relational Mapper (ORM)

const orm = {
    selectAll(tableInput) {
        const queryString = 'SELECT * FROM ?? ';
        connection.query(
            queryString,
            [tableInput],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
    insertOne(tableInput) {
        const queryString = 'INSERT * INTO ?? ';
        connection.query(
            queryString,
            [tableInput],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },

    updateOne(tableInput) {
        const queryString = 'UPDATE * INTO ?? ';
        connection.query(
            queryString,
            [tableInput],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
  
};

module.exports = orm;

const db = require('../../configs/db.config');

const getAllUsers = () => {
	return db.query("SELECT * FROM users;").then(data => {
		return data.rows;
	})
}

const getUserById = id => {
	return db.query("SELECT * FROM users; WHERE id = $1", [id]).then(data => {
		return data.rows;
	})
}

const registerNewUser = function(user) {
  return db
    .query(`
      INSERT INTO users (name, password)
      VALUES ($1, $2)
      RETURNING *
      `, [user.email, user.password]
    )
    .then((result) => {
      if (result.rows[0]) {
        return Promise.resolve(result.rows[0]);
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = {getAllUsers, getUserById, registerNewUser}
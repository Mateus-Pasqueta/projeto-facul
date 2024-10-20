import db from "../config/database.js";

export const getUserById = async (userId) => {

    const [ results ] = await db.query(
        "SELECT * FROM users WHERE id = ?",
        [userId]
    );

    if (results && results.length > 0 ) {
        const user = results[0];
        return user;
    }
    return undefined;
}


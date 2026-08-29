const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/**
 * STEP-BY-STEP AUTH SERVICE LOGIC
 * ================================
 * Standard Flow for User Registration:
 * 1. Receive user credentials (username, email, plain-text password) from the route handler.
 * 2. Hash the plain-text password securely using bcrypt.hash(password, saltRounds).
 * 3. Prepare an SQL INSERT query using parameterized placeholders (?) to prevent SQL injection.
 * 4. Execute the query using .run() with the hashed password.
 * 5. Return the created user metadata (ID, username, email) back to the route (NEVER return the password).
 */

const registerUser = async (user_name, email, password) => {
    // STEP 1: Hash the plain-text password asynchronously
    // bcrypt.hash(plainTextPassword, saltRounds)
    // 10 saltRounds is the industry standard for computational security & performance.
    const hashedPassword = await bcrypt.hash(password, 10);

    // STEP 2: Prepare the SQL query with placeholders (?) for better-sqlite3
    const store_into_db_query = db.prepare("INSERT INTO users (user_name, email, password) VALUES (?, ?, ?)");

    // STEP 3: Execute the prepared statement passing the hashed password
    const result = store_into_db_query.run(user_name, email, hashedPassword);

    console.log('The Service layer has been reached. Password has been hashed and is stored into db.');

    // STEP 4: Return sanitized user object (exclude sensitive password hash)
    return { id: result.lastInsertRowid, user_name, email };
};

/*==============================================LOGIN LOGIC========================================================================== */
const verifyUser = async (user_name , password) => {
    //first extract the user details from the dB
    const user = db.prepare("select * from users where user_name = ?").get(user_name);

    // then check if the user exists or not
    if(!user){
        throw new Error("User not found");
    }

    // then compare the password
    const verify_identity = await bcrypt.compare(password,user.password);
    if(!verify_identity){
        throw new Error("Invalid Credentials");
    }

    // if every thing is alright , provide the jwt token
    const token = jwt.sign(
        {
            id : user.id ,
            user_name : user.user_name,
        },
        process.env.JWT_SECRET || "MY_SECRET_KEY",
        {expiresIn : "1h"}
    );

    return{
        token , 
        user : {id : user.id , user_name : user.user_name , email : user.email}
    }
}

module.exports = {
    registerUser,
    verifyUser
};

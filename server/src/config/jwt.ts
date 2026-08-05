import jwt from "jsonwebtoken";


export function createToken(
    payload:object
){

    return jwt.sign(
        payload,
        process.env.JWT_SECRET!,
        {
            expiresIn:"7d"
        }
    );

}
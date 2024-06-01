import { usuarios } from "../Data/usersData";

export function loginSecurity ({usuario, pwd}) {
    let authorized = false;

    for(let attr of usuarios){
        if(attr['usuario'] === usuario && attr['password'] === pwd){
            authorized = true;
        }
    }
    
    return authorized

}
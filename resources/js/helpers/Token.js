//import { split } from "postcss/lib/list";

class Token{

    isValid(token){
        const payload=this.payload(token);
        if(payload){
           return this.iss ==  "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/register" ? true : false;
        }
        false
    }

    payload(token){
        const payload=token.split('.')[1];
        return this.decode(payload);
    }

    decode(payload){
        return JSON.parse(atob('payload'));
    }

}

export default Token = new Token();
//for example we have a website like facebook... and we have account system there. 
// if we has a data like what the role of the user is..
//if the data is guest we will show "welcome guest"
//if the data is a mod, we will show "welcome moderator"
//otherwise we will show "unknown user";

const role = 'guest';

switch(role) {
    case 'guest' : 
        console.log('welcome guest')
        break;
        

    case 'mod' : 
        console.log("welcome Moderator");
        break;
    default : 
        console.log("unknown user");
};

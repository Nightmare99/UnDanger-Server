import mongoose from 'mongoose';
import { User } from '../models/schemas.mjs';

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export function createUser(username, password, email) {
    const me = new User({
        email: email,
        username: username,
        password: password,
        recordingLocation: '',
        emergency: {
            name: 'NULL',
            phno: '69420',
        }, 
    });
    me.save().then(() => console.log('user added'))
            .catch((err) => console.log('user already exists'));
}

export async function getDetails(username) {
    try {
        var user = await User.findOne({ username: username });
        console.log(user.password);
        return  user.password;
    }
    catch(err) {
        console.log(err);
        return 'Not Found';
    }
}
//createUser("vishal", "abcde", "example@example.com");
//getDetails("vishal4");
import mongoose from 'mongoose';
import { User } from './models/schemas.mjs';

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function createUser(username, password, email) {
    const me = new User({
        email: email,
        username: username,
        password: password,
        emergency: {
            name: 'NULL',
            phno: '69420',
        }, 
    });
    me.save().then(() => console.log('user added'))
            .catch((err) => console.log('user already exists'));
}

async function getDetails(username) {
    try {
        user = await User.findOne({ username: username });
        console.log(user.password);
    }
    catch(err) {
        console.log("No such user.");
    }
}
createUser("vishal3", "abcde", "example@example.com");
getDetails("vishal");
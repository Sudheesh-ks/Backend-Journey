const mongoose = require('mongoose');


mongoose
.connect(
    process.env.MONGO_URI
)
.then(() => console.log("database connected successfully"))
.catch((err) => console.log(err))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);


async function runQueryExample() {
    try {

        // create a new document
        // const newUser = await User.create({
        //     name: "Ronaldo",
        //     email: "cr7@gmail.com",
        //     age: 41,
        //     isActive: false,
        //     tags: ["footballer","youtuber"],
        // })

        // console.log("Created new user", newUser);


        // Get all users
        const allUsers = await User.find()
        console.log(allUsers);

        // Get NonActive users
        // const NonActiveUsers = await User.find({isActive: false})
        // console.log(NonActiveUsers);


        // Delete a user
        // const deleteUser = await User.deleteOne({name: 'Sudheesh'});
        // console.log("User successfully deleted");

        // Update a user
        // const updateUser = await User.updateOne({name: "Ronaldo"},{
        //     $set:{age: 39}
        // });
        // console.log("User updated successfully")

        
    } catch (error) {
        console.log(error)
    } finally {
        await mongoose.connection.close();
    }
}


runQueryExample()
const faker = require('faker');

const db = require('../config/connection');
const { Note, User } = require('../models');

db.once('open', async () => {
  await Note.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);


  // create notes
  let createdNotes = [];
  for (let i = 0; i < 100; i += 1) {
    const noteText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdNote = await Note.create({ noteText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { notes: createdNote._id } }
    );

    createdNotess.push(createdNotes);
  }


  console.log('all done!');
  process.exit(0);
});

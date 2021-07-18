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

  // create friends
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let friendId = userId;

  //   while (friendId === userId) {
  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     friendId = createdUsers.ops[randomUserIndex];
  //   }

  //   await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  // }

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

<<<<<<< HEAD
    createdNotes.push(createdNote);
=======
    createdNotess.push(createdNotes);
>>>>>>> develop
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomNoteIndex = Math.floor(Math.random() * createdNotes.length);
    const { _id: noteId } = createdNotes[randomNoteIndex];

    await Note.updateOne(
      { _id: noteId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});

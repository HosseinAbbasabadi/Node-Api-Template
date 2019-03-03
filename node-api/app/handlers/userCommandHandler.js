const createUser = require('../command/createUser');

const users = [];

const create = (command) => {
    // use promis to return id
    console.log('i am here in user command handler', command.name, command.family);
    command.id = users.length + 1;
    users.push(command);
    return command.id;
}

module.exports.create = create;
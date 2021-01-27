const fs = require('fs');

const usersDataPath = '../data.json';

const createFile = () => {
    fs.writeFileSync(usersDataPath, JSON.stringify({}), 'utf8');
}

const readFile = () => {
    if (!fs.existsSync(usersDataPath)) {
        createFile();
    }
    const fileBuffer = fs.readFileSync(usersDataPath, 'utf8');
    if (!fileBuffer) {
        createFile();
        const fileBuffer = fs.readFileSync(usersDataPath, 'utf8');
        const fileParsed = JSON.parse(fileBuffer);
        return fileParsed;
    }
    else {
        const fileParsed = JSON.parse(fileBuffer);
        return fileParsed;
    }
}

const writeFile = (fileParsed) => {
    fs.writeFileSync(usersDataPath, JSON.stringify(fileParsed), 'utf8');
}

const getUsers = async (req, res) => {
    try {
        const fileParsed = readFile();
        res.status(200).send(fileParsed);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const addUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        if (name === undefined || email === undefined || age === undefined) {
            return res.status(400).send({ error: 'parameters are not valid' });
        }
        const fileParsed = readFile();
        fileParsed[email] = { name, age };
        writeFile(fileParsed);
        res.status(200).send();
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { email } = req.params;
        const fileParsed = readFile();
        if (!fileParsed[email]) {
            res.status(400).send('user not found')
        }
        delete fileParsed[email];
        writeFile(fileParsed);
        res.status(200).send();
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getUsers,
    addUser,
    deleteUser
}
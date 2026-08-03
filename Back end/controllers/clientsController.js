const { insert, selectAll } = require("../database");

function createClient(req, res) {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject) {
        return res.status(400).json({
            error: "Name, email and subject are required."
        });
    }

    const result = insert.run(name, email, subject, message);

    res.status(201).json({
        id: result.lastInsertRowid,
        message: "Client saved successfully."
    });
}

function getClients(req, res) {
    const clients = selectAll.all();

    res.status(200).json(clients);
}

module.exports = {
    createClient,
    getClients
};
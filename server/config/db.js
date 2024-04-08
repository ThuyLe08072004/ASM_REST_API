const mongoose = require('mongoose');

const local = "mongodb+srv://thuyle08072004:Chds6xjRpPIU9JRm@cluster0.0n8qgpd.mongodb.net/ASM";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };

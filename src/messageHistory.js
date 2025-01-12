const messageHistory = [];

const addMessage = (message) => {
    messageHistory.push(message);
};

const getMessageHistory = () => {
    return messageHistory;
};

module.exports = {
    addMessage,
    getMessageHistory,
};
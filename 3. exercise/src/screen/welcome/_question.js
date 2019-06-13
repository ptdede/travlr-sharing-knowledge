const questions = [
    {
        name: 'ACTIONS',
        type: 'list',
        message: 'Hi! What do you wanna do?',
        choices: [
            {
                name: 'Calculate number',
                value: 'CALCULATE'
            },
            {
                name: 'Just say Hi!',
                value: 'SAY_HI'
            }
        ],
    }
]; 

module.exports = questions

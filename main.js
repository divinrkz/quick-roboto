const commands = require('commands');
const {alert} = require('./lib/dialogs');

function quickRoboto2(selection) {
    console.log(selection.items);
    selection.items[0].width = 400;
    if (selection.items.length !== 0) {
        selection.items.forEach((node) => {
            node.styleRanges = [{
                fontFamily: 'Roboto'
            }]
        })

        showAlert('Just applied Roboto Font')
    } else {
        showAlert('Please select some text')
    }
}
function showAlert(message) {
    alert(message);
}

module.exports = {
    commands: {
        quickRoboto2
    }
}
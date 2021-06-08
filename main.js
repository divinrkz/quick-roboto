const commands = require('commands');

function quickRoboto2(selection) {
    console.log(selection.items);
    selection.items[0].width = 400;
    if (selection.items.length !== 0) {
        selection.items.forEach((node) => {
            node.styleRanges = [{
                fontFamily: 'Montserrat'
            }]
        })
    }
}

module.exports = {
    commands: {
        quickRoboto2
    }
}
import UIkit from 'uikit';


function moveMessage(newValue) {
    // Show notification for moving or removing book
    newValue !== 'none'
        ? UIkit.notification({ message: `Moved to "${newValue}"`, status: 'primary', timeout: 1000 }) // Move book
        : UIkit.notification({ message: `Removed from library`, status: 'warning', timeout: 1000 });  // Remove book
}

function errorMessage() {
    // Show notification for failed API request
    UIkit.notification({ message: '<span data-uk-icon="warning"></span> Connection Error', status: 'danger', timeout: 1000 })
}

function addMessage(newValue) {
    // Show notification for adding a book from query
    UIkit.notification({ message: `<span data-uk-icon="check"></span> Added to "${newValue}"`, status: 'success', timeout: 1000 });
}


export { moveMessage, errorMessage, addMessage };
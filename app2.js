document.addEventListener('DOMContentLoaded', function () {
    var addInputButton = document.querySelector('#addInput');
    var inputContainer = document.querySelector('#inputContainer');
    var inputCount = 0; // To give each input a unique id
    addInputButton.addEventListener('click', function () {
        inputCount++;
        // Create a new input element
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.placeholder = "skill ".concat(inputCount);
        newInput.id = "input".concat(inputCount);
        newInput.classList.add('skill_button');
        // Append the new input to the container
        inputContainer.appendChild(newInput);
        // Add a line break for spacing
        inputContainer.appendChild(document.createElement('br'));
    });
});

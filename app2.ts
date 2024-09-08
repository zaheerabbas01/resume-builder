document.addEventListener('DOMContentLoaded', () => {
    const addInputButton = document.querySelector('#addInput') as HTMLButtonElement;
    const inputContainer = document.querySelector('#inputContainer') as HTMLDivElement;

    let inputCount = 0; // To give each input a unique id

    addInputButton.addEventListener('click', () => {
        inputCount++;

        // Create a new input element
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.placeholder = `skill ${inputCount}`;
        newInput.id = `input${inputCount}`;
        newInput.classList.add('skill_button');

        // Append the new input to the container
        inputContainer.appendChild(newInput);

        // Add a line break for spacing
        inputContainer.appendChild(document.createElement('br'));
    });
});

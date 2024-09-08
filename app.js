document.addEventListener('DOMContentLoaded', function () {
    var x = document.querySelector('#tabs');
    var generateResumeButton = document.querySelector('#generateResume');
    var user_name = document.querySelector('#name');
    var user_exp = document.querySelector('#exp');
    var user_email = document.querySelector('#email');
    var user_adress = document.querySelector('#adress');
    var user_deg = document.querySelector('#deg');
    var user_field = document.querySelector('#field');
    var user_gradYear = document.querySelector('#gradYear');
    var user_uniName = document.querySelector('#uniName');
    var inputContainer = document.querySelector('#inputContainer');
    var displayForm = document.getElementById('displayForm');
    var displayName = document.getElementById('displayName');
    var displayExp = document.getElementById('displayExp');
    var displayEmail = document.getElementById('displayEmail');
    var displayAdress = document.getElementById('displayAdress');
    var displayDeg = document.getElementById('displayDeg');
    var displayField = document.getElementById('displayField');
    var displayGradYear = document.getElementById('displayGradYear');
    var displayUni = document.getElementById('displayUni');
    // const displaySkills = document.getElementById('displaySkills') as HTMLSpanElement;
    var skillsContainer = document.getElementById('skillsContainer');
    x.addEventListener('submit', function (e) {
        e.preventDefault();
        if (e.submitter.id === 'generateResume') {
            console.log(user_name.value, user_exp.valueAsNumber, user_email.value, user_deg.value, user_field.value, user_gradYear.value);
            displayName.textContent = user_name.value;
            displayExp.textContent = user_exp.valueAsNumber.toString();
            displayEmail.textContent = user_email.value;
            displayAdress.textContent = user_adress.value;
            displayDeg.textContent = user_deg.value;
            displayField.textContent = user_field.value;
            displayUni.textContent = user_uniName.value;
            displayGradYear.textContent = user_gradYear.value;
            // Collect and display the dynamically added skill inputs
            // const skillInputs = inputContainer.querySelectorAll('input');
            // let skills: string[] = [];
            // skillInputs.forEach((input) => {
            //     skills.push(input.value); // Collect the skill value
            // });
            // // Display the skills in the second form
            // displaySkills.textContent = skills.join(' '); // Join the skills as a comma-separated string
            // Clear the skills container before adding new skill boxes
            skillsContainer.innerHTML = '';
            // Collect and display the dynamically added skill inputs
            var skillInputs = inputContainer.querySelectorAll('input');
            skillInputs.forEach(function (input) {
                var skillBox = document.createElement('div');
                skillBox.classList.add('skill-box');
                skillBox.textContent = input.value; // Set skill value inside the box
                // Append each skill box to the skills container
                skillsContainer.appendChild(skillBox);
            });
            // Show the second form
            displayForm.style.display = 'block';
        }
    });
});

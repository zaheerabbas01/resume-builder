document.addEventListener('DOMContentLoaded',() => {

    const x = document.querySelector('#tabs')! as HTMLFormElement;
    const generateResumeButton = document.querySelector('#generateResume')! as HTMLButtonElement;
    
    const user_name = document.querySelector('#name') as HTMLInputElement;
    const user_exp = document.querySelector('#exp') as HTMLInputElement;
    const user_email = document.querySelector('#email') as HTMLInputElement;
    const user_adress = document.querySelector('#adress') as HTMLInputElement;
    const user_deg = document.querySelector('#deg') as HTMLInputElement;
    const user_field = document.querySelector('#field') as HTMLInputElement;
    const user_gradYear = document.querySelector('#gradYear') as HTMLSelectElement;
    const user_uniName = document.querySelector('#uniName') as HTMLInputElement;
    const inputContainer = document.querySelector('#inputContainer') as HTMLDivElement;

    

    const displayForm = document.getElementById('displayForm') as HTMLElement;
    const displayName = document.getElementById('displayName') as HTMLSpanElement;
    const displayExp = document.getElementById('displayExp') as HTMLSpanElement;
    const displayEmail = document.getElementById('displayEmail') as HTMLSpanElement;
    const displayAdress = document.getElementById('displayAdress') as HTMLSpanElement;
    const displayDeg = document.getElementById('displayDeg') as HTMLSpanElement;
    const displayField = document.getElementById('displayField') as HTMLSpanElement;
    const displayGradYear = document.getElementById('displayGradYear') as HTMLSpanElement;
    const displayUni = document.getElementById('displayUni') as HTMLSpanElement;
    // const displaySkills = document.getElementById('displaySkills') as HTMLSpanElement;
    const skillsContainer = document.getElementById('skillsContainer') as HTMLDivElement;

    
    x.addEventListener('submit',(e:SubmitEvent) => {
        e.preventDefault();

        if ((e.submitter as HTMLButtonElement).id === 'generateResume') {
            
            console.log(
                user_name.value,
                user_exp.valueAsNumber,
                user_email.value,
                user_deg.value,
                user_field.value,
                user_gradYear.value
            );
    
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
            const skillInputs = inputContainer.querySelectorAll('input');
            skillInputs.forEach((input) => {
                const skillBox = document.createElement('div');
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
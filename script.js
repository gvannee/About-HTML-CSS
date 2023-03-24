// TODO(you): Write the JavaScript necessary to complete the assignment.
//choose object
const container = document.querySelector('#container')
const introduction = document.querySelector('#introduction');
const btn_again = document.querySelector('#btn-try-again');
const attempt = document.querySelector('#attempt-quiz');
const btn_submit = document.querySelector('#btn-submit');
const review_quiz = document.querySelector('#review-quiz')
const btn_start = document.querySelector('#btn-start');
const btn_review = document.querySelector('#btn-review');
let htmlNodes = document.getElementsByName('option')
const options = document.querySelectorAll('.option');
const answer = document.querySelector('.answer');

//hide screen 2 and screen 3 at first
attempt.classList.add('hide');
review_quiz.classList.add('hide')

//show or hide the screen
function showHide(event) {
    const button_click = event.currentTarget;
    if (button_click === btn_start) { //click start the quiz
        introduction.classList.add('hide');
        attempt.classList.remove('hide');
        container.scrollIntoView(true);
        

    } else if (button_click === btn_submit) { //click submit
        introduction.classList.add('hide')

        attempt.classList.add('hide')
        let text;
        if (confirm("Really want to finish?") == true) { //confirm before submiting the quiz

            container.scrollIntoView(true);
            review_quiz.classList.remove('hide')
            
        } else { //show the screen 1 

            introduction.classList.remove('hide');
            container.scrollIntoView(true);
            
        }

    } else {
        introduction.classList.remove('hide');
        review_quiz.classList.add('hide');
        container.scrollIntoView(true);
        location.reload();
    }


    
}

function changeColor(event) {
    const option_select = event.currentTarget;
    // const option_selecteds = document.querySelectorAll('.option-selected');
    let radioButtonsArray = Array.from(htmlNodes)
    let isRadioChecked = radioButtonsArray.some(element => element.checked);
    for (const option_selected of options) {
        if(isRadioChecked) {
            option_select.classList.add('option-selected')
            option_selected.classList.remove('option-selected')
        } 
    }
}


//change screen 
btn_start.addEventListener("click", showHide);
btn_submit.addEventListener("click", showHide);
btn_again.addEventListener("click", showHide);
for(let option of options) {
    option.addEventListener("click", changeColor);
}


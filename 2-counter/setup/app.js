// Select value and buttons
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

// Initial
let count = 0;

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        // Change counter depending on which button
        if (styles.contains('decrease')) { count--; }
        else if (styles.contains('reset')) { count = 0; }
        else if (styles.contains('increase')){ count++; }

        // Change color based on positive/negative
        if (count < 0) { value.style.color = 'red'; }
        else if (count > 0) { value.style.color = 'green'; }
        else { value.style.color = '#222'; }

        value.textContent = count;
    })
});

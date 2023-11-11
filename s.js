const btn = document.querySelector('#btn');
    btn.onclick = function() {
        var cube = document.querySelector('.cube');
        var buttonGroup = document.querySelector('.button-group');
        var current = '';
        function changeSide() {
            var checkedRadio = buttonGroup.querySelector(':checked');
            var showClass = 'show-' + checkedRadio.value;
            if(current) {
                cube.classList.remove(current);
            }
            cube.classList.add(showClass);
            current = showClass;
        }
        changeSide();
        buttonGroup.addEventListener('change' , changeSide);
    }

// Above is the functions for buttons which helps the cube to rotate front , back , left , right , up and down.

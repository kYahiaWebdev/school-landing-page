document.querySelectorAll('.theme-buttons button').forEach(button => {
   button.addEventListener('click', e => {
      const gradients = document.querySelectorAll('[class*="gradient-"]');
      const color = e.target.id.slice(0, -4);
      gradients.forEach(gradient => {
         gradient.classList.remove('gradient-purple', 'gradient-green', 'gradient-orange')
         switch (color) {
            case 'green':
               gradient.classList.add('gradient-green');
            break;
   
            case 'orange':
               gradient.classList.add('gradient-orange');
            break;
                  
            default:
               gradient.classList.add('gradient-purple')
            break;
         }
      })
   });
});
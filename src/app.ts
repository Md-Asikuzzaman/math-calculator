window.addEventListener('load', () => {
  app();
});

const app = () => {
  let display = document.querySelector('.display') as HTMLInputElement;
  let buttons = document.querySelectorAll('button');
  let string: string = '';

  buttons.forEach((button) => {
    button.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.innerHTML == '=') {
        try {
          if (eval(string) == undefined) {
            display.value = '0';
            string = '';
          } else {
            string = eval(string);
            display.value = string;
          }
        } catch (error) {
          display.value = 'Invalid Logic!';
          string = '';
        }
      } else if (target.innerHTML == 'AC') {
        string = '';
        display.value = '0';
      } else if (target.innerHTML == 'DE') {
        try {
          string = string.substring(0, string.length - 1);
          display.value = string;
        } catch (error) {
          string = '';
          display.value = string;
        }
      } else {
        string += target.innerHTML;
        display.value = string;
      }
    });
  });
};

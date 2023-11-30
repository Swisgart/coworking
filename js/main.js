const currentUrl = window.location.href;
console.log(currentUrl);

let langBtns = document.querySelectorAll('.language__btn');


// langBtns.forEach((item) => {
//   item.addEventListener('click', () => {
//     langBtns.forEach((btn) => {
//       btn.classList.remove('active');
//     });
//     item.classList.add('active')

//   })
// })


langBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    let language = btn.lang

    // Измените содержимое сайта на соответствующий язык
    // Например, вы можете использовать условные операторы или переключатели для изменения текста, изображений и других элементов на странице

    // Пример: изменение текста заголовка
    if (language === 'ru') {
      document.querySelector('.header__title').textContent = 'Work station — это удобное расположение, готовая инфраструктура и атмосфера, которая подойдет для проведения деловых встреч в любом формате.';
      document.querySelector('.modal__button').textContent = 'Забронировать'
    } else if (language === 'en') {
      document.querySelector('.header__title').textContent = 'Work station is a convenient location, ready-made infrastructure and atmosphere that is suitable for holding business meetings in any format.';
      document.querySelector('.modal__button').textContent = 'Reservation'
    }


    // Удалите класс "active" у всех кнопок или элементов языков
    langBtns.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Добавьте класс "active" только к выбранной кнопке или элементу языка
    btn.classList.add('active');
  });
});




//Кнопка бургер меню//
const overlay = document.querySelector(".header__overlay");
const burgerButton = document.querySelector(".burger-button");

burgerButton.addEventListener("click", () => {
  overlay.classList.toggle("is-active");
});

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("is-active");
});

// Переключение страниц секции header! //

const menuLink = document.querySelectorAll(".header__menu-link");

menuLink.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  evt.preventDefault();
  const target = evt.currentTarget;

  // Убираем активный класс у всех ссылок
  menuLink.forEach(function (item) {
    item.classList.remove("is-active");
  });

  // Добавляем активный класс на текущую ссылку
  target.classList.add("is-active");

  // Получаем идентификатор из href (например, #section-id)
  const targetId = target.getAttribute("href").substring(1); // Убираем "#" из href

  // Находим соответствующий элемент на странице по ID
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Находим высоту хедера (или 0, если хедер не найден)
    const header = document.querySelector("header"); // Измените селектор на свой
    const headerHeight = header ? header.offsetHeight : 0;

    // Корректируем положение прокрутки
    const offsetTop = targetElement.offsetTop - headerHeight;

    // Прокручиваем страницу к нужному элементу с плавной анимацией
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth", // Плавная прокрутка
    });
  }
}

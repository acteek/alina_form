$("#orderForm").validate({
  rules: {
    surname: "required",
    surname: {
      required: true,
      minlength: 2
    },
    name: "required",
    name: {
      required: true,
      minlength: 2
    },
    region: "required",
    region: {
      required: true,
      minlength: 5
    }
  },
  messages: {
    surname: {
      required: "Заполните Фамилию",
      minlength: jQuery.validator.format("Минимум {0} символа !")
    },
    name: {
      required: "Заполните Имя",
      minlength: jQuery.validator.format("Минимум {0} символа !")
    },
    region: {
      required: "Заполните Регион",
      minlength: jQuery.validator.format("Минимум {0} символа !")
    }
  }
});
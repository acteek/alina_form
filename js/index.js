$("#orderForm").validate({
  region: 'ru',
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
    status: "required",
    status: {
      required: true,
      minlength: 1
    },

    region: "required",
    region: {
      required: true,
      minlength: 4
    },
   
    district: "required",
    district: {
      required: true,
      minlength: 2
    },
    street: "required",
    street: {
      required: true,
      minlength: 2
    },
    house: "required",
    house: {
      required: true,
      minlength: 2,
      number: true
    },
    regionReg: "required",
    regionReg: {
      required: true,
      minlength: 4
    },
   
    districtReg: "required",
    districtReg: {
      required: true,
      minlength: 2
    },
    streetReg: "required",
    streetReg: {
      required: true,
      minlength: 2
    },
    houseReg: "required",
    houseReg: {
      required: true,
      minlength: 2,
      number: true
    },
    statusDoc: "required",
    statusDoc: {
      required: true,
      minlength: 1
    },
    numberDoc: "required",
    numberDoc: {
      required: true,
      minlength: 4,
      number: true
    },
    seriesDoc: "required",
    seriesDoc: {
      required: true,
      minlength: 3,
      number: true
    },
    dateDoc: "required",
    dateDoc: {
      required: true,
      date: true
    },    
    issuedDoc: "required",
    issuedDoc: {
      required: true,
      minlength: 10
    },
    dateAdd: "required",
    dateAdd: {
      required: true,
      date: true
    },
    childSurname: "required",
    childSurname: {
      required: true,
    },
    childName: "required",
    childName: {
      required: true,
    },
    childDateOfBirth: "required",
    childDateOfBirth: {
      required: true,
      date: true
    },

    motherSurname: "required",
    motherSurname: {
      required: true,
    },
    motherName: "required",
    motherName: {
      required: true,
    },
    motherDateOfBirth: "required",
    motherDateOfBirth: {
      required: true,
      date: true
    },
    motherSnils: "required",
    motherSnils: {
      required: true,
      number: true
    },

    fatherSurname: "required",
    fatherSurname: {
      required: true,
    },
    fatherName: "required",
    fatherName: {
      required: true,
    },
    fatherDateOfBirth: "required",
    fatherDateOfBirth: {
      required: true,
      date: true
    },
    fatherSnils: "required",
    motherSnils: {
      required: true,
      number: true
    },

    codeEstablishment: "required",
    codeEstablishment: {
      required: true,
      minlength: 2
    },
    nameEstablishment: "required",
    nameEstablishment: {
      required: true,
      minlength: 2
    },
    bankName: "required",
    bankName: {
      required: true,
      minlength: 3
    },

    bic: "required",
    bic: {
      required: true,
      number: true,
      minlength: 3
    }, 
    tin: "required",
    tin: {
      required: true,
      number: true,
      minlength: 3
    }, 
    crp: "required",
    crp: {
      required: true,
      number: true,
      minlength: 3
    },
    upload: "required",
    upload: {
      required: true,
      accept: "doc/*" 
    },            

  }
});

jQuery.extend(jQuery.validator.messages, {
    required: "Обязательное поле.",
    email: "Укажите валидный  email адресс",
    date: "Укажите валидную дату",
    number: "Только цифры",
    accept: "Приложите файл документа",
    maxlength: jQuery.validator.format("Минимум {0} символа !"),
    minlength: jQuery.validator.format("Минимум {0} символа !"),
});


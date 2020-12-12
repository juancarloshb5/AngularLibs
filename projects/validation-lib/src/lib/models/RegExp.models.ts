export const PhonePattern: RegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
export const Password6CharAlphanumericPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

export const PhonePatternToString: string = '/\\(?([0-9]{3})\\)?([ .-]?)([0-9]{3})\\2([0-9]{4})/';
  export const Password6CharAlphanumericPatternToString: string = `/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/`;

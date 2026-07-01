export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateForm(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }

  if (!formData.email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!validateEmail(formData.email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }

  if (!formData.selectedMovie) {
    errors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
  }

  return errors;
}

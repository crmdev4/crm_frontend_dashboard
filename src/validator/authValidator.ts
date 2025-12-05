export function loginValidator(email: string, password: string) {
    const errors: { email?: string; password?: string } = {};
  
    if (!email) {
      //errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      //errors.email = "Invalid email format";
    }
  
    if (!password) {
      //errors.password = "Password is required";
    } else if (password.length < 6) {
      //errors.password = "Password must be at least 6 characters";
    }
  
    return errors;
  }

  export function forgotValidator(email: string) {
    const errors: { email?: string; } = {};
  
    if (!email) {
      //errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      //errors.email = "Invalid email format";
    }
  
    return errors;
  }

export function signupValidator(phone: string, nopol: string) {
    const errors: { phone?: string; nopol?: string } = {};
  
    if (!phone) {
      //errors.phone = "Phone number is required";
    }  
  
    if (!nopol) {
      //errors.nopol = "Nopol is required";
    } else if (nopol.length < 4) {
      //errors.nopol = "Nopol must be at least 4 characters";
    }
  
    return errors;
  }
export function passwordSettingValidator(password: string, password_confirmation: string) {
    const errors: { password?: string; password_confirmation?: string } = {};
  
    if (!password) {
      //errors.password = "Password is required";
    } else if (password.length < 6) {
      //errors.password = "Password must be at least 6 characters";
    } 
  
    if (!password_confirmation) {
      //errors.password_confirmation = "Password is required";
    } else if (password_confirmation.length < 6) {
      //errors.password_confirmation = "Password must be at least 6 characters";
    } 
  
    return errors;
  }
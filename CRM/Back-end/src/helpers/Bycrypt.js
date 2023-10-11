import bcrypt from 'bcryptjs';
export async function encryptPassword(plaintextPassword) {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plaintextPassword, salt);
    return hash;
  } catch (error) {
    console.error('Error encriptando la contraseña:', error);
    throw error;
  }
}

export async function compare(textoplano,encrypt){
  return await bcrypt.compare(textoplano,encrypt);
}
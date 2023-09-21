import * as Z from 'zod';
export const UserValidation=Z.object({
    profile_photo:Z.string().url().nonempty(),
    name: Z.string().min(3).max(30),
    username: Z.string().min(3).max(30),
    bio: Z.string().min(3).max(1000),

})
import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin',
        email: 'email@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Esteban Trejos',
        email: 'eatrejosm@gmail.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'test user',
        email: 'testemail@example.com',
        password: bcrypt.hashSync('123456',10)
    },

]

export default users
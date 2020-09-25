import fs from 'fs'
import { User } from '../types/User'
import { Response, Request } from "express";

interface Context {
    USERS: User[];
    LINE: User[];
    req: Request;
    res: Response;
  }

type Handler = (args: any, ctx: Context) => void;

type Route = Record<string, { description: string; handler: Handler;}>;

export const routes :Route = {
    createUser: {
        description: "Cadastra usuário",
        handler: (args:Pick<User,"name"|"email"|"gender">,{USERS})=>{
            const user: User = {
                id: "" + Math.floor(Math.random() * 1000000) + 1,
                name: args.name,
                email: args.email,
                gender: args.gender
            }
            const foundUser = USERS.find(user=>user.email === args.email)
            if (!foundUser){
                USERS.push(user)
                fs.writeFileSync('./src/data/user.json', JSON.stringify(USERS))
                console.log(user);
                return user 
            } else{
                return (`Usuário de email ${args.email} já está cadastrado.`)
            }
            
        }
    },
    addToLine: {
        description: "Coloca um usuário na última posição da fila",
        handler: (args:Pick<User,"id">,{USERS,LINE})=>{
            const id = "" + args.id;
            const foundUser = USERS.find(user=>user.id === id)
            if(!foundUser){

                return (`Não foi encontrado um usuário de id ${id}`)

            } else{
                const alreadyInLine = LINE.findIndex(user=>user.id === id)
                // console.log(alreadyInLine);
                
                if(alreadyInLine=== -1){
                    LINE.push(foundUser);
                    const lineIndex = LINE.indexOf(foundUser);
                    fs.writeFileSync('./src/data/line.json', JSON.stringify(LINE))

                    // return (`Usuário de id ${id} adicionado à fila na posição ${lineIndex}`);
                    return ({lineIndex});
                } else {
                    return (`O Usuário de id ${id} JÁ está na fila na posição ${alreadyInLine}`);
                }
            }
        }
    },
    findPosition: {
        description: "Retorna a posição de um usuário a partir de seu email",
        handler: (args:Pick<User,"email">,{LINE})=>{
            const email = args.email;
            const foundUser = LINE.find(user=>user.email === email)

            if(!foundUser){

                return(`Usuário de email ${email} não se encontra na fila.`)
                
            } else{
                const lineIndex = LINE.indexOf(foundUser);

                return ({lineIndex})
            }

        }
    },
    showLine: {
        description: "Lista os usuários da fila e suas respectivas posições",
        handler: (args:any,{LINE})=>{
            const userList :  Omit<User, "id">[] = []
            LINE.map((user,index) => {
                const foundUser = {
                  name : user.name,
                  email: user.email,
                  gender: user.gender,
                  lineIndex :  index
                }
                userList.push(foundUser);
                 })

            return (userList);
        }
    },
    filterLine: {
        description: "Lista os usuários filtrados a partir de um parâmetro",
        handler: (args:Pick<User,"gender">,{LINE})=>{
            const userList :  Omit<User, "id">[] = []
            const gender = args.gender
            const foundUsersByGender = LINE.filter(user => user.gender === gender)

            foundUsersByGender.map((user) => {
                const foundUser = {
                  name : user.name,
                  email: user.email,
                  gender: user.gender,
                  lineIndex : LINE.indexOf(user)
                }
                userList.push(foundUser);
                 })

            return (userList)
        }
    },
    popLine: {
        description: "Tira a pessoa na primeira posição da fila",
        handler: (args:any,{LINE})=>{
            const firstUser = LINE[0]
            LINE.shift();
            fs.writeFileSync('./src/data/line.json', JSON.stringify(LINE))

            return (firstUser);
        }
    }
}
export type UserType = {
    firstName: string
    lastName:string
    age:number
}

type PhotoType = {
    large:string
    small:string
}

type ServerResponseType<D> = {
    errorCode: number
    messages: Array<string>
    data: D
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ["it", "kamasutra"],
    data: {
        firstName: "Dmitry",
        lastName: "Aleshkin",
        age:12
    }
}

const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ["it", "kamasutra"],
    data: {
        large: "Dmitry",
        small: "Aleshkin"
    }
}

type Nullable<T> = null | T

const initial = {
    age: 10,
    name: 'Dymich',
    user:null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>

}

type StateType = typeof initial

const reducer = (state:StateType = initial, action: any) =>{
    state.photo = {
        large:'',
        small:''
    };
    return state
}

type HipHop<T> = T extends 'user' ? UserType :
    T extends 'photo' ? PhotoType : number

let a: HipHop <'user'> = {
    firstName: 'Kirill',
    lastName: 'Aleshkin',
    age:30
}

let b : HipHop <'photo'> = {
    large:'',
    small: ''
}

// ===========================================================================

const obj = {
    a: {name:'Kirill'},
    b: {age:30},
    c: {site: {title:''}}
}

// type SomeType = typeof obj.a | typeof obj.b | typeof obj.c
type SomeType<T> = T extends {[key:string]: infer U} ? U : never

let HipHop: SomeType <typeof obj> = {name: 'Kirill'}
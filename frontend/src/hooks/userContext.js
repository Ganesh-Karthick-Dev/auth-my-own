const { createContext, useState } = require("react");


export const userContext = createContext()


const UserContextProvider = (props)=> {

    const [val,setVal] = useState('');

    console.log(val);

    const addUser = (userName)=> {
        setVal(userName)
    }
    const removeUser = ()=>{
        setVal('')
    }

    return (
        <>
        <userContext.Provider value={{addUser,val,removeUser}}>
            {props.children}
        </userContext.Provider>
        </>
    )

}

export default UserContextProvider ;
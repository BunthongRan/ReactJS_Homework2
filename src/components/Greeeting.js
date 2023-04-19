function UserGreeting({name}){
    return (
        <h1> Welcome back{name}</h1>
    )
}
function GuestGreeting(){
    return (
        <h1>Please sign up! </h1>
    )
}

function Greeting ({isLogin}){
    // if(isLogin){
    //     return <UserGreeting name = "Ah be"/>
    // }
    // return <GuestGreeting/>

    return isLogin ? <UserGreeting name =" Ah be" />: <GuestGreeting/>
}
export default Greeting
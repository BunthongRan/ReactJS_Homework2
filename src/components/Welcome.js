// define component
export function Welcome(props){
    return <h1>Welcome, {props.title}</h1>
}

    const Avatar = ({imageURL, size}) =>{
    return (
        <img
        style ={avatar}
        src = {imageURL}
        width = {size}
        height= {size}
        />
    )
}
 export default Avatar;

 //object stylesheet
 const avatar = {
    borderRadius: '15%',
 }



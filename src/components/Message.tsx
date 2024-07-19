function getName()
{
    return "Will Smith";
}

function Message(){
    const name = "John Doe";
    return <h1>Hello {name} and {getName()}</h1>;
}

export default Message;
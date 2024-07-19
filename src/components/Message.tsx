function getName() {
  return "Will Smith";
}

function Message() {
  const name = "John Doe";
  return (
    <h1 className="text-center">
      Hello {name} and {getName()}
    </h1>
  );
}

export default Message;

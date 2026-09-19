function User({ name, age }) {
  return (
    <p>
      {name} - {age}
    </p>
  );
}

function Props() {
  return (
    <>
      <User name="Jayesh" age={22} />
      <User name="Ram" age={23} />
    </>
  );
}

export default Props;
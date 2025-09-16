const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return (
          <p key={part.name}>
            {part.name} {part.exercises}
          </p>
        );
      })}
    </>
  );
};

const Total = ({parts}) => {
  let sum = 0;
  parts.forEach(part => {sum += part.exercises})
  return (
    <>
      <p>
        Number of exercises: {sum}
      </p>
    </>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};



export default App;

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      {part.name} {part.exercises}
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => {
        return (
          <p key={part.name}>
            <Part part={part} />
          </p>
        );
      })}
    </>
  );
};

const Total = ({ course }) => {
  let sum = 0;
  course.parts.forEach((part) => {
    sum += part.exercises;
  });
  return (
    <>
      <p>Number of exercises: {sum}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default App;

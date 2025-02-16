import useFetch from "./useFetch";

const FetchDataEffect = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const style = {
    backgroundColor: "orange",
    marginBottom: "4px",
    display: "flex",
    width: "28rem",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    borderRadius: "8px",
  };
  return (
    <div>
      <h1>len of array: {data?.length}</h1>
      {data?.map((todo, index) => (
        <div style={style} key={todo.id}>
          <h3>{todo.title}</h3>
          <span>{todo.body}</span>
        </div>
      ))}
    </div>
  );
};

export default FetchDataEffect;

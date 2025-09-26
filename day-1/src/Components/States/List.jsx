const users = [
  {
    name: "Anurag Raj",
    email: "anurag@example.com",
    country: "India"
  },
  {
    name: "Sophia Williams",
    email: "sophia@example.com",
    country: "USA"
  },
  {
    name: "Kenji Tanaka",
    email: "kenji@example.com",
    country: "Japan"
  },
  {
    name: "Maria Gonzalez",
    email: "maria@example.com",
    country: "Spain"
  },
  {
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    country: "UAE"
  }
];

const List = () => {
  return (
    <div>
      {
        users.map((i)=>{
          return <div></div>
        })
      }
    </div>
  )
}

export default List
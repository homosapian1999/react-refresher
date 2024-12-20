const App = () => {
  const name = 'John';
  const names = ['John', 'Doe', 'Jane'];
  const loggedIn = true;
  const styles = {
    color:'red',
    fontSize:'24px'
  }
  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>Hello {name}</p>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      {loggedIn && <p>Welcome back {name}</p>} 
    </>
  )
}

export default App
interface IProps {
  name: string
}

const App: React.FC<Props> = ({ name }) => (
  const [state] = useState({name: ''})

  // now you can do
  console.log(state.name) // because useState use generics and it knows the state has property name

  // you can override useState by explicitly specifying
  const [state] = useState<{fullname: string | null}>({fullname: ''})

  return <div className="App">Hello {name}</div>
)

// GENERICS IN TSX

interface FormProps<T> {
  values: T
  children: (values: T) => JSX.Element
}

// extends an empty object, you must extends something here
const Form = <T extends {}>({values, children}: FormProps<T>) => {
  return children(values)
}

const App = () => {
  return (
    <div>
    <Form values={{ firstName: 'henry' }}>
      {
        (values) => <div>{values.firstName}</div>
      }
    </Form>

    // or explicitly override
    <Form<{lastName: string | null}> values={{ lastName: 'nguyen' }}> // if you dont pass object {lastName: ...} here it's gonna show error because we explicitly specify the generics
      {
        (values) => <div>{values.lastName}</div>
      }
      
    </Form>
    </div>
  )
}

export default App

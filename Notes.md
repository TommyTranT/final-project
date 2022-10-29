Adding new data

# Server Side
server/app.js
- need to require the route
`const catsRouter = require('./routes/cats')`
- then use the router
`app.use('/cats', catsRouter)`

make a server/routes/cats.js page
copy the cats.js format.

# Client Side
client/src/App.js
- add a state
`const [cats, setCats] = useState([]);`
- use useEffect and axios get
`   useEffect(() => {
    axios.get('/cats').then(res => {
      console.log(res.data);
      setCats(res.data);
    })
  }, [])`

∂
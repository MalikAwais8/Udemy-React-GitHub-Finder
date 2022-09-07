import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
function Home() {
  return (
    //Search Component
    <>
    <UserSearch />
      <UserResults />
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
    </>
  )
}

export default Home

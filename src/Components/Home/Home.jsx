import { useGetDataQuery } from '../../Store/api'
import './home.scss'
const Home = () => {
    const {data,isLoading}=useGetDataQuery('page1.json',{refetchOnMountOrArgChanges:true})
    console.log(data,isLoading)
  return (
    <div>Home</div>
  )
}

export default Home
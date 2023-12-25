import axios from "axios";
import { useQuery } from "react-query";


const getMobiledata = () => {
  
    const { refetch, data: mobiles = [] } = useQuery({
      queryKey: ['mobiles' ],
      queryFn: async () => {
        const res = await axios.get(`https://mobile-store-server.onrender.com/user`)
  
        return res.data;
  
      },
  
    })
  
  
    return [mobiles, refetch]
  
  
};

export default getMobiledata;
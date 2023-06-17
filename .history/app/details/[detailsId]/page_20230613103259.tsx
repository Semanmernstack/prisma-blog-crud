import getDetailsId from "@/content/getDetailsId"
import { getUser } from "@/content/getUser"
import DetailsId from "@/components/DetailsId";

interface Props {
  detailsId: string
}



async function page({params}: {params:Props}) {
  const blog = await getDetailsId(params)
  const user = await getUser()
  return (
    <div>
      <DetailsId/>
    </div>
  )
}

export default page


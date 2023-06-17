import Det from "@/app/components/Det"
import getDetailsId from "@/content/getDetailsId"
import { getUser } from "@/content/getUser"


interface Props {
  detailsId: string
}



async function page({params}: {params:Props}) {
  const blog = await getDetailsId(params)
  const user = await getUser()
  return (
    <div>
      <Det
        name={blog?.name}
        description={blog?.description}
        detailsId={blog?.id}
        imageSrc={blog?.imageSrc}
      />
    </div>
  )
}

export default page


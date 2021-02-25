
import Popover from '@/components/Popover'
import Container from '@/components/Container'
import SmallButton from '@/components/SmallButton'


const dev = () => {
  return (
    <Container>
      <h3>hello world</h3>
      <Popover/>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
        gray
        </span>
      <SmallButton/>
    </Container>
  )
}

export default dev

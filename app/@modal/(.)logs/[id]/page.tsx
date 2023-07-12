import { NewLog } from '@/app/logs/[id]/NewLog'
import Modal from '@/app/_components/Modal'

export default function LogNewModal({params}: {params: {id: string}}) {
  
  return (
    <Modal>
      <NewLog />
    </Modal>
  )
}

import { NewLog } from "./NewLog";

export default function LogPage({params}: {params: {id: string}}) {
  if (params.id === 'new') return <NewLog />
  return <>{params.id}</>
}

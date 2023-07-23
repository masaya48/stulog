'use client';

import { useTransition } from "react";
import { Button } from "../_components/Button";
import { deleteLog } from './action';

export const RemoveLog = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  return (
      <Button
        type="button"
        onClick={() => {
          startTransition(async () => {
            await deleteLog(id);
          })
        }}
      >
        {isPending ? 'Sending...' : 'Delete'}
      </Button>
  )
}
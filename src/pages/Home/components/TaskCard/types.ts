import { Task } from '@src/DTOs/task'

export type TaskCardProps = {
  data: Task
  onRemove: (id: string) => void
  onComplete: (id: string) => void
}

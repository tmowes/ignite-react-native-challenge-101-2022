import { useState } from 'react'
import { Alert, FlatList, View } from 'react-native'

import { Task } from '@src/DTOs/task'

import { TagCount } from '@components/TagCount'
import { dateFormat } from '@utils/dateFormat'

import { EmptyMessage } from './components/EmptyMessage'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { TaskCard } from './components/TaskCard'
import { styles } from './styles'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  const onAddTask = (task: string) => {
    if (task.trim() === '') {
      Alert.alert('Erro', 'É necessário informar uma tarefa')
      return
    }
    const newTask = {
      id: new Date().getTime().toString(),
      task,
      isDone: false,
      createdAt: dateFormat(new Date()),
      updatedAt: dateFormat(new Date()),
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const onRemoveTask = (id: string) => {
    Alert.alert(
      'Confirmação',
      `Deseja remover a tarefa ${tasks.find((t) => t.id === id)?.task} da lista?`,
      [
        {
          text: 'Sim',
          onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  const onCompleteTask = (id: string) => {
    setTasks(
      tasks.map((draft) => {
        if (draft.id === id) {
          draft.isDone = !draft.isDone
          draft.updatedAt = dateFormat(new Date())
        }
        return draft
      }),
    )
  }

  const totalPending = tasks.filter((task) => task.isDone).length

  const totalTasks = tasks.length

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form onAdd={onAddTask} />
        <View style={styles.listHeader}>
          <TagCount title="Criadas" count={totalTasks} color="secondary_500" />
          <TagCount title="Concluídas" count={totalPending} color="primary_500" />
        </View>
        <FlatList
          data={tasks}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <TaskCard data={item} onRemove={onRemoveTask} onComplete={onCompleteTask} />
          )}
          ListEmptyComponent={<EmptyMessage />}
        />
      </View>
    </View>
  )
}

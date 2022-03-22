import React, { useState } from 'react';

type ListProps = {
  initialItems: string[]
}
export default function List({ initialItems }: ListProps) {
  const [list, setList] = useState(initialItems);
  const [newItem, setNewItem] = useState('');
  function addToList(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTimeout(() => {
      setList(state => [...state, newItem]);
    }, 500)
    setNewItem('');

  }

  function removeFromList(index: number) {

    setTimeout(() => {
      setList(state => state.filter((item, i) => i !== index));
    }, 500)


  }

  return (
    <div>
      <form onSubmit={addToList}>
        <input placeholder='Novo Item' type="text" value={newItem} onChange={event => setNewItem(event.target.value)} />
        <button type='submit' >Adicionar</button>
      </form>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => removeFromList(index)}>Remover</button>
              </li>

            )
          })
        }
      </ul>
    </div >
  )
}

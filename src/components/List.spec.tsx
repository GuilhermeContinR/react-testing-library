import React from 'react';
import { render, fireEvent, waitForElementToBeRemoved, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import List from './List';


describe('List component', () => {
  it('should render list items', async () => {
    const { getByText } = render(<List initialItems={['Guilherme', 'Teste']} />);

    expect(getByText('Guilherme')).toBeInTheDocument();
    expect(getByText('Teste')).toBeInTheDocument();

    // await rerender(<List initialItems={['Giovana']}/>);
    // debug();
   

  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]} />);

    const inputElement = getByPlaceholderText('Novo Item');
    const addButton = getByText('Adicionar');


    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);

    // debug()

    expect(await findByText('Novo')).toBeInTheDocument();
  });

  it('should be able to remove item from the list', async () => {
    const { getByText, getAllByText, debug } = render(<List initialItems={['Guilherme']} />);

    const removeButtons = getAllByText('Remover');

    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText('Guilherme');
    });

  });

});







































// test('sum', () => {
//   const { getByText,getByTestId } = render(<App/>)
//   // expect( getByText('Ola')).toBeTruthy();
//   // expect( getByText('Ola')).toBeInTheDocument();
//   // expect(getByText('Ola')).toHaveAttribute('class','test');
//   expect(getByTestId('first')).toHaveAttribute('class','test');
// })


// query -> nao falha quando nao encontra o elemento ( verificar se existe ou nao )
// get -> se nao encontra o element, ele falha . ( elemento precisa estar em tela)
// find -> parecido com o get, porém espera o elemento aparecer em tela
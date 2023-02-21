import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';
import mysql from 'mysql2/promise';

import { categories } from '../../data/categories';

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'Joe',
    password: 'passwd',
    database: 'zlotoweczka',
  });
  try {
    await connection.connect();
    console.log('Connection to database is established!');
  } catch (err) {
    console.error('Error connecting to database: ', err);
  }


type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);
  const handleAddEvent2 = async () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data Error!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Category Error!');
    }
    if(titleField === '') {
      errors.push('Title Error!');
    }
    if(valueField <= 0) {
      errors.push('Value Error!');
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      // Insert the new item into the database
      //const [rows] = await connection.execute(
        //  'INSERT INTO items (date, category, title, value) VALUES (?, ?, ?, ?)',
        //  [new Date(dateField), categoryField, titleField, valueField]
      //);
      // Call the onAdd callback
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      } as Item);
      // Clear the input fields
      clearFields();
      //await connection.end();
    }
    //await connection.end();
  };
  const handleAddEvent = () => {

    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data Error!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Category Error!');
    }
    if(titleField === '') {
      errors.push('Title Error!');
    }
    if(valueField <= 0) {
      errors.push('Value Error!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      } as Item);
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return (
      <C.Container>
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Kategoria</C.InputTitle>
          <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Tytuł</C.InputTitle>
          <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Wartość</C.InputTitle>
          <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Dodaj</C.Button>
        </C.InputLabel>
      </C.Container>
  );
}
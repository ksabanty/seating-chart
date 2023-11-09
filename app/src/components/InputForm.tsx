import React from 'react'
import { Select, TextInput, Button } from '@mantine/core';
import classes from '../styles/InputForm.module.css';

const InputForm = () => {
  return (
    <div>
      <TextInput label="Name" classNames={classes} />

        <Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={['Friends', 'Family']}
          label="Primary Group"
          classNames={classes}
        />
        <Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={['High School', 'College']}
          label="Secondary Group"
          classNames={classes}
        />
        <Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={['Guest', 'From', 'Group']}
          label="Seating Partner"
          classNames={classes}
        />
        <Button
          mt="md"
          variant="light">Add to seating chart</Button>
    </div>
  )
}

export default InputForm

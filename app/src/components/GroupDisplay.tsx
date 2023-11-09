import React from 'react'
import { Accordion } from '@mantine/core';

const groups = [
  {
    value: 'Brides Family',
    guests: ['Mom'],
  },
  {
    value: 'Grooms Family',
    guests: ['Mom'],
  },
  {
    value: 'Brides Friends',
    guests: ['Maid of Honor'],
  },
  {
    value: 'Grooms Friends',
    guests: ['Best Man'],
  },
];

const GroupDisplay = () => {
  const listItems = groups.map((group) => (
    <Accordion.Item key={group.value} value={group.value}>
      <Accordion.Control>{group.value}</Accordion.Control>
      <Accordion.Panel>{group.guests}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div>
      <Accordion>
        {listItems}
      </Accordion>
    </div>
  )
}

export default GroupDisplay

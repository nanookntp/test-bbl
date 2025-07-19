import { Button, Table, Text } from '@mantine/core';
import { useListItem } from '../../query/items';
import { useNavigate } from 'react-router-dom';

const Items = () => {
  const navigate = useNavigate();
  const { data } = useListItem();
  console.log('data', data);

  const handleAdd = () => {
    navigate('/items/new');
  }

  const rows = data?.map((val) => (
    <Table.Tr key={val.id}>
      <Table.Td>{val.name}</Table.Td>
      <Table.Td>{val.description}</Table.Td>
      {/* <Table.Td>{val.createdAt as string}</Table.Td> */}
    </Table.Tr>
  ));

  return (
    <div className="p-4">
      <Text size="xl">Items List</Text>
      <div className='flex justify-end'>
        <Button onClick={handleAdd}>Add +</Button>
      </div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Create Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default Items;

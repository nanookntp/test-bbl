import { Button, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { useCreateItems } from '../../query/items';

const Form = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },
  });

  const {mutateAsync} = useCreateItems()

  const handleBack = () => {
    navigate('/items/new');
  };

  const handleSubmit = async (data: typeof form.values) => {
    try {
      await mutateAsync({
        name:data.name,
        description:data.description
      })
      handleBack()
    } catch (error) {
      
    }
  };

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Text className="mb-4"> Add New Item</Text>
        <TextInput label="Name" {...form.getInputProps('name')} />
        <TextInput label="description" {...form.getInputProps('description')} />
        <Button type="submit">Save</Button>
      </form>
    </>
  );
};

export default Form;

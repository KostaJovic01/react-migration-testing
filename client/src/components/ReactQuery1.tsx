import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../service/helperFunctions';

export default function ReactQuery1() {
  const { data, error, isLoading, status } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      await sleep(2000);
      const response = await axios.get('http://localhost:8000/pokemon');
      return response.data;
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  function tryNewPost(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    console.log('Trying new post');
  }

  return (
    <div>
      Todo: {JSON.stringify(data)} {status}
      <button onClick={tryNewPost}>Create new Post</button>
    </div>
  );
}

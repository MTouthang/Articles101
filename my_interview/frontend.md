# 1. useEffect in React
- `useEffect` is a hook in React that is used to perform side effects in a function components. 
- it is called after the component are renders, and it allow you to perform task such as modifying the DOM, making network request, or subscribing to event listener.

```javascript
// example
import { useEffect, useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://example.com/data');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return data ? <div>{data}</div> : <div>Loading...</div>;
}

```
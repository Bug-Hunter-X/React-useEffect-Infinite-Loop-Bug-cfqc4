```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect now only runs once after the initial render
    // Correct usage with empty dependency array for side-effects
    console.log('This runs only once'); 
  }, []);

  useEffect(() => {
    // This effect runs whenever the 'count' state changes
    document.title = `Count: ${count}`;
  }, [count]);

  return <div>Count: {count}</div>;
}
```
import React, { useState, useEffect } from 'react';
import useAuth from '../../useAuth';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const { securedFetch } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      securedFetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setMessages(data);
        })
        .catch(e => {
          setLoading(false);
          // handle error
          console.log(e);
        });
    };

    fetchData();
  }, [securedFetch]);

  if (loading) {
    return (<div>Loading..</div>);
  }

  return (
    <ul>
      {messages.map(m => (
        <li key={m.body}>{m.body}</li>
      ))}
    </ul>
  );
};

export default Posts;

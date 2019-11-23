import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      This is about component <Link to="/">Home</Link>
    </div>
  );
}

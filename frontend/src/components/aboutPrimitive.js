import React from 'react';

export default function AboutPrimitive() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>What are Primitive Roots?</h2>
      <i>
      <p>
        In modular arithmetic, a <strong>primitive root</strong> of a prime number 
        <em> p</em> is any number <em> g</em> such that the powers of <em> g</em>, 
        modulo <em> p</em>, generate all the integers from 1 to <em> p</em> - 1. 
        In other words, the sequence:
      </p>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
        g^1 mod p, g^2 mod p, ..., g^(p-1) mod p
      </pre>
      <p>
        produces every integer from 1 to <em> p</em> - 1 exactly once, but in a 
        different order.
      </p>
      <h3>Example</h3>
      <p>
        For the prime number <em>7</em>, <strong>3</strong> is a primitive root because:
      </p>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
        3^1 mod 7 = 3
        3^2 mod 7 = 2
        3^3 mod 7 = 6
        3^4 mod 7 = 4
        3^5 mod 7 = 5
        3^6 mod 7 = 1
      </pre>
      <p>
        The powers of 3 modulo 7 generate all the numbers from 1 to 6.
      </p>
      </i>
    </div>
  );
}

import React from 'react';

export default function UsesOfPrimitives() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', listStyle: 'None' }}>
            <h2>Uses of Primitive Roots</h2>
            <p>
                Primitive roots play an important role in various fields of mathematics and computer science.
                They are particularly useful in areas that involve modular arithmetic. Here are some common
                applications
            </p>
            <ul>
                <li>
                    <strong>Cryptography:</strong> Primitive roots are used in cryptographic algorithms like the
                    Diffie-Hellman key exchange and the ElGamal encryption system to securely share keys between
                    parties.
                </li>
                {/* Add image here */}
                <img
                    src="/dhke.png"
                    alt="Diffie-Hellman Key Exchange"
                    style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
                />
                <p>source: Understanding Cryptography by Christof Paar & Jan Pelzl</p>
                <p>In here α is equal to 2 it is valid for the choosed prime number (29) </p>
                <p>Why Any Value Cannot Be a Primitive Root in Diffie-Hellman Key Exchange?
                    In the Diffie-Hellman Key Exchange, a primitive root is a critical component because it ensures the security and proper functioning of the algorithm.

                    A primitive root of a prime number
                    𝑝
                    p is a number
                    𝑔
                    g such that the powers of
                    𝑔
                    g modulo
                    𝑝
                    p generate all integers from
                    1
                    1 to
                    𝑝
                    −
                    1
                    p−1. If
                    𝑔
                    g is not a primitive root, the resulting values will not cover the entire range, reducing the possible keys and making the system more predictable and less secure.

                    This property is essential because the security of Diffie-Hellman relies on the difficulty of solving the Discrete Logarithm Problem. Choosing a number that is not a primitive root compromises this difficulty, potentially exposing the system to attacks.

                    To ensure maximum security,
                    𝑔
                    g must be carefully chosen as a valid primitive root of the prime number
                    𝑝
                    p, making it impossible to predict shared keys or compromise the confidentiality of communications.</p>
                <li>
                    <strong>Number Theory:</strong> Primitive roots help in understanding the structure of the
                    multiplicative group of integers modulo a prime.
                </li>
                <li>
                    <strong>Random Number Generation:</strong> They are used in the design of pseudorandom number
                    generators, which are critical for simulations and cryptography.
                </li>
                <li>
                    <strong>Coding Theory:</strong> Primitive roots are used in cyclic codes, a type of error-detecting
                    and error-correcting codes.
                </li>
                <li>
                    <strong>Secure Communication:</strong> Systems that rely on modular arithmetic for security often
                    use primitive roots to ensure unpredictable results.
                </li>
            </ul>
            <p>
                These applications demonstrate the importance of primitive roots in both theoretical and practical
                domains.
            </p>
        </div>
    );
}

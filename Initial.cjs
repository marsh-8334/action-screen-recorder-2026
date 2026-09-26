{\rtf1\ansi\ansicpg1251\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const readline = require('readline');\
\
function fibonacci(n) \{\
    const sequence = [];\
    let a = 0;\
    let b = 1;\
\
    for (let i = 0; i < n; i++) \{\
        sequence.push(a);\
        [a, b] = [b, a + b];\
    \}\
\
    return sequence;\
\}\
\
const rl = readline.createInterface(\{\
    input: process.stdin,\
    output: process.stdout\
\});\
\
rl.question('How many Fibonacci numbers do you want? ', (answer) => \{\
    const count = parseInt(answer, 10);\
\
    if (isNaN(count) || count <= 0) \{\
        console.log('Please enter a positive integer.');\
    \} else \{\
        const result = fibonacci(count);\
        console.log(`First $\{count\} Fibonacci numbers: $\{result.join(', ')\}`);\
    \}\
\
    rl.close();\
\});}
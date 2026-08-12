// Break and continue is used to control the execution of a loop

// Break means : Stop the loop completely

for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        break;
    }

    console.log(i);
}

// continue : skip the current iteration and move to the next iteration

for (let j = 1; j <= 5; j++) {

    if (j === 3) {
        continue;
    }

    console.log(j);
}
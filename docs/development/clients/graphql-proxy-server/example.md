---
sidebar_position: 7
label: "Example"
---

First of all we need to start graphql-server instance. When it'll be available let's make request

```ts
async function example() {
    const query = `query Test($storeId: String!) {
        store(storeId: $storeId) {
            key
            pubkey
            tokenProgram
        }
    }`;
    const body = {
        "operationName":"Test",
        "variables":{"storeId":"7GuKBU2Mf8hjuNBCxUpXAfSropVdxW4xCiQEkitoRxJ5"},
        "query":query
    };

    const response = await fetch("http://localhost:4000/graphql", {
        "headers": {
            "network": "devnet",
        },
        "body": JSON.stringify(body),
        "method": "POST",
    });
    const data = await response.json();
    console.log(data);
    /*
    {
        "data": {
            "store": {
            "key": 3,
            "pubkey": "7GuKBU2Mf8hjuNBCxUpXAfSropVdxW4xCiQEkitoRxJ5",
            "tokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            }
        }
        }
    */
}
example();
```

Also, it's an excellent way to try to use one of these projects for complex applications:
- [https://www.apollographql.com](Apollo Client)
- [https://www.npmjs.com/package/graphql-request](graphql-request)
- [https://www.npmjs.com/package/urql](urql)
- [https://relay.dev/](Relay)
- [https://www.npmjs.com/package/graphql-hooks](graphql-hooks)

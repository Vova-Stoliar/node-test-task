# Test task

`Launch dev server`

## API

1. `http://localhost:3001/signup`

### Request body

```javascript
{
    "email": "vova.stoliar112@gmail.com",
    "name": "Vova Stoliar 4",
    "password": "Parol@123"
}
```

### Response body

```javascript
{
    "email": "vova.stoliar112@gmail.com",
    "id": "6363a65177545166acd5aa8b",
    "name": "Vova Stoliar 4"
}
```

2. `http://localhost:3001/login`

### Request body

```javascript
{
    "email": "vova.stoliar112@gmail.com",
    "password": "Parol@123"
}
```

### Response body

```javascript
{
    "email": "vova.stoliar112@gmail.com",
    "id": "6363a65177545166acd5aa8b",
    "name": "Vova Stoliar 4"
}
```

3. `http://localhost:3001/logout`

### Request body

```javascript
{
    "email": "vova.stoliar112@gmail.com",
    "id": "6363a65177545166acd5aa8b"
}
```

### Response body - <i>only status code 204</i>

4. `http://localhost:3001/users`

### Request body

```javascript
{
    "id": "6363a65177545166acd5aa8b"
}
```

### Response body - <i>a group of users according to your rights</i>

```javascript
[
    {
        name: 'Vova Stoliar 4',
        email: 'vova.stoliar112@gmail.com',
        isAdmin: false,
        boss: null,
        id: '6363a65177545166acd5aa8b',
    },
];
```

5. `http://localhost:3001/admin` - <i>to set admin</i>

### Request body

```javascript
{
    "newAdminId": "63623a35088e61f1dbff0c46"
}
```

### Response body - <i>admin body</i>

```javascript
[
    {
        name: 'Vova Stoliar 4',
        email: 'vova.stoliar112@gmail.com',
        isAdmin: true,
        boss: null,
        id: '6363bc7dd7e387e4828d8274',
    },
];
```

6. `http://localhost:3001/admin` - <i>to change admin</i>

### Request body

```javascript
{
    "currentAdminId": "6363a65177545166acd5aa8b",
    "currentAdminPassword": "Parol@123",
    "newAdminId": "6363bc7dd7e387e4828d8274"
}
```

### Response body - <i>admin body</i>

```javascript
[
    {
        name: 'Vova Stoliar 4',
        email: 'vova.stoliar112@gmail.com',
        isAdmin: true,
        boss: null,
        id: '6363bc7dd7e387e4828d8274',
    },
];
```

7. `http://localhost:3001/users/6363bd93f949431d8c09e434` - <i>to set a new boss by a subordinate</i><br>
   `http://localhost:3001/users/:userId`

### Request body

```javascript
{
    "currentBossByUserId": "6363bd5bf949431d8c09e42d",
    "newBossByUserId": "6363bd96f949431d8c09e437"
}
```

### Response body - <i>a new boss with his subordinates</i>

```javascript
[
    {
        name: 'Vova Stoliar 2',
        email: 'vova.stoliar112@gmail.com',
        isAdmin: false,
        boss: '6363bd96f949431d8c09e437',
        accessToken: null,
        id: '6363bd93f949431d8c09e434',
    },
    {
        name: 'Vova Stoliar 3',
        email: 'vova.stoliar112@gmail.com',
        isAdmin: false,
        boss: '6363bd5bf949431d8c09e42d',
        accessToken: null,
        id: '6363bd96f949431d8c09e437',
    },
];
```

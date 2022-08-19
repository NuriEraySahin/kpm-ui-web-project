
// export async function getAllUsers() {

//     const response = await fetch('/wifi/users');
//     return await response.json();
// }

// export async function createUser(data) {
//     const response = await fetch(`/wifi/user`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }

export function isConnect() {
    return true
}
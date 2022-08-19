
export async function networkScan() {
    const response = await fetch('/networks');
    return await response.json();
}

// export async function createUser(data) {
//     const response = await fetch(`/wifi/user`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }



export async function networkScan() {
    const response = await fetch('/wifi/networks');
    return await response.json();
}


export async function getIpAddress() {
    const response = await fetch('/wifi/ipaddress');
    return await response.json();
}

export async function getCurrentWifi() {
    const response = await fetch('/wifi/status');
    return await response.json();
}

export async function connectNetwork({params}) {
    const response = await fetch(`/wifi/connect?${params.toString()}`);
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


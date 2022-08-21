export async function networkScan() {
  const response = await fetch("/wifi/networks");
  return await response.json();
}

export async function getIpAddress() {
  const response = await fetch("/wifi/ipaddress");
  return await response.json();
}

export async function getCurrentWifi() {
  const response = await fetch("/wifi/status");
  return await response.json();
}

export async function connectNetwork(creds) {
  const response = await fetch(`/wifi/connect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        creds: creds
    }),
  });
  return await response.json();
}

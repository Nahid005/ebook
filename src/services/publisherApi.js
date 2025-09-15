import { baseURL } from "@/lib/halper"

export async function getPublisher() {
  const response = await fetch(`${baseURL}/api/getpublishers`, {
    method: "POST", // ideally GET if your backend allows
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch publishers: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getPublisherDetails(id) {

    const response = await fetch(`${baseURL}/api/getpublisherdetails`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({publisherId: id})
    })

    if(!response.ok) {
        throw new Error(`Failed to fetch publishers details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}
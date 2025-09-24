import { baseURL } from "@/lib/halper"

export async function getPublisher() {
  try {
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
  }catch(error) {
    console.log(error);
    throw error;
  }
}

export async function getPublisherDetails(id) {
    try {
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
    }catch(error) {
      console.log(error);
      throw error;
    }
}

export async function getBooksByPublisher(id) {
  try {
    const response = await fetch(`${baseURL}/api/getbookbypublisher`, {
      method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({publisherId: id})
    })

    if(!response.ok) {
        throw new Error(`Failed to fetch publishers by books: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
    throw error;
  }
}
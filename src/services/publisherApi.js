import { baseURL } from "@/lib/halper"

//Get all publishers
export async function getPublisher() {
  try {
    const response = await fetch(`${baseURL}/api/getpublishers`, {
      method: "POST",
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
    console.log("Get all publisher error: ", error.message);
    throw error;
  }
}

//Get publisher details
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
      console.log("Get publisher details error: ", error.message);
      throw error;
    }
}

//Get publisher wise books
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
    console.log("Get publisher wise books error: ", error.message);
    throw error;
  }
}
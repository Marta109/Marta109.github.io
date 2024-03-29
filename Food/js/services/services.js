const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  });
  if (!res.ok) {
    throw new Error(`Could note fetch ${url}, status${res.status}`);
  }
  return await res.json();
};
async function getDataRequest(url) {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could note fetch ${url}, status${res.status}`);
    }
    return await res.json();
  }

export { postData, getDataRequest };

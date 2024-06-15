const SendMsg = (email, name, msg) => {
  const apiKey = process.env.REACT_APP_MAILGUN_API_KEY;
  const url = process.env.REACT_APP_MAILGUN_BASE_URL;

  const formData = new FormData();
  formData.append("from", email);
  formData.append("to", "clifford@bedaconsult.com");
  // formData.append("to", "admin@bedaconsult.com");
  formData.append("subject", "Message from BEDA Website");
  formData.append("text", msg);
  formData.append("name", name);

  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa("api:" + apiKey),
    },
    body: formData,
  })
    .then((response) => response.json())
    
};


export default SendMsg;

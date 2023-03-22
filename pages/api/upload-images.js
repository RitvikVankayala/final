export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  // await cors(req, res);

  const { images } = req.body;

  images.forEach(async (image, index) => {
    const response = await fetch(image);
    const buffer = await response.arrayBuffer();
    const binary = Buffer.from(buffer).toString("binary");

    const filename = `image-${index}.jpg`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename, binary }),
    };

    const flaskResponse = await fetch(
      "http://localhost:5000/save-image",
      requestOptions
    );
    const flaskJson = await flaskResponse.json();

    console.log(flaskJson);
  });
  res.status(200).json({ message: "Images saved successfully" });
}

import { useEffect, useState } from "react";


function Facerecognition({ imageUrl }) {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    if (!imageUrl) return;

    const requestOptions = {
      method: 'POST',
      headers: {
         "Content-Type": "application/json" ,
      },
      body: JSON.stringify({imageUrl})
    };

    fetch(`http://localhost:5000/clarifai`, requestOptions)
      .then(response => response.json())
      .then(result => {

        const regions = result.outputs?.[0]?.data?.regions || [];
               if (regions.length === 0) {
           alert("No faces detected in this image.");
  }
        regions.forEach(region => {
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);

          if (region.data?.concepts) {
            region.data.concepts.forEach(concept => {
              const name = concept.name;
              const value = concept.value.toFixed(4);
              console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
            });
          }
        });

        setBoxes(regions.map(region => region.region_info.bounding_box));
        console.log('Boxes:', regions.map(region => region.region_info.bounding_box));
        console.log('Result:', result);
      })
      .catch(error => console.log('error', error));
  }, [imageUrl]);

  return (
    <div className="flex justify-center relative">
      {imageUrl && (
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={imageUrl}
            alt="Detected" 
            id="inputImage"
            className="h-[300px] w-[250px] sm:w-[400px] rounded shadow"
          />
          {boxes.map((box, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                border: "2px solid #00FF00",
                left: `${box.left_col * 100}%`,
                top: `${box.top_row * 100}%`,
                width: `${(box.right_col - box.left_col) * 100}%`,
                height: `${(box.bottom_row - box.top_row) * 100}%`,
                pointerEvents: "none"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Facerecognition;
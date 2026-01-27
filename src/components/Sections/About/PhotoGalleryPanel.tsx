import { useEffect, useState } from "react";

import boat from "@/assets/Images/Photos/boat.jpg";
import palmer from "@/assets/Images/Photos/palmer.jpg";
import palmer_adoption from "@/assets/Images/Photos/palmer-adoption.jpg";
import on_horse from "@/assets/Images/Photos/on-horse.jpg";

export function PhotoGalleryPanel() {
  const images: Array<string> = [
    boat,
    palmer,
    palmer_adoption,
    on_horse,
    on_horse,
    on_horse,
    on_horse,
    on_horse,
    on_horse,
  ];
  const [imageIndices, setImageIndices] = useState<Array<number>>([]);
  function addIndex(newIndex: number) {
    setImageIndices((prev) => [...prev, newIndex]);
  }

  useEffect(() => {
    // TODO: Turn this off when hovering
    // TODO: Make sure that the next of images is NOT selected from one of the previous images
    const interval = setInterval(() => {
      setImageIndices([]);
      for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++)
        addIndex(Math.floor(Math.random() * images.length));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div
      // key={imageIndices}
      style={{
        display: "flex",
        width: "100%",
        padding: "0 5% 0 5%",
      }}
    >
      <div className="gallery">
        {images.map((image: string, i: number) => {
          return (
            <img
              key={image + i}
              className={i in imageIndices ? "active" : ""}
              src={image}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}

/* <img className="headshot" src="/Images/Photos/boat.jpg"></img> */
/* <img className="headshot" src="/Images/Photos/grad.jpg"></img> */
/* <img className="headshot" src="/Images/Photos/palmer-adoption.jpg"></img> */
/* <img className="headshot" src="/Images/Photos/palmer.jpg"></img> */
/* <img className="headshot" src="/Images/Photos/silver-lake.jpg"></img> */
/* <img className="headshot" src="/Images/Photos/on-horse.jpg"></img>; */

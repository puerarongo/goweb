import React, { useState } from "react";
import styles from "./Gallery.module.css";
import imageGalleryArr from "../../services/imageGalleryArr";
import Lightbox from "./lightbox/Lightbox";

const Gallery: React.FC = () => {
  const [img, setImg] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [tumbler, setTumbler] = useState<boolean>(false);

  const handleImage = (item: string, index: number) => {
    setTumbler(true);
    setImg(item);
    setIndex(index);
  };

  const handleClickLeft = () => {
    const totalLength = imageGalleryArr.length;
    if (index === 0) {
      setIndex(totalLength - 1);
      const newImg = imageGalleryArr[totalLength - 1].jpg;
      setImg(newImg);
      return;
    }
    const newIndex = index - 1;
    const currentImg = imageGalleryArr.filter((elem) => {
      return imageGalleryArr.indexOf(elem) === newIndex;
    });
    setImg(currentImg[0].jpg);
    setIndex(newIndex);
    return;
  };

  const handleClickRight = () => {
    const totalLength = imageGalleryArr.length;
    if (index + 1 >= totalLength) {
      setIndex(0);
      const newImg = imageGalleryArr[0].jpg;
      setImg(newImg);
      return;
    }
    const newIndex = index + 1;
    const currentImg = imageGalleryArr.filter((elem) => {
      return imageGalleryArr.indexOf(elem) === newIndex;
    });
    setImg(currentImg[0].jpg);
    setIndex(newIndex);
    return;
  };

  return (
    <>
      {tumbler && (
        <Lightbox
          img={img}
          setTumbler={setTumbler}
          clickLeft={handleClickLeft}
          clickRight={handleClickRight}
        />
      )}
      <section className={styles.gallery} id="cases">
        <h3 className={styles.subtitle}>This is what we do</h3>
        <h2 className={styles.title}>Business cases</h2>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto,sapiente!
        </p>
        <ul className={styles.gallery__list}>
          {imageGalleryArr.length > 0 &&
            imageGalleryArr.map((elem, index) => {
              return (
                <li key={index} className={styles.gallery__item}>
                  <picture>
                    <source
                      media="(min-width: 320px)"
                      srcSet={elem.webp + " 1x, " + elem.webp2 + " 2x"}
                      type="image/webp"
                    ></source>
                    <source
                      media="(min-width: 320px)"
                      srcSet={elem.jpg + " 1x, " + elem.jpg2 + " 2x"}
                    ></source>

                    <img
                      className={styles.image}
                      src={elem.jpg}
                      alt={"gallery" + (index + 1)}
                      onClick={() => handleImage(elem.jpg, index)}
                    />
                  </picture>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Gallery;

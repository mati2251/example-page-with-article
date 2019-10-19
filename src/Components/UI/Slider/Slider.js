import React, {useState} from 'react'
import img1 from '../../../assets/1.jpg';
import img2 from '../../../assets/2.jpg';
import img3 from '../../../assets/3.jpg';
import img4 from '../../../assets/4.jpeg'
import img5 from '../../../assets/5.jpeg'
import styles from './Slider.module.scss'

const Slider = () => {
    const images = [img1, img2, img3, img4, img5];
    const [i, setI] = useState(0);
    const order = (number) =>{
        if(number>images.length-1){
            number-=images.length;
        }
        const left = (number * 100 - 200).toString()+"%";
        let transition;
        if(number !== 0){
           transition = {transition: "2s ease all"}
        }
        return {left: left, ...transition};
    };
    const nextHandler = () => {
        if(i!==images.length-1) {
            setI(i + 1);
        }else {
            setI(i - images.length+1)
        }
    };

    const imagesJSX = images.map( (image, index) => {
            return <img src={image} className={styles.image} key={index} style={order(i+index)} alt="From Slider"/>
        }
    );

    setTimeout(nextHandler, 3000);

    return (
      <div className={styles.container}>
          {imagesJSX}
      </div>
    );
};

export default Slider;
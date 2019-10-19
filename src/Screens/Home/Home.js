import React from 'react';
import styles from './Home.module.scss';
import Slider from '../../Components/UI/Slider/Slider';


const Home = () => {

    return (
        <div className={styles.container}>
            <header className={styles.header}>Lorem Ipsum</header>
            <div className={styles.slider}>
                <Slider/>
            </div>
            <div className={styles.container}>
                <main className={styles.main}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet eleifend dui, quis vehicula
                    orci. Aenean aliquet dui et velit molestie, et rutrum leo tincidunt. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. In feugiat suscipit ante quis mattis. In
                    feugiat orci at ipsum dictum ullamcorper. Aliquam a nunc sit amet libero consequat sagittis. Aliquam
                    nibh enim, rutrum non ultrices at, rhoncus sed nisl. Nullam varius faucibus elit, nec dignissim
                    ligula scelerisque in. Morbi massa ex, accumsan ut nisl a, consequat sodales tellus. Phasellus vel
                    luctus turpis. Sed gravida enim ac metus eleifend, vitae pellentesque lectus venenatis. Sed commodo
                    vitae turpis sit amet maximus. Aliquam venenatis, urna vitae efficitur faucibus, ante orci luctus
                    augue, sit amet blandit tellus libero in velit. Etiam finibus eros vel sollicitudin posuere.
                    Proin eu nulla eget turpis convallis aliquet in nec erat. Donec efficitur diam imperdiet tincidunt
                    semper. Morbi cursus enim odio, volutpat tempus ligula vestibulum vitae. Integer lacus purus, dictum
                    a ultrices et, dictum et augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
                    facilisis vulputate mattis. In hac habitasse platea dictumst. Praesent vehicula sollicitudin turpis
                    eget sagittis. Sed scelerisque massa a nunc tristique faucibus. Etiam eros orci, gravida ut
                    sollicitudin eget, vehicula vel nisi. Nullam neque tortor, interdum eu pretium ut, ullamcorper eu
                    mi. Sed a dolor blandit, tempor ipsum ut, sagittis erat. Etiam enim justo, aliquet id elementum at,
                    malesuada vitae justo.
                    Aenean eros neque, molestie ac ullamcorper vitae, rutrum eget mauris. Mauris metus velit, porta quis
                    hendrerit nec, commodo eu tortor. Nunc vulputate enim at ultricies viverra. Quisque malesuada sapien
                    eget ullamcorper pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    elementum, metus non pretium pharetra, erat neque congue erat, a suscipit leo sapien a leo. Donec
                    varius, turpis in egestas lacinia, augue nulla lobortis nisi, eu efficitur tellus felis et arcu.
                    Mauris fermentum in libero non eleifend. Nunc accumsan erat eu nunc bibendum, vel suscipit sem
                    semper. Etiam ut rhoncus purus. Integer diam libero, aliquet porttitor lacus at, bibendum pharetra
                    odio. Fusce tincidunt facilisis nisi eu ornare.
                    Maecenas nulla massa, convallis sed consequat ac, interdum a magna. Mauris eros justo, commodo eget
                    ultrices a, consectetur ut ipsum. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Phasellus eleifend, mauris quis interdum facilisis, odio sem
                    faucibus odio, eu mollis leo turpis ac tellus. Sed id finibus nisl. Aenean fermentum eleifend
                    congue. Curabitur ut maximus est. Fusce dolor tellus, volutpat sit amet augue sed, imperdiet congue
                    ipsum. Aenean vitae ligula nec metus placerat tristique. Cras a massa libero. Aliquam erat volutpat.
                    Nullam diam mi, pulvinar vel placerat vitae, posuere in enim. Morbi et odio non sem maximus interdum
                    vitae at ipsum. Duis vel molestie nisl, sed malesuada enim. Nullam dictum lectus urna, sed ornare
                    ante accumsan aliquam. Cras lacinia massa orci, nec lacinia enim varius auctor. Mauris tempus
                    egestas euismod. Pellentesque mollis purus id diam hendrerit, ac pellentesque leo pulvinar.
                </main>
            </div>
        </div>
    )
};

export default Home;
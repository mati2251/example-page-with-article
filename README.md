# Example Page
This is my example page to practice. I use react and firebase. This page have section with article. You can add article use [admin panel](https://github.com/mati2251/admin-panel-example-page).
## Page look
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/1.png)
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/2.png)
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/3.png)
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/4.png)
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/5.png)
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/6.png)
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/7.png)
![Look photo](https://raw.githubusercontent.com/mati2251/example-page-with-article/master/.github/8.png)
## Customise Page 
### Change Firebase Config
You can change in file [src/FirebaseConnect/FirebaseConnect.js](https://github.com/mati2251/example-page-with-article/blob/master/src/FirebaseConnect/FirebaseConnect.js)
### Change Photo From Slider
You can change photo in directory assets and in file [src/Components/UI/Slider/Slider.js](https://github.com/mati2251/example-page-with-article/blob/master/src/Components/UI/Slider/Slider.js) add import and add to array this import
Example 
```:js
import img from '../../../assets/5.jpeg';

const images = [... , img] 
```
### Change Name
You can change name in [index.html](https://github.com/mati2251/example-page-with-article/blob/master/public/index.html), [package.json](https://github.com/mati2251/example-page-with-article/blob/master/package.json) and [manifest.json](https://github.com/mati2251/example-page-with-article/blob/master/public/manifest.json)
### Change Text 
You can change text in all screen in directory [src/Screens](https://github.com/mati2251/example-page-with-article/tree/master/src/Screens)

## Author 
[Mateusz Karłowski](https://github.com/mati2251/)

## License
**GNU General Public License v3.0**
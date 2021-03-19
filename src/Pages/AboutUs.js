import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div className='About'>
                <h1>About us</h1>
                <p>
                    Donec sollicitudin, ex nec mattis rutrum, nulla turpis ornare purus, ut dapibus sapien est et ipsum. Maecenas iaculis nec arcu in pulvinar. Proin sed nisl elit. Nunc efficitur, dui at fermentum lacinia, quam ipsum vestibulum eros, ac egestas ipsum felis ut dolor. Quisque sagittis magna nec orci euismod, vitae consectetur enim porttitor. Vestibulum feugiat ante lacinia ex pharetra ornare. Cras mi erat, hendrerit ut nibh sit amet, faucibus elementum velit. Donec nulla nulla, eleifend et euismod ac, facilisis sit amet odio.
                </p>
                <p>
                    Nullam dignissim arcu quis est vestibulum pulvinar in ut augue. Maecenas consectetur sed urna eget iaculis. Pellentesque sagittis dignissim cursus. Mauris suscipit turpis eget lacus ullamcorper, ut eleifend mi pharetra. Pellentesque tristique neque at mauris rhoncus dictum. Donec lacinia vehicula nibh. Aliquam eu lobortis dolor. Sed purus risus, faucibus et vestibulum et, fringilla sed risus. Nam massa mauris, dictum nec tristique quis, interdum at nisi.
                </p>
                <div>
                    <img src={officeSpace} alt="office space"/>
                </div>
                <p>
                    Cras varius, erat eu aliquam pellentesque, arcu ante tempus mi, a tincidunt neque diam cursus ex. Nunc eget lectus a ligula interdum congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi porta ante eu vehicula rhoncus. Duis hendrerit quis magna nec finibus. Integer magna ante, posuere non elit id, elementum tristique tortor. Pellentesque lacinia at erat ut commodo. In vitae augue nec nibh accumsan tincidunt. Donec lacinia nunc id finibus laoreet. Integer nibh mauris, volutpat sed ipsum eget, gravida mattis ex. Nunc dignissim dignissim nunc sit amet facilisis. In egestas ipsum interdum odio venenatis egestas. Donec ullamcorper metus sapien, eu sollicitudin lacus tincidunt nec. Sed pretium nibh vitae mi interdum, at tempor sem vulputate. Aenean consectetur fermentum ex in lacinia.
                </p>

                <div>
                    <h2>Neque porro quisquam est qui dolorem:</h2>
                    <ul>
                        <li>Aenean eu lectus vitae ligula mattis tempor</li>
                        <li>Pellentesque semper erat cursus suscipit tristique</li>
                        <li>Fusce commodo orci lobortis molestie tempor</li>
                        <li>Vivamus lobortis ante quis justo dignissim, quis rutrum urna eleifend</li>
                    </ul>
                    <p>
                        Proin iaculis scelerisque dolor, at suscipit purus aliquet varius. Cras sit amet lacinia neque. Duis vel augue a sapien malesuada egestas. Nullam eu luctus diam. Morbi pharetra id neque vitae scelerisque. Aliquam erat volutpat. Proin placerat ac nisi sed molestie. Fusce auctor finibus feugiat.
                    </p>
                    <p>
                        Nam et est tempor, lacinia ligula eu, aliquet lorem. Pellentesque venenatis fringilla mauris, ac imperdiet nulla fringilla in. Curabitur neque massa, interdum ac eros nec, ullamcorper viverra ante. Sed molestie nulla non dapibus venenatis. Vestibulum laoreet quis ligula vel fringilla. Morbi efficitur ultrices ligula. Morbi a quam leo. Sed malesuada, arcu non laoreet vulputate, augue magna molestie dui, sed consequat leo ipsum sit amet enim. Donec tincidunt odio est, a euismod ligula tempus nec. Pellentesque ornare, odio eget tempus tincidunt, lorem orci vestibulum quam, quis pellentesque mauris lectus sodales felis. Mauris in nisl non nunc sagittis volutpat. Ut finibus nibh sed tincidunt tempor. Fusce at urna dolor. Nulla nibh ante, rutrum nec arcu scelerisque, consectetur dictum sapien.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutUs

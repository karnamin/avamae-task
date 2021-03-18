import React, { Component } from 'react'

import officeImg from '../Resources/officeSpace1.jpg'

class Homepage extends Component {
    render() {
        return (
            <div className='Homepage'>
                <div className='row withMargin'>
                    <div className="column">
                        <h2>Praesent luctus facilisis nulla, et lacinia eros</h2>
                        <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean aliquam odio a mauris mattis, vel lobortis est eleifend. In luctus urna ut posuere tincidunt. In porta fringilla sapien, vitae tristique mi varius at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae congue turpis. Etiam vulputate placerat maximus.
                        </p>
                        <ul>
                            <li>Nulla et diam convallis, imperdiet odio sit amet, viverra est</li>
                            <li>Vestibulum at magna tempus, vehicula eros vitae, cursus odio</li>
                            <li>Sed fringilla neque sit amet metus convallis, a suscipit lectus sagittis</li>
                            <li>Cras id odio quis purus tempor laoreet</li>
                        </ul>
                    </div>
                    <div className="column">
                        <img src={officeImg} alt="office"/>
                    </div>
                </div>
                <div className='row imgBackground'>
                    <div className="column marginColLeft">
                        <h2>Praesent luctus facilisis nulla, et lacinia eros</h2>
                        <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean aliquam odio a mauris mattis, vel lobortis est eleifend. In luctus urna ut posuere tincidunt. In porta fringilla sapien, vitae tristique mi varius at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae congue turpis. Etiam vulputate placerat maximus.
                        </p>
                        <ul>
                            <li>Nulla et diam convallis, imperdiet odio sit amet, viverra est</li>
                            <li>Vestibulum at magna tempus, vehicula eros vitae, cursus odio</li>
                            <li>Sed fringilla neque sit amet metus convallis, a suscipit lectus sagittis</li>
                            <li>Cras id odio quis purus tempor laoreet</li>
                        </ul>
                    </div>
                    <div className="column marginColRight">
                    </div>
                </div>
                <div className='withMargin'>
                    <div className='heading'>
                        <h2>Praesent luctus facilisis nulla, et lacinia eros</h2>
                    </div>
                    <div className="row">
                        <div className="column">
                            <p>
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean aliquam odio a mauris mattis, vel lobortis est eleifend. In luctus urna ut posuere tincidunt. In porta fringilla sapien, vitae tristique mi varius at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae congue turpis. Etiam vulputate placerat maximus.
                            </p>
                        </div>
                        <div className="column">
                            <p>
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean aliquam odio a mauris mattis, vel lobortis est eleifend. In luctus urna ut posuere tincidunt. In porta fringilla sapien, vitae tristique mi varius at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae congue turpis. Etiam vulputate placerat maximus.
                            </p>
                        </div>
                        <div className="column">
                            <p>
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean aliquam odio a mauris mattis, vel lobortis est eleifend. In luctus urna ut posuere tincidunt. In porta fringilla sapien, vitae tristique mi varius at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae congue turpis. Etiam vulputate placerat maximus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage

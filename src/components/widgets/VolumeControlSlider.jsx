import React, {Component} from 'react';
import { Slider, Direction } from 'react-player-controls'
class VolumeControlSlider extends Component {
    render() {
        return(
            <div>
                <Slider
                    direction={Direction.VERTICLE}
                    isEnabled
                    onIntent={intent => console.log(`hovered at ${intent}`)}
                    onIntentStart={intent => console.log(`entered with mouse at ${intent}`)}
                    onIntentEnd={() => console.log('left with mouse')}
                    onChange={newValue => console.log(`clicked at ${newValue}`)}
                    onChangeStart={startValue => console.log(`started dragging at ${startValue}`)}
                    onChangeEnd={endValue => console.log(`stopped dragging at ${endValue}`)}
                    >
                    {/* Here we render whatever we want. Nothings is rendered by default. */}
                    </Slider>
            </div>
        )
    }
};

export default VolumeControlSlider;
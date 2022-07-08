import {View, Text} from "react-native";
import PropTypes  from 'prop-types';
import styles from './style';
import {ProgressBarComponent, progressProps} from "./ProgressBarComponent";
import React from 'react';

function ProgressLabel({show, progress}) {
    return (
        show && (
            <Text style={styles.progressText}>{Math.round(progress*100)}%</Text>
        )
    )
}


function ProgressBar({progress, label}) {
    return (
        <View style={styles.progress}>
            <ProgressLabel show = {label} progress={progress}/>
            <ProgressBarComponent
                {...progressProps}
                style={styles.progress}
                progress={progress}
            />
        </View>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    label: PropTypes.bool.isRequired,
}

ProgressBar.defaultProps = {
    progress: 0,
    label: false,
}

export default ProgressBar;
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Task = ({task}) => {


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Image style={styles.image} source={{uri: task.urls.raw}}/>
                {/*<View style={styles.square}/>*/}
                <Text style={styles.itemText}>{task.alt_description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15
    }
    });
export default Task
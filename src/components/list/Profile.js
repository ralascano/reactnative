import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import like from '../../../assets/like.png';
import collection from '../../../assets/collection.png';
import photo from '../../../assets/gallery.png';
import Icon from 'react-native-vector-icons/FontAwesome';
const instagram_username = <Icon name="instagram" size={30} color="black" />;
const portfolio_url = <Icon name="globe" size={30} color="black" />;
const twitter_username = <Icon name="twitter" size={30} color="black" />;
const Profile = ({task, closeProfile}) => {


    return (
        <View style={styles.items}>
            <View style={styles.supimage}>
                <View style={styles.leftside}>
                    <Image style={styles.image} source={{uri: task.urls.raw}}/>
                </View>
                <View style={styles.rightside}>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL(task.user.portfolio_url)}>
                        {task.user.name}
                    </Text>
                    <View style={styles.redes}>
                        <Text style={{color: 'blue'}}
                              onPress={() => Linking.openURL(task.user.social.instagram_username)}>
                            {instagram_username}
                        </Text>
                        <Text style={{color: 'blue'}}
                              onPress={() => Linking.openURL(task.user.social.portfolio_url)}>
                            {portfolio_url}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerkpi} >
                <View style={styles.kpiR}>
                    <Image style={styles.image2} source={require('../../../assets/like.png')}/>
                    <Text>{task.user.total_collections}</Text>
                </View>
                <View style={styles.kpiR}>
                    <Image style={styles.image2} source={require('../../../assets/collection.png')}/>
                    <Text>{task.user.total_likes}</Text>
                </View>
                <View style={styles.kpiR}>
                    <Image style={styles.image2} source={require('../../../assets/gallery.png')}/>
                    <Text>{task.user.total_photos}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    supimage: {
        width: '100%',
        height: '100%',
        flexBasis: '70%',
        display: 'flex',
        flexDirection: 'row'
    },
    leftside: {
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightside: {
        flexBasis: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    redes: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    image2: {
        width: 20,
        height: 20
    },
    botimage: {
        flexBasis: '30%',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    kpiR: {
      width: 20
    },
    close: {
        cursor: 'pointer',
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    },
    containerkpi: {
        width: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
});

export default Profile
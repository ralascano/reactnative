import React, {useEffect, useState} from "react";
import {
    Alert,
    FlatList,
    Keyboard,
    Modal,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Task from "./Task";
import Profile from "./Profile";

const ListComponent = () => {
    const [task, setTask] = useState();
    const [showProfile, setShowprofile] = useState(false);
    // @ts-ignore
    const [taskItems, setTaskItems] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/?client_id=ZXjOAAdwefwfYGtyhjJmAerkWnGDxNNnEwTlnHkSqk4');
            const jsonData = await response.json();
            setTaskItems(jsonData)
        } catch (error) {
            console.error('error', error)
        }
    }

    const getProfile = (task) => {
        setShowprofile(true)
        setTask(task)
        // let itemsCopy = [...taskItems];
        // itemsCopy.splice(index, 1);
        // setTaskItems(itemsCopy);
    }
    const closeProfile = () => {
        setShowprofile(false)
    }
    const Item = ({ task, i }) => {
        return (
            <TouchableOpacity style={styles.peritem} key={i} onPress={()=> {getProfile(task)}}>
                <Task task={task}/>
            </TouchableOpacity>
        );
    };

    return (
        taskItems &&
        <View style={styles.container}>
            <View style={ styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Se listan los perfiles</Text>
                <View style={styles.items}>
                    <FlatList
                        data={taskItems}
                        renderItem={({item, i}) => <Item task={item} i={i}/>}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showProfile}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowprofile(!showProfile);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            <Profile task={task} closeProfile={closeProfile}/>
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setShowprofile(!showProfile)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#E8EAED',
        marginTop: StatusBar.currentHeight || 0,
        display: "flex",

    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        height: 900
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
    },
    peritem: {

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        width: '100%',
        height: 300,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        width: '100%',
    },
});

export default ListComponent;
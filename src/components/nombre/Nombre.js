import {Button, Text, TextInput, View, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";

const Nombre = ({navigation}) => {
    const [name, setName] = useState([]);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [showName, setShowname] = useState(false);

    useEffect(() => {
        // fetchData()
    }, []);

    const handleValue1Change = (text) => {
        setValue1(text);
    };

    const handleValue2Change = (text) => {
        setValue2(text);
    };

    const handleButtonPress = () => {
        setShowname(false)
        // Do something with the input values
        console.log('Value 1:', value1);
        console.log('Value 2:', value2);
        fetchData(value1, value2)
    };

    const fetchData = async (name, lastname) => {
        try {
            const response = await fetch('http://192.168.100.7:3000/hola/' + name + "/" + lastname, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const jsonData = await response.text();
            console.log(jsonData)
            setName(JSON.parse(jsonData) )
            setShowname(true)
        } catch (error) {
            console.error('error', error)
        }
    }
    return (
        <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter value 1"
                    value={value1}
                    onChangeText={handleValue1Change}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter value 2"
                    value={value2}
                    onChangeText={handleValue2Change}
                />
                <Button title="Submit" onPress={handleButtonPress} />
            {showName &&
                <Text>Hola {name.nombre} {name.apellido}!!</Text>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
    },
});
export default Nombre;
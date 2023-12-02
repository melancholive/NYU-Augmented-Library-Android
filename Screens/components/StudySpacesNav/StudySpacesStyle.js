import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        textAlign: "center",
    },

    header: {
        backgroundColor: 'rgb(92, 92, 92)',
        padding: '1.5%',
        fontSize: '24px',
        color: 'white',
        marginTop: '20px',
        marginBottom: '10px',
    },

    spaces: {
        display: "flex",
        flex: 'wrap',
        fontSize: '16px',
    },

    buttonContainer:{
        backgroundColor: 'rgb(92, 92, 92)',
        borderRadius: '7px',
        padding: "3%",
        margin: "2.5%",
    },

});

export default styles;
import {StyleSheet} from "react-native";


const style = StyleSheet.create({
    scrollStyle: {
        height: 50,
        backgroundColor:'white',
        justifyContent:'center',
        borderBottomWidth:2,
        borderColor:'black',
        borderStyle:'solid'
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '5%',
        marginTop: '5%',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        textAlign: 'center',
        padding: 25,
        justifyContent: 'center',
    },
    title: {
        marginTop: 16,
        marginBottom: 16,
        paddingVertical: 8,
        backgroundColor: 'rgba(255,255,255,.1)',
        color: '#20232a',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonTitle: {
        paddingVertical: 8,
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
    },
});

export default style;

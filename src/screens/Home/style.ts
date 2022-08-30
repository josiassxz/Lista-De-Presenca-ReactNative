import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      backgroundColor: '#131016',
        flex: 1,
        padding: 24,
        marginTop: 48,
    },
    eventName:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate:{
      color: '#6B6B6B',
      fontSize: 16,
    },
    input:{
        flex: 1,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1F1E25',
        color: '#FFFFFF',
        padding: 16,
        fontSize: 16,
    },
    buttonText:{
        color: '#fff',
        fontSize: 24,
    },
    button:{
        width: 56,
        height: 56 ,
        borderRadius: 5,
        backgroundColor: '#31CF67', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 12,
    },
    form:{
        flexDirection: 'row',
        width: '100%',
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
      }
  })
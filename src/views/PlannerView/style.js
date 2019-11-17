import { Dimensions } from "react-native";

// Screen sizes
export const { height, width } = Dimensions.get("window");


const styles = {
    topLevelContainer: {
        backgroundColor: '#fff',
        paddingBottom: 100
    },
    topNavigationContainer: {
        backgroundColor: '#f8f8f8',
        width: width,
        position: 'absolute',
        top: 0,
        left: 0,
        height: 120,
        zIndex: 101,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 2,
        paddingLeft: 20, 
        paddingRight: 10
    },
    topNavigationAvatar: {
        marginRight: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        width: 50,
        height: 50,
        borderRadius: 25,

    },
    topNavigationLogo: {
        width: 100,
        marginTop: 25,
        resizeMode: 'contain',
    },
    sideNavigationContainer: {
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        height: height,
        width: 120,
        paddingTop: 120,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    menuItem: {
        marginTop: 30,
    },
    mainContainer: {
        flexDirection: 'row',
        marginLeft: 150,
        marginTop: 120
    },
    patientItemContainer: {
        backgroundColor: '#fff',        
        borderRadius: 15,        
        marginTop: 30,
        paddingLeft: 30,
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
        width: width*0.3-20,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec'
        
    },
    patientItemContainerSelected: {
        backgroundColor: '#f4f4f4'
    },
    patientNameText: {
        fontSize: 20,
        fontFamily: 'HelveticaNeue'
    },
    patientsContainer: {
        height: height-120,
        backgroundColor: 'red'
    },
    mainPlaceholderContainer: {
        flexDirection: 'column',
        width: width*0.6,
        maxHeight: height-120 - 220,
        paddingBottom: 300,
    },
    palceholder: {
        
        backgroundColor: '#fff',        
        borderRadius: 20,
        marginLeft: 30,
        marginTop: 30
    },
    dvhContainerItem: {
        width: width * 0.75,
        minHeight: height*0.4,
        resizeMode: 'contain' 

    },
    planReviewBottomContainer: {
        borderTopWidth: 0,
        height: 300,
        backgroundColor: 'rgba(	249, 249, 249, 1)',
        borderTopColor: '#e9e9e9',
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2.41,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 40,
        alignItems: 'flex-start',
        paddingRight: 50
    },
    planReviewBottomRejectContainer: {
        width: 140,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    planReviewBottomApproveContainer: {
        width: 140,
        borderRadius: 35,
        height: 60,
        backgroundColor: '#03a9f4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    planReviewBottomApproveText: {
        color: '#fff',
        fontFamily: 'HelveticaNeue-Bold',
    },
    planReviewBottomRejectText: {
        
    },
    
    planInformationMainContainer: {
        
    },
    planInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    badgeNewText: {
        color: '#fff',
        fontSize: 10
    },
    sidePlaceholderContainer: {
        flexDirection: 'column',
        width: width*0.3,   
        paddingRight: 20,   
        borderRightWidth: 1,
        paddingBottom: 200,
        height: height-150,
        borderRightColor: '#e9e9e9'
    },
    sidePlaceholder: {
        width: width*0.3-40,
        height: height*0.15,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginTop: 30
    },
    dvhContainer: {
        marginLeft: 30,
        marginTop: 20,
        backgroundColor: '#fff',
        width: width*0.55,    
        borderRadius: 15,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scanImage: {
        width: width*0.55,
        height: height*0.55,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    dvhImage: {
        width: width*0.55,
        minHeight: height*0.55,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    dvhGraphImage: {
        width: width*0.55,
        height: height*0.4,
        borderRadius: 20,
    },
    planInformationContainer: {
        padding: 20,    
        paddingTop: 0,            
        backgroundColor: '#fff',        
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0
    },
    planNameText: {
        fontWeight: '900',
        fontSize: 20,
        
    },
    timelineDataContainer: {
        flexDirection: 'row'
    },
    timelineDataTimeContainer: {
        borderRightWidth: 1,
        padding: 20,
        width: 120 
    },
    timelineDataInfoContainer: {
        paddingBottom: 50,
        paddingLeft: 10
    },

    badgeNew: {
        backgroundColor: '#03a9f4',
        padding: 10,
        borderRadius: 20
    },
    badgeRejected: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20
    },
    badgeReviewed: {
        backgroundColor: '#FBC02D',
        padding: 10,
        borderRadius: 20
    },
    prescText: {
        fontFamily: 'HelveticaNeue',
        padding: 40,
        fontSize: 18
    },

    blockHeader: {
        fontFamily: 'HelveticaNeue-Bold',
        fontWeight: '900'
    },
    blockHeaderContainer: {
        justifyContent: 'flex-start',        
        width: width*0.28,
        marginTop: 30,
        paddingLeft: 10,
        
    },
    blockHeaderContainerPatients: {
        justifyContent: 'flex-start',        
        width: width*0.28,
        marginTop: 30,
        marginLeft: 40,
        width: width*0.3,
        zIndex: 101,
        
    },
    modalMainContainer: {
        backgroundColor: 'transparent',
        height: height*0.8,
        width: width*0.9,
        borderRadius: 15,
    },
    scanImageModalSized: {
        height: height*0.8,
        width: width*0.9,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    scanImageModalSlider: {
        width: width*0.9,
        height: 40
    },
    menuItemContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuItemText: {
        color: '#555',
        fontFamily: 'HelveticaNeue',
        marginTop: 5
    },
    menuItemTextSelected:  {
        color: '#03a9f4',
        fontFamily: 'HelveticaNeue-Bold',
        marginTop: 5,
        fontWeight: '900'
    },
    rejectionModalMainContainer: {
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rejectionModalSubContainer: {
        backgroundColor: '#fff',
        height: height*0.7,
        width: width*0.5,
        borderRadius: 15,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notesTextHeader: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 20
    },
    notesTextField: {
        marginTop: 30,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#c1c1c1',
        width: width*0.45,
        height: height*0.5,

    },
    sendButtonContainer: {
        width: 140,
        borderRadius: 35,
        height: 60,
        backgroundColor: '#03a9f4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendButtonText: {
        color: '#fff',
        fontFamily: 'HelveticaNeue-Bold',
    },
    rejectmodalContainer: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    }

}

export default styles;
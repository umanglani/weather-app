import { StyleSheet } from 'react-native';

export const LightColors = {
    MainBackground: '#f2f2f2',
    Gray: '#afafaf',
    LightGray: '#e1e1e1',
    MidGray: '#a3a6ab',
    AppForeColor: '#000',

    GrdientColor1: '#94bbe9',
    GrdientColor2: '#eeaeca',
};

export const DarkColors = {
    MainBackground: '#f2f2f2',
    Gray: '#afafaf',
    LightGray: '#e1e1e1',
    MidGray: '#a3a6ab',
    AppForeColor: '#fff',

    GrdientColor1: '#1e2d3e',
    GrdientColor2: '#4b192f',
};

export const Colors = {
    sunrise: '#ffe000',
    sunset: '#ed626f'
}

export const globalStyles = StyleSheet.create({
    flexStart: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
    },
    flexEnd: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    vCenter: {
        alignItems: 'center'
    },
    vBaseline: {
        alignItems: 'baseline'
    },
    vEnd: {
        alignItems: 'flex-end'
    },
    textCenter: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    },
    flexRow: {
        flexDirection: 'row'
    },
    fullWidth: {
        width: '100%'
    },
    lightSmallText: {
        fontSize: 12,
        fontFamily: 'Montserrat_300Light',
    },
    lightText: {
        fontSize: 13,
        fontFamily: 'Montserrat_300Light',
    },
    lightBig: {
        fontSize: 32,
        fontFamily: 'Montserrat_300Light',
    },
    lightMedium: {
        fontSize: 18,
        fontFamily: 'Montserrat_300Light',
    },
    bigTitle: {
        fontSize: 32,
        fontFamily: 'Montserrat_700Bold',
    },
    mediumTitle: {
        fontSize: 22,
        fontFamily: 'Montserrat_700Bold',
    },
    regularTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
    },
    regularText: {
        fontSize: 15,
        fontFamily: 'Montserrat_400Regular',
    },
    gray: {
        color: LightColors.Gray
    },
    icon: {
        fontSize: 17
    },
    padding15: {
        padding: 15
    },
    separator: {
        height: 1,
        // backgroundColor: Colors.BorderColor,
        marginVertical: 10
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flex5: {
        flex: 5
    },
    flex6: {
        flex: 6
    },
    flex7: {
        flex: 7
    },
    relative: {
        position: 'relative'
    },
    lightColor: {
        color: LightColors.AppForeColor
    },
    darkColor: {
        color: DarkColors.AppForeColor
    },
    uppercase: {
        textTransform: 'uppercase'
    }
});

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Main from '../../views/screens/main'
import Game from '../../views/screens/game'
import PreGame from '../../views/screens/pre_game'
import LevelOne from '../../views/screens/levels/level_01'
import LevelTwo from '../../views/screens/levels/level_02'
import LevelThree from '../../views/screens/levels/level_03'
import LevelFour from '../../views/screens/levels/level_04'
import LevelFive from '../../views/screens/levels/level_05'
import LevelSix from '../../views/screens/levels/level_06'
import LevelSeven from '../../views/screens/levels/level_07'
import LevelEight from '../../views/screens/levels/level_08'
import LevelNine from '../../views/screens/levels/level_09'

const screens = {
    PreGame: {
        screen: PreGame,
        navigationOptions: {
            title: 'Level Select',
            headerStyle: { backgroundColor: 'EEE' }
        }
    },
    Level01: {
        screen: LevelOne
    },
    Level02: {
        screen: LevelTwo
    },
    Level03: {
        screen: LevelThree
    },
    Level04: {
        screen: LevelFour
    },
    Level05: {
        screen: LevelFive
    },
    Level06: {
        screen: LevelSix
    },
    Level07: {
        screen: LevelSeven
    },
    Level08: {
        screen: LevelEight
    },
    Level09: {
        screen: LevelNine
    },
    Main: {
        screen: Main
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#252422',
        headerStyle: { backgroundColor: '#EEE', height: 60 }
    }
})

export default createAppContainer(HomeStack)

import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

function Main(props) {
    const styles = StyleSheet.create({
        main: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: props.color ?? '#ffffff',
            justifyContent: 'space-between',
        }
    });

    return (
        <SafeAreaView style={styles.main}>
            {props.children}
        </SafeAreaView>
    )
}

export { Main };


function Header(props) {
    const styles = StyleSheet.create({
        header: {
            display: 'flex',
            backgroundColor: props.color ?? '#0839fc',
            flexDirection: 'row',
            padding: 14,
            justifyContent: 'space-between'
        },

        title: {
            fontSize: 24,
        }
    });

    return (
        <View style={styles.header}>
            <Image source={props.src ?? ''} />
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    )
}

export { Header };


function Navbar(props) {
    const styles = StyleSheet.create({
        navbar: {
            backgroundColor: props.color ?? '#EDECEC',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: 6,
        }
    });

    return (
        <View style={styles.navbar}>
            {props.children}
        </View>
    )
}

export { Navbar };


function NavbarItem(props) {
    const styles = StyleSheet.create({
        NavbarItem: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
        }
    });

    return (
        <View style={styles.NavbarItem}>
            {props.children}
        </View>
    )
}

export { NavbarItem };
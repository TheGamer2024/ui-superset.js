const { Text, Stylesheet, RefreshControl } = require('react-native');

function P(props) {
    return (
        <Text numberOfLines={props.numberOfLines} style={nativehtmljs.text.p}>{props.children}</Text>
    )
}

function H1(props) {
    return (
        <Text numberOfLines={props.numberOfLines} style={nativehtmljs.text.h1}>{props.children}</Text>
    )
}

function H2(props) {
    return (
        <Text numberOfLines={props.numberOfLines} style={nativehtmljs.text.h2}>{props.children}</Text>
    )
}

function H3(props) {
    return (
        <Text numberOfLines={props.numberOfLines} style={nativehtmljs.text.h3}>{props.children}</Text>
    )
}

function H4(props) {
    return (
        <Text numberOfLines={props.numberOfLines} style={nativehtmljs.text.h4}>{props.children}</Text>
    )
}

function H5(props) {
    return (
        <Text numberOfLines={props.numberOfLines} style={nativehtmljs.text.h5}>{props.children}</Text>
    )
}

function H6(props) {
    return (
        <Text numberOfLines={props.numberOfLines} style={nativehtmljs.text.h6}>{props.children}</Text>
    )
}



const nativehtmljs = Stylesheet.create({
    text: {
        p: {
            fontSize: 16
        },
        h1: {
            fontSize: 40,
            fontWeight: 700,
        },
        h2: {
            fontSize: 30,
            fontWeight: 700,
        },
        h3: {
            fontSize: 22,
            fontWeight: 700,
        },
        h4: {
            fontSize: 19,
            fontWeight: 700,
        },
        h5: {
            fontSize: 14,
            fontWeight: 700,
        },
        h6: {
            fontSize: 9,
            fontWeight: 700,
        }
    }
});

export { nativehtmljs, P, H1, H2, H3, H4, H5, H6 };
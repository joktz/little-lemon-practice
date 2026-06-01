import React, { useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

// The list of menu items

const menuItemsToDisplay = [
    {
    title: 'Appetizers',
    data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Item = ({name, price}) => {
    return (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    )
}


export default function MenuItems() {
    const navigation = useNavigation(); 
    // Function calling for SectionList
    const renderItem = ({item}) => <Item name={item.name} price={item.price}/>

    const renderSectionHeader = ({section: {title}}) => (
        <Text style={menuStyles.sectionHeader}>{title}</Text>
    )

    const separator = () => <View style={menuStyles.separator} />

    return (
        <View style={menuStyles.container}>
            <SectionList sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={separator}
            />
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={menuStyles.buttonText} >Go back</Text>
            </Pressable>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#333333',
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: 'white', 
        fontSize: 40, 
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    sectionHeader: {
        backgroundColor: '#fbdabb',
        color: '#333333',
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20, 
    },
    separator: {
        borderBottomWidth: 1,
        borderColor:'#EDEFEE',
    },
    button: {
        fontSize: 22,
        padding: 8,
        marginVertical: 8,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
    },
    buttonText: {
        fontSize: 24,
        padding: 8,
        marginVertical: 8,
        textAlign: 'center',
        color: 'white',
    },
})
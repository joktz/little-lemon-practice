import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// The list of menu items

const menuItemsToDisplay = [
    '\n Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

export default function MenuItems() {
    return (
        <View style={menuStyles.container}>
            <ScrollView style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>
                    View Menu
                </Text>
                <Text style={menuStyles.itemText}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.9,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
    },
    headerText: {
        color: 'white', 
        fontSize: 40, 
        flexWrap: 'wrap',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 36, 
    }
})
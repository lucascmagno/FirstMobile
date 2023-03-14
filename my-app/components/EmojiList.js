import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal}){
    const [emoji] = useState([
        require('../assets/images/emoji/emoji_u1f600.png'),
        require('../assets/images/emoji/emoji_u1f601.png'),
        require('../assets/images/emoji/emoji_u1f602.png'),
        require('../assets/images/emoji/emoji_u1f603.png'),
        require('../assets/images/emoji/emoji_u1f604.png'),
        require('../assets/images/emoji/emoji_u1f605.png'),
        require('../assets/images/emoji/emoji_u1f606.png'),
        require('../assets/images/emoji/emoji_u1f607.png'),
        require('../assets/images/emoji/emoji_u1f918.png'),
        require('../assets/images/emoji/emoji_u1f923.png'),
    ]);

return (
    <FlatList
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
        data={emoji}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => {
        return (
            <Pressable
            onPress={() => {
                onSelect(item);
                onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.image} />
            </Pressable>
        );
        }}
    />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },  
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});
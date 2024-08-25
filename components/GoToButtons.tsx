import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useRef, useState } from 'react';
import Colors from '@/constants/colors';
import buttonData from '@/constants/buttonData';
import AntDesign from '@expo/vector-icons/AntDesign';
type Props = {
    onDataChanged:(data:string)=>void;
}

const GoToButtons = ({onDataChanged}: Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelectGoTo = (index: number) => {
        const selected = itemRef.current[index];
        setActiveIndex(index);
        selected?.measure((x) => {
            scrollRef.current?.scrollTo({x:x, y:0, animated:true});
        });
        onDataChanged(buttonData[index].title);
    }

    return (
        <View>
            <Text style={styles.title}>Buttons</Text>
            <ScrollView ref={scrollRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                paddingVertical: 5,
                marginBottom: 10,
                gap: 10,
            }}>
                {buttonData.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        ref={(el) => itemRef.current[index] = el} 
                        onPress={() => handleSelectGoTo(index)}
                        style={activeIndex == index ? styles.dataBtnActive : styles.dataBtn}
                    >
                        <AntDesign name={item.iconName as any} size={20} color={activeIndex == index ? Colors.white : Colors.black}/>
                        <Text 
                            style={
                                activeIndex == index 
                                ? styles.dataBtnTxtActive 
                                : styles.dataBtnTxt
                                }>
                                    {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.black,
    },
    dataBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 10,    
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    dataBtnTxt: {
        marginLeft: 5,
        fontWeight: '600',
        color: Colors.black,
    },
    dataBtnTxtActive:{
        marginLeft: 5,
        fontWeight: '600',
        color: Colors.white,
    },
    dataBtnActive:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.funPurple,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 10,    
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
        color: Colors.white,
    },
})

export default GoToButtons;
